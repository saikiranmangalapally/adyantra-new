"use client";

import React from "react";

export default function AvistaAbout() {
  const values = [
    {
      title: "Customer-Centric Mind",
      description:
        "We put our clients at the heart of everything we do. By understanding their needs, goals, and challenges, we create personalized strategies and solutions that deliver real value.",
    },
    {
      title: "Results-Driven",
      description:
        "Every solution is designed to create measurable business impact.",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with clients as partners to achieve shared success.",
    },
  ];

  return (
    <section className="as-about-1-area pt-100 pb-50 t1_ani_trigger tx-section" id="about">
      <div className="container as-container-1">
        <div className="as-about-1-wrap">
          {/* Left Content */}
          <div className="as-about-1-content">
            <h6 className="as-subtitle-1 tx-subTitle">
              <span className="icon">
                &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
              </span>{" "}
              About Adyantra Digital
            </h6>
            <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 3.8vw, 44px)", lineHeight: 1.15, fontWeight: 800 }}>
              Engineering Measurable Digital Advantage <br />
              <span style={{ color: "#fd3f00" }}>For Scaling Businesses.</span>
            </h2>
            <div className="hr-line"></div>

            <p className="as-p-1 sec-disc tx-description" style={{ fontSize: "16px", lineHeight: "1.7", color: "#475569", marginBottom: "14px" }}>
              Adyantra Digital is a premier technology-first digital marketing and AI automation agency. Over 6+ years, we have partnered with 50+ growth-focused companies to turn their online footprint into a reliable customer engine.
            </p>
            <p className="as-p-1 sec-disc tx-description" style={{ fontSize: "15px", lineHeight: "1.7", color: "#64748b", marginBottom: "26px" }}>
              By uniting modern web application engineering, performance marketing analytics, and custom AI workflow automation, we eliminate digital inefficiencies and deliver transparent, high-ROAS returns.
            </p>

            <div style={{ marginBottom: "32px" }}>
              <a
                href="/about"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "#fd3f00",
                  fontWeight: 700,
                  fontSize: "15px",
                  textDecoration: "none",
                }}
              >
                <span>Read our full story</span>
                <i className="fa-solid fa-arrow-right" style={{ fontSize: "13px" }}></i>
              </a>
            </div>

            {/* Testimonial / Social Proof Cluster */}
            <div className="as-about-1-testimonial">
              <div className="as-author-1">
                <img
                  decoding="async"
                  src="/assets/avista/images/a1-shape-1.webp"
                  alt="Laurel Wreath Left"
                  className="bg-shape-1"
                />
                <img
                  decoding="async"
                  src="/assets/avista/images/a1-shape-2.webp"
                  alt="Laurel Wreath Right"
                  className="bg-shape-2"
                />

                {[
                  "/assets/avista/images/author-1.webp",
                  "/assets/avista/images/author-2.webp",
                  "/assets/avista/images/author-3.webp",
                  "/assets/avista/images/author-4.webp",
                ].map((src, i) => (
                  <div key={i} className="as-author-1-img wa-fix wa-img-cover">
                    <img decoding="async" src={src} alt="Client Feedback Avatar" />
                  </div>
                ))}
              </div>

              <div className="right">
                <div className="as-rating-1">
                  <div className="icon">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <i key={s} className="fa-solid fa-star" style={{ color: "#fd3f00", marginRight: "3px" }}></i>
                    ))}
                  </div>
                  <p className="as-h-1 text">4.9 Rating</p>
                </div>
                <p className="as-p-1 disc">Based on 50+ high-growth brand partnerships</p>
              </div>
            </div>
          </div>

          {/* Middle Column: Our Values */}
          <div className="as-about-1-middle">
            <h3 className="as-h-1 middle-title">Our Values</h3>

            <div className="as-about-1-features">
              {values.map((v, idx) => (
                <div key={idx} className="as-about-1-features-single">
                  <h3 className="item-title as-h-1 wa_magnetic_btn_1">
                    <a href="#services">{v.title}</a>
                  </h3>
                  <p className="as-p-1 item-disc">{v.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Expert Team watermark */}
          <div className="as-about-1-right">
            <h3 className="as-h-1 right-title">Expert Team</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
