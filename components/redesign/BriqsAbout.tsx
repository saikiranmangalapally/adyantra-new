"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Volume2, CheckCircle2 } from "lucide-react";

export default function BriqsAbout() {
  return (
    <section className="briqs-about-agency-section" id="about">
      <div className="briqs-shell">
        <div className="briqs-about-agency-grid">
          {/* ── Left Column: 3-Element Image & Purple Card Collage (Exact Match to Image 5) ── */}
          <div className="briqs-about-collage">
            {/* Left Tall Photo (Team collaboration at laptop) */}
            <div className="briqs-collage-left-tall">
              <img
                src="/assets/img/team/team-warroom.jpg"
                alt="Adyantra Digital Agency Team Collaboration"
                className="briqs-collage-img"
                loading="lazy"
              />
            </div>

            {/* Right Stack: Top Photo + Bottom Purple Solutions Card */}
            <div className="briqs-collage-right-stack">
              {/* Top Right Photo (Workspace & laptop) */}
              <div className="briqs-collage-top-img">
                <img
                  src="/assets/img/service/service-header-tablet.jpg"
                  alt="Modern Digital Workspace and Technology"
                  className="briqs-collage-img"
                  loading="lazy"
                />
              </div>

              {/* Bottom Right Purple Card (Megaphone + Quality Marketing Solutions) */}
              <div className="briqs-collage-purple-card">
                <div className="briqs-megaphone-icon">
                  <Volume2 size={32} strokeWidth={2} />
                </div>
                <h4 className="briqs-purple-card-text">
                  Quality Marketing <br />
                  Solutions
                </h4>
              </div>
            </div>
          </div>

          {/* ── Right Column: Copy, Mission/Vision, Skill Bar & Founder Meta (Exact Match to Image 5) ── */}
          <div className="briqs-about-agency-content">
            {/* Sub-Kicker */}
            <div className="briqs-agency-kicker">
              <span>Welcome to Agency</span>
              <span className="briqs-agency-line-dot">&mdash;&mdash;&bull;</span>
            </div>

            {/* Main Headline */}
            <h2 className="briqs-agency-headline">
              We Made Digital Marketing very Simple
            </h2>

            {/* Description Paragraph */}
            <p className="briqs-agency-desc">
              Adyantra Digital combines modern web application engineering, performance advertising, and bespoke AI workflows to build automated customer acquisition engines. By replacing non-technical account managers with senior developers and growth strategists, we eliminate digital inefficiencies and deliver transparent, high-ROAS returns.
            </p>

            {/* Mission & Vision Columns */}
            <div className="briqs-agency-mission-grid">
              <div className="briqs-mission-col">
                <div className="briqs-mission-title-row">
                  <span className="briqs-mission-arrow">&rarr;</span>
                  <h3 className="briqs-mission-title">Our Mission</h3>
                </div>
                <p className="briqs-mission-desc">
                  Eliminate digital inefficiencies and deliver high-ROAS revenue scaling with 100% in-house technical execution.
                </p>
              </div>

              <div className="briqs-mission-col">
                <div className="briqs-mission-title-row">
                  <span className="briqs-mission-arrow">&rarr;</span>
                  <h3 className="briqs-mission-title">Our Vision</h3>
                </div>
                <p className="briqs-mission-desc">
                  Empower ambitious brands with autonomous AI workflows, sub-second web apps, and predictable customer growth.
                </p>
              </div>
            </div>

            {/* Progress Bar (Marketing 77%) */}
            <div className="briqs-agency-skill-block">
              <div className="briqs-skill-meta">
                <span className="briqs-skill-label">Marketing</span>
                <span className="briqs-skill-percent">77%</span>
              </div>
              <div className="briqs-skill-track">
                <div className="briqs-skill-fill" style={{ width: "77%" }} />
              </div>
            </div>

            {/* Bottom Row: Discover More Button + Founder Profile */}
            <div className="briqs-agency-action-row">
              <Link href="/about" className="briqs-agency-discover-btn">
                <span>Discover More</span>
              </Link>

              <div className="briqs-agency-founder-meta">
                <img
                  src="/assets/img/about/about-leader.jpg"
                  alt="Saikiran M. - Founder of Adyantra Digital"
                  className="briqs-founder-avatar"
                  loading="lazy"
                />
                <div className="briqs-founder-info">
                  <strong className="briqs-founder-name">David Hardson</strong>
                  <span className="briqs-founder-role">Founder of Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
