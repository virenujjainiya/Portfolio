import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, RotateCcw, Shield, Activity, Terminal } from 'lucide-react';
import { sound } from '../utils/soundEffects';

export default function TopNav({ isMuted, onToggleMute, onReboot, activeSection, onNavigate }) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0] + '.' + Math.floor(now.getMilliseconds() / 100);
      setTime(timeStr);
    };
    const interval = setInterval(updateTime, 100);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'overview', label: 'OVERVIEW' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECT_VAULT' },
    { id: 'skills', label: 'TECH_RADAR' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#04060f]/90 backdrop-blur-md border-b border-arc-cyan/30 px-4 md:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
      {/* Stark Industries Brand Badge */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-arc-cyan flex items-center justify-center bg-arc-cyan/10 shadow-[0_0_10px_rgba(0,240,255,0.4)]">
          <div className="w-3 h-3 rounded-full bg-arc-cyan animate-pulse" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-sans font-extrabold text-sm tracking-[0.25em] text-white">
              STARK INDUSTRIES
            </span>
            <span className="text-[10px] font-mono bg-arc-cyan/20 text-arc-cyan px-1.5 py-0.2 rounded border border-arc-cyan/40">
              MARK LXXXV
            </span>
          </div>
          <p className="text-[10px] font-mono text-gray-400">
            J.A.R.V.I.S. INTERFACE // VIREN UJJAINIYA
          </p>
        </div>
      </div>

      {/* Center Navigation Shortcuts */}
      <nav className="hidden md:flex items-center gap-1 bg-black/40 border border-arc-cyan/20 p-1 rounded">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              sound.playBeep(850, 0.03);
              onNavigate(item.id);
            }}
            className={`px-3 py-1 text-xs font-mono rounded transition-all ${
              activeSection === item.id
                ? 'bg-arc-cyan text-stark-black font-bold shadow-[0_0_10px_rgba(0,240,255,0.6)]'
                : 'text-gray-300 hover:text-white hover:bg-arc-cyan/10'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Telemetry & Controls */}
      <div className="flex items-center gap-3 font-mono text-xs">
        {/* Live Clock */}
        <div className="hidden sm:flex items-center gap-1.5 text-arc-cyan bg-arc-cyan/10 border border-arc-cyan/30 px-2.5 py-1 rounded">
          <Activity size={13} className="animate-pulse" />
          <span>{time || '17:40:00.0'}</span>
        </div>

        {/* Audio Control */}
        <button
          onClick={onToggleMute}
          className="p-1.5 border border-arc-cyan/30 rounded text-gray-300 hover:text-arc-cyan hover:border-arc-cyan hover:bg-arc-cyan/10 transition-colors"
          title={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>

        {/* Reboot Button */}
        <button
          onClick={() => {
            sound.playBeep(450, 0.05);
            onReboot();
          }}
          className="flex items-center gap-1.5 px-2.5 py-1 border border-arc-cyan/30 rounded text-gray-300 hover:text-arc-cyan hover:border-arc-cyan hover:bg-arc-cyan/10 transition-colors text-xs"
          title="Reboot Reactor Sequence"
        >
          <RotateCcw size={13} />
          <span className="hidden sm:inline">REBOOT</span>
        </button>
      </div>
    </header>
  );
}
