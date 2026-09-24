"use client";

import React from "react";
import Link from "next/link";
import ExpertiseVisualStage from "./ExpertiseVisualStage";

export default function OurTeamExpertiseSection() {
  return (
    <section className="section expertise" id="advantage" aria-labelledby="expertise-title">
      <div className="shell split-layout">
        {/* Left: 3D Isometric Team Studio with 4 Floating Corner Tags */}
        <ExpertiseVisualStage />

        {/* Right: Exact Copy Block matching Theme Typography & Palette */}
        <div className="copy-block advantage-copy-block">
          <span className="ref-pill-kicker">OUR TEAM &amp; EXPERTISE</span>
          <h2 id="expertise-title" className="advantage-exact-heading">
            Work Directly with Senior <br />
            Engineers &amp; <span className="team-growth-highlight">Growth Strategists</span>
          </h2>
          <p className="advantage-exact-desc">
            We replace non-technical account managers with senior developers, performance marketers, and AI architects who take complete accountability for your digital performance.
          </p>

          <div className="advantage-features-grid">
            <div className="advantage-feature-item">
              <div className="advantage-feature-icon advantage-feature-icon--purple">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <span className="advantage-feature-text">100% In-House Execution</span>
            </div>

            <div className="advantage-feature-item">
              <div className="advantage-feature-icon advantage-feature-icon--indigo">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <span className="advantage-feature-text">Direct Senior Technical Access</span>
            </div>

            <div className="advantage-feature-item">
              <div className="advantage-feature-icon advantage-feature-icon--sky">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                  <line x1="9" y1="12" x2="15" y2="18" />
                </svg>
              </div>
              <span className="advantage-feature-text">Tailored Growth Strategies</span>
            </div>

            <div className="advantage-feature-item">
              <div className="advantage-feature-icon advantage-feature-icon--emerald">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="advantage-feature-text">Continuous Campaign Optimization</span>
            </div>
          </div>

          <Link className="advantage-cta-btn" href="/about">
            <span>MEET OUR LEADERSHIP</span>
            <div className="advantage-cta-btn__arrow">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
