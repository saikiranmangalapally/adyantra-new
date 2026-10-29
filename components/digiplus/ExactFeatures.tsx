"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ExactFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: "mobile-app",
      title: "Mobile App\nDevelopment",
      desc: "Refers to the integration of hardware, software.",
      href: "/digital-marketing-growth#mobile",
      icon: (
        <svg className="w-11 h-11 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="2.2">
          <circle cx="16" cy="16" r="7" strokeLinecap="round" />
          <path d="M16 9 V16 H23" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="12" y="28" width="5" height="14" rx="1" />
          <rect x="20" y="24" width="5" height="18" rx="1" />
          <rect x="28" y="20" width="5" height="22" rx="1" />
          <path d="M8 34 L18 25 L26 30 L36 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      watermark: (
        <svg className="w-20 h-20 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="1.5">
          <circle cx="20" cy="18" r="8" strokeDasharray="3 2" />
          <rect x="14" y="28" width="5" height="14" />
          <rect x="22" y="24" width="5" height="18" />
          <rect x="30" y="20" width="5" height="22" />
        </svg>
      ),
    },
    {
      id: "web-dev",
      title: "Web\nDevelopment",
      desc: "Tailored UI/UX for brand identity",
      href: "/digital-marketing-growth#web",
      icon: (
        <svg className="w-11 h-11 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="2.2">
          <circle cx="30" cy="20" r="10" />
          <circle cx="30" cy="20" r="5" />
          <circle cx="30" cy="20" r="1.5" fill="currentColor" />
          <path d="M8 32 L20 25 V39 L8 32 Z" strokeLinejoin="round" />
          <path d="M20 28 H26" strokeLinecap="round" />
          <path d="M20 36 H26" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg className="w-20 h-20 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="1.5">
          <circle cx="28" cy="20" r="10" />
          <path d="M10 32 L20 26 V38 Z" />
        </svg>
      ),
    },
    {
      id: "branding",
      title: "Branding & Graphic\nDesign",
      desc: "Refers to the integration of hardware, software.",
      href: "/digital-marketing-growth#branding",
      icon: (
        <svg className="w-11 h-11 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="2.2">
          <circle cx="28" cy="18" r="6" />
          <path d="M18 36 C18 29 23 25 28 25 C33 25 38 29 38 36" strokeLinecap="round" />
          <path d="M10 24 L14 18 H18 V30 L14 32 Z" strokeLinejoin="round" />
          <path d="M10 38 H18" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg className="w-20 h-20 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="1.5">
          <circle cx="28" cy="18" r="6" />
          <path d="M20 34 C20 28 24 24 28 24 C32 24 36 28 36 34" />
        </svg>
      ),
    },
    {
      id: "social-media",
      title: "Social Media\nMarketing",
      desc: "Posts, stories, reels, videos Engagement,",
      href: "/digital-marketing-growth#social",
      icon: (
        <svg className="w-11 h-11 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="2.2">
          <rect x="14" y="10" width="16" height="28" rx="3" />
          <line x1="20" y1="34" x2="24" y2="34" strokeLinecap="round" />
          <path d="M18 22 H20 L22 18 L24 26 L26 22 H28" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M30 18 C33 16 36 18 36 21 C36 25 30 28 30 28" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg className="w-20 h-20 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="1.5">
          <rect x="14" y="10" width="16" height="28" rx="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="features" aria-label="Features Section" className="py-20 lg:py-28 bg-[#f8f9fa] relative overflow-hidden font-sans border-b border-[#e4e4e4]">
      {/* Background Subtle Contour Wave Watermark */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none object-cover"
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M-50 180 C260 80, 520 380, 920 220 C1240 100, 1420 320, 1550 260"
          stroke="#062B4D"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M-50 250 C260 150, 520 450, 920 290 C1240 170, 1420 390, 1550 330"
          stroke="#062B4D"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pb-4">
        
        {/* Section Tagline Badge with Line matching Screenshot 104408 */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#FFC400]">
            FEATURES
          </span>
          <span className="w-14 h-[2.5px] bg-[#FFC400]" />
        </div>

        {/* Split Header Row matching Screenshot 104408 */}
        <div className="grid lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl lg:text-[52px] font-black text-[#062B4D] tracking-tight leading-[1.12]">
              We Provide Agency To <br />
              Strategic Growth.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs sm:text-sm text-[#555b6d] font-medium leading-relaxed max-w-lg lg:ml-auto lg:text-right">
              Adyantra Digital is the destination where early adopters and innovation enthusiasts discover cutting-edge technology
            </p>
          </div>
        </div>

        {/* 4 Feature Cards Grid matching Screenshot 104408 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((card, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative rounded-[28px] p-8 transition-all duration-300 flex flex-col justify-between group min-h-[350px] mb-4 ${
                  isActive
                    ? "bg-[#FFC400] text-[#062B4D] shadow-[0_15px_35px_rgba(255,196,0,0.28)] -translate-y-2 border border-[#FFC400]"
                    : "bg-white text-[#062B4D] border border-[#e4e4e4] shadow-sm hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                {/* Watermark Icon in top right */}
                <div
                  className={`absolute top-6 right-6 pointer-events-none transition-opacity ${
                    isActive ? "text-black/15" : "text-gray-300/80"
                  }`}
                >
                  {card.watermark}
                </div>

                <div>
                  {/* Top Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-colors ${
                      isActive ? "bg-black/10 text-[#062B4D]" : "bg-[#f4f7f9] text-[#062B4D]"
                    }`}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-black mb-3 leading-snug whitespace-pre-line min-h-[56px] text-[#062B4D]">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs sm:text-[13px] font-medium leading-relaxed ${
                      isActive ? "text-[#062B4D]/85" : "text-[#555b6d]"
                    }`}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Overlapping Black Circular Arrow Button matching Screenshot 104408 */}
                <div className="absolute -bottom-5 left-8 z-20">
                  <Link
                    href={card.href}
                    className="w-12 h-12 rounded-full bg-[#062B4D] text-white hover:bg-black flex items-center justify-center text-lg font-black transition-all shadow-xl group-hover:scale-105 cursor-pointer"
                    aria-label={`Explore ${card.title}`}
                  >
                    ↗
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
