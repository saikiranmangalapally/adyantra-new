"use client";

import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ChevronUp,
} from "lucide-react";

export default function KPFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{ background: "radial-gradient(circle at 50% 40%, rgba(34, 116, 184, 0.18), transparent 55%), linear-gradient(135deg, #062D51 0%, #0A3D6A 55%, #0D4775 100%)" }} className="w-full text-white font-sans border-t border-[#315E80] relative z-20"
      id="site-footer"
    >
      {/* ── Main Multi-Column Navigation Grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group" aria-label="Adyantra Digital">
              <div className="px-3.5 py-2 rounded-xl bg-white inline-flex items-center shadow-md border border-[#315E80]/40 transition-transform group-hover:scale-105">
                <img
                  src="/assets/img/logo.svg"
                  alt="Adyantra Digital"
                  className="h-7 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-[13.5px] text-[#A9C7E4] leading-relaxed font-normal font-sans">
              Enterprise-grade performance marketing and autonomous AI engineering. We architect high-converting acquisition funnels, Next.js software platforms, and 24/7 intelligent workflow automations for category-leading brands.
            </p>

            <div className="pt-2 space-y-2 text-[13.5px] text-[#A9C7E4] font-sans font-normal">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFC400] shrink-0 mt-0.5" />
                <span>HITEC City, Hyderabad, Telangana 500081, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FFC400] shrink-0" />
                <a href="mailto:info@adyantra.in" className="hover:text-[#FFC400] transition-colors">
                  info@adyantra.in
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#12304A] hover:bg-[#1a4469] text-white font-medium text-sm tracking-wide transition-all shadow-md hover:-translate-y-0.5 group font-sans"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Col 2: Marketing Services */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-white font-sans mb-4 pb-2 border-b border-[#315E80]/40">
              Performance &amp; Search
            </h4>
            <ul className="space-y-3 text-[13.5px] text-[#A9C7E4] font-sans font-normal">
              <li>
                <Link href="/performance-marketing" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/seo" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  SEO &amp; Search Visibility
                </Link>
              </li>
              <li>
                <Link href="/social-media-marketing" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Meta &amp; Social Ads
                </Link>
              </li>
              <li>
                <Link href="/web-design-development" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Web Design &amp; Development
                </Link>
              </li>
              <li>
                <Link href="/ecommerce-marketing" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  E-commerce Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: AI & Software */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-white font-sans mb-4 pb-2 border-b border-[#315E80]/40">
              AI &amp; Automation
            </h4>
            <ul className="space-y-3 text-[13.5px] text-[#A9C7E4] font-sans font-normal">
              <li>
                <Link href="/whatsapp-crm" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  WhatsApp + CRM Bots
                </Link>
              </li>
              <li>
                <Link href="/lead-generation" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Lead Generation
                </Link>
              </li>
              <li>
                <Link href="/sales-follow-up" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Sales Follow-up
                </Link>
              </li>
              <li>
                <Link href="/crm-automation" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  CRM Automation
                </Link>
              </li>
              <li>
                <Link href="/ai-agent-development" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Autonomous AI Agents
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Industries */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-white font-sans mb-4 pb-2 border-b border-[#315E80]/40">
              Industries
            </h4>
            <ul className="space-y-3 text-[13.5px] text-[#A9C7E4] font-sans font-normal">
              <li>
                <Link href="/industries/healthcare" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Healthcare &amp; Medical Clinics
                </Link>
              </li>
              <li>
                <Link href="/industries/real-estate" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Real Estate &amp; Developers
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  E-Commerce &amp; D2C Fashion
                </Link>
              </li>
              <li>
                <Link href="/industries/education" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Education &amp; Academies
                </Link>
              </li>
              <li>
                <Link href="/web-software-development" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  SaaS &amp; B2B Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-white font-sans mb-4 pb-2 border-b border-[#315E80]/40">
              Company
            </h4>
            <ul className="space-y-3 text-[13.5px] text-[#A9C7E4] font-sans font-normal">
              <li>
                <Link href="/about" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  About Adyantra
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Our Leadership &amp; Tech Leads
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Case Studies &amp; ROAS Proof
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Knowledge Hub &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFC400] transition-colors font-sans font-normal">
                  Contact &amp; Audit Request
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* ── 3. Bottom Links & Social Media Bar ── */}
        <div className="pt-8 mt-10 border-t border-[#315E80]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Icons in Circular Badges */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-[#315E80] bg-[#0D416D] hover:bg-[#FFC400] hover:text-white hover:border-[#FFC400] text-white flex items-center justify-center transition-all duration-200"
            >
              <i className="fa-brands fa-facebook-f text-xs"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full border border-[#315E80] bg-[#0D416D] hover:bg-[#FFC400] hover:text-white hover:border-[#FFC400] text-white flex items-center justify-center transition-all duration-200"
            >
              <i className="fa-brands fa-instagram text-xs"></i>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-9 h-9 rounded-full border border-[#315E80] bg-[#0D416D] hover:bg-[#FFC400] hover:text-white hover:border-[#FFC400] text-white flex items-center justify-center transition-all duration-200"
            >
              <i className="fa-brands fa-x-twitter text-xs"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-[#315E80] bg-[#0D416D] hover:bg-[#FFC400] hover:text-white hover:border-[#FFC400] text-white flex items-center justify-center transition-all duration-200"
            >
              <i className="fa-brands fa-linkedin-in text-xs"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full border border-[#315E80] bg-[#0D416D] hover:bg-[#FFC400] hover:text-white hover:border-[#FFC400] text-white flex items-center justify-center transition-all duration-200"
            >
              <i className="fa-brands fa-youtube text-xs"></i>
            </a>
          </div>

          {/* Quick Nav Links on Right */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-[13.5px] text-[#A9C7E4] font-sans">
            <Link href="/blog" className="hover:text-white transition-colors">
              Blogs
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/career" className="hover:text-white transition-colors">
              Career
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact Us
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#0D416D] border border-[#315E80] hover:bg-[#FFC400] hover:text-white hover:border-[#FFC400] text-[#FFC400] flex items-center justify-center transition-colors shadow-sm cursor-pointer ml-1"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── 4. Disclaimer & Copyright Notice ── */}
        <div className="pt-6 mt-6 border-t border-[#315E80]/30 text-center text-xs sm:text-[13px] text-[#A9C7E4]/80 leading-relaxed font-sans">
          <p>
            By clicking this page, you agree to our{" "}
            <Link href="/terms" className="text-white hover:text-[#FFC400] underline font-medium">
              Terms &amp; Conditions
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-white hover:text-[#FFC400] underline font-medium">
              Privacy Policy
            </Link>
            . © {new Date().getFullYear()} Adyantra Digital Private Limited. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
