"use client";

import React from "react";
import Link from "next/link";

export default function AvistaTeam() {
  const team = [
    {
      name: "S. K. Mangalapally",
      role: "Growth Architect & Technical Director",
      specialty: "Full-Funnel Strategy & High-ROAS Media",
      img: "/assets/avista/images/t1-img-1.webp",
    },
    {
      name: "Senior Web Engineer",
      role: "Full-Stack Web Architect",
      specialty: "Next.js 16, Headless Web & PageSpeed",
      img: "/assets/avista/images/t1-img-2.webp",
    },
    {
      name: "AI Solutions Lead",
      role: "Workflow & AI Systems Engineer",
      specialty: "WhatsApp Cloud API, RAG & Automations",
      img: "/assets/avista/images/t1-img-3.webp",
    },
    {
      name: "Creative & Brand Lead",
      role: "Creative Director & UI/UX Specialist",
      specialty: "Design Systems & High-Conversion CRO",
      img: "/assets/avista/images/t1-img-4.webp",
    },
  ];

  return (
    <section className="as-team-1-area pt-80 pb-90 tx-section" id="team" style={{ background: "#f8f9fa" }}>
      <div className="container as-container-1">
        {/* Section Title */}
        <div className="as-team-1-sec-title text-center mb-50" style={{ maxWidth: "780px", margin: "0 auto 50px" }}>
          <h6 className="as-subtitle-1 tx-subTitle" style={{ justifyContent: "center", marginBottom: "12px" }}>
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Team &amp; Expertise
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800 }}>
            Senior Specialists Who Drive <br />
            <span style={{ color: "#fd3f00" }}>Your Revenue Growth</span>
          </h2>
          <p className="as-p-1 sec-disc tx-description" style={{ fontSize: "16px", color: "#64748b", marginTop: "12px", lineHeight: "1.6" }}>
            Zero junior account reps. You collaborate directly with dedicated engineering leads, media buyers, and automation specialists with verified track records.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="as-team-1-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {team.map((member, idx) => (
            <div key={idx} className="as-team-1-member-ani">
              <div
                className="as-team-1-member wa_magnetic_1_trigger"
                style={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.04)",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="member-img wa-fix wa-img-cover wa-p-relative" style={{ height: "320px" }}>
                  <img
                    decoding="async"
                    className="wa_magnetic_1_elm"
                    src={member.img}
                    alt={member.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                  <div className="content-wrap" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)", padding: "24px 20px 18px", width: "100%", position: "absolute", bottom: 0, left: 0 }}>
                    <h5 className="as-h-1 member-name" style={{ color: "#ffffff", fontSize: "18px", fontWeight: 700, margin: "0 0 4px" }}>
                      <a href="#contact" style={{ color: "#ffffff", textDecoration: "none" }}>{member.name}</a>
                    </h5>
                    <p className="as-p-1 member-dg" style={{ color: "#fd3f00", fontSize: "13px", fontWeight: 600, margin: 0 }}>
                      {member.role}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "12px", margin: "4px 0 0" }}>
                      {member.specialty}
                    </p>
                  </div>
                </div>

                <div className="member-social" style={{ display: "flex", justifyContent: "center", gap: "12px", padding: "14px 20px", background: "#ffffff", borderTop: "1px solid #f1f5f9" }}>
                  <a className="link-elm" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: "#475569", fontSize: "14px" }}>
                    <i aria-hidden="true" className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="link-elm" href="/contact" aria-label="Email" style={{ color: "#475569", fontSize: "14px" }}>
                    <i aria-hidden="true" className="fas fa-envelope"></i>
                  </a>
                  <a className="link-elm" href="https://wa.me/918309275093" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ color: "#475569", fontSize: "14px" }}>
                    <i aria-hidden="true" className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
