import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function ExperienceBento({ experience }) {
  return (
    <div className="bento-card rounded-xl p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-white">Work Experience</h2>
          <p className="text-xs text-zinc-400">Engineering history & SaaS development trajectory.</p>
        </div>
        <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full self-start sm:self-auto">
          4+ Years Continuous Experience
        </span>
      </div>

      <div className="space-y-8 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-zinc-800">
        {experience.map((job) => (
          <div key={job.id} className="relative pl-8 group">
            {/* Timeline Dot */}
            <div className="absolute left-[9px] top-1.5 w-2 h-2 rounded-full bg-zinc-600 border-2 border-[#09090b] group-hover:bg-blue-400 group-hover:scale-125 transition-all" />

            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className="font-semibold text-base text-zinc-100 group-hover:text-blue-400 transition-colors">
                    {job.role}
                  </h3>
                  <p className="text-xs font-medium text-zinc-400">
                    {job.company} • <span className="text-zinc-500">{job.location}</span>
                  </p>
                </div>
                <span className="text-xs font-mono text-zinc-400 bg-zinc-800/80 px-2.5 py-0.5 rounded border border-zinc-700/50 self-start sm:self-auto">
                  {job.period}
                </span>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold select-none mt-0.5">›</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
