"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  ArrowUpRight, 
  ChevronDown, 
  Copy, 
  Check,
  CheckCircle2,
  Search,
  Share2,
  Globe,
  Bot,
  Target,
  ShoppingCart
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";

const contactTiles = [
  {
    icon: Mail,
    title: "Email Us",
    primaryText: "info@adyantra.in",
    secondaryText: "support@adyantra.in",
    description: "Drop us an email and we'll get back to you within 24 hours.",
    actionType: "copy",
  },
  {
    icon: Phone,
    title: "Call Us",
    primaryText: "+91 83092 75093",
    secondaryText: "+1-855-763-0320",
    description: "Mon - Fri, 9:00 AM to 6:00 PM (IST)",
    actionType: "call",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primaryText: "Adyantra Digital",
    secondaryText: "HITEC City, Hyderabad, Telangana 500081",
    description: "Come say hi at our headquarters.",
    actionType: "visit",
  },
];

const capabilities = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    desc: "Dominate Google search engine rankings for your highest-converting keywords with technical audits and content strategies.",
  },
  {
    icon: Share2,
    title: "Social Media & Meta Ads",
    desc: "Scale brand visibility and acquisition across Instagram, Facebook, and LinkedIn with high-ROAS ad campaigns.",
  },
  {
    icon: Globe,
    title: "Web Software & App Development",
    desc: "Engineered for speed and conversions utilizing Next.js, React, and modern cloud architectures.",
  },
  {
    icon: Target,
    title: "Google Ads & PPC Performance",
    desc: "Capture high-intent buyers with optimized search, display, and Performance Max campaign management.",
  },
  {
    icon: Bot,
    title: "AI Workflows & Chatbots",
    desc: "Automate sales and support operations with custom WhatsApp AI chatbots and CRM lead qualification workflows.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Storefronts",
    desc: "Scalable online stores designed for high checkout completion, product search optimization, and abandoned cart recovery.",
  },
];

const faqs = [
  {
    question: "What happens after I submit the contact form?",
    answer:
      "Within 24 hours, one of our senior strategy directors will review your website, ad accounts, and tech stack. We will prepare a custom audit and schedule an intro call to present actionable growth recommendations.",
  },
  {
    question: "How fast can we launch a marketing campaign or project?",
    answer:
      "Performance ad campaigns (Meta & Google Ads) typically launch within 3 to 5 business days following account setup and audience research. Web application projects usually kick off within 1 week of strategy alignment.",
  },
  {
    question: "Do I get direct access to developers and media buyers?",
    answer:
      "Yes, 100%. We replace non-technical middle managers with direct Slack and WhatsApp communication with the engineers, designers, and media buyers executing your account.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We specialize in Real Estate, B2B IT & SaaS, Healthcare Clinics, Higher Education, E-Commerce brands, and Professional Enterprise Services across India, North America, and UAE.",
  },
];

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white text-muted-foreground overflow-x-hidden pt-28 pb-20">
      
      {/* ═══════════════════════════════════════
          1. MAIN CONTACT SECTION (NO HERO SECTION)
          ═══════════════════════════════════════ */}
      <section className="section-padding pt-12 lg:pt-16 bg-white relative">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          
          {/* Section Title Header (Exact Home Page Format) */}
          <div className="section-title text-center mb-14">
            <motion.div initial="hidden" animate="visible" variants={slideUp} className="sub-title bg-color-2 mb-3">
              <span>GET IN TOUCH</span>
            </motion.div>
            <motion.h1 initial="hidden" animate="visible" variants={slideUp} className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight tracking-tight">
              Let's Build Something <span className="text-primary underline decoration-accent/60 decoration-4">Extraordinary</span>
            </motion.h1>
            <motion.p initial="hidden" animate="visible" variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Whether you're looking to automate your workflow, scale your revenue, or build a new platform—our team of experts is ready to help you execute.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: CONTACT TILES (2 Cols) */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Tile 1: Email */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-secondary mb-1 text-base">
                    Email Us
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Drop us an email and we'll get back to you within 24 hours.
                  </p>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-secondary flex items-center gap-2">
                      <span>info@adyantra.in</span>
                      <button
                        onClick={() => copyToClipboard("info@adyantra.in")}
                        className="text-xs text-primary hover:underline cursor-pointer"
                        title="Copy email"
                      >
                        {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <div className="text-sm font-medium text-secondary">support@adyantra.in</div>
                  </div>
                </div>
              </div>

              {/* Tile 2: Phone */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-secondary mb-1 text-base">
                    Call Us
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Mon - Fri, 9:00 AM to 6:00 PM (IST)
                  </p>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-secondary">+91 83092 75093</div>
                    <div className="text-sm font-medium text-secondary">+1-855-763-0320</div>
                  </div>
                  <div className="mt-3">
                    <a
                      href="https://wa.me/918309275093"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold hover:bg-emerald-600 transition-colors shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Tile 3: Visit Us */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-secondary mb-1 text-base">
                    Visit Us
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">
                    Come say hi at our headquarters.
                  </p>
                  <div className="space-y-1 text-sm font-medium text-secondary">
                    <div className="font-bold">Adyantra Digital</div>
                    <div>HITEC City, Hyderabad</div>
                    <div>Telangana 500081</div>
                  </div>
                </div>
              </div>

              {/* In-House Promise Highlights */}
              <div className="p-6 rounded-2xl bg-surface border border-border space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Why Work With Us</h4>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 font-medium text-xs text-secondary">
                    <CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> 100% In-House Technical Execution
                  </li>
                  <li className="flex items-center gap-2.5 font-medium text-xs text-secondary">
                    <CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> Direct Access to Senior Engineers
                  </li>
                  <li className="flex items-center gap-2.5 font-medium text-xs text-secondary">
                    <CheckCircle2 className="text-primary w-4 h-4 shrink-0" /> 24-Hour Response SLA
                  </li>
                </ul>
              </div>

            </div>

            {/* RIGHT COLUMN: CONTACT FORM CARD (3 Cols) */}
            <div className="lg:col-span-3">
              <div className="bento-card p-8 md:p-10 border-border relative">
                <h2 className="text-xl font-bold text-secondary mb-2">
                  Send us a message
                </h2>
                <p className="text-xs text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you with a custom strategy.
                </p>

                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          2. CORE CAPABILITIES (Home Page Section System)
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-slate-50/50 border-y border-border/60">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="section-title text-center mb-12">
            <div className="sub-title bg-color-2 mb-3"><span>OUR CAPABILITIES</span></div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">
              What We Deliver
            </h2>
            <p className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
              Integrated digital growth, web software development, and AI automation built for scaling brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => {
              const IconComp = cap.icon;
              return (
                <div key={i} className="bento-card p-6 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{cap.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. FREQUENTLY ASKED QUESTIONS (Home Page Section System)
          ═══════════════════════════════════════ */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-[900px]">
          <div className="section-title text-center mb-12">
            <div className="sub-title bg-color-2 mb-3"><span>FREQUENTLY ASKED QUESTIONS</span></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-secondary tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="text-sm text-muted-foreground mt-3">
              Clear answers regarding our onboarding, timelines, and technical collaboration model.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="border border-border rounded-2xl overflow-hidden transition-all bg-white hover:border-primary/40"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-secondary text-base hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-8 h-8 rounded-full bg-surface flex items-center justify-center shrink-0 text-primary transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-primary text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed border-t border-border/50 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. HIGH IMPACT BOTTOM CTA BANNER (Home Page System)
          ═══════════════════════════════════════ */}
      <section className="pb-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="bg-secondary text-white rounded-[32px] p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-2xl relative z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-accent font-bold text-xs uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Ready for Predictable Revenue Growth?
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight mb-4">
                Scale Your Marketing & AI Infrastructure Today.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect with our senior team for a complimentary audit of your current Google/Meta Ads or custom web architecture.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <a
                href="https://wa.me/918309275093"
                target="_blank"
                rel="noopener noreferrer"
                className="shadcn-input-button-white text-xs sm:text-sm"
              >
                <span>Instant WhatsApp Call</span>
                <span className="badge-icon">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
