"use client";

import { useState } from "react";
import Hero3DParallax from "@/components/hero/Hero3DParallax";
import WhyUsVisualStage from "@/components/sections/WhyUsVisualStage";
import TeamVisualStage from "@/components/sections/TeamVisualStage";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  ArrowUpRight,
  CheckCircle2,
  Search,
  Share2,
  Globe,
  Target,
  Mail,
  Users,
  ShoppingCart,
  Newspaper,
  Bot,
  Phone,
  Star,
  ChevronsRight,
} from "lucide-react";
import { slideUp, staggerContainer } from "@/lib/variants";

/* ── ACCURATE BRAND DATA ── */

const heroStats = [
  { value: "06+", label: "Years of Industry Expertise" },
  { value: "50+", label: "High-Growth Brands Scaled" },
  { value: "100%", label: "In-House Engineering" },
  { value: "Zero", label: "Outsourced Work" },
];

const serviceTabs = ["All Services", "Marketing & Growth", "Design & Dev", "Automation & AI"];

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Dominate Google search engine rankings for your highest-converting keywords. We combine comprehensive technical SEO audits, keyword research, on-page optimization, content strategies, and high-authority link building to generate consistent, qualified organic traffic.",
    cat: "Marketing & Growth",
    img: "/assets/img/service/seo-3d.png",
    href: "/digital-marketing-growth",
  },
  {
    icon: Share2,
    title: "Social Media & Meta Ads",
    desc: "Scale brand visibility and acquisition across Instagram, Facebook, and LinkedIn. We design platform-native visual ad creatives, implement precise demographic targeting, and run retargeting campaigns built for maximum ROAS and direct response conversions.",
    cat: "Marketing & Growth",
    img: "/assets/img/service/smm-3d.png",
    href: "/digital-marketing-growth",
  },
  {
    icon: Mail,
    title: "Email & Lead Nurturing Workflows",
    desc: "Transform leads into loyal repeat customers with hyper-personalized email marketing automation. We build custom drip sequences, onboarding series, re-engagement workflows, and promotional campaigns that boost customer lifetime value.",
    cat: "Marketing & Growth",
    img: "/assets/img/service/email-3d.png",
    href: "/digital-marketing-growth",
  },
  {
    icon: Globe,
    title: "Web Software & App Development",
    desc: "Engineered for speed, security, and conversions. We design and build custom frontend web applications, responsive websites, and enterprise web solutions utilizing Next.js, React, and modern cloud architectures tailored to your business needs.",
    cat: "Design & Dev",
    img: "/assets/img/service/webdev-3d.png",
    href: "/web-software-development",
  },
  {
    icon: Target,
    title: "Google Ads & PPC Performance",
    desc: "Capture high-intent buyers at the exact moment they search for your products or services. We manage Google Search, Display, and Performance Max campaigns with strict negative keyword lists, conversion tracking, and bidding strategies optimized for lower Cost Per Lead.",
    cat: "Marketing & Growth",
    img: "/assets/img/service/ppc-3d.png",
    href: "/digital-marketing-growth",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Growth & Storefronts",
    desc: "Build scalable online stores designed for high checkout completion. From custom Shopify setups and headless commerce to payment gateway integration, product search optimization, and automated abandoned cart recovery, we turn visitors into buyers.",
    cat: "Design & Dev",
    img: "/assets/img/service/ecommerce-3d.png",
    href: "/ecommerce-solutions",
  },
  {
    icon: Newspaper,
    title: "PR & Online Reputation Management",
    desc: "Establish brand authority, secure featured media placements, and manage your digital footprint. We craft strategic press releases, coordinate media outreach, and protect your brand reputation across search engines and digital channels.",
    cat: "Marketing & Growth",
    img: "/assets/img/service/pr-3d.png",
    href: "/digital-marketing-growth",
  },
  {
    icon: Bot,
    title: "AI Workflows & Chatbot Systems",
    desc: "Automate repetitive customer support and sales operations. We build custom WhatsApp AI chatbots, CRM sync integrations, AI lead qualification workflows, and automated appointment booking systems using Make, Zapier, and n8n.",
    cat: "Automation & AI",
    img: "/assets/img/service/ai-3d.png",
    href: "/ai-automation",
  },
  {
    icon: Users,
    title: "Affiliate & Partner Marketing",
    desc: "Expand your brand distribution through performance-based affiliate networks, referral tracking systems, and strategic influencer partnerships that drive risk-free, measurable sales growth.",
    cat: "Marketing & Growth",
    img: "/assets/img/service/affiliate-3d.png",
    href: "/digital-marketing-growth",
  },
];

const ctaStats = [
  { value: "6+", label: "Years Industry Experience" },
  { value: "200+", label: "Successful Projects Executed" },
  { value: "50+", label: "Happy Client Partners" },
  { value: "98%", label: "Client Retention Rate" },
];

const capabilities = [
  "Technical SEO & Organic Keyword Ranking",
  "High-ROAS Meta & Google Performance Ads",
  "Custom Next.js & React Web Application Dev",
  "Scalable E-Commerce & Checkout Optimization",
  "Brand Identity, UI/UX & Strategic PR",
  "WhatsApp AI Chatbots & Workflow Automation",
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Funnel Audit",
    desc: "We perform a deep-dive audit of your current digital presence, advertising accounts, search rankings, tech stack, and competitor positioning to identify untapped revenue opportunities.",
  },
  {
    num: "02",
    title: "Strategy & Custom Roadmap",
    desc: "We build a precise execution plan outlining channel allocation, target audience segments, ad messaging, conversion goals, and technical milestones for predictable growth.",
  },
  {
    num: "03",
    title: "In-House Execution & Deployment",
    desc: "Our senior developers, performance marketers, and AI engineers launch ad campaigns, deploy custom web applications, and integrate automated workflows with speed.",
  },
  {
    num: "04",
    title: "Data-Driven Optimization & Scaling",
    desc: "We monitor performance metrics daily, conducting A/B creative testing, bid adjustments, and conversion rate optimization to scale high-performing channels continuously.",
  },
];

const clientReviews = [
  {
    name: "Shiva Kumar M.",
    role: "Real Estate • Developer",
    quote: "Adyantra completely transformed our property lead pipeline. Their targeted Meta and Google campaigns produced genuine site visit enquiries rather than junk leads. The team is responsive, transparent, and focused on real sales outcomes.",
    initials: "SK",
  },
  {
    name: "Pranay Kumar K.",
    role: "IT & Software • Enterprise",
    quote: "Adyantra seamlessly integrated our web application development and digital marketing requirements under one roof. They provided strategic improvements to our user onboarding funnel that noticeably increased conversions.",
    initials: "PK",
  },
  {
    name: "Sai Teja M.",
    role: "Healthcare & Clinic • Director",
    quote: "Our goal was establishing digital credibility and increasing patient consultations. Adyantra executed a transparent SEO and local search campaign with clear monthly tracking. Highly professional service.",
    initials: "ST",
  },
  {
    name: "Pravalika J.",
    role: "Education Institution • Lead",
    quote: "Adyantra solved our inconsistent student enrolment numbers. Their team redesigned our course landing pages and automated our lead follow-up workflows, doubling our overall enquiry conversion rate.",
    initials: "PJ",
  },
  {
    name: "Pramode K.",
    role: "Enterprise Business • Owner",
    quote: "A pragmatic and performance-focused team. Adyantra prioritizes actual revenue and customer acquisition over vanity metrics. Their hands-on technical guidance makes them a key growth partner.",
    initials: "PK",
  },
  {
    name: "Mani Deep M.",
    role: "Real Estate • Executive",
    quote: "Adyantra streamlined our lead capture and WhatsApp CRM follow-ups for premium housing projects. The real estate market demands fast communication, and their automated systems gave our sales team a major edge.",
    initials: "MD",
  },
  {
    name: "Priyanka S.",
    role: "Education & Academy • Founder",
    quote: "Our experience with Adyantra has been exceptional. They audited our entire student acquisition journey—from ad creative copy to checkout forms—providing end-to-end optimizations that boosted enrolments.",
    initials: "PS",
  },
  {
    name: "Santosh Kumar B.",
    role: "Healthcare & Clinic • Director",
    quote: "Adyantra took the time to study our medical practice before launching our campaigns. Their data-backed Google Search ads improved patient acquisitions while keeping our cost-per-lead low.",
    initials: "SK",
  },
  {
    name: "Jagadesh A.",
    role: "Tech Enterprise • Founder",
    quote: "Having web engineering and performance marketing handled by a single unified team eliminated miscommunication. Adyantra's technical execution is fast, secure, and conversion-focused.",
    initials: "JA",
  },
  {
    name: "Shekhar P.",
    role: "Enterprise Business • Owner",
    quote: "Adyantra stands out for their accountability and clear performance reporting. They consistently optimize ad spend and campaign messaging based on real conversion data.",
    initials: "SP",
  },
  {
    name: "Karthik M.",
    role: "Real Estate • Developer",
    quote: "Qualified buyer lead generation was our primary bottleneck. Adyantra refined our audience segmentation and ad copy, resulting in qualified leads and our highest sales quarter to date.",
    initials: "KM",
  },
  {
    name: "Vamshi Krishna",
    role: "Enterprise Business • Owner",
    quote: "Adyantra delivers strategic execution with a clear focus on bottom-line business profitability. Their technical expertise and dedicated account support make them a trusted long-term partner.",
    initials: "VK",
  },
];

const firstRowReviews = clientReviews.slice(0, 6);
const secondRowReviews = clientReviews.slice(6, 12);

const faqs = [
  {
    q: "How quickly can we expect measurable results from your digital campaigns?",
    a: "Paid advertising campaigns across Google Ads and Meta Ads start delivering qualified leads within 7 to 14 days. Custom WhatsApp AI chatbots and lead automation systems begin capturing leads immediately upon deployment. Search Engine Optimization (SEO) strategies build sustainable organic search authority over 3 to 6 months.",
  },
  {
    q: "Which specific services are best suited for my business goals?",
    a: "If you need immediate leads and revenue, Google Search Ads, Meta Ads, and AI Lead Capture Workflows are recommended. If you want to scale brand equity and long-term organic traffic, Web Application Development, technical SEO, and Content Strategy are ideal. We evaluate your business during our discovery call and recommend a custom growth roadmap.",
  },
  {
    q: "How does Adyantra track and measure campaign ROI?",
    a: "We track clear business outcome metrics: Return on Ad Spend (ROAS), Cost Per Acquisition (CPA), Cost Per Qualified Lead (CPL), organic traffic conversion rates, and pipeline pipeline value. You receive detailed performance reports and transparent access to live campaign dashboards.",
  },
  {
    q: "Can we start with a focused budget and scale as results improve?",
    a: "Yes. We work with scaling businesses across flexible budget tiers. We allocate your initial marketing budget to high-intent conversion channels first, establishing positive ROI before scaling budget into broader reach and brand channels.",
  },
  {
    q: "What differentiates Adyantra from conventional marketing agencies?",
    a: "Adyantra unites custom web engineering, data-backed performance marketing, and AI workflow automation under one roof. We execute 100% of our work in-house with zero outsourcing, providing direct access to senior developers and growth strategists, backed by a 98% client retention rate.",
  },
];

/* ── Crisp Solid Review Card Component (Left Aligned, Middle Dot Role System) ── */
function ReviewCard({
  name,
  role,
  quote,
  initials,
}: {
  name: string;
  role: string;
  quote: string;
  initials: string;
}) {
  const roleParts = role.split(" • ");

  return (
    <figure className="relative w-[340px] sm:w-[360px] shrink-0 cursor-pointer overflow-hidden rounded-3xl border border-border/80 bg-white p-5 sm:p-6 shadow-sm hover:shadow-xl hover:border-primary/50 hover:scale-[1.02] transition-all duration-300 mx-1.5 flex flex-col justify-between group">
      <div className="relative z-10">
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-10 h-10 rounded-full bg-primary text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
            {initials}
          </div>
          <div>
            <h4 className="font-bold text-secondary text-sm sm:text-base leading-tight group-hover:text-primary transition-colors">{name}</h4>
            <span className="inline-flex items-center gap-1.5 mt-1 text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-0.5 rounded-full whitespace-nowrap">
              {roleParts.length === 2 ? (
                <>
                  <span className="whitespace-nowrap">{roleParts[0]}</span>
                  <span className="w-1 h-1 rounded-full bg-primary/70 shrink-0" />
                  <span className="whitespace-nowrap">{roleParts[1]}</span>
                </>
              ) : (
                <span className="whitespace-nowrap">{role}</span>
              )}
            </span>
          </div>
          <div className="ml-auto flex items-center gap-0.5 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
        <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed italic border-t border-border/70 pt-3.5">
          &ldquo;{quote}&rdquo;
        </p>
      </div>
    </figure>
  );
}

/* ── Shadcn UI Input Button Component ── */
function ShadcnInputButton({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "white";
  className?: string;
}) {
  const variantStyle = {
    solid: "shadcn-input-button-solid",
    outline: "shadcn-input-button",
    white: "shadcn-input-button-white",
  }[variant];

  return (
    <Link href={href} className={`${variantStyle} ${className}`}>
      <span>{children}</span>
      <span className="badge-icon">
        <ArrowUpRight className="size-4" />
      </span>
    </Link>
  );
}

/* ── MAIN HOMEPAGE COMPONENT ── */

export default function Home() {
  const [activeTab, setActiveTab] = useState("All Services");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredServices = activeTab === "All Services" ? services : services.filter((s) => s.cat === activeTab);

  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* ═══════════════════════════════════════
          1. HERO SECTION (Unchanged as requested)
          ═══════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content Column */}
            <motion.div className="lg:w-[52%]" initial="hidden" animate="visible" variants={staggerContainer}>
              
              {/* Organic Badge */}
              <motion.div variants={slideUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-border shadow-xs text-primary font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                <span>Next-Gen AI & Performance Systems</span>
              </motion.div>

              <motion.h1 variants={slideUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold leading-[1.15] mb-6 text-secondary tracking-tight max-w-2xl">
                Accelerate Your Brand with <span className="text-primary underline decoration-accent/60 decoration-4">Performance-Driven</span> Digital Marketing Services.
              </motion.h1>
              
              <motion.p variants={slideUp} className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                We engineer high-performance digital marketing ecosystems combining precision data science with world-class creative to scale brands aggressively and profitably.
              </motion.p>
              
              <motion.div variants={slideUp} className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
                <ShadcnInputButton href="/contact" variant="solid">Get Started</ShadcnInputButton>
                <ShadcnInputButton href="#services" variant="outline">Our Services</ShadcnInputButton>
              </motion.div>

              {/* Stats Bar */}
              <motion.div variants={slideUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border/80">
                {heroStats.map((s, i) => (
                  <div key={i} className="group">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary group-hover:scale-105 transition-transform inline-block">{s.value}</p>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column: 3D Interactive Parallax Scene */}
            <motion.div className="lg:w-[46%] w-full relative flex items-center justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <Hero3DParallax />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. OUR SERVICES
          ═══════════════════════════════════════ */}
      <section className="service-section fix section-padding relative overflow-hidden bg-white" id="services">
        <div className="bg-shape-2 absolute top-0 left-0 opacity-10 pointer-events-none">
          <Image src="/assets/img/service/bg-shape-2.png" alt="Background Graphic" width={400} height={400} className="w-auto h-auto" />
        </div>
        <div className="right-shape-3 absolute top-0 right-0 opacity-15 pointer-events-none">
          <Image src="/assets/img/service/right-shape-3.png" alt="Background Graphic Right" width={300} height={400} className="w-auto h-auto" />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="section-title text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
              <span>OUR SERVICES</span>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Integrated Digital Growth & <br className="hidden md:block" /> AI Automation Services
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              We provide full-spectrum digital marketing, web engineering, and AI automation solutions engineered to generate qualified leads, boost conversions, and scale revenue.
            </motion.p>
          </div>

          {/* Category Tabs */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="flex flex-wrap justify-center gap-2.5 mb-12">
            {serviceTabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${activeTab === tab ? "bg-primary text-white shadow-sm" : "bg-surface text-secondary border border-border hover:border-primary hover:text-primary"}`}>
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredServices.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="service-card-items style-2 group"
                >
                  {/* Service Thumbnail Banner */}
                  <div className="service-thumb">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="content">
                    <h3 className="title-2">
                      <Link href={svc.href || "/contact"}>{svc.title}</Link>
                    </h3>
                    <p>{svc.desc}</p>
                    <Link href={svc.href || "/contact"} className="service-btn">
                      <span>Explore Service</span>
                      <span className="badge-icon">
                        <ChevronsRight className="size-4" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. EXPERT TEAM & COLLABORATION
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-cover bg-center relative" style={{ backgroundImage: "url('/assets/img/team/team-bg.jpg')" }}>
        <div className="absolute top-10 right-10 animate-[bounce_5s_infinite] opacity-40 pointer-events-none">
          <Image src="/assets/img/service/rocket-shape.png" alt="Graphic Shape" width={120} height={120} className="w-auto h-auto" />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Column: 3D Team Visual Stage */}
            <motion.div className="lg:w-1/2 flex justify-center" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <TeamVisualStage />
            </motion.div>

            {/* Right Content */}
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">OUR TEAM & EXPERTISE</motion.div>
              <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-3 text-secondary tracking-tight">
                Work Directly with Senior Engineers & Growth Strategists
              </motion.h2>
              <motion.p variants={slideUp} className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
                We replace non-technical account managers with senior developers, performance marketers, and AI architects who take complete accountability for your digital performance.
              </motion.p>

              <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 font-medium text-sm text-secondary"><CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" /> 100% In-House Execution</li>
                  <li className="flex items-center gap-2.5 font-medium text-sm text-secondary"><CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" /> Tailored Growth Strategies</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 font-medium text-sm text-secondary"><CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" /> Direct Senior Technical Access</li>
                  <li className="flex items-center gap-2.5 font-medium text-sm text-secondary"><CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" /> Continuous Campaign Optimization</li>
                </ul>
              </motion.div>

              <motion.div variants={slideUp}>
                <ShadcnInputButton href="/about" variant="solid">Meet Our Leadership</ShadcnInputButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. TARGET DOMAIN EXPERTISE (Glassmorphism Finish - Clean Serving Domains)
          ═══════════════════════════════════════ */}
      <section className="relative py-20 bg-slate-50/50 border-y border-border/60 overflow-hidden" id="industries">
        {/* Organic Glass Ambient Lighting */}
        <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
              TARGET DOMAIN EXPERTISE
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">
              Domains We Serve
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Custom digital marketing strategies and AI automation solutions tailored for high-growth business sectors.
            </motion.p>
          </div>

          {/* Auto-Scrolling Infinite Marquee Row (Enlarged Glass Pills, No Indicators) */}
          <div className="relative flex overflow-hidden py-3 group">
            <div className="flex shrink-0 gap-5 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]">
              {[
                {
                  title: "IT & Software Enterprises",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Real Estate & Housing",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                },
                {
                  title: "Healthcare & Clinics",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: "Education & Academies",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  ),
                },
                {
                  title: "Fashion & D2C Apparel",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  ),
                },
                {
                  title: "NGOs & Non-Profits",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Other Enterprises & Businesses",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map((ind, i) => (
                <div
                  key={i}
                  className="shrink-0 group/pill relative bg-white/85 backdrop-blur-xl border border-white/90 shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-full px-6 py-3.5 flex items-center gap-3.5"
                >
                  <span className="font-bold text-secondary text-sm sm:text-base group-hover/pill:text-primary transition-colors whitespace-nowrap">
                    {ind.title}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform">
                    {ind.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Duplicated for Seamless Infinite Loop */}
            <div className="flex shrink-0 gap-5 animate-[marquee_30s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
              {[
                {
                  title: "IT & Software Enterprises",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  title: "Real Estate & Housing",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ),
                },
                {
                  title: "Healthcare & Clinics",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                },
                {
                  title: "Education & Academies",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  ),
                },
                {
                  title: "Fashion & D2C Apparel",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  ),
                },
                {
                  title: "NGOs & Non-Profits",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                },
                {
                  title: "Other Enterprises & Businesses",
                  icon: (
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
              ].map((ind, i) => (
                <div
                  key={`dup-${i}`}
                  className="shrink-0 group/pill relative bg-white/85 backdrop-blur-xl border border-white/90 shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-full px-6 py-3.5 flex items-center gap-3.5"
                >
                  <span className="font-bold text-secondary text-sm sm:text-base group-hover/pill:text-primary transition-colors whitespace-nowrap">
                    {ind.title}
                  </span>

                  <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform">
                    {ind.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. ABOUT US & CORE CAPABILITIES
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-white relative overflow-hidden" id="about">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16">
            
            {/* Left Column: ABOUT US */}
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">ABOUT ADYANTRA DIGITAL</motion.div>
              <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                Engineering Measurable Digital Advantage <br />
                <span className="text-primary">For Scaling Businesses.</span>
              </motion.h2>
              <motion.p variants={slideUp} className="text-muted-foreground text-sm sm:text-base mb-3 leading-relaxed">
                Adyantra Digital is a premier technology-first digital marketing and AI automation agency. Over 6+ years, we have partnered with 50+ growth-focused companies across Real Estate, Healthcare, Education, E-commerce, and IT Enterprises to turn their online footprint into a reliable customer engine.
              </motion.p>
              <motion.p variants={slideUp} className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                By uniting modern web application engineering, performance marketing analytics, and custom AI workflow automation, we eliminate digital inefficiencies and deliver transparent, high-ROAS returns.
              </motion.p>

              <motion.div variants={slideUp}>
                <ShadcnInputButton href="/about" variant="solid">Read Our Full Story</ShadcnInputButton>
              </motion.div>
            </motion.div>

            {/* Right Column: CORE CAPABILITIES */}
            <motion.div className="lg:w-1/2 w-full" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-primary mb-1.5">CORE TECHNICAL PILLARS</h3>
              <p className="text-xs text-muted-foreground mb-5">Our core competencies driving sustained growth for clients.</p>
              
              <div className="border-t border-border/80">
                {capabilities.map((cap, i) => (
                  <div key={i} className="py-4 border-b border-border/80 flex items-center justify-between group hover:bg-surface/50 px-2 transition-colors">
                    <div className="flex flex-col">
                      <span className="font-bold text-secondary text-base md:text-lg group-hover:text-primary transition-colors">
                        {cap}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-primary group-hover:scale-110 transition-transform">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. CTA BANNER
          ═══════════════════════════════════════ */}
      <section className="relative py-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/cta-counter-bg.jpg')" }}>
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10 text-center text-white">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={slideUp} className="sub-title bg-color-3 mb-3">ACCELERATE YOUR REVENUE</motion.div>
            <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">
              Ready to scale your business with <br className="hidden md:block" /> performance ads & AI automation?
            </motion.h2>
            <motion.p variants={slideUp} className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Book a 30-minute discovery call with our technical strategy team to audit your current sales funnel and receive a custom digital expansion plan.
            </motion.p>
            <motion.div variants={slideUp}>
              <ShadcnInputButton href="/contact" variant="white">Book Strategy Call</ShadcnInputButton>
            </motion.div>
            <motion.div variants={slideUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
              {ctaStats.map((s, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold text-white">{s.value}</p>
                  <p className="text-white/70 mt-1 text-xs">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. OUR PROCESS
          ═══════════════════════════════════════ */}
      <section className="section-padding relative bg-white overflow-hidden" id="process">
        <div className="container mx-auto px-4 md:px-8 max-w-[1100px] relative z-10">
          <div className="text-center mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
              OUR PROVEN PROCESS
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              A Transparent 4-Step Growth Methodology
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Our structured 4-phase framework ensures rapid deployment, data-driven optimization, and predictable scaling.
            </motion.p>
          </div>

          {/* Process Rows */}
          <div className="border-t border-border/80">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-6 border-b border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-8 group hover:bg-surface/50 px-4 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-6 md:w-[40%] shrink-0">
                  <span className="text-primary font-bold text-base md:text-lg">{step.num}</span>
                  <h3 className="text-lg md:text-xl font-bold text-secondary group-hover:text-primary transition-colors">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed md:w-[55%]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. WHY CHOOSE US
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-cover bg-center relative" id="why-us" style={{ backgroundImage: "url('/assets/img/team/team-bg.jpg')" }}>
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <motion.div className="lg:w-1/2 flex justify-center" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <WhyUsVisualStage />
            </motion.div>
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">THE ADYANTRA ADVANTAGE</motion.div>
              <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4">
                Engineered for High ROAS & <br />
                <span className="text-primary">Sustainable Market Dominance.</span>
              </motion.h2>
              <motion.p variants={slideUp} className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                While traditional agencies rely on outdated templates and guesswork, Adyantra builds custom growth engines—combining high-performance frontend tech, AI workflow automation, and precision audience targeting.
              </motion.p>
              <motion.div variants={slideUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "100% In-House Developers & Marketers",
                  "Data-Driven ROAS & Conversion Focus",
                  "No Long-Term Lock-in Contracts",
                  "Transparent Campaign Reporting",
                  "Dedicated Lead Technical Lead",
                  "98% Client Retention Rate",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm text-secondary">{item}</span>
                  </div>
                ))}
              </motion.div>
              <motion.div variants={slideUp}>
                <ShadcnInputButton href="/about" variant="solid">Explore Our Methodology</ShadcnInputButton>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          9. CLIENT REVIEWS (Crisp Solid Cards & Middle Line System)
          ═══════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden bg-white border-t border-border/80" id="testimonials">

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10 text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">CLIENT REVIEWS</motion.div>
            <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">What Our Clients Say</motion.h2>
            <motion.p variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Real feedback from 50+ scaling brands and business owners we partner with.
            </motion.p>
          </motion.div>
        </div>

        {/* 2-Row Auto-Scrolling Infinite Marquees (No Overlap, Compact Vertical Gap) */}
        <div className="relative flex flex-col gap-3 overflow-hidden py-2">
          {/* Row 1 (Left Scrolling) */}
          <div className="flex overflow-hidden group py-2">
            <div className="flex shrink-0 gap-2 animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]">
              {firstRowReviews.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
            <div className="flex shrink-0 gap-2 animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
              {firstRowReviews.map((review, i) => (
                <ReviewCard key={`dup1-${i}`} {...review} />
              ))}
            </div>
          </div>

          {/* Row 2 (Right Scrolling) */}
          <div className="flex overflow-hidden group py-2">
            <div className="flex shrink-0 gap-2 animate-[marquee-reverse_45s_linear_infinite] group-hover:[animation-play-state:paused]">
              {secondRowReviews.map((review, i) => (
                <ReviewCard key={i} {...review} />
              ))}
            </div>
            <div className="flex shrink-0 gap-2 animate-[marquee-reverse_45s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
              {secondRowReviews.map((review, i) => (
                <ReviewCard key={`dup2-${i}`} {...review} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          10. FAQ
          ═══════════════════════════════════════ */}
      <section className="section-padding relative bg-white overflow-hidden" id="faq">
        <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
              CLEAR ANSWERS
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Frequently Asked Questions
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Everything you need to know about our growth frameworks, technical execution, timelines, and reporting.
            </motion.p>
          </div>

          <div className="relative border-t border-border/80">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="border-b border-border/80"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left hover:text-primary transition-colors cursor-pointer group"
                >
                  <span className="font-bold text-secondary text-base md:text-lg pr-6 group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-primary font-bold text-xl shrink-0">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          11. CONNECT WITH OUR TEAM (Clean Contact Labels)
          ═══════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden bg-[#FAFAFC] border-t border-border/60" id="contact">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Contact Details */}
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">CONNECT WITH OUR TEAM</motion.div>
              <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 text-secondary">
                Ready to accelerate your <br />
                <span className="text-primary">digital market advantage?</span>
              </motion.h2>
              <motion.p variants={slideUp} className="text-muted-foreground text-sm sm:text-base mb-8 leading-relaxed">
                Partner with Adyantra Digital to elevate search rankings, capture high-intent leads, and automate revenue operations.
              </motion.p>
              
              <motion.div variants={slideUp} className="space-y-7">
                {/* Email Support (Clean List) */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-base sm:text-lg mb-1.5">Email Support</h4>
                    <p className="text-muted-foreground text-sm sm:text-base font-medium">
                      <a href="mailto:info@adyantra.in" className="text-primary hover:underline font-semibold">info@adyantra.in</a>
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base font-medium mt-1">
                      <a href="mailto:adyantradigital@gmail.com" className="text-primary hover:underline font-semibold">adyantradigital@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Direct Phone (Clean List) */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-base sm:text-lg mb-1.5">Direct Phone</h4>
                    <p className="text-muted-foreground text-sm sm:text-base font-medium">
                      <a href="tel:+918309275093" className="text-secondary hover:text-primary font-bold">+91 83092 75093</a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div className="lg:w-1/2 w-full" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <div className="bg-white p-7 sm:p-9 rounded-3xl shadow-md border border-border">
                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-1.5">Request a Free Growth Audit</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-6">Fill out the form below and our strategy lead will connect with you within 24 hours.</p>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-secondary uppercase tracking-wider mb-1.5">Your Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-3.5 py-2.5 rounded-xl border border-border focus:border-primary focus:outline-hidden text-xs sm:text-sm bg-surface" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-secondary uppercase tracking-wider mb-1.5">Email Address</label>
                      <input type="email" placeholder="john@company.com" className="w-full px-3.5 py-2.5 rounded-xl border border-border focus:border-primary focus:outline-hidden text-xs sm:text-sm bg-surface" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-secondary uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input type="tel" placeholder="+91 83092 75093" className="w-full px-3.5 py-2.5 rounded-xl border border-border focus:border-primary focus:outline-hidden text-xs sm:text-sm bg-surface" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-secondary uppercase tracking-wider mb-1.5">Services Interested In</label>
                    <select className="w-full px-3.5 py-2.5 rounded-xl border border-border focus:border-primary focus:outline-hidden text-xs sm:text-sm bg-surface text-secondary font-medium">
                      <option value="digital-marketing">Digital Marketing & SEO</option>
                      <option value="ai-automation">AI Automation & Workflows</option>
                      <option value="web-dev">Web Design & Development</option>
                      <option value="ppc-ads">PPC & Meta Ads</option>
                      <option value="ecommerce">E-commerce Solutions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-secondary uppercase tracking-wider mb-1.5">Project Details</label>
                    <textarea rows={3} placeholder="Tell us about your business goals..." className="w-full px-3.5 py-2.5 rounded-xl border border-border focus:border-primary focus:outline-hidden text-xs sm:text-sm bg-surface" />
                  </div>
                  <ShadcnInputButton href="/contact" variant="solid" className="w-full justify-center py-3.5">
                    Send Message
                  </ShadcnInputButton>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
