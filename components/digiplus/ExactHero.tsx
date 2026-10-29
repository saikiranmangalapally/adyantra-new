"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react";

export default function ExactHero() {
  return (
    <section
      id="hero"
      aria-label="Hero - Adyantra Digital Agency"
      className="relative min-h-[85vh] pt-14 pb-20 lg:pt-20 lg:pb-24 overflow-hidden bg-[#0A3D6B] bg-gradient-to-b from-[#062B4D] via-[#0A3D6B] to-[#07345B] text-[#FFFFFF] flex flex-col justify-center border-b border-[#A6C8E8]/30 font-sans"
    >
      {/* Decorative gradient blue and navy ambient lighting */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#104F80]/40 rounded-full blur-3xl pointer-events-none -mr-40 -mt-20" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#205C8D]/30 rounded-full blur-3xl pointer-events-none -ml-40 -mb-20" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-[#FFC400]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            
            {/* Light cream announcement bar matching Kanakkupillai (#FFF9E9, #FFC400 border, #062B4D text) */}
            <div className="inline-flex items-center gap-2.5 bg-[#FFF9E9] border border-[#FFC400] text-[#062B4D] text-xs sm:text-[13px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              <div className="flex items-center text-[#FFC400]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-[#062B4D]/30">|</span>
              <span>Full-Funnel Digital Growth &amp; AI Engineering</span>
            </div>

            {/* Headline with Kanakkupillai Typography and Colors: White text #FFFFFF & Yellow accent #FFC400 */}
            <h1 className="leading-[1.08] tracking-tight text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#FFFFFF]">
              Accelerate Your Brand with{" "}
              <span className="text-[#FFC400] block mt-2">
                Performance–Driven AI-Automations
              </span>
              <span className="block text-3xl sm:text-5xl md:text-6xl font-light text-[#FFFFFF] mt-1">
                &amp; Digital Marketing Services.
              </span>
            </h1>

            {/* Subtitle in soft crisp text */}
            <p className="text-sm sm:text-base md:text-lg text-[#A6C8E8] font-medium leading-relaxed max-w-2xl">
              We engineer high-performance digital marketing ecosystems, Next.js web applications, and autonomous AI systems that drive scalable revenue.
            </p>

            {/* Action Buttons: Yellow accent #FFC400 CTA & Lighter Blue / Border Blue secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#FFC400] hover:bg-[#e6b100] text-[#062B4D] font-black text-xs sm:text-sm pl-7 pr-2.5 py-3 rounded-full shadow-[0_8px_24px_rgba(255,196,0,0.35)] transition-transform hover:scale-105 group uppercase tracking-wider cursor-pointer"
              >
                <span>GET STARTED</span>
                <div className="w-9 h-9 rounded-full bg-[#062B4D] text-[#FFC400] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </Link>

              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-[#A6C8E8] hover:border-[#FFC400] text-white hover:text-[#FFC400] font-extrabold text-xs sm:text-sm px-6 py-3 rounded-full transition-all bg-[#07345B]/60 backdrop-blur-sm uppercase tracking-wider"
              >
                <span>EXPLORE SERVICES</span>
              </a>
            </div>

            {/* Metrics & Highlights Strip matching Kanakkupillai Block Color (#245F91 / #07345B) */}
            <div className="mt-10 pt-8 border-t border-[#A6C8E8]/30 grid grid-cols-2 sm:grid-cols-3 gap-6 items-center">
              <div>
                <div className="flex items-baseline text-[#FFFFFF]">
                  <span className="text-4xl sm:text-5xl font-black">98</span>
                  <span className="text-2xl font-black text-[#FFC400]">%</span>
                </div>
                <p className="text-xs font-bold text-[#A6C8E8] mt-1 leading-snug">
                  Customer satisfaction &amp; retention rate
                </p>
              </div>

              <div>
                <div className="flex items-baseline text-[#FFFFFF]">
                  <span className="text-4xl sm:text-5xl font-black">250</span>
                  <span className="text-2xl font-black text-[#FFC400]">+</span>
                </div>
                <p className="text-xs font-bold text-[#A6C8E8] mt-1 leading-snug">
                  Growth projects delivered
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <div className="flex items-baseline text-[#FFFFFF]">
                  <span className="text-4xl sm:text-5xl font-black">10</span>
                  <span className="text-2xl font-black text-[#FFC400]">x+</span>
                </div>
                <p className="text-xs font-bold text-[#A6C8E8] mt-1 leading-snug">
                  Target ROAS on active campaigns
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Element & Card Block matching Search Bar / Card Background (#245F91) */}
          <div className="lg:col-span-4 relative flex flex-col items-center">
            
            {/* Visual Block Card with #245F91 background & #A6C8E8 border */}
            <div className="w-full max-w-[380px] bg-[#245F91]/80 backdrop-blur-md rounded-3xl p-6 border border-[#A6C8E8]/40 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#A6C8E8]/30 mb-5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFC400] flex items-center gap-1.5">
                  <Zap className="w-4 h-4 fill-current" />
                  AGENCY GROWTH ENGINE
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <div className="space-y-4">
                <div className="bg-[#07345B]/80 rounded-2xl p-4 border border-[#A6C8E8]/20">
                  <div className="text-[11px] font-bold text-[#A6C8E8] uppercase tracking-wider mb-1">
                    Performance Marketing
                  </div>
                  <div className="text-base font-black text-white flex items-center justify-between">
                    <span>Meta &amp; Google Ads</span>
                    <span className="text-[#FFC400] text-sm font-extrabold">4.8x ROAS</span>
                  </div>
                </div>

                <div className="bg-[#07345B]/80 rounded-2xl p-4 border border-[#A6C8E8]/20">
                  <div className="text-[11px] font-bold text-[#A6C8E8] uppercase tracking-wider mb-1">
                    AI Automation
                  </div>
                  <div className="text-base font-black text-white flex items-center justify-between">
                    <span>WhatsApp CRM Bots</span>
                    <span className="text-[#FFC400] text-sm font-extrabold">24/7 Live</span>
                  </div>
                </div>

                <div className="bg-[#07345B]/80 rounded-2xl p-4 border border-[#A6C8E8]/20">
                  <div className="text-[11px] font-bold text-[#A6C8E8] uppercase tracking-wider mb-1">
                    Web Development
                  </div>
                  <div className="text-base font-black text-white flex items-center justify-between">
                    <span>Next.js Web Software</span>
                    <span className="text-[#FFC400] text-sm font-extrabold">&lt; 0.8s Load</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#A6C8E8]/30 flex items-center justify-between text-xs text-[#A6C8E8]">
                <span className="flex items-center gap-1.5 font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#FFC400]" />
                  100% In-House Team
                </span>
                <span className="text-[#FFC400] font-bold">Verified</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
