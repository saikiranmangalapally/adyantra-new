"use client";

import React from "react";

export default function DigiplusOperatingModel() {
  const stats = [
    { value: "50M", label: "Worldwide business Grow", sub: "Global ad spend & revenue managed" },
    { value: "52+", label: "Best Business Awards", sub: "For performance design & AI automation" },
    { value: "6k+", label: "Satisfied Clients", sub: "High-growth brands scaled worldwide" },
  ];

  return (
    <section id="operating-model" className="py-24 md:py-36 bg-[#0f1015] text-white relative overflow-hidden">
      {/* Authentic Top-Left 3D Liquid Black Sphere from Digiplus */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 pointer-events-none select-none z-10 opacity-70">
        <img
          src="/assets/digiplus/Silicone-Ball.png"
          alt="3D Liquid Decor"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Authentic Top-Right Yellow Wire Loop from Digiplus */}
      <div className="absolute top-12 right-6 w-24 sm:w-36 pointer-events-none select-none z-10 opacity-80">
        <img
          src="/assets/digiplus/element-2-2-1.png"
          alt="3D Wire Decor"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        {/* Section Subtitle & Title matching Digiplus */}
        <div className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#f5a623] uppercase mb-4">
          <span>FUN FACTS</span>
          <span className="w-8 h-[2px] bg-[#f5a623]"></span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white max-w-4xl mx-auto leading-tight mb-20">
          We Are Dedicated To Creating <br />
          High-Tech Web Experiences
        </h2>

        {/* 3 Metric Counters matching Digiplus counter-block-style2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto py-8">
          {stats.map((s, idx) => (
            <div key={idx} className="flex items-center justify-center gap-6 text-left">
              <span className="text-6xl sm:text-7xl lg:text-8xl font-black font-heading text-white leading-none tracking-tight">
                {s.value}
              </span>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-bold text-white font-heading leading-snug">
                  {s.label}
                </span>
                <span className="text-xs text-gray-400 mt-1">
                  {s.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Authentic Bottom Liquid Chrome 3D Graphic from Digiplus */}
      <div className="relative mt-8 w-full flex justify-center pointer-events-none select-none z-10">
        <img
          src="/assets/digiplus/bfl.png"
          alt="3D Liquid Chrome"
          className="w-full max-w-3xl object-contain -mb-16 opacity-90"
        />
      </div>
    </section>
  );
}
