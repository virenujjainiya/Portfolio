import React, { useState } from 'react';
import { Layers, Server, Database, Shield, Wrench, Plus, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

const CATEGORY_META = {
  frontend: { label: 'Frontend', icon: Layers },
  backend: { label: 'Backend', icon: Server },
  architecture: { label: 'Architecture & DB', icon: Database },
  integration: { label: 'Integration & Auth', icon: Shield },
  tools: { label: 'AI & Tools', icon: Wrench },
};

export default function SkillsBento() {
  const { data, addSkill, removeSkill, isEditing } = usePortfolio();
  const { skills } = data;
  const [activeCat, setActiveCat] = useState('all');
  const [newSkillInput, setNewSkillInput] = useState({});

  const categories = Object.keys(skills);

  const handleAddSkill = (category) => {
    const text = newSkillInput[category]?.trim();
    if (text) {
      addSkill(category, text);
      setNewSkillInput({ ...newSkillInput, [category]: '' });
    }
  };

  return (
    <div className="bento-card rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-200">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-950">Skills & Technical Competencies</h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-0.5">Core technologies across full-stack production systems.</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCat('all')}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              activeCat === 'all'
                ? 'bg-zinc-950 text-white shadow-sm'
                : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/80 border border-zinc-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all capitalize ${
                activeCat === cat
                  ? 'bg-zinc-950 text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/80 border border-zinc-200'
              }`}
            >
              {CATEGORY_META[cat]?.label || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items]) => {
          if (activeCat !== 'all' && activeCat !== category) return null;
          const meta = CATEGORY_META[category] || { label: category, icon: Layers };
          const Icon = meta.icon;

          return (
            <div key={category} className="p-4 rounded-xl bg-zinc-50/80 border border-zinc-200 hover:border-zinc-300 hover:shadow-sm transition-all duration-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                <Icon size={16} className="text-teal-600" />
                <span>{meta.label}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {items.map((skill, idx) => (
                  <span
                    key={skill + idx}
                    className="group/skill relative px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-white text-zinc-800 border border-zinc-200/90 hover:border-teal-500 hover:text-teal-700 hover:bg-teal-50/40 hover:-translate-y-0.5 shadow-2xs transition-all flex items-center gap-1.5 cursor-default"
                  >
                    <span>{skill}</span>
                    {isEditing && (
                      <button
                        onClick={() => removeSkill(category, idx)}
                        className="text-red-500 hover:text-red-700 ml-0.5"
                        title="Remove skill"
                      >
                        <X size={12} />
                      </button>
                    )}
                  </span>
                ))}
              </div>

              {isEditing && (
                <div className="flex items-center gap-1.5 pt-2">
                  <input
                    type="text"
                    value={newSkillInput[category] || ''}
                    onChange={(e) =>
                      setNewSkillInput({ ...newSkillInput, [category]: e.target.value })
                    }
                    onKeyDown={(e) => e.key === 'Enter' && handleAddSkill(category)}
                    placeholder="Add new skill..."
                    className="flex-1 bg-white border border-zinc-300 rounded px-2 py-1 text-xs text-zinc-900 focus:outline-none focus:border-teal-600"
                  />
                  <button
                    onClick={() => handleAddSkill(category)}
                    className="p-1 rounded bg-teal-600 hover:bg-teal-700 text-white text-xs"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
