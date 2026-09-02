import React from 'react';
import { ExternalLink, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import EditableText from './EditableText';
import FocusTubePreview from './previews/FocusTubePreview';
import EcomFinancePreview from './previews/EcomFinancePreview';

export default function ProjectsBento() {
  const { data, updateProject, updateProjectHighlight } = usePortfolio();
  const { projects } = data;

  const PREVIEW_MAP = {
    focustube: FocusTubePreview,
    ecomfinance: EcomFinancePreview
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-teal-800 bg-teal-50 border border-teal-200 mb-2">
            <Sparkles size={13} className="text-teal-600" />
            <span>Interactive Product Previews</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950">
            Featured Products & Systems
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">
            End-to-end production software: interactive UI architecture and real business logic.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, idx) => {
          const PreviewComponent = PREVIEW_MAP[project.id];

          return (
            <div
              key={project.id}
              className="bento-card rounded-2xl p-5 sm:p-7 flex flex-col justify-between group relative overflow-hidden space-y-5 cursor-default"
            >
              {/* 1. Rich Visual UI Preview Frame with Inner Hover Depth */}
              {PreviewComponent && (
                <div className="w-full group-hover:scale-[1.01] transition-transform duration-250">
                  <PreviewComponent />
                </div>
              )}

              {/* 2. Text Details & Highlights */}
              <div className="space-y-3 pt-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-teal-700 font-bold tracking-wide uppercase">
                      Product Dossier 0{idx + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 group-hover:text-teal-600 transition-colors mt-0.5">
                      <EditableText
                        value={project.name}
                        onSave={(val) => updateProject(project.id, 'name', val)}
                      />
                    </h3>
                  </div>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-teal-600 text-xs font-semibold text-white transition-all shadow-sm shrink-0 hover:shadow-md hover:shadow-teal-600/20"
                    >
                      <span>Live App</span>
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-md border border-zinc-200 font-semibold shrink-0">
                      SaaS Platform
                    </span>
                  )}
                </div>

                <div className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  <EditableText
                    value={project.description}
                    onSave={(val) => updateProject(project.id, 'description', val)}
                    multiline={true}
                    className="w-full"
                  />
                </div>

                {/* Highlights List */}
                <div className="space-y-2 pt-1">
                  {project.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-600 leading-relaxed">
                      <CheckCircle2 size={15} className="text-teal-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <EditableText
                          value={h}
                          onSave={(val) => updateProjectHighlight(project.id, i, val)}
                          multiline={true}
                          className="w-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Tech Stack Badges with Prominent Teal Hover */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-zinc-100">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100/90 text-zinc-700 border border-zinc-200 hover:border-teal-500 hover:text-teal-700 hover:bg-teal-50/60 transition-all font-medium"
                  >
                    {tech}
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
