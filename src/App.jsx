import React, { useState, useRef } from 'react';
import { RESUME_DATA } from './data/resume';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsBento from './components/ProjectsBento';
import BenchmarkTerminal from './components/BenchmarkTerminal';
import SkillsBento from './components/SkillsBento';
import ExperienceBento from './components/ExperienceBento';
import ContactBento from './components/ContactBento';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';

function App() {
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

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
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] font-sans antialiased bg-grid-pattern relative">
      {/* Top Navbar */}
      <Navbar 
        onOpenCommand={() => setIsCommandOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Layout Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">
        {/* 1. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. Interactive Terminal & Optimization Benchmark */}
        <section>
          <BenchmarkTerminal />
        </section>

        {/* 3. Featured Projects */}
        <section ref={projectsRef} className="scroll-mt-24">
          <ProjectsBento projects={RESUME_DATA.projects} />
        </section>

        {/* 4. Technical Competencies Matrix */}
        <section ref={skillsRef} className="scroll-mt-24">
          <SkillsBento skills={RESUME_DATA.skills} />
        </section>

        {/* 5. Work Experience Timeline */}
        <section ref={experienceRef} className="scroll-mt-24">
          <ExperienceBento experience={RESUME_DATA.experience} />
        </section>

        {/* 6. Contact & Credentials */}
        <section ref={contactRef} className="scroll-mt-24">
          <ContactBento 
            personal={RESUME_DATA.personal} 
            education={RESUME_DATA.education} 
          />
        </section>

        {/* 7. Footer */}
        <Footer onNavigate={handleNavigate} />
      </main>

      {/* Raycast / Linear style Command Menu (Cmd + K) */}
      <CommandMenu 
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onNavigate={handleNavigate}
        projects={RESUME_DATA.projects}
      />
    </div>
  );
}

export default App;
