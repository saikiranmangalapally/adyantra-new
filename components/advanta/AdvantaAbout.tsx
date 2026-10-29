"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function AdvantaAbout() {
  const checkmarks = [
    "Strategic Analysis for Businesses",
    "24/7 Support at Any Time",
    "Exceptional Atmosphere",
    "Dedicated Senior Engineering",
  ];

  return (
    <section id="about" aria-label="About Our Company" className="relative font-sans">
      {/* ── Background Split: Light Cream on Top, Dark Charcoal on Bottom matching Screenshot 104557 ── */}
      <div className="bg-[#fcfaf7] pt-24 pb-36 relative">
        {/* Floating 3D Wireframe Polygon on Left matching Screenshot 104557 */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <img
            src="/assets/digiplus/about.png"
            alt="3D Wireframe Element"
            className="w-44 xl:w-56 h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] animate-float"
          />
        </div>

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Dark Card with Cutout Man Overflowing the Top */}
          <div className="rounded-[32px] bg-[#201d24] text-white p-8 sm:p-12 lg:p-16 relative shadow-[0_25px_60px_rgba(0,0,0,0.25)] border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Man with Folded Arms rising above container */}
              <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
                {/* On desktop, the man overlaps the top border */}
                <div className="relative w-full max-w-[380px] lg:max-w-none lg:-mt-36 lg:-mb-16 z-20 flex justify-center">
                  <img
                    src="/assets/digiplus/man.png"
                    alt="Adyantra Leadership - Where Big Ideas Meet Digital Brilliance"
                    className="w-auto h-[400px] sm:h-[480px] lg:h-[520px] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </div>

              {/* Right Column: Content matching Screenshot 104557 */}
              <div className="lg:col-span-7 space-y-6 lg:pl-4">
                {/* Kicker */}
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#f5a623] font-heading">
                    ABOUT OUR COMPANY
                  </span>
                  <span className="w-12 h-[2px] bg-[#f5a623]" />
                </div>

                {/* Title */}
                <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-white leading-tight tracking-tight">
                  Where Big Ideas Meet <br />
                  Digital Brilliance
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl font-medium">
                  Adyantra Digital engineers high-performance customer acquisition engines and autonomous AI automation pipelines to help ambitious brands scale profitably.
                </p>

                {/* Two-Column Area: Checklist on Top-Right + Read More Button & Progress Bars */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 items-start">
                  {/* Left sub-column: Read More Button */}
                  <div className="pt-2">
                    <Link
                      href="/about"
                      className="inline-flex items-center gap-4 px-8 py-3.5 rounded-full bg-[#f5a623] hover:bg-amber-500 text-[#111216] font-black text-xs uppercase tracking-wider shadow-md hover:scale-105 transition-all group"
                    >
                      <span>READ MORE</span>
                      <span className="w-6 h-6 rounded-full bg-[#111216] text-[#f5a623] flex items-center justify-center text-xs font-bold group-hover:translate-x-0.5 transition-transform">
                        ›
                      </span>
                    </Link>
                  </div>

                  {/* Right sub-column: 4 Checkmarks */}
                  <div className="space-y-2.5">
                    {checkmarks.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold text-gray-200">
                        <Check className="w-4 h-4 text-white stroke-[2.5] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Bars matching Screenshot 104557 */}
                <div className="space-y-4 pt-4 border-t border-white/10 max-w-lg">
                  <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1.5">
                      <span className="text-gray-300">Project Complete</span>
                      <span className="text-gray-400">88%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f5a623] rounded-full w-[88%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider mb-1.5">
                      <span className="text-gray-300">Our Company Growth</span>
                      <span className="text-gray-400">75%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                      <div className="h-full bg-[#f5a623] rounded-full w-[75%]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Dark Area with 3 Huge Numbers matching Screenshot 104557 ── */}
      <div className="bg-[#16131c] text-white py-14 border-t border-white/5">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left items-center">
            {/* Stat 1 */}
            <div className="flex items-center justify-center sm:justify-start gap-5">
              <span className="text-5xl lg:text-7xl font-black font-heading text-white tracking-tight">
                1M
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-gray-300 leading-snug">
                Worldwide <br />
                business Grow
              </span>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center justify-center sm:justify-start gap-5">
              <span className="text-5xl lg:text-7xl font-black font-heading text-white tracking-tight">
                52+
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-gray-300 leading-snug">
                Best Business <br />
                Awwards
              </span>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center justify-center sm:justify-start gap-5">
              <span className="text-5xl lg:text-7xl font-black font-heading text-white tracking-tight">
                6k+
              </span>
              <span className="text-xs sm:text-[13px] font-bold text-gray-300 leading-snug">
                Satisfied <br />
                Clients
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
