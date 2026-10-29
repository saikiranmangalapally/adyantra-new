"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  expertise: string;
  photo: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "lead-growth",
    name: "Sai Kiran M.",
    role: "Founder & Lead Architect",
    expertise: "AI Systems Design & Performance Marketing",
    photo: "/assets/img/team/team-warroom.jpg",
  },
  {
    id: "media-buyer",
    name: "Performance Media Squad",
    role: "Senior Acquisition Specialists",
    expertise: "Meta Ads, Google Performance Max & Retargeting",
    photo: "/assets/img/about/about-leader.jpg",
  },
  {
    id: "ai-engineer",
    name: "Automation Engineering Team",
    role: "Workflow & Agent Architects",
    expertise: "Autonomous LLM Agents, n8n, Zapier & WhatsApp CRM",
    photo: "/assets/img/team/team-3d.png",
  },
  {
    id: "full-stack",
    name: "Software & CRO Division",
    role: "Next.js Web Engineers",
    expertise: "High-Speed Headless Software & Conversion Funnels",
    photo: "/assets/img/service/service-collab-team.jpg",
  },
];

export default function LotechTeam() {
  const [activeMemberId, setActiveMemberId] = useState<string>(TEAM_MEMBERS[0].id);

  return (
    <section className="team-two" id="team" style={{ padding: "100px 0 110px", position: "relative" }}>
      <div className="container">
        <div className="row">
          {/* Left Column: Mission, Value Proposition & CTA */}
          <div className="col-lg-5 d-flex align-items-center">
            <div className="team-two__content" style={{ width: "100%" }}>
              <div className="sec-title text-left" style={{ paddingBottom: "20px" }}>
                <h6 className="sec-title__tagline">OUR TEAM MEMBER</h6>
                <h2 className="sec-title__title">
                  Meet Our Growth Architects <br />&amp; AI Engineers.
                </h2>
              </div>
              <p className="team-two__content__text" style={{ color: "#6F6B7A", fontSize: "16px", lineHeight: "26px", marginBottom: "28px" }}>
                Our specialized team unites seasoned media buyers, automation architects, full-stack engineers, and conversion rate specialists committed to accelerating your enterprise value.
              </p>

              <ul className="about-two__content__list" style={{ marginBottom: "36px" }}>
                <li>
                  <i className="flaticon-check-mark" />
                  Cross-Disciplinary AI &amp; Growth Execution Squads
                </li>
                <li>
                  <i className="flaticon-check-mark" />
                  Proven Track Record Across 50+ High-Growth Brands
                </li>
                <li>
                  <i className="flaticon-check-mark" />
                  Direct Founder &amp; Senior Architect Collaboration
                </li>
              </ul>

              <div className="team-two__btn">
                <Link href="/about" className="lotech-btn">
                  <span>
                    Meet All Members
                    <span className="lotech-btn__icon">
                      <i className="flaticon-up-right-arrow" />
                      <i className="flaticon-up-right-arrow" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Team Member Cards */}
          <div className="col-lg-7">
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {TEAM_MEMBERS.map((member, index) => {
                const isActive = activeMemberId === member.id;
                return (
                  <div
                    key={member.id}
                    onMouseEnter={() => setActiveMemberId(member.id)}
                    style={{
                      borderRadius: "16px",
                      border: isActive ? "1px solid #6C3BFF" : "1px solid #ECECEC",
                      backgroundColor: isActive ? "#F1EDFF" : "#FFFFFF",
                      padding: "24px 28px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      cursor: "pointer",
                      transition: "all 0.35s ease",
                      boxShadow: isActive ? "0 12px 30px rgba(108, 59, 255, 0.12)" : "0 4px 12px rgba(23, 21, 31, 0.03)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontSize: "20px",
                          fontWeight: 800,
                          color: isActive ? "#6C3BFF" : "#9994A5",
                        }}
                      >
                        0{index + 1}.
                      </span>

                      {/* Photo Thumbnail */}
                      <div
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "12px",
                          overflow: "hidden",
                          flexShrink: 0,
                          border: isActive ? "2px solid #6C3BFF" : "1px solid #EAE7F2",
                        }}
                      >
                        <img
                          src={member.photo}
                          alt={member.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      </div>

                      <div>
                        <h3
                          style={{
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#17151F",
                            margin: "0 0 4px",
                          }}
                        >
                          {member.name}
                        </h3>
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#6C3BFF",
                            margin: "0 0 2px",
                          }}
                        >
                          {member.role}
                        </p>
                        <span style={{ fontSize: "13px", color: "#6F6B7A" }}>
                          {member.expertise}
                        </span>
                      </div>
                    </div>

                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "50%",
                        backgroundColor: isActive ? "#6C3BFF" : "#F8F7FC",
                        color: isActive ? "#FFFFFF" : "#17151F",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      &nearr;
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
