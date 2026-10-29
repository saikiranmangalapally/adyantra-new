"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function LotechAbout() {
  return (
    <section className="about-two" id="about" style={{ padding: "80px 0 100px" }}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="about-two__image">
              <img
                src="/assets/images/resources/about-2-1.jpg"
                alt="Adyantra Digital AI Automation & Performance Marketing"
              />
              <div className="about-two__image__two">
                <img
                  src="/assets/images/resources/about-2-2.jpg"
                  alt="Adyantra Enterprise Impact"
                />
              </div>
            </div>
          </div>

          <div className="col-xl-6 d-flex align-items-center">
            <div className="about-two__content">
              <div className="sec-title text-left">
                <h6 className="sec-title__tagline">ABOUT ADYANTRA DIGITAL</h6>
                <h2 className="sec-title__title">
                  Advanced growth engineering &amp; AI systems built for scale.
                </h2>
              </div>
              <h4 className="about-two__content__heading">
                We deliver <span>data-backed results</span> across 50+ enterprise sectors.
              </h4>
              <p className="about-two__content__text">
                Adyantra Digital is a technology-first growth firm. We reject vanity metrics and focus relentlessly on verified sales pipeline, lower customer acquisition costs (CAC), and automated operational leverage that powers sustainable profitability.
              </p>
              <ul className="about-two__content__list">
                <li>
                  <i className="flaticon-check-mark" />
                  Robust and scalable AI infrastructure tailored to your business model
                </li>
                <li>
                  <i className="flaticon-check-mark" />
                  Multi-channel acquisition strategies on Meta, Google, and LinkedIn
                </li>
                <li>
                  <i className="flaticon-check-mark" />
                  End-to-end CRM workflows and automated sales pipelines
                </li>
              </ul>
              <div className="about-two__content__btn">
                <Link href="/about" className="lotech-btn">
                  <span>
                    Discover Our Story
                    <span className="lotech-btn__icon">
                      <i className="flaticon-up-right-arrow" />
                      <i className="flaticon-up-right-arrow" />
                    </span>
                  </span>
                </Link>
                <div className="about-two__content__author">
                  <img
                    src="/assets/images/resources/about-2-author.jpg"
                    alt="Adyantra Leadership"
                  />
                  <div className="about-two__content__author__content">
                    <img src="/assets/images/shapes/sign.png" alt="Signature" />
                    <p className="about-two__content__author__text">Growth Architect</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
