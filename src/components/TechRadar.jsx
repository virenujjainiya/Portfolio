import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sound } from '../utils/soundEffects';
import { Radio, Layers, Server, Database, Shield, Wrench, Sparkles } from 'lucide-react';

const CATEGORY_ICONS = {
  frontend: Layers,
  backend: Server,
  architecture: Database,
  integration: Shield,
  tools: Wrench,
};

export default function TechRadar({ skills, selectedSkill, onSelectSkill }) {
  const categories = Object.keys(skills);
  const [activeTab, setActiveTab] = useState(categories[0] || 'frontend');

  const handleCategoryChange = (cat) => {
    sound.playBeep(650, 0.04);
    setActiveTab(cat);
  };

  const handleSkillToggle = (skill) => {
    sound.playBeep(selectedSkill === skill ? 400 : 800, 0.05);
    onSelectSkill(selectedSkill === skill ? null : skill);
  };

  return (
    <div className="glass-panel p-6 rounded-lg glow-box relative overflow-hidden flex flex-col">
      {/* Radar HUD Top Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-arc-cyan/20 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="relative flex items-center justify-center">
            <Radio size={20} className="text-arc-cyan animate-pulse" />
            <span className="absolute w-6 h-6 rounded-full border border-arc-cyan/40 animate-ping pointer-events-none" />
          </div>
          <div>
            <h2 className="text-base font-sans font-bold text-white tracking-[0.2em] uppercase glow-text">
              Tech_Radar // Diagnostics
            </h2>
            <p className="text-[10px] font-mono text-gray-400">
              STARK MULTI-SYSTEM PROFICIENCY SCANNER
            </p>
          </div>
        </div>

        {selectedSkill && (
          <button 
            onClick={() => {
              sound.playBeep(350, 0.04);
              onSelectSkill(null);
            }}
            className="flex items-center gap-1 text-[11px] font-mono text-stark-gold bg-stark-gold/10 border border-stark-gold/40 px-2.5 py-1 rounded hover:bg-stark-gold/20 transition-colors"
          >
            <Sparkles size={12} />
            ACTIVE FILTER: [{selectedSkill}] ×
          </button>
        )}
      </div>

      {/* Category Navigation Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => {
          const Icon = CATEGORY_ICONS[cat] || Layers;
          const isActive = activeTab === cat;
          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded transition-all duration-200 ${
                isActive
                  ? 'bg-arc-cyan text-stark-black font-bold shadow-[0_0_12px_rgba(0,240,255,0.7)] border border-arc-cyan'
                  : 'bg-black/40 border border-arc-cyan/20 text-gray-400 hover:text-white hover:border-arc-cyan/50 hover:bg-arc-cyan/5'
              }`}
            >
              <Icon size={14} />
              <span className="uppercase tracking-wider">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Interactive Radar Grid + Module List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
        <AnimatePresence mode="wait">
          {skills[activeTab]?.map((skill, index) => {
            const isSelected = selectedSkill === skill;
            return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                onClick={() => handleSkillToggle(skill)}
                className={`group cursor-pointer p-3.5 rounded border transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-arc-cyan/20 border-arc-cyan shadow-[0_0_16px_rgba(0,240,255,0.35)]'
                    : 'bg-black/40 border-arc-cyan/20 hover:border-arc-cyan hover:bg-arc-cyan/10'
                }`}
              >
                {/* Tech Bracket Indicator */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono font-bold tracking-wide transition-colors ${
                    isSelected ? 'text-arc-cyan glow-text' : 'text-gray-200 group-hover:text-white'
                  }`}>
                    {skill}
                  </span>
                  <span className="text-[10px] font-mono text-arc-cyan/60 group-hover:text-arc-cyan">
                    SYS_NODE #{index + 1}
                  </span>
                </div>

                {/* Energy Flow Bar */}
                <div className="w-full bg-black/60 h-1.5 rounded-full overflow-hidden border border-arc-cyan/20 mt-1">
                  <div 
                    className={`h-full rounded-full transition-all duration-500 ${
                      isSelected 
                        ? 'bg-gradient-to-r from-arc-cyan to-white shadow-[0_0_8px_#00f0ff]' 
                        : 'bg-arc-cyan/60 group-hover:bg-arc-cyan'
                    }`}
                    style={{ width: `${85 + ((index * 7) % 15)}%` }}
                  />
                </div>

                {/* Directive Hint */}
                <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-gray-500 group-hover:text-gray-300">
                  <span>STATUS: OPTIMIZED</span>
                  <span className="text-arc-cyan/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    {isSelected ? 'CLICK TO DESELECT' : 'FILTER DIRECTIVES →'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
