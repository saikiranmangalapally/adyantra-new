"use client";

import React from "react";
import { Play } from "lucide-react";

export default function ExactVideoBanner() {
  return (
    <section id="video-section" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[380px] rounded-[36px] overflow-hidden shadow-2xl bg-[#0D3B66] group cursor-pointer border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
            alt="Agency Culture"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-center z-20">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FF5B26] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>
            <div className="space-y-1">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#F59E0B]">
                Watch The Video Teardown
              </span>
              <h3 className="text-xl sm:text-3xl font-black text-white">
                See How We Scale Revenue Systems
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
