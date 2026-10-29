"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function KPAboutSection() {
  return (
    <section id="about" aria-label="About Our Company" className="py-10 sm:py-12 lg:py-14 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#DCE3EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Split About Card: Retains Signature Deep Navy #12304A Aesthetic */}
        <div className="relative bg-[#12304A] text-white rounded-[32px] sm:rounded-[36px] shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden border border-[#DCE3EB]/20">

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

            {/* Left Column: Floating 3D Geometric Shape & Businessman Photo */}
            <div className="lg:col-span-5 relative flex justify-center items-end min-h-[340px] sm:min-h-[420px]">

              {/* 3D Polyhedron / Geometric Shape Element on Far Left */}
              <div className="absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none select-none z-0 opacity-40">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0D416D] stroke-[#315E80]" strokeWidth="2">
                  <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
                  <line x1="50" y1="5" x2="50" y2="95" />
                  <line x1="10" y1="25" x2="90" y2="75" />
                  <line x1="10" y1="75" x2="90" y2="25" />
                  <circle cx="50" cy="50" r="16" fill="#FFC400" opacity="0.4" />
                </svg>
              </div>

              {/* Businessman Photo */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] flex justify-center items-end">
                <img
                  src="/assets/digiplus/man.png"
                  alt="Engineering Measurable Digital Advantage"
                  className="w-full h-auto max-h-[420px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                />
              </div>

            </div>

            {/* Right Column: About Content, Checkmarks, Progress Bars, Button */}
            <div className="lg:col-span-7 space-y-5">

              {/* Tagline / Sub-badge in #FFC400 */}
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#FFC400] font-sans">
                  ABOUT ADYANTRA DIGITAL
                </span>
                <span className="w-14 h-[2px] bg-[#FFC400]" />
              </div>

              {/* Heading with White & Golden Yellow */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#FFFFFF] tracking-tight leading-[1.12] font-sans">
                Engineering Measurable Digital Advantage <br />
                <span className="text-[#FFC400]">For Scaling Businesses.</span>
              </h2>

              {/* Exact Description in Soft Ice Blue */}
              <p className="text-sm sm:text-base text-[#DCE3EB] font-normal leading-relaxed max-w-xl font-sans">
                Adyantra Digital is a premier technology-first digital marketing and AI automation agency. Over 6+ years, we have partnered with 50+ growth-focused companies to turn their online footprint into a reliable customer engine. By uniting modern web application engineering, performance marketing analytics, and custom AI workflow automation, we eliminate digital inefficiencies and deliver transparent, high-ROAS returns.
              </p>

              {/* 4 Checkmarks with Emerald Green #1AB26E */}
              <div className="grid sm:grid-cols-2 gap-3 pt-1 font-sans">
                <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-normal text-white font-sans">
                  <Check className="w-4 h-4 text-[#1AB26E] stroke-[3]" />
                  <span>6+ Years of Proven Industry Expertise</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-normal text-white font-sans">
                  <Check className="w-4 h-4 text-[#1AB26E] stroke-[3]" />
                  <span>50+ Scaled High-Growth Brand Partners</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-normal text-white font-sans">
                  <Check className="w-4 h-4 text-[#1AB26E] stroke-[3]" />
                  <span>100% In-House Senior Engineering</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm sm:text-[15px] font-normal text-white font-sans">
                  <Check className="w-4 h-4 text-[#1AB26E] stroke-[3]" />
                  <span>Deterministic Zero-Vanity Attribution</span>
                </div>
              </div>

              {/* 2 Progress Bars with Golden Yellow #FFC400 and Emerald Green #1AB26E */}
              <div className="space-y-4 pt-2 max-w-xl font-sans">
                <div>
                  <div className="flex justify-between items-center text-sm sm:text-[15px] font-normal text-white font-sans mb-1.5">
                    <span>Performance Campaign Success Rate</span>
                    <span className="text-[#FFC400] font-medium">94%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#07345B] rounded-full overflow-hidden border border-[#DCE3EB]/30">
                    <div className="h-full bg-[#FFC400] rounded-full transition-all duration-1000 shadow-sm" style={{ width: "94%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center text-sm sm:text-[15px] font-normal text-white font-sans mb-1.5">
                    <span>Client Year-Over-Year Retention</span>
                    <span className="text-[#FFC400] font-medium">88%</span>
                  </div>
                  <div className="w-full h-2.5 bg-[#07345B] rounded-full overflow-hidden border border-[#DCE3EB]/30">
                    <div className="h-full bg-[#1AB26E] rounded-full transition-all duration-1000 shadow-sm" style={{ width: "88%" }} />
                  </div>
                </div>
              </div>

              {/* CTA Button: Primary Golden Yellow #FFC400 */}
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FFC400] hover:bg-[#FFD54F] text-[#0B0F19] font-medium text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5 group font-sans"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
