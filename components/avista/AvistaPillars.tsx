"use client";

import React from "react";
import Link from "next/link";

export default function AvistaPillars() {
  const pillars = [
    {
      num: "01",
      title: "Technical SEO & Organic Keyword Ranking",
      desc: "Deep crawling audits, schema microdata, high-intent topic clustering, and backlink architecture that compound Google rankings and organic traffic.",
      icon: "fa-magnifying-glass-chart",
      tag: "Organic Search",
      link: "/seo",
    },
    {
      num: "02",
      title: "High-ROAS Meta & Google Performance Ads",
      desc: "Algorithmic audience funnels, continuous creative variant testing, and server-side CAPI tracking maximizing paid return on ad spend.",
      icon: "fa-chart-line-up",
      tag: "Paid Acquisition",
      link: "/performance-marketing",
    },
    {
      num: "03",
      title: "Custom Next.js & React Web Application Dev",
      desc: "Blazing-fast modern web applications and headless architectures built for 95+ PageSpeed scores and maximum conversion rates.",
      icon: "fa-laptop-code",
      tag: "Web Engineering",
      link: "/web-software-development",
    },
    {
      num: "04",
      title: "Scalable E-Commerce & Checkout Optimization",
      desc: "Shopify Plus and custom headless ecommerce ecosystems with dynamic cart recovery, frictionless 1-click checkout, and AOV expansion.",
      icon: "fa-cart-arrow-down",
      tag: "Store Revenue",
      link: "/ecommerce-solutions",
    },
    {
      num: "05",
      title: "Brand Identity, UI/UX & Strategic PR",
      desc: "Compelling visual identity, editorial publications, tier-1 media placements, and design systems that establish undeniable market authority.",
      icon: "fa-palette",
      tag: "Authority & UX",
      link: "/ui-ux-product-design",
    },
    {
      num: "06",
      title: "WhatsApp AI Chatbots & Workflow Automation",
      desc: "Autonomous 24/7 conversational agents, automated CRM lead enrichment, and instant routing over the official Meta WhatsApp Cloud API.",
      icon: "fa-microchip-ai",
      tag: "Autonomous Ops",
      link: "/ai-automation",
    },
  ];

  return (
    <section className="as-pillars-section tx-section" id="pillars" style={{ padding: "100px 0 90px", background: "#ffffff", position: "relative" }}>
      <div className="container as-container-1">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "750px", margin: "0 auto 55px" }}>
          <h6 className="as-subtitle-1 tx-subTitle" style={{ justifyContent: "center", marginBottom: "12px" }}>
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Core Technical Pillars
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
            Six Core Competencies Driving <br />
            <span style={{ color: "#fd3f00" }}>Sustained Client Growth</span>
          </h2>
          <p className="as-p-1 sec-disc" style={{ color: "#64748b", fontSize: "16.5px", lineHeight: "1.6" }}>
            We eliminate fragmented agency silos by deploying senior full-stack marketing, software engineering, and AI automation within a single accountable guild.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              style={{
                background: "#fcfdfe",
                border: "1px solid #e9edf2",
                borderRadius: "24px",
                padding: "36px 30px",
                position: "relative",
                transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.06)";
                e.currentTarget.style.borderColor = "#fd3f00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderColor = "#e9edf2";
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span
                    style={{
                      background: "rgba(253, 63, 0, 0.08)",
                      color: "#fd3f00",
                      fontSize: "12px",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "100px",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {pillar.tag}
                  </span>
                  <span
                    style={{
                      fontSize: "32px",
                      fontWeight: 800,
                      color: "#e2e8f0",
                      fontFamily: "var(--as-font-2)",
                    }}
                  >
                    {pillar.num}
                  </span>
                </div>

                <h3 style={{ fontSize: "21px", fontWeight: 700, color: "#181818", marginBottom: "14px", lineHeight: "1.3" }}>
                  <Link href={pillar.link} style={{ color: "inherit", textDecoration: "none" }}>
                    {pillar.title}
                  </Link>
                </h3>

                <p style={{ fontSize: "14.5px", color: "#64748b", lineHeight: "1.65", marginBottom: "26px" }}>
                  {pillar.desc}
                </p>
              </div>

              <div style={{ paddingTop: "18px", borderTop: "1px solid #f1f5f9" }}>
                <Link
                  href={pillar.link}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#181818",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fd3f00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#181818";
                  }}
                >
                  <span>Learn more</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
