"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdvantaFeatures() {
  const [activeCard, setActiveCard] = useState<number>(0);

  const features = [
    {
      id: "mobile",
      title: "Mobile App\nDevelopment",
      desc: "Refers to the integration of hardware, software, and autonomous cloud workflows.",
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="16" cy="16" r="7" strokeLinecap="round" />
          <path d="M16 9 V16 H23" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="12" y="28" width="5" height="14" rx="1" />
          <rect x="20" y="24" width="5" height="18" rx="1" />
          <rect x="28" y="20" width="5" height="22" rx="1" />
          <path d="M8 34 L18 25 L26 30 L36 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      watermarkIcon: (
        <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="20" cy="18" r="8" strokeDasharray="3 2" />
          <rect x="14" y="28" width="5" height="14" />
          <rect x="22" y="24" width="5" height="18" />
          <rect x="30" y="20" width="5" height="22" />
        </svg>
      ),
    },
    {
      id: "web",
      title: "Web\nDevelopment",
      desc: "Tailored Next.js UI/UX for brand identity, sub-second speed, and conversion.",
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="30" cy="20" r="10" />
          <circle cx="30" cy="20" r="5" />
          <circle cx="30" cy="20" r="1.5" fill="currentColor" />
          <path d="M8 32 L20 25 V39 L8 32 Z" strokeLinejoin="round" />
          <path d="M20 28 H26" strokeLinecap="round" />
          <path d="M20 36 H26" strokeLinecap="round" />
        </svg>
      ),
      watermarkIcon: (
        <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="28" cy="20" r="10" />
          <path d="M10 32 L20 26 V38 Z" />
        </svg>
      ),
    },
    {
      id: "branding",
      title: "Branding & Graphic\nDesign",
      desc: "Refers to the integration of hardware, software, brand guidelines, and UI design.",
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="28" cy="18" r="6" />
          <path d="M18 36 C18 29 23 25 28 25 C33 25 38 29 38 36" strokeLinecap="round" />
          <path d="M10 24 L14 18 H18 V30 L14 32 Z" strokeLinejoin="round" />
          <path d="M10 38 H18" strokeLinecap="round" />
        </svg>
      ),
      watermarkIcon: (
        <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="28" cy="18" r="6" />
          <path d="M20 34 C20 28 24 24 28 24 C32 24 36 28 36 34" />
        </svg>
      ),
    },
    {
      id: "social",
      title: "Social Media\nMarketing",
      desc: "Posts, stories, reels, videos engagement, and full-funnel acquisition campaigns.",
      icon: (
        <svg className="w-9 h-9" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.2">
          <rect x="14" y="10" width="16" height="28" rx="3" />
          <line x1="20" y1="34" x2="24" y2="34" strokeLinecap="round" />
          <path d="M18 22 H20 L22 18 L24 26 L26 22 H28" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 18 C33 16 36 18 36 21 C36 25 30 28 30 28" strokeLinecap="round" />
        </svg>
      ),
      watermarkIcon: (
        <svg className="w-16 h-16" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="14" y="10" width="16" height="28" rx="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" aria-label="Features Section" className="py-24 bg-[#f8f9fa] relative overflow-hidden">
      {/* Background Subtle Contour Wave Watermark matching Screenshot 2026-10-27 104557.png */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none object-cover"
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50 180 C260 80, 520 380, 920 220 C1240 100, 1420 320, 1550 260"
          stroke="#111216"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 250 C260 150, 520 450, 920 290 C1240 170, 1420 390, 1550 330"
          stroke="#111216"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 320 C260 220, 520 520, 920 360 C1240 240, 1420 460, 1550 400"
          stroke="#111216"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-6">
        {/* Section Header matching Screenshot 2026-10-27 104557.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#f5a623] font-heading">
                FEATURES
              </span>
              <span className="w-12 h-[2.5px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111216] font-heading leading-tight tracking-tight">
              We Provide Agency To <br />
              Strategic Growth.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm lg:ml-auto">
              Adyantra Digital is the destination where early adopters and innovation enthusiasts discover cutting-edge technology &amp; AI systems.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid matching Screenshot 2026-10-27 104557.png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 items-stretch">
          {features.map((card, idx) => {
            const isActive = activeCard === idx;
            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(idx)}
                className={`relative rounded-[26px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border transition-all duration-300 flex flex-col justify-between group min-h-[360px] mb-6 ${
                  isActive
                    ? "bg-[#f5a623] border-[#f5a623] text-[#111216] shadow-xl -translate-y-2"
                    : "bg-white border-gray-100/90 text-[#111216] hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                <div>
                  {/* Top Row: Left Icon with subtle triangle/badge + Right Faint Watermark Icon */}
                  <div className="flex items-start justify-between mb-8">
                    {/* Left Icon */}
                    <div
                      className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                        isActive ? "bg-black/10 text-[#111216]" : "bg-gray-100 text-[#111216]"
                      }`}
                    >
                      {card.icon}
                    </div>

                    {/* Right Faint Watermark Icon */}
                    <div
                      className={`pointer-events-none transition-opacity ${
                        isActive ? "text-black/15" : "text-gray-300/80"
                      }`}
                    >
                      {card.watermarkIcon}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3
                    className={`text-xl font-black font-heading leading-snug whitespace-pre-line mb-3 min-h-[56px] transition-colors ${
                      isActive ? "text-[#111216]" : "text-[#111216] group-hover:text-[#f5a623]"
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Card Description */}
                  <p
                    className={`text-xs sm:text-[13px] leading-relaxed mb-6 transition-colors ${
                      isActive ? "text-[#111216]/85 font-medium" : "text-gray-500"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Overlapping Black Circular Arrow Button matching Screenshot 2026-10-27 104557.png */}
                <div className="absolute -bottom-5 left-8 z-20">
                  <Link
                    href="#contact"
                    className="w-12 h-12 rounded-full bg-[#111216] text-white hover:bg-black flex items-center justify-center text-lg font-black transition-all shadow-xl group-hover:scale-105 cursor-pointer"
                    aria-label={`Explore ${card.title}`}
                  >
                    ↗
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Centered Pill Button matching Leadership Style */}
        <div className="mt-14 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#111216] hover:bg-[#222530] text-white font-semibold text-sm sm:text-base shadow-[0_12px_28px_rgba(17,18,22,0.25)] hover:shadow-[0_16px_32px_rgba(17,18,22,0.35)] transition-all duration-300 group cursor-pointer"
          >
            <span>Partner With Adyantra</span>
            <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
