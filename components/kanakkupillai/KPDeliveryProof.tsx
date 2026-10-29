"use client";

import React from "react";
import {
  Key,
  BarChart3,
  Users,
  TrendingUp,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function KPDeliveryProof() {
  const proofs = [
    {
      icon: Key,
      title: "100% Account Ownership & Access",
      desc: "You retain full administrative ownership of your ad accounts, pixel data, domains, and CRM. No agency holding hostage.",
    },
    {
      icon: BarChart3,
      title: "Live Looker Studio Attribution",
      desc: "Real-time executive dashboards uniting ad spend from Meta, Google, and CRM revenue with zero attribution lag.",
    },
    {
      icon: Users,
      title: "100% In-House Technical Staff",
      desc: "Every line of code and ad variation is produced in-house. No junior account managers or hidden subcontractors.",
    },
    {
      icon: TrendingUp,
      title: "Performance & Margin Protection",
      desc: "We calibrate bidding around contribution margins and blended CAC, not vanity impressions or cheap clicks.",
    },
  ];

  return (
    <section className="w-full py-16 bg-white border-b border-[#e4e4e4] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#1e3238] rounded-2xl p-8 lg:p-12 text-white shadow-xl">
          <div className="max-w-3xl mb-10">
            <span className="text-xs font-medium uppercase tracking-wider text-[#7ebe47] bg-[#2d464e] px-3.5 py-1.5 rounded-full inline-block mb-3">
              Delivery Standards
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Enterprise Performance & Delivery Proof
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              We hold ourselves to rigorous engineering standards so your business maintains full control and clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {proofs.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#263e46] rounded-xl p-6 border border-[#33525c] flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#156bb2] text-white flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-medium text-white mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
