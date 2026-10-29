"use client";

import React from "react";

export default function AvistaCta1() {
  const services = [
    "Web Design",
    "Logo Design",
    "Web Development",
    "App Design",
    "Digital Marketing",
  ];

  return (
    <section className="as-cta-1-area tx-section">
      {/* Top Experience Metric Banner */}
      <div className="container as-container-1">
        <div className="as-cta-1-experi">
          <p className="as-cta-1-experi-title as-h-1">
            <span className="number">
              <span className="odometer">15</span>+{" "}
            </span>
            Years of experiences of these industries!
          </p>

          <div className="as-cta-1-experi-services">
            {services.map((s, idx) => (
              <a key={idx} href="#services" className="link-elm as-h-1">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Main Call to Action Box */}
      <div className="as-cta-1-bg wa-fix">
        <div className="container as-container-1">
          <div className="as-cta-1-wrap wa-p-relative cta1_trigger">
            {/* Social Links Bar */}
            <div className="as-cta-1-social">
              {[
                { name: "Twitter", href: "#0" },
                { name: "Instagram", href: "#0" },
                { name: "Dribble", href: "#0" },
                { name: "LinkedIn", href: "#0" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="link-elm as-p-1 wa_magnetic_btn_1"
                >
                  {item.name} <i aria-hidden="true" className="fas fa-long-arrow-right"></i>
                </a>
              ))}
            </div>

            {/* Central Typography & Action Buttons */}
            <div className="as-cta-1-content">
              <h3 className="as-h-1 title-1">Let&apos;s Work</h3>
              <h2 className="as-h-1 title-2">Together!</h2>

              <div className="btn-wrap">
                <a
                  href="#contact"
                  className="as-pr-btn-1 wa_btn_split_1 wa_magnetic_btn_1"
                >
                  <span className="text">Get started today</span>
                  <span className="icon">
                    <span className="icon-fix wa-fix">
                      <i aria-hidden="true" className="flaticon flaticon-dot-arrow-1"></i>
                      <i aria-hidden="true" className="flaticon flaticon-next"></i>
                    </span>
                  </span>
                </a>

                <a
                  href="#contact"
                  className="as-pr-btn-1 wa_btn_split_1 wa_magnetic_btn_1"
                  style={{ background: "transparent", border: "1px solid rgba(255,255,255,0.25)" }}
                >
                  <span className="text">Book an appointment</span>
                  <i aria-hidden="true" className="fas fa-long-arrow-right" style={{ marginLeft: "10px" }}></i>
                </a>
              </div>

              {/* Smooth Scroll Go Down Button */}
              <div className="text-center" style={{ marginTop: "30px" }}>
                <a href="#testimonial" className="as-cta-1-scroll-btn">
                  <div className="icon-elm"></div>
                  <p className="as-p-1 text-elm">Go Down</p>
                </a>
              </div>
            </div>

            {/* Floating Graphic Assets */}
            <div className="as-cta-1-img-1 wa-fix wa-img-cover">
              <img
                decoding="async"
                src="/assets/avista/images/cta1-img-1.webp"
                alt="Creative 3D graphic asset 1"
              />
            </div>

            <div className="as-cta-1-img-2 wa-fix wa-img-cover">
              <img
                decoding="async"
                src="/assets/avista/images/cta1-img-2.webp"
                alt="Creative 3D graphic asset 2"
              />
            </div>

            <div className="as-cta-1-hand-1 wa-fix">
              <img
                decoding="async"
                src="/assets/avista/images/cta1-hand-1.webp"
                alt="3D collaboration hand left"
              />
            </div>

            <div className="as-cta-1-hand-2 wa-fix">
              <img
                decoding="async"
                src="/assets/avista/images/cta1-hand-2.webp"
                alt="3D collaboration hand right"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
