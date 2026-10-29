"use client";

import React from "react";

export default function DigiplusProcess() {
  const reasons = [
    {
      title: "Fast working process",
      desc: "Rapid 14-day execution sprints with bi-weekly deployment of creative assets, landing pages, and AI automations.",
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#f5a623]" viewBox="0 0 24 24">
          <path d="M13.13 2.51c-.42-.68-1.4-.67-1.81.01L5.34 12.63c-.41.67.07 1.54.86 1.54h4.34l-2.02 7.08c-.28.98.98 1.62 1.63.83l7.98-9.66c.55-.67.07-1.68-.79-1.68h-4.41l2.2-8.23z"/>
        </svg>
      ),
    },
    {
      title: "Dedicated team",
      desc: "Senior engineering and performance media guild assigned directly to your account with zero junior handoffs.",
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#f5a623]" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 3s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
    },
    {
      title: "24/7 Support & Real-Time Telemetry",
      desc: "Live unified attribution dashboards, server-side CAPI telemetry, and around-the-clock technical uptime monitoring.",
      iconSvg: (
        <svg className="w-6 h-6 fill-current text-[#f5a623]" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-20 md:py-32 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Concentric Circular Illustration from Digiplus */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square rounded-full border-2 border-[#f5a623]/30 p-8 flex items-center justify-center">
              {/* Concentric Inner Ring */}
              <div className="absolute inset-4 rounded-full border border-dashed border-[#f5a623]/40"></div>
              <div className="absolute inset-10 rounded-full border border-[#f5a623]/20"></div>

              {/* The Authentic Illustration Image (Two business people shaking hands) */}
              <img
                src="/assets/digiplus/img.png"
                alt="Reason For Choosing Our Digital Agency"
                className="w-[88%] h-auto object-contain relative z-10"
              />
            </div>
          </div>

          {/* Right Column: Reason For Choosing Our Digital Agency */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#f5a623] uppercase mb-4">
              <span>WHY CHOOSE US</span>
              <span className="w-8 h-[2px] bg-[#f5a623]"></span>
            </div>

            <h2 className="dp-section-title mb-6">
              Reason For Choosing <br />
              <span>Our Digital Agency</span>
            </h2>

            <p className="text-sm md:text-base text-[#555a64] leading-relaxed mb-10">
              We eliminate guesswork with an engineering-grade scientific deployment roadmap that delivers predictable ROI, first-party data security, and category leadership.
            </p>

            {/* Features with Dashed Yellow Ring Icons */}
            <div className="space-y-8">
              {reasons.map((r, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-[#1c1d24] border-2 border-dashed border-[#f5a623] flex items-center justify-center flex-shrink-0 group-hover:bg-[#f5a623] transition-colors shadow-md">
                    <div className="group-hover:text-[#1c1d24] transition-colors">
                      {r.iconSvg}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading text-[#111216] mb-1.5 group-hover:text-[#f5a623] transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-[#666c77] leading-relaxed">
                      {r.desc}
                    </p>
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
