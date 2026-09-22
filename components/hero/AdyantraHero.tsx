"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Icons8Share, 
  Icons8Globe, 
  Icons8Email, 
  Icons8Camera, 
  Icons8Bot 
} from "@/components/ui/Icons8Icon";

export default function AdyantraHero() {
  return (
    <>
      {/* ═══════════════════ NEW ADYANTRA HERO SECTION ═══════════════════ */}
      <section className="ady-hero-section relative overflow-hidden" id="home">
        <div className="ady-canvas-container">
          <div className="ady-hero-card">

            {/* 3D Concentric Oval Tunnel with 3D Recessed Center Well */}
            <div className="ady-tunnel-container" id="adyTunnel">
              <div className="ady-tunnel-ring ady-ring-outermost"></div>
              <div className="ady-tunnel-ring ady-ring-7"></div>
              <div className="ady-tunnel-ring ady-ring-6"></div>
              <div className="ady-tunnel-ring ady-ring-5"></div>
              <div className="ady-tunnel-ring ady-ring-4"></div>
              <div className="ady-tunnel-ring ady-ring-3"></div>
              <div className="ady-tunnel-ring ady-ring-2"></div>
              <div className="ady-tunnel-ring ady-ring-1"></div>
              <div className="ady-tunnel-ring ady-center-well"></div>
            </div>

            {/* Typography */}
            <div className="ady-hero-content">
              <h1 className="ady-main-title">
                <span className="ady-title-line1">Accelerate Your Brand with</span>
                <span className="ady-title-line2">Performance–Driven AI-Automations</span>
                <span className="ady-title-line3">&amp; Digital Marketing Services.</span>
              </h1>
              <p className="ady-subtitle">
                We engineer high-performance digital marketing ecosystems and AI automations to scale brands profitably.
              </p>

              {/* Action Buttons */}
              <div className="ady-cta-group">
                <Link href="/contact" className="ady-btn-dark">
                  <span>Get Started</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
                <Link href="#services" className="ady-btn-ghost">
                  <span>Our Services</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            {/* Waveform Stage with Exact 5 Floating Badges & Center Button */}
            <div className="ady-waveform-stage">
              <svg className="ady-wave-svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
                <path id="adyWaveformPath" className="ady-wave-curve" d="M 0,160 C 45,160 75,90 118,90 C 160,90 205,168 258,170 C 285,171 305,235 330,235 C 355,235 375,215 395,195 C 415,175 425,95 450,95 C 490,95 540,165 609,165 C 678,165 725,95 770,95 C 805,95 835,130 868,145 C 885,153 895,235 915,235 C 935,235 955,140 970,75 C 985,75 1030,115 1088,115 C 1125,115 1165,125 1200,125"/>
                <circle className="ady-pulse-dot" r="4.5">
                  <animateMotion dur="6s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#adyWaveformPath"/>
                  </animateMotion>
                </circle>
              </svg>

              {/* Badge 1: Coral with Share / Nodes Icon */}
              <div className="ady-float-badge ady-badge-coral" style={{ left: "9.83%", top: "30.0%" }} title="Meta &amp; Social Ads">
                <Icons8Share size={18} color="ffffff" />
              </div>

              {/* Badge 2: White with Globe / Web Icon */}
              <div className="ady-float-badge ady-badge-white" style={{ left: "21.5%", top: "56.7%" }} title="Web App Engineering">
                <Icons8Globe size={18} color="ef5b52" />
              </div>

              {/* Badge 3: Coral with Dollar '$' Icon */}
              <div className="ady-float-badge ady-badge-coral" style={{ left: "32.9%", top: "65.0%" }} title="ROAS &amp; PPC Growth">
                <span className="ady-badge-dollar">$</span>
              </div>

              {/* Center CTA: Black Pill 'Contact Us →' in Wave Dip */}
              <div className="ady-center-cta-wrap" style={{ left: "50.75%", top: "55.0%" }}>
                <Link href="/contact" className="ady-center-pill-btn">
                  <span>Contact Us</span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>

              {/* Badge 4: White with Email Envelope Icon */}
              <div className="ady-float-badge ady-badge-white" style={{ left: "72.3%", top: "48.3%" }} title="Email &amp; Lead Workflows">
                <Icons8Email size={18} color="ef5b52" />
              </div>

              {/* Crest Coral Glow Behind AI Card */}
              <div className="ady-wave-glow-dot" style={{ left: "80.8%", top: "25.0%" }}></div>

              {/* Badge 5: Coral with Instagram Camera Icon */}
              <div className="ady-float-badge ady-badge-coral" style={{ left: "90.67%", top: "38.3%" }} title="Social Content &amp; Influencer Growth">
                <Icons8Camera size={18} color="ffffff" />
              </div>
            </div>

            {/* AI Agent Interactive Widget (Bottom Right) */}
            <aside className="ady-ai-widget">
              <div className="ady-widget-glow"></div>
              <div className="ady-widget-top">
                <div className="ady-widget-avatar">
                  <Image 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                    alt="Adyantra AI Guide" 
                    width={36} 
                    height={36} 
                    className="object-cover w-full h-full rounded-full"
                    unoptimized
                  />
                </div>
                <p className="ady-widget-text">Ask our AI Agent to explore our approach in seconds</p>
              </div>
              <Link href="/about" className="ady-widget-link">
                <span>Learn Our Approach</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
            </aside>

          </div>
        </div>
      </section>

      {/* Stats Bar Bridging cleanly into Services */}
      <div className="ady-stats-bridge-bar">
        <div className="ady-stats-container">
          <div className="ady-stat-item">
            <p className="ady-stat-value">06+</p>
            <p className="ady-stat-label">Years of Industry Expertise</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">50+</p>
            <p className="ady-stat-label">High-Growth Brands Scaled</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">100%</p>
            <p className="ady-stat-label">In-House Engineering</p>
          </div>
          <div className="ady-stat-item">
            <p className="ady-stat-value">Zero</p>
            <p className="ady-stat-label">Outsourced Work</p>
          </div>
        </div>
      </div>
    </>
  );
}
