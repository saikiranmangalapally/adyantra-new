"use client";

import React from "react";
import Link from "next/link";
import ExpertiseVisualStage, { ExpertiseVisualStageProps } from "./ExpertiseVisualStage";

export interface AdvantageFeature {
  iconColor: "purple" | "indigo" | "sky" | "emerald";
  icon?: React.ReactNode;
  text: string;
}

export interface OurTeamExpertiseSectionProps {
  kicker?: string;
  heading?: React.ReactNode;
  description?: string;
  features?: AdvantageFeature[];
  ctaText?: string;
  ctaHref?: string;
  chipProps?: ExpertiseVisualStageProps;
}

export default function OurTeamExpertiseSection({
  kicker = "OUR TEAM & EXPERTISE",
  heading,
  description = "We replace non-technical account managers with senior developers, performance marketers, and AI architects who take complete accountability for your digital performance.",
  features,
  ctaText = "Meet Our Leadership",
  ctaHref = "/about",
  chipProps,
}: OurTeamExpertiseSectionProps) {
  const defaultHeading = (
    <>
      Work Directly with Senior <br />
      Engineers &amp; <span className="team-growth-highlight">Growth Strategists</span>
    </>
  );

  const defaultFeatures: AdvantageFeature[] = [
    {
      iconColor: "purple",
      text: "100% In-House Execution",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      iconColor: "indigo",
      text: "Direct Senior Technical Access",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      iconColor: "sky",
      text: "Tailored Growth Strategies",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
          <line x1="9" y1="12" x2="15" y2="18" />
        </svg>
      ),
    },
    {
      iconColor: "emerald",
      text: "Continuous Campaign Optimization",
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
    },
  ];

  const activeFeatures = features || defaultFeatures;

  return (
    <section className="section expertise" id="advantage" aria-labelledby="expertise-title">
      <div className="shell split-layout">
        {/* Left: 3D Isometric Team Studio with 4 Floating Corner Tags */}
        <ExpertiseVisualStage {...chipProps} />

        {/* Right: Exact Copy Block matching Theme Typography & Palette */}
        <div className="copy-block advantage-copy-block">
          <span className="ref-pill-kicker">{kicker}</span>
          <h2 id="expertise-title" className="advantage-exact-heading">
            {heading || defaultHeading}
          </h2>
          <p className="advantage-exact-desc">
            {description}
          </p>

          <div className="advantage-features-grid">
            {activeFeatures.map((feat, idx) => (
              <div key={idx} className="advantage-feature-item">
                <div className={`advantage-feature-icon advantage-feature-icon--${feat.iconColor}`}>
                  {feat.icon}
                </div>
                <span className="advantage-feature-text">{feat.text}</span>
              </div>
            ))}
          </div>

          <Link className="ady-btn-dark" href={ctaHref}>
            <span>{ctaText}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
