"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function BriqsRevenueBanner() {
  const stats = [
    { num: "06+", label: "Years of Industry Expertise" },
    { num: "50+", label: "High-Growth Brands Scaled" },
    { num: "100%", label: "In-House Engineering" },
    { num: "Zero", label: "Outsourced Work" },
  ];

  return (
    <section className="briqs-revenue-banner" id="growth-banner">
      <div className="briqs-shell">
        <div className="briqs-revenue-card">
          <div className="briqs-revenue-grid">
            {/* Left Headline */}
            <div>
              <div className="briqs-revenue-kicker">
                <Sparkles size={14} className="text-[#C8F31D]" />
                <span>ACCELERATE YOUR REVENUE</span>
              </div>
              <h2 className="briqs-revenue-title">
                Ready to scale your business with <em>performance ads &amp; AI automation?</em>
              </h2>
            </div>

            {/* Right Action */}
            <div className="briqs-revenue-action">
              <p className="briqs-revenue-desc">
                Book a 30-minute discovery call with our technical strategy team to audit your current sales funnel and receive a custom digital expansion plan.
              </p>
              <Link href="/contact" className="briqs-btn-white-pill">
                <span>Book Strategy Call</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Compact Aligned Stats Row */}
          <div className="briqs-revenue-stats-row">
            {stats.map((s, idx) => (
              <div key={idx} className="briqs-revenue-stat-col">
                <div className="briqs-revenue-stat-num">{s.num}</div>
                <div className="briqs-revenue-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
