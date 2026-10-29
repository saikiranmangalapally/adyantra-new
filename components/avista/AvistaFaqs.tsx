"use client";

import React, { useState } from "react";

export default function AvistaFaqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      num: "01.",
      question: "How quickly can we expect measurable results from your digital campaigns?",
      answer:
        "Timelines depend on your market and starting point. Paid acquisition (Meta & Google PPC) can yield early validated lead signals within 2 to 3 weeks, while technical SEO, content authority, and conversion rate optimization compound strongly over the following months.",
    },
    {
      num: "02.",
      question: "Which specific services are best suited for my business goals?",
      answer:
        "We recommend a focused mix after auditing your current funnel, opportunity size, target audience, and technical readiness. Whether you need rapid lead acquisition, store checkout optimization, or autonomous WhatsApp CRM bots, we craft a custom roadmap.",
    },
    {
      num: "03.",
      question: "How does Adyantra track and measure campaign ROI?",
      answer:
        "We deploy first-party server-side CAPI tracking, custom GA4 conversion events, and live Looker Studio executive dashboards. You get complete transparency on cost per qualified lead, customer acquisition cost (CAC), and return on ad spend (ROAS).",
    },
    {
      num: "04.",
      question: "Can we start with a focused budget and scale as results improve?",
      answer:
        "Yes, absolutely. We build a practical initial roadmap, validate which creatives and channels produce profitable unit economics, and strategically scale media investment where it yields maximum bottom-line revenue.",
    },
    {
      num: "05.",
      question: "What differentiates Adyantra from conventional marketing agencies?",
      answer:
        "Senior in-house execution. We eliminate junior account handlers and outsourced subcontractors. Your business partners directly with seasoned web architects, performance media buyers, and AI automation engineers working in unison.",
    },
  ];

  return (
    <section className="as-faqs-1-area pt-100 pb-110 tx-section" id="faq" style={{ background: "#ffffff" }}>
      <div className="container as-container-1">
        <div className="as-faqs-1-wrap">
          {/* Left Column: Awards & Credentials */}
          <div className="as-faqs-1-left">
            <div className="as-faqs-1-left-sec-title text-center mb-60">
              <h6 className="as-subtitle-1 tx-subTitle" style={{ justifyContent: "center" }}>
                <span className="icon">
                  &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
                </span>{" "}
                Clear Answers
              </h6>
              <h2 className="tx-title as-sec-title-1" style={{ fontSize: "36px", fontWeight: 800 }}>
                Everything You Need to Know <br />
                <span style={{ color: "#fd3f00" }}>About Working With Us</span>
              </h2>
              <p className="as-p-1 sec-disc tx-description" style={{ fontSize: "15px", color: "#64748b", marginTop: "12px", lineHeight: "1.6" }}>
                Transparent timelines, verified attribution models, in-house technical execution, and predictable scaling.
              </p>
            </div>

            {/* Honors Badges / Proof Grid */}
            <div className="as-faqs-1-award-wrap">
              {[
                { title: "Meta Business Partner", date: "Verified CAPI & High-ROAS Media" },
                { title: "Google Ads Certified", date: "Search, Display & Performance Max" },
                { title: "Shopify Dev Partner", date: "Headless E-Commerce & Checkout Optimization" },
                { title: "Make & n8n Verified", date: "Enterprise Automation & Workflow Architecture" },
              ].map((award, idx) => (
                <div key={idx} className="as-faqs-1-award-item">
                  <div className="left">
                    <h5 className="as-h-1 award-title" style={{ fontSize: "16px", fontWeight: 700 }}>
                      <a href="#0">{award.title}</a>
                    </h5>
                    <p className="as-p-1 award-date" style={{ fontSize: "12.5px", color: "#64748b" }}>{award.date}</p>
                  </div>
                  <div className="icon" style={{ color: "#fd3f00" }}>
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="as-faqs-1-right">
            <div className="as-faqs-1-sec-title">
              <h6 className="as-subtitle-1 tx-subTitle" style={{ marginBottom: "12px" }}>
                <span className="icon">
                  &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
                </span>{" "}
                Frequently Asked Questions
              </h6>
              <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800 }}>
                Frequently Asked <br />
                <span style={{ color: "#fd3f00" }}>Questions</span>
              </h2>
            </div>

            {/* FAQ Accordion List */}
            <div className="as-accordion-1" style={{ marginTop: "30px" }}>
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`as-accordion-item ${isOpen ? "active" : ""}`}
                    style={{
                      borderBottom: "1px solid #e2e8f0",
                      padding: "20px 0",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <div
                      className="item-title"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <h4
                        className="as-h-1 title"
                        style={{
                          fontSize: "17.5px",
                          fontWeight: 700,
                          color: isOpen ? "#fd3f00" : "#181818",
                          margin: 0,
                          transition: "color 0.2s ease",
                        }}
                      >
                        <span style={{ color: "#94a3b8", marginRight: "10px", fontSize: "14px" }}>{faq.num}</span>
                        {faq.question}
                      </h4>
                      <div
                        className="icon"
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: isOpen ? "#fd3f00" : "#f1f5f9",
                          color: isOpen ? "#ffffff" : "#64748b",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all 0.25s ease",
                        }}
                      >
                        <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`} style={{ fontSize: "12px" }}></i>
                      </div>
                    </div>

                    {isOpen && (
                      <div className="item-disc" style={{ marginTop: "14px", paddingLeft: "32px" }}>
                        <p className="as-p-1 disc" style={{ fontSize: "15px", color: "#64748b", lineHeight: "1.7", margin: 0 }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
