"use client";

import React from "react";

const STATS = [
  { value: "150+", label: "Campaigns Scaled Successfully" },
  { value: "50+", label: "Active Enterprise Clients" },
  { value: "$12M+", label: "Tracked Sales Pipeline Value" },
  { value: "99.4%", label: "Automation Reliability & Uptime" },
];

export default function LotechFunfact() {
  return (
    <section className="funfact-one" style={{ padding: "80px 0 100px", backgroundColor: "#F8F7FC" }}>
      <div className="container">
        <div className="row gutter-y-30 gutter-x-24">
          {STATS.map((stat, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div className="funfact-one__item count-box">
                <h3 className="funfact-one__item__count" style={{ color: "#17151F", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                  {stat.value}
                </h3>
                <div className="funfact-one__item__divider" style={{ backgroundColor: "#D9CCFF" }} />
                <p className="funfact-one__item__text" style={{ color: "#6F6B7A", fontSize: "16px", fontWeight: 600 }}>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
