"use client";

import React from "react";
import Link from "next/link";

export default function AvistaOperatingModel() {
  const models = [
    {
      badge: "100% In-House",
      badgeColor: "#fd3f00",
      icon: "fa-users-gear",
      title: "Technical Guild",
      desc: "Direct collaboration with senior developers, growth architects, and designers with zero outsourcing and zero bureaucratic middle management.",
    },
    {
      badge: "Verified CAPI",
      badgeColor: "#7b4bf7",
      icon: "fa-server",
      title: "Server-Side Tracking",
      desc: "First-party server attribution bypassing ad blockers and iOS restrictions to feed clean, deterministic conversion signals to Google and Meta.",
    },
    {
      badge: "Continuous Sprints",
      badgeColor: "#3b82f6",
      icon: "fa-bolt-lightning",
      title: "Rapid Iteration",
      desc: "Weekly creative sprint cycles, copy testing variations, and real-time bid tuning to prevent ad fatigue and keep customer acquisition costs low.",
    },
    {
      badge: "Zero Markups",
      badgeColor: "#10b981",
      icon: "fa-shield-halved",
      title: "Commercial Clarity",
      desc: "Transparent milestone pricing, live Looker Studio executive dashboards, zero hidden media markups, and complete client ownership of all IP.",
    },
  ];

  return (
    <section className="as-operating-model-section tx-section" id="operating-model" style={{ padding: "100px 0 90px", background: "#0c0d10", color: "#ffffff", position: "relative", overflow: "hidden" }}>
      {/* Background glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(253,63,0,0.12) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "5%",
          width: "450px",
          height: "450px",
          background: "radial-gradient(circle, rgba(123,75,247,0.12) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="container as-container-1" style={{ position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 55px" }}>
          <h6 className="as-subtitle-1 tx-subTitle" style={{ justifyContent: "center", color: "#fd3f00", marginBottom: "14px" }}>
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Our Operating Model
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 46px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#ffffff", marginBottom: "18px" }}>
            Transforming Fragmented Marketing <br />
            <span style={{ color: "#fd3f00" }}>Into Compounding Growth</span>
          </h2>
          <p className="as-p-1 sec-disc" style={{ color: "rgba(255,255,255,0.72)", fontSize: "16.5px", lineHeight: "1.65" }}>
            We combine in-house technical engineering with disciplined growth marketing so your business scales with predictable unit economics and zero operational friction.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {models.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                borderRadius: "24px",
                padding: "36px 28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "rgba(253, 63, 0, 0.4)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "14px",
                      background: "rgba(253, 63, 0, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.badgeColor,
                      fontSize: "20px",
                    }}
                  >
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "100px",
                      background: `${item.badgeColor}15`,
                      color: item.badgeColor,
                      border: `1px solid ${item.badgeColor}30`,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#ffffff", marginBottom: "12px" }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: "14px", color: "rgba(255, 255, 255, 0.65)", lineHeight: "1.65" }}>
                  {item.desc}
                </p>
              </div>

              <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                <Link
                  href="/contact"
                  style={{
                    color: "#fd3f00",
                    fontWeight: 600,
                    fontSize: "13.5px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <span>Explore model</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "11px" }}></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Metrics Bar */}
        <div
          style={{
            marginTop: "60px",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "20px",
            padding: "28px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "24px",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#fd3f00", fontFamily: "var(--as-font-2)" }}>06+</div>
            <div style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>Years Industry Expertise</div>
          </div>
          <div>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#ffffff", fontFamily: "var(--as-font-2)" }}>50+</div>
            <div style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>Scaling Brands Scaled</div>
          </div>
          <div>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#fd3f00", fontFamily: "var(--as-font-2)" }}>100%</div>
            <div style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>In-House Engineering</div>
          </div>
          <div>
            <div style={{ fontSize: "36px", fontWeight: 800, color: "#ffffff", fontFamily: "var(--as-font-2)" }}>Zero</div>
            <div style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>Outsourced Middlemen</div>
          </div>
        </div>
      </div>
    </section>
  );
}
