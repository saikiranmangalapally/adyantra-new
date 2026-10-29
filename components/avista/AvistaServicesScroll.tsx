"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";

export default function AvistaServicesScroll() {
  const [activeCategory, setActiveCategory] = useState("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: "01",
      category: "marketing",
      badge: "Organic Growth",
      icon: "fa-magnifying-glass-chart",
      title: "Search Engine Optimization",
      desc: "Rank #1 on Google with high-authority technical SEO, on-page optimization, backlink architecture, and topic clusters.",
      href: "/digital-marketing-growth#seo",
      image: "/assets/avista/images/p1-item-1.webp",
    },
    {
      id: "02",
      category: "marketing",
      badge: "High ROAS",
      icon: "fa-bullhorn",
      title: "Social Media & Meta Ads",
      desc: "Scale high-ROAS paid campaigns across Instagram, Facebook, and LinkedIn with algorithmic audience targeting.",
      href: "/digital-marketing-growth#meta-ads",
      image: "/assets/avista/images/p1-item-2.webp",
    },
    {
      id: "03",
      category: "marketing",
      badge: "Direct Intent",
      icon: "fa-rectangle-ad",
      title: "Google Ads & PPC Campaigns",
      desc: "Capture high-intent buyers with Google Search, Display, YouTube ads, and Performance Max revenue campaigns.",
      href: "/digital-marketing-growth#google-ads",
      image: "/assets/avista/images/p1-item-3.webp",
    },
    {
      id: "04",
      category: "automation",
      badge: "AI Powered",
      icon: "fa-robot",
      title: "AI Workflows & Chatbots",
      desc: "Automate 24/7 lead qualification, smart scheduling, and conversational customer sales with WhatsApp AI bots.",
      href: "/digital-marketing-growth#automation",
      image: "/assets/avista/images/p1-item-4.webp",
    },
    {
      id: "05",
      category: "design",
      badge: "Web Engineering",
      icon: "fa-code",
      title: "Web Software & App Dev",
      desc: "High-speed Next.js and React web applications engineered for lightning performance, SEO, and maximum conversion.",
      href: "/digital-marketing-growth#web",
      image: "/assets/avista/images/p1-item-5.webp",
    },
    {
      id: "06",
      category: "design",
      badge: "E-Commerce",
      icon: "fa-cart-shopping",
      title: "E-Commerce Store Growth",
      desc: "Boost checkout conversions with custom Shopify architecture, dynamic upsells, and automated cart recovery.",
      href: "/digital-marketing-growth#ecommerce",
      image: "/assets/avista/images/p1-item-6.webp",
    },
    {
      id: "07",
      category: "automation",
      badge: "CRM Sync",
      icon: "fa-arrows-rotate",
      title: "CRM Automation Systems",
      desc: "Eliminate manual data entry and auto-sync records across HubSpot, Zoho, and Salesforce with webhook triggers.",
      href: "/digital-marketing-growth#crm",
      image: "/assets/avista/images/p1-item-1.webp",
    },
    {
      id: "08",
      category: "marketing",
      badge: "Retention",
      icon: "fa-envelope-open-text",
      title: "Email & Lead Workflows",
      desc: "Nurture and convert inbound prospects with automated multi-stage email drip campaigns and behavioral scoring.",
      href: "/digital-marketing-growth#email",
      image: "/assets/avista/images/p1-item-2.webp",
    },
    {
      id: "09",
      category: "marketing",
      badge: "Authority",
      icon: "fa-award",
      title: "PR & Brand Reputation",
      desc: "Establish verified brand authority with tier-1 media placements, publication features, and digital PR outreach.",
      href: "/digital-marketing-growth#pr",
      image: "/assets/avista/images/p1-item-3.webp",
    },
    {
      id: "10",
      category: "marketing",
      badge: "Pipelines",
      icon: "fa-filter-circle-dollar",
      title: "Lead Generation Engines",
      desc: "Capture, verify, and route high-intent B2B and B2C leads automatically with algorithmic validation pipelines.",
      href: "/digital-marketing-growth#leads",
      image: "/assets/avista/images/p1-item-4.webp",
    },
    {
      id: "11",
      category: "marketing",
      badge: "Attribution",
      icon: "fa-chart-pie",
      title: "Analytics & Intelligence",
      desc: "Full-funnel GA4, server-side CAPI tracking, and live executive Looker Studio dashboards for total visibility.",
      href: "/digital-marketing-growth#analytics",
      image: "/assets/avista/images/p1-item-5.webp",
    },
    {
      id: "12",
      category: "marketing",
      badge: "Partners",
      icon: "fa-handshake",
      title: "Affiliate & Partner Growth",
      desc: "Multiply revenue distribution through high-performing creator affiliate programs and referral tracking.",
      href: "/digital-marketing-growth#influencer",
      image: "/assets/avista/images/p1-item-6.webp",
    },
  ];

  const filtered = activeCategory === "all" ? services : services.filter((s) => s.category === activeCategory);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: "smooth" });
    }
  };

  return (
    <section className="as-services-scroll-section tx-section" id="services" style={{ padding: "100px 0 80px", background: "#f8f9fa", position: "relative" }}>
      <div className="container as-container-1">
        {/* Section Heading with Controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "24px", marginBottom: "40px" }}>
          <div>
            <h6 className="as-subtitle-1 tx-subTitle" style={{ marginBottom: "12px" }}>
              <span className="icon">
                &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
              </span>{" "}
              Our Services
            </h6>
            <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Integrated Growth &amp; <br />
              <span style={{ color: "#fd3f00" }}>AI Automation Services</span>
            </h2>
            <p className="as-p-1 sec-disc" style={{ maxWidth: "600px", color: "#666", fontSize: "16px", marginTop: "12px" }}>
              Full-spectrum digital marketing, web engineering, and custom automation solutions engineered to generate qualified leads and maximize revenue.
            </p>
          </div>

          {/* Navigation Controls */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={scrollLeft}
              aria-label="Previous service"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fd3f00";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "#fd3f00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#111111";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              onClick={scrollRight}
              aria-label="Next service"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#fd3f00";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.borderColor = "#fd3f00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#ffffff";
                e.currentTarget.style.color = "#111111";
                e.currentTarget.style.borderColor = "#e2e8f0";
              }}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* Filter Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "36px" }}>
          {[
            { id: "all", label: "All Services" },
            { id: "marketing", label: "Marketing & Growth" },
            { id: "design", label: "Design & Dev" },
            { id: "automation", label: "Automation & AI" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                padding: "8px 20px",
                borderRadius: "100px",
                fontSize: "13.5px",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.25s ease",
                border: activeCategory === cat.id ? "1px solid #fd3f00" : "1px solid #e2e8f0",
                background: activeCategory === cat.id ? "#fd3f00" : "#ffffff",
                color: activeCategory === cat.id ? "#ffffff" : "#4a5568",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontally Scrolling Track */}
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            paddingBottom: "24px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="hide-scrollbar"
        >
          {filtered.map((service) => (
            <article
              key={service.id}
              style={{
                flex: "0 0 340px",
                scrollSnapAlign: "start",
                background: "#ffffff",
                borderRadius: "24px",
                padding: "30px",
                border: "1px solid #eceff2",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(253,63,0,0.12)";
                e.currentTarget.style.borderColor = "#fd3f00";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "#eceff2";
              }}
            >
              <div>
                {/* Top Badge & Number */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "22px" }}>
                  <span
                    style={{
                      background: "rgba(253, 63, 0, 0.08)",
                      color: "#fd3f00",
                      padding: "4px 12px",
                      borderRadius: "100px",
                      fontSize: "12px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                      textTransform: "uppercase",
                    }}
                  >
                    {service.badge}
                  </span>
                  <span style={{ fontSize: "28px", fontWeight: 800, color: "#e2e8f0", fontFamily: "var(--as-font-2)" }}>
                    {service.id}
                  </span>
                </div>

                {/* Icon in styled circle */}
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "linear-gradient(135deg, #fff2ee 0%, #ffe6df 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fd3f00",
                    fontSize: "22px",
                    marginBottom: "20px",
                  }}
                >
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "21px", fontWeight: 700, color: "#181818", marginBottom: "12px", lineHeight: "1.3" }}>
                  <Link href={service.href} style={{ textDecoration: "none", color: "inherit" }}>
                    {service.title}
                  </Link>
                </h3>

                {/* Description */}
                <p style={{ fontSize: "14px", color: "#64748b", lineHeight: "1.6", marginBottom: "24px" }}>
                  {service.desc}
                </p>
              </div>

              {/* Bottom Read More Action */}
              <div style={{ paddingTop: "16px", borderTop: "1px solid #f1f5f9" }}>
                <Link
                  href={service.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#111111",
                    fontWeight: 700,
                    fontSize: "13.5px",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#fd3f00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#111111";
                  }}
                >
                  <span>Explore Service</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px", transition: "transform 0.2s ease" }}></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
