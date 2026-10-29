"use client";

import React from "react";

export default function LotechSlideText() {
  const marqueeItems = [
    "MARKETING SOLUTIONS",
    "AI AUTOMATION",
    "PERFORMANCE ADS",
    "CRM PIPELINES",
    "NEXT.JS SOFTWARE",
    "HIGH-CONVERTING FUNNELS",
    "AUTONOMOUS AGENTS",
  ];

  return (
    <div style={{ position: "relative", overflow: "hidden", padding: "40px 0" }}>
      {/* SVG Big Outline Animated Text Section */}
      <section className="slide-text-two" style={{ height: "160px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg viewBox="0 0 1600 160" style={{ width: "100%", height: "100%" }}>
          <text
            x="50%"
            y="50%"
            dy=".35em"
            textAnchor="middle"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "82px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              stroke: "#6C3BFF",
              strokeWidth: "2",
              fill: "transparent",
              textTransform: "uppercase",
            }}
          >
            Marketing &amp; AI Automation Solutions
          </text>
        </svg>
      </section>

      {/* Dynamic Sliding Marquee Ribbon */}
      <div
        style={{
          width: "100%",
          overflow: "hidden",
          whiteSpace: "nowrap",
          backgroundColor: "#17151F",
          padding: "16px 0",
          transform: "rotate(-1deg)",
          boxShadow: "0 10px 30px rgba(23, 21, 31, 0.15)",
          borderTop: "2px solid #C8F31D",
          borderBottom: "2px solid #6C3BFF",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            gap: "40px",
            animation: "lotechMarqueeScroll 28s linear infinite",
            alignItems: "center",
          }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} style={{ display: "inline-flex", alignItems: "center", gap: "20px" }}>
              <span
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "18px",
                  fontWeight: 800,
                  letterSpacing: "0.15em",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
              <span style={{ color: "#C8F31D", fontSize: "16px" }}>✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
