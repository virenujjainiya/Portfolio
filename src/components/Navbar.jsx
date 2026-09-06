import React, { useState } from 'react';
import { Command, Pencil, FileDown, Sun, Moon, Zap, Menu, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

function GithubIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Navbar({ onOpenCommand, onNavigate, onOpenRecruiterModal }) {
  const { isAdmin, isEditing, toggleEditing, data, theme, toggleTheme } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/85 dark:bg-[#090a10]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-zinc-800 transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Left: Avatar & Identity */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-zinc-950 dark:bg-teal-500/10 border border-zinc-800 dark:border-teal-500/30 flex items-center justify-center font-bold text-sm text-teal-400 shadow-sm shrink-0">
            VU
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-zinc-900 dark:text-white whitespace-nowrap">
                {data.personal.name}
              </span>
              
              {/* Full badge on xl+, compact dot on smaller screens */}
              <span className="hidden xl:inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 whitespace-nowrap shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                Available for hire
              </span>

              <span className="hidden sm:inline-flex xl:hidden items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800 whitespace-nowrap shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                Available
              </span>
            </div>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 hidden sm:block font-medium leading-tight whitespace-nowrap">
              Software Engineer
            </p>
          </div>
        </div>

        {/* Center: Desktop Navigation Links (xl and up) */}
        <nav className="hidden xl:flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 shrink-0">
          <button
            onClick={() => handleNavClick('projects')}
            className="px-2.5 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
          >
            Projects
          </button>
          <button
            onClick={() => handleNavClick('experience')}
            className="px-2.5 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
          >
            Experience
          </button>
          <button
            onClick={() => handleNavClick('engineering-labs')}
            className="px-2.5 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>Labs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
          </button>
          <button
            onClick={() => handleNavClick('remote-readiness')}
            className="px-2.5 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
          >
            Remote
          </button>
          <button
            onClick={() => handleNavClick('skills')}
            className="px-2.5 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
          >
            Skills
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-2.5 py-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-teal-600 dark:hover:text-teal-400 transition-colors whitespace-nowrap"
          >
            Contact
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Recruiter Fast-Track Header Pill */}
          <button
            onClick={onOpenRecruiterModal}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 text-teal-700 dark:text-teal-300 border border-teal-500/30 text-xs font-bold transition-all shadow-2xs hover:scale-[1.02] active:scale-95 whitespace-nowrap shrink-0"
            title="Open 30-Second Recruiter Fast-Track Packet"
          >
            <Zap size={13} className="text-teal-600 dark:text-teal-400 fill-teal-500/30 shrink-0" />
            <span>Recruiter Packet</span>
          </button>

          {/* Theme Toggle (Sun / Moon) */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-700/80 transition-all shrink-0"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={15} className="text-amber-400 shrink-0" /> : <Moon size={15} className="text-zinc-600 shrink-0" />}
          </button>

          {/* Direct Resume Download Link */}
          <a
            href="/resume.pdf"
            download="Viren_Ujjainiya_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-teal-500 text-zinc-700 dark:text-zinc-200 hover:text-teal-700 dark:hover:text-teal-300 transition-all text-xs font-bold shadow-2xs whitespace-nowrap shrink-0"
            title="Download Official PDF Resume"
          >
            <FileDown size={14} className="text-teal-600 dark:text-teal-400 shrink-0" />
            <span>Resume</span>
          </a>

          {/* Only shown if already unlocked via secret shortcut */}
          {isAdmin && (
            <button
              onClick={toggleEditing}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-mono transition-all border whitespace-nowrap shrink-0 ${
                isEditing
                  ? 'bg-teal-600 border-teal-600 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900'
              }`}
              title="Toggle Edit Mode"
            >
              <Pencil size={13} />
              <span className="hidden sm:inline">{isEditing ? 'Editing ON' : 'Editing OFF'}</span>
            </button>
          )}

          {/* Search Button (Cmd + K) */}
          <button
            onClick={onOpenCommand}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 hover:border-zinc-300 transition-all text-xs font-mono shadow-xs whitespace-nowrap shrink-0"
            title="Open Command Menu (Ctrl/Cmd + K)"
          >
            <Command size={13} className="text-zinc-500 shrink-0" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 px-1 rounded text-[10px] shadow-2xs shrink-0">
              ⌘K
            </kbd>
          </button>

          {/* GitHub & LinkedIn: Hidden on small tablets/mobile to avoid clutter */}
          <a
            href={`https://${data.personal.github}`}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors shrink-0"
            title="GitHub Profile"
          >
            <GithubIcon size={16} />
          </a>

          <a
            href={`https://${data.personal.linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="hidden lg:inline-flex p-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl transition-colors shrink-0"
            title="LinkedIn Profile"
          >
            <LinkedinIcon size={16} />
          </a>

          {/* Mobile & Tablet Hamburger Menu Button (< xl) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex xl:hidden p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors shrink-0"
            aria-label="Open Navigation Menu"
            title="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu (< xl) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white/95 dark:bg-[#0c0e17]/95 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          {/* Mobile Nav Links Grid */}
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
            <button
              onClick={() => handleNavClick('projects')}
              className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-left text-zinc-800 dark:text-zinc-200 hover:border-teal-500 transition-colors"
            >
              Featured Projects
            </button>
            <button
              onClick={() => handleNavClick('experience')}
              className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-left text-zinc-800 dark:text-zinc-200 hover:border-teal-500 transition-colors"
            >
              Work Experience
            </button>
            <button
              onClick={() => handleNavClick('engineering-labs')}
              className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-left text-zinc-800 dark:text-zinc-200 hover:border-teal-500 transition-colors flex items-center justify-between"
            >
              <span>Engineering Labs</span>
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
            </button>
            <button
              onClick={() => handleNavClick('remote-readiness')}
              className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-left text-zinc-800 dark:text-zinc-200 hover:border-teal-500 transition-colors"
            >
              Remote Readiness
            </button>
            <button
              onClick={() => handleNavClick('skills')}
              className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-left text-zinc-800 dark:text-zinc-200 hover:border-teal-500 transition-colors"
            >
              Skills & Stack
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 border border-zinc-200/80 dark:border-zinc-800 text-left text-zinc-800 dark:text-zinc-200 hover:border-teal-500 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Quick Mobile Action Buttons */}
          <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => {
                onOpenRecruiterModal();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-md shadow-teal-600/20"
            >
              <Zap size={14} className="fill-white" />
              <span>Open Recruiter Fast-Track (30s)</span>
            </button>

            <div className="flex gap-2">
              <a
                href="/resume.pdf"
                download="Viren_Ujjainiya_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-bold text-zinc-800 dark:text-zinc-200"
              >
                <FileDown size={14} className="text-teal-600 dark:text-teal-400" />
                <span>Resume PDF</span>
              </a>

              <a
                href={`https://${data.personal.github}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center"
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={`https://${data.personal.linkedin}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 flex items-center justify-center"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
