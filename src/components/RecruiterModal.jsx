import React, { useState } from 'react';
import { 
  X, Check, Copy, Clock, Globe, Briefcase, 
  FileDown, Mail, Zap 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function RecruiterModal({ isOpen, onClose }) {
  const { data } = usePortfolio();
  const { personal } = data;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const candidatePitch = `Candidate Dossier: ${personal.name}
Role: Software Engineer (React, TypeScript, C# .NET, Node.js, GraphQL)
Experience: 4+ Years | Open to Worldwide Remote (US / Europe / UK / Global)
Location: Gujarat, India | Timezone Overlap: 4+ hours daily with EST / PST / CET
Email: ${personal.email}
LinkedIn: https://${personal.linkedin}
GitHub: https://${personal.github}

Core Production Highlights:
• Syncware SaaS Suite: Architected brand-new Admin App solo with React, Vite, & Redux Toolkit. Modularized high-volume Orders page to eliminate re-rendering bottlenecks.
• Multi-Endpoint Concurrency: Engineered custom state machine hook (useEndpointSyncState) managing concurrent integration play/stop syncing across 3rd-party APIs without race conditions.
• Everywatch CMS: Sole frontend engineer who architected & shipped the entire enterprise CMS in 6 months; designed generic JSON schema-driven dynamic form engine.
• API Modernization & Scale: Migrated Shopify REST to batch GraphQL (-62% payload size) and built C#/.NET automated background bulk export scheduler for orders/products.
• Product Telemetry & Growth: Production integrations with Twilio Segment (fanning out to Userlist), UserMaven, ProductFruits, Stripe billing, and granular RBAC.

Available immediately for technical interviews.`;

  const handleCopyPitch = () => {
    navigator.clipboard.writeText(candidatePitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="w-full max-w-2xl bg-white dark:bg-[#11131c] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/80 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center border border-teal-500/20">
              <Zap size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                  Recruiter Fast-Track Packet
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  30s Snapshot
                </span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                Essential briefing for tech recruiters & hiring managers
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 overflow-y-auto custom-scrollbar text-sm">
          {/* Quick Fit Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs font-semibold mb-1">
                <Briefcase size={14} className="text-teal-600 dark:text-teal-400" />
                <span>Experience</span>
              </div>
              <p className="font-bold text-zinc-900 dark:text-zinc-100">4+ Years</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Full-Stack & Systems</p>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs font-semibold mb-1">
                <Globe size={14} className="text-teal-600 dark:text-teal-400" />
                <span>Remote Status</span>
              </div>
              <p className="font-bold text-emerald-600 dark:text-emerald-400">Immediate Availability</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Worldwide Remote</p>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs font-semibold mb-1">
                <Clock size={14} className="text-teal-600 dark:text-teal-400" />
                <span>Timezone Overlap</span>
              </div>
              <p className="font-bold text-zinc-900 dark:text-zinc-100">4-5 Hours Daily</p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">EST / PST / CET</p>
            </div>
          </div>

          {/* Core Tech Stack Matrix */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Target Skill Alignment
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {[
                'React.js', 'TypeScript', 'Node.js', 'Fastify', 'C#', '.NET Core', 
                'PostgreSQL', 'Supabase', 'GraphQL', 'REST APIs', 'Redux', 'Tailwind CSS',
                'Shopify APIs', 'OAuth 2.0 / SSO', 'Zustand'
              ].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Production Proof Points */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Verified Production Highlights
            </h4>
            <div className="space-y-2">
              <div className="p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-200/60 dark:border-teal-800/40 text-xs text-zinc-700 dark:text-zinc-300">
                <strong className="text-teal-700 dark:text-teal-300 font-semibold">Syncware SaaS & Admin App:</strong> Modernized legacy CRA codebase in 2 days. Architected brand-new Admin App solo from scratch using React, Vite, and Redux Toolkit. Built custom concurrency hook (useEndpointSyncState) managing multi-endpoint play/stop syncing across 3rd-party integrations without race conditions.
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300">
                <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Everywatch Enterprise CMS (0 to 1 in 6 Months):</strong> Sole frontend engineer who architected the entire CMS; built dynamic schema-driven form engine that generated form controls dynamically from backend JSON contracts, solving complex data-grid re-render bottlenecks.
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300">
                <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Shopify GraphQL & C# Schedulers:</strong> Migrated legacy REST to batch GraphQL (-62% payload size) and built automated C#/.NET background schedulers for bulk order/product exports with real-time UI notification grids.
              </div>
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300">
                <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Product Telemetry & Auth:</strong> Production-grade integrations of Twilio Segment (fanning telemetry out to Userlist), UserMaven, ProductFruits, Stripe billing, Google OAuth, and granular RBAC.
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer / Fast Actions */}
        <div className="px-6 py-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleCopyPitch}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-all shadow-md shadow-teal-600/20 active:scale-95"
          >
            {copied ? (
              <>
                <Check size={15} />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy size={15} />
                <span>1-Click Copy Pitch for ATS/Slack</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Viren_Ujjainiya_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-teal-500 font-semibold text-xs transition-all shadow-2xs"
            >
              <FileDown size={14} className="text-teal-600 dark:text-teal-400" />
              <span>Resume PDF</span>
            </a>

            <a
              href={`mailto:${personal.email}?subject=Remote Engineering Opportunity at [Company]`}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 font-semibold text-xs hover:bg-teal-600 dark:hover:bg-teal-400 transition-all shadow-sm"
            >
              <Mail size={14} />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
