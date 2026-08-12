"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { slideUp } from "@/lib/variants";

export interface FaqItem {
  q: string;
  a: string;
}

interface PremiumFaqsProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
}

export default function PremiumFaqs({ 
  faqs = [], 
  title = "Frequently Asked Questions",
  subtitle = "CLEAR ANSWERS"
}: PremiumFaqsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="section-padding relative bg-white overflow-hidden" id="faq">
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
            {subtitle}
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {title}
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
  );
}
