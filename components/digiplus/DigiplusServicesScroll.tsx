"use client";

import React, { useRef } from "react";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  desc: string;
  image: string;
  iconSvg: React.ReactNode;
}

export default function DigiplusServicesScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
    }
  };

  const services: ServiceItem[] = [
    {
      id: "marketing-strategy",
      number: "03",
      title: "Marketing Strategy",
      subtitle: "Full-Funnel Growth Architecture",
      desc: "Cross-channel paid acquisition, attribution modeling, and customer lifetime value optimization.",
      image: "/assets/digiplus/Bg2-550x550.jpg",
      iconSvg: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      ),
    },
    {
      id: "digital-platform",
      number: "04",
      title: "Digital Platform",
      subtitle: "High-Traffic Next.js Platforms",
      desc: "Bespoke full-stack web applications, headless Shopify storefronts, and edge API architectures.",
      image: "/assets/digiplus/project4-550x550.jpg",
      iconSvg: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M4 6h16v10H4z M20 18H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2z"/>
        </svg>
      ),
    },
    {
      id: "digital-marketing",
      number: "02",
      title: "Digital Marketing",
      subtitle: "Performance Media Engine",
      desc: "Meta Advantage+ CAPI, Google Performance Max, and LinkedIn B2B targeting with high ROAS.",
      image: "/assets/digiplus/project2-550x550.jpg",
      iconSvg: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
        </svg>
      ),
    },
    {
      id: "ui-ux-creative",
      number: "01",
      title: "UI / UX Creative design",
      subtitle: "High-Conversion Systems",
      desc: "Conversion-rate optimized landing pages, user experience audits, and category-defining brand identities.",
      image: "/assets/digiplus/Project1-550x550.jpg",
      iconSvg: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.59 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/>
        </svg>
      ),
    },
    {
      id: "enterprise-web",
      number: "05",
      title: "Enterprise Web & App",
      subtitle: "Scalable Cloud Software",
      desc: "Cloud sGTM server-side tracking, microservices, and enterprise-grade Next.js 15 software systems.",
      image: "/assets/digiplus/project3-550x550.jpg",
      iconSvg: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
        </svg>
      ),
    },
    {
      id: "ai-automation",
      number: "06",
      title: "AI Workflows & Agents",
      subtitle: "Autonomous Operations",
      desc: "Custom RAG knowledge copilots, WhatsApp conversational checkout bots, and automated CRM workflows.",
      image: "/assets/digiplus/slider5-550x550.jpg",
      iconSvg: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.38-1 1.72V7h2a3 3 0 0 1 3 3v1h1a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-1H3a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h1v-1a3 3 0 0 1 3-3h2V5.72A2 2 0 0 1 10 4a2 2 0 0 1 2-2z"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="dp-sub-title">SERVICES</span>
            <h2 className="dp-section-title">
              Services We’re Offering <br />
              <span>To Our Customers</span>
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <p className="hidden md:block max-w-sm text-sm text-[#666c77] leading-relaxed">
              There are many variations of passages available to accelerate your digital growth through custom engineering and media.
            </p>
            {/* Scroll Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-black/15 bg-white text-[#111216] flex items-center justify-center hover:bg-[#f5a623] hover:border-[#f5a623] hover:text-[#0e0f14] transition-all shadow-sm"
                aria-label="Previous Services"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                </svg>
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-black/15 bg-white text-[#111216] flex items-center justify-center hover:bg-[#f5a623] hover:border-[#f5a623] hover:text-[#0e0f14] transition-all shadow-sm"
                aria-label="Next Services"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Horizontally Scrolling Service Cards matching Digiplus service-block-style2 */}
        <div
          ref={scrollRef}
          className="dp-horizontal-scroll flex gap-8 overflow-x-auto pb-8 pt-4 scroll-smooth"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="min-w-[340px] sm:min-w-[380px] md:min-w-[400px] flex-shrink-0 group relative rounded-[14px] border border-black/10 bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/4.2] w-full rounded-[10px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>

                {/* Top-Left Circular Cutout Icon Badge with Thick White Border */}
                <div className="absolute -top-3 -left-3 z-20">
                  <div className="w-24 h-24 rounded-full bg-[#1c1d24] border-[10px] border-white flex items-center justify-center text-[#f5a623] shadow-md group-hover:bg-[#f5a623] group-hover:text-[#1c1d24] transition-colors">
                    {item.iconSvg}
                  </div>
                </div>

                {/* Content Box (Bottom Left inside card) */}
                <div className="absolute bottom-6 left-6 right-6 z-10 text-white">
                  <span className="text-sm font-mono text-[#f5a623] font-bold block mb-1">
                    {item.number}
                  </span>
                  <h3 className="text-2xl font-bold font-heading leading-tight group-hover:text-[#f5a623] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
