import React from 'react';
import { Play, Bookmark, Clock, CheckCircle2, ShieldCheck, Sparkles, Volume2 } from 'lucide-react';

export default function FocusTubePreview() {
  return (
    <div className="w-full rounded-xl border border-zinc-200/90 bg-white overflow-hidden shadow-sm select-none text-left">
      {/* Browser Top Window Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 border-b border-zinc-200">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
        </div>
        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white border border-zinc-200 text-[10px] font-mono text-zinc-500">
          <ShieldCheck size={11} className="text-teal-600" />
          <span>focus-tube-frontend-lime.vercel.app</span>
        </div>
        <div className="w-10" />
      </div>

      {/* Main UI Mockup */}
      <div className="p-3 bg-zinc-50/50 grid grid-cols-12 gap-2.5">
        {/* Left: Video Player Simulation (7 cols) */}
        <div className="col-span-12 sm:col-span-7 flex flex-col space-y-2">
          {/* Simulated Video Screen */}
          <div className="relative aspect-video rounded-lg bg-zinc-900 overflow-hidden flex flex-col justify-between p-3 text-white shadow-inner group">
            {/* Top video badges */}
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-teal-600 font-semibold">Curated Learning</span>
              <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-zinc-300">1080p HD</span>
            </div>

            {/* Center Play Icon */}
            <div className="self-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Play size={18} fill="currentColor" className="ml-0.5" />
            </div>

            {/* Video Controls Bar */}
            <div className="space-y-1.5 bg-gradient-to-t from-black/80 to-transparent p-1 rounded">
              {/* Progress Slider */}
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="w-2/5 h-full bg-teal-500 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-300">
                <span>04:12 / 18:45</span>
                <span className="flex items-center gap-1 text-teal-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  Distraction-Free
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <p className="font-bold text-xs text-zinc-900">Advanced PostgreSQL & Fastify Architecture</p>
              <p className="text-[10px] text-zinc-500">Curated by Viren Ujjainiya • Full Stack Course</p>
            </div>
          </div>
        </div>

        {/* Right: Timestamp Notes & Bookmarks Sidebar (5 cols) */}
        <div className="col-span-12 sm:col-span-5 flex flex-col rounded-lg border border-zinc-200 bg-white p-2.5 space-y-2">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-900">
              <Bookmark size={12} className="text-teal-600" />
              <span>Timestamp Notes</span>
            </div>
            <span className="text-[9px] font-mono text-zinc-500 bg-zinc-100 px-1.5 py-0.5 rounded">3 Saved</span>
          </div>

          {/* Notes List */}
          <div className="space-y-1.5 overflow-hidden">
            <div className="p-1.5 rounded-md bg-teal-50/70 border border-teal-200/80 text-[10px] space-y-0.5">
              <div className="flex items-center justify-between font-mono text-teal-800 font-bold text-[9px]">
                <span className="flex items-center gap-1">
                  <Clock size={10} /> 04:12
                </span>
                <span>Active</span>
              </div>
              <p className="text-zinc-700 text-[10px] line-clamp-1">Supabase Row-Level Security policy definition</p>
            </div>

            <div className="p-1.5 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] space-y-0.5">
              <div className="flex items-center justify-between font-mono text-zinc-500 text-[9px]">
                <span className="flex items-center gap-1">
                  <Clock size={10} /> 08:35
                </span>
                <span>Note</span>
              </div>
              <p className="text-zinc-600 text-[10px] line-clamp-1">Fastify schema validation with TypeBox</p>
            </div>

            <div className="p-1.5 rounded-md bg-zinc-50 border border-zinc-100 text-[10px] space-y-0.5">
              <div className="flex items-center justify-between font-mono text-zinc-500 text-[9px]">
                <span className="flex items-center gap-1">
                  <Clock size={10} /> 14:20
                </span>
                <span>Note</span>
              </div>
              <p className="text-zinc-600 text-[10px] line-clamp-1">Node-cron automated cache sync strategy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Footer Banner */}
      <div className="px-3 py-1.5 bg-zinc-100/70 border-t border-zinc-200 flex items-center justify-between text-[10px] font-mono text-zinc-600">
        <span className="flex items-center gap-1 text-teal-800 font-semibold">
          <CheckCircle2 size={11} className="text-teal-600" /> 100% Ads & Recommendations Blocked
        </span>
        <span className="text-zinc-500">Vite + React PWA + Supabase</span>
      </div>
    </div>
  );
}
