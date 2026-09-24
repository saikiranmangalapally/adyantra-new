"use client";

import React from "react";

export default function TransformCtaBannerVisual() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e1b4b] overflow-hidden pointer-events-none">
      {/* Decorative Brand SVG Mesh */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="ctaMeshGlow" cx="70%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#ef5b52" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#ctaMeshGlow)" />
        <path d="M-100 100 C 200 300, 400 -100, 900 200" stroke="#ef5b52" strokeWidth="1.5" strokeDasharray="6 4" fill="none" opacity="0.3" />
        <path d="M-100 300 C 300 500, 500 100, 900 400" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="6 4" fill="none" opacity="0.25" />
      </svg>
      {/* Subtle bottom gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#090d16]/90 via-transparent to-transparent" />
    </div>
  );
}
