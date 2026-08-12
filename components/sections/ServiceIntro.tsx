"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";

interface ServiceIntroProps {
  headline: string;
  description: string;
  tagline?: string;
}

export default function ServiceIntro({ headline, description, tagline }: ServiceIntroProps) {
  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          {tagline && (
            <motion.div variants={slideUp} className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
              {tagline}
            </motion.div>
          )}
          
          <motion.h2 
            variants={slideUp} 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-6 leading-tight tracking-tight"
          >
            {headline}
          </motion.h2>
          
          <motion.p 
            variants={slideUp} 
            className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
