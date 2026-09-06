import React, { useState } from 'react';
import { Play, Pause, Bookmark, Clock, ShieldCheck, Sparkles, Volume2 } from 'lucide-react';

export default function FocusTubePreview() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNote, setActiveNote] = useState(0);

  const notes = [
    { time: '04:12', percent: '22%', text: 'Supabase Row-Level Security policy definition' },
    { time: '08:35', percent: '46%', text: 'Fastify schema validation with TypeBox' },
    { time: '14:20', percent: '76%', text: 'Node-cron automated cache sync runner' }
  ];

  const current = notes[activeNote];

  return (
    <div className="w-full rounded-xl border border-zinc-200/90 dark:border-zinc-800 bg-white dark:bg-[#0c0e17] overflow-hidden shadow-sm select-none text-left transition-colors">
      {/* Browser Top Window Bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-zinc-50 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-[10px] font-mono text-zinc-500 dark:text-zinc-400">
          <ShieldCheck size={11} className="text-teal-600 dark:text-teal-400" />
          <span>focus-tube-frontend-lime.vercel.app</span>
        </div>
        <div className="w-10" />
      </div>

      {/* Main UI Mockup */}
      <div className="p-3 bg-zinc-50/50 dark:bg-zinc-950/40 grid grid-cols-12 gap-2.5">
        {/* Left: Video Player Simulation */}
        <div className="col-span-12 sm:col-span-7 flex flex-col space-y-2">
          {/* Simulated Video Screen */}
          <div 
            onClick={() => setIsPlaying(!isPlaying)}
            className="relative aspect-video rounded-lg bg-zinc-950 overflow-hidden flex flex-col justify-between p-3 text-white shadow-inner group cursor-pointer"
          >
            {/* Top video badges */}
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="px-2 py-0.5 rounded bg-teal-600 font-semibold">Curated Learning</span>
              <span className="px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-xs text-zinc-300">1080p HD</span>
            </div>

            {/* Center Play/Pause Icon */}
            <div className="self-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              {isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
            </div>

            {/* Video Controls Bar */}
            <div className="space-y-1.5 bg-gradient-to-t from-black/90 to-transparent p-1 rounded">
              {/* Progress Slider */}
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-teal-500 rounded-full transition-all duration-300"
                  style={{ width: current.percent }}
                />
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-zinc-300">
                <span>{current.time} / 18:45</span>
                <span className="flex items-center gap-1 text-teal-300 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                  {isPlaying ? 'Playing • Distraction-Free' : 'Distraction-Free (Click to Play)'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <div>
              <p className="font-bold text-xs text-zinc-900 dark:text-zinc-100">Advanced PostgreSQL & Fastify Architecture</p>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400">Curated Educational Track • Distraction-Free Player</p>
            </div>
          </div>
        </div>

        {/* Right: Timestamp Notes & Bookmarks Sidebar */}
        <div className="col-span-12 sm:col-span-5 flex flex-col rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#11131c] p-2.5 space-y-2">
          <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-1.5">
            <div className="flex items-center gap-1.5 text-[11px] font-bold text-zinc-900 dark:text-zinc-100">
              <Bookmark size={12} className="text-teal-600 dark:text-teal-400" />
              <span>Timestamp Notes</span>
            </div>
            <span className="text-[9px] font-mono text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 px-1.5 py-0.5 rounded border border-teal-200 dark:border-teal-800">
              Click Time
            </span>
          </div>

          {/* Interactive Notes List */}
          <div className="space-y-1.5 overflow-hidden">
            {notes.map((n, idx) => {
              const isSelected = activeNote === idx;
              return (
                <button
                  key={n.time}
                  onClick={() => {
                    setActiveNote(idx);
                    setIsPlaying(true);
                  }}
                  className={`w-full text-left p-2 rounded-lg border text-[10px] space-y-0.5 transition-all ${
                    isSelected
                      ? 'bg-teal-50/80 dark:bg-teal-950/40 border-teal-300 dark:border-teal-700 shadow-2xs'
                      : 'bg-zinc-50/60 dark:bg-zinc-900/40 border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between font-mono font-bold text-[9px]">
                    <span className={`flex items-center gap-1 ${isSelected ? 'text-teal-700 dark:text-teal-300' : 'text-zinc-500'}`}>
                      <Clock size={10} /> {n.time}
                    </span>
                    <span className={`text-[9px] ${isSelected ? 'text-teal-700 dark:text-teal-300 font-semibold' : 'text-zinc-400'}`}>
                      {isSelected ? 'Active' : 'Jump'}
                    </span>
                  </div>
                  <p className={`line-clamp-1 ${isSelected ? 'text-zinc-900 dark:text-zinc-100 font-medium' : 'text-zinc-600 dark:text-zinc-400'}`}>
                    {n.text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
