"use client";

import React from "react";
import Link from "next/link";
import { Check } from "lucide-react";

export default function ExactAbout() {
  return (
    <section id="about" aria-label="About Our Company" className="pt-20 pb-24 lg:pt-28 lg:pb-32 bg-[#f8f9fa] relative overflow-hidden font-sans">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Split About Card (matching Screenshot 5 - home-layout5) */}
        <div className="relative bg-[#062B4D] text-white rounded-[32px] sm:rounded-[40px] shadow-2xl p-6 sm:p-10 lg:p-14 overflow-hidden border border-[#A6C8E8]/20">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Column: Floating 3D Geometric Shape & Businessman Photo */}
            <div className="lg:col-span-5 relative flex justify-center items-end min-h-[380px] sm:min-h-[460px]">
              
              {/* 3D Polyhedron / Black Geometric Shape Element on Far Left */}
              <div className="absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none select-none z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#07345B]/80 stroke-slate-400 drop-shadow-2xl" strokeWidth="2.5">
                  <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
                  <line x1="50" y1="5" x2="50" y2="95" />
                  <line x1="10" y1="25" x2="90" y2="75" />
                  <line x1="10" y1="75" x2="90" y2="25" />
                  <circle cx="50" cy="50" r="16" fill="#FFC400" opacity="0.35" />
                </svg>
              </div>

              {/* Businessman Photo: Authentic man.png Popping Up */}
              <div className="relative z-10 w-full max-w-[360px] sm:max-w-[400px] flex justify-center items-end">
                <img
                  src="/assets/digiplus/man.png"
                  alt="Where Big Ideas Meet Digital Brilliance"
                  className="w-full h-auto max-h-[440px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                />
              </div>

            </div>

            {/* Right Column: About Content, Checkmarks, Progress Bars, Button */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Tagline / Sub-badge with Line matching Screenshot */}
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-[13px] font-black uppercase tracking-widest text-[#FFC400]">
                  ABOUT OUR COMPANY
                </span>
                <span className="w-14 h-[2.5px] bg-[#FFC400]" />
              </div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#FFFFFF] tracking-tight leading-[1.12]">
                Where Big Ideas <br />
                Meet Digital Brilliance
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#A6C8E8] font-medium leading-relaxed max-w-xl">
                Nullam nec ligula a enim dictum sagittis id quis est. Sed in tempus leo. Adyantra unites modern web engineering, performance marketing, and custom AI workflows to transform your business into a scalable customer engine.
              </p>

              {/* 4 Checkmarks in 2 Columns matching Screenshot 5 */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                  <Check className="w-4 h-4 text-[#FFC400] stroke-[3]" />
                  <span>Strategic Analysis for Businesses</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                  <Check className="w-4 h-4 text-[#FFC400] stroke-[3]" />
                  <span>24/7 Support at Any Time</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                  <Check className="w-4 h-4 text-[#FFC400] stroke-[3]" />
                  <span>Exceptional Atmosphere</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-white">
                  <Check className="w-4 h-4 text-[#FFC400] stroke-[3]" />
                  <span>Complimentary Breakfast</span>
                </div>
              </div>

              {/* 2 Progress Bars with Yellow Accent #FFC400 matching Screenshot */}
              <div className="space-y-4 pt-3 max-w-xl">
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-white mb-1.5">
                    <span>Project Complete</span>
                    <span className="text-[#A6C8E8]">88%</span>
                  </div>
                  <div className="w-full h-2 bg-[#07345B] rounded-full overflow-hidden border border-[#A6C8E8]/20">
                    <div className="h-full bg-[#FFC400] rounded-full" style={{ width: "88%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-white mb-1.5">
                    <span>Our Company Growth</span>
                    <span className="text-[#A6C8E8]">75%</span>
                  </div>
                  <div className="w-full h-2 bg-[#07345B] rounded-full overflow-hidden border border-[#A6C8E8]/20">
                    <div className="h-full bg-[#FFC400] rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>

              {/* Pill Button: READ MORE > */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 bg-[#FFC400] hover:bg-[#e6b100] text-[#062B4D] font-extrabold text-xs sm:text-sm pl-6 pr-2 py-2 rounded-full shadow-lg transition-transform hover:scale-105 group uppercase tracking-wider"
                >
                  <span>READ MORE</span>
                  <div className="w-8 h-8 rounded-full bg-[#062B4D] text-[#FFC400] flex items-center justify-center font-bold text-xs group-hover:translate-x-1 transition-transform">
                    ›
                  </div>
                </Link>
              </div>

            </div>

          </div>

        </div>

        {/* 3 Big Stat Counters Below Card matching Screenshot 5 */}
        <div className="mt-14 pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-[#062B4D]">
          
          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-6xl font-black text-[#062B4D] tracking-tight">
              1M
            </span>
            <div className="text-xs sm:text-sm font-extrabold uppercase text-[#062B4D]/80 leading-snug">
              Worldwide <br />
              business Grow
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-6xl font-black text-[#062B4D] tracking-tight">
              52+
            </span>
            <div className="text-xs sm:text-sm font-extrabold uppercase text-[#062B4D]/80 leading-snug">
              Best Business <br />
              Awwards
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-5xl sm:text-6xl font-black text-[#062B4D] tracking-tight">
              6k+
            </span>
            <div className="text-xs sm:text-sm font-extrabold uppercase text-[#062B4D]/80 leading-snug">
              Satisfied <br />
              Clients
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
