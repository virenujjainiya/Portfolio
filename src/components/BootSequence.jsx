import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { sound } from '../utils/soundEffects';
import { Zap, FastForward, Activity, ShieldCheck, Cpu } from 'lucide-react';
import ArcReactorGraphic from './ArcReactorGraphic';

export default function BootSequence({ onBootComplete }) {
  const [progress, setProgress] = useState(0);
  const [isPressing, setIsPressing] = useState(false);
  const [isBooted, setIsBooted] = useState(false);
  const requestRef = useRef();

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsPressing(true);
    sound.startCharge();
  };

  const handlePointerUp = () => {
    if (!isBooted) {
      setIsPressing(false);
      sound.stopCharge();
    }
  };

  const handleSkip = () => {
    if (isBooted) return;
    sound.playBlast();
    setIsBooted(true);
    setProgress(100);
    setTimeout(onBootComplete, 600);
  };

  useEffect(() => {
    const updateProgress = () => {
      if (isPressing && progress < 100) {
        setProgress((prev) => {
          const next = prev + 1.25;
          if (next >= 100) {
            return 100;
          }
          return next;
        });
      } else if (!isPressing && progress > 0 && progress < 100) {
        setProgress((prev) => Math.max(prev - 2.8, 0));
      }
      
      if (progress >= 100 && !isBooted) {
        setIsBooted(true);
        sound.playBlast();
        setTimeout(onBootComplete, 850);
      }
      
      if (!isBooted) {
        requestRef.current = requestAnimationFrame(updateProgress);
      }
    };
    
    requestRef.current = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isPressing, progress, isBooted, onBootComplete]);

  // Jitter/shake effect as power builds
  const shakeX = progress > 70 && !isBooted ? (Math.random() - 0.5) * ((progress - 70) / 3) : 0;
  const shakeY = progress > 70 && !isBooted ? (Math.random() - 0.5) * ((progress - 70) / 3) : 0;

  // Real-time telemetry calculations
  const energyOutput = ((progress / 100) * 8.4).toFixed(2);
  const voltage = ((progress / 100) * 12.8).toFixed(1);

  return (
    <motion.div 
      className="fixed inset-0 bg-[#04060f] flex flex-col items-center justify-center z-50 select-none overflow-hidden"
      animate={{ 
        opacity: isBooted ? 0 : 1,
        scale: isBooted ? 1.08 : 1
      }}
      transition={{ duration: 0.85, ease: "easeOut" }}
    >
      {/* Background Matrix & Scanline */}
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[linear-gradient(rgba(0,240,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.8)_50%)] bg-[length:100%_4px]" />

      {/* Top Banner Telemetry */}
      <div className="absolute top-6 left-6 right-6 flex flex-wrap justify-between items-center text-xs font-mono text-arc-cyan/70 tracking-widest pointer-events-none border-b border-arc-cyan/20 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-arc-cyan animate-ping" />
          <span className="font-bold text-white tracking-widest">STARK INDUSTRIES // MARK LXXXV</span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[11px] text-gray-400">
          <span className="flex items-center gap-1.5"><Activity size={13} className="text-arc-cyan" /> PROTOCOL: J.A.R.V.I.S</span>
          <span className="flex items-center gap-1.5"><ShieldCheck size={13} className="text-stark-gold" /> CONTAINMENT: STABLE</span>
        </div>
      </div>

      {/* Main Center Arc Reactor Component with Interactive Trigger */}
      <div 
        className="relative cursor-pointer touch-none p-4 mt-4"
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onContextMenu={(e) => e.preventDefault()}
        style={{ transform: `translate(${shakeX}px, ${shakeY}px)` }}
      >
        <ArcReactorGraphic progress={progress} size={300} isGlowing={true} />

        {/* Dynamic Voltage / Output Readout Hovering Over Reactor */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/80 border border-arc-cyan/40 px-3 py-0.5 rounded text-[11px] font-mono text-arc-cyan shadow-[0_0_10px_rgba(0,240,255,0.3)] whitespace-nowrap pointer-events-none">
          {energyOutput} GJ/s • {voltage} kV
        </div>

        {/* Screen Flash Upon 100% Power */}
        {isBooted && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.1 }}
            animate={{ opacity: 1, scale: 35 }}
            transition={{ duration: 0.6, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-arc-cyan rounded-full -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none"
          />
        )}
      </div>

      {/* Interactive Command Center */}
      <div className="mt-8 text-center font-mono space-y-3 z-10 px-4 max-w-md w-full">
        <div className="flex items-center justify-center gap-2 text-arc-cyan glow-text tracking-[0.25em] uppercase text-sm font-bold">
          <Zap size={16} className={isPressing ? "animate-bounce text-stark-gold" : "animate-pulse"} />
          {progress >= 100 ? "REACTOR ONLINE // AUTHORIZED" : "PRESS & HOLD TO POWER UP"}
        </div>
        
        {/* Futuristic Meter Bar */}
        <div className="w-full h-2 bg-black/80 border border-arc-cyan/40 rounded-full p-0.5 shadow-[inset_0_0_8px_rgba(0,0,0,0.8)]">
          <div 
            className="h-full bg-gradient-to-r from-arc-cyan via-teal-300 to-stark-gold rounded-full transition-all duration-75 shadow-[0_0_10px_rgba(0,240,255,0.8)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex justify-between text-[11px] text-gray-400 tracking-wider">
          <span>CHARGE: {Math.floor(progress)}%</span>
          <span>EFFICIENCY: 99.8%</span>
        </div>
      </div>

      {/* Direct Bypass Button */}
      <button 
        onClick={handleSkip}
        className="mt-8 flex items-center gap-2 px-4 py-2 border border-arc-cyan/30 bg-arc-cyan/5 hover:bg-arc-cyan/20 hover:border-arc-cyan text-xs font-mono text-gray-300 rounded transition-all duration-200"
      >
        <FastForward size={14} className="text-arc-cyan" />
        <span>SKIP INITIALIZATION (DIRECT ACCESS)</span>
      </button>

      {/* Bottom status badge */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between text-[10px] font-mono text-gray-500 pointer-events-none">
        <span>STARK_SYS_SECURITY // PORTFOLIO_DIRECTIVE</span>
        <span>VIREN_UJJAINIYA // FULL_STACK_CORE</span>
      </div>
    </motion.div>
  );
}
