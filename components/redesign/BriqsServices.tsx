"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface ServiceItem {
  id: number;
  tag: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  illustration: string;
  href: string;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 1,
    tag: "ENGINEERING",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Web Software & Next.js App Dev",
    desc: "High-speed headless web applications, custom React interfaces, and landing page funnels engineered for 100/100 Core Web Vitals.",
    illustration: "/assets/img/service/illustrations/service-web-development.svg",
    href: "/web-software-development",
  },
  {
    id: 2,
    tag: "AI WORKFLOWS",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "AI Workflows & WhatsApp Bots",
    desc: "Automate 24/7 lead qualification, customer sales follow-ups, and instant CRM synchronizations with custom WhatsApp AI bots.",
    illustration: "/assets/img/service/illustrations/service-ai-chatbots.svg",
    href: "/digital-marketing-growth#automation",
  },
  {
    id: 3,
    tag: "ATTRIBUTION",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Analytics & GA4 Attribution",
    desc: "Server-side Meta CAPI tracking, full-funnel GA4 attribution pipelines, and live executive Looker Studio dashboards for verified ROAS.",
    illustration: "/assets/img/service/illustrations/service-analytics.svg",
    href: "/digital-marketing-growth#analytics",
  },
  {
    id: 4,
    tag: "ORGANIC GROWTH",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "Search Engine Optimization (SEO)",
    desc: "Rank #1 on Google with high-authority technical SEO, schema architecture, semantic topic clusters, and Core Web Vitals optimization.",
    illustration: "/assets/img/service/illustrations/service-seo.svg",
    href: "/digital-marketing-growth#seo",
  },
  {
    id: 5,
    tag: "PAID MEDIA",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 13v-2z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
    title: "Social Media & Meta Ads",
    desc: "Scale high-ROAS paid campaigns across Instagram, Facebook, and LinkedIn with creative fatigue mitigation and server-side tracking.",
    illustration: "/assets/img/service/illustrations/service-social-meta.svg",
    href: "/digital-marketing-growth#meta-ads",
  },
  {
    id: 6,
    tag: "PERFORMANCE PPC",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: "Google Ads & PPC Campaigns",
    desc: "Capture high-intent buyers with Google Search, Display, and Performance Max campaigns managed with disciplined bid strategies.",
    illustration: "/assets/img/service/illustrations/service-google-ppc.svg",
    href: "/digital-marketing-growth#google-ads",
  },
  {
    id: 7,
    tag: "COMMERCE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
    title: "E-Commerce Architecture & Funnels",
    desc: "High-converting Shopify Plus and headless custom storefronts optimized for higher average order value (AOV) and zero-friction checkout.",
    illustration: "/assets/img/service/illustrations/service-web-development.svg",
    href: "/digital-marketing-growth#ecommerce",
  },
  {
    id: 8,
    tag: "PARTNERSHIP",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
      </svg>
    ),
    title: "Full-Funnel Growth Partnership",
    desc: "Comprehensive outsourced growth office integrating paid media, CRO, automated WhatsApp sales follow-ups, and custom engineering.",
    illustration: "/assets/img/service/illustrations/service-analytics.svg",
    href: "/contact",
  },
];

export default function BriqsServices() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 380;
      const scrollAmount = cardWidth + 24; // Width + gap
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleScrollEvent = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 380;
      const index = Math.round(scrollRef.current.scrollLeft / (cardWidth + 24));
      setActiveIndex(Math.min(Math.max(index, 0), SERVICES_DATA.length - 1));
    }
  };

  return (
    <section className="lotech-services-section" id="services">
      <div className="briqs-shell">
        {/* Section Header */}
        <div className="lotech-services-header">
          <div className="lotech-services-header__left">
            <span className="briqs-kicker-pill">OUR SERVICES</span>
            <h2 className="lotech-services-title">
              Services We Provide to <br />
              <span className="text-[#6C3BFF]">Scale Your Business.</span>
            </h2>
          </div>

          <div className="lotech-services-header__right">
            <p className="lotech-services-subtitle">
              Engineering-backed digital marketing and autonomous AI solutions built to maximize ROAS and automate high-value customer acquisition.
            </p>
            {/* Carousel Arrow Controls */}
            <div className="lotech-carousel-controls">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                aria-label="Previous Services"
                className="lotech-arrow-btn"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                aria-label="Next Services"
                className="lotech-arrow-btn"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Lotech Carousel Track (Matching Reference https://bracketweb.com/lotech-html/services-carousel.html) */}
        <div
          ref={scrollRef}
          onScroll={handleScrollEvent}
          className="lotech-services-track"
        >
          {SERVICES_DATA.map((service) => (
            <div key={service.id} className="lotech-service-card">
              {/* Corner hover accents */}
              <div className="lotech-service-card__hover">
                <span className="lotech-service-hover-corner tl" />
                <span className="lotech-service-hover-corner tr" />
                <span className="lotech-service-hover-corner bl" />
                <span className="lotech-service-hover-corner br" />
              </div>

              {/* Top Meta: Icon and Category Tag */}
              <div className="lotech-service-card__top">
                <div className="lotech-service-icon-box">
                  {service.icon}
                </div>
                <span className="lotech-service-tag">{service.tag}</span>
              </div>

              {/* Title & Description */}
              <h3 className="lotech-service-title">
                <Link href={service.href}>{service.title}</Link>
              </h3>
              <p className="lotech-service-desc">{service.desc}</p>

              {/* Preserved Original Illustration */}
              <div className="lotech-service-illustration-wrap">
                <img
                  src={service.illustration}
                  alt={service.title}
                  className="lotech-service-illustration"
                  loading="lazy"
                />
              </div>

              {/* Lotech Read More Button */}
              <Link href={service.href} className="lotech-service-btn">
                <span className="lotech-service-btn__text">Explore Service</span>
                <span className="lotech-service-btn__icon">
                  <ArrowRight size={14} />
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="lotech-carousel-dots">
          {SERVICES_DATA.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (scrollRef.current) {
                  const cardWidth = scrollRef.current.firstElementChild?.clientWidth || 380;
                  scrollRef.current.scrollTo({
                    left: idx * (cardWidth + 24),
                    behavior: "smooth",
                  });
                }
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`lotech-dot ${idx === activeIndex ? "active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
