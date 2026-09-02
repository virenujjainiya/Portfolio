import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Globe } from 'lucide-react';

export default function StatusPill() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      const formatted = new Intl.DateTimeFormat('en-US', options).format(now);
      setIstTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex flex-wrap items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-white border border-zinc-200/90 shadow-2xs text-xs font-mono text-zinc-600 no-print">
      {/* Location & Live Clock */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-50 border border-zinc-200/60 text-zinc-700 font-medium">
        <MapPin size={13} className="text-teal-600 shrink-0" />
        <span className="font-bold text-zinc-950">Rajkot, India</span>
        <span className="text-zinc-300">•</span>
        <Clock size={12} className="text-zinc-400 shrink-0" />
        <span>{istTime || '07:36 PM IST'}</span>
      </div>

      {/* Online / Active Availability Badge in Teal */}
      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-teal-50 border border-teal-200 text-teal-900 font-bold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
        </span>
        <span className="text-[11px]">Replies in &lt; 2 hrs</span>
      </div>

      {/* Remote Availability Tag */}
      <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-zinc-50 text-zinc-600 text-[11px] font-medium">
        <Globe size={12} className="text-zinc-400 shrink-0" />
        <span>Open for Remote (Global / India) & Relocation</span>
      </div>
    </div>
  );
}
