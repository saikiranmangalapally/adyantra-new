"use client";

import React from "react";
import Link from "next/link";

export default function AdvantaProcess() {
  return (
    <section id="process" className="py-24 bg-[#111218] text-white relative overflow-hidden">
      {/* Background Subtle Curved Elliptical Wave Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-15 pointer-events-none object-cover"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="720" cy="450" rx="680" ry="380" stroke="#f5a623" strokeWidth="1" />
        <ellipse cx="720" cy="450" rx="540" ry="300" stroke="#f5a623" strokeWidth="1" />
        <ellipse cx="720" cy="450" rx="400" ry="220" stroke="#f5a623" strokeWidth="1" />
        <ellipse cx="720" cy="450" rx="260" ry="140" stroke="#f5a623" strokeWidth="1" />
      </svg>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-4">
              <span>HOW IT WORKS</span>
              <span className="w-10 h-[2px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-white font-heading leading-tight tracking-tight">
              A Transparent 4-Step <br />
              Growth Methodology
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm lg:ml-auto">
              Our structured 4-phase framework ensures rapid deployment, data-driven optimization, and predictable scaling.
            </p>
          </div>
        </div>

        {/* 4 Staggered Capsules matching Layout 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {/* Capsule 1: Photo Top, Badge Top */}
          <div className="bg-[#191b24] border border-white/5 rounded-[46px] p-6 sm:p-7 flex flex-col items-center text-center shadow-xl hover:border-white/15 transition-all duration-300 group">
            {/* Top Circular Image */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-visible mb-6">
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white/10">
                <img
                  src="/assets/digiplus/Project1-550x550.jpg"
                  alt="Discovery & Funnel Audit"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Badge 01 at Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#f5a623] text-[#111216] font-black text-xs flex items-center justify-center shadow-md">
                01
              </div>
            </div>

            {/* Bottom Content */}
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 group-hover:text-[#f5a623] transition-colors">
              Discovery &amp; Audit
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
              We audit your digital presence, ad accounts, rankings, tech stack, and competitor gaps.
            </p>
          </div>

          {/* Capsule 2: Content Top, Photo Bottom, Badge Bottom */}
          <div className="bg-[#191b24] border border-white/5 rounded-[46px] p-6 sm:p-7 flex flex-col items-center text-center justify-between shadow-xl hover:border-white/15 transition-all duration-300 group">
            {/* Top Content */}
            <div className="pt-3 mb-6">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 group-hover:text-[#f5a623] transition-colors">
                Strategic Roadmap
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
                We build a precise plan for channel allocation, audiences, messaging, and tech milestones.
              </p>
            </div>

            {/* Bottom Circular Image */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-visible mt-2">
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white/10">
                <img
                  src="/assets/digiplus/project2-550x550.jpg"
                  alt="Strategic Roadmap"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Badge 02 at Bottom */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#f5a623] text-[#111216] font-black text-xs flex items-center justify-center shadow-md">
                02
              </div>
            </div>
          </div>

          {/* Capsule 3: Photo Top, Badge Top */}
          <div className="bg-[#191b24] border border-white/5 rounded-[46px] p-6 sm:p-7 flex flex-col items-center text-center shadow-xl hover:border-white/15 transition-all duration-300 group">
            {/* Top Circular Image */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-visible mb-6">
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white/10">
                <img
                  src="/assets/digiplus/project3-550x550.jpg"
                  alt="In-House Execution"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Badge 03 at Top */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#f5a623] text-[#111216] font-black text-xs flex items-center justify-center shadow-md">
                03
              </div>
            </div>

            {/* Bottom Content */}
            <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 group-hover:text-[#f5a623] transition-colors">
              In-House Execution
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
              Senior developers, media buyers, and AI engineers launch campaigns, apps, and workflows.
            </p>
          </div>

          {/* Capsule 4: Content Top, Photo Bottom, Badge Bottom */}
          <div className="bg-[#191b24] border border-white/5 rounded-[46px] p-6 sm:p-7 flex flex-col items-center text-center justify-between shadow-xl hover:border-white/15 transition-all duration-300 group">
            {/* Top Content */}
            <div className="pt-3 mb-6">
              <h3 className="text-lg sm:text-xl font-bold font-heading text-white mb-2 group-hover:text-[#f5a623] transition-colors">
                Scaling &amp; Growth
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[220px]">
                We monitor performance daily, run tests, tune bids, and optimize conversion paths.
              </p>
            </div>

            {/* Bottom Circular Image */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-visible mt-2">
              <div className="w-full h-full rounded-full overflow-hidden shadow-lg border-2 border-white/10">
                <img
                  src="/assets/digiplus/project4-550x550.jpg"
                  alt="Scaling & Growth"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Badge 04 at Bottom */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#f5a623] text-[#111216] font-black text-xs flex items-center justify-center shadow-md">
                04
              </div>
            </div>
          </div>
        </div>

        {/* Centered Pill Button matching Leadership Style */}
        <div className="mt-14 text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-[#111216] hover:bg-[#1f222d] text-white font-semibold text-sm sm:text-base border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.35)] hover:shadow-[0_16px_32px_rgba(0,0,0,0.5)] transition-all duration-300 group cursor-pointer"
          >
            <span>Start Your 4-Step Journey</span>
            <span className="text-base group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
