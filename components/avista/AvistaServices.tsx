"use client";

import React from "react";

export default function AvistaServices() {
  const services = [
    {
      num: "{01}",
      title: "Search Engine Optimization (SEO)",
      logo: "/assets/avista/images/s1-logo-1.webp",
      cardImg: "/assets/avista/images/s1-card-img-1.webp",
      tags: ["Technical SEO", "Keyword Clusters", "Backlink Architecture", "Core Web Vitals"],
    },
    {
      num: "{02}",
      title: "Performance Marketing & Paid Ads",
      logo: "/assets/avista/images/s1-logo-2.webp",
      cardImg: "/assets/avista/images/s1-card-img-2.webp",
      tags: ["Meta Ads ROAS", "Google Search & PMax", "Server-Side CAPI", "Conversion Funnels"],
    },
    {
      num: "{03}",
      title: "Custom Next.js & Web Engineering",
      logo: "/assets/avista/images/s1-logo-3.webp",
      cardImg: "/assets/avista/images/s1-card-img-3.webp",
      tags: ["Next.js 16 & React", "Headless Commerce", "PageSpeed 95+", "UI/UX Systems"],
    },
    {
      num: "{04}",
      title: "AI Automations & WhatsApp CRM Bots",
      logo: "/assets/avista/images/s1-logo-4.webp",
      cardImg: "/assets/avista/images/s1-card-img-4.webp",
      tags: ["Meta WhatsApp API", "Autonomous AI Agents", "HubSpot & Zoho Sync", "Lead Scoring"],
    },
  ];

  return (
    <section className="as-services-1-area pt-70 pb-120 tx-section" id="services">
      <div className="container as-container-1">
        <div className="as-services-1-container">
          {/* Header Row */}
          <div className="as-services-1-sec-title mb-50">
            <div className="left">
              <h6 className="as-subtitle-1 tx-subTitle">
                <span className="icon">
                  &#123;<i aria-hidden="true" className="fas fa-circle" style={{ color: "#fd3f00", fontSize: "8px", margin: "0 4px" }}></i>&#125;
                </span>{" "}
                Services
              </h6>
              <h2 className="tx-title as-sec-title-1 wa_title_spilt_1">
                Driving Growth Through Digital Excellence
              </h2>
            </div>

            <div className="img-elm">
              <img
                decoding="async"
                src="/assets/avista/images/s1-img-1.webp"
                alt="Creative digital agency services team"
              />
            </div>

            <div className="right">
              <p className="as-p-1 sec-disc tx-description">
                At Adyantra Digital Agency, we provide a full range of digital solutions designed to help businesses grow, connect, and succeed.
              </p>

              <div className="btn-wrap">
                <a href="#contact" aria-label="More Services" className="as-pr-btn-1-v2 tx-button">
                  <span className="text">More Services</span>
                  <span className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" id="fi_12116860" height="100" viewBox="0 0 100 100" width="100">
                      <g>
                        <circle cx="90.5" cy="50" r="4.5"></circle>
                        <circle cx="77" cy="50" r="4.5"></circle>
                        <circle cx="77" cy="63.5" r="4.5"></circle>
                        <circle cx="77" cy="36.5" r="4.5"></circle>
                        <circle cx="63.5" cy="50" r="4.5"></circle>
                        <circle cx="50" cy="50" r="4.5"></circle>
                        <circle cx="36.5" cy="50" r="4.5"></circle>
                        <circle cx="23" cy="50" r="4.5"></circle>
                        <circle cx="9.5" cy="50" r="4.5"></circle>
                        <circle cx="63.5" cy="77" r="4.5"></circle>
                        <circle cx="63.5" cy="23" r="4.5"></circle>
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Service Items List */}
          <div className="as-services-1-wrap">
            {services.map((item, idx) => (
              <div key={idx} className="as-services-1-item">
                {/* Tags List */}
                <ul className="wa-ul item-tags">
                  {item.tags.map((tag, tIdx) => (
                    <li key={tIdx} className="as-p-1">
                      {tag}
                    </li>
                  ))}
                </ul>

                <img
                  decoding="async"
                  className="star-icon"
                  src="/assets/avista/images/star-icon.webp"
                  alt="Decorative Star"
                />

                {/* 3D Service Logo */}
                <div className="icon-elm">
                  <img decoding="async" src={item.logo} alt={item.title} />
                </div>

                <img
                  decoding="async"
                  className="star-icon"
                  src="/assets/avista/images/star-icon.webp"
                  alt="Decorative Star"
                />

                {/* Right Interactive Title & Card Preview */}
                <div className="right-content wa-fix">
                  <div className="right-content-bg-img wa-fix wa-img-cover">
                    <img decoding="async" src={item.cardImg} alt={item.title} />
                  </div>

                  <div className="title-wrap">
                    <h4 className="as-h-1 title">
                      <a href="#contact">{item.title}</a>
                    </h4>
                    <h4 className="as-h-1 title">
                      <a href="#contact">
                        <img decoding="async" src="/assets/avista/images/right-up.webp" alt="Arrow Up Right" />
                        {item.title}
                      </a>
                    </h4>
                  </div>

                  <p className="as-p-1 number">{item.num}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
