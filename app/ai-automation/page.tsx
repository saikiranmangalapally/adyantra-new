"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Award, ChevronsRight, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";

// Extracted Reusable Components
import ExecutionMethodology from "@/components/sections/ExecutionMethodology";
import WhyChooseUs from "@/components/sections/WhyChooseUsAccordion";
import PremiumFaqs from "@/components/sections/PremiumFaqs";
import ServiceIntro from "@/components/sections/ServiceIntro";
import IndustriesGrid from "@/components/sections/IndustriesGrid";
import ServiceTestimonials from "@/components/sections/ServiceTestimonials";

const servicesList = [
  { 
    title: "AI Automation Systems", 
    desc: "End-to-end automation infrastructure tailored to scale your business operations seamlessly.", 
    href: "/contact",
    img: "/assets/img/service/ai-3d.png"
  },
  { 
    title: "Lead Generation", 
    desc: "Deploy AI agents to automatically find, scrape, and enrich high-quality leads at scale.", 
    href: "/contact",
    img: "/assets/img/service/seo-3d.png"
  },
  { 
    title: "Sales Follow-up", 
    desc: "Automate personalized follow-up sequences to close more deals without manual effort.", 
    href: "/contact",
    img: "/assets/img/service/smm-3d.png"
  },
  { 
    title: "CRM Automation", 
    desc: "Sync data across platforms and automate data entry to keep your CRM perfectly updated.", 
    href: "/contact",
    img: "/assets/img/service/seo-3d.png"
  },
  { 
    title: "Content Automation", 
    desc: "Generate high-quality blogs, social posts, and newsletters using custom AI workflows.", 
    href: "/contact",
    img: "/assets/img/service/ai-3d.png"
  },
  { 
    title: "Ad Creative Automation", 
    desc: "Programmatically generate winning ad creatives and copy tailored to specific audiences.", 
    href: "/contact",
    img: "/assets/img/service/ppc-3d.png"
  },
  { 
    title: "Customer Support", 
    desc: "Deploy intelligent AI chatbots that resolve customer queries 24/7 with human-like accuracy.", 
    href: "/contact",
    img: "/assets/img/service/email-3d.png"
  },
  { 
    title: "Appointment Booking", 
    desc: "Allow AI agents to schedule, reschedule, and manage calendar bookings automatically.", 
    href: "/contact",
    img: "/assets/img/service/webdev-3d.png"
  },
  { 
    title: "E-commerce Automation", 
    desc: "Automate inventory syncs, abandoned cart recovery, and personalized product recommendations.", 
    href: "/contact",
    img: "/assets/img/service/ppc-3d.png"
  },
  { 
    title: "AI Architecture & Consulting", 
    desc: "Strategic consulting to design the optimal AI tech stack for your unique business goals.", 
    href: "/contact",
    img: "/assets/img/service/ai-3d.png"
  },
  { 
    title: "AI System Design", 
    desc: "Custom architecture design for deploying enterprise-grade AI solutions across your company.", 
    href: "/contact",
    img: "/assets/img/service/webdev-3d.png"
  },
  { 
    title: "Workflow Architecture", 
    desc: "Map and build complex multi-step workflows to eliminate bottlenecks in your operations.", 
    href: "/contact",
    img: "/assets/img/service/seo-3d.png"
  },
  { 
    title: "AI Agent Development", 
    desc: "Build autonomous AI agents capable of executing complex, multi-step tasks independently.", 
    href: "/contact",
    img: "/assets/img/service/email-3d.png"
  },
  { 
    title: "AI Stack Integration", 
    desc: "Seamlessly integrate OpenAI, Anthropic, and other AI models into your existing tech stack.", 
    href: "/contact",
    img: "/assets/img/service/webdev-3d.png"
  },
  { 
    title: "WhatsApp + CRM", 
    desc: "Connect your WhatsApp business API to your CRM for instant lead routing and tracking.", 
    href: "/contact",
    img: "/assets/img/service/ai-3d.png"
  },
  { 
    title: "Zapier / Make / n8n", 
    desc: "Expert setup and management of automation platforms to connect all your software tools.", 
    href: "/contact",
    img: "/assets/img/service/webdev-3d.png"
  },
  { 
    title: "AI Audit & Strategy", 
    desc: "Identify automation opportunities in your business with a comprehensive technical audit.", 
    href: "/contact",
    img: "/assets/img/service/seo-3d.png"
  }
];

const processSteps = [
  {
    title: "Workflow Audit & Discovery",
    description: "We map out your current manual processes, lead flows, and software stack to identify automation bottlenecks.",
    timeline: "Week 1"
  },
  {
    title: "Architecture & Design",
    description: "We design the automation logic, chatbot conversational trees, and API connection pathways.",
    timeline: "Weeks 1-2"
  },
  {
    title: "Development & AI Training",
    description: "Building the workflows, integrating APIs (Make/Zapier), and training LLMs on your custom business data.",
    timeline: "Weeks 3-4"
  },
  {
    title: "Testing & Deployment",
    description: "Rigorous testing of edge cases, fail-safes, and handoffs before pushing the automation live to production.",
    timeline: "Week 5"
  }
];

const whyChooseUs = [
  {
    title: "Platform Agnostic",
    description: "We don't force you into proprietary software. We build on enterprise-grade tools like Make, Zapier, OpenAI, and Twilio."
  },
  {
    title: "Seamless Human Handoff",
    description: "Our AI systems know exactly when to escalate complex queries to your human sales or support team."
  },
  {
    title: "Security & Compliance",
    description: "We ensure all data transfers and API connections are encrypted and compliant with local data regulations."
  },
  {
    title: "Iterative Optimization",
    description: "We don't just launch and leave. We monitor chatbot transcripts and workflow logs to continuously improve AI accuracy."
  }
];

const faqData = [
  {
    q: "Do I need technical knowledge to manage these automations?",
    a: "Not at all. We build the systems to run entirely in the background. We provide you with a simple dashboard or interface if you need to update basic information, but the heavy lifting is completely automated."
  },
  {
    q: "Which CRMs and tools can you integrate with?",
    a: "We can integrate with virtually any software that has an open API. This includes popular tools like Salesforce, HubSpot, Zoho, GoHighLevel, Shopify, WordPress, Slack, and thousands more via Make or Zapier."
  },
  {
    q: "Will AI chatbots alienate my customers?",
    a: "Poorly designed chatbots do. Our AI agents are trained on your specific brand voice and are programmed with conversational empathy. Most importantly, they always offer a seamless path to speak with a human agent when requested."
  },
  {
    q: "How secure is my business data when using AI?",
    a: "We use enterprise-grade LLM APIs (like OpenAI's API) which, by default, do not use your data to train their public models. All data transfers between your systems are encrypted."
  }
];

export default function AIAutomationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      
      {/* 1. HERO SECTION (Matched to Homepage) */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-36 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            
            <motion.div className="lg:w-[52%]" initial="hidden" animate="visible" variants={staggerContainer}>
              
              <motion.div variants={slideUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-border shadow-xs text-primary font-bold text-xs uppercase tracking-widest mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
                <span>AI & AUTOMATION HUB</span>
              </motion.div>

              <motion.h1 variants={slideUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold leading-[1.15] mb-6 text-secondary tracking-tight max-w-2xl">
                AI Automation Systems Designed For <span className="text-primary underline decoration-accent/60 decoration-4">Unfair Advantage</span>
              </motion.h1>
              
              <motion.p variants={slideUp} className="text-base sm:text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
                Eliminate manual tasks, capture leads 24/7, and connect your entire software stack with custom AI agents and workflow automation.
              </motion.p>
              
              <motion.div variants={slideUp} className="flex flex-wrap items-center gap-4 sm:gap-5 mb-14">
                <Link href="/contact" className="shadcn-input-button-solid">
                  <span>Book Strategy Call</span>
                  <span className="badge-icon">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
                <Link href="#services" className="shadcn-input-button">
                  <span>Explore Solutions</span>
                  <span className="badge-icon">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Link>
              </motion.div>

              <motion.div variants={slideUp} className="flex flex-wrap items-center gap-4 mb-10 text-xs font-bold text-slate-700 border-t border-border/80 pt-8">
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-border/80">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Make & Zapier Experts
                </span>
                <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-border/80">
                  <Award className="w-4 h-4 text-emerald-600" />
                  250+ Workflows Built
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
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2">Get Your Free AI Audit</h3>
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

      {/* 2. Intro Section */}
      <ServiceIntro 
        tagline="Intelligent Operations"
        headline="Grow Your Business with Smart AI Workflows"
        description="Your operations should scale seamlessly—the question is, are you still relying on manual execution? Our AI automation systems combine machine learning, LLMs, and logical workflows to eliminate repetitive tasks, boost productivity, and accelerate business growth."
      />

      {/* 3. Services Grid */}
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
              <span>AUTOMATION SOLUTIONS</span>
            </motion.div>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              AI & Workflow Ecosystems
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Custom-built automation solutions designed to eliminate manual data entry and accelerate sales cycles.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {servicesList.map((svc, i) => (
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
                      <span>Explore Solution</span>
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

      {/* 4. Industries Grid */}
      <IndustriesGrid />

      {/* 5. Process / Methodology */}
      <ExecutionMethodology steps={processSteps} />
      
      {/* 6. Why Choose Us */}
      <WhyChooseUs reasons={whyChooseUs} />
      
      {/* 7. Testimonials */}
      <ServiceTestimonials />

      {/* 8. FAQs */}
      <PremiumFaqs 
        faqs={faqData}
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about our AI automation implementation"
      />

    </main>
  );
}
