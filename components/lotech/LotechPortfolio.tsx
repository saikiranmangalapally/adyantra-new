"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface CaseStudy {
  id: string;
  title: string;
  sector: string;
  metric: string;
  image: string;
  link: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "education",
    title: "Education Academy Scaling",
    sector: "Education & Coaching",
    metric: "240% Enrolment Surge & Automated Admissions CRM",
    image: "/assets/images/folio/folio-2-1.jpg",
    link: "/portfolio",
  },
  {
    id: "realestate",
    title: "Real Estate Pipeline Funnel",
    sector: "Real Estate & Housing",
    metric: "$4.2M High-Intent Site Visit Pipeline in 90 Days",
    image: "/assets/images/folio/folio-2-2.jpg",
    link: "/portfolio",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Revenue Lift",
    sector: "Fashion & Retail D2C",
    metric: "3.4x Verified ROAS via Meta Advantage+ & Retention Funnels",
    image: "/assets/images/folio/folio-2-3.jpg",
    link: "/portfolio",
  },
  {
    id: "healthcare",
    title: "Healthcare Booking Automation",
    sector: "Clinics & Healthcare",
    metric: "400% Rise in Monthly Confirmed Consultations",
    image: "/assets/images/folio/folio-2-4.jpg",
    link: "/portfolio",
  },
];

export default function LotechPortfolio() {
  const [activeTab, setActiveTab] = useState<string>(CASE_STUDIES[0].id);
  const currentCase = CASE_STUDIES.find((c) => c.id === activeTab) || CASE_STUDIES[0];

  return (
    <section className="portfolio-two" id="portfolio" style={{ padding: "110px 0 100px", backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="sec-title text-center" style={{ marginBottom: "50px" }}>
          <h6 className="sec-title__tagline">LATEST CASE STUDIES</h6>
          <h2 className="sec-title__title">
            Proven Results Driven <br />By Data &amp; Automation.
          </h2>
        </div>

        <div className="row tabs-box align-items-center">
          {/* Left Column: Interactive Tab Buttons */}
          <div className="col-lg-5">
            <ul className="portfolio-two__tabs list-unstyled" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {CASE_STUDIES.map((study, idx) => {
                const isActive = activeTab === study.id;
                return (
                  <li
                    key={study.id}
                    onClick={() => setActiveTab(study.id)}
                    className={`tab-btn ${isActive ? "active-btn" : ""}`}
                    style={{
                      borderRadius: "14px",
                      overflow: "hidden",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "24px 28px",
                      cursor: "pointer",
                      border: isActive ? "1px solid #6C3BFF" : "1px solid transparent",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                      <span
                        style={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 800,
                          fontSize: "18px",
                          color: isActive ? "#FFFFFF" : "#6C3BFF",
                        }}
                      >
                        0{idx + 1}.
                      </span>
                      <div>
                        <div style={{ fontSize: "19px", fontWeight: 700, lineHeight: 1.2 }}>
                          {study.title}
                        </div>
                        <div style={{ fontSize: "13px", fontWeight: 500, opacity: 0.8, marginTop: "4px" }}>
                          {study.sector}
                        </div>
                      </div>
                    </div>
                    <span style={{ fontSize: "20px" }}>&rarr;</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Column: Active Tab Mockup Display */}
          <div className="col-lg-7">
            <div
              className="portfolio-two__item"
              style={{
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 20px 40px rgba(23, 21, 31, 0.08)",
              }}
            >
              <img
                src={currentCase.image}
                alt={currentCase.title}
                style={{ width: "100%", height: "460px", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  left: "30px",
                  bottom: "30px",
                  right: "30px",
                  backgroundColor: "rgba(23, 21, 31, 0.85)",
                  backdropFilter: "blur(10px)",
                  padding: "20px 24px",
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "#FFFFFF",
                }}
              >
                <div>
                  <span style={{ color: "#C8F31D", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    Verified Result
                  </span>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "17px", fontWeight: 700, marginTop: "2px" }}>
                    {currentCase.metric}
                  </div>
                </div>
                <Link
                  href={currentCase.link}
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    backgroundColor: "#6C3BFF",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  &nearr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
