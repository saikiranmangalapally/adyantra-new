"use client";

import React from "react";
import { Zap, Users2, ShieldCheck } from "lucide-react";

export default function ExactWhyChoose() {
  const reasons = [
    {
      title: "Fast working process",
      desc: "Rapid 14-day execution sprints with bi-weekly deployment of creative assets, landing pages, and AI automations.",
      icon: <Zap className="w-6 h-6 text-[#FF5B26]" />,
    },
    {
      title: "Dedicated team",
      desc: "Senior engineering and performance media guild assigned directly to your account with zero junior handoffs.",
      icon: <Users2 className="w-6 h-6 text-[#FF5B26]" />,
    },
    {
      title: "24/7 Support & Real-Time Telemetry",
      desc: "Live unified attribution dashboards, server-side CAPI telemetry, and around-the-clock technical uptime monitoring.",
      icon: <ShieldCheck className="w-6 h-6 text-[#FF5B26]" />,
    },
  ];

  return (
    <section id="why-choose" className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden border-b border-slate-200/80">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-square rounded-full border-2 border-[#FF5B26]/30 p-8 flex items-center justify-center bg-white shadow-xl">
              <div className="absolute inset-4 rounded-full border border-dashed border-[#FF5B26]/40"></div>
              <div className="absolute inset-10 rounded-full border border-[#FF5B26]/20"></div>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                alt="Reason For Choosing"
                className="w-[82%] h-[82%] object-cover rounded-full relative z-10 shadow-lg"
              />
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5B26]">
                WHY CHOOSE US
              </span>
              <span className="w-16 h-[2px] bg-[#FF5B26]"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-slate-900 tracking-tight leading-[1.15]">
              Reason For Choosing Our <br />
              <span className="text-[#0D3B66]">Digital Agency</span>
            </h2>

            <div className="space-y-4 pt-2">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-[#FF5B26]/40 shadow-sm hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-50 group-hover:bg-[#FF5B26] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#0D3B66] transition">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mt-1">
                      {item.desc}
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
