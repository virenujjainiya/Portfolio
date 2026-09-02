import React, { useState, useRef } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { useSecretSequence } from './hooks/useSecretSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsBento from './components/ProjectsBento';
import SkillsBento from './components/SkillsBento';
import ExperienceBento from './components/ExperienceBento';
import ContactBento from './components/ContactBento';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';
import AdminToolbar from './components/AdminToolbar';
import AuthModal from './components/AuthModal';
import Spotlight from './components/Spotlight';
import CustomCursor from './components/CustomCursor';

function PortfolioContent() {
  const { data, isAdmin, isEditing, toggleEditing } = usePortfolio();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Hidden Secret Sequence Trigger: "v edit" or "vspace edit"
  useSecretSequence(['v edit', 'vspace edit'], () => {
    if (!isAdmin) {
      setIsAuthOpen(true);
    } else {
      toggleEditing();
    }
  });

  const handleNavigate = (sectionId) => {
    const map = {
      projects: projectsRef,
      experience: experienceRef,
      skills: skillsRef,
      contact: contactRef
    };
    const target = map[sectionId];
    if (target && target.current) {
      target.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] text-[#09090b] font-sans antialiased bg-grid-pattern relative">
      {/* Ambient Mouse Spotlight Follower (Teal Ambient Glow) */}
      <Spotlight />

      {/* Dynamic Fluid Interactive Cursor with Teal Hover Morphing */}
      <CustomCursor />

      {/* Editing Mode Banner (only visible when actively editing) */}
      {isEditing && (
        <div className="bg-teal-600 text-white text-xs font-mono py-1 px-4 text-center sticky top-0 z-50 flex items-center justify-center gap-2 shadow-sm font-semibold">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span>IN-PLACE EDITING ACTIVE: Click any text with a dashed border to edit. Changes save to your browser.</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar 
        onOpenCommand={() => setIsCommandOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Layout Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 relative z-10 pb-24">
        {/* 1. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Featured Projects */}
        <section ref={projectsRef} className="scroll-mt-24">
          <ProjectsBento />
        </section>

        {/* 3. Work Experience Timeline */}
        <section ref={experienceRef} className="scroll-mt-24">
          <ExperienceBento />
        </section>

        {/* 4. Technical Competencies Matrix */}
        <section ref={skillsRef} className="scroll-mt-24">
          <SkillsBento />
        </section>

        {/* 5. Contact & Credentials */}
        <section ref={contactRef} className="scroll-mt-24">
          <ContactBento />
        </section>

        {/* 6. Footer */}
        <Footer onNavigate={handleNavigate} />
      </main>

      {/* Raycast / Linear style Command Menu (Cmd + K) */}
      <CommandMenu 
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onNavigate={handleNavigate}
        projects={data.projects}
      />

      {/* Admin Authentication Modal (triggered only via secret sequence 'v edit') */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Floating Admin Toolbar (rendered ONLY when logged in) */}
      <AdminToolbar />
    </div>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <PortfolioContent />
    </PortfolioProvider>
  );
}
