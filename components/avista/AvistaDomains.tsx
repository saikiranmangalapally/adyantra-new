"use client";

import React from "react";
import Link from "next/link";
import { DomainIcon } from "@/components/icons/DomainIcons";

export default function AvistaDomains() {
  const domains = [
    {
      id: "education",
      name: "Education & Academies",
      metric: "2.1x Enrolment Rate",
      desc: "Student acquisition funnels, local search optimization, and automated WhatsApp advisory bots for universities & coaching institutes.",
    },
    {
      id: "fashion",
      name: "Fashion & D2C Apparel",
      metric: "3.4x Meta ROAS",
      desc: "Performance catalog ads, influencer whitelisting, cart abandonment SMS triggers, and high-converting Shopify store setups.",
    },
    {
      id: "healthcare",
      name: "Healthcare & Clinics",
      metric: "4.8x Patient Bookings",
      desc: "HIPAA-compliant appointment booking workflows, Google Local Service Ads, and verified Google Business profile management.",
    },
    {
      id: "realestate",
      name: "Real Estate & Housing",
      metric: "82% Lead Verification",
      desc: "High-ticket property acquisition campaigns, virtual tour landing pages, and instant CRM lead enrichment pipelines.",
    },
    {
      id: "software",
      name: "IT & Software Enterprises",
      metric: "65% Lower CAC",
      desc: "B2B SaaS product demos, technical SEO topic clusters, LinkedIn account-based marketing, and automated nurture sequences.",
    },
    {
      id: "ecommerce",
      name: "E-Commerce & Retail Brands",
      metric: "42% AOV Increase",
      desc: "Multi-channel Google Shopping, Klaviyo email flows, personalized checkout upsells, and programmatic ad creative testing.",
    },
    {
      id: "ngo",
      name: "NGOs & Non-Profits",
      metric: "Google Ad Grants",
      desc: "Optimizing $10,000/mo Google Grants, donor acquisition landing pages, and automated recurring contribution workflows.",
    },
    {
      id: "enterprise",
      name: "Enterprises & Corporate Groups",
      metric: "Custom AI Stack",
      desc: "Enterprise digital transformation, custom LLM tool integration, private RAG knowledge bases, and multi-brand reporting.",
    },
  ];

  return (
    <section className="as-domains-section tx-section" id="domains" style={{ padding: "100px 0 90px", background: "#ffffff", position: "relative" }}>
      <div className="container as-container-1">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 40px" }}>
          <h6 className="as-subtitle-1 tx-subTitle" style={{ justifyContent: "center", marginBottom: "12px" }}>
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Domains We Serve
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Tailored Growth Strategies for <br />
            <span style={{ color: "#fd3f00" }}>High-Value Business Sectors</span>
          </h2>
          <p className="as-p-1 sec-disc" style={{ color: "#64748b", fontSize: "16.5px", lineHeight: "1.6" }}>
            Every industry has unique economics and buyer journeys. We build tailored acquisition playbooks and automation systems tuned specifically to your market.
          </p>
        </div>

        {/* Infinite Scrolling Ribbon with Domain Pills */}
        <div style={{ overflow: "hidden", padding: "15px 0 35px", position: "relative" }}>
          <div
            style={{
              display: "flex",
              gap: "16px",
              width: "max-content",
              animation: "marquee_left 30s linear infinite",
            }}
          >
            {domains.concat(domains).map((d, idx) => (
              <div
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                  padding: "10px 22px",
                  borderRadius: "100px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#1e293b",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                  <DomainIcon name={d.id} />
                </span>
                <span>{d.name}</span>
                <span
                  style={{
                    background: "rgba(253, 63, 0, 0.1)",
                    color: "#fd3f00",
                    fontSize: "11px",
                    fontWeight: 700,
                    padding: "2px 8px",
                    borderRadius: "20px",
                  }}
                >
                  {d.metric}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 4x2 Grid of Domain Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "15px" }}>
          {domains.map((domain) => (
            <div
              key={domain.id}
              style={{
                background: "#fcfdfe",
                border: "1px solid #edf2f7",
                borderRadius: "20px",
                padding: "28px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#fd3f00";
                e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#edf2f7";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "#fff2ee",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DomainIcon name={domain.id} />
                  </div>
                  <span
                    style={{
                      background: "rgba(34, 197, 94, 0.1)",
                      color: "#16a34a",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "100px",
                    }}
                  >
                    {domain.metric}
                  </span>
                </div>

                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#181818", marginBottom: "10px" }}>
                  {domain.name}
                </h3>

                <p style={{ fontSize: "13.5px", color: "#64748b", lineHeight: "1.6" }}>
                  {domain.desc}
                </p>
              </div>

              <div style={{ marginTop: "20px", paddingTop: "14px", borderTop: "1px solid #f1f5f9" }}>
                <Link
                  href={`/industries/${domain.id}`}
                  style={{
                    color: "#fd3f00",
                    fontWeight: 600,
                    fontSize: "13px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>Industry Playbook</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "10px" }}></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
