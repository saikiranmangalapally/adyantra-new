"use client";

import React from "react";

export interface ProcessStepItem {
  title: string;
  description: string;
  timeline?: string;
  step?: string;
}

export interface ServiceProcessMethodologyProps {
  steps?: ProcessStepItem[];
  kicker?: string;
  headline?: string;
  subtitle?: string;
}

export default function ServiceProcessMethodology({
  steps = [],
  kicker = "OUR PROVEN PROCESS",
  headline = "A Transparent Methodology",
  subtitle = "Our structured framework ensures rapid deployment, data-driven optimization, and predictable scaling.",
}: ServiceProcessMethodologyProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] border-b border-[#DCE3EB] font-sans relative overflow-hidden" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ── Section Header (Exact Image Style: Split Header with Yellow Line & Golden Highlight) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            {/* Tagline Badge with Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                {kicker}
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Headline with Two-Line Navy & Golden Yellow */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight leading-[1.12] font-sans text-[#12304A]">
              A Transparent <br />
              <span className="text-[#FFC400]">4-Step Methodology</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-[17px] font-normal leading-relaxed font-sans text-[#64748B]">
              {subtitle}
            </p>
          </div>
        </div>

        {/* ── 4 Process Cards Grid (With Decreased, Balanced Step Numeral Icon Size) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const stepNum = step.step || String(index + 1).padStart(2, "0");

            return (
              <article
                key={index}
                className="bg-[#FFFFFF] rounded-[28px] p-6 sm:p-7 border border-[#DCE3EB] shadow-[0_4px_20px_rgba(18,48,74,0.04)] hover:border-[#FFC400] hover:shadow-[0_16px_36px_rgba(18,48,74,0.1)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Decreased, Elegant Step Badge + Timeline Pill */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#12304A] text-[#FFC400] group-hover:bg-[#FFC400] group-hover:text-[#12304A] flex items-center justify-center text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xs font-sans">
                      {stepNum}
                    </div>
                    {step.timeline && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium border bg-[#EAF2F9] text-[#12304A] border-[#DCE3EB] font-sans">
                        {step.timeline}
                      </span>
                    )}
                  </div>

                  {/* Title in Deep Navy #12304A */}
                  <h3 className="text-base sm:text-lg font-medium text-[#12304A] leading-snug mb-2 font-sans group-hover:text-[#12304A] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description in Slate Gray #64748B */}
                  <p className="text-xs sm:text-[13.5px] text-[#64748B] font-normal leading-relaxed font-sans">
                    {step.description}
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
