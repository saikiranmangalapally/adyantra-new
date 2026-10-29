"use client";

import React from "react";

export default function AvistaTestimonials() {
  const reviews = [
    {
      name: "Dr. Arvind M.",
      role: "Healthcare & Clinics • Founder",
      stars: 5,
      headline: "40% Lower Patient Drop-off & Full Funnel Restructure",
      quote:
        "Adyantra completely restructured our patient acquisition funnel. Their targeted Google Ads and WhatsApp booking bot reduced our appointment drop-off rate by 40% in the first quarter. Truly an indispensable technical growth partner.",
      img: "/assets/avista/images/author-1.webp",
      metric: "-40% Drop-off",
    },
    {
      name: "Sneha R.",
      role: "D2C Fashion Brand • Co-Founder",
      stars: 5,
      headline: "Meta ROAS Jumped from 1.8x to 3.4x in 60 Days",
      quote:
        "Our Meta ROAS jumped from 1.8x to 3.4x within 60 days. Their creative testing sprint cycles and first-party conversion tracking gave us complete clarity on our marketing spend and boosted store sales significantly.",
      img: "/assets/avista/images/author-2.webp",
      metric: "3.4x ROAS",
    },
    {
      name: "Pravalika J.",
      role: "Education Institution • Leadership",
      stars: 5,
      headline: "Doubled Student Enrolment Conversion Rate",
      quote:
        "Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate across all campuses.",
      img: "/assets/avista/images/author-3.webp",
      metric: "2x Conversions",
    },
    {
      name: "Pramode K.",
      role: "Enterprise Business • Owner",
      stars: 5,
      headline: "Actual Revenue Prioritized Over Vanity Metrics",
      quote:
        "A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance and server-side tracking make them a standout growth engine.",
      img: "/assets/avista/images/author-4.webp",
      metric: "Verified ROI",
    },
  ];

  return (
    <section className="as-testimonial-1-area pt-100 pb-90 tx-section" id="reviews" style={{ background: "#ffffff" }}>
      <div className="container as-container-1">
        {/* Section Header */}
        <div className="as-testimonial-1-sec-title text-center mb-50" style={{ maxWidth: "780px", margin: "0 auto 50px" }}>
          <h6 className="as-subtitle-1 tx-subTitle" style={{ justifyContent: "center", marginBottom: "12px" }}>
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Client Reviews
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1" style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800 }}>
            What Our <span style={{ color: "#fd3f00" }}>Clients Say</span>
          </h2>
          <p className="as-p-1 sec-disc tx-description" style={{ fontSize: "16px", color: "#64748b", marginTop: "12px", lineHeight: "1.6" }}>
            Real feedback and verified outcomes from 50+ scaling brands, founders, and business leaders we partner with.
          </p>
        </div>

        {/* 2x2 Grid of High-Impact Reviews */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
          {reviews.map((rev, idx) => (
            <article
              key={idx}
              style={{
                background: "#fcfdfe",
                border: "1px solid #e2e8f0",
                borderRadius: "24px",
                padding: "36px 32px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.borderColor = "#fd3f00";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(253,63,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "#e2e8f0";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.03)";
              }}
            >
              <div>
                {/* Top Stars & Outcome Metric */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "18px" }}>
                  <div style={{ color: "#fd3f00", fontSize: "14px", display: "flex", gap: "3px" }}>
                    {[...Array(rev.stars)].map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <span
                    style={{
                      background: "rgba(253, 63, 0, 0.08)",
                      color: "#fd3f00",
                      fontSize: "12px",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "100px",
                    }}
                  >
                    {rev.metric}
                  </span>
                </div>

                <h4 style={{ fontSize: "19px", fontWeight: 700, color: "#181818", marginBottom: "14px", lineHeight: "1.3" }}>
                  &ldquo;{rev.headline}&rdquo;
                </h4>

                <blockquote style={{ margin: 0, fontSize: "14.5px", color: "#64748b", lineHeight: "1.65" }}>
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Footer */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginTop: "28px", paddingTop: "20px", borderTop: "1px solid #f1f5f9" }}>
                <img
                  src={rev.img}
                  alt={rev.name}
                  style={{ width: "46px", height: "46px", borderRadius: "50%", objectFit: "cover", border: "2px solid #fd3f00" }}
                />
                <div>
                  <h5 style={{ fontSize: "16px", fontWeight: 700, color: "#111111", margin: 0 }}>{rev.name}</h5>
                  <p style={{ fontSize: "12.5px", color: "#64748b", margin: "2px 0 0" }}>{rev.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
