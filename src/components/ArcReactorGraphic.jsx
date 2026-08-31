import React from 'react';

export default function ArcReactorGraphic({ progress = 0, size = 280, isGlowing = true }) {
  // 10 copper coil points around the reactor
  const coils = Array.from({ length: 10 }).map((_, i) => {
    const angle = (i * 36) * (Math.PI / 180);
    const cx = 140 + 82 * Math.cos(angle);
    const cy = 140 + 82 * Math.sin(angle);
    const rotation = i * 36;
    return { cx, cy, rotation, angle };
  });

  const coreGlow = 15 + (progress / 100) * 35;
  const powerScale = 1 + (progress / 100) * 0.15;

  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: size, height: size }}>
      {/* Outer ambient energy field */}
      {isGlowing && (
        <div 
          className="absolute inset-0 rounded-full bg-arc-cyan opacity-25 blur-2xl pointer-events-none transition-all duration-150"
          style={{
            transform: `scale(${1 + (progress / 100) * 0.6})`,
            opacity: 0.2 + (progress / 100) * 0.6
          }}
        />
      )}

      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 280 280" 
        className="w-full h-full filter drop-shadow-[0_0_15px_rgba(0,240,255,0.6)]"
      >
        <defs>
          {/* Radial Gradient for Palladium Core */}
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="35%" stopColor="#e0ffff" stopOpacity="0.95" />
            <stop offset="70%" stopColor="#00f0ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#050814" stopOpacity="0.9" />
          </radialGradient>

          {/* Copper Coil Gradient */}
          <linearGradient id="copperCoil" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb86c" />
            <stop offset="50%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          {/* Glowing Arc Cyan Gradient */}
          <linearGradient id="cyanArc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        {/* 1. Heavy Outer Titanium Housing */}
        <circle cx="140" cy="140" r="135" fill="#080c1e" stroke="#1e293b" strokeWidth="4" />
        <circle cx="140" cy="140" r="130" fill="none" stroke="rgba(0, 240, 255, 0.15)" strokeWidth="1.5" />

        {/* 2. Outer Dial Calibration Ticks (360 degrees) */}
        <circle 
          cx="140" cy="140" r="126" 
          fill="none" 
          stroke="rgba(0, 240, 255, 0.4)" 
          strokeWidth="3" 
          strokeDasharray="2 6" 
        />

        {/* 3. High-Voltage Progress Ring */}
        <circle 
          cx="140" cy="140" r="122" 
          fill="none" 
          stroke="url(#cyanArc)" 
          strokeWidth="6" 
          strokeLinecap="round"
          strokeDasharray="766" 
          strokeDashoffset={766 - (766 * progress) / 100}
          transform="rotate(-90 140 140)"
          className="transition-all duration-75 ease-linear"
        />

        {/* 4. Counter-Rotating Segmented Tech Ring */}
        <circle 
          cx="140" cy="140" r="108" 
          fill="none" 
          stroke="rgba(0, 240, 255, 0.35)" 
          strokeWidth="4" 
          strokeDasharray="25 15 5 15" 
          className="animate-spin-slow"
        />

        {/* 5. Intermediate Titanium Mounting Ring */}
        <circle cx="140" cy="140" r="96" fill="#04060f" stroke="#00f0ff" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* 6. The 10 Iconic Copper Coils (Iron Man Mark I / VI Heritage) */}
        {coils.map((c, i) => (
          <g key={i} transform={`translate(${c.cx}, ${c.cy}) rotate(${c.rotation + 90})`}>
            {/* Coil mount base */}
            <rect x="-10" y="-7" width="20" height="14" rx="2" fill="#090d1f" stroke="rgba(0,240,255,0.4)" strokeWidth="1" />
            {/* Copper wire windings */}
            <rect x="-8" y="-5" width="16" height="10" rx="1" fill="url(#copperCoil)" />
            {/* Copper wire ridges */}
            <line x1="-5" y1="-5" x2="-5" y2="5" stroke="#451a03" strokeWidth="1" />
            <line x1="-2" y1="-5" x2="-2" y2="5" stroke="#451a03" strokeWidth="1" />
            <line x1="1" y1="-5" x2="1" y2="5" stroke="#451a03" strokeWidth="1" />
            <line x1="4" y1="-5" x2="4" y2="5" stroke="#451a03" strokeWidth="1" />
            {/* Active glow pulse through coils */}
            <rect 
              x="-8" y="-5" width="16" height="10" 
              fill="#00f0ff" 
              opacity={0.15 + (progress / 100) * 0.55} 
              className="mix-blend-screen"
            />
          </g>
        ))}

        {/* 7. Inner Transformer Ring with Energy Slits */}
        <circle 
          cx="140" cy="140" r="66" 
          fill="#050814" 
          stroke="rgba(0, 240, 255, 0.7)" 
          strokeWidth="3"
        />

        {/* Inner rotating glyph ring */}
        <circle 
          cx="140" cy="140" r="54" 
          fill="none" 
          stroke="rgba(255, 215, 0, 0.5)" 
          strokeWidth="2" 
          strokeDasharray="6 12"
          style={{ animation: 'spin-slow 10s linear infinite reverse' }}
        />

        {/* 8. Palladium Light Core */}
        <g style={{ transform: `scale(${powerScale})`, transformOrigin: '140px 140px' }} className="transition-transform duration-100">
          <circle 
            cx="140" cy="140" r="38" 
            fill="url(#coreGlow)" 
            style={{ filter: `drop-shadow(0 0 ${coreGlow}px #00f0ff)` }}
          />

          {/* Central Triangular Tri-Blade Reticle (Mark VI homage) */}
          <polygon 
            points="140,114 162,154 118,154" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="2.5" 
            opacity={0.85}
          />
          <circle cx="140" cy="140" r="8" fill="#ffffff" />
        </g>
      </svg>
    </div>
  );
}
