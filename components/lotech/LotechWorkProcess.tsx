"use client";

import React from "react";

const STEPS = [
  {
    number: "1",
    title: "Discovery & Audit",
    text: "Deep-dive diagnostic into existing conversion funnels, CAC economics, and automation gaps.",
    iconClass: "flaticon-discover",
  },
  {
    number: "2",
    title: "Strategy & Architecture",
    text: "Engineering customized AI agent blueprints, high-converting offer angles, and multi-channel acquisition maps.",
    iconClass: "flaticon-mind",
  },
  {
    number: "3",
    title: "Execution & Deployment",
    text: "Rapid roll-out of high-converting ad creative, Next.js software funnels, and automated CRM pipelines in 14 days.",
    iconClass: "flaticon-network",
  },
  {
    number: "4",
    title: "Optimization & Scale",
    text: "Continuous multivariate testing, bid algorithm optimization, and workflow refinement to scale bottom-line ROI.",
    iconClass: "flaticon-strategry",
  },
];

export default function LotechWorkProcess() {
  return (
    <section className="work-process-one" id="process" style={{ padding: "110px 0 120px" }}>
      <div className="container">
        <div className="sec-title text-center" style={{ marginBottom: "50px" }}>
          <h6 className="sec-title__tagline">WORK PROCESS</h6>
          <h2 className="sec-title__title">Four Steps Work Process</h2>
        </div>
        <div className="row gutter-y-30">
          {STEPS.map((step, idx) => (
            <div key={idx} className="col-xl-3 col-md-6">
              <div className="work-process-one__item text-center">
                {idx < STEPS.length - 1 && (
                  <div className={`work-process-one__item__draw ${idx === 1 ? "work-process-one__item__draw--two" : ""}`} />
                )}
                <div className="work-process-one__item__icon" style={{ position: "relative" }}>
                  <i className={step.iconClass} />
                  <div className="work-process-one__item__number">{step.number}</div>
                </div>
                <h3 className="work-process-one__item__title" style={{ fontSize: "20px", fontWeight: 700, margin: "20px 0 10px", color: "#17151F" }}>
                  {step.title}
                </h3>
                <p className="work-process-one__item__text" style={{ color: "#6F6B7A", fontSize: "15px", lineHeight: "24px" }}>
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
