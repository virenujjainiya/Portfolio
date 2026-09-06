import React from 'react';
import { Layers, Zap, Database, CheckCircle2, ShieldCheck, FileCode, ArrowUpRight } from 'lucide-react';

export default function EnterpriseCaseStudyBanner({ projectId }) {
  if (projectId === 'syncware') {
    return (
      <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-4 font-mono select-none space-y-3 shadow-inner">
        {/* Header line */}
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-zinc-800 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-bold text-zinc-200">WeyBee Solutions</span>
            <span className="text-zinc-600">•</span>
            <span>Production SaaS Ecosystem</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 text-[10px] font-bold border border-teal-500/30">
            Full-Stack & Lead
          </span>
        </div>

        {/* 3 Metric Scorecards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] text-zinc-400 block">Daily Ingestion</span>
            <span className="text-sm sm:text-base font-bold text-white">10,000+</span>
            <span className="text-[9px] text-teal-400 block font-sans">Synced Records</span>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] text-zinc-400 block">Shopify Pipeline</span>
            <span className="text-sm sm:text-base font-bold text-emerald-400">-62%</span>
            <span className="text-[9px] text-zinc-400 block font-sans">GraphQL Payload</span>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] text-zinc-400 block">App Suite</span>
            <span className="text-sm sm:text-base font-bold text-teal-300">3 Portals</span>
            <span className="text-[9px] text-zinc-400 block font-sans">Vendor, Admin, Retailer</span>
          </div>
        </div>

        {/* Architecture Badges */}
        <div className="pt-1 flex flex-wrap gap-1.5 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Zap size={10} className="text-teal-400" /> useEndpointSyncState Hook
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Layers size={10} className="text-teal-400" /> Orders Modularization
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Database size={10} className="text-teal-400" /> C# Export Schedulers
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <ShieldCheck size={10} className="text-teal-400" /> Granular RBAC
          </span>
        </div>
      </div>
    );
  }

  if (projectId === 'everywatch') {
    return (
      <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-4 font-mono select-none space-y-3 shadow-inner">
        {/* Header line */}
        <div className="flex items-center justify-between text-[11px] pb-2 border-b border-zinc-800 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="font-bold text-zinc-200">WeyBee Solutions</span>
            <span className="text-zinc-600">•</span>
            <span>Enterprise CMS & Publishing Suite</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 text-[10px] font-bold border border-teal-500/30">
            Sole Frontend Owner
          </span>
        </div>

        {/* 3 Metric Scorecards */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] text-zinc-400 block">Launch Velocity</span>
            <span className="text-sm sm:text-base font-bold text-white">6 Months</span>
            <span className="text-[9px] text-teal-400 block font-sans">0 to 1 Delivery</span>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] text-zinc-400 block">Ownership</span>
            <span className="text-sm sm:text-base font-bold text-teal-300">100%</span>
            <span className="text-[9px] text-zinc-400 block font-sans">Solo Frontend Lead</span>
          </div>
          <div className="p-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800/80">
            <span className="text-[10px] text-zinc-400 block">Form System</span>
            <span className="text-sm sm:text-base font-bold text-emerald-400">Generic</span>
            <span className="text-[9px] text-zinc-400 block font-sans">Schema-Driven Engine</span>
          </div>
        </div>

        {/* Architecture Badges */}
        <div className="pt-1 flex flex-wrap gap-1.5 text-[10px]">
          <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <FileCode size={10} className="text-teal-400" /> JSON Schema Form Engine
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Layers size={10} className="text-teal-400" /> WYSIWYG Article Editor
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <Zap size={10} className="text-teal-400" /> Grid Memoization Optimization
          </span>
          <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/60 flex items-center gap-1">
            <CheckCircle2 size={10} className="text-teal-400" /> Media Asset Suite
          </span>
        </div>
      </div>
    );
  }

  return null;
}
