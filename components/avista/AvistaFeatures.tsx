"use client";

import React from "react";

export default function AvistaFeatures() {
  return (
    <section className="as-features-1-area tx-section">
      <div className="container as-container-1">
        {/* Section Title */}
        <div className="as-features-1-sec-title text-center mb-40">
          <h6 className="as-subtitle-1 tx-subTitle">
            <span className="icon">
              &#123;<i aria-hidden="true" className="fas fa-star" style={{ color: "#fd3f00", fontSize: "10px", margin: "0 4px" }}></i>&#125;
            </span>{" "}
            Features
          </h6>
          <h2 className="tx-title as-sec-title-1 wa_title_spilt_1">
            Why should You choose Adyantra Digital agency?
          </h2>
          <p className="as-p-1 sec-disc tx-description">
            We blend design, strategy, and technology to craft solutions that truly stand out.
          </p>
        </div>

        {/* 3 Features Cards */}
        <div className="as-features-1-wrap">
          {/* Card 1: 24/7 Creativity */}
          <div
            className="as-features-1-creative wa-bg-default"
            style={{ backgroundImage: "url('/assets/avista/images/f1-img-1.webp')" }}
          >
            <h4 className="as-h-1 title">24/7 Creativity</h4>
            <p className="as-p-1 disc">Our team never runs out of fresh ideas.</p>

            <div className="img-elm">
              <img
                decoding="async"
                className="wow backInUp2"
                src="/assets/avista/images/f1-img-2.webp"
                alt="24/7 Service Emblem"
              />
            </div>
          </div>

          {/* Card 2: Quality & Satisfied Clients Rating */}
          <div className="as-features-1-wrap-inner">
            <div className="as-features-1-quality wa-p-relative">
              <h4 className="as-h-1 title">Best Quality Product Guaranteed</h4>
              <p className="as-p-1 disc">
                Customized strategies designed around each client&apos;s unique needs.
              </p>

              <div className="img-elm">
                <img
                  decoding="async"
                  className="wow fadeInUp2"
                  src="/assets/avista/images/f1-img-3.webp"
                  alt="Quality Guarantee Clipboard"
                />
              </div>
            </div>

            <div className="as-features-1-rating">
              <div className="rating-icon">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i key={s} className="fa-solid fa-star" style={{ color: "#fd3f00", marginRight: "3px" }}></i>
                ))}
              </div>
              <div className="rating-counter">
                <h5 className="rating-number as-h-1">
                  <span className="odometer">1500</span>+
                </h5>
                <h5 className="as-h-1 rating-disc">Satisfied Clients</h5>
              </div>

              <div className="rating-author">
                <div className="rating-author-img">
                  {[
                    "/assets/avista/images/author-1.webp",
                    "/assets/avista/images/author-2.webp",
                    "/assets/avista/images/author-3.webp",
                    "/assets/avista/images/author-4.webp",
                  ].map((src, idx) => (
                    <div key={idx} className="img-elm wa-fix wa-img-cover">
                      <img decoding="async" src={src} alt="Client avatar" />
                    </div>
                  ))}
                </div>

                <p className="as-p-1 rating-author-disc">
                  Join <b>12,135+</b> other loving customers
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: Result-Oriented Delivery */}
          <div
            className="as-features-1-result wa-bg-default"
            style={{ backgroundImage: "url('/assets/avista/images/f1-img-4.webp')" }}
          >
            <h4 className="as-h-1 title">Result-Oriented Delivery</h4>
            <p className="as-p-1 disc">
              Focused on measurable outcomes and long-term success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
