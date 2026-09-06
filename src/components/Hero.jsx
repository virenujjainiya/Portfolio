import React, { useState } from 'react';
import { 
  Copy, Check, Sparkles, Code2, FileDown, Zap 
} from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import EditableText from './EditableText';
import StatusPill from './StatusPill';

export default function Hero({ onNavigate, onOpenRecruiterModal }) {
  const { data, updatePersonal } = usePortfolio();
  const { personal } = data;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-8 sm:py-12 md:py-14 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* Left Column: Core Narrative & Recruiter Value */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          {/* Real-Time Location & Availability Status Pill */}
          <StatusPill />

          {/* Role & Experience Chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white dark:bg-[#12141d] border border-zinc-200/90 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-2xs">
            <Sparkles size={13} className="text-teal-600 dark:text-teal-400 animate-pulse no-print" />
            <EditableText
              value={personal.role}
              onSave={(val) => updatePersonal('role', val)}
              className="font-bold text-zinc-950 dark:text-white"
            />
            <span className="text-zinc-300 dark:text-zinc-700">•</span>
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">4+ Years Experience</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.12]">
            Hi, I'm{' '}
            <EditableText
              value={personal.name}
              onSave={(val) => updatePersonal('name', val)}
              className="text-gradient-teal inline-block font-extrabold"
            />
            . Building high-performance SaaS & scalable platforms.
          </h1>

          {/* Subtitle / Summary */}
          <div className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-normal leading-relaxed">
            <EditableText
              value={personal.summary}
              onSave={(val) => updatePersonal('summary', val)}
              multiline={true}
              className="w-full"
            />
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1 no-print">
            {/* Recruiter Fast-Track Button */}
            <button
              onClick={onOpenRecruiterModal}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-teal-600/25 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
            >
              <Zap size={15} className="text-teal-200 fill-teal-200 shrink-0" />
              <span>Recruiter Fast-Track</span>
              <span className="px-1.5 py-0.2 rounded bg-white/20 text-[10px] font-mono uppercase shrink-0">30s</span>
            </button>

            {/* View Projects */}
            <button
              onClick={() => onNavigate('projects')}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white hover:bg-zinc-800 dark:hover:bg-zinc-700 hover:-translate-y-0.5 font-semibold text-xs sm:text-sm transition-all shadow-sm active:translate-y-0 whitespace-nowrap"
            >
              <Code2 size={16} className="shrink-0" />
              <span>View Projects</span>
            </button>

            {/* Resume PDF Download */}
            <a
              href="/resume.pdf"
              download="Viren_Ujjainiya_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#12141e] border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 hover:bg-teal-50/40 dark:hover:bg-teal-950/30 hover:-translate-y-0.5 text-zinc-800 dark:text-zinc-200 font-semibold text-xs sm:text-sm transition-all shadow-2xs active:translate-y-0 whitespace-nowrap"
              title="Download Official PDF Resume"
            >
              <FileDown size={15} className="text-teal-600 dark:text-teal-400 shrink-0" />
              <span>Resume PDF</span>
            </a>

            {/* Copy Email */}
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#12141e] border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:-translate-y-0.5 text-zinc-700 dark:text-zinc-300 font-semibold text-xs sm:text-sm transition-all shadow-2xs group active:translate-y-0 whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-teal-600 dark:text-teal-400 shrink-0" />
                  <span className="text-teal-600 dark:text-teal-400 font-mono font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={15} className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 shrink-0" />
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-5 border-t border-zinc-200/80 dark:border-zinc-800">
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#11131b] border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 hover:shadow-md transition-all shadow-2xs">
              <p className="text-2xl font-extrabold text-zinc-950 dark:text-white">4+ Years</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Software Engineer</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#11131b] border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 hover:shadow-md transition-all shadow-2xs">
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">3 Apps</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Shipped 0-to-1</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#11131b] border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 hover:shadow-md transition-all shadow-2xs">
              <p className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">48 Hours</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Legacy Modernization</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#11131b] border border-zinc-200 dark:border-zinc-800 hover:border-teal-500 hover:shadow-md transition-all shadow-2xs">
              <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">-62%</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">GraphQL Payload</p>
            </div>
          </div>
        </div>

        {/* Right Column: Executive Remote Candidate Dossier */}
        <div className="lg:col-span-5 no-print">
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0f111a] shadow-xl overflow-hidden">
            {/* Window Chrome Header */}
            <div className="px-4 py-3 bg-zinc-100 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 ml-1 font-semibold">
                  executive.candidate.dossier
                </span>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>OPEN FOR REMOTE</span>
              </div>
            </div>

            {/* Dossier Body */}
            <div className="p-4 sm:p-5 space-y-4">
              {/* Profile Snapshot Row */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-200/80 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-sm sm:text-base text-zinc-950 dark:text-white">
                      Full-Stack / Systems Engineer
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                      Production Ready
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
                    WeyBee Solutions Pvt Ltd • 4+ Years Continuous
                  </p>
                </div>

                <div className="text-right font-mono text-[11px]">
                  <span className="text-zinc-400 block text-[10px]">TIMEZONE OVERLAP</span>
                  <span className="text-teal-600 dark:text-teal-400 font-bold">4-5 hrs EST/PST</span>
                </div>
              </div>

              {/* Verified Production Highlights (User-Curated) */}
              <div className="space-y-2.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                  <Zap size={13} className="text-teal-500" />
                  <span>Verified Production Highlights</span>
                </span>

                <div className="space-y-2 text-xs">
                  {/* Highlight 1: 3 Complete Apps 0-to-1 */}
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        Shipped 3 Complete Apps 0-to-1
                      </strong>
                      <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-semibold">WeyBee</span>
                    </div>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-300 leading-snug pl-3">
                      Architected and delivered Syncware Admin App, Syncware Retailer App, and Everywatch Enterprise CMS (shipped solo in 6 months).
                    </p>
                  </div>

                  {/* Highlight 2: 48-Hour Legacy Code Modernization */}
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        48-Hour Architecture Modernization
                      </strong>
                      <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-semibold">Speed</span>
                    </div>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-300 leading-snug pl-3">
                      Onboarded onto legacy CRA/Redux monolithic codebase and restructured into scalable React & Redux Toolkit within 2 days.
                    </p>
                  </div>

                  {/* Highlight 3: Shopify REST -> GraphQL Migration */}
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        Shopify REST → GraphQL Migration
                      </strong>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">-62% Payload</span>
                    </div>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-300 leading-snug pl-3">
                      Converted high-volume Shopify REST pipelines to batch GraphQL queries, eliminating payload bloat and rate-limit spikes.
                    </p>
                  </div>

                  {/* Highlight 4: Background Data Export Engine */}
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        Automated C#/.NET Export Schedulers
                      </strong>
                      <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-semibold">Backend</span>
                    </div>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-300 leading-snug pl-3">
                      Engineered background event schedulers for bulk Customer, Order, and Product data exports with live UI status grids.
                    </p>
                  </div>

                  {/* Highlight 5: Production Telemetry & Billing */}
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800/80 space-y-1">
                    <div className="flex items-center justify-between">
                      <strong className="text-zinc-900 dark:text-zinc-100 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        Production Telemetry & Billing
                      </strong>
                      <span className="text-[10px] font-mono text-teal-600 dark:text-teal-400 font-semibold">Integrations</span>
                    </div>
                    <p className="text-[11px] text-zinc-600 dark:text-zinc-300 leading-snug pl-3">
                      Production integrations with Stripe billing, Twilio Segment (fanning telemetry out to Userlist), UserMaven, Google OAuth, and RBAC.
                    </p>
                  </div>
                </div>
              </div>

              {/* Core Arsenal Tags */}
              <div className="pt-2 border-t border-zinc-200/80 dark:border-zinc-800">
                <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {['React.js', 'TypeScript', 'C# .NET', 'Node.js', 'GraphQL', 'Redux Toolkit', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60 font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
