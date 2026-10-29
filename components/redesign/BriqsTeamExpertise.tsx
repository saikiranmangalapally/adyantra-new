"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Saikiran Mangalapally",
    role: "Founder & Lead AI Architect",
    specialty: "Autonomous Workflows & Meta Ads",
    image: "/assets/img/about/about-leader.jpg",
  },
  {
    id: 2,
    name: "David Hardson",
    role: "Head of Growth & Performance",
    specialty: "ROAS Optimization & GA4 CAPI",
    image: "/assets/img/team/team-warroom.jpg",
  },
  {
    id: 3,
    name: "Vikram Sharma",
    role: "Senior Next.js & Web Engineer",
    specialty: "High-Speed Software Architecture",
    image: "/assets/img/service/service-header-tablet.jpg",
  },
  {
    id: 4,
    name: "Ananya Rao",
    role: "AI & WhatsApp Bot Engineer",
    specialty: "CRM Automations & Lead Qualification",
    image: "/assets/img/team/team-3d.png",
  },
];

export default function BriqsTeamExpertise() {
  const [hoveredMember, setHoveredMember] = useState<number>(1);

  return (
    <section className="lotech-team-section" id="advantage">
      <div className="briqs-shell">
        <div className="lotech-team-grid">
          {/* ── Left Column: Content, Headings & Action Button ── */}
          <div className="lotech-team-content">
            <span className="briqs-kicker-pill">OUR TEAM MEMBER</span>

            <h2 className="lotech-team-title">
              The Team Committed <br />
              to <span className="text-[#6C3BFF]">Your Success.</span>
            </h2>

            <p className="lotech-team-desc">
              Our in-house team of senior engineers and growth strategists encompasses a wide range of specialties, from performance ad optimization and full-funnel GA4 attribution to custom Next.js web applications and autonomous AI chatbots. Zero outsourcing—direct senior accountability.
            </p>

            <div className="lotech-team-proof-list">
              <div className="lotech-proof-item">
                <CheckCircle2 size={16} className="text-[#6C3BFF]" />
                <span>100% Senior Developers &amp; Media Buyers</span>
              </div>
              <div className="lotech-proof-item">
                <CheckCircle2 size={16} className="text-[#6C3BFF]" />
                <span>Direct Slack &amp; WhatsApp Strategy Access</span>
              </div>
              <div className="lotech-proof-item">
                <CheckCircle2 size={16} className="text-[#6C3BFF]" />
                <span>Guaranteed &lt; 2-Hour SLA Response</span>
              </div>
            </div>

            <div className="lotech-team-action-row">
              <Link href="/about" className="lotech-btn-primary">
                <span>See All Members</span>
                <span className="lotech-btn-icon-wrap">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>

          {/* ── Right Column: Interactive Hover Member Cards with Photo Reveal ── */}
          <div className="lotech-team-list">
            {TEAM_MEMBERS.map((member) => {
              const isHovered = hoveredMember === member.id;
              return (
                <div
                  key={member.id}
                  className={`lotech-team-item ${isHovered ? "active" : ""}`}
                  onMouseEnter={() => setHoveredMember(member.id)}
                >
                  <Link href="/about" className="lotech-team-item-inner">
                    <div className="lotech-team-item-info">
                      <span className="lotech-team-specialty">{member.specialty}</span>
                      <h3 className="lotech-team-item-name">{member.name}</h3>
                      <p className="lotech-team-item-role">{member.role}</p>
                    </div>

                    {/* Image Preview Thumbnail (Slides & Expands on Hover) */}
                    <div className="lotech-team-item-photo-wrap">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="lotech-team-item-photo"
                        loading="lazy"
                      />
                    </div>

                    {/* Arrow Circle Button */}
                    <div className="lotech-team-arrow-btn">
                      <ArrowUpRight size={18} />
                    </div>
                  </Link>

                  <div className="lotech-team-item-divider" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
