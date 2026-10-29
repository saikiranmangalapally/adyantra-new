import React from "react";
import KPHeader from "@/components/kanakkupillai/KPHeader";
import KPHero from "@/components/kanakkupillai/KPHero";
import KPServicesCatalogue from "@/components/kanakkupillai/KPServicesCatalogue";
import KPAboutSection from "@/components/kanakkupillai/KPAboutSection";
import KPTechnicalPillars from "@/components/kanakkupillai/KPTechnicalPillars";
import KPDomainsWeServe from "@/components/kanakkupillai/KPDomainsWeServe";
import KPTeamExpertise from "@/components/kanakkupillai/KPTeamExpertise";
import KPTestimonials from "@/components/kanakkupillai/KPTestimonials";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import KPContactSection from "@/components/kanakkupillai/KPContactSection";
import KPFooter from "@/components/kanakkupillai/KPFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#12304A] font-sans selection:bg-[#12304A] selection:text-white">
      {/* ── Main Header & Navigation ── */}
      <KPHeader />

      {/* ── Main Content Sections ── */}
      <div className="flex flex-col">
        {/* 1. Hero */}
        <KPHero />

        {/* 2. Services */}
        <KPServicesCatalogue />

        {/* 3. About */}
        <KPAboutSection />

        {/* 4. Features / Technical Pillars */}
        <KPTechnicalPillars />

        {/* 5. Domains We Serve */}
        <KPDomainsWeServe />

        {/* 6. Our Expertise */}
        <KPTeamExpertise />

        {/* 7. Testimonials */}
        <KPTestimonials />

        {/* 8. Frequently Asked Questions */}
        <KPFAQAccordion />

        {/* 9. Connect with our team / Request a Free Growth Audit */}
        <KPContactSection />
      </div>

      {/* ── Footer ── */}
      <KPFooter />
    </div>
  );
}
