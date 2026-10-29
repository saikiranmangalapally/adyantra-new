"use client";

import React from "react";

export default function DigiplusTestimonials() {
  const reviews = [
    {
      name: "David Smith",
      role: "Founder & Leader",
      avatar: "/assets/digiplus/testimonial-1.jpg",
      text: "I recently worked with dixom for my home renovation project, and I couldn't be happier with the results. The attention to detail and craftsmanship were outstanding.",
    },
    {
      name: "Lana Rey",
      role: "Founder & Leader",
      avatar: "/assets/digiplus/testimonial-2-1.jpg",
      text: "I recently worked with dixom for my home renovation project, and I couldn't be happier with the results. The attention to detail and craftsmanship were outstanding.",
    },
    {
      name: "David Smith",
      role: "Founder & Leader",
      avatar: "/assets/digiplus/testimonial-3-1.jpg",
      text: "I recently worked with dixom for my home renovation project, and I couldn't be happier with the results. The attention to detail and craftsmanship were outstanding.",
    },
  ];

  return (
    <section id="reviews" className="py-24 md:py-36 bg-[#0f1015] text-white relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header matching Digiplus */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#f5a623] uppercase mb-4">
            <span>TESTIMONIAL</span>
            <span className="w-8 h-[2px] bg-[#f5a623]"></span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold font-heading text-white leading-tight">
            What They’re Talking <br />
            <span>About Company</span>
          </h2>
        </div>

        {/* 3 Dark Review Cards matching Digiplus testimonial-block-style1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-[24px] bg-[#1a1b24] border border-white/5 hover:border-[#f5a623]/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              {/* Huge Quote Watermark */}
              <span className="absolute top-6 right-8 text-7xl font-serif text-white/5 pointer-events-none select-none group-hover:text-[#f5a623]/15 transition-colors">
                “
              </span>

              <div>
                {/* Client Avatar & Name */}
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#f5a623]"
                  />
                  <div>
                    <h3 className="text-lg font-bold font-heading text-white">
                      {rev.name}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {rev.role}
                    </p>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-gray-300 leading-relaxed relative z-10 mb-8">
                  {rev.text}
                </p>
              </div>

              {/* 5-Star Rating Image from Digiplus */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <img
                  src="/assets/digiplus/stars-5-1-1.png"
                  alt="5 Stars Rating"
                  className="h-4 object-contain"
                />
                <span className="text-xs font-mono text-[#f5a623]">Verified Client</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
