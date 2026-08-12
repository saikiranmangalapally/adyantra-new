"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  Zap,
  CheckCircle2,
  Users,
  Award,
  Heart,
} from "lucide-react";
import CTABanner from "@/components/ui/CTABanner";

const openPositions = [
  {
    id: "job-1",
    title: "Senior Performance Marketing Manager (Meta & Google Ads)",
    department: "Growth Marketing",
    location: "Hyderabad, India / Remote",
    type: "Full-Time",
    exp: "3+ Years",
    desc: "Lead high-budget Meta and Google PPC campaigns for enterprise e-commerce and B2B SaaS clients. Manage monthly ad spend over ₹50L.",
  },
  {
    id: "job-2",
    title: "AI & Full-Stack Web Engineer (Next.js & LLMs)",
    department: "Engineering",
    location: "Hyderabad, India / Hybrid",
    type: "Full-Time",
    exp: "2+ Years",
    desc: "Build Next.js web applications, custom AI chatbot systems, and automated workflow integrations using TypeScript, OpenAI, and TailwindCSS.",
  },
  {
    id: "job-3",
    title: "SEO & Content Strategist (AEO / GEO Focus)",
    department: "Search Engine Optimization",
    location: "Hyderabad, India",
    type: "Full-Time",
    exp: "2+ Years",
    desc: "Drive organic search dominance for client brands across Google, ChatGPT, and Gemini using Answer Engine & Generative Engine Optimization.",
  },
  {
    id: "job-4",
    title: "Senior UI/UX Product Designer",
    department: "Design",
    location: "Hyderabad, India / Remote",
    type: "Full-Time",
    exp: "3+ Years",
    desc: "Craft high-converting landing pages, design systems, and mobile UI prototypes in Figma with micro-animations and user research.",
  },
];

const perks = [
  { icon: Zap, title: "Competitive Salary & Bonuses", desc: "Top-tier industry pay with bi-annual performance bonuses and profit sharing." },
  { icon: Users, title: "Collaborative Culture", desc: "Work with passionate growth marketers, AI engineers, and UI/UX designers." },
  { icon: Heart, title: "Health & Wellness", desc: "Comprehensive medical insurance coverage for you and your immediate family." },
  { icon: Sparkles, title: "Latest Tech & AI Tools", desc: "Access to paid AI subscriptions, top Mac hardware, and continuous learning budgets." },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* ── Hero Section ── */}
      <section className="relative py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px] text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-6 border border-primary/20">
              <Briefcase className="w-4 h-4" />
              <span>Join Team Adyantra</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary tracking-tight leading-[1.15] mb-6">
              Build the Future of Digital Growth & AI Systems
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-medium leading-relaxed mb-8">
              We are a team of data-obsessed growth marketers, AI engineers, and product designers solving ambitious growth challenges for global brands.
            </p>
          </div>
        </div>
      </section>

      {/* ── Culture & Perks ── */}
      <section className="py-16 bg-surface/50">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-secondary">Why You&apos;ll Love Working Here</h2>
            <p className="text-muted-foreground font-medium mt-2">Empowering environment with speed, autonomy, and continuous learning.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="bg-white p-6 rounded-2xl border border-border shadow-xs">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-secondary mb-2">{perk.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{perk.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Open Positions List ── */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-secondary">Current Openings</h2>
              <p className="text-muted-foreground font-medium mt-1">Explore opportunities across engineering, marketing, and design.</p>
            </div>
            <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
              {openPositions.length} Roles Available
            </span>
          </div>

          <div className="space-y-6">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white p-8 rounded-3xl border border-border hover:border-primary/40 shadow-xs hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs font-semibold text-slate-600 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-secondary mb-2">{job.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{job.desc}</p>
                </div>

                <button
                  onClick={() => setSelectedJob(job.title)}
                  className="shadcn-input-button-solid shrink-0"
                >
                  <span>Apply Now</span>
                  <span className="badge-icon">
                    <ArrowUpRight className="size-4" />
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Application Form Modal / Section ── */}
      {selectedJob && (
        <section className="py-12 bg-slate-900 text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-[800px]">
            <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Applying For</span>
                  <h3 className="text-2xl font-bold">{selectedJob}</h3>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-slate-400 hover:text-white font-bold text-sm"
                >
                  ✕ Close
                </button>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-500/20 text-emerald-300 text-center font-bold">
                  ✓ Application received! Our recruitment team will review your profile and contact you shortly.
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400"
                    />
                    <input
                      type="url"
                      required
                      placeholder="LinkedIn Profile / Portfolio URL"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Brief Cover Note (Optional)"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-cyan-400"
                  />

                  <button
                    type="submit"
                    className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-extrabold text-sm uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg"
                  >
                    Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </div>
  );
}
