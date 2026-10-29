"use client";

import React from "react";
import { Plus, BarChart3, Lightbulb, Megaphone, Rocket } from "lucide-react";

export default function ExactServices() {
  const serviceCards = [
    {
      id: "maintenance",
      title: "Maintenance & Support",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
      icon: <BarChart3 className="w-5 h-5 text-white" />,
      bullets: [
        "Website Maintenance & Updates",
        "Performance Optimization",
        "Security Monitoring",
        "Backup & Recoveryt",
      ],
    },
    {
      id: "branding",
      title: "Branding & Creative Design",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
      icon: <Lightbulb className="w-5 h-5 text-white" />,
      bullets: [
        "Website Maintenance & Updates",
        "Performance Optimization",
        "Security Monitoring",
        "Backup & Recoveryt",
      ],
    },
    {
      id: "web-design",
      title: "Website Design (UI/UX)",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80",
      icon: <Megaphone className="w-5 h-5 text-white" />,
      bullets: [
        "Website Maintenance & Updates",
        "Performance Optimization",
        "Security Monitoring",
        "Backup & Recoveryt",
      ],
    },
    {
      id: "corporate",
      title: "Corporate/Portfolio Websites",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
      icon: <Rocket className="w-5 h-5 text-white" />,
      bullets: [
        "Website Maintenance & Updates",
        "Performance Optimization",
        "Security Monitoring",
        "Backup & Recoveryt",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tagline Badge with Line */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#FF5B26]">
            SERVICES
          </span>
          <span className="w-16 h-[2px] bg-[#FF5B26]"></span>
        </div>

        {/* Section Heading */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            Empower Your Business With <br />
            Innovative Digital Services
          </h2>
        </div>

        {/* 4 Service Cards Grid (Image 5) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[28px] border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Card Top: Title */}
              <div className="p-6 pb-4">
                <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug group-hover:text-[#FF5B26] transition">
                  {card.title}
                </h3>
              </div>

              {/* Card Middle: Image with Overlapping Circular Icon Badge */}
              <div className="px-6 relative">
                <div className="h-44 rounded-2xl overflow-hidden relative shadow-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>

                {/* Overlapping Badge at Bottom-Left of Image */}
                <div className="absolute -bottom-4 left-9 w-11 h-11 rounded-full bg-[#FF5B26] flex items-center justify-center shadow-lg border-2 border-white">
                  {card.icon}
                </div>
              </div>

              {/* Card Bullet Points */}
              <div className="p-6 pt-8 space-y-2.5">
                {card.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 group-hover:bg-[#FF5B26] transition-colors"></span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Card Bottom: Signature Scooped Corner with MORE ——— (+) */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                <div className="flex items-center gap-2 text-[11px] font-extrabold uppercase text-slate-400 group-hover:text-slate-800 transition">
                  <span>MORE</span>
                  <span className="w-6 h-[1.5px] bg-slate-300"></span>
                </div>

                {/* Circular Orange + Button */}
                <button
                  className="w-10 h-10 rounded-full bg-[#FF5B26] hover:bg-[#E04815] text-white flex items-center justify-center shadow-md transition-transform group-hover:rotate-90 group-hover:scale-110"
                  aria-label="More details"
                >
                  <Plus className="w-5 h-5 stroke-[2.5]" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
