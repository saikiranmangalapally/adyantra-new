"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LotechHero() {
  return (
    <section className="hero-banner-two">
      <div
        className="hero-banner-two__shape"
        style={{ backgroundImage: "url(/assets/images/shapes/hero-banner-shape-bg-two.png)" }}
      />
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-lg-7">
            <div className="hero-banner-two__content">
              <h5 className="hero-banner-two__sub-title">
                AI Automation &amp; Digital Growth <span />
              </h5>
              <h1 className="hero-banner-two__title">
                Transform Your <br />
                Digital Growth.
              </h1>
              <p className="hero-banner-two__text">
                Adyantra Digital engineers high-conversion acquisition funnels, autonomous AI agent workflows, and ROI-driven marketing campaigns that scale enterprise revenue.
              </p>
              <div className="hero-banner-two__btn">
                <Link href="/contact" className="lotech-btn">
                  <span>
                    Free Growth &amp; AI Audit
                    <span className="lotech-btn__icon">
                      <i className="flaticon-up-right-arrow" />
                      <i className="flaticon-up-right-arrow" />
                    </span>
                  </span>
                </Link>
                <Link href="/contact" className="video-popup">
                  <i className="flaticon-play1" />
                  Book Strategy Call
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="hero-banner-two__image">
              <div
                className="hero-banner-two__image__bg"
                style={{ backgroundImage: "url(/assets/images/shapes/banner-two-image-bg.png)" }}
              />
              <img
                src="/assets/images/resources/banner-two-image.png"
                alt="Adyantra Digital AI Automation & Performance Marketing"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
