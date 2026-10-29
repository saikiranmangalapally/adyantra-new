"use client";

import React from "react";

export default function AvistaPartners() {
  const logos = [
    { img: "/assets/avista/images/p1-logo-3.webp", num: "01" },
    { img: "/assets/avista/images/p1-logo-1.webp", num: "02" },
    { img: "/assets/avista/images/p1-logo-2.webp", num: "03" },
    { img: "/assets/avista/images/p1-logo-6.webp", num: "04" },
    { img: "/assets/avista/images/p1-logo-5.webp", num: "05" },
    { img: "/assets/avista/images/p1-logo-4.webp", num: "06" },
  ];

  return (
    <section className="as-partner-1-area pt-80 pb-70 wa-fix tx-section">
      <div className="container as-container-1">
        {/* Section Title */}
        <div className="as-partner-1-sec-title mb-40">
          <h6 className="as-subtitle-1 tx-subTitle">
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-circle" style={{ color: "#fd3f00", fontSize: "8px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Partners
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1">
            We believe in the power of collaboration
          </h2>
        </div>

        <div className="as-partner-1-wrap wa-p-relative">
          {/* Rotating Award Seal */}
          <div className="as-partner-1-circle-text">
            <img
              decoding="async"
              src="/assets/avista/images/p1-circle-text.webp"
              alt="National Award Winning Design Badge"
              className="circle-text"
              style={{ animation: "spin 20s linear infinite" }}
            />
            <div className="illus">
              <img
                decoding="async"
                src="/assets/avista/images/p1-illus-1.webp"
                alt="Award Emblem Star"
              />
            </div>
          </div>

          {/* Left Grid: Partner Logos */}
          <div className="as-partner-1-logo">
            {logos.map((logo, idx) => (
              <div key={idx} className="as-partner-1-logo-single wa-p-relative">
                <img decoding="async" src={logo.img} alt={`Partner logo ${logo.num}`} />
                <p className="as-p-1 number">{logo.num}</p>
              </div>
            ))}
          </div>

          {/* Right: Cloud, Rocket & Boost Your Business */}
          <div className="as-partner-1-right wa-p-relative partner1_trigger">
            <div className="as-partner-1-cloud">
              <img
                decoding="async"
                src="/assets/avista/images/p1-cloud.webp"
                alt="Cloud Graphic 1"
                className="cloud-1"
              />
              <img
                decoding="async"
                src="/assets/avista/images/p1-cloud-2.webp"
                alt="Cloud Graphic 2"
                className="cloud-2"
              />
              <img
                decoding="async"
                src="/assets/avista/images/p1-rocket.webp"
                alt="Rocket Illustration"
                className="rocket"
              />
            </div>

            <div className="as-partner-1-boost">
              <img
                decoding="async"
                className="arrow"
                src="/assets/avista/images/p1-arrow.webp"
                alt="Directional arrow"
              />
              <h4 className="as-h-1 title">Boost Your</h4>
              <h4 className="as-h-1 title">Business</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
