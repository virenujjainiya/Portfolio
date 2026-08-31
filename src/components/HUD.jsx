import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { RESUME_DATA } from '../data/resume';
import TopNav from './TopNav';
import Header from './Header';
import ServiceLogs from './ServiceLogs';
import ProjectVault from './Projects';
import TechRadar from './TechRadar';
import { sound } from '../utils/soundEffects';

export default function HUD({ onReboot }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const overviewRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);
  const skillsRef = useRef(null);

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    sound.muted = nextMute;
    if (!nextMute) {
      sound.playBeep(700, 0.05);
    }
  };

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const map = {
      overview: overviewRef,
      experience: expRef,
      projects: projRef,
      skills: skillsRef
    };
    const target = map[sectionId];
    if (target && target.current) {
      target.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="min-h-screen bg-[#04060f] text-white flex flex-col relative selection:bg-arc-cyan selection:text-stark-black"
    >
      {/* Background Matrix & Scanline Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-arc-cyan/15 to-transparent animate-scanline" />
      </div>

      {/* 1. Top HUD Navigation Bar */}
      <TopNav 
        isMuted={isMuted}
        onToggleMute={toggleMute}
        onReboot={onReboot}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 2. Main Body Container */}
      <main className="relative z-10 max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 space-y-8 flex-1">
        {/* Section: Overview / Identity Dossier */}
        <div ref={overviewRef}>
          <Header 
            personal={RESUME_DATA.personal} 
            education={RESUME_DATA.education}
          />
        </div>

        {/* Section: Tech Radar & Projects (Interactive Dual HUD) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tech Radar Column (5 cols) */}
          <div ref={skillsRef} className="lg:col-span-5 lg:sticky lg:top-20 space-y-6">
            <TechRadar 
              skills={RESUME_DATA.skills}
              selectedSkill={selectedSkill}
              onSelectSkill={setSelectedSkill}
            />
          </div>

          {/* Service Logs & Projects Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Service Logs */}
            <div ref={expRef}>
              <ServiceLogs experience={RESUME_DATA.experience} />
            </div>

            {/* Project Vault */}
            <div ref={projRef}>
              <ProjectVault 
                projects={RESUME_DATA.projects}
                selectedSkill={selectedSkill}
              />
            </div>
          </div>
        </div>
      </main>

      {/* 3. Bottom Stark Industries Status Footer */}
      <footer className="relative z-10 border-t border-arc-cyan/20 bg-[#04060f]/80 backdrop-blur-sm py-4 px-6 text-center text-xs font-mono text-gray-500 flex flex-wrap justify-between items-center max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-arc-cyan/70">
          <span className="w-2 h-2 rounded-full bg-arc-cyan animate-pulse" />
          <span>STARK_SYS // ALL SUBSYSTEMS NOMINAL</span>
        </div>
        <div>
          <span>VIREN UJJAINIYA • FULL-STACK ENGINEER PORTFOLIO</span>
        </div>
        <div className="text-gray-400">
          <span>SEC_LEVEL_07 // ENCRYPTED</span>
        </div>
      </footer>

      {/* Corner UI Brackets Fixed to Screen */}
      <div className="fixed top-16 left-0 w-12 h-12 border-t-2 border-l-2 border-arc-cyan/40 m-2 pointer-events-none hidden md:block" />
      <div className="fixed top-16 right-0 w-12 h-12 border-t-2 border-r-2 border-arc-cyan/40 m-2 pointer-events-none hidden md:block" />
      <div className="fixed bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-arc-cyan/40 m-2 pointer-events-none hidden md:block" />
      <div className="fixed bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-arc-cyan/40 m-2 pointer-events-none hidden md:block" />
    </motion.div>
  );
}
