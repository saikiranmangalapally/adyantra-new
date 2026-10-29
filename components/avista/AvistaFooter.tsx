"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AvistaFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3500);
      setEmail("");
    }
  };

  return (
    <footer
      className="as-footer-1-area wa-bg-default pt-95 pb-120 tx-section"
      id="footer"
      style={{
        backgroundImage: "url('/assets/avista/images/f1-bg-img.webp')",
        backgroundSize: "cover",
        backgroundColor: "#0A0A0A",
        color: "#ffffff",
      }}
    >
      <div className="container as-container-1">
        <div className="as-footer-1-container">
          <div className="as-footer-1-wrap mb-90" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "36px" }}>
            {/* Widget 1: Brand & Newsletter */}
            <div className="as-footer-1-widget" style={{ gridColumn: "span 1" }}>
              <div className="as-footer-1-newsletter">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <img
                    src="/assets/avista/images/logo-5.svg"
                    alt="Adyantra Digital"
                    style={{ maxHeight: "38px", width: "auto" }}
                  />
                  <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.5px" }}>Adyantra</span>
                </div>
                <p className="as-p-1 disc" style={{ color: "#94a3b8", fontSize: "14px", lineHeight: "1.6", marginBottom: "20px" }}>
                  Premier technology-first digital marketing and AI automation agency engineering measurable revenue advantage for scaling brands.
                </p>

                <div className="tx-contactForm">
                  {subscribed ? (
                    <p style={{ color: "#22c55e", fontWeight: 600, margin: "16px 0", fontSize: "14px" }}>
                      Thank you for subscribing to growth briefings!
                    </p>
                  ) : (
                    <form onSubmit={handleSubscribe} className="as-footer-1-newsletter-form wa-p-relative">
                      <input
                        required
                        type="email"
                        placeholder="Work email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="as-footer-1-newsletter-form-input wa_placeholder"
                        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", padding: "12px 18px", borderRadius: "100px", width: "100%", fontSize: "13.5px" }}
                      />
                      <button
                        type="submit"
                        className="as-footer-1-newsletter-form-btn as-pr-btn-1 wa_btn_split_1 wa_magnetic_btn_1"
                        style={{ background: "#fd3f00", color: "#ffffff", border: "none", padding: "10px 20px", borderRadius: "100px", fontWeight: 700, fontSize: "13px", cursor: "pointer", marginTop: "10px" }}
                      >
                        <span className="text wa-fix">Get Updates</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Widget 2: Services */}
            <div className="as-footer-1-widget">
              <h4 className="as-footer-1-widget-title as-h-1" style={{ color: "#ffffff", fontSize: "17px", fontWeight: 700, marginBottom: "18px" }}>
                Services
              </h4>
              <ul className="wa-ul as-footer-1-menu" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                <li className="as-p-1"><Link href="/seo" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Technical SEO &amp; Rankings</Link></li>
                <li className="as-p-1"><Link href="/performance-marketing" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Performance Meta &amp; Google Ads</Link></li>
                <li className="as-p-1"><Link href="/web-software-development" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Next.js Web Applications</Link></li>
                <li className="as-p-1"><Link href="/ai-automation" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>AI Workflows &amp; Agents</Link></li>
                <li className="as-p-1"><Link href="/ecommerce-solutions" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>E-Commerce Checkout Growth</Link></li>
                <li className="as-p-1"><Link href="/crm-automation" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>CRM &amp; Lead Systems</Link></li>
              </ul>
            </div>

            {/* Widget 3: Navigation */}
            <div className="as-footer-1-widget">
              <h4 className="as-footer-1-widget-title as-h-1" style={{ color: "#ffffff", fontSize: "17px", fontWeight: 700, marginBottom: "18px" }}>
                Company
              </h4>
              <ul className="wa-ul as-footer-1-menu" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                <li className="as-p-1"><Link href="/about" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>About Adyantra</Link></li>
                <li className="as-p-1"><a href="#operating-model" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Operating Model</a></li>
                <li className="as-p-1"><a href="#domains" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Domains We Serve</a></li>
                <li className="as-p-1"><a href="#process" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Our Proven Process</a></li>
                <li className="as-p-1"><a href="#reviews" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Client Reviews</a></li>
                <li className="as-p-1"><Link href="/privacy" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Privacy Policy</Link></li>
                <li className="as-p-1"><Link href="/terms" style={{ color: "#94a3b8", textDecoration: "none", fontSize: "14px" }}>Terms of Service</Link></li>
              </ul>
            </div>

            {/* Widget 4: Contact & Social */}
            <div className="as-footer-1-widget">
              <h4 className="as-footer-1-widget-title as-h-1" style={{ color: "#ffffff", fontSize: "17px", fontWeight: 700, marginBottom: "18px" }}>
                Direct Contact
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
                <div>
                  <span style={{ fontSize: "12px", color: "#64748b", textTransform: "uppercase", display: "block" }}>Email</span>
                  <a href="mailto:info@adyantra.in" style={{ color: "#fd3f00", textDecoration: "none", fontWeight: 600, fontSize: "14.5px" }}>
                    info@adyantra.in
                  </a>
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#64748b", textTransform: "uppercase", display: "block" }}>Phone / WhatsApp</span>
                  <a href="tel:+918309275093" style={{ color: "#ffffff", textDecoration: "none", fontWeight: 600, fontSize: "14px" }}>
                    +91 83092 75093
                  </a>
                </div>
                <div>
                  <span style={{ fontSize: "12px", color: "#64748b", textTransform: "uppercase", display: "block" }}>Headquarters</span>
                  <p style={{ color: "#94a3b8", margin: 0, fontSize: "13.5px" }}>
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </div>

              {/* Social Icons */}
              <div style={{ display: "flex", gap: "12px" }}>
                {[
                  { icon: "fa-brands fa-linkedin-in", href: "https://linkedin.com" },
                  { icon: "fa-brands fa-whatsapp", href: "https://wa.me/918309275093" },
                  { icon: "fa-brands fa-instagram", href: "https://instagram.com" },
                  { icon: "fa-brands fa-x-twitter", href: "https://twitter.com" },
                ].map((s, idx) => (
                  <a
                    key={idx}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.06)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: "13px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#fd3f00";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    }}
                  >
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="as-footer-1-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "30px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
            <p className="as-footer-1-copyright as-p-1" style={{ color: "#64748b", fontSize: "13.5px", margin: 0 }}>
              &copy; {new Date().getFullYear()} Adyantra Digital. All rights reserved.
            </p>

            <p className="as-footer-1-make as-p-1" style={{ color: "#64748b", fontSize: "13.5px", margin: 0 }}>
              Engineered with <i className="fa-solid fa-bolt" style={{ color: "#fd3f00", margin: "0 4px" }}></i> for Maximum Growth
            </p>

            <div className="as-footer-1-bottom-link" style={{ display: "flex", gap: "20px" }}>
              <Link className="link-elm as-p-1" href="/privacy" style={{ color: "#64748b", fontSize: "13px", textDecoration: "none" }}>
                Privacy Policy
              </Link>
              <Link className="link-elm as-p-1" href="/terms" style={{ color: "#64748b", fontSize: "13px", textDecoration: "none" }}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
