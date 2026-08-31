import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function Experience({ experience }) {
  // Helper to highlight key resume metrics in highlights
  const formatHighlight = (text) => {
    // Regex for numbers like 30%, 93%, 10,000+, 1,000+, 25%, 3 months, 4s
    const regex = /(\b\d+[%+]?|\b\d+[,\d]*\+?|\b\d+\s*(?:s|ms|months|rows)\b)/gi;
    const parts = text.split(regex);

    return parts.map((part, i) => {
      if (part && part.match(regex)) {
        return (
          <span key={i} className="text-arc-cyan font-bold bg-arc-cyan/10 px-1 py-0.5 rounded">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
      className="glass-panel p-6 rounded-lg glow-box relative"
    >
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-sans font-bold text-white uppercase tracking-[0.2em] flex items-center gap-3">
          <Briefcase size={20} className="text-arc-cyan" />
          Service_Logs (Experience)
        </h2>
        <div className="text-xs font-mono text-stark-gold flex items-center gap-1.5 bg-stark-gold/10 px-3 py-1 rounded border border-stark-gold/30">
          <Award size={14} />
          4+ YEARS ACTIVE SERVICE
        </div>
      </div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-arc-cyan/60 before:via-arc-cyan/20 before:to-transparent">
        {experience.map((job) => (
          <div 
            key={job.id} 
            onMouseEnter={() => sound.playBeep(800, 0.02)}
            className="relative flex flex-col md:flex-row items-start md:items-center justify-between md:odd:flex-row-reverse group"
          >
            {/* Timeline Node Point */}
            <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-arc-cyan bg-stark-black shadow-[0_0_12px_rgba(0,240,255,0.8)] absolute left-3 md:left-1/2 -translate-x-1/2 z-10">
              <div className="w-2 h-2 bg-arc-cyan rounded-full animate-ping" />
            </div>

            {/* Main Content Box */}
            <div className="w-[calc(100%-2.5rem)] ml-10 md:ml-0 md:w-[calc(50%-2rem)] p-5 border border-arc-cyan/25 bg-black/50 rounded hover:border-arc-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2 gap-1.5">
                <h3 className="font-sans font-bold text-lg text-white group-hover:text-arc-cyan transition-colors">
                  {job.role}
                </h3>
                <span className="font-mono text-xs text-stark-gold bg-stark-gold/10 px-2 py-0.5 rounded border border-stark-gold/30">
                  {job.period}
                </span>
              </div>
              <p className="font-mono text-xs text-arc-cyan/80 mb-4 tracking-wide">
                {job.company} // {job.location}
              </p>
              
              <ul className="space-y-2.5 font-mono text-xs text-gray-300">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex gap-2 leading-relaxed">
                    <span className="text-arc-cyan select-none font-bold">›</span>
                    <span>{formatHighlight(point)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
