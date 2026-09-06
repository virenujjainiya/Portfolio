import React from 'react';
import { Briefcase, Plus, Trash2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import EditableText from './EditableText';

export default function ExperienceBento() {
  const {
    data,
    updateExperienceItem,
    updateExperienceHighlight,
    addExperienceHighlight,
    removeExperienceHighlight,
    isEditing
  } = usePortfolio();
  const { experience } = data;

  return (
    <div className="bento-card rounded-2xl p-6 sm:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-200 dark:border-zinc-800">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
            Engineering history & SaaS development trajectory.
          </p>
        </div>
        <span className="text-xs font-mono text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-300 dark:border-teal-800 px-3 py-1 rounded-full self-start sm:self-auto font-bold shadow-2xs">
          4+ Years Continuous Experience
        </span>
      </div>

      <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-200 dark:before:bg-zinc-800">
        {experience.map((job) => (
          <div key={job.id} className="relative pl-8 group/job">
            {/* Timeline Dot */}
            <div className="absolute left-[8px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700 border-2 border-white dark:border-[#11131b] ring-2 ring-zinc-300 dark:ring-zinc-700 group-hover/job:bg-teal-600 dark:group-hover/job:bg-teal-400 group-hover/job:ring-teal-300 dark:group-hover/job:ring-teal-900 transition-all duration-200" />

            <div className="space-y-3 p-4 rounded-xl hover:bg-zinc-50/70 dark:hover:bg-zinc-900/40 border border-transparent hover:border-zinc-200/80 dark:hover:border-zinc-800/80 transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="font-bold text-base sm:text-lg text-zinc-950 dark:text-white group-hover/job:text-teal-600 dark:group-hover/job:text-teal-400 transition-colors">
                    <EditableText
                      value={job.role}
                      onSave={(val) => updateExperienceItem(job.id, 'role', val)}
                    />
                  </h3>
                  <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 mt-0.5">
                    <EditableText
                      value={job.company}
                      onSave={(val) => updateExperienceItem(job.id, 'company', val)}
                      className="text-zinc-700 dark:text-zinc-300 font-bold"
                    />
                    <span className="text-zinc-300 dark:text-zinc-700">•</span>
                    <EditableText
                      value={job.location}
                      onSave={(val) => updateExperienceItem(job.id, 'location', val)}
                      className="text-zinc-500 dark:text-zinc-400"
                    />
                  </div>
                </div>
                <span className="text-xs font-mono text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 self-start sm:self-auto font-bold shadow-2xs">
                  <EditableText
                    value={job.period}
                    onSave={(val) => updateExperienceItem(job.id, 'period', val)}
                  />
                </span>
              </div>

              {/* Flagship Production Product Badge & Stack Tags */}
              {job.id === 'weybee-fullstack' && (
                <div className="p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-800/40 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                      Core Production Systems: Syncware SaaS Ecosystem (Vendor, Admin & Retailer Apps)
                    </span>
                    <span className="text-[10px] font-mono text-teal-700 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/60 px-2 py-0.5 rounded-full font-bold">
                      Full-Stack & Lead Frontend
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {['React + Vite', 'Redux Toolkit', 'C# .NET Schedulers', 'Shopify GraphQL (-62%)', 'Twilio Segment', 'Stripe', 'RBAC'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {job.id === 'weybee-cms' && (
                <div className="p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-800/40 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-teal-800 dark:text-teal-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                      Core Production System: Everywatch Enterprise CMS (0 to 1 in 6 Months)
                    </span>
                    <span className="text-[10px] font-mono text-teal-700 dark:text-teal-300 bg-teal-100/80 dark:bg-teal-900/60 px-2 py-0.5 rounded-full font-bold">
                      Sole Frontend Owner
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                    {['React.js', 'Redux', 'Ant Design', 'Dynamic Schema Form Engine', 'WYSIWYG Article Editor', 'Media Gallery'].map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Bullet points */}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 group/bullet">
                    <span className="text-teal-600 dark:text-teal-400 font-bold select-none mt-0.5">›</span>
                    <div className="flex-1">
                      <EditableText
                        value={point}
                        onSave={(val) => updateExperienceHighlight(job.id, i, val)}
                        multiline={true}
                        className="w-full"
                      />
                    </div>
                    {isEditing && (
                      <button
                        onClick={() => removeExperienceHighlight(job.id, i)}
                        className="opacity-0 group-hover/bullet:opacity-100 text-red-500 hover:text-red-600 p-1 transition-opacity"
                        title="Delete highlight"
                      >
                        <Trash2 size={13} />
                      </button>
                    )}
                  </li>
                ))}
              </ul>

              {isEditing && (
                <button
                  onClick={() => addExperienceHighlight(job.id)}
                  className="flex items-center gap-1 text-xs font-mono font-bold text-teal-600 hover:text-teal-700 pt-1"
                >
                  <Plus size={13} />
                  <span>Add Highlight</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
