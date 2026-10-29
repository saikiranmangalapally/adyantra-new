"use client";

import React from "react";

export default function DigiplusHero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-[#f7d08b] flex flex-col justify-center"
      style={{
        backgroundImage: "url(/assets/digiplus/bg-overlay.png)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Massive Headline & Stats */}
          <div className="lg:col-span-8">
            <h1 className="text-[#111216] font-heading leading-[0.92] tracking-tight uppercase">
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[106px] font-black">
                YOUR ULTIMATE
              </span>
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[92px] font-light tracking-[0.04em] mt-1">
                DIGITAL AGENCY
              </span>
            </h1>

            {/* Bottom Row: Stats Counters, Paragraph, and Pill Button */}
            <div className="mt-14 pt-10 border-t border-black/10 grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
              {/* Stat 1 */}
              <div className="sm:col-span-3">
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl font-black text-[#111216] font-heading">
                    98
                  </span>
                  <span className="text-3xl font-black text-[#111216]">%</span>
                </div>
                <p className="text-xs font-medium text-[#444] mt-2 leading-snug">
                  Customer satisfaction and strategical success
                </p>
              </div>

              {/* Stat 2 */}
              <div className="sm:col-span-3">
                <div className="flex items-baseline">
                  <span className="text-5xl md:text-6xl font-black text-[#111216] font-heading">
                    250
                  </span>
                  <span className="text-3xl font-black text-[#111216]">+</span>
                </div>
                <p className="text-xs font-medium text-[#444] mt-2 leading-snug">
                  Projects completed in 24 countries
                </p>
              </div>

              {/* Description & Pill Button */}
              <div className="sm:col-span-6 flex flex-col items-start gap-5">
                <p className="text-sm text-[#333] leading-relaxed">
                  Adyantra Digital engineers high-velocity digital experiences, full-funnel performance marketing, and autonomous AI systems that drive revenue at scale.
                </p>
                <a href="#video-section" className="dp-btn">
                  <span>DISCOVER MORE</span>
                  <div className="dp-btn-arrow">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42 5.43 5.43H5v2z"/>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Authentic 3D Silk/Copper Fluid Sculpture */}
          <div className="lg:col-span-4 relative flex justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-none lg:w-[480px] lg:-mr-16 pointer-events-none select-none">
              <img
                src="/assets/digiplus/obj4.png"
                alt="Digital Agency 3D Fluid Sculpture"
                className="w-full h-auto object-contain filter drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
