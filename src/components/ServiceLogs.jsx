import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Cpu } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function ServiceLogs({ experience }) {
  // Key callout badges extracted from resume
  const roleBadges = {
    'weybee-se': [
      { text: '93% Execution Speedup (60s → 4s)', icon: TrendingUp },
      { text: '30% Stability & Speed Boost', icon: Cpu },
      { text: '10K+ Daily Data Pipeline', icon: CheckCircle2 }
    ],
    'weybee-jse': [
      { text: '15% Bounce Rate Reduction', icon: TrendingUp },
      { text: '5,000+ Record Data Grids', icon: Cpu }
    ]
  };

  return (
    <div className="glass-panel p-6 rounded-lg glow-box relative">
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8 border-b border-arc-cyan/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-arc-cyan/10 border border-arc-cyan/30 rounded">
            <Briefcase size={20} className="text-arc-cyan" />
          </div>
          <div>
            <h2 className="text-lg font-sans font-bold text-white tracking-[0.2em] uppercase glow-text">
              Service_Logs // Work Experience
            </h2>
            <p className="text-[10px] font-mono text-gray-400">
              CHRONOLOGICAL ENGINEERING LOGBOOK (4+ YEARS CONTINUOUS SERVICE)
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-stark-gold bg-stark-gold/10 border border-stark-gold/30 px-3 py-1 rounded">
          STATUS: SENIOR FULL-STACK READY
        </div>
      </div>

      {/* Clean Single-Track Professional Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-2 sm:before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-arc-cyan before:via-arc-cyan/40 before:to-transparent">
        {experience.map((job, idx) => {
          const badges = roleBadges[job.id] || [];
          return (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              onMouseEnter={() => sound.playBeep(750, 0.02)}
              className="relative group"
            >
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[27px] sm:-left-[35px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-[#050814] border-2 border-arc-cyan shadow-[0_0_10px_#00f0ff] group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-arc-cyan animate-pulse" />
              </div>

              {/* Main Card */}
              <div className="bg-black/50 border border-arc-cyan/25 rounded-lg p-5 group-hover:border-arc-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-sans font-bold text-xl text-white group-hover:text-arc-cyan transition-colors">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-gray-300 mt-1">
                      <span className="text-arc-cyan font-bold">{job.company}</span>
                      <span className="text-gray-500">•</span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin size={12} className="text-arc-cyan" /> {job.location}
                      </span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 self-start sm:self-auto font-mono text-xs text-stark-gold bg-stark-gold/10 border border-stark-gold/30 px-2.5 py-1 rounded">
                    <Calendar size={13} /> {job.period}
                  </span>
                </div>

                {/* Key Impact Badges */}
                {badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t border-arc-cyan/15">
                    {badges.map((b, i) => {
                      const Icon = b.icon;
                      return (
                        <div key={i} className="flex items-center gap-1.5 bg-arc-cyan/10 border border-arc-cyan/30 text-arc-cyan font-mono text-[11px] px-2.5 py-0.5 rounded">
                          <Icon size={12} />
                          <span>{b.text}</span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Bullet Points */}
                <ul className="space-y-2 font-mono text-xs text-gray-300 leading-relaxed">
                  {job.highlights.map((point, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-arc-cyan font-bold select-none mt-0.5">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
