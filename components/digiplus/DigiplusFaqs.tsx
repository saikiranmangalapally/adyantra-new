"use client";

import React, { useState } from "react";

export default function DigiplusFaqs() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does address planning?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. We integrate custom Next.js development, server-side CAPI tracking, direct-response ad creative, and AI follow-up into a unified pipeline.",
    },
    {
      q: "Reflects your audience’s need?",
      a: "Our algorithmic bidding on Meta Advantage+, Google Performance Max, and LinkedIn B2B targets high-intent buyers with tailored creative messaging that converts at industry-leading ROAS.",
    },
    {
      q: "How to manage Agile teams?",
      a: "We deploy dedicated cross-functional guild pods of senior engineers, media buyers, and direct-response creatives operating in 14-day rapid deployment sprints.",
    },
    {
      q: "What is server-side CAPI tracking?",
      a: "Due to iOS privacy restrictions, standard client-side pixels lose 25% to 40% of conversion data. Our Cloud sGTM and Meta Conversions API send first-party data directly from your server, restoring near-100% attribution.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-32 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: FAQ Accordion matching Digiplus */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#f5a623] uppercase mb-4">
              <span>FAQ</span>
              <span className="w-8 h-[2px] bg-[#f5a623]"></span>
            </div>

            <h2 className="dp-section-title mb-8">
              Leading The Best Digital <br />
              <span>Agency In Our Town</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-xl overflow-hidden bg-white/70 hover:bg-white border border-black/5 transition-all shadow-sm"
                  >
                    <button
                      onClick={() => toggle(idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg font-bold font-heading text-[#111216]">
                        {faq.q}
                      </span>
                      <div
                        style={{ width: "38px", height: "38px", minWidth: "38px", minHeight: "38px", flexShrink: 0 }}
                        className={`rounded-full flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-[#f5a623] text-[#0e0f14] rotate-90"
                            : "bg-[#0e0f14] text-white"
                        }`}
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#555a64] leading-relaxed border-t border-black/5">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Signature Dual-Arc Masked Visual with Center Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[460px] aspect-[4/4.8] rounded-[40px] overflow-hidden shadow-2xl bg-[#0e0f14]">
              {/* Image from Digiplus */}
              <img
                src="/assets/digiplus/women.png"
                alt="Leading Digital Agency"
                className="w-full h-full object-cover"
              />

              {/* Signature Center Experience Circular Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full bg-[#f5a623] border-4 border-white shadow-2xl flex flex-col items-center justify-center text-center p-2 text-[#0e0f14] z-10">
                <span className="text-4xl font-black font-heading leading-none">25+</span>
                <span className="text-[11px] font-extrabold uppercase tracking-wider mt-1.5 leading-tight">
                  Years of <br /> Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
