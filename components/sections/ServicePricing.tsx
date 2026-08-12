"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";
import Link from "next/link";

interface PricingTier {
  plan: string;
  price: string;
  features: string[];
}

interface ServicePricingProps {
  pricing: PricingTier[];
}

export default function ServicePricing({ pricing = [] }: ServicePricingProps) {
  if (!pricing || pricing.length === 0) return null;

  return (
    <section className="section-padding relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px] relative z-10">
        <div className="text-center mb-16">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3 inline-block">
            TRANSPARENT PRICING
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">
            Choose Your Scale
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-4 text-sm sm:text-base max-w-xl mx-auto">
            Flexible investment tiers designed to align with your business growth and performance targets.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pricing.map((tier, i) => {
            const isPopular = i === 1;
            
            return (
              <motion.div 
                key={i} 
                variants={slideUp}
                className={`relative bg-white p-8 sm:p-10 rounded-3xl border flex flex-col h-full transition-all duration-300 group ${isPopular ? 'border-primary shadow-sm scale-100 md:scale-105 z-10' : 'border-border/80 hover:border-primary/50 shadow-sm hover:shadow-xl'}`}
              >
                
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-6 rounded-full shadow-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8 text-center border-b border-border/80 pb-8 relative">
                  <h4 className={`text-xl font-bold mb-3 transition-colors ${isPopular ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>{tier.plan}</h4>
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-secondary tracking-tight">{tier.price}</span>
                    <span className="text-muted-foreground font-medium text-sm sm:text-base pb-1.5">/mo</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10 flex-grow">
                  {tier.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-secondary font-medium text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isPopular ? 'bg-primary/10 text-primary' : 'bg-surface text-primary'}`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className={`w-full py-4 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors border ${isPopular ? 'bg-primary text-white hover:bg-primary/90 border-transparent' : 'bg-surface text-secondary border-border/80 hover:border-primary hover:text-primary'}`}>
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
