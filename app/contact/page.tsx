"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { BlurIn, FadeUp, StaggerReveal } from "@/components/animations";
import { AnimatedBadge } from "@/components/ui/Cards";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@adyantra.in", "support@adyantra.in"],
    description: "Drop us an email and we'll get back to you within 24 hours.",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 83092 75093", "+1-855-763-0320"],
    description: "Mon - Fri, 9:00 AM to 6:00 PM (IST)",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Adyantra Digital", "HITEC City, Hyderabad", "Telangana 500081"],
    description: "Come say hi at our headquarters.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-bg z-[-2]" />
      <div className="fixed inset-0 mesh-bg opacity-40 z-[-1]" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start mt-12">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <BlurIn>
                <AnimatedBadge className="mb-6">
                  GET IN TOUCH
                </AnimatedBadge>
              </BlurIn>
              <BlurIn delay={0.1}>
                <h1 className="text-h2 font-display text-text-main leading-tight mb-6">
                  Let's Build Something <span className="text-gradient">Extraordinary</span>
                </h1>
              </BlurIn>
              <BlurIn delay={0.2}>
                <p className="text-body text-muted">
                  Whether you're looking to automate your workflow, scale your revenue, or build a new platform—our team of experts is ready to help you execute.
                </p>
              </BlurIn>
            </div>

            <StaggerReveal className="space-y-8">
              {contactInfo.map((info, index) => (
                <FadeUp key={index}>
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-xl bg-surface-2 border border-border flex items-center justify-center flex-shrink-0 text-primary-glow">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-text-main mb-1">
                        {info.title}
                      </h3>
                      <p className="text-caption text-muted mb-3">
                        {info.description}
                      </p>
                      <div className="space-y-1">
                        {info.details.map((detail, i) => (
                          <div key={i} className="text-body-sm font-medium text-text-main">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </StaggerReveal>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <BlurIn delay={0.3}>
              <div className="glass-card p-8 md:p-10 border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />
                
                <h2 className="text-xl font-heading font-bold text-text-main mb-2 relative z-10">
                  Send us a message
                </h2>
                <p className="text-body-sm text-muted mb-8 relative z-10">
                  Fill out the form below and we'll get back to you with a custom strategy.
                </p>

                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
            </BlurIn>
          </div>
          
        </div>
      </div>
    </div>
  );
}
