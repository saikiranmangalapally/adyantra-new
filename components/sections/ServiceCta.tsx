"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function ShadcnInputButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "solid" | "white";
}) {
  const baseClasses =
    "group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2";
  
  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 shadow-[0_0_20px_rgba(15,115,188,0.3)] hover:shadow-[0_0_25px_rgba(15,115,188,0.5)] border border-primary/20",
    solid:
      "bg-secondary text-white hover:bg-secondary/90 shadow-lg border border-white/10",
    white:
      "bg-white text-secondary hover:bg-gray-50 shadow-xl border border-border/50",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]}`}>
      <span className="relative z-10 flex items-center gap-2 px-8">
        {children}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </span>
      <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
    </Link>
  );
}

const ctaStats = [
  { value: "6+", label: "Years Industry Experience" },
  { value: "200+", label: "Successful Projects Executed" },
  { value: "50+", label: "Happy Client Partners" },
  { value: "98%", label: "Client Retention Rate" },
];

export default function ServiceCta() {
  return (
    <section className="relative py-20 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/assets/img/cta-counter-bg.jpg')" }}>
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10 text-center text-white">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.div variants={slideUp} className="sub-title bg-color-3 mb-3">ACCELERATE YOUR REVENUE</motion.div>
          <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">
            Ready to scale your business with <br className="hidden md:block" /> our engineered growth solutions?
          </motion.h2>
          <motion.p variants={slideUp} className="text-white/80 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Book a discovery call with our technical strategy team to audit your current sales funnel and receive a custom digital expansion plan.
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
  );
}
