"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdvantaHero() {
  return (
    <section
      id="hero"
      aria-label="Hero - Adyantra Digital Agency"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-[#022b50] via-[#063661] to-[#0b457a] text-white"
    >
      {/* Subtle ambient lighting accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#f5a623]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Headline */}
        <div className="mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[#f5a623] border border-[#f5a623]/30 text-xs font-black uppercase tracking-wider mb-5">
            <span className="w-2 h-2 rounded-full bg-[#f5a623] animate-pulse" />
            <span>AI Automation &amp; Performance Marketing</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-black uppercase text-white leading-[1.04] tracking-tight font-heading">
            Accelerate Your Brand with <br />
            <span className="font-extrabold tracking-[0.02em] text-[#f5a623] inline-block my-1">
              Performance–Driven AI-Automations
            </span>
            <br />
            &amp; Digital Marketing Services
          </h1>
        </div>

        {/* Lower Grid: Description & CTAs on Left, 3D Silicone Ball on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Description & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-7">
            <p className="text-base sm:text-lg lg:text-xl text-sky-100/90 font-medium leading-relaxed max-w-xl">
              We engineer high-performance digital marketing ecosystems and autonomous AI automations to scale brands profitably.
            </p>

            {/* CTA Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4 sm:gap-6">
              {/* Primary Button */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[#f5a623] hover:bg-amber-500 text-[#111216] font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_8px_25px_rgba(245,166,35,0.35)] hover:shadow-[0_12px_30px_rgba(245,166,35,0.45)] group cursor-pointer"
              >
                <span>GET STARTED</span>
                <span className="w-7 h-7 rounded-full bg-[#111216] text-[#f5a623] flex items-center justify-center font-bold text-xs group-hover:translate-x-1 transition-transform">
                  ›
                </span>
              </Link>

              {/* Secondary Ghost Button */}
              <Link
                href="#features"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-md group cursor-pointer"
              >
                <span>OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3D Silicone Ball matching Digiplus Layout 4 */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-[300px] sm:w-[380px] lg:w-[440px] aspect-square flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#f5a623]/20 to-transparent rounded-full blur-2xl animate-pulse" />
              <img
                src="/assets/digiplus/Silicone-Ball.png"
                alt="Adyantra 3D Engine"
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
