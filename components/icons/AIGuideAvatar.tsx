import React from "react";

export function AIGuideAvatar({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-full shadow-md shrink-0"
    >
      <defs>
        <linearGradient id="avatarBgGrad" x1="0" y1="0" x2="44" y2="44">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#090d16" />
        </linearGradient>
        <linearGradient id="aiSparkGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef5b52" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
        <radialGradient id="aiEyeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </radialGradient>
      </defs>
      
      {/* Outer Circle Container */}
      <circle cx="22" cy="22" r="21" fill="url(#avatarBgGrad)" stroke="#ef5b52" strokeWidth="1.5" />
      
      {/* Bot / Agent Head Frame */}
      <rect x="12" y="14" width="20" height="17" rx="6" fill="#1e293b" stroke="#334155" strokeWidth="1.2" />
      
      {/* Top Antenna & Signal Pulse */}
      <line x1="22" y1="10" x2="22" y2="14" stroke="#ef5b52" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="22" cy="9" r="2.2" fill="#ef5b52" />
      
      {/* Glowing Vector Eyes */}
      <circle cx="17.5" cy="21.5" r="2" fill="url(#aiEyeGlow)" />
      <circle cx="26.5" cy="21.5" r="2" fill="url(#aiEyeGlow)" />
      
      {/* Friendly Curved Expression / Smile */}
      <path d="M19 26 Q22 28 25 26" stroke="#f8fafc" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      
      {/* Spark Indicator Badge */}
      <circle cx="34" cy="11" r="5" fill="#ef5b52" />
      <path d="M34 8.5v5M31.5 11h5" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
