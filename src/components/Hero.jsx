import React, { useState } from 'react';
import { Mail, Copy, Check, Sparkles, Code2, FileDown } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';
import EditableText from './EditableText';
import StatusPill from './StatusPill';

export default function Hero({ onNavigate }) {
  const { data, updatePersonal } = usePortfolio();
  const { personal } = data;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-10 sm:py-14 md:py-16 relative">
      <div className="space-y-6 max-w-3xl">
        {/* Real-Time Location & Availability Status Pill */}
        <StatusPill />

        {/* Title Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-white border border-zinc-200/90 text-zinc-800 shadow-2xs">
          <Sparkles size={13} className="text-teal-600 animate-pulse no-print" />
          <EditableText
            value={personal.role}
            onSave={(val) => updatePersonal('role', val)}
            className="font-bold text-zinc-950"
          />
          <span className="text-zinc-300">•</span>
          <span className="text-zinc-600 font-medium">4+ Years Experience</span>
        </div>

        {/* Headline with Proper Boldness and Teal Gradient */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
          Hi, I'm{' '}
          <EditableText
            value={personal.name}
            onSave={(val) => updatePersonal('name', val)}
            className="text-gradient-teal inline-block font-extrabold"
          />
          . Building high-performance SaaS & scalable platforms.
        </h1>

        {/* Subtitle / Summary */}
        <div className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
          <EditableText
            value={personal.summary}
            onSave={(val) => updatePersonal('summary', val)}
            multiline={true}
            className="w-full"
          />
        </div>

        {/* Action Buttons with Prominent Teal Hover */}
        <div className="flex flex-wrap items-center gap-3 pt-2 no-print">
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 text-white hover:bg-teal-700 hover:-translate-y-0.5 font-semibold text-xs sm:text-sm transition-all shadow-md shadow-zinc-950/10 active:translate-y-0"
          >
            <Code2 size={16} />
            <span>View Featured Projects</span>
          </button>

          {/* Actual Direct Resume PDF Download Link */}
          <a
            href="/resume.pdf"
            download="Viren_Ujjainiya_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-zinc-200 hover:border-teal-500 hover:bg-teal-50/40 hover:-translate-y-0.5 text-zinc-800 font-semibold text-xs sm:text-sm transition-all shadow-2xs active:translate-y-0"
            title="Download Official PDF Resume"
          >
            <FileDown size={15} className="text-teal-600" />
            <span>Download Resume</span>
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 hover:-translate-y-0.5 text-zinc-700 font-semibold text-xs sm:text-sm transition-all shadow-2xs group active:translate-y-0"
          >
            {copied ? (
              <>
                <Check size={16} className="text-teal-600" />
                <span className="text-teal-600 font-mono font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} className="text-zinc-400 group-hover:text-zinc-600" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-transparent text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/50 font-medium text-xs sm:text-sm transition-all"
          >
            <Mail size={16} />
            <span>Send Email</span>
          </a>
        </div>

        {/* Prominent Metric Cards with Teal Hover Shift */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-zinc-200/80">
          <div className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-teal-400 hover:shadow-md hover:-translate-y-1 transition-all duration-200 shadow-2xs">
            <p className="text-2xl font-extrabold text-zinc-950">4+ Years</p>
            <p className="text-xs text-zinc-500 font-medium mt-0.5">Software Engineering</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-teal-500 hover:shadow-md hover:-translate-y-1 transition-all duration-200 shadow-2xs">
            <p className="text-2xl font-extrabold text-teal-600">93% Speedup</p>
            <p className="text-xs text-zinc-500 font-medium mt-0.5">SQL & Report Optimization</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-teal-400 hover:shadow-md hover:-translate-y-1 transition-all duration-200 shadow-2xs">
            <p className="text-2xl font-extrabold text-teal-700">10k+ Daily</p>
            <p className="text-xs text-zinc-500 font-medium mt-0.5">Ingestion Pipeline Records</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-teal-400 hover:shadow-md hover:-translate-y-1 transition-all duration-200 shadow-2xs">
            <p className="text-2xl font-extrabold text-zinc-950">2 Complete</p>
            <p className="text-xs text-zinc-500 font-medium mt-0.5">SaaS Apps from 0 to 1</p>
          </div>
        </div>
      </div>
    </section>
  );
}
