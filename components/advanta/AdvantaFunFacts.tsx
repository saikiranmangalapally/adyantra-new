"use client";

import React from "react";
import Link from "next/link";

export default function AdvantaFunFacts() {
  const cards = [
    {
      metric: "50+",
      label: "Growth Brands Partnered",
      icon: (
        <svg
          className="w-11 h-11 text-[#f5a623] mb-4"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <rect x="8" y="24" width="7" height="18" rx="1" fill="currentColor" fillOpacity="0.15" />
          <rect x="20" y="16" width="7" height="26" rx="1" fill="currentColor" fillOpacity="0.15" />
          <rect x="32" y="8" width="7" height="34" rx="1" fill="currentColor" fillOpacity="0.15" />
          <path d="M6 28 L18 18 L30 22 L42 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M34 6 H42 V14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      metric: "4.8x",
      label: "Average Campaign ROAS",
      icon: (
        <svg
          className="w-11 h-11 text-[#f5a623] mb-4"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path
            d="M10 38 L22 10 L30 14 L18 42 Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <path
            d="M18 42 L38 20 L44 26 L24 46 Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <path d="M12 32 L20 36 M15 25 L23 29 M18 18 L26 22" />
          <circle cx="18" cy="42" r="3" fill="currentColor" />
        </svg>
      ),
    },
    {
      metric: "<5s",
      label: "WhatsApp AI Response SLA",
      icon: (
        <svg
          className="w-11 h-11 text-[#f5a623] mb-4"
          viewBox="0 0 48 48"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path
            d="M8 18 H16 L28 8 V38 L16 28 H8 Z"
            fill="currentColor"
            fillOpacity="0.15"
          />
          <path d="M13 28 V36 C13 38 15 40 17 40 H19" strokeLinecap="round" />
          <path d="M34 16 C37 20 37 26 34 30" strokeLinecap="round" />
          <path d="M39 12 C44 18 44 28 39 34" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <section className="pt-8 pb-24 bg-[#1b1c23] text-white relative z-10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: FUNFACT Subtitle & Headline with Adyantra Data */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-4">
              <span>FUNFACT</span>
              <span className="w-10 h-[2px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white font-heading leading-[1.1] mb-6">
              We’re Experts In Growth <br /> &amp; AI Automations
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed max-w-md">
              Adyantra Digital unites performance marketing, modern web engineering, and custom AI workflow automation to eliminate digital inefficiencies and deliver transparent, high-ROAS returns.
            </p>

            {/* Pill CTA button matching leadership style */}
            <div className="pt-7">
              <Link
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-3.5 sm:py-4 rounded-full bg-[#111216] hover:bg-[#222530] text-white font-semibold text-sm sm:text-base border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer"
              >
                <span>Discover Our Impact</span>
                <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Interactive Dark Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {cards.map((c, i) => (
                <div
                  key={i}
                  className="bg-[#23242e] border border-white/5 rounded-[24px] p-8 text-center flex flex-col items-center justify-between hover:border-[#f5a623]/40 transition-all duration-300 shadow-xl group"
                >
                  {/* Icon */}
                  <div>{c.icon}</div>

                  {/* Big Number */}
                  <div className="text-4xl sm:text-5xl font-black font-heading text-white tracking-tight mb-2 group-hover:text-[#f5a623] transition-colors">
                    {c.metric}
                  </div>

                  {/* Label */}
                  <div className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-gray-300">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
