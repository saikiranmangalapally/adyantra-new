"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function KPTechnicalPillars() {
  const features = [
    {
      id: "seo-search",
      title: "Technical SEO &\nSearch Authority",
      desc: "Topical authority clusters, schema markup, and Core Web Vitals engineered for #1 Google rankings.",
      href: "/seo",
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="2.4">
          <circle cx="16" cy="16" r="7" strokeLinecap="round" />
          <path d="M16 9 V16 H23" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="12" y="28" width="5" height="14" rx="1" />
          <rect x="20" y="24" width="5" height="18" rx="1" />
          <rect x="28" y="20" width="5" height="22" rx="1" />
          <path d="M8 34 L18 25 L26 30 L36 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      watermark: (
        <svg className="w-14 h-14 sm:w-16 sm:h-16 stroke-[#12304A]/10 fill-none" viewBox="0 0 48 48" strokeWidth="1.5">
          <circle cx="20" cy="18" r="8" strokeDasharray="3 2" />
          <rect x="14" y="28" width="5" height="14" />
          <rect x="22" y="24" width="5" height="18" />
          <rect x="30" y="20" width="5" height="22" />
        </svg>
      ),
    },
    {
      id: "performance-ads",
      title: "High-ROAS Meta &\nGoogle Ads",
      desc: "Direct-response ad creatives, server-side CAPI tracking, and audience segmentation for profitable ROAS.",
      href: "/performance-marketing",
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="2.4">
          <circle cx="30" cy="20" r="10" />
          <circle cx="30" cy="20" r="5" />
          <circle cx="30" cy="20" r="1.5" fill="currentColor" />
          <path d="M8 32 L20 25 V39 L8 32 Z" strokeLinejoin="round" />
          <path d="M20 28 H26" strokeLinecap="round" />
          <path d="M20 36 H26" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg className="w-14 h-14 sm:w-16 sm:h-16 stroke-[#12304A]/10 fill-none" viewBox="0 0 48 48" strokeWidth="1.5">
          <circle cx="28" cy="20" r="10" />
          <path d="M10 32 L20 26 V38 Z" />
        </svg>
      ),
    },
    {
      id: "web-software",
      title: "Custom Next.js &\nReact Web Apps",
      desc: "Sub-second load times, headless CMS architecture, and conversion-optimized user journeys.",
      href: "/web-software-development",
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="2.4">
          <circle cx="28" cy="18" r="6" />
          <path d="M18 36 C18 29 23 25 28 25 C33 25 38 29 38 36" strokeLinecap="round" />
          <path d="M10 24 L14 18 H18 V30 L14 32 Z" strokeLinejoin="round" />
          <path d="M10 38 H18" strokeLinecap="round" />
        </svg>
      ),
      watermark: (
        <svg className="w-14 h-14 sm:w-16 sm:h-16 stroke-[#12304A]/10 fill-none" viewBox="0 0 48 48" strokeWidth="1.5">
          <circle cx="28" cy="18" r="6" />
          <path d="M18 36 C18 29 23 25 28 25 C33 25 38 29 38 36" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "ai-whatsapp",
      title: "WhatsApp AI Bots &\nWorkflow Automation",
      desc: "Autonomous 24/7 lead qualification, instant WhatsApp booking, and multi-stage CRM pipelines.",
      href: "/whatsapp-crm",
      icon: (
        <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 stroke-current fill-none" viewBox="0 0 48 48" strokeWidth="2.4">
          <rect x="14" y="8" width="20" height="32" rx="3" />
          <path d="M20 12 H28" strokeLinecap="round" />
          <circle cx="24" cy="34" r="2" />
          <path d="M10 22 C6 22 6 15 10 15 C10 10 16 10 18 14" strokeLinecap="round" strokeDasharray="2 2" />
          <path d="M34 26 C38 26 38 33 34 33 C34 38 28 38 26 34" strokeLinecap="round" strokeDasharray="2 2" />
        </svg>
      ),
      watermark: (
        <svg className="w-14 h-14 sm:w-16 sm:h-16 stroke-[#12304A]/10 fill-none" viewBox="0 0 48 48" strokeWidth="1.5">
          <rect x="14" y="10" width="16" height="28" rx="3" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      aria-label="Features Section"
      className="py-12 sm:py-14 lg:py-16 bg-[#EAF2F9]/40 relative overflow-hidden font-sans border-b border-[#DCE3EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header (Exact Image Style: Split Header with Yellow Line & Golden Highlight) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            {/* Tagline Badge with Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                CORE TECHNICAL PILLARS
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Headline with Navy & Golden Yellow */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#12304A] tracking-tight leading-[1.12] font-sans">
              Engineering Measurable <br />
              <span className="text-[#FFC400]">
                Digital Advantage.
              </span>
            </h2>
          </div>

          {/* Right Subhead Paragraph */}
          <div className="max-w-md">
            <p className="text-base sm:text-[17px] text-[#64748B] font-normal leading-relaxed font-sans">
              Our core competencies driving sustained growth for clients across performance marketing, web software engineering, and AI automation.
            </p>
          </div>
        </div>

        {/* ── 4 Feature Cards Grid in Cloud White #F5F7FA ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {features.map((item) => (
            <div
              key={item.id}
              className="relative bg-[#FFFFFF] rounded-[28px] p-7 pb-8 border border-[#DCE3EB] shadow-[0_4px_20px_rgba(18,48,74,0.04)] hover:border-[#FFC400] hover:shadow-[0_16px_36px_rgba(18,48,74,0.1)] hover:bg-[#FFFFFF] transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-2 cursor-pointer"
            >
              {/* Background Geometric Watermark on Top Right */}
              <div className="absolute top-4 right-4 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                {item.watermark}
              </div>

              {/* Top: Brand Icon Container (Decreased & Balanced) */}
              <div className="relative mb-5 flex items-center justify-between">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#12304A] text-[#FFC400] group-hover:bg-[#FFC400] group-hover:text-[#12304A] flex items-center justify-center transition-all duration-300 shadow-xs">
                  {item.icon}
                </div>
              </div>

              {/* Middle: Title & Description */}
              <div className="relative z-10 flex-1 mb-6">
                <Link href={item.href}>
                  <h3 className="text-lg sm:text-[20px] font-medium text-[#12304A] leading-snug whitespace-pre-line mb-2.5 group-hover:text-[#12304A] transition-colors font-sans">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-sm sm:text-[14.5px] text-[#64748B] font-normal leading-relaxed font-sans">
                  {item.desc}
                </p>
              </div>

              {/* Bottom: Pill Button */}
              <div className="relative z-10 pt-4 border-t border-[#DCE3EB]">
                <Link
                  href={item.href}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-sm group-hover:shadow-md font-sans w-full"
                >
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
