"use client";

import React from "react";

export default function ExpertiseVisualStage() {
  return (
    <div className="expertise-visual-stage">
      {/* ── Main 3D Artwork Card (Decreased to compact balanced size) ── */}
      <div className="expertise-visual-card">
        <img
          src="/assets/img/team/team-3d.png?v=adyantra-team-v2"
          alt="Engineering & Digital Marketing Team - Strategy, Growth & Innovation"
          className="expertise-visual-img"
          loading="lazy"
        />
      </div>

      {/* ── Corner 1 (Top-Left): Direct Access ── */}
      <div className="team-proof-chip team-proof-chip--tl">
        <div className="team-proof-chip__icon team-proof-chip__icon--purple">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        </div>
        <div className="team-proof-chip__content">
          <strong className="team-proof-chip__title">Direct Access</strong>
          <span className="team-proof-chip__sub team-proof-chip__sub--muted">Senior Tech Leads</span>
        </div>
      </div>

      {/* ── Corner 2 (Top-Right): 24/7 Tuning ── */}
      <div className="team-proof-chip team-proof-chip--tr">
        <div className="team-proof-chip__icon team-proof-chip__icon--emerald">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <div className="team-proof-chip__content">
          <strong className="team-proof-chip__title">24/7 Tuning</strong>
          <span className="team-proof-chip__sub team-proof-chip__sub--emerald">Live Attribution</span>
        </div>
      </div>

      {/* ── Corner 3 (Bottom-Left): 100% In-House ── */}
      <div className="team-proof-chip team-proof-chip--bl">
        <div className="team-proof-chip__icon team-proof-chip__icon--lavender">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <div className="team-proof-chip__content">
          <strong className="team-proof-chip__title">100% In-House</strong>
          <span className="team-proof-chip__sub team-proof-chip__sub--purple">Zero Outsourcing</span>
        </div>
      </div>

      {/* ── Corner 4 (Bottom-Right): Tailored Growth (Dark Card) ── */}
      <div className="team-proof-chip team-proof-chip--br team-proof-chip--dark">
        <div className="team-proof-chip__icon team-proof-chip__icon--dark-amber">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <line x1="9" y1="12" x2="15" y2="18" />
          </svg>
        </div>
        <div className="team-proof-chip__content">
          <strong className="team-proof-chip__title team-proof-chip__title--white">Tailored Growth</strong>
          <span className="team-proof-chip__sub team-proof-chip__sub--silver">+340% Avg ROAS</span>
        </div>
      </div>
    </div>
  );
}
