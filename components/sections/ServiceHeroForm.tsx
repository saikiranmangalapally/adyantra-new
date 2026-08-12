"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";

interface ServiceHeroFormProps {
  category?: string;
  headline: string;
  tagline?: string;
  checklist?: string[];
}

export default function ServiceHeroForm({ category, headline, tagline, checklist = [] }: ServiceHeroFormProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Left Content Column */}
          <motion.div className="lg:w-[52%]" initial="hidden" animate="visible" variants={staggerContainer}>
            
            <motion.div variants={slideUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-border shadow-xs text-primary font-bold text-xs uppercase tracking-widest mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
              <span>Expert Digital Services</span>
            </motion.div>

            {/* Split title logic to highlight the last two words if possible, or just render it */}
            <motion.h1 variants={slideUp} className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px] font-bold leading-[1.15] mb-8 text-secondary tracking-tight max-w-2xl">
              {headline}
            </motion.h1>

            {checklist && checklist.length > 0 && (
              <motion.ul variants={slideUp} className="space-y-4 mb-10 max-w-xl">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-base sm:text-lg font-medium text-secondary">{item}</span>
                  </li>
                ))}
              </motion.ul>
            )}

            <motion.div variants={slideUp} className="flex items-center gap-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              <div className="w-10 h-[1px] bg-border" />
              Trusted by 50+ Brands
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
  );
}
