import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Database, Sparkles, Terminal, CheckCircle } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function ProjectVault({ projects, selectedSkill }) {
  const filteredProjects = selectedSkill
    ? projects.filter(p => p.tech.some(t => t.toLowerCase() === selectedSkill.toLowerCase()))
    : projects;

  return (
    <div className="glass-panel p-6 rounded-lg glow-box relative">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 border-b border-arc-cyan/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-arc-cyan/10 border border-arc-cyan/30 rounded">
            <Database size={20} className="text-arc-cyan" />
          </div>
          <div>
            <h2 className="text-lg font-sans font-bold text-white tracking-[0.2em] uppercase glow-text">
              Project_Vault // Architecture
            </h2>
            <p className="text-[10px] font-mono text-gray-400">
              DEPLOYED HIGH-PERFORMANCE WEB APPLICATIONS & PLATFORMS
            </p>
          </div>
        </div>

        {selectedSkill && (
          <span className="text-xs font-mono text-arc-cyan flex items-center gap-1.5 bg-arc-cyan/10 px-3 py-1 rounded border border-arc-cyan/30">
            <Sparkles size={13} />
            MATCHED WITH [{selectedSkill}]
          </span>
        )}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="p-8 text-center font-mono text-sm text-gray-400 border border-dashed border-arc-cyan/30 rounded">
          NO DIRECT ARCHIVE MATCHING [{selectedSkill}]. CLICK CLEAR FILTER TO VIEW ALL.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div 
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                onMouseEnter={() => sound.playBeep(900, 0.03)}
                className="group relative border border-arc-cyan/25 bg-black/50 p-5 rounded-lg hover:border-arc-cyan hover:shadow-[0_0_25px_rgba(0,240,255,0.18)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Tech Bracket Corners */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-arc-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-arc-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-arc-cyan opacity-40 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-arc-cyan opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span className="text-[10px] font-mono text-arc-cyan/70 tracking-widest uppercase">
                        DIRECTIVE 0{idx + 1}
                      </span>
                      <h3 className="font-sans font-bold text-xl text-white group-hover:text-arc-cyan group-hover:glow-text transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        onClick={() => sound.playBeep(1100, 0.05)}
                        className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-arc-cyan bg-arc-cyan/10 border border-arc-cyan/40 hover:bg-arc-cyan hover:text-stark-black rounded transition-all font-bold"
                        title="Open Live Deployment"
                      >
                        <span>LIVE DEMO</span>
                        <ExternalLink size={13} />
                      </a>
                    ) : (
                      <span className="text-[10px] font-mono text-stark-gold bg-stark-gold/10 border border-stark-gold/30 px-2 py-0.5 rounded">
                        PROPRIETARY
                      </span>
                    )}
                  </div>

                  <p className="font-mono text-xs text-gray-300 mb-4 leading-relaxed bg-black/30 p-2.5 rounded border-l-2 border-arc-cyan/40">
                    {project.description}
                  </p>

                  <div className="mb-4 space-y-2">
                    {project.highlights.map((h, i) => (
                      <p key={i} className="font-mono text-[11px] text-gray-400 flex gap-2 items-start leading-normal">
                        <CheckCircle size={13} className="text-arc-cyan shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-arc-cyan/15 mt-3">
                  {project.tech.map((tech) => {
                    const isMatched = selectedSkill && tech.toLowerCase() === selectedSkill.toLowerCase();
                    return (
                      <span 
                        key={tech} 
                        className={`text-[10px] font-mono px-2 py-0.5 rounded transition-colors ${
                          isMatched 
                            ? 'bg-arc-cyan text-stark-black font-bold shadow-[0_0_8px_#00f0ff]' 
                            : 'bg-stark-gold/10 text-stark-gold border border-stark-gold/20'
                        }`}
                      >
                        {tech}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
