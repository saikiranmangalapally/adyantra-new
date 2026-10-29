"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export interface ServiceAboutPillarsProps {
  about?: {
    title?: string;
    paragraphs?: string[];
    pillars?: string[];
  };
}

const defaultParagraphs = [
  "Adyantra Digital is a premier technology-first digital marketing and AI automation agency. Over 6+ years, we have partnered with 50+ growth-focused companies to turn their online footprint into a reliable customer engine.",
  "By uniting modern web application engineering, performance marketing analytics, and custom AI workflow automation, we eliminate digital inefficiencies and deliver transparent, high-ROAS returns."
];

const defaultPillars = [
  "Multi-Channel Paid Acquisition (Google Search, PMax & Meta Ads)",
  "Conversion Rate Optimization (CRO & Multivariate A/B Testing)",
  "Server-Side Attribution & First-Party Data Ingestion (sGTM / CAPI)",
  "Dynamic Direct-Response Creative & Video Asset Production",
  "Full-Funnel Customer Lifetime Value (LTV) Expansion",
  "Algorithmic Bidding Optimization & Margin Protection"
];

function renderTwoToneAboutHeading(heading: string) {
  const words = heading.trim().split(" ");
  if (words.length <= 3) {
    return <>{heading}</>;
  }
  const mid = Math.ceil(words.length / 2);
  const line1 = words.slice(0, mid).join(" ");
  const line2 = words.slice(mid).join(" ");
  return (
    <>
      {line1} <br />
      <span className="text-[#FFC400]">{line2}</span>
    </>
  );
}

export default function ServiceAboutPillars({ about }: ServiceAboutPillarsProps) {
  const title = about?.title || "Engineering Measurable Digital Advantage For Scaling Businesses.";
  const paragraphs = about?.paragraphs && about.paragraphs.length > 0 ? about.paragraphs : defaultParagraphs;
  const pillars = about?.pillars && about.pillars.length > 0 ? about.pillars : defaultPillars;

  return (
    <section id="about" aria-label="About Our Company" className="py-10 sm:py-12 lg:py-14 bg-[#FFFFFF] relative overflow-hidden font-sans border-b border-[#DCE3EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main Split About Card: Retains Signature Deep Navy #12304A Aesthetic ── */}
        <div className="relative bg-[#12304A] text-white rounded-[32px] sm:rounded-[36px] shadow-2xl p-6 sm:p-10 lg:p-12 overflow-hidden border border-[#DCE3EB]/20">

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">

            {/* Left Column: Floating 3D Geometric Shape & Businessman Photo */}
            <div className="lg:col-span-5 relative flex justify-center items-end min-h-[340px] sm:min-h-[420px]">
              
              {/* 3D Polyhedron / Geometric Shape Element on Far Left */}
              <div className="absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 w-28 sm:w-36 h-28 sm:h-36 pointer-events-none select-none z-0 opacity-40">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-[#0D416D] stroke-[#315E80]" strokeWidth="2">
                  <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" />
                  <line x1="50" y1="5" x2="50" y2="95" />
                  <line x1="10" y1="25" x2="90" y2="75" />
                  <line x1="10" y1="75" x2="90" y2="25" />
                  <circle cx="50" cy="50" r="16" fill="#FFC400" opacity="0.4" />
                </svg>
              </div>

              {/* Businessman Photo */}
              <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] flex justify-center items-end">
                <img
                  src="/assets/digiplus/man.png"
                  alt="Engineering Measurable Digital Advantage"
                  className="w-full h-auto max-h-[420px] object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)]"
                />
              </div>

            </div>

            {/* Right Column: About Content & Pillars List */}
            <div className="lg:col-span-7 space-y-5">

              {/* Tagline / Sub-badge in #FFC400 with Yellow Line */}
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#FFC400] font-sans">
                  ABOUT ADYANTRA DIGITAL
                </span>
                <span className="w-14 h-[2px] bg-[#FFC400]" />
              </div>

              {/* Heading with White & Golden Yellow */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-[#FFFFFF] tracking-tight leading-[1.12] font-sans">
                {renderTwoToneAboutHeading(title)}
              </h2>

              {/* Description in Soft Ice Blue */}
              <div className="space-y-3.5 text-sm sm:text-base text-[#DCE3EB] font-normal leading-relaxed max-w-xl font-sans">
                {paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Core Technical Pillars List in White & Soft Gray Cards */}
              <div className="pt-2">
                <div className="text-xs sm:text-[13px] font-medium uppercase tracking-wider text-[#FFC400] mb-3">
                  CORE TECHNICAL PILLARS
                </div>
                <div className="grid sm:grid-cols-2 gap-2.5 font-sans">
                  {pillars.slice(0, 6).map((pillar, i) => (
                    <div 
                      key={i} 
                      className="flex items-start gap-2.5 text-xs sm:text-[13px] font-normal text-white bg-white/5 border border-white/10 rounded-xl p-2.5 hover:bg-white/10 transition-colors"
                    >
                      <Check className="w-4 h-4 text-[#1AB26E] stroke-[3] shrink-0 mt-0.5" />
                      <span className="leading-snug">{pillar}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Link Button */}
              <div className="pt-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFC400] hover:bg-[#e6b000] text-[#12304A] font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md group"
                >
                  <span>Read Our Full Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
