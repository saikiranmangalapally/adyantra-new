"use client";

import React from "react";
import Link from "next/link";

export default function AdvantaWorkShowcase() {
  const projects = [
    {
      id: "healthcare-ai",
      category: "AI Automation & Healthcare",
      title: "Multi-Speciality Clinic AI Triage & Lead Funnel",
      metrics: "4.6x Patient Inquiries • <5s WhatsApp SLA",
      image: "/assets/digiplus/project5-672x448.jpg",
      link: "/digital-marketing-growth#healthcare",
    },
    {
      id: "ecommerce-scale",
      category: "E-Commerce & Performance Ads",
      title: "D2C Fashion & Apparel 5.4x ROAS Scaling",
      metrics: "5.4x Verified ROAS • Server-side Meta CAPI",
      image: "/assets/digiplus/Bg2-672x448.jpg",
      link: "/digital-marketing-growth#ecommerce",
    },
    {
      id: "nextjs-saas",
      category: "Web Engineering & SaaS",
      title: "High-Speed Next.js Architecture for Enterprise",
      metrics: "100/100 Core Web Vitals • Automated CRM Sync",
      image: "/assets/digiplus/project4-672x448.jpg",
      link: "/web-software-development",
    },
  ];

  return (
    <section id="work-showcase" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header matching Digiplus Layout 4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 lg:mb-20">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#f5a623] mb-4">
              <span>WORK SHOWCASE</span>
              <span className="w-10 h-[2px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black text-[#111216] font-heading leading-tight tracking-tight">
              Check Your Latest <br />
              Work Showcase
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm lg:ml-auto">
              Real results delivered for scaling brands. Explore our recent case studies across high-intent performance marketing and AI workflow deployments.
            </p>
          </div>
        </div>

        {/* 3 Project Showcase Cards matching Digiplus projects-current-theme2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-[28px] overflow-hidden border border-gray-100 shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Image Container with Hover Zoom & Circle Arrow Overlay */}
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Circular Arrow Button Overlay matching Digiplus btn-circle-arrow */}
                <div className="absolute bottom-4 right-4 z-10">
                  <Link
                    href={project.link}
                    className="w-12 h-12 rounded-full bg-[#111216] group-hover:bg-[#f5a623] text-white group-hover:text-[#111216] flex items-center justify-center font-black text-lg transition-all duration-300 shadow-xl group-hover:scale-110 cursor-pointer"
                    aria-label={`View case study: ${project.title}`}
                  >
                    ↗
                  </Link>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Pill */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[#f5a623]/15 text-[#111216] font-bold text-[11px] uppercase tracking-wider mb-3">
                    {project.category}
                  </span>

                  {/* Project Title */}
                  <h3 className="text-xl font-black font-heading text-[#111216] leading-snug group-hover:text-[#f5a623] transition-colors mb-3">
                    <Link href={project.link}>{project.title}</Link>
                  </h3>
                </div>

                {/* Metrics Highlight */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{project.metrics}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
