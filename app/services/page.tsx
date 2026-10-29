"use client";

import React from "react";
import UnifiedPageHero from "@/components/hero/UnifiedPageHero";
import KPServicesCatalogue from "@/components/kanakkupillai/KPServicesCatalogue";
import KPAboutSection from "@/components/kanakkupillai/KPAboutSection";
import KPTechnicalPillars from "@/components/kanakkupillai/KPTechnicalPillars";
import KPDomainsWeServe from "@/components/kanakkupillai/KPDomainsWeServe";
import KPTeamExpertise from "@/components/kanakkupillai/KPTeamExpertise";
import KPTestimonials from "@/components/kanakkupillai/KPTestimonials";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import KPContactSection from "@/components/kanakkupillai/KPContactSection";

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ═══════════════════ HERO (MATCHING IMAGE 2/3, EXCLUDING HOMEPAGE HERO) ═══════════════════ */}
      <UnifiedPageHero
        badge="ADYANTRA CORE SOLUTIONS • FULL-FUNNEL ARCHITECTURE"
        ratingText="4.9 / 5 RATING"
        headlinePrefix="Scale Commercial Velocity with"
        highlightedText="Performance Marketing & AI Automations"
        headlineSuffix="Engineered for Measurable ROAS."
        description="Explore our full portfolio of high-precision digital acquisition systems, server-side data attribution, headless web engineering, and autonomous WhatsApp CRM workflows."
        primaryCtaText="BOOK A STRATEGY CALL"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE ALL SERVICES"
        secondaryCtaHref="#services"
        serviceTitle="Performance Marketing (Meta/Google Ads)"
        stats={[
          { val: "50+", label: "High-Growth Brands Scaled" },
          { val: "99.4%", label: "Execution Accuracy" },
          { val: "< 15s", label: "Lead Response Latency" },
          { val: "24 / 7", label: "AI Agents Active" },
        ]}
      />

      {/* ═══════════════════ HOMEPAGE SECTIONS AS IT IS ═══════════════════ */}
      {/* 1. Services Catalogue (INCLUDING SERVICES SECTION) */}
      <KPServicesCatalogue />

      {/* 2. Flagship About Section */}
      <KPAboutSection />

      {/* 3. Core Technical Pillars */}
      <KPTechnicalPillars />

      {/* 4. Target Domains We Serve */}
      <KPDomainsWeServe />

      {/* 5. Our Team & Expertise Squads */}
      <KPTeamExpertise />

      {/* 6. Client Testimonials */}
      <KPTestimonials />

      {/* 7. Frequently Asked Questions */}
      <KPFAQAccordion />

      {/* 8. Direct Contact & Audit Form */}
      <KPContactSection />
    </main>
  );
}
