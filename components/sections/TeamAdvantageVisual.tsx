"use client";

import React from "react";

export default function TeamAdvantageVisual() {
  const proofItems = [
    {
      kicker: "DIRECT ACCESS",
      label: "Senior tech leads",
      desc: "Direct Slack & strategy sync",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef5b52" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      kicker: "24/7 TUNING",
      label: "Live attribution",
      desc: "Real-time CAPI & ad pacing",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      kicker: "100% IN-HOUSE",
      label: "Zero outsourcing",
      desc: "Dedicated senior team",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      kicker: "TAILORED GROWTH",
      label: "+340% Avg ROAS",
      desc: "Bespoke full-funnel engines",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full max-w-[600px] mx-auto relative rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-xl p-5 sm:p-6 overflow-hidden text-slate-800 flex flex-col justify-between">
      {/* Subtle organic ambient glow */}
      <div 
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #ef5b52 0%, transparent 70%)" }}
      />
      <div 
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full pointer-events-none opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #38bdf8 0%, transparent 70%)" }}
      />

      {/* Top Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-slate-100 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef5b52]" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-mono tracking-wider uppercase text-slate-700 font-bold">
            Adyantra Engineering &amp; Strategy Squad
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-mono font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>100% In-House</span>
        </div>
      </div>

      {/* Centerpiece: Handcrafted Organic Graphic Designer SVG Workspace Studio */}
      <div className="relative z-10 w-full my-auto py-1">
        <div className="relative w-full aspect-[16/10] max-h-[240px] rounded-xl bg-slate-50 border border-slate-200/80 p-3 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 540 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full object-contain"
          >
            <defs>
              <linearGradient id="deskGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="screenCoral" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#ef5b52" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              <linearGradient id="screenCyan" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
              <linearGradient id="avatarGrad1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef5b52" />
                <stop offset="100%" stopColor="#991b1b" />
              </linearGradient>
              <linearGradient id="avatarGrad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#1e40af" />
              </linearGradient>
              <linearGradient id="avatarGrad3" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#065f46" />
              </linearGradient>
              <filter id="softGlowTeam" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Grid & Ambient Studio Backing */}
            <rect width="540" height="320" rx="10" fill="#090d16" />
            <path d="M40 70 H500 M40 140 H500 M40 210 H500" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
            <path d="M100 30 V280 M270 30 V280 M440 30 V280" stroke="#1e293b" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />

            {/* Organic Monstera Plant (Left) */}
            <g transform="translate(35, 180)">
              <ellipse cx="20" cy="85" rx="14" ry="6" fill="#1e293b" />
              <path d="M12 85 L15 110 L25 110 L28 85 Z" fill="#334155" />
              {/* Organic Leaves */}
              <path d="M20 85 C10 65 0 50 15 35 C25 25 35 45 20 85 Z" fill="#10b981" fillOpacity="0.75" />
              <path d="M20 85 C35 70 50 60 42 42 C35 30 25 50 20 85 Z" fill="#059669" fillOpacity="0.85" />
              <path d="M20 85 C5 75 -5 70 2 58 C8 50 18 65 20 85 Z" fill="#34d399" fillOpacity="0.6" />
            </g>

            {/* Studio Workspace Desk Surface (Modern Curved Glass Desk) */}
            <path d="M70 240 Q270 225 470 240 L480 270 Q270 255 60 270 Z" fill="url(#deskGrad)" stroke="#334155" strokeWidth="1.2" />

            {/* SCREEN 1 (Left): Live Performance & ROAS Graph */}
            <g transform="translate(85, 95)">
              <rect width="115" height="75" rx="6" fill="#0b1120" stroke="#334155" strokeWidth="1.5" />
              {/* Header Bar */}
              <rect width="115" height="14" rx="6" fill="#1e293b" />
              <circle cx="8" cy="7" r="2.5" fill="#ef5b52" />
              <circle cx="16" cy="7" r="2.5" fill="#f59e0b" />
              <circle cx="24" cy="7" r="2.5" fill="#10b981" />
              <text x="65" y="10" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">CAMPAIGN ROAS</text>
              {/* Chart Line & Area */}
              <path d="M10 62 Q30 55 50 48 T85 30 T105 24 L105 65 L10 65 Z" fill="url(#screenCoral)" fillOpacity="0.2" />
              <path d="M10 62 Q30 55 50 48 T85 30 T105 24" stroke="url(#screenCoral)" strokeWidth="2.2" strokeLinecap="round" fill="none" filter="url(#softGlowTeam)" />
              <circle cx="105" cy="24" r="3.5" fill="#ef5b52" />
              <text x="80" y="42" fill="#ef5b52" fontSize="8" fontWeight="800" fontFamily="sans-serif">+340%</text>
              {/* Stand */}
              <rect x="52" y="75" width="11" height="15" fill="#334155" />
              <ellipse cx="57.5" cy="90" rx="14" ry="4" fill="#1e293b" />
            </g>

            {/* SCREEN 2 (Center): Next.js Code & Systems Architecture */}
            <g transform="translate(210, 75)">
              <rect width="130" height="90" rx="8" fill="#080e1a" stroke="#ef5b52" strokeWidth="1.8" filter="url(#softGlowTeam)" />
              <rect width="130" height="15" rx="8" fill="#1e293b" />
              <circle cx="10" cy="7.5" r="2.5" fill="#ef5b52" />
              <text x="65" y="11" fill="#f8fafc" fontSize="7" fontWeight="700" fontFamily="monospace" textAnchor="middle">ENGINEERING CORE</text>
              {/* Code Lines */}
              <rect x="12" y="24" width="38" height="4" rx="2" fill="#38bdf8" />
              <rect x="54" y="24" width="24" height="4" rx="2" fill="#ef5b52" />
              <rect x="12" y="33" width="70" height="3" rx="1.5" fill="#64748b" />
              <rect x="22" y="40" width="55" height="3" rx="1.5" fill="#10b981" />
              <rect x="22" y="47" width="45" height="3" rx="1.5" fill="#f59e0b" />
              <rect x="12" y="56" width="60" height="3" rx="1.5" fill="#64748b" />
              {/* Status Tag */}
              <rect x="12" y="67" width="106" height="13" rx="3" fill="#1e293b" />
              <circle cx="20" cy="73.5" r="2.5" fill="#10b981" />
              <text x="63" y="76.5" fill="#e2e8f0" fontSize="6.5" fontFamily="monospace">Senior Lead Verified</text>
              {/* Stand */}
              <rect x="59" y="90" width="12" height="18" fill="#334155" />
              <ellipse cx="65" cy="108" rx="18" ry="5" fill="#1e293b" />
            </g>

            {/* SCREEN 3 (Right): AI Agent Telemetry & Workflow Pipeline */}
            <g transform="translate(350, 95)">
              <rect width="115" height="75" rx="6" fill="#0b1120" stroke="#334155" strokeWidth="1.5" />
              <rect width="115" height="14" rx="6" fill="#1e293b" />
              <circle cx="8" cy="7" r="2.5" fill="#38bdf8" />
              <text x="65" y="10" fill="#94a3b8" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">AI AGENT PIPELINE</text>
              {/* Neural flow connections */}
              <circle cx="25" cy="40" r="7" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
              <path d="M32 40 H55" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
              <circle cx="62" cy="40" r="9" fill="#1e293b" stroke="#ef5b52" strokeWidth="1.8" />
              <path d="M71 40 H90" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 2" />
              <circle cx="97" cy="40" r="7" fill="#10b981" fillOpacity="0.3" stroke="#10b981" strokeWidth="1.5" />
              {/* Sub text */}
              <text x="57" y="62" fill="#38bdf8" fontSize="7" fontWeight="600" fontFamily="monospace" textAnchor="middle">99.9% UPTIME</text>
              {/* Stand */}
              <rect x="52" y="75" width="11" height="15" fill="#334155" />
              <ellipse cx="57.5" cy="90" rx="14" ry="4" fill="#1e293b" />
            </g>

            {/* TEAM STRATEGIST 1 (Left - Performance Growth Strategist) */}
            <g transform="translate(130, 160)">
              {/* Body / Torso */}
              <path d="M15 65 C15 50 25 45 40 45 C55 45 65 50 65 65 Z" fill="url(#avatarGrad1)" />
              {/* Neck */}
              <rect x="36" y="38" width="8" height="10" fill="#fbcfe8" rx="2" />
              {/* Head */}
              <ellipse cx="40" cy="26" rx="12" ry="14" fill="#fed7aa" />
              {/* Hair */}
              <path d="M28 24 C28 14 34 10 40 10 C46 10 52 14 52 24 C48 16 32 16 28 24 Z" fill="#1e293b" />
              {/* Badge */}
              <rect x="25" y="68" width="30" height="9" rx="3" fill="#0f172a" stroke="#ef5b52" strokeWidth="0.8" />
              <text x="40" y="74.5" fill="#ef5b52" fontSize="5.5" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">GROWTH</text>
            </g>

            {/* TEAM ENGINEER 2 (Center - Senior Full-Stack Architect) */}
            <g transform="translate(245, 145)">
              {/* Body / Torso */}
              <path d="M15 75 C15 55 28 50 45 50 C62 50 75 55 75 75 Z" fill="url(#avatarGrad2)" />
              {/* Neck */}
              <rect x="41" y="40" width="8" height="12" fill="#fde68a" rx="2" />
              {/* Head */}
              <ellipse cx="45" cy="27" rx="13" ry="15" fill="#fde68a" />
              {/* Glasses */}
              <rect x="36" y="24" width="7" height="5" rx="1.5" fill="none" stroke="#ffffff" strokeWidth="1" />
              <rect x="47" y="24" width="7" height="5" rx="1.5" fill="none" stroke="#ffffff" strokeWidth="1" />
              <line x1="43" y1="26" x2="47" y2="26" stroke="#ffffff" strokeWidth="1" />
              {/* Hair */}
              <path d="M32 23 C32 12 38 8 45 8 C52 8 58 12 58 23 C53 14 37 14 32 23 Z" fill="#0f172a" />
              {/* Badge */}
              <rect x="28" y="78" width="34" height="9" rx="3" fill="#0f172a" stroke="#38bdf8" strokeWidth="0.8" />
              <text x="45" y="84.5" fill="#38bdf8" fontSize="5.5" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">ENGINEER</text>
            </g>

            {/* TEAM SPECIALIST 3 (Right - AI Systems Architect) */}
            <g transform="translate(365, 160)">
              {/* Body / Torso */}
              <path d="M15 65 C15 50 25 45 40 45 C55 45 65 50 65 65 Z" fill="url(#avatarGrad3)" />
              {/* Neck */}
              <rect x="36" y="38" width="8" height="10" fill="#fbcfe8" rx="2" />
              {/* Head */}
              <ellipse cx="40" cy="26" rx="12" ry="14" fill="#fbcfe8" />
              {/* Hair */}
              <path d="M27 26 C26 12 34 8 40 8 C47 8 54 12 53 26 C47 16 33 16 27 26 Z" fill="#334155" />
              {/* Badge */}
              <rect x="23" y="68" width="34" height="9" rx="3" fill="#0f172a" stroke="#10b981" strokeWidth="0.8" />
              <text x="40" y="74.5" fill="#10b981" fontSize="5.5" fontWeight="700" fontFamily="sans-serif" textAnchor="middle">AI ARCHITECT</text>
            </g>

            {/* Floating Live Telemetry Chips (Cleanly within illustration bounds) */}
            {/* Chip 1: 0ms Overhead */}
            <g transform="translate(60, 272)">
              <rect width="80" height="20" rx="10" fill="#1e293b" stroke="#334155" strokeWidth="1" />
              <circle cx="12" cy="10" r="3" fill="#10b981" />
              <text x="44" y="13" fill="#cbd5e1" fontSize="7" fontWeight="600" fontFamily="monospace" textAnchor="middle">Zero Latency</text>
            </g>

            {/* Chip 2: Senior Access */}
            <g transform="translate(390, 272)">
              <rect width="90" height="20" rx="10" fill="#1e293b" stroke="#ef5b52" strokeWidth="1" />
              <circle cx="12" cy="10" r="3" fill="#ef5b52" />
              <text x="51" y="13" fill="#ffffff" fontSize="7" fontWeight="600" fontFamily="monospace" textAnchor="middle">Direct Slack Access</text>
            </g>
          </svg>
        </div>
      </div>

      {/* 4 Proof Metric Cards: Perfectly Contained Inside the Card With Zero Overlapping */}
      <div className="relative z-10 grid grid-cols-2 gap-2.5 sm:gap-3 mt-4">
        {proofItems.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/70 flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
              {item.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#ef5b52] leading-none mb-1">
                {item.kicker}
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight truncate">
                {item.label}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 leading-normal mt-0.5 truncate hidden sm:inline">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
