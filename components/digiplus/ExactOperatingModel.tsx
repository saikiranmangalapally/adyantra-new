"use client";

import React from "react";

export default function ExactOperatingModel() {
  const stats = [
    { value: "50M", label: "Worldwide business Grow", sub: "Global ad spend & revenue managed" },
    { value: "52+", label: "Best Business Awards", sub: "For performance design & AI automation" },
    { value: "6k+", label: "Satisfied Clients", sub: "High-growth brands scaled worldwide" },
  ];

  return (
    <section id="operating-model" className="py-24 md:py-32 bg-[#0D3B66] text-white relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#F59E0B]">
            FUN FACTS
          </span>
          <span className="w-16 h-[2px] bg-[#F59E0B]"></span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-white max-w-4xl mx-auto leading-tight mb-20 tracking-tight">
          We Are Dedicated To Creating <br />
          <span className="text-[#F59E0B]">High-Tech Web Experiences</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto py-4">
          {stats.map((s, idx) => (
            <div key={idx} className="flex items-center justify-center gap-6 text-left p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#F59E0B]/50 transition">
              <span className="text-6xl sm:text-7xl font-black text-white leading-none tracking-tight">
                {s.value}
              </span>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white leading-snug">
                  {s.label}
                </span>
                <span className="text-xs text-slate-300 mt-1">
                  {s.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
