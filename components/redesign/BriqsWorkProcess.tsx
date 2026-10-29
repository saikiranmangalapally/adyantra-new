"use client";

import React from "react";
import { ArrowRight, Search, Code2, RefreshCw, Rocket } from "lucide-react";

export default function BriqsWorkProcess() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      desc: "We begin by understanding your business needs, challenges, & goals through in-depth audits of your funnel and ad accounts.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#6C3BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="6" width="20" height="36" rx="4" />
          <polygon points="21 18 29 24 21 30 21 18" />
          <line x1="8" y1="14" x2="8" y2="34" />
          <line x1="40" y1="14" x2="40" y2="34" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Design & Development",
      desc: "With a clear plan in place, our experts move into the design and development phase for custom web, ads, and AI workflows.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#6C3BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="24" r="14" />
          <path d="M24 16v4" />
          <path d="M24 28v4" />
          <path d="M16 24h4" />
          <path d="M28 24h4" />
          <circle cx="24" cy="24" r="5" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Continuous Improvement",
      desc: "In a fast-changing digital world, staying ahead is essential. That's why we continuously monitor, A/B test, and optimize bids.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#6C3BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="8" width="16" height="32" rx="3" />
          <circle cx="18" cy="18" r="4" />
          <circle cx="34" cy="18" r="6" />
          <line x1="34" y1="28" x2="40" y2="36" />
          <line x1="34" y1="36" x2="40" y2="28" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Launch & Support",
      desc: "Once everything is in place, we launch the solution with comprehensive support, 24/7 SLA monitoring, and predictable scaling.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 48 48" fill="none" stroke="#6C3BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="24" cy="20" r="12" />
          <path d="M18 18a6 6 0 0 1 12 0" />
          <path d="M21 21a3 3 0 0 1 6 0" />
          <path d="M24 32v8" />
          <line x1="16" y1="40" x2="32" y2="40" />
        </svg>
      ),
    },
  ];

  return (
    <section className="briqs-process-section" id="process">
      <div className="briqs-shell">
        {/* Header matching Image 2 */}
        <div className="briqs-process-header">
          <span className="briqs-process-badge">WORK PROCESS</span>
          <h2 className="briqs-process-title">How We Get Things Done</h2>
          <p className="briqs-process-desc">
            Our structured 4-phase framework ensures rapid deployment, data-driven optimization, and predictable scaling.
          </p>
        </div>

        {/* 4 Process Steps Connected by Horizontal Arrows (Exact Match to Image 2) */}
        <div className="briqs-process-row">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="briqs-step-item">
                {/* Double Ring Circle with Top-Right Number Pill */}
                <div className="briqs-step-circle-outer">
                  <div className="briqs-step-circle-inner">
                    {step.icon}
                  </div>
                  <span className="briqs-step-num-pill">{step.num}</span>
                </div>

                {/* Step Title & Description */}
                <h3 className="briqs-step-title">{step.title}</h3>
                <p className="briqs-step-desc">{step.desc}</p>
              </div>

              {/* Connector Arrow between steps */}
              {idx < steps.length - 1 && (
                <div className="briqs-step-arrow-wrap" aria-hidden="true">
                  <svg width="32" height="18" viewBox="0 0 32 18" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="2" y1="9" x2="30" y2="9" />
                    <polyline points="23 2 30 9 23 16" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
