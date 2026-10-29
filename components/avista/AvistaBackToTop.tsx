"use client";

import React, { useState, useEffect } from "react";

export default function AvistaBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`wa-back-to-top wa_backToTop ${visible ? "active" : ""}`}
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        backgroundColor: "#0A0A0A",
        color: "#ffffff",
        display: visible ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 999,
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
        transition: "all 0.3s ease",
        border: "1px solid rgba(255,255,255,0.15)",
      }}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-angle-up" style={{ fontSize: "16px" }}></i>
    </div>
  );
}
