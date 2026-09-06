import React, { useState, useRef } from 'react';
import { PortfolioProvider, usePortfolio } from './context/PortfolioContext';
import { useSecretSequence } from './hooks/useSecretSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsBento from './components/ProjectsBento';
import EngineeringLabs from './components/EngineeringLabs';
import RemoteReadinessBento from './components/RemoteReadinessBento';
import SkillsBento from './components/SkillsBento';
import ExperienceBento from './components/ExperienceBento';
import ContactBento from './components/ContactBento';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';
import AdminToolbar from './components/AdminToolbar';
import AuthModal from './components/AuthModal';
import RecruiterModal from './components/RecruiterModal';
import Spotlight from './components/Spotlight';
import CustomCursor from './components/CustomCursor';

function PortfolioContent() {
  const { data, isAdmin, isEditing, toggleEditing, toggleTheme } = usePortfolio();
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);

  const projectsRef = useRef(null);
  const labsRef = useRef(null);
  const remoteRef = useRef(null);
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
      'engineering-labs': labsRef,
      'remote-readiness': remoteRef,
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
    <div className="min-h-screen bg-[#f0f2f5] dark:bg-[#090a0f] text-[#09090b] dark:text-[#f4f4f5] font-sans antialiased bg-grid-pattern relative transition-colors duration-300">
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

      {/* Top Navbar with Theme Switcher & Recruiter Fast-Track */}
      <Navbar 
        onOpenCommand={() => setIsCommandOpen(true)}
        onNavigate={handleNavigate}
        onOpenRecruiterModal={() => setIsRecruiterOpen(true)}
      />

      {/* Main Layout Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-24 relative z-10 pb-24">
        {/* 1. Split Hero Section with Live Telemetry Console */}
        <Hero 
          onNavigate={handleNavigate} 
          onOpenRecruiterModal={() => setIsRecruiterOpen(true)}
        />

        {/* 2. Featured Projects */}
        <section ref={projectsRef} className="scroll-mt-24">
          <ProjectsBento />
        </section>

        {/* 3. Work Experience Timeline (Syncware & Everywatch CMS) */}
        <section ref={experienceRef} className="scroll-mt-24">
          <ExperienceBento />
        </section>

        {/* 4. Live Interactive Engineering Labs (SQL, GraphQL, 10k Data Grid) */}
        <section ref={labsRef} className="scroll-mt-24">
          <EngineeringLabs />
        </section>

        {/* 5. Remote Readiness & Global Collaboration Bento */}
        <section ref={remoteRef} className="scroll-mt-24">
          <RemoteReadinessBento />
        </section>

        {/* 6. Technical Competencies Matrix */}
        <section ref={skillsRef} className="scroll-mt-24">
          <SkillsBento />
        </section>

        {/* 7. Contact & Credentials */}
        <section ref={contactRef} className="scroll-mt-24">
          <ContactBento />
        </section>

        {/* 8. Footer */}
        <Footer onNavigate={handleNavigate} />
      </main>

      {/* Raycast / Linear style Command Menu (Cmd + K) */}
      <CommandMenu 
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onNavigate={handleNavigate}
        onOpenRecruiterModal={() => setIsRecruiterOpen(true)}
        toggleTheme={toggleTheme}
        projects={data.projects}
      />

      {/* Recruiter Fast-Track Modal (30s snapshot & 1-click ATS copy) */}
      <RecruiterModal
        isOpen={isRecruiterOpen}
        onClose={() => setIsRecruiterOpen(false)}
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
