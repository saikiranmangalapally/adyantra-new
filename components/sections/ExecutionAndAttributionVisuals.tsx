"use client";

import React from "react";

export function ExecutionRoadmapVisual({
  badge = "Execution Sprint",
  sub = "In-House Tech Delivery",
  steps = [
    { num: "01", title: "Architecture Blueprint", status: "VERIFIED" },
    { num: "02", title: "CAPI & Funnel Build", status: "INTEGRATED" },
    { num: "03", title: "Algorithmic Launch", status: "LIVE" },
    { num: "04", title: "24/7 AI Optimization", status: "AUTONOMOUS" },
  ],
  footerLeft = "Zero Outsourcing",
  footerRight = "100% Accountable",
}: {
  badge?: string;
  sub?: string;
  steps?: Array<{ num: string; title: string; status: string }>;
  footerLeft?: string;
  footerRight?: string;
}) {
  return (
    <div className="w-full h-full min-h-[220px] rounded-2xl bg-white border border-slate-200/90 shadow-sm p-5 flex flex-col justify-between text-slate-800 relative overflow-hidden transition-all hover:border-slate-300">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#ef5b52]">
          {badge}
        </span>
        <span className="text-[11px] font-mono text-slate-500 font-medium">
          {sub}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-auto py-3">
        {steps.map((s, idx) => (
          <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex flex-col hover:bg-slate-100/60 transition-colors">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-mono font-extrabold text-[#ef5b52]">{s.num}</span>
              <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                {s.status}
              </span>
            </div>
            <span className="text-xs font-bold text-slate-900 leading-tight">
              {s.title}
            </span>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>{footerLeft}</span>
        <span className="text-emerald-700 font-bold">{footerRight}</span>
      </div>
    </div>
  );
}

export function DataAttributionVisual({
  badge = "Attribution Telemetry",
  sub = "Server-Side Active",
  metrics = [
    { name: "Meta CAPI Attribution", val: "99.4% Match", width: "94%", color: "bg-gradient-to-r from-[#ef5b52] to-[#7b4bf7]" },
    { name: "Google sGTM Recovery", val: "100% Synced", width: "98%", color: "bg-gradient-to-r from-[#7b4bf7] to-[#0284c7]" },
    { name: "Lead Response Latency (< 5s)", val: "2.4s Avg", width: "95%", color: "bg-[#10b981]" },
  ],
  footerLeft = "iOS14+ Bypass Active",
  footerRight = "+340% Attributed ROAS",
}: {
  badge?: string;
  sub?: string;
  metrics?: Array<{ name: string; val: string; width: string; color: string }>;
  footerLeft?: string;
  footerRight?: string;
}) {
  return (
    <div className="w-full h-full min-h-[220px] rounded-2xl bg-white border border-slate-200/90 shadow-sm p-5 flex flex-col justify-between text-slate-800 relative overflow-hidden transition-all hover:border-slate-300">
      <div className="flex items-center justify-between pb-3 border-b border-slate-100">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284c7]">
          {badge}
        </span>
        <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/70">
          {sub}
        </span>
      </div>

      <div className="my-auto py-3 flex flex-col gap-3">
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-700 font-medium">{m.name}</span>
              <span className="text-emerald-700 font-bold">{m.val}</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-100 border border-slate-200/60 overflow-hidden">
              <div className={`h-full rounded-full ${m.color}`} style={{ width: m.width }} />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
        <span>{footerLeft}</span>
        <span className="text-[#ef5b52] font-bold">{footerRight}</span>
      </div>
    </div>
  );
}
