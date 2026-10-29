"use client";

import React from "react";

export default function AvistaPricing() {
  const plans = [
    {
      name: "Starter Plan",
      disc: "A smart choice for startups that value speed, clarity, and creativity.",
      price: "$1500",
      features: [
        "10 design request/month",
        "Social Media & Marketing Assets",
        "Conceptual sketches and mood boards",
        "2 Revisions per request",
        "5-day turnaround per request",
        "Pause or cancel anytime",
      ],
    },
    {
      name: "Growth Plan",
      disc: "Tailored for scaling brands that need rapid execution and versatile output.",
      price: "$1900",
      popular: true,
      features: [
        "Unlimited design requests",
        "Web & UI/UX Design",
        "Motion Graphics & Animations",
        "Priority Support",
        "3-day turnaround per request",
        "Pause or cancel anytime",
      ],
    },
    {
      name: "Premium Plan",
      disc: "Crafted for businesses with high-demand, enterprise creative needs.",
      price: "$2900",
      features: [
        "Unlimited design & revisions",
        "Web, Branding & Motion Design",
        "Custom Illustrations & 3D Graphics",
        "1:1 Creative Strategy Sessions",
        "24-48 hour turnaround",
        "Dedicated Design Lead",
        "Pause or cancel anytime",
      ],
    },
  ];

  return (
    <section className="as-price-1-area pt-50 tx-section" id="pricing">
      <div className="container as-container-1">
        {/* Section Header */}
        <div className="as-price-1-sec-title text-center mb-40">
          <h6 className="as-subtitle-1 tx-subTitle">
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-circle" style={{ color: "#fd3f00", fontSize: "8px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Pricing
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1">Pricing Plans.</h2>
          <p className="as-p-1 sec-disc tx-description">
            We offer flexible subscription-based design plans, giving you unlimited access to premium creative services.
          </p>
        </div>

        <div className="as-price-1-wrap">
          {/* Left Screenshot Reel */}
          <div className="as-price-1-left">
            <div className="as-price-1-ss wa_marquee_down_top">
              {[
                "/assets/avista/images/p1-ss-1.webp",
                "/assets/avista/images/p1-ss-2.webp",
                "/assets/avista/images/p1-ss-3.webp",
              ].map((src, idx) => (
                <div key={idx} className="as-price-1-ss-single wa-fix wa-img-cover">
                  <img decoding="async" src={src} alt={`Pricing portfolio demo ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Pricing Tier Cards */}
          <div className="as-price-1-right">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className="as-price-1-card"
                style={{
                  backgroundImage: "url('/assets/avista/images/p1-card-shape.webp')",
                  backgroundSize: "cover",
                }}
              >
                <h3 className="as-h-1 plan-name">{plan.name}</h3>
                <p className="as-p-1 plan-disc">{plan.disc}</p>

                <h4 className="as-h-1 plan-price">
                  {plan.price}
                  <span>/session</span>
                </h4>

                <ul className="wa-ul plan-list">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="as-p-1">
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="plan-btn as-p-1 wa_btn_split_1 wa_magnetic_btn_1"
                >
                  <span className="text wa-fix">Get started</span>
                  <i aria-hidden="true" className="fas fa-long-arrow-right"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
