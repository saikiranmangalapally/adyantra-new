"use client";

import React from "react";
import AvistaNoiseCanvas from "./AvistaNoiseCanvas";

export default function AvistaHero() {
  const marqueeItems = [
    "Web Design",
    "Web Development",
    "SEO",
    "Digital Marketing",
    "Branding",
    "Web Design",
    "Web Development",
    "SEO",
    "Digital Marketing",
    "Branding",
  ];

  return (
    <section className="as-hero-1-area wa-fix wa-p-relative wa_tilt" id="home">
      {/* Background Gradient */}
      <div className="as-hero-1-bg-color"></div>

      {/* Noise Canvas Overlay */}
      <AvistaNoiseCanvas />

      {/* Pill Badge: Available for New Projects */}
      <div className="as-hero-1-active">
        <p className="as-h-1 active-text">
          <i aria-hidden="true" className="fas fa-circle" style={{ color: "#22c55e", fontSize: "10px", marginRight: "8px" }}></i>
          Available for New Projects
        </p>
        <img
          decoding="async"
          className="bg-shape"
          src="/assets/avista/images/h1-active-bg.webp"
          alt="Active Background Shape"
        />
      </div>

      <div className="container as-container-1">
        <div className="as-hero-1-wrap">
          {/* Left Content Column */}
          <div className="as-hero-1-left">
            {/* Vertical Marquee Ribbon */}
            <div className="as-hero-1-marquee">
              <div className="as-hero-1-marquee-wrap wa_marquee_down_top">
                {marqueeItems.concat(marqueeItems).map((item, idx) => (
                  <p key={idx} className="as-p-1 text-elm">
                    {item} <span>*</span>
                  </p>
                ))}
              </div>
            </div>

            {/* Copyright badge at bottom left */}
            <div className="as-hero-1-copyright-bg">
              <h4 className="as-hero-1-copyright as-h-1 wa_split_up">
                &copy;2026-Adyantra
              </h4>
              <div
                className="as-hero-1-copyright-bg-shape"
                style={{ backgroundImage: "url('/assets/avista/images/h1-bg-noise-1.gif')" }}
              ></div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="as-hero-1-right">
            <div className="as-hero-1-content">
              {/* Tagline / Subtitle */}
              <p className="as-p-1 hero-disc wa_title_split_2" style={{ maxWidth: "620px", fontSize: "18px", lineHeight: "1.6", color: "rgba(0,0,0,0.78)", marginBottom: "18px" }}>
                We engineer high-performance digital marketing ecosystems and AI automations to scale brands profitably.
              </p>

              {/* Big Title */}
              <h1 className="tx-title as-h-1 hero-title wa_title_spilt_1" style={{ fontSize: "clamp(34px, 5.2vw, 68px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: "26px" }}>
                Accelerate Your Brand with <span style={{ color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.15)" }}>Performance–Driven</span> AI-Automations &amp; Digital Marketing.
              </h1>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center", marginBottom: "32px" }}>
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
                    fontSize: "15px",
                    textDecoration: "none",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
                  }}
                >
                  <span>Get Started</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "13px" }}></i>
                </a>

                <a
                  href="#services"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "rgba(255,255,255,0.25)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.45)",
                    color: "#0f0f11",
                    padding: "14px 26px",
                    borderRadius: "100px",
                    fontWeight: 600,
                    fontSize: "15px",
                    textDecoration: "none",
                  }}
                >
                  <span>Our Services</span>
                  <i className="fa-solid fa-arrow-down" style={{ fontSize: "12px" }}></i>
                </a>
              </div>

              <div className="as-hero-1-content-inner">
                {/* Frosted Call Booking Card */}
                <div className="as-hero-1-content-box" style={{ backdropFilter: "blur(14px)", background: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.6)", borderRadius: "24px", padding: "26px" }}>
                  <h5 className="as-h-1 box-title" style={{ fontSize: "19px", fontWeight: 700, marginBottom: "14px", color: "#111111" }}>
                    Need strategy assistance? Book a discovery call
                  </h5>

                  <a href="https://wa.me/918309275093" target="_blank" rel="noopener noreferrer" aria-label="Schedule a call" className="as-pr-btn-1-v2 tx-button">
                    <span className="text">Chat on WhatsApp</span>
                    <span className="icon">
                      <i className="fa-brands fa-whatsapp" style={{ fontSize: "16px" }}></i>
                    </span>
                  </a>

                  <p className="as-p-1 box-address" style={{ marginTop: "14px", fontSize: "13.5px", color: "rgba(0,0,0,0.65)" }}>
                    or email us at{" "}
                    <a href="mailto:info@adyantra.in" style={{ color: "#000000", fontWeight: 700, textDecoration: "underline" }}>
                      info@adyantra.in
                    </a>
                  </p>
                </div>

                {/* Guaranteed Shield Badge */}
                <h4 className="as-h-1 guaranteed wa_title_spilt_1">
                  Guaranteed <i aria-hidden="true" className="flaticon flaticon-security"></i>
                </h4>
              </div>
            </div>
          </div>

          {/* Hero Featured Model Illustration */}
          <div className="as-hero-1-img">
            <div id="wa_liquid_img" className="wa_tilt_elm">
              <img
                decoding="async"
                className="hero-main-img"
                src="/assets/avista/images/h1-man.webp"
                alt="Adyantra Digital Creative Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
