"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, ChevronRight, BarChart3, Search, Zap, LineChart, Handshake, Brain, Star, Target, Share2, Database, PieChart, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";
import TeamVisualStage from "@/components/sections/TeamVisualStage";
import CTABanner from "@/components/ui/CTABanner";

const heroStats = [
  { value: "2018", label: "Year Established" },
  { value: "50+", label: "Brands Scaled" },
  { value: "100%", label: "In-House Team" },
  { value: "1st", label: "Principles Over Profits" },
];

const timeline = [
  { 
    year: "2018", 
    title: "We Started With Websites", 
    tagline: "Build the digital foundation",
    event: "Building websites and digital foundations for businesses." 
  },
  { 
    year: "2019–2021", 
    title: "Performance Marketing", 
    tagline: "Generate demand",
    event: "Expanded into PPC and paid acquisition, helping businesses turn traffic into measurable results." 
  },
  { 
    year: "2021–2023", 
    title: "Social Media & Growth", 
    tagline: "Build attention & engagement",
    event: "Added social media marketing, content, campaigns, and audience growth." 
  },
  { 
    year: "2023–2025", 
    title: "E-commerce Growth", 
    tagline: "Convert & grow revenue",
    event: "Moved deeper into e-commerce, marketplace marketing, conversion optimization, and performance-driven growth." 
  },
  { 
    year: "2025–Now", 
    title: "AI Automation", 
    tagline: "Automate operations & scale",
    event: "Evolved from helping businesses get customers to helping them automate what happens after the customer arrives." 
  },
];

const values = [
  { 
    icon: <BarChart3 className="w-8 h-8 text-primary" />, 
    title: "Results-First", 
    desc: "Everything we do is measured. If it doesn't move a number that matters to you, we stop doing it."
  },
  { 
    icon: <Search className="w-8 h-8 text-primary" />, 
    title: "Radical Transparency", 
    desc: "No black boxes. You see every campaign, every metric, every decision — in real time."
  },
  { 
    icon: <Zap className="w-8 h-8 text-primary" />, 
    title: "Speed & Agility", 
    desc: "Markets move fast. We ship fast, test fast, and pivot fast. Bureaucracy has no place here."
  },
  { 
    icon: <LineChart className="w-8 h-8 text-primary" />, 
    title: "Data Over Opinions", 
    desc: "We let data win arguments. Gut feel is a starting point, never a conclusion."
  },
  { 
    icon: <Handshake className="w-8 h-8 text-primary" />, 
    title: "Client Partnership", 
    desc: "We succeed when you succeed. Your goals are our goals — from strategy to execution to reporting."
  },
  { 
    icon: <Brain className="w-8 h-8 text-primary" />, 
    title: "Continuous Learning", 
    desc: "Google, Meta, and AI change weekly. Our team is always testing, learning, and adapting."
  },
];

const team = [
  { 
    name: "Saikiran Mangalapally", 
    role: "Founder & CEO", 
    initials: "SM",
    quote: "We don't just build marketing campaigns. We architect scalable digital growth systems that evolve as your business scales — from foundational web development to enterprise AI automation." 
  },
];

const certifications = [
  { name: "Google Ads Certified", icon: <Target className="w-6 h-6 text-[#4285F4]" />, issuer: "Google" },
  { name: "Meta Blueprint Certified", icon: <Share2 className="w-6 h-6 text-[#0668E1]" />, issuer: "Meta" },
  { name: "HubSpot Marketing Certified", icon: <Database className="w-6 h-6 text-[#FF7A59]" />, issuer: "HubSpot" },
  { name: "Google Analytics 4", icon: <PieChart className="w-6 h-6 text-[#F4B400]" />, issuer: "Google" },
  { name: "SEMrush Certified", icon: <TrendingUp className="w-6 h-6 text-[#FF642D]" />, issuer: "SEMrush" },
];

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

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      
      {/* ═══════════════════════════════════════
          1. HERO SECTION (Exactly matching Home Hero structure)
          ═══════════════════════════════════════ */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            {/* Left Content Column */}
            <motion.div className="lg:w-[52%]" initial="hidden" animate="visible" variants={staggerContainer}>
              
              <motion.div variants={slideUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-border shadow-xs text-primary font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                <span>About Adyantra Digital</span>
              </motion.div>

              <motion.h1 variants={slideUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold leading-[1.15] mb-6 text-secondary tracking-tight max-w-2xl">
                We Build Digital Growth Systems That <span className="text-primary underline decoration-accent/60 decoration-4">Evolve With Your Business.</span>
              </motion.h1>
              
              <motion.p variants={slideUp} className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                From websites and performance marketing to e-commerce and AI automation — we've spent years helping businesses build, grow, and now automate their digital operations.
              </motion.p>
              
              <motion.div variants={slideUp} className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
                <ShadcnInputButton href="/contact" variant="solid">Work With Us</ShadcnInputButton>
                <ShadcnInputButton href="#story" variant="outline">Our Journey</ShadcnInputButton>
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

            {/* Right Column */}
            <motion.div className="lg:w-[46%] w-full relative flex items-center justify-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <TeamVisualStage />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. OUR JOURNEY (Exactly matching Home Process structure)
          ═══════════════════════════════════════ */}
      <section className="section-padding relative bg-white overflow-hidden border-t border-border/80" id="story">
        <div className="container mx-auto px-4 md:px-8 max-w-[1100px] relative z-10">
          <div className="section-title text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
              <span>OUR EVOLUTION</span>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">
              From Digital Foundations to Intelligent Businesses
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Our journey isn't just about adding services. It's a logical evolution: <span className="font-bold text-primary">Build → Acquire → Engage → Sell → Automate</span>.
            </motion.p>
          </div>

          {/* Process Rows */}
          <div className="border-t border-border/80">
            {timeline.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="py-6 border-b border-border/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-8 group hover:bg-surface/50 px-4 rounded-xl transition-colors"
              >
                <div className="flex items-center gap-6 md:w-[40%] shrink-0">
                  <span className="text-4xl md:text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors w-16 text-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-bold text-secondary text-lg md:text-xl group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/70 mt-1">
                      {step.tagline}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed md:w-[40%] font-medium">
                  {step.event}
                </p>
                
                <div className="hidden md:flex shrink-0 w-[10%] justify-end">
                  <div className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. OUR PRINCIPLES (Exactly matching Home Services structure)
          ═══════════════════════════════════════ */}
      <section className="service-section fix section-padding relative overflow-hidden bg-white border-t border-border/80" id="values">
        <div className="bg-shape-2 absolute top-0 left-0 opacity-10 pointer-events-none">
          <Image src="/assets/img/service/bg-shape-2.png" alt="Background Graphic" width={400} height={400} className="w-auto h-auto" />
        </div>
        <div className="right-shape-3 absolute top-0 right-0 opacity-15 pointer-events-none">
          <Image src="/assets/img/service/right-shape-3.png" alt="Background Graphic Right" width={300} height={400} className="w-auto h-auto" />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="section-title text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
              <span>OUR PRINCIPLES</span>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              The Values That Guide Us
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              We act as an extension of your growth team with transparency, speed, and mathematical rigour.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="service-card-items style-2 group"
                >
                  <div className="p-8 pb-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {v.icon}
                    </div>
                  </div>
                  <div className="content">
                    <h3 className="title-2 text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-muted-foreground text-sm font-medium leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. LEADERSHIP (Exactly matching Home Team/Expertise structure)
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-cover bg-center relative border-t border-border/80" style={{ backgroundImage: "url('/assets/img/team/team-bg.jpg')" }} id="team">
        <div className="absolute top-10 right-10 animate-[bounce_5s_infinite] opacity-40 pointer-events-none">
          <Image src="/assets/img/service/rocket-shape.png" alt="Graphic Shape" width={120} height={120} className="w-auto h-auto" />
        </div>

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left Column: Founder Profile Card matching Home review card */}
            <motion.div className="lg:w-1/2 flex justify-center" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}>
              <figure className="relative w-full max-w-[420px] shrink-0 overflow-hidden rounded-3xl border border-border/80 bg-white p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      {team[0].initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-secondary text-lg leading-tight group-hover:text-primary transition-colors">{team[0].name}</h4>
                      <span className="inline-flex items-center gap-1.5 mt-1.5 text-xs font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-0.5 rounded-full whitespace-nowrap">
                        {team[0].role}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed italic border-t border-border/70 pt-5">
                    &ldquo;{team[0].quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-0.5 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>
              </figure>
            </motion.div>

            {/* Right Content */}
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
              <div className="section-title mb-10">
                <motion.div variants={slideUp} className="sub-title bg-color-2 mb-3">
                  <span>LEADERSHIP</span>
                </motion.div>
                <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-secondary tracking-tight">
                  Architecting Growth Systems Since 2018
                </motion.h2>
              </div>
              <motion.p variants={slideUp} className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed max-w-lg">
                Our approach is deeply technical and strategy-first. We bridge the gap between digital foundation, performance marketing, and cutting-edge AI automation.
              </motion.p>
              
              <motion.div variants={slideUp} className="flex flex-col sm:flex-row gap-4 sm:gap-10 mb-8">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 font-medium text-sm text-secondary"><CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" /> Full-Stack Ecosystems</li>
                  <li className="flex items-center gap-2.5 font-medium text-sm text-secondary"><CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" /> Data-Driven Scale</li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2.5 font-medium text-sm text-secondary"><CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" /> Autonomous AI Integration</li>
                  <li className="flex items-center gap-2.5 font-medium text-sm text-secondary"><CheckCircle2 className="text-primary w-4.5 h-4.5 shrink-0" /> Transparent Operations</li>
                </ul>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. CERTIFICATIONS */}
      <section className="relative py-20 bg-slate-50/50 border-y border-border/60 overflow-hidden" id="certifications">
        {/* Organic Glass Ambient Lighting */}
        <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-20 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="section-title text-center mb-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
              <span>TRUST & ACCREDITATION</span>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">
              Platform Certifications
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Certified partners across major performance marketing and analytics platforms.
            </motion.p>
          </div>

          <div className="relative flex overflow-hidden py-3 group">
            <div className="flex shrink-0 gap-5 animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
              {certifications.map((c, i) => (
                <div
                  key={i}
                  className="shrink-0 group/pill relative bg-white/85 backdrop-blur-xl border border-white/90 shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-full px-6 py-3.5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-border flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform shadow-sm">
                    {c.icon}
                  </div>
                  <div className="flex flex-col pr-2">
                    <span className="font-bold text-secondary text-sm sm:text-base group-hover/pill:text-primary transition-colors whitespace-nowrap">
                      {c.name}
                    </span>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{c.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Duplicated for Seamless Infinite Loop */}
            <div className="flex shrink-0 gap-5 animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]" aria-hidden="true">
              {certifications.map((c, i) => (
                <div
                  key={`dup-${i}`}
                  className="shrink-0 group/pill relative bg-white/85 backdrop-blur-xl border border-white/90 shadow-md hover:shadow-lg hover:border-primary/50 hover:scale-105 transition-all duration-300 rounded-full px-6 py-3.5 flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-50 border border-border flex items-center justify-center shrink-0 group-hover/pill:scale-110 transition-transform shadow-sm">
                    {c.icon}
                  </div>
                  <div className="flex flex-col pr-2">
                    <span className="font-bold text-secondary text-sm sm:text-base group-hover/pill:text-primary transition-colors whitespace-nowrap">
                      {c.name}
                    </span>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">{c.issuer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA BANNER */}
      <CTABanner />

    </main>
  );
}
