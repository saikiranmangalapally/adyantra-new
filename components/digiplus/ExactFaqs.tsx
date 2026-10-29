"use client";

import React, { useState } from "react";
import { ChevronDown, PhoneCall } from "lucide-react";

export default function ExactFaqs() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does address planning?",
      a: "We integrate custom Next.js development, server-side CAPI tracking, direct-response ad creative, and AI follow-up into a unified pipeline for measurable revenue growth.",
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

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5B26]">
                FAQ
              </span>
              <span className="w-16 h-[2px] bg-[#FF5B26]"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.15] mb-8">
              Leading The Best Digital <br />
              <span className="text-[#0D3B66]">Agency In Our Town</span>
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl overflow-hidden transition-all duration-200 border ${
                      isOpen
                        ? "bg-white border-[#0D3B66] shadow-md"
                        : "bg-white/80 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                    >
                      <span className="text-sm sm:text-base font-black text-slate-900">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#FF5B26]" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#0D3B66] text-white rounded-[32px] p-8 sm:p-10 shadow-2xl relative overflow-hidden space-y-6">
              <span className="text-[11px] font-extrabold uppercase px-3 py-1 rounded-full bg-white/10 text-[#F59E0B]">
                Instant Assistance
              </span>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Have A Specific Project In Mind?
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Connect directly with our engineering directors for a 1-on-1 discovery call. We analyze your tech stack and growth metrics with zero sales friction.
              </p>

              <div className="pt-2">
                <a
                  href="tel:01750050088"
                  className="inline-flex items-center gap-3 bg-[#FF5B26] hover:bg-[#E04815] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call 017-50050088</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
