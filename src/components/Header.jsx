import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, GraduationCap, Sparkles, Award } from 'lucide-react';
import DecryptText from './DecryptText';
import { sound } from '../utils/soundEffects';

function GithubIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Header({ personal, education }) {
  return (
    <div className="glass-panel p-6 sm:p-8 rounded-lg glow-box relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-arc-cyan opacity-10 blur-3xl rounded-full pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left identity & titles */}
        <div className="lg:col-span-8 space-y-4">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-arc-cyan">
            <span className="flex items-center gap-1.5 bg-arc-cyan/10 border border-arc-cyan/30 px-2.5 py-0.5 rounded font-bold">
              <span className="w-2 h-2 rounded-full bg-arc-cyan animate-pulse" />
              IDENTIFIER: ENGINEER_01
            </span>
            <span className="text-gray-400">//</span>
            <span className="text-stark-gold font-bold">
              <DecryptText text={personal.role.toUpperCase()} delay={300} />
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-sans font-extrabold text-white tracking-wide glow-text leading-tight">
            <DecryptText text={personal.name.toUpperCase()} delay={150} speed={30} />
          </h1>

          <p className="text-gray-300 text-xs sm:text-sm font-mono leading-relaxed max-w-3xl border-l-2 border-arc-cyan pl-4 bg-gradient-to-r from-arc-cyan/10 to-transparent py-2">
            {personal.summary}
          </p>

          {/* Quick Contact & Social Directives */}
          <div className="flex flex-wrap items-center gap-4 pt-2 font-mono text-xs">
            <a 
              href={`mailto:${personal.email}`}
              onClick={() => sound.playBeep(900, 0.04)}
              className="flex items-center gap-2 text-gray-200 bg-arc-cyan/15 border border-arc-cyan hover:bg-arc-cyan hover:text-stark-black px-3.5 py-2 rounded transition-all font-bold shadow-[0_0_12px_rgba(0,240,255,0.3)]"
            >
              <Mail size={15} />
              <span>TRANSMIT MESSAGE ({personal.email})</span>
            </a>

            <a 
              href={`https://${personal.github}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playBeep(1000, 0.04)}
              className="flex items-center gap-2 text-gray-300 bg-black/50 border border-arc-cyan/30 hover:border-arc-cyan hover:text-white px-3 py-2 rounded transition-all"
            >
              <GithubIcon size={15} />
              <span>GITHUB</span>
            </a>

            <a 
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playBeep(1000, 0.04)}
              className="flex items-center gap-2 text-gray-300 bg-black/50 border border-arc-cyan/30 hover:border-arc-cyan hover:text-white px-3 py-2 rounded transition-all"
            >
              <LinkedinIcon size={15} />
              <span>LINKEDIN</span>
            </a>

            <div className="flex items-center gap-1.5 text-gray-400 px-2 py-1">
              <MapPin size={14} className="text-arc-cyan" />
              <span>{personal.location}, INDIA</span>
            </div>
          </div>
        </div>

        {/* Right Stark Engineering Dossier Card */}
        <div className="lg:col-span-4 bg-black/60 border border-arc-cyan/30 rounded-lg p-5 flex flex-col justify-between gap-4">
          <div className="flex items-center justify-between border-b border-arc-cyan/20 pb-2.5">
            <span className="text-[11px] font-mono text-arc-cyan tracking-widest uppercase flex items-center gap-1.5 font-bold">
              <Award size={14} className="text-stark-gold" />
              SYSTEM_METRICS
            </span>
            <span className="text-[10px] font-mono text-stark-gold bg-stark-gold/10 px-2 py-0.5 rounded">
              VERIFIED
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="flex justify-between items-center text-gray-300">
              <span className="text-gray-400">EXPERIENCE:</span>
              <span className="text-arc-cyan font-bold">4+ YEARS CONTINUOUS</span>
            </div>
            <div className="flex justify-between items-center text-gray-300">
              <span className="text-gray-400">CORE SPECIALTY:</span>
              <span className="text-white">FULL-STACK & APIS</span>
            </div>
            <div className="flex justify-between items-center text-gray-300">
              <span className="text-gray-400">DEPLOYMENT STATUS:</span>
              <span className="text-teal-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                AVAILABLE FOR HIRE
              </span>
            </div>
          </div>

          {/* Academic Block */}
          {education && education.length > 0 && (
            <div className="pt-3 border-t border-arc-cyan/20">
              <div className="flex items-center gap-1.5 text-[11px] font-mono text-stark-gold mb-1">
                <GraduationCap size={14} />
                <span>ACADEMIC CREDENTIAL</span>
              </div>
              <p className="font-sans font-bold text-xs text-white">
                {education[0].degree}
              </p>
              <p className="font-mono text-[10px] text-gray-400">
                {education[0].institution} • {education[0].period}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
