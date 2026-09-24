"use client";

import React from "react";

export function ExecutionRoadmapVisual() {
  const steps = [
    { num: "01", title: "Architecture Blueprint", status: "VERIFIED" },
    { num: "02", title: "CAPI & Funnel Build", status: "INTEGRATED" },
    { num: "03", title: "Algorithmic Launch", status: "LIVE" },
    { num: "04", title: "24/7 AI Optimization", status: "AUTONOMOUS" },
  ];

  return (
    <div className="w-full h-full min-h-[220px] rounded-2xl bg-[#090d16] border border-slate-800 p-5 flex flex-col justify-between text-white relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <span className="text-xs font-mono uppercase tracking-wider text-[#ef5b52]">
          Execution Sprint
        </span>
        <span className="text-[11px] font-mono text-slate-400">
          In-House Tech Delivery
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-auto py-2">
        {steps.map((s, idx) => (
          <div key={idx} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono font-bold text-[#ef5b52]">{s.num}</span>
              <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-emerald-400">
                {s.status}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-200 leading-tight">
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Zero Outsourcing</span>
        <span className="text-emerald-400 font-medium">100% Accountable</span>
      </div>
    </div>
  );
}

export function DataAttributionVisual() {
  return (
    <div className="w-full h-full min-h-[220px] rounded-2xl bg-[#090d16] border border-slate-800 p-5 flex flex-col justify-between text-white relative overflow-hidden">
      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
        <span className="text-xs font-mono uppercase tracking-wider text-[#38bdf8]">
          Attribution Telemetry
        </span>
        <span className="text-[11px] font-mono text-emerald-400">
          Server-Side Active
        </span>
      </div>

      <div className="my-auto py-2 flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-300">Meta CAPI Attribution</span>
          <span className="text-emerald-400 font-bold">99.4% Match</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-[#ef5b52] to-[#38bdf8]" style={{ width: "94%" }} />
        </div>

        <div className="flex items-center justify-between text-xs font-mono mt-1">
          <span className="text-slate-300">Google sGTM Recovery</span>
          <span className="text-[#38bdf8] font-bold">100% Synced</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div className="h-full rounded-full bg-[#38bdf8]" style={{ width: "98%" }} />
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>iOS14+ Bypass Active</span>
        <span className="text-[#ef5b52] font-semibold">+340% Attributed ROAS</span>
      </div>
    </div>
  );
}
