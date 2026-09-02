import React, { createContext, useContext, useState, useEffect } from 'react';
import { RESUME_DATA } from '../data/resume';
import { hashPassword, DEFAULT_HASHES } from '../utils/crypto';

const PortfolioContext = createContext(null);

const STORAGE_KEY = 'portfolio_custom_data_v2'; // Bumped key to refresh user browser cache
const AUTH_KEY = 'portfolio_admin_auth_v1';
const PWD_HASH_KEY = 'portfolio_admin_pwd_hash_v1';

export function PortfolioProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure role is updated to Software Engineer even if old cache exists
        if (parsed?.personal?.role === 'Full-Stack Engineer' || !parsed?.personal?.role) {
          parsed.personal.role = 'Software Engineer';
        }
        return parsed;
      }
    } catch (e) {
      console.error('Failed to load saved portfolio data', e);
    }
    return RESUME_DATA;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return localStorage.getItem(AUTH_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to persist portfolio data', e);
    }
  }, [data]);

  const login = async (password) => {
    try {
      const inputHash = await hashPassword(password);
      const customHash = localStorage.getItem(PWD_HASH_KEY);

      const isValid = (customHash && inputHash === customHash) || DEFAULT_HASHES.includes(inputHash);

      if (isValid) {
        setIsAdmin(true);
        setIsEditing(true);
        localStorage.setItem(AUTH_KEY, 'true');
        return true;
      }
      return false;
    } catch (err) {
      console.error('Hash error:', err);
      return false;
    }
  };

  const updateAdminPassword = async (newPassword) => {
    if (!newPassword) return;
    const newHash = await hashPassword(newPassword);
    localStorage.setItem(PWD_HASH_KEY, newHash);
  };

  const logout = () => {
    setIsAdmin(false);
    setIsEditing(false);
    localStorage.removeItem(AUTH_KEY);
  };

  const toggleEditing = () => {
    if (!isAdmin) return;
    setIsEditing((prev) => !prev);
  };

  const updatePersonal = (field, value) => {
    setData((prev) => ({
      ...prev,
      personal: {
        ...prev.personal,
        [field]: value
      }
    }));
    setHasChanges(true);
  };

  const updateExperienceItem = (id, field, value) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    }));
    setHasChanges(true);
  };

  const updateExperienceHighlight = (jobId, index, value) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id === jobId) {
          const newHighlights = [...exp.highlights];
          newHighlights[index] = value;
          return { ...exp, highlights: newHighlights };
        }
        return exp;
      })
    }));
    setHasChanges(true);
  };

  const addExperienceHighlight = (jobId) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id === jobId) {
          return {
            ...exp,
            highlights: [...exp.highlights, 'New achievement or responsibility highlight...']
          };
        }
        return exp;
      })
    }));
    setHasChanges(true);
  };

  const removeExperienceHighlight = (jobId, index) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) => {
        if (exp.id === jobId) {
          return {
            ...exp,
            highlights: exp.highlights.filter((_, i) => i !== index)
          };
        }
        return exp;
      })
    }));
    setHasChanges(true);
  };

  const updateProject = (id, field, value) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      )
    }));
    setHasChanges(true);
  };

  const updateProjectHighlight = (projId, index, value) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((proj) => {
        if (proj.id === projId) {
          const newH = [...proj.highlights];
          newH[index] = value;
          return { ...proj, highlights: newH };
        }
        return proj;
      })
    }));
    setHasChanges(true);
  };

  const updateSkill = (category, index, value) => {
    setData((prev) => {
      const catList = [...prev.skills[category]];
      catList[index] = value;
      return {
        ...prev,
        skills: {
          ...prev.skills,
          [category]: catList
        }
      };
    });
    setHasChanges(true);
  };

  const addSkill = (category, newSkill) => {
    if (!newSkill) return;
    setData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: [...(prev.skills[category] || []), newSkill]
      }
    }));
    setHasChanges(true);
  };

  const removeSkill = (category, index) => {
    setData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        [category]: prev.skills[category].filter((_, i) => i !== index)
      }
    }));
    setHasChanges(true);
  };

  const resetToOriginal = () => {
    if (window.confirm('Reset all changes back to original resume?')) {
      setData(RESUME_DATA);
      localStorage.removeItem(STORAGE_KEY);
      setHasChanges(false);
    }
  };

  const exportAsFile = () => {
    const code = `export const RESUME_DATA = ${JSON.stringify(data, null, 2)};\n`;
    const blob = new Blob([code], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'resume.js';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        isAdmin,
        isEditing,
        hasChanges,
        login,
        logout,
        toggleEditing,
        updateAdminPassword,
        updatePersonal,
        updateExperienceItem,
        updateExperienceHighlight,
        addExperienceHighlight,
        removeExperienceHighlight,
        updateProject,
        updateProjectHighlight,
        updateSkill,
        addSkill,
        removeSkill,
        resetToOriginal,
        exportAsFile
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within PortfolioProvider');
  }
  return context;
}
