import React from 'react';
import { ExternalLink, CheckCircle2, Layers, Sparkles } from 'lucide-react';

export default function ProjectsBento({ projects }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">Featured Projects</h2>
          <p className="text-xs sm:text-sm text-zinc-400">Architected full-stack platforms and analytical engines.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="bento-card rounded-xl p-6 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top info */}
            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <div>
                  <span className="text-[11px] font-mono text-blue-400 font-medium tracking-wide uppercase">
                    Project 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {project.name}
                  </h3>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-xs font-medium text-zinc-200 border border-zinc-700/60 transition-all group-hover:border-zinc-500"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-400 leading-normal">
                    <CheckCircle2 size={14} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-800/80">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-zinc-800/60 text-zinc-300 border border-zinc-700/40"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
