"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconClass: string;
  illustration: string;
  link: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "marketing",
    title: "Performance Marketing & Ads",
    description: "Data-driven Meta, Google, and LinkedIn ad engines engineered for qualified pipeline and maximum ROAS.",
    iconClass: "flaticon-consulting",
    illustration: "/assets/img/service/illustrations/performance-marketing.svg",
    link: "/performance-marketing",
  },
  {
    id: "ai-automation",
    title: "Autonomous AI Workflows",
    description: "Custom AI agent pipelines, multi-LLM integrations, and n8n workflows that eliminate operational overhead.",
    iconClass: "flaticon-inteligence",
    illustration: "/assets/img/service/illustrations/ai-agent-development.svg",
    link: "/ai-automation",
  },
  {
    id: "web-dev",
    title: "Next.js Web & App Software",
    description: "High-performance headless web applications, conversion-optimized landing funnels, and enterprise portals.",
    iconClass: "flaticon-backup",
    illustration: "/assets/img/service/illustrations/web-design-development.svg",
    link: "/web-software-development",
  },
  {
    id: "crm",
    title: "WhatsApp & CRM Pipelines",
    description: "Automated instant lead responses, CRM pipeline sync, and omnichannel follow-up systems that double conversions.",
    iconClass: "flaticon-cyber1",
    illustration: "/assets/img/service/illustrations/whatsapp-crm.svg",
    link: "/whatsapp-crm",
  },
  {
    id: "seo",
    title: "Technical & Programmatic SEO",
    description: "Search domination strategies built on schema architecture, core web vitals speed, and intent-targeted ranking.",
    iconClass: "flaticon-discover",
    illustration: "/assets/img/service/illustrations/seo.svg",
    link: "/seo",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Growth Scaling",
    description: "Conversion rate optimization, automated cart recovery, and retention funnels built to scale DTC gross margins.",
    iconClass: "flaticon-mind",
    illustration: "/assets/img/service/illustrations/ecommerce-marketing.svg",
    link: "/ecommerce-marketing",
  },
  {
    id: "creative",
    title: "Content & Creative Automation",
    description: "AI-assisted ad creatives, high-velocity video production, and conversion copywriting tuned for engagement.",
    iconClass: "flaticon-network",
    illustration: "/assets/img/service/illustrations/ai-content-automation.svg",
    link: "/branding-creative-services",
  },
  {
    id: "consulting",
    title: "AI Architecture & Consulting",
    description: "Enterprise strategic roadmap, data governance, and custom AI implementation consulting for leadership.",
    iconClass: "flaticon-strategry",
    illustration: "/assets/img/service/illustrations/ai-architecture-consulting.svg",
    link: "/ai-architecture-consulting",
  },
];

export default function LotechServices() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    const cardWidth = 320;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), SERVICES.length - 1));
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      checkScroll();
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scrollByAmount = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 320;
    const scrollDelta = direction === "left" ? -cardWidth : cardWidth;
    scrollContainerRef.current.scrollBy({ left: scrollDelta, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 320;
    scrollContainerRef.current.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="service-two" id="services" style={{ padding: "100px 0 110px", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="row align-items-center" style={{ marginBottom: "40px" }}>
          <div className="col-lg-8">
            <div className="sec-title text-left" style={{ paddingBottom: 0 }}>
              <h6 className="sec-title__tagline">OUR SERVICES</h6>
              <h2 className="sec-title__title">
                High-Impact Digital Marketing <br />&amp; Autonomous AI Solutions.
              </h2>
            </div>
          </div>
          <div className="col-lg-4 text-right">
            <div style={{ display: "inline-flex", gap: "10px", alignItems: "center" }}>
              <button
                type="button"
                onClick={() => scrollByAmount("left")}
                disabled={!canScrollLeft}
                aria-label="Previous service"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid #ECECEC",
                  backgroundColor: canScrollLeft ? "#6C3BFF" : "#F8F7FC",
                  color: canScrollLeft ? "#FFFFFF" : "#9994A5",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: canScrollLeft ? "pointer" : "default",
                  transition: "all 0.3s ease",
                  fontSize: "16px",
                }}
              >
                &larr;
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount("right")}
                disabled={!canScrollRight}
                aria-label="Next service"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  border: "1px solid #ECECEC",
                  backgroundColor: canScrollRight ? "#6C3BFF" : "#F8F7FC",
                  color: canScrollRight ? "#FFFFFF" : "#9994A5",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: canScrollRight ? "pointer" : "default",
                  transition: "all 0.3s ease",
                  fontSize: "16px",
                }}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "20px",
          }}
          className="hide-scrollbar"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              style={{
                flex: "0 0 310px",
                maxWidth: "310px",
                scrollSnapAlign: "start",
              }}
            >
              <div className="service-two__item" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="service-two__item__hover">
                  <span className="service-two__item__hover__item" />
                  <span className="service-two__item__hover__item" />
                  <span className="service-two__item__hover__item" />
                  <span className="service-two__item__hover__item" />
                </div>

                {/* Original Preserved Vector / Illustration */}
                <div style={{ height: "100px", marginBottom: "20px", display: "flex", alignItems: "center" }}>
                  <img
                    src={service.illustration}
                    alt={service.title}
                    style={{ maxHeight: "85px", width: "auto", objectFit: "contain" }}
                  />
                </div>

                <h3 className="service-two__item__title">
                  <Link href={service.link}>{service.title}</Link>
                </h3>
                <p className="service-two__item__text" style={{ flexGrow: 1 }}>
                  {service.description}
                </p>

                <div className="service-two__item__icon">
                  <i className={service.iconClass} />
                </div>

                <Link href={service.link} className="service-two__item__btn">
                  <span className="service-two__item__btn__text">Explore Service</span>
                  <span className="service-two__item__btn__icon">
                    <i className="flaticon-long-arrow-right" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
          {SERVICES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: activeIndex === idx ? "28px" : "10px",
                height: "10px",
                borderRadius: "5px",
                backgroundColor: activeIndex === idx ? "#6C3BFF" : "#EAE7F2",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
