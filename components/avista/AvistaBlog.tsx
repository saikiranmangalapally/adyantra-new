"use client";

import React from "react";

export default function AvistaBlog() {
  const posts = [
    {
      img: "/assets/avista/images/b1-img-1.webp",
      cat: "Brand Design Identity",
      title: "How Great Design Translates into Business Success",
      disc: "Great design is more than just aesthetics—it’s a powerful business tool. In today’s competitive marketplace, design directly influences customer trust and revenue.",
    },
    {
      img: "/assets/avista/images/b1-img-2.webp",
      cat: "Growth & Technology",
      title: "Key Strategies for Accelerating Modern Business Growth",
      disc: "Unlock high-velocity scaling through architectural speed, automated funnels, and data-informed decision frameworks.",
    },
  ];

  return (
    <section className="as-blog-1-area pt-90 pb-105 tx-section">
      <div className="container as-container-1">
        {/* Section Header */}
        <div className="as-blog-1-sec-title mb-40">
          <div className="left">
            <h6 className="as-subtitle-1 tx-subTitle">
              <span className="icon">
                &#123;<i aria-hidden="true" className="fas fa-circle" style={{ color: "#fd3f00", fontSize: "8px", margin: "0 4px" }}></i>&#125;
              </span>{" "}
              Press Release
            </h6>
            <h2 className="tx-title as-sec-title-1 wa_title_spilt_1">
              A Peek at What We&apos;ve Been Working on
            </h2>
          </div>

          <div className="right">
            <p className="as-p-1 sec-disc tx-description">
              At Adyantra Digital Agency, we provide a full range of digital solutions designed to help businesses grow, connect, and succeed.
            </p>

            <div className="btn-wrap">
              <a href="#contact" aria-label="More Blog" className="as-pr-btn-1-v2 tx-button">
                <span className="text">More Blog</span>
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

        {/* Blog Content Wrap */}
        <div className="as-blog-1-wrap">
          {/* Left Spotlight Box */}
          <div className="as-blog-1-left wa-fix wa_magnetic_1_trigger">
            <div className="logo-elm">
              <img
                decoding="async"
                src="/assets/avista/images/logo-1.webp"
                alt="Adyantra Emblem"
              />
            </div>

            <h4 className="as-h-1 title wa_title_spilt_1">
              Best Creative Agency Digital <span>Insights</span>
            </h4>

            {/* Constellation SVG Dotted Artwork */}
            <svg
              className="as-blog-1-left-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="475px"
              height="447px"
            >
              <circle cx="48" cy="247" r="3" fill="#fd3f00" />
              <circle cx="285" cy="151" r="3" fill="#fd3f00" />
              <circle cx="159" cy="297" r="2" fill="#fd3f00" />
              <circle cx="185" cy="113" r="3" fill="#fd3f00" />
              <circle cx="253" cy="385" r="3" fill="#fd3f00" />
              <circle cx="168" cy="216" r="3" fill="#fd3f00" />
              <circle cx="111" cy="331" r="3" fill="#fd3f00" />
              <circle cx="257" cy="91" r="3" fill="#fd3f00" />
              <circle cx="410" cy="304" r="3" fill="#fd3f00" />
              <circle cx="472" cy="172" r="3" fill="#fd3f00" />
            </svg>

            <div className="as-blog-1-left-bg-img">
              <div className="wa_magnetic_1_elm w-100 h-100">
                <img
                  decoding="async"
                  src="/assets/avista/images/b1-illus-1.webp"
                  alt="Creative technology insights visual"
                />
              </div>
            </div>
          </div>

          {/* Right Posts Column */}
          <div className="as-blog-1-right">
            {posts.map((post, idx) => (
              <div key={idx} className="as-blog-1-item wa_magnetic_1_trigger">
                <div className="item-img wa-fix wa-img-cover">
                  <img
                    decoding="async"
                    className="wa_magnetic_1_elm"
                    src={post.img}
                    alt={post.title}
                  />
                </div>

                <div className="content-wrap">
                  <h6 className="as-p-1 categories">
                    <a href="#contact">{post.cat}</a>
                  </h6>

                  <h4 className="as-h-1 title wa_magnetic_btn_1">
                    <a className="wa-line-limit has-line-2" href="#contact">
                      {post.title}
                    </a>
                  </h4>

                  <p className="as-p-1 disc wa-line-limit has-line-3">
                    {post.disc}
                  </p>

                  <div className="btn-wrap">
                    <a href="#contact" aria-label="Read More" className="as-pr-btn-1-v2">
                      <span className="text">Read More</span>
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
