"use client";

import React from "react";
import Link from "next/link";
import { AIGuideAvatar } from "@/components/icons/AIGuideAvatar";

export default function HeroWaveformStage() {
  return (
    <div className="ady-waveform-stage">
      {/* ── Luminous Waveform SVG (Clean Unbroken Curve) ── */}
      <svg className="ady-wave-svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
        <defs>
          <linearGradient id="adyWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fa5a50" />
            <stop offset="35%" stopColor="#ff645a" />
            <stop offset="68%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#fa5a50" />
          </linearGradient>
        </defs>
        <path
          id="adyWaveformPath"
          className="ady-wave-curve"
          d="M 0,160 C 45,160 75,90 118,90 C 160,90 205,168 258,170 C 285,171 305,235 330,235 C 355,235 375,215 395,195 C 415,175 425,95 450,95 C 490,95 540,165 609,165 C 678,165 725,95 770,95 C 805,95 835,130 868,145 C 885,153 895,235 915,235 C 935,235 955,140 970,75 C 985,75 1030,115 1088,115 C 1125,115 1165,125 1200,125"
        />
        <circle className="ady-pulse-dot" r="4.5">
          <animateMotion dur="5.5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#adyWaveformPath" />
          </animateMotion>
        </circle>
      </svg>

      {/* Ambient Wave Glow Halo Behind Peaks */}
      <div className="ady-wave-glow-dot" style={{ left: "9.8%", top: "30%" }} />
      <div className="ady-wave-glow-dot" style={{ left: "78%", top: "27%" }} />

      {/* ── Badge 1: Coral Squircle — Meta & Social Growth ── */}
      <Link
        href="/digital-marketing-growth#meta-ads"
        className="ady-float-badge ady-badge-coral ady-badge-pos-1"
        style={{ left: "9.8%", top: "30.0%" }}
        title="Meta & Social Ads • 4.8x ROAS"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
        </svg>
        <span className="ady-badge-tooltip">Meta &amp; Social Ads • 4.8x ROAS</span>
      </Link>

      {/* ── Badge 2: Frosted White Squircle — Next.js Systems ── */}
      <Link
        href="/web-software-development"
        className="ady-float-badge ady-badge-white ady-badge-pos-2"
        style={{ left: "21.5%", top: "56.7%" }}
        title="Web Software & Cloud Architecture"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fa5a50" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="ady-badge-tooltip">Next.js Systems • 100 Vitals</span>
      </Link>

      {/* ── Badge 3: Coral Squircle — Google Ads & PPC ROAS ── */}
      <Link
        href="/digital-marketing-growth#google-ads"
        className="ady-float-badge ady-badge-coral ady-badge-pos-3"
        style={{ left: "34.0%", top: "66.0%" }}
        title="Google Ads & PPC Performance"
      >
        <span className="ady-badge-dollar">$</span>
        <span className="ady-badge-tooltip">Google Ads &amp; PPC • 5.2x ROAS</span>
      </Link>

      {/* ── Badge 4: Frosted White Squircle — Omnichannel CRM & Sync ── */}
      <Link
        href="/ai-automation#crm"
        className="ady-float-badge ady-badge-white ady-badge-pos-4"
        style={{ left: "63.0%", top: "48.0%" }}
        title="Omnichannel & CRM Automation"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fa5a50" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        <span className="ady-badge-tooltip">WhatsApp &amp; CRM Sync • &lt;5s SLA</span>
      </Link>

      {/* ── Badge 5: Coral Squircle — Autonomous AI Agents ── */}
      <Link
        href="/ai-automation#agents"
        className="ady-float-badge ady-badge-coral ady-badge-pos-5"
        style={{ left: "78.0%", top: "27.0%" }}
        title="Autonomous AI Agents & Workflows"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" />
          <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" />
        </svg>
        <span className="ady-badge-beacon" />
        <span className="ady-badge-tooltip">Autonomous AI Agents • 24/7 Ops</span>
      </Link>

      {/* ── AI Agent Interactive Widget (Bottom Right) ── */}
      <aside className="ady-ai-widget">
        <div className="ady-widget-glow" />
        <div className="ady-widget-top">
          <div className="ady-widget-avatar">
            <AIGuideAvatar size={38} />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-bold text-emerald-700 uppercase tracking-wide mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              AI Agent Active • 24/7
            </div>
            <p className="ady-widget-text">Ask our AI Agent to explore our approach in seconds</p>
          </div>
        </div>
        <Link href="/about" className="ady-widget-link">
          <span>Learn Our Approach</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </aside>
    </div>
  );
}
