import React, { useState } from 'react';
import { Mail, ArrowDown, Copy, Check, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function Hero({ onNavigate }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('ujjainiyaviren2019@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 relative">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="space-y-6 max-w-3xl">
        {/* Experience Chip */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 shadow-sm">
          <Sparkles size={13} className="text-blue-400" />
          <span>Full-Stack Engineer • 4+ Years Experience</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          Architecting resilient <span className="text-gradient-blue">SaaS platforms</span> & high-density interfaces.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
          I'm <span className="text-zinc-100 font-medium">Viren Ujjainiya</span>. I engineer zero-to-one web applications across <span className="text-zinc-200">React.js</span>, <span className="text-zinc-200">C#/.NET</span>, and <span className="text-zinc-200">Node.js/Fastify</span> — owning full lifecycles from database schemas to 60fps data grid rendering and high-volume integrations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-100 text-zinc-900 hover:bg-white font-medium text-xs sm:text-sm transition-all shadow-sm"
          >
            <Code2 size={16} />
            <span>Explore Projects</span>
          </button>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-200 font-medium text-xs sm:text-sm transition-all shadow-sm group"
          >
            {copied ? (
              <>
                <Check size={16} className="text-emerald-400" />
                <span className="text-emerald-400 font-mono">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-zinc-400 group-hover:text-zinc-200" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href="mailto:ujjainiyaviren2019@gmail.com"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-transparent text-zinc-400 hover:text-zinc-200 font-medium text-xs sm:text-sm transition-colors"
          >
            <Mail size={16} />
            <span>Send Email</span>
          </a>
        </div>

        {/* Quick Highlights Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-800/80">
          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
            <p className="text-xl font-bold text-zinc-100">4+ Years</p>
            <p className="text-xs text-zinc-500 font-medium">Production Experience</p>
          </div>
          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
            <p className="text-xl font-bold text-emerald-400">93% Speedup</p>
            <p className="text-xs text-zinc-500 font-medium">SQL & Report Engine</p>
          </div>
          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
            <p className="text-xl font-bold text-blue-400">10k+ Daily</p>
            <p className="text-xs text-zinc-500 font-medium">Data Pipeline Ingest</p>
          </div>
          <div className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800/60">
            <p className="text-xl font-bold text-zinc-100">10k+ Rows</p>
            <p className="text-xs text-zinc-500 font-medium">Optimized Data Grids</p>
          </div>
        </div>
      </div>
    </section>
  );
}
