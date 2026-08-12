"use client";

import { motion } from "framer-motion";
import { slideUp, staggerContainer } from "@/lib/variants";
import {
  Search,
  Share2,
  Mail,
  Globe,
  Target,
  ShoppingCart,
  Newspaper,
  Bot,
  Users,
  Activity,
  Layers,
  Zap,
  TrendingUp,
  Settings,
  Database,
  BarChart,
  Cpu,
  ArrowRight
} from "lucide-react";

interface SubService {
  title: string;
  description: string;
  icon?: string;
}

interface SubServicesGridProps {
  subServices: SubService[];
}

const IconMap: Record<string, any> = {
  search: Search,
  share: Share2,
  mail: Mail,
  globe: Globe,
  target: Target,
  shopping: ShoppingCart,
  news: Newspaper,
  bot: Bot,
  users: Users,
  activity: Activity,
  layers: Layers,
  zap: Zap,
  trending: TrendingUp,
  settings: Settings,
  database: Database,
  chart: BarChart,
  cpu: Cpu,
};

export default function SubServicesGrid({ subServices = [] }: SubServicesGridProps) {
  if (!subServices || subServices.length === 0) return null;

  return (
    <section className="section-padding bg-slate-50/50 border-y border-border/60 relative overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-[420px] h-[420px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px] relative z-10">
        <div className="text-center mb-12">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="sub-title bg-color-2 mb-3">
            SERVICES INCLUDED
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-secondary">
            Everything You Need to Scale
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={slideUp} className="text-muted-foreground mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Comprehensive solutions designed to address every aspect of your growth journey.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {subServices.map((service, i) => {
            const Icon = (service.icon && IconMap[service.icon.toLowerCase()]) || Target;

            return (
              <motion.div 
                key={i} 
                variants={slideUp}
                className="service-card-items style-2 group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-border/60 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Simulated Service Thumbnail area with Icon */}
                <div className="w-full h-48 bg-surface border-b border-border flex items-center justify-center relative overflow-hidden group-hover:bg-primary/5 transition-colors">
                  <div className="absolute inset-0 bg-[radial-gradient(#E2E4EB_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-md border border-border/80 flex items-center justify-center text-primary z-10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <Icon className="w-10 h-10" />
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="content p-8 flex flex-col flex-grow bg-white">
                  <h3 className="title-2 text-xl font-bold mb-3 text-secondary group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Subtle decorative bottom accent */}
                  <div className="w-12 h-1 bg-primary/20 rounded-full mt-auto group-hover:w-full group-hover:bg-primary transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
