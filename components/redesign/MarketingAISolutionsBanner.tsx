"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function MarketingAISolutionsBanner() {
  return (
    <section className="lotech-slide-solutions-section" aria-label="Marketing and AI Automation Solutions">
      {/* SVG Big Kinetic Stroke Heading matching Lotech index-2.html */}
      <div className="lotech-slide-svg-wrap">
        <svg viewBox="0 0 1600 130" className="lotech-slide-svg" preserveAspectRatio="xMidYMid meet">
          <text x="50%" y="60%" dy=".35em" textAnchor="middle" className="lotech-slide-svg-text">
            Marketing &amp; AI Automation Solutions
          </text>
        </svg>
      </div>

      {/* Dynamic Infinite Marquee Track */}
      <div className="lotech-marquee-outer">
        <div className="lotech-marquee-track">
          {[1, 2].map((group) => (
            <div key={group} className="lotech-marquee-group">
              <span className="lotech-marquee-item">
                <Sparkles size={18} className="text-[#C8F31D]" />
                <span>Autonomous AI Workflows</span>
              </span>
              <span className="lotech-marquee-bullet">&bull;</span>
              <span className="lotech-marquee-item">
                <span>High-ROAS Performance Ads</span>
              </span>
              <span className="lotech-marquee-bullet">&bull;</span>
              <span className="lotech-marquee-item">
                <Sparkles size={18} className="text-[#C8F31D]" />
                <span>Sub-Second Next.js Web Systems</span>
              </span>
              <span className="lotech-marquee-bullet">&bull;</span>
              <span className="lotech-marquee-item">
                <span>WhatsApp CRM AI Bots</span>
              </span>
              <span className="lotech-marquee-bullet">&bull;</span>
              <span className="lotech-marquee-item">
                <Sparkles size={18} className="text-[#C8F31D]" />
                <span>Server-Side CAPI &amp; GA4 Attribution</span>
              </span>
              <span className="lotech-marquee-bullet">&bull;</span>
              <span className="lotech-marquee-item">
                <span>Technical SEO &amp; Organic Pipeline</span>
              </span>
              <span className="lotech-marquee-bullet">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
