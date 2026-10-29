"use client";

import React from "react";
import { TrendingUp, ShieldCheck, Zap, Layers, Cpu, Target } from "lucide-react";

export interface CompetencyItem {
  title: string;
  description: string;
}

export interface ServiceCoreCompetenciesProps {
  items?: CompetencyItem[];
  headline?: string;
  subtitle?: string;
}

const icons = [TrendingUp, ShieldCheck, Zap, Layers, Cpu, Target];

export default function ServiceCoreCompetencies({
  items = [],
  headline = "Engineered For Sustainable Market Dominance",
  subtitle = "In modern customer acquisition, fragmented campaigns create cost leaks and attribution blindness. At Adyantra Digital, we architect integrated growth engines where paid channels, conversion rate optimization, and telemetry feed directly into a unified revenue funnel.",
}: ServiceCoreCompetenciesProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-[#FFFFFF] border-b border-[#DCE3EB] font-sans relative overflow-hidden" id="expertise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header (Matching Home Page Tagline + Line Aesthetic) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                OUR EXPERTISE
              </span>
              <span className="w-14 h-[2.5px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Headline with Two-Line Navy & Golden Yellow */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#12304A] tracking-tight leading-[1.12] font-sans">
              Engineered For Sustainable <br />
              <span className="text-[#FFC400]">Market Dominance</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#64748B] font-normal leading-relaxed font-sans">
              {subtitle}
            </p>
          </div>
        </div>

        {/* ── 4 Feature Cards Grid (Matching Home Page Technical Pillars Style) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const coreNum = String(index + 1).padStart(2, "0");

            return (
              <article
                key={index}
                className="bg-[#FFFFFF] rounded-[28px] p-7 pb-8 border border-[#DCE3EB] shadow-[0_4px_20px_rgba(18,48,74,0.04)] hover:border-[#FFC400] hover:shadow-[0_16px_36px_rgba(18,48,74,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Brand Icon Container + Core Pill (Decreased & Balanced) */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#12304A] text-[#FFC400] group-hover:bg-[#FFC400] group-hover:text-[#12304A] flex items-center justify-center transition-all duration-300 shadow-xs">
                      <Icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-[2.2]" />
                    </div>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium border bg-[#EAF2F9] text-[#12304A] border-[#DCE3EB] font-sans">
                      Core {coreNum}
                    </span>
                  </div>

                  {/* Title in Deep Navy #12304A */}
                  <h3 className="text-lg sm:text-[20px] font-medium text-[#12304A] leading-snug mb-2.5 font-sans group-hover:text-[#12304A] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description in Slate Gray #64748B */}
                  <p className="text-sm sm:text-[14.5px] text-[#64748B] font-normal leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
