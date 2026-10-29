"use client";

import React from "react";
import Link from "next/link";

export default function AvistaProcess() {
  const steps = [
    {
      step: "Step 01",
      title: "Discovery & Funnel Audit",
      disc: "We audit your digital presence, advertising accounts, search rankings, tech stack, and competitor positioning to identify untapped revenue opportunities.",
    },
    {
      step: "Step 02",
      title: "Strategy & Custom Roadmap",
      disc: "We build a precise plan for channel allocation, high-intent audiences, messaging angles, conversion targets, and technical execution milestones.",
    },
    {
      step: "Step 03",
      title: "In-House Execution & Deployment",
      disc: "Senior developers, performance marketers, and AI engineers launch your campaigns, custom web applications, and automated workflows with speed.",
    },
    {
      step: "Step 04",
      title: "Data-Driven Optimization & Scaling",
      disc: "We monitor performance daily, run continuous creative tests, tune bids, and optimize conversion paths for predictable, compounding returns.",
    },
  ];

  return (
    <section className="as-process-1-area wa-fix pt-110 pb-90 wa-p-relative p1_pin_elm_trigger tx-section" id="process" style={{ background: "#ffffff" }}>
      <div className="p1_pin_elm">
        <div className="container as-container-1">
          <div className="as-process-1-wrap">
            {/* Section Header */}
            <div className="as-process-1-sec-title">
              <div className="left">
                <h6 className="as-subtitle-1 tx-subTitle" style={{ marginBottom: "12px" }}>
                  <span className="icon">
                    &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
                  </span>{" "}
                  Our Proven Process
                </h6>
                <h2 className="tx-title as-sec-title-1" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800 }}>
                  A Transparent <br />
                  <span style={{ color: "#fd3f00" }}>4-Step Growth Methodology</span>
                </h2>
                <p className="as-p-1 sec-disc tx-description" style={{ fontSize: "16px", color: "#64748b", marginTop: "14px", lineHeight: "1.65" }}>
                  Our structured 4-phase framework ensures rapid deployment, data-driven optimization, and predictable scaling for every brand partner.
                </p>

                <div style={{ marginTop: "28px" }}>
                  <a
                    href="/contact"
                    className="as-pr-btn-1 tx-button"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      background: "#0f0f11",
                      color: "#ffffff",
                      padding: "14px 28px",
                      borderRadius: "100px",
                      fontWeight: 600,
                      fontSize: "14px",
                      textDecoration: "none",
                    }}
                  >
                    <span>Start Your Audit</span>
                    <i className="fa-solid fa-arrow-right" style={{ fontSize: "12px" }}></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Connected Step Cards */}
            <div className="as-process-1-right" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px" }}>
              {steps.map((st, idx) => (
                <div
                  key={idx}
                  className="as-process-1-card wa-bg-default"
                  style={{
                    backgroundImage: "url('/assets/avista/images/s1-card-shape-1.webp')",
                    backgroundSize: "cover",
                    borderRadius: "24px",
                    padding: "32px 30px",
                    border: "1px solid #f1f5f9",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(8px)";
                    e.currentTarget.style.borderColor = "#fd3f00";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.borderColor = "#f1f5f9";
                  }}
                >
                  <div className="step-x-btn" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                    <h4 className="as-h-1 step" style={{ color: "#fd3f00", fontSize: "16px", fontWeight: 700, margin: 0 }}>
                      {st.step} <i aria-hidden="true" className="flaticon flaticon-star" style={{ fontSize: "12px", marginLeft: "4px" }}></i>
                    </h4>

                    <span style={{ fontSize: "13px", fontWeight: 700, color: "#94a3b8" }}>
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="as-h-1 title" style={{ fontSize: "21px", fontWeight: 700, color: "#181818", marginBottom: "10px" }}>
                    {st.title}
                  </h4>
                  <p className="as-p-1 disc" style={{ fontSize: "14.5px", color: "#64748b", lineHeight: "1.6", margin: 0 }}>
                    {st.disc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Big Backdrop Typography Watermark */}
      <h2 className="as-process-1-big-title as-h-1 wa_title_spilt_1" style={{ opacity: 0.04 }}>
        Process
      </h2>
    </section>
  );
}
