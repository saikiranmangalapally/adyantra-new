import React from "react";
import UnifiedPageHero from "@/components/hero/UnifiedPageHero";
import ServiceSubServicesGrid from "@/components/sections/ServiceSubServicesGrid";
import ServiceCoreCompetencies from "@/components/sections/ServiceCoreCompetencies";
import ServiceAboutPillars from "@/components/sections/ServiceAboutPillars";
import KPDomainsWeServe from "@/components/kanakkupillai/KPDomainsWeServe";
import ServiceProcessMethodology from "@/components/sections/ServiceProcessMethodology";
import KPTeamExpertise from "@/components/kanakkupillai/KPTeamExpertise";
import KPTestimonials from "@/components/kanakkupillai/KPTestimonials";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import KPContactSection from "@/components/kanakkupillai/KPContactSection";

export interface ServicePageData {
  hero: {
    badge: string;
    title: React.ReactNode;
    description: string;
  };
  about: {
    title: string;
    paragraphs: string[];
    pillars: string[];
  };
  intro?: {
    tagline: string;
    headline: string;
    description: string;
  };
  subServices: {
    title: string;
    desc: string;
    href: string;
    img: string;
  }[];
  processSteps: {
    title: string;
    description: string;
    timeline: string;
  }[];
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  faqData: {
    q: string;
    a: string;
  }[];
  stats?: {
    val: string;
    label: string;
  }[];
}

interface ServicePageTemplateProps {
  pageTitle?: string;
  data: ServicePageData;
}

function getServiceStats(badge: string, customStats?: { val: string; label: string }[]) {
  if (customStats && customStats.length >= 4) return customStats;

  const b = badge.toLowerCase();
  if (b.includes("ai") || b.includes("system") || b.includes("agent") || b.includes("workflow") || b.includes("crm")) {
    return [
      { val: "99.4%", label: "Automation Execution Rate" },
      { val: "< 15s", label: "Lead Response Latency" },
      { val: "10x", label: "Operational Throughput" },
      { val: "24/7", label: "Autonomous Uptime" },
    ];
  }
  if (b.includes("architecture") || b.includes("stack") || b.includes("integration") || b.includes("web") || b.includes("dev")) {
    return [
      { val: "100%", label: "In-House Senior Engineering" },
      { val: "< 1.2s", label: "First Contentful Paint" },
      { val: "99.9%", label: "Infrastructure Reliability" },
      { val: "Zero", label: "Third-Party Lock-in" },
    ];
  }
  return [
    { val: "4.8x", label: "Average Client ROAS" },
    { val: "3.2x", label: "Pipeline Velocity Gain" },
    { val: "100%", label: "Verified Data Attribution" },
    { val: "50+", label: "High-Growth Brands Scaled" },
  ];
}

export default function ServicePageTemplate({
  pageTitle,
  data,
}: ServicePageTemplateProps) {
  const displayTitle = pageTitle || data.hero.badge || "Performance Systems";
  const stats = getServiceStats(data.hero.badge, data.stats);

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ═══════════════════ HERO (MATCHING IMAGE 2/3, EXCLUDING HOMEPAGE HERO) ═══════════════════ */}
      <UnifiedPageHero
        badge={data.hero.badge}
        ratingText="4.9 / 5 RATING"
        headlinePrefix="Accelerate Your Brand with"
        highlightedText={displayTitle}
        headlineSuffix="& Performance Systems."
        description={data.hero.description}
        primaryCtaText="BOOK A STRATEGY CALL"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE SERVICES"
        secondaryCtaHref="#capabilities"
        serviceTitle={data.hero.badge || displayTitle}
        stats={stats}
      />

      {/* ═══════════════════ SERVICE-SPECIFIC SECTIONS REDESIGNED IN HOMEPAGE PALETTE & TYPOGRAPHY ═══════════════════ */}
      
      {/* 1. Specialized Capabilities & Sub-Services Grid (Enlarged Illustrations & Homepage Cards) */}
      <ServiceSubServicesGrid
        intro={data.intro}
        subServices={data.subServices}
        fallbackDescription={data.hero.description}
      />

      {/* 2. Core Competencies & Deliverables (Core 01-04 in Technical Pillars Style) */}
      <ServiceCoreCompetencies
        items={data.whyChooseUs}
        subtitle={data.about?.paragraphs?.[0]}
      />

      {/* 3. Service-Specific About & Technical Pillars (Deep Navy Container & Man Visual) */}
      <ServiceAboutPillars
        about={data.about}
      />

      {/* 4. Target Domains We Serve (Enlarged Marquee Icons) */}
      <KPDomainsWeServe />

      {/* 5. 4-Step Process Methodology (Enlarged Step Numbers & Timeline Badges) */}
      <ServiceProcessMethodology
        steps={data.processSteps}
      />

      {/* 6. Our Team & Expertise Squads (Enlarged Squad Icons) */}
      <KPTeamExpertise />

      {/* 7. Client Testimonials */}
      <KPTestimonials />

      {/* 8. Service-Specific Frequently Asked Questions (Custom FAQs in Homepage Accordion) */}
      <KPFAQAccordion customFaqs={data.faqData} />

      {/* 9. Direct Contact & Audit Form (Enlarged Communication Icons) */}
      <KPContactSection />
    </main>
  );
}
