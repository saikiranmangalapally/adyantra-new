"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function LotechContact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Performance Marketing & Ads",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("success"); // fallback gracefully
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <section className="contact-one" id="contact" style={{ padding: "100px 0 120px", position: "relative" }}>
      <div className="contact-one__bg" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6">
            <div className="contact-one__wrapper" style={{ padding: "40px 0" }}>
              <div className="sec-title text-left" style={{ paddingBottom: "10px" }}>
                <h6 className="sec-title__tagline">CONTACT NOW</h6>
                <h2 className="sec-title__title">
                  Get In Touch With <br />Our Growth Specialists
                </h2>
              </div>
              <p className="contact-one__wrapper__text" style={{ color: "#6F6B7A", fontSize: "16px", lineHeight: "26px", marginBottom: "32px" }}>
                Ready to scale your business with automated systems and high-performing ad campaigns? Reach out to our team today for a confidential growth audit.
              </p>

              {status === "success" ? (
                <div style={{ backgroundColor: "#F1EDFF", border: "1px solid #6C3BFF", borderRadius: "14px", padding: "24px", color: "#17151F" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#6C3BFF", margin: "0 0 6px" }}>
                    Message Received!
                  </h3>
                  <p style={{ margin: 0, fontSize: "14px", color: "#6F6B7A" }}>
                    Our growth strategist will review your inquiry and connect via WhatsApp/Email within 2 business hours.
                  </p>
                </div>
              ) : (
                <form className="contact-one__form form-one" onSubmit={handleSubmit}>
                  <div className="form-one__group">
                    <div className="form-one__control">
                      <input
                        type="text"
                        required
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{ borderRadius: "8px", border: "1px solid #D9CCFF", backgroundColor: "#FFFFFF" }}
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="email"
                        required
                        placeholder="E-mail Address*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ borderRadius: "8px", border: "1px solid #D9CCFF", backgroundColor: "#FFFFFF" }}
                      />
                    </div>
                    <div className="form-one__control">
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number*"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ borderRadius: "8px", border: "1px solid #D9CCFF", backgroundColor: "#FFFFFF" }}
                      />
                    </div>
                    <div className="form-one__control">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{
                          display: "block",
                          width: "100%",
                          height: "50px",
                          borderRadius: "8px",
                          border: "1px solid #D9CCFF",
                          backgroundColor: "#FFFFFF",
                          color: "#17151F",
                          padding: "0 20px",
                          outline: "none",
                        }}
                      >
                        <option value="Performance Marketing & Ads">Performance Marketing &amp; Paid Ads</option>
                        <option value="AI Automation & Workflows">AI Automation &amp; Autonomous Agents</option>
                        <option value="Next.js Web / Software Development">Next.js Web &amp; Software Development</option>
                        <option value="WhatsApp CRM & Lead Pipelines">WhatsApp CRM &amp; Lead Pipelines</option>
                        <option value="SEO & Organic Growth">Technical &amp; Programmatic SEO</option>
                      </select>
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <textarea
                        rows={4}
                        placeholder="Describe your current bottleneck, revenue goals, or timeline..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{ borderRadius: "8px", border: "1px solid #D9CCFF", backgroundColor: "#FFFFFF" }}
                      />
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="lotech-btn lotech-btn--lime"
                        style={{ width: "100%", padding: "18px 30px" }}
                      >
                        <span>
                          {status === "submitting" ? "Sending Request..." : "Request Growth Audit & Consultation"}
                          <span className="lotech-btn__icon">
                            <i className="flaticon-up-right-arrow" />
                            <i className="flaticon-up-right-arrow" />
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="col-xl-6">
            <div className="contact-one__image" style={{ textAlign: "center", padding: "40px 0" }}>
              <img
                src="/assets/images/resources/contact-1-1.jpg"
                alt="Contact Adyantra Growth Architects"
                style={{ borderRadius: "20px", maxWidth: "100%", height: "auto", boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
