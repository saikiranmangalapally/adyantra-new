"use client";

import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ShoppingBag,
  Heart,
  Briefcase,
  ShoppingCart,
  Cpu,
  Stethoscope,
  Building2,
  Landmark,
  UtensilsCrossed,
} from "lucide-react";

export default function KPDomainsWeServe() {
  const allDomains = [
    {
      title: "Education & Academies",
      icon: GraduationCap,
      href: "/performance-marketing",
    },
    {
      title: "Fashion & D2C Apparel",
      icon: ShoppingBag,
      href: "/ecommerce-marketing",
    },
    {
      title: "NGOs & Non-Profits",
      icon: Heart,
      href: "/digital-marketing-growth",
    },
    {
      title: "Enterprises & Businesses",
      icon: Briefcase,
      href: "/ai-architecture-consulting",
    },
    {
      title: "Retail & E-Commerce Brands",
      icon: ShoppingCart,
      href: "/ecommerce-solutions",
    },
    {
      title: "IT & Software / SaaS",
      icon: Cpu,
      href: "/web-software-development",
    },
    {
      title: "Healthcare & Clinics",
      icon: Stethoscope,
      href: "/lead-generation",
    },
    {
      title: "Real Estate & Developers",
      icon: Building2,
      href: "/lead-generation",
    },
    {
      title: "Financial Services & FinTech",
      icon: Landmark,
      href: "/ai-automation",
    },
    {
      title: "Hospitality & Travel",
      icon: UtensilsCrossed,
      href: "/digital-marketing-growth",
    },
  ];

  // Quadruple items to guarantee a seamless, infinite single-line scroll across all screen sizes
  const repeatedDomains = [
    ...allDomains,
    ...allDomains,
    ...allDomains,
    ...allDomains,
  ];

  return (
    <section
      className="w-full py-10 sm:py-12 lg:py-14 bg-[#FFFFFF] border-b border-[#DCE3EB] font-sans relative overflow-hidden"
      id="industries"
      aria-label="Domains We Serve"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            {/* Tagline Badge with Line */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                TARGET DOMAIN EXPERTISE
              </span>
              <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
            </div>

            {/* Section Heading with Navy & Golden Yellow */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium text-[#12304A] tracking-tight leading-[1.12] font-sans">
              Domains <br />
              <span className="text-[#FFC400]">We Serve</span>
            </h2>
          </div>

          {/* Right Subheading Description Paragraph */}
          <div className="max-w-md">
            <p className="text-sm sm:text-base text-[#64748B] font-normal leading-relaxed font-sans">
              Custom digital marketing strategies and AI automation solutions engineered for high-growth business sectors.
            </p>
          </div>
        </div>
      </div>

      {/* Single Line Continuous Horizontal Scrolling Marquee with Refined Button Size */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Soft Fade Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#FFFFFF] via-[#FFFFFF]/80 to-transparent z-20" />

        {/* Single Scrolling Track with slightly decreased button size */}
        <div className="flex overflow-hidden w-full">
          <div className="flex items-center gap-3 sm:gap-3.5 whitespace-nowrap marquee-track hover:[animation-play-state:paused] py-2 cursor-pointer">
            {repeatedDomains.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={`domain-${idx}`}
                  href={item.href}
                  className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#FFFFFF] border border-[#DCE3EB] text-[#12304A] hover:text-[#12304A] hover:border-[#FFC400] hover:bg-[#EAF2F9] shadow-[0_2px_10px_rgba(18,48,74,0.03)] transition-all duration-300 group shrink-0 select-none hover:-translate-y-0.5"
                >
                  <span className="text-xs sm:text-[13.5px] font-medium font-sans tracking-tight">
                    {item.title}
                  </span>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#EAF2F9] border border-[#DCE3EB] text-[#12304A] group-hover:bg-[#FFC400] group-hover:text-[#12304A] flex items-center justify-center shrink-0 transition-all duration-300 shadow-sm">
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.2]" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
