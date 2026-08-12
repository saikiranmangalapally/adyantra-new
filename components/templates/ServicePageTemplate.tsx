"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Award, ChevronsRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";

import PremiumFaqs from "@/components/sections/PremiumFaqs";
import ServiceIntro from "@/components/sections/ServiceIntro";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import ServiceTestimonials from "@/components/sections/ServiceTestimonials";
import ServiceAbout from "@/components/sections/ServiceAbout";
import ServiceProcessVisual from "@/components/sections/ServiceProcessVisual";
import WhyChooseUsVisual from "@/components/sections/WhyChooseUsVisual";
import ServiceCta from "@/components/sections/ServiceCta";

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
  intro: {
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
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            <motion.div className="lg:w-[52%]" initial="hidden" animate="visible" variants={staggerContainer}>
              
              <motion.div variants={slideUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-border shadow-xs text-primary font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                <span>{data.hero.badge}</span>
              </motion.div>

              <motion.h1 variants={slideUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold leading-[1.15] mb-6 text-secondary tracking-tight max-w-2xl">
                {data.hero.title}
              </motion.h1>
              
              <motion.p variants={slideUp} className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                {data.hero.description}
              </motion.p>
              
              <motion.div variants={slideUp} className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
                <Link href="/contact" className="shadcn-input-button-solid">
                  <span>Request Free Audit</span>
                  <span className="badge-icon">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
                <Link href="#services" className="shadcn-input-button">
                  <span>Our Services</span>
                  <span className="badge-icon">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </motion.div>

              <motion.div variants={slideUp} className="flex flex-wrap items-center gap-4 mb-10 text-xs font-bold text-slate-700 border-t border-border/80 pt-8">
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-border/80">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Google & Meta Certified
                </span>
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-border/80">
                  <Award className="w-4 h-4 text-emerald-600" />
                  16K+ Campaigns Managed
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column: Lead Form */}
            <motion.div 
              className="lg:w-[42%] w-full max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-border/60 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110" />
                
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">Get Your Free Growth Audit</h3>
                  <p className="text-muted-foreground text-sm">Fill out the form below and our technical strategists will reach out within 24 hours.</p>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-1">Full Name *</label>
                    <input type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-surface border border-border/80 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-1">Work Email *</label>
                    <input type="email" placeholder="john@company.com" className="w-full px-4 py-3 bg-surface border border-border/80 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" required />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-1">Phone Number</label>
                    <input type="tel" placeholder="+91 90000 00000" className="w-full px-4 py-3 bg-surface border border-border/80 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-secondary uppercase tracking-wider mb-1.5 ml-1">Company Website</label>
                    <input type="url" placeholder="https://yourcompany.com" className="w-full px-4 py-3 bg-surface border border-border/80 rounded-xl text-sm focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all" />
                  </div>
                  
                  <button type="submit" className="w-full mt-4 bg-primary text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-md group/btn">
                    Request Free Audit
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Industries Grid (Moved under Hero for Client Trust Badges) */}
      <IndustriesGrid />

      {/* 3. About Service */}
      <ServiceAbout
        title={data.about.title}
        paragraphs={data.about.paragraphs}
        pillars={data.about.pillars}
      />

      {/* 4. Intro Section */}
      <ServiceIntro 
        tagline={data.intro.tagline}
        headline={data.intro.headline}
        description={data.intro.description}
      />

      {/* 5. Services Grid */}
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
              <span>FULL-FUNNEL CAPABILITIES</span>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Performance Solutions
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {data.subServices.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="service-card-items style-2 group"
                >
                  <div className="service-thumb">
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="content">
                    <h3 className="title-2">
                      <Link href={svc.href}>{svc.title}</Link>
                    </h3>
                    <p>{svc.desc}</p>
                    <Link href={svc.href} className="service-btn">
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

      {/* 6. Process / Methodology (Using Homepage Visual Layout) */}
      <ServiceProcessVisual 
        steps={data.processSteps}
      />
      
      {/* 7. Why Choose Us (Using Homepage Visual Layout) */}
      <WhyChooseUsVisual reasons={data.whyChooseUs} />
      
      {/* 8. Testimonials (Already uses Homepage Layout) */}
      <ServiceTestimonials />

      {/* 9. CTA Banner */}
      <ServiceCta />

      {/* 10. FAQs */}
      <PremiumFaqs 
        faqs={data.faqData}
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our process"
      />
    </main>
  );
}
