"use client";

import React from "react";

export default function AvistaPortfolio() {
  const leftProjects = [
    {
      img: "/assets/avista/images/p1-img-1.webp",
      title: "Nimo Agency Platform",
      disc: "Design and developed a modern, responsive digital experience",
      tags: ["Web Design", "UI/UX Design"],
    },
    {
      img: "/assets/avista/images/p1-img-2.webp",
      title: "Deloite Enterprise System",
      disc: "Engineered scalable cloud performance and seamless user conversion flows",
      tags: ["Web Design", "UI/UX Design"],
    },
  ];

  const rightProjects = [
    {
      img: "/assets/avista/images/p1-img-3.webp",
      title: "Apex Brand Identity",
      disc: "Visual branding, design system, and custom typography",
      tags: ["Brand Design", "Visual Identity"],
    },
    {
      img: "/assets/avista/images/p1-img-4.webp",
      title: "Topaap iOS Mobile App",
      disc: "Native mobile application architecture and intuitive interface design",
      tags: ["App Design", "Mobile Development"],
    },
  ];

  return (
    <section className="as-portfolio-1-area pb-160 portfolio1_pin_elm_trigger tx-section" id="portfolio">
      <div className="container as-container-1">
        {/* Section Header */}
        <div className="as-portfolio-1-sec-title text-center mb-40 portfolio1_pin_elm">
          <h6 className="as-subtitle-1 tx-subTitle">
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-circle" style={{ color: "#fd3f00", fontSize: "8px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Portfolio
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1">
            Crafting Success Through <br /> Design &amp; Strategy
          </h2>
          <h3 className="as-h-1 big-title wa_title_spilt_1">
            Some of Works
          </h3>
        </div>

        {/* Staggered Portfolio Items Showcase */}
        <div className="as-portfolio-1-wrap wa-p-relative">
          {/* Left Column */}
          <div className="left">
            {leftProjects.map((p, idx) => (
              <div key={idx} className="as-portfolio-1-item has-v2 wa_magnetic_1_trigger">
                <div className="item-img wa-fix wa-img-cover wa-p-relative">
                  <img
                    decoding="async"
                    className="wa_magnetic_1_elm"
                    src={p.img}
                    alt={p.title}
                  />

                  <div className="item-tags">
                    {p.tags.map((t, tIdx) => (
                      <span key={tIdx} className="link-elm as-p-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="content-wrap">
                  <h4 className="as-h-1 title wa_magnetic_btn_1">
                    <a href="#contact">{p.title}</a>
                  </h4>
                  <p className="as-p-1 disc">{p.disc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="right">
            {rightProjects.map((p, idx) => (
              <div key={idx} className="as-portfolio-1-item has-v2 wa_magnetic_1_trigger">
                <div className="item-img wa-fix wa-img-cover wa-p-relative">
                  <img
                    decoding="async"
                    className="wa_magnetic_1_elm"
                    src={p.img}
                    alt={p.title}
                  />

                  <div className="item-tags">
                    {p.tags.map((t, tIdx) => (
                      <span key={tIdx} className="link-elm as-p-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="content-wrap">
                  <h4 className="as-h-1 title wa_magnetic_btn_1">
                    <a href="#contact">{p.title}</a>
                  </h4>
                  <p className="as-p-1 disc">{p.disc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Counter & CTA banner */}
        <div className="as-portfolio-1-content">
          <div className="as-portfolio-1-counter wa-p-relative">
            <h5 className="number">
              <span className="odometer">40</span>
            </h5>
            <p className="as-p-1 title">
              <span>+</span> Projects
            </p>
          </div>

          <p className="as-p-1 as-portfolio-1-content-disc tx-description">
            Explore projects that blend creativity and strategy to deliver lasting impact.
          </p>

          <div className="btn-wrap">
            <a href="#services" aria-label="More Services" className="as-pr-btn-1-v2 tx-button">
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
    </section>
  );
}
