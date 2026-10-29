"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Search,
  BarChart3,
  Code2,
  Bot,
  Rocket,
  Workflow,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function KPServicesCatalogue() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive items count per view: 1 on mobile, 2 on tablet, 3 on desktop (1*3 format)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Authentic Service Cards in Old Style Layout with New Palette
  const serviceCards = [
    {
      id: "seo",
      title: "SEO & Search Visibility",
      href: "/seo",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
      icon: <Search className="w-7 h-7 sm:w-8 sm:h-8 text-current stroke-[2.2]" />,
      desc: "Rank #1 on Google with high-authority technical SEO, audits, and topic clusters.",
      bullets: [
        "Topical Authority Clusters & Semantic Silos",
        "High-Impact Editorial Backlink Acquisition",
        "Technical Crawl Budget & Core Web Vitals Audits",
        "First-Page Google Rankings & Organic Pipeline",
      ],
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      href: "/performance-marketing",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=700&q=80",
      icon: <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-current stroke-[2.2]" />,
      desc: "Scale high-ROAS paid campaigns across Instagram, Facebook, Google, and LinkedIn.",
      bullets: [
        "First-Party Server-Side CAPI Tracking (sGTM)",
        "Direct-Response Video Ad Creative Testing",
        "Deterministic Audience Cohort Segmentation",
        "Continuous Multi-Channel ROAS Scaling",
      ],
    },
    {
      id: "web-dev",
      title: "Web Design & Development",
      href: "/web-design-development",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=80",
      icon: <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-current stroke-[2.2]" />,
      desc: "High-speed Next.js web applications engineered for speed and conversion.",
      bullets: [
        "Sub-Second Next.js & React Engineering",
        "Conversion-Rate-Optimized (CRO) UX Architecture",
        "Dynamic Headless CMS & Blog Architecture",
        "Enterprise Inbound Form & Attribution Tracking",
      ],
    },
    {
      id: "ai-crm",
      title: "WhatsApp + CRM Bots",
      href: "/whatsapp-crm",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
      icon: <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-current stroke-[2.2]" />,
      desc: "Automate 24/7 lead qualification and customer sales with WhatsApp AI bots.",
      bullets: [
        "Official Meta WhatsApp Cloud API Integration",
        "Automated Buyer Lead Scoring & Qualification",
        "Bidirectional HubSpot / Zoho CRM Sync",
        "24/7 Multi-Agent Customer Routing",
      ],
    },
    {
      id: "lead-gen",
      title: "Lead Generation",
      href: "/lead-generation",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
      icon: <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-current stroke-[2.2]" />,
      desc: "Capture, verify, and route high-intent leads automatically with scoring models.",
      bullets: [
        "Instant Automated Lead Verification",
        "Calendar Meeting Booking & Instant Confirmation",
        "Multi-Channel Drip Sequences (SMS, Email, WA)",
        "Zero Lead Leakage Across Marketing Funnels",
      ],
    },
    {
      id: "crm-automation",
      title: "CRM Automation",
      href: "/crm-automation",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80",
      icon: <Workflow className="w-7 h-7 sm:w-8 sm:h-8 text-current stroke-[2.2]" />,
      desc: "Eliminate manual entry and auto-sync records across HubSpot, Zoho, and Salesforce.",
      bullets: [
        "Multi-Stage Deal Stage Automation",
        "Zapier / Make / n8n Enterprise Pipelines",
        "Automated Invoicing & Contract Generation",
        "Live Executive Revenue Reporting Dashboards",
      ],
    },
  ];

  const maxIndex = Math.max(0, serviceCards.length - slidesToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      id="services"
      aria-label="Integrated Services Catalogue"
      className="py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] relative overflow-hidden font-sans border-b border-[#DCE3EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header: Tagline, Headline & 1*3 Navigation Controls (Exact Image Style) ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div>
            {/* Tagline Badge with Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                OUR SERVICES
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Section Heading in Deep Navy #12304A with Golden Yellow Accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#12304A] tracking-tight leading-[1.12] font-sans">
              Integrated Digital Growth &amp; <br />
              <span className="text-[#FFC400]">
                AI Automation Services
              </span>
            </h2>
          </div>

          {/* Right: Sub-heading Description Paragraph + Navigation Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-base sm:text-[17px] text-[#64748B] font-normal leading-relaxed font-sans max-w-sm">
              Engineering full-funnel digital growth, customer acquisition, and 24/7 AI systems for scaling enterprises.
            </p>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handlePrev}
                type="button"
                aria-label="Previous services"
                className="w-12 h-12 rounded-full border border-[#DCE3EB] bg-[#FAFBFC] hover:bg-[#FFC400] text-[#12304A] hover:border-[#FFC400] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.2]" />
              </button>
              <button
                onClick={handleNext}
                type="button"
                aria-label="Next services"
                className="w-12 h-12 rounded-full border border-[#DCE3EB] bg-[#FAFBFC] hover:bg-[#FFC400] text-[#12304A] hover:border-[#FFC400] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.2]" />
              </button>
            </div>
          </div>
        </div>

        {/* ── 1 × 3 Scrolling Carousel Container ── */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out -mx-3"
            style={{
              transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            }}
          >
            {serviceCards.map((card) => (
              <div
                key={card.id}
                className="shrink-0 px-3"
                style={{ width: `${100 / slidesToShow}%` }}
              >
                {/* Service Card in Cloud White #F5F7FA with Light Gray Border #DCE3EB */}
                <div className="bg-[#FFFFFF] rounded-[28px] border border-[#DCE3EB] shadow-[0_4px_20px_rgba(18,48,74,0.04)] hover:shadow-[0_16px_36px_rgba(18,48,74,0.1)] hover:border-[#FFC400] hover:bg-[#FAFBFC] transition-all duration-300 flex flex-col justify-between overflow-hidden group relative p-6 h-full hover:-translate-y-1.5">

                  {/* Card Top: Title & Description in Deep Navy & Slate Gray */}
                  <div className="pb-3">
                    <Link href={card.href}>
                      <h3 className="text-lg sm:text-xl font-medium text-[#12304A] leading-snug group-hover:text-[#12304A] transition-colors font-sans min-h-[52px] flex items-center">
                        {card.title}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-[13px] text-[#64748B] font-normal line-clamp-2 mt-1">
                      {card.desc}
                    </p>
                  </div>

                  {/* Card Middle: Image with Overlapping Circular Icon Badge */}
                  <div className="relative mt-2">
                    <div className="h-48 sm:h-52 rounded-2xl overflow-hidden relative shadow-sm">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    {/* Overlapping Themed Circular Icon Badge in Deep Navy & Golden Yellow */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#12304A] text-[#FFC400] group-hover:bg-[#FFC400] group-hover:text-[#12304A] transition-colors duration-300 flex items-center justify-center -mt-7 sm:-mt-8 ml-4 sm:ml-5 relative z-10 shadow-lg border-2 border-[#FFFFFF]">
                      {card.icon}
                    </div>
                  </div>

                  {/* Card Bottom: Bullet Points + Action Row */}
                  <div className="pt-4 flex-1 flex flex-col justify-between">
                    <ul className="space-y-2 mb-6 font-sans">
                      {card.bullets.map((bullet, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-xs sm:text-[13px] text-[#12304A]/90 font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC400] shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Action Row: Pill Button + Blueprint */}
                    <div className="pt-3 border-t border-[#DCE3EB] flex items-center justify-between">
                      <Link
                        href={card.href}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md group"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <span className="text-[11px] font-medium text-[#64748B] uppercase tracking-widest font-sans">
                        Full Blueprint
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dots Pagination Indicators ── */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentIndex === i
                ? "w-8 bg-[#12304A]"
                : "w-2.5 bg-[#DCE3EB] hover:bg-[#64748B]"
                }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
