"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function AvistaHeader() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when offcanvas is open
  useEffect(() => {
    if (isOffcanvasOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOffcanvasOpen]);

  return (
    <>
      <header className={`as-header-1-area tx-header has-inner-page ${scrolled ? "header-sticky" : ""}`}>
        <div className="container as-container-1 text-right">
          <div className="as-header-1-wrap">
            {/* Desktop Navigation */}
            <nav className={`as-main-navigation as-header-1-menu d-none d-lg-block ${isMenuOpen ? "show" : ""}`}>
              <div className="menu-one-page-menu-container">
                <ul id="main-nav" className="nav navbar-nav menu_1_split">
                  <li className="menu-item">
                    <a href="#home">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#services">Services</a>
                  </li>
                  <li className="menu-item">
                    <a href="#about">About</a>
                  </li>
                  <li className="menu-item">
                    <a href="#pillars">Pillars</a>
                  </li>
                  <li className="menu-item">
                    <a href="#operating-model">Model</a>
                  </li>
                  <li className="menu-item">
                    <a href="#ai-automation">AI Automation</a>
                  </li>
                  <li className="menu-item">
                    <a href="#domains">Domains</a>
                  </li>
                  <li className="menu-item">
                    <a href="#process">Process</a>
                  </li>
                  <li className="menu-item">
                    <a href="#reviews">Reviews</a>
                  </li>
                  <li className="menu-item">
                    <a href="#faq">FAQ</a>
                  </li>
                  <li className="menu-item">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </div>
            </nav>

            {/* Menu toggle button */}
            <div
              className={`as-header-1-menu-toggle-btn ${isMenuOpen ? "active" : ""}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              title="Toggle Menu"
            >
              <span></span>
              <span></span>
            </div>

            {/* Action link & offcanvas toggle */}
            <div className="as-header-1-action-link">
              <a
                href="#contact"
                aria-label="Get started"
                className="as-pr-btn-1 wa_btn_split_1 wa_magnetic_btn_1"
              >
                <span className="text">Get started</span>
              </a>

              {/* Hamburger Button for Offcanvas Drawer */}
              <button
                type="button"
                aria-label="Open Navigation Drawer"
                className="sr-offcanvas-btn-1 offcanvas_toggle d-inline-block"
                onClick={() => setIsOffcanvasOpen(true)}
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Top-left Brand Logo Badge with curved shape background */}
        <a href="#home" aria-label="Adyantra" className="as-header-1-logo">
          <img
            src="/assets/avista/images/h1-favicon-shape.webp"
            alt="Favicon Background Shape"
            className="bg-shape"
          />
          <img
            src="/assets/avista/images/fevicon-1.webp"
            alt="Adyantra Logo Icon"
            style={{ width: "38px", height: "auto", position: "relative", zIndex: 3 }}
          />
        </a>
      </header>

      {/* Offcanvas Drawer Overlay */}
      <div
        className={`wa-overly ${isOffcanvasOpen ? "active" : ""}`}
        style={{
          display: isOffcanvasOpen ? "block" : "none",
          opacity: isOffcanvasOpen ? 1 : 0,
          transition: "opacity 0.4s ease",
          zIndex: 9998,
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
        }}
        onClick={() => setIsOffcanvasOpen(false)}
      />

      {/* Offcanvas Drawer Area */}
      <div
        className={`wa-offcanvas-area offcanvas_box_active lenis lenis-smooth ${isOffcanvasOpen ? "active" : ""}`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          width: "100%",
          maxWidth: "460px",
          height: "100%",
          backgroundColor: "#111111",
          color: "#ffffff",
          zIndex: 9999,
          transform: isOffcanvasOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
          overflowY: "auto",
          boxShadow: "-10px 0 30px rgba(0,0,0,0.5)",
          padding: "40px 30px",
        }}
      >
        <div className="wa-offcanvas-wrap">
          {/* Top Row: Logo & Close Button */}
          <div className="wa-offcanvas-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
            <a href="#home" className="tx-logo wa-offcanvas-top-logo" aria-label="Site Logo" onClick={() => setIsOffcanvasOpen(false)}>
              <img
                src="/assets/avista/images/logo-1.webp"
                alt="Adyantra Logo"
                style={{ maxHeight: "42px", width: "auto" }}
              />
            </a>

            <button
              className="wa-offcanvas-close offcanvas_box_close"
              aria-label="Close Navigation"
              onClick={() => setIsOffcanvasOpen(false)}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#ffffff",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mobile-main-navigation mb-50 d-block" style={{ marginBottom: "30px" }}>
            <ul id="m-main-nav" className="nav navbar-nav list-unstyled" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "Home", href: "#home" },
                { name: "Our Services", href: "#services" },
                { name: "About Adyantra", href: "#about" },
                { name: "Technical Pillars", href: "#pillars" },
                { name: "Operating Model", href: "#operating-model" },
                { name: "AI Automation", href: "#ai-automation" },
                { name: "Domains We Serve", href: "#domains" },
                { name: "Our Proven Process", href: "#process" },
                { name: "Team & Expertise", href: "#team" },
                { name: "Client Reviews", href: "#reviews" },
                { name: "Frequently Asked Questions", href: "#faq" },
                { name: "Contact & Audit", href: "#contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={() => setIsOffcanvasOpen(false)}
                    style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff", textDecoration: "none" }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Instagram Gallery Showcase */}
          <div className="wa-offcanvas-gallery" style={{ marginBottom: "40px" }}>
            <h6 className="wa-offcanvas-gallery-title as-h-1" style={{ color: "#ffffff", marginBottom: "20px", fontSize: "16px", textTransform: "uppercase", letterSpacing: "1px" }}>
              Stay Inspired with Instagram
            </h6>

            <div
              className="wa-offcanvas-gallery-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "12px",
              }}
            >
              {[
                "/assets/avista/images/p1-img-1.webp",
                "/assets/avista/images/p1-img-2.webp",
                "/assets/avista/images/p1-img-4.webp",
                "/assets/avista/images/p1-img-3.webp",
              ].map((imgSrc, idx) => (
                <div
                  key={idx}
                  style={{
                    borderRadius: "12px",
                    overflow: "hidden",
                    aspectRatio: "1",
                    position: "relative",
                  }}
                >
                  <img
                    src={imgSrc}
                    alt="Gallery item"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="wa-offcanvas-social">
            <h6 className="wa-offcanvas-social-title as-h-1" style={{ color: "#8E8E93", marginBottom: "16px", fontSize: "14px" }}>
              We&apos;re on social media:
            </h6>

            <div className="wa-offcanvas-social-flex d-flex flex-wrap" style={{ display: "flex", gap: "12px" }}>
              {[
                { icon: "fab fa-linkedin-in", href: "#0" },
                { icon: "fab fa-facebook-f", href: "#0" },
                { icon: "fab fa-x-twitter", href: "#0" },
                { icon: "fab fa-instagram", href: "#0" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  className="wa-offcanvas-social-link"
                  href={social.href}
                  aria-label="Social link"
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    textDecoration: "none",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
