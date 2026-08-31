import React from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/soundEffects';
import { Cpu } from 'lucide-react';

export default function Skills({ skills, selectedSkill, onSelectSkill }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1 }
  };

  const handleSkillClick = (skill) => {
    sound.playBeep(selectedSkill === skill ? 400 : 750, 0.06);
    onSelectSkill(selectedSkill === skill ? null : skill);
  };

  return (
    <motion.div 
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      className="glass-panel p-6 rounded-lg glow-box flex-1 flex flex-col relative overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-sans font-bold text-white uppercase tracking-[0.2em] flex items-center gap-2.5">
          <Cpu size={18} className="text-arc-cyan animate-pulse" />
          Tech_Radar
        </h2>
        {selectedSkill && (
          <button 
            onClick={() => {
              sound.playBeep(350, 0.05);
              onSelectSkill(null);
            }}
            className="text-[10px] font-mono text-stark-gold border border-stark-gold/40 px-2 py-0.5 rounded hover:bg-stark-gold/20 transition-colors"
          >
            CLEAR FILTER [{selectedSkill}]
          </button>
        )}
      </div>

      <p className="text-[11px] font-mono text-gray-400 mb-4">
        Click any technology module to filter associated project directives.
      </p>
      
      <div className="flex-1 overflow-y-auto pr-1 space-y-5 custom-scrollbar">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-arc-cyan/60 rounded-full" />
              <h3 className="font-mono text-[11px] text-arc-cyan/80 uppercase tracking-widest">
                SYS.{category}
              </h3>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-1.5"
            >
              {items.map((skill) => {
                const isSelected = selectedSkill === skill;
                return (
                  <motion.button 
                    key={skill}
                    variants={item}
                    onClick={() => handleSkillClick(skill)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-2.5 py-1 text-xs font-mono rounded transition-all duration-200 text-left ${
                      isSelected 
                        ? 'bg-arc-cyan text-stark-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.8)] border border-arc-cyan' 
                        : 'bg-arc-cyan/10 border border-arc-cyan/25 text-gray-300 hover:bg-arc-cyan/20 hover:border-arc-cyan hover:text-white'
                    }`}
                  >
                    {skill}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
