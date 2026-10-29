"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LotechWhyChoose() {
  return (
    <section className="why-choose-two" id="why-choose">
      <div
        className="why-choose-two__shape"
        style={{ backgroundImage: "url(/assets/images/shapes/why-choose-2-shape.png)" }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <div className="why-choose-two__content">
              <div className="sec-title text-left" style={{ paddingBottom: "10px" }}>
                <h6 className="sec-title__tagline" style={{ color: "#C8F31D" }}>
                  WHY CHOOSE US
                </h6>
                <h2 className="sec-title__title" style={{ color: "#FFFFFF" }}>
                  We leverage cutting-edge AI &amp; performance science.
                </h2>
              </div>
              <p className="why-choose-two__content__text">
                Our squad brings cross-disciplinary precision—from performance media buying and algorithmic bidding on Meta &amp; Google to autonomous LLM pipelines and automated CRM revenue follow-ups.
              </p>
              <div className="row gutter-y-30">
                <div className="col-md-6">
                  <div className="why-choose-two__item">
                    <h3 className="why-choose-two__item__count">98%</h3>
                    <p className="why-choose-two__item__text">Client Retention &amp; Growth</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-choose-two__item">
                    <h3 className="why-choose-two__item__count">3.8x</h3>
                    <p className="why-choose-two__item__text">Average Pipeline Lift</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="why-choose-two__item">
                    <h3 className="why-choose-two__item__count">65%</h3>
                    <p className="why-choose-two__item__text">Ops Overhead Reduced</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <Link href="/contact" className="lotech-btn lotech-btn--lime">
                    <span>
                      Get In Touch
                      <span className="lotech-btn__icon">
                        <i className="flaticon-up-right-arrow" />
                        <i className="flaticon-up-right-arrow" />
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose-two__image" style={{ textAlign: "center", padding: "40px 0" }}>
              <img
                src="/assets/images/resources/why-choose-2-1.jpg"
                alt="Why Choose Adyantra Digital"
                style={{ borderRadius: "20px", maxWidth: "100%", height: "auto", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
