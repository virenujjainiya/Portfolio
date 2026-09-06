import React, { useState, useEffect } from 'react';
import { 
  Globe, Clock, CheckCircle2, MessageSquare, 
  Layers, Sparkles 
} from 'lucide-react';

export default function RemoteReadinessBento() {
  const [times, setTimes] = useState({
    ist: '',
    est: '',
    pst: '',
    cet: ''
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        ist: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true }),
        est: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit', hour12: true }),
        pst: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', hour12: true }),
        cet: now.toLocaleTimeString('en-US', { timeZone: 'Europe/Berlin', hour: '2-digit', minute: '2-digit', hour12: true })
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="remote-readiness" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 mb-2">
            <Globe size={13} className="text-teal-600 dark:text-teal-400" />
            <span>Built for Distributed Remote Teams</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-950 dark:text-white">
            Remote Readiness & Work Style
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-medium mt-1">
            Proven track record of autonomous execution, transparent async communication, and global timezone alignment.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* 1. Timezone Overlap Live Clock Card */}
        <div className="bento-card rounded-2xl p-5 sm:p-6 md:col-span-2 flex flex-col justify-between space-y-5">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                  <Clock size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                    Live Timezone Alignment
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    Guaranteed 4–5 Hours Daily Synchronous Collaboration
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active Collaboration Window
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
              Based in India (IST), comfortably overlapping with engineering squads across <strong>US East Coast (EST)</strong>, <strong>US West Coast (PST)</strong>, and <strong>European (CET/BST)</strong> hubs for daily standups, architectural pairing, and rapid unblocking.
            </p>
          </div>

          {/* Real-Time Digital Clocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block font-semibold">
                San Francisco (PST)
              </span>
              <p className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                {times.pst || '--:--'}
              </p>
              <span className="text-[10px] text-zinc-400 font-mono">UTC-8</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block font-semibold">
                New York (EST)
              </span>
              <p className="text-lg font-mono font-bold text-teal-600 dark:text-teal-400 mt-0.5">
                {times.est || '--:--'}
              </p>
              <span className="text-[10px] text-teal-700 dark:text-teal-300 font-mono font-semibold">4h Overlap</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block font-semibold">
                London / Berlin (CET)
              </span>
              <p className="text-lg font-mono font-bold text-teal-600 dark:text-teal-400 mt-0.5">
                {times.cet || '--:--'}
              </p>
              <span className="text-[10px] text-teal-700 dark:text-teal-300 font-mono font-semibold">5h Overlap</span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800">
              <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 block font-semibold">
                Rajkot (My Time, IST)
              </span>
              <p className="text-lg font-mono font-bold text-zinc-900 dark:text-zinc-100 mt-0.5">
                {times.ist || '--:--'}
              </p>
              <span className="text-[10px] text-zinc-400 font-mono">UTC+5:30</span>
            </div>
          </div>
        </div>

        {/* 2. Async-First Communication Card */}
        <div className="bento-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                <MessageSquare size={18} />
              </div>
              <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                Async-First Mindset
              </h3>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Minimizing meeting fatigue through thorough documentation and self-documenting code.
            </p>
          </div>

          <div className="space-y-2.5 text-xs text-zinc-700 dark:text-zinc-300">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Linear / GitHub PRs:</strong> Comprehensive PR descriptions with screen recordings and edge-case notes.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Notion Architecture Docs:</strong> Writing clear API contracts before building schemas.</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={15} className="text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
              <span><strong>Autonomous Unblocking:</strong> Providing solutions and trade-offs rather than open-ended problems.</span>
            </div>
          </div>
        </div>

        {/* 3. Full-Stack End-to-End Ownership */}
        <div className="bento-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                <Layers size={18} />
              </div>
              <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                Zero-to-One Ownership
              </h3>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              No hand-holding required. Full ownership from schema design to frontend delivery.
            </p>
          </div>

          <div className="space-y-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
              <span>Database Architecture</span>
              <span className="text-teal-600 dark:text-teal-400 font-semibold">Postgres / SQL</span>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
              <span>Backend Services</span>
              <span className="text-teal-600 dark:text-teal-400 font-semibold">C# .NET / Fastify</span>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 flex items-center justify-between">
              <span>Client Architecture</span>
              <span className="text-teal-600 dark:text-teal-400 font-semibold">React / TypeScript</span>
            </div>
          </div>
        </div>

        {/* 4. AI-Augmented Engineering Velocity Card */}
        <div className="bento-card rounded-2xl p-5 sm:p-6 md:col-span-2 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-teal-50 dark:bg-teal-950/60 text-teal-600 dark:text-teal-400 border border-teal-200 dark:border-teal-800">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="font-bold text-base text-zinc-950 dark:text-white">
                    AI-Accelerated Development Velocity
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                    2x Shipping Speed with Rigorous Human Code Verification
                  </p>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/60 border border-teal-200 dark:border-teal-800 px-2.5 py-0.5 rounded-full">
                Modern Stack
              </span>
            </div>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              Power user of modern AI coding assistants (<strong>Cursor</strong>, <strong>Claude</strong>, <strong>GitHub Copilot</strong>, <strong>ChatGPT</strong>) to write boilerplate, craft unit test suites, and explore algorithmic trade-offs faster, while maintaining enterprise-grade code cleanliness and security.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            {['Cursor IDE', 'Claude 3.7 / Opus', 'GitHub Copilot', 'Automated Unit Testing', 'Fast Prototyping'].map((tag) => (
              <span 
                key={tag} 
                className="px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/80 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
