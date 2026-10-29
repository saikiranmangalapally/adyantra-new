"use client";

import React from "react";
import Link from "next/link";
import {
  Bot,
  Zap,
  Clock,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Sparkles,
  Layers
} from "lucide-react";

export default function KPAIAgentIntro() {
  const capabilities = [
    {
      title: "Real-Time Lead Qualification",
      desc: "Conversational agents interrogate inbound leads using your exact qualification matrix, scoring intent before routing.",
    },
    {
      title: "Sub-15s Response Latency",
      desc: "Zero waiting. Leads from Meta, Google, or your website are engaged within seconds on WhatsApp, SMS, or email.",
    },
    {
      title: "Autonomous Calendar Scheduling",
      desc: "Agents check team availability, handle time zone differences, and place confirmed bookings directly into your calendar.",
    },
    {
      title: "Self-Healing Workflow Logic",
      desc: "Deterministic state machines with error fallbacks, human-in-the-loop escalation, and audit logging.",
    },
  ];

  return (
    <section className="w-full py-16 bg-[#f4f7f9] border-b border-[#e4e4e4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-2xl border border-[#e4e4e4] p-8 lg:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d8f5ef] text-[#00AF6B] text-xs font-medium uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#00AF6B] animate-ping"></span>
                <span>AI Agent Active • 24/7 Autonomy</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1e3238] tracking-tight">
                Turn Every Inbound Lead Into A Booked Call While You Sleep
              </h2>

              <p className="text-sm sm:text-base text-[#555b6d] leading-relaxed">
                Traditional sales funnels lose over 50% of inbound interest due to delayed follow-ups. Our custom AI agent architecture connects your ad campaigns directly to autonomous conversational agents that qualify, follow up, and book meetings 24/7.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/lead-generation"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-[#156bb2] hover:bg-[#0f548c] shadow-sm transition-all"
                >
                  <span>Learn Our Approach</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-[#1e3238] bg-white border border-[#e4e4e4] hover:bg-[#f4f7f9] transition-all"
                >
                  <span>Book Agent Demo</span>
                </Link>
              </div>
            </div>

            {/* Right Capability Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {capabilities.map((c, i) => (
                <div
                  key={i}
                  className="bg-[#f4f7f9] border border-[#e4e4e4] rounded-xl p-5 hover:bg-white hover:border-[#156bb2] hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#156bb2]/10 text-[#156bb2] flex items-center justify-center font-medium text-sm mb-3">
                    0{i + 1}
                  </div>
                  <h4 className="text-base font-medium text-[#1e3238] mb-1.5">{c.title}</h4>
                  <p className="text-xs text-[#555b6d] leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
