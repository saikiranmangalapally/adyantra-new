"use client";

import React from "react";
import Link from "next/link";

export default function DigiplusAbout() {
  const highlights = [
    {
      title: "Data-Backed Precision",
      desc: "Zero vanity metrics. Every rupee and design decision is tied to incremental revenue and blended ROAS.",
    },
    {
      title: "Full-Stack Guild Execution",
      desc: "Engineers, performance media buyers, and creative strategists operating in unified rapid sprints.",
    },
    {
      title: "Enterprise-Grade Reliability",
      desc: "Server-side tracking, GDPR/SOC2 compliance, and 99.9% uptime Next.js infrastructure.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Dual Layer Visual Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="w-[85%] rounded-[32px] overflow-hidden shadow-2xl border-4 border-[#faf7f2]">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80"
                  alt="Adyantra Digital Team"
                  className="w-full h-[440px] object-cover"
                />
              </div>

              {/* Overlapping Secondary Card */}
              <div className="absolute -bottom-8 -right-2 sm:right-4 w-[60%] rounded-[28px] overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80"
                  alt="Strategy Session"
                  className="w-full h-[260px] object-cover"
                />
              </div>

              {/* Digiplus Circular Experience Badge */}
              <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 w-32 h-32 rounded-full bg-[#f5a623] border-4 border-white shadow-xl flex flex-col items-center justify-center text-center p-2 z-10 text-[#0e0f14]">
                <span className="text-3xl font-black font-heading leading-none">06+</span>
                <span className="text-[10px] font-bold uppercase tracking-wider mt-1">
                  Years Of Excellence
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: About Company Content */}
          <div className="lg:col-span-6 mt-8 lg:mt-0">
            <span className="dp-sub-title">About Adyantra Digital</span>
            <h2 className="dp-section-title mb-6">
              We Are Dedicated To Creating <br />
              <span className="text-[#f5a623]">High-Velocity Web & Revenue Engines</span>
            </h2>

            <p className="text-base text-[#555a64] leading-relaxed mb-8">
              Adyantra Digital is an elite growth agency born at the intersection of full-stack engineering, performance media, and autonomous AI automation. We build resilient growth infrastructure that transforms ambitious startups and scaling enterprises into market leaders.
            </p>

            {/* Feature Highlights */}
            <div className="space-y-5 mb-10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[#faf7f2] border border-black/5 hover:border-[#f5a623]/40 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[#f5a623] text-[#0e0f14] flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-sm">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-heading text-[#121316]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#666c77] mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button & Contact Link */}
            <div className="flex flex-wrap items-center gap-6">
              <a href="#contact" className="dp-btn">
                <span>Discover Our Edge</span>
                <div className="dp-btn-arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </a>

              <a
                href="#process"
                className="text-sm font-bold uppercase tracking-wider text-[#121316] hover:text-[#f5a623] transition-colors flex items-center gap-2"
              >
                Our 4-Step Process <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
