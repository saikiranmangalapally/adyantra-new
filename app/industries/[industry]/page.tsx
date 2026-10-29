import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Stethoscope,
  GraduationCap,
  Building2,
  Store,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
} from "lucide-react";
import UnifiedPageHero from "@/components/hero/UnifiedPageHero";
import KPDomainsWeServe from "@/components/kanakkupillai/KPDomainsWeServe";
import KPTeamExpertise from "@/components/kanakkupillai/KPTeamExpertise";
import KPTestimonials from "@/components/kanakkupillai/KPTestimonials";
import KPFAQAccordion from "@/components/kanakkupillai/KPFAQAccordion";
import KPContactSection from "@/components/kanakkupillai/KPContactSection";

const industryData: Record<string, any> = {
  healthcare: {
    title: "Healthcare & Life Sciences",
    subtitle: "HIPAA-compliant, high-intent patient acquisition and AI healthcare workflows",
    icon: Stethoscope,
    badge: "HEALTHCARE & CLINIC VERTICAL",
    stats: [
      { label: "Patient Conversions", val: "+320%" },
      { label: "Cost Per Acquisition", val: "-45%" },
      { label: "Search Visibility", val: "#1 Rank" },
      { label: "HIPAA & Compliance", val: "100%" },
    ],
    challenges: [
      "Strict HIPAA & medical ad policy restrictions on Meta and Google",
      "High cost-per-click for competitive healthcare and specialist keywords",
      "Building patient trust and retaining repeat care visits online",
      "Managing multi-location clinic SEO and Google Business Profiles",
    ],
    solutions: [
      "AI-driven high-intent local medical search optimization (Healthcare SEO)",
      "HIPAA-compliant landing page funnels with direct appointment booking",
      "Targeted Google Search & Remarketing campaigns for specialized treatments",
      "Automated WhatsApp & SMS appointment reminders to reduce no-shows",
    ],
    caseStudy: {
      client: "Apex Health Clinics Network",
      results: "Generated 4,500+ booked appointments in 90 days with a 38% lower cost per lead.",
    },
  },
  education: {
    title: "EdTech & Academies",
    subtitle: "Scale student enrollments with precision funnel marketing & AI counseling bots",
    icon: GraduationCap,
    badge: "EDTECH & UNIVERSITY VERTICAL",
    stats: [
      { label: "Qualified Leads", val: "+450%" },
      { label: "Admission Conversion", val: "3.4x" },
      { label: "Cost Per Enrolment", val: "-35%" },
      { label: "WhatsApp Engagement", val: "88%" },
    ],
    challenges: [
      "High student drop-off between inquiry submission and counseling calls",
      "Generic lead capture forms generating cold, unqualified parent leads",
      "Long enrollment decision cycles requiring continuous nurture touchpoints",
      "Seasonal admission surges overwhelming manual sales counselors",
    ],
    solutions: [
      "Instant WhatsApp counseling bot qualifying student eligibility 24/7",
      "Multi-variant direct-response Meta campaigns targeting parent cohorts",
      "Programmatic SEO topical clusters for curriculum and course keywords",
      "Automated calendar booking syncing directly into your admission CRM",
    ],
    caseStudy: {
      client: "Global Scholars Education Group",
      results: "Enrolled 1,200+ students in a single intake window while cutting lead response latency to under 15 seconds.",
    },
  },
  "real-estate": {
    title: "Real Estate & Developers",
    subtitle: "High-value property buyer acquisition, virtual tours, and automated CRM pipelines",
    icon: Building2,
    badge: "REAL ESTATE & HNI PROPERTY VERTICAL",
    stats: [
      { label: "Site Visit Inquiries", val: "+280%" },
      { label: "Verified Buyer Intent", val: "92%" },
      { label: "Gross Transaction Value", val: "₹180 Cr" },
      { label: "Lead Response Time", val: "< 15s" },
    ],
    challenges: [
      "High volume of junk portal leads wasting real estate broker capacity",
      "Delayed broker follow-ups causing prospective buyers to look elsewhere",
      "Complex multi-tier project portfolios confusing online visitors",
      "Difficulty attributing high-value unit sales back to specific ad campaigns",
    ],
    solutions: [
      "Hyper-targeted HNI audience targeting on Google Search & Meta CAPI",
      "Interactive 3D virtual floorplan and project walkthrough landing experiences",
      "Automated phone & WhatsApp verification filtering real property buyers",
      "Live Looker Studio pipeline tracking measuring verified booked site visits",
    ],
    caseStudy: {
      client: "Skyline Luxury Residences",
      results: "Sold out 85% of Phase-1 luxury inventory in 60 days via direct-response HNI digital acquisition.",
    },
  },
  ecommerce: {
    title: "Retail & D2C Brands",
    subtitle: "High-ROAS Meta Advantage+ ads, headless Shopify stores, and retention loops",
    icon: Store,
    badge: "RETAIL & D2C E-COMMERCE VERTICAL",
    stats: [
      { label: "Average Client ROAS", val: "4.6x" },
      { label: "Abandoned Cart Recovery", val: "+38%" },
      { label: "Page Load Speed", val: "< 0.8s" },
      { label: "Customer LTV Gain", val: "+55%" },
    ],
    challenges: [
      "Rising CPMs and customer acquisition costs across Meta and TikTok",
      "High shopping cart abandonment rates on mobile devices",
      "Inventory syncing and multi-catalog feed management",
      "Maximizing customer lifetime value (LTV) through retention",
    ],
    solutions: [
      "High-ROAS Meta Advantage+ & Google Performance Max catalog ads",
      "Custom Next.js & Shopify headless storefronts loading in <0.8s",
      "Klaviyo automated email & SMS cart recovery sequences",
      "AI product recommendation engines driving higher Average Order Value (AOV)",
    ],
    caseStudy: {
      client: "UrbanStyle Fashion Brand",
      results: "Scaled monthly online store revenue from ₹15L to ₹1.2 Cr in 8 months at 6.2x ROAS.",
    },
  },
};

export function generateStaticParams() {
  return [
    { industry: "healthcare" },
    { industry: "education" },
    { industry: "real-estate" },
    { industry: "ecommerce" },
  ];
}

export default async function IndustrySinglePage({
  params,
}: {
  params: Promise<{ industry: string }>;
}) {
  const { industry } = await params;
  const data = industryData[industry];

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden font-sans bg-[#FFFFFF] text-[#12304A]">
      {/* ═══════════════════ HERO ═══════════════════ */}
      <UnifiedPageHero
        badge={data.badge}
        ratingText="4.9 / 5 RATING"
        headlinePrefix="Tailored Digital Systems For"
        highlightedText={data.title}
        headlineSuffix="Engineered for Scalable ROAS."
        description={data.subtitle}
        primaryCtaText="REQUEST VERTICAL AUDIT"
        primaryCtaHref="/contact"
        secondaryCtaText="EXPLORE FRAMEWORK"
        secondaryCtaHref="#challenges"
        serviceTitle={data.badge}
        stats={data.stats}
      />

      {/* ═══════════════════ CHALLENGES & SOLUTIONS ═══════════════════ */}
      <section className="py-12 sm:py-14 lg:py-16 bg-[#FAFBFC] border-b border-[#DCE3EB] font-sans relative overflow-hidden" id="challenges">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header: Matching Image Style */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs sm:text-[13px] font-medium uppercase tracking-widest text-[#12304A] font-sans">
                  DIAGNOSTIC ARCHITECTURE
                </span>
                <span className="w-14 h-[2px] bg-[#FFC400] rounded-full inline-block" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight leading-[1.12] font-sans text-[#12304A]">
                Overcoming Vertical Bottlenecks <br />
                <span className="text-[#FFC400]">With Engineered Systems</span>
              </h2>
            </div>

            <div className="max-w-md">
              <p className="text-base sm:text-[17px] font-normal leading-relaxed font-sans text-[#64748B]">
                Eliminating regulatory friction, high acquisition costs, and pipeline leakage with tailored technical infrastructure.
              </p>
            </div>
          </div>

          {/* 2-Column Grid: Challenges vs Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Common Industry Bottlenecks */}
            <div className="bg-[#FFFFFF] p-7 sm:p-9 rounded-[28px] border border-[#DCE3EB] shadow-[0_4px_20px_rgba(18,48,74,0.04)]">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center shrink-0">
                  <AlertCircle className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#12304A] font-sans">
                  Common Industry Bottlenecks
                </h3>
              </div>
              <ul className="space-y-3.5">
                {data.challenges.map((c: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#64748B] font-normal leading-relaxed font-sans">
                    <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adyantra Engineered Solutions */}
            <div className="bg-[#FFFFFF] p-7 sm:p-9 rounded-[28px] border border-[#DCE3EB] shadow-[0_4px_20px_rgba(18,48,74,0.04)] hover:border-[#FFC400] transition-colors">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#12304A] font-sans">
                  Our Engineered Solutions
                </h3>
              </div>
              <ul className="space-y-3.5">
                {data.solutions.map((s: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#12304A] font-normal leading-relaxed font-sans">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 stroke-[2.5] shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Featured Case Study Spotlight Card */}
          <div className="mt-8 bg-[#12304A] text-white rounded-[32px] p-8 sm:p-12 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border border-[#DCE3EB]/20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-[#FFC400] uppercase tracking-widest font-sans">
                  VERIFIED OUTCOME SPOTLIGHT
                </span>
                <span className="w-10 h-[2px] bg-[#FFC400] rounded-full inline-block" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium font-sans text-white">
                {data.caseStudy.client}
              </h3>
              <p className="text-[#DCE3EB] text-sm sm:text-base mt-2 max-w-xl font-normal leading-relaxed font-sans">
                &ldquo;{data.caseStudy.results}&rdquo;
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#FFC400] hover:bg-[#e6b000] text-[#12304A] font-medium text-xs sm:text-sm tracking-wide transition-all shadow-md shrink-0 font-sans cursor-pointer"
            >
              <span>Request Similar Blueprint</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ═══════════════════ TARGET DOMAINS WE SERVE ═══════════════════ */}
      <KPDomainsWeServe />

      {/* ═══════════════════ SENIOR EXECUTION SQUADS ═══════════════════ */}
      <KPTeamExpertise />

      {/* ═══════════════════ CLIENT REVIEWS ═══════════════════ */}
      <KPTestimonials />

      {/* ═══════════════════ FREQUENTLY ASKED QUESTIONS ═══════════════════ */}
      <KPFAQAccordion />

      {/* ═══════════════════ DIRECT CONTACT & AUDIT FORM ═══════════════════ */}
      <KPContactSection />
    </main>
  );
}
