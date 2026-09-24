"use client";

import React from "react";

export default function ExecutiveTabletMockup({
  title = "Adyantra Performance & AI Automation Console",
}: {
  title?: string;
}) {
  return (
    <div className="w-full relative rounded-2xl sm:rounded-3xl bg-[#090d16] border border-slate-800 shadow-2xl p-4 sm:p-6 overflow-hidden text-white">
      {/* Tablet Bezel Frame Header */}
      <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-slate-800/80 mb-4 sm:mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ef5b52]" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 text-xs font-mono text-slate-400 tracking-wide">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Sync
          </span>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
            Tracked Revenue
          </span>
          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            $428,950
          </div>
          <span className="text-[11px] font-semibold text-emerald-400 mt-1 inline-block">
            ↑ +42.6% MoM
          </span>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
            Blended ROAS
          </span>
          <div className="text-xl sm:text-2xl font-bold text-[#ef5b52] tracking-tight">
            4.82x
          </div>
          <span className="text-[11px] font-semibold text-slate-400 mt-1 inline-block">
            Target: 3.50x
          </span>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
            Qualified Leads
          </span>
          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            3,840
          </div>
          <span className="text-[11px] font-semibold text-emerald-400 mt-1 inline-block">
            Sub-second Dispatch
          </span>
        </div>

        <div className="p-3 sm:p-4 rounded-xl bg-slate-900/90 border border-slate-800">
          <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block mb-1">
            Automation Uptime
          </span>
          <div className="text-xl sm:text-2xl font-bold text-[#38bdf8] tracking-tight">
            99.98%
          </div>
          <span className="text-[11px] font-semibold text-emerald-400 mt-1 inline-block">
            Zero Fallback Drops
          </span>
        </div>
      </div>

      {/* Main Interactive SVG Chart Display */}
      <div className="w-full rounded-xl bg-slate-950/70 border border-slate-800/80 p-4 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="text-sm font-semibold text-white">Full-Funnel Conversion &amp; Ad Attribution</h4>
            <p className="text-xs text-slate-400 mt-0.5">Real-time telemetry across Meta Ads, Google PPC &amp; AI Chatbot Drips</p>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ef5b52]" /> Meta Ads
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" /> Google PPC
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" /> AI Automations
            </span>
          </div>
        </div>

        {/* SVG Curve Chart */}
        <div className="w-full aspect-[21/9] min-h-[140px] max-h-[190px]">
          <svg viewBox="0 0 600 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <defs>
              <linearGradient id="chartGlowCoral" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef5b52" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#ef5b52" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Grid lines */}
            <line x1="0" y1="40" x2="600" y2="40" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="0" y1="80" x2="600" y2="80" stroke="#1e293b" strokeWidth="0.8" />
            <line x1="0" y1="120" x2="600" y2="120" stroke="#1e293b" strokeWidth="0.8" />

            {/* Area Fill */}
            <path
              d="M0 130 Q100 100 200 80 T400 45 T600 20 V160 H0 Z"
              fill="url(#chartGlowCoral)"
            />

            {/* Line 1: Primary Coral Growth Curve */}
            <path
              d="M0 130 Q100 100 200 80 T400 45 T600 20"
              stroke="#ef5b52"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Line 2: Cyan Secondary Line */}
            <path
              d="M0 145 Q120 120 220 95 T420 65 T600 38"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="4 4"
            />
            {/* Line 3: Emerald Base Line */}
            <path
              d="M0 152 Q150 140 250 125 T450 90 T600 60"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Active Data Points */}
            <circle cx="200" cy="80" r="5" fill="#ef5b52" stroke="#ffffff" strokeWidth="2" />
            <circle cx="400" cy="45" r="5" fill="#ef5b52" stroke="#ffffff" strokeWidth="2" />
            <circle cx="600" cy="20" r="5" fill="#ef5b52" stroke="#ffffff" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
