"use client";

import React, { useState } from "react";

export default function AvistaContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Digital Marketing & SEO",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Digital Marketing & SEO",
        details: "",
      });
    }, 4500);
  };

  return (
    <section className="as-cta-2-area pt-100 pb-100 tx-section" id="contact" style={{ background: "#f8fafc" }}>
      <div className="container as-container-1">
        <div className="as-cta-2-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "40px" }}>
          {/* Left Column: Direct Contact & Positioning */}
          <div className="as-cta-2-left" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h6 className="as-subtitle-1 tx-subTitle" style={{ marginBottom: "14px" }}>
                <span className="icon">
                  &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
                </span>{" "}
                Connect With Our Team
              </h6>
              <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: "18px" }}>
                Ready to accelerate your <br />
                <span style={{ color: "#fd3f00" }}>digital market advantage?</span>
              </h2>
              <p className="as-p-1 sec-disc" style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.65", marginBottom: "32px" }}>
                Partner with Adyantra Digital to elevate search rankings, capture high-intent leads, and automate revenue operations.
              </p>

              {/* Direct Contact Cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                {/* Email Support */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "18px",
                    padding: "20px 22px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(253, 63, 0, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fd3f00",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: "14px", fontWeight: 700, color: "#181818", margin: "0 0 2px" }}>Email Support</h5>
                    <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                      <a href="mailto:info@adyantra.in" style={{ fontSize: "14px", color: "#fd3f00", textDecoration: "none", fontWeight: 600 }}>
                        info@adyantra.in
                      </a>
                      <a href="mailto:adyantradigital@gmail.com" style={{ fontSize: "13px", color: "#64748b", textDecoration: "none" }}>
                        adyantradigital@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Direct Phone / WhatsApp */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "18px",
                    background: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "18px",
                    padding: "20px 22px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "14px",
                      background: "rgba(34, 197, 94, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#16a34a",
                      fontSize: "20px",
                    }}
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <h5 style={{ fontSize: "14px", fontWeight: 700, color: "#181818", margin: "0 0 2px" }}>Direct Phone &amp; WhatsApp</h5>
                    <a href="tel:+918309275093" style={{ fontSize: "14px", color: "#181818", textDecoration: "none", fontWeight: 600 }}>
                      +91 83092 75093
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div
              style={{
                background: "rgba(253, 63, 0, 0.05)",
                border: "1px solid rgba(253, 63, 0, 0.15)",
                borderRadius: "16px",
                padding: "16px 20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <i className="fa-solid fa-clock" style={{ color: "#fd3f00", fontSize: "18px" }}></i>
              <p style={{ margin: 0, fontSize: "13.5px", color: "#334155" }}>
                <b>24-Hour Guarantee:</b> Our senior strategy lead will review your submission and respond within 24 hours.
              </p>
            </div>
          </div>

          {/* Right Column: Request Free Growth Audit Form */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "28px",
              padding: "40px",
              boxShadow: "0 20px 45px rgba(0,0,0,0.05)",
            }}
          >
            <div style={{ marginBottom: "28px" }}>
              <h3 style={{ fontSize: "24px", fontWeight: 800, color: "#181818", marginBottom: "8px" }}>
                Request a Free Growth Audit
              </h3>
              <p style={{ fontSize: "14.5px", color: "#64748b", margin: 0 }}>
                Fill out the details below and we will audit your current funnel and traffic opportunities.
              </p>
            </div>

            {submitted ? (
              <div
                style={{
                  background: "#f0fdf4",
                  border: "1px solid #bbf7d0",
                  borderRadius: "18px",
                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "54px", height: "54px", borderRadius: "50%", background: "#22c55e", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: "22px" }}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#166534", marginBottom: "8px" }}>
                  Audit Request Received!
                </h4>
                <p style={{ fontSize: "14px", color: "#15803d", margin: 0 }}>
                  Thank you! Our technical strategy team will review your project and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        borderRadius: "12px",
                        border: "1px solid #cbd5e1",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        borderRadius: "12px",
                        border: "1px solid #cbd5e1",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 83092 75093"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        borderRadius: "12px",
                        border: "1px solid #cbd5e1",
                        fontSize: "14px",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                      Primary Service Interested In
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        borderRadius: "12px",
                        border: "1px solid #cbd5e1",
                        fontSize: "14px",
                        outline: "none",
                        background: "#ffffff",
                      }}
                    >
                      <option>Digital Marketing &amp; SEO</option>
                      <option>AI Automation &amp; Workflows</option>
                      <option>Web Design &amp; Development</option>
                      <option>PPC &amp; Meta Ads</option>
                      <option>E-commerce Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#334155", marginBottom: "6px" }}>
                    Project Details &amp; Current Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us a little about your targets, current ad spend, or technical requirements..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "13px 16px",
                      borderRadius: "12px",
                      border: "1px solid #cbd5e1",
                      fontSize: "14px",
                      outline: "none",
                      resize: "vertical",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="as-pr-btn-1 tx-button"
                  style={{
                    background: "#0f0f11",
                    color: "#ffffff",
                    padding: "16px 32px",
                    borderRadius: "100px",
                    fontWeight: 700,
                    fontSize: "15px",
                    border: "none",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  }}
                >
                  <span>Request Free Growth Audit</span>
                  <i className="fa-solid fa-arrow-right" style={{ fontSize: "13px" }}></i>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
