"use client";

import React from "react";

export interface StatItem {
  val: string;
  label: string;
  badge?: string;
  detail?: string;
}

interface StatsBridgeBarProps {
  stats?: StatItem[];
  kickerText?: string;
  className?: string;
}

const defaultStats: StatItem[] = [
  { val: "06+", label: "Years of Industry Expertise" },
  { val: "50+", label: "High-Growth Brands Scaled" },
  { val: "100%", label: "In-House Engineering" },
  { val: "Zero", label: "Outsourced Work" },
];

export default function StatsBridgeBar({
  stats,
  className = "",
}: StatsBridgeBarProps) {
  const items = stats && stats.length > 0 ? stats : defaultStats;

  return (
    <section 
      className={`ady-stats-bridge-bar relative z-20 bg-white border-y border-slate-200/80 py-8 sm:py-12 ${className}`}
      aria-label="Key Performance Metrics"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 ady-stats-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80 text-center">
          {items.map((stat, idx) => (
            <div
              key={idx}
              className={`ady-stat-item flex flex-col items-center justify-center py-5 sm:py-7 px-4 sm:px-6 ${
                idx % 2 === 0 ? "border-r border-slate-200/80 lg:border-r-0" : ""
              }`}
            >
              <div 
                className="ady-stat-value text-3xl sm:text-4xl lg:text-[44px] font-semibold text-slate-900 tracking-tight leading-none mb-2.5 font-sans"
                style={{ color: "#0f172a", WebkitTextFillColor: "#0f172a", fontWeight: 600 }}
              >
                {stat.val}
              </div>
              <p 
                className="ady-stat-label text-xs sm:text-sm lg:text-[14.5px] font-normal text-slate-500 leading-relaxed tracking-normal max-w-[220px] font-sans"
                style={{ color: "#64748b", WebkitTextFillColor: "#64748b", fontWeight: 500 }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

