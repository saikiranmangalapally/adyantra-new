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
import ServicesScrollingBar from "@/components/sections/ServicesScrollingBar";
import HeroWaveformStage from "@/components/hero/HeroWaveformStage";

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

            {/* Waveform Stage with Unbroken Luminous Curve, Floating Squircles & AI Assistant */}
            <HeroWaveformStage />

          </div>
        </div>
      </section>

      {/* Services Scrolling Bar Bridging cleanly into Services */}
      <ServicesScrollingBar />
    </>
  );
}
