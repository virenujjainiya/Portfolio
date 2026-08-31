import React, { useState } from 'react';
import { Layers, Server, Database, Shield, Wrench } from 'lucide-react';

const CATEGORY_META = {
  frontend: { label: 'Frontend', icon: Layers },
  backend: { label: 'Backend', icon: Server },
  architecture: { label: 'Architecture & DB', icon: Database },
  integration: { label: 'Integration & Auth', icon: Shield },
  tools: { label: 'AI & Tools', icon: Wrench },
};

export default function SkillsBento({ skills }) {
  const [activeCat, setActiveCat] = useState('all');

  const categories = Object.keys(skills);

  return (
    <div className="bento-card rounded-xl p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">Skills & Technical Competencies</h2>
          <p className="text-xs text-zinc-400">Core technologies across full-stack production systems.</p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCat('all')}
            className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
              activeCat === 'all'
                ? 'bg-zinc-100 text-zinc-900 font-medium'
                : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors capitalize ${
                activeCat === cat
                  ? 'bg-zinc-100 text-zinc-900 font-medium'
                  : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {CATEGORY_META[cat]?.label || cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(skills).map(([category, items]) => {
          if (activeCat !== 'all' && activeCat !== category) return null;
          const meta = CATEGORY_META[category] || { label: category, icon: Layers };
          const Icon = meta.icon;

          return (
            <div key={category} className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                <Icon size={15} className="text-blue-400" />
                <span>{meta.label}</span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded text-xs font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/40 hover:border-blue-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
