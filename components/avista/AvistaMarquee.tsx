"use client";

import React from "react";

export default function AvistaMarquee() {
  const items = [
    "Apps Design",
    "SEO",
    "Digital Marketing",
    "Branding",
    "Web Design",
    "Website Marketing",
    "Apps Design",
    "SEO",
    "Digital Marketing",
    "Branding",
    "Web Design",
    "Website Marketing",
  ];

  return (
    <section className="as-marquee-text-1-area wa-fix">
      {/* Top Track - Scrolling Left */}
      <div className="as-marquee-text-1-wrap-1">
        <div className="wa_marquee_left_nopause d-inline-block">
          <div className="as-marquee-text-1-content">
            {items.concat(items).map((text, idx) => (
              <React.Fragment key={idx}>
                <h6 className="as-h-1 text-elm">{text}</h6>
                <img
                  decoding="async"
                  src="/assets/avista/images/star.webp"
                  alt="star"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Track - Scrolling Right */}
      <div className="as-marquee-text-1-wrap-2">
        <div className="wa_marquee_right_nopause d-inline-block">
          <div className="as-marquee-text-1-content">
            {items.concat(items).map((text, idx) => (
              <React.Fragment key={`rev-${idx}`}>
                <h6 className="as-h-1 text-elm">{text}</h6>
                <img
                  decoding="async"
                  src="/assets/avista/images/star.webp"
                  alt="star"
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
