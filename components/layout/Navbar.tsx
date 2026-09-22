"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"marketing" | "ai" | null>(null);
  const [mobileSubMenu, setMobileSubMenu] = useState<"marketing" | "ai" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    if (window.location.hash === "#menu-marketing") {
      setActiveDropdown("marketing");
    } else if (window.location.hash === "#menu-ai") {
      setActiveDropdown("ai");
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside or escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".ady-nav-dropdown-wrap")) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className={`ady-header-wrapper ${scrolled ? "scrolled" : ""}`} id="siteHeader">
      <div className="ady-header-container">
        {/* Brand Logo */}
        <Link href="/" className="ady-brand-logo" aria-label="Adyantra Digital" onClick={() => setActiveDropdown(null)}>
          <Image
            src="/assets/img/logo.svg"
            alt="Adyantra Digital Logo"
            width={140}
            height={36}
            style={{ height: "36px", width: "auto", display: "block" }}
            priority
          />
        </Link>

        {/* Center Navigation Links */}
        <nav className="ady-nav-menu" id="adyNavMenu">
          <Link href="/" className="ady-nav-link" onClick={() => setActiveDropdown(null)}>
            Home
          </Link>

          {/* Digital Marketing Dropdown */}
          <div
            className={`ady-nav-dropdown-wrap ${activeDropdown === "marketing" ? "stay-open open" : ""}`}
            data-open={activeDropdown === "marketing"}
          >
            <div className="ady-nav-link-group">
              <Link
                href="/digital-marketing-growth"
                className={`ady-nav-link ady-has-dropdown ${activeDropdown === "marketing" ? "active" : ""}`}
                onClick={() => setActiveDropdown(null)}
              >
                <span>Digital Marketing</span>
              </Link>
              <button
                type="button"
                className="ady-dropdown-toggle-btn"
                aria-label="Toggle Digital Marketing submenu"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveDropdown((prev) => (prev === "marketing" ? null : "marketing"));
                }}
              >
                <svg className="ady-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="ady-dropdown-menu-clean-2col">
              <div className="ady-drop-col">
                <div className="ady-drop-col-title">Performance &amp; Search</div>
                <Link href="/performance-marketing" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Performance Marketing</Link>
                <Link href="/seo" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>SEO &amp; Search Visibility</Link>
                <Link href="/social-media-marketing" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Meta &amp; Social Ads</Link>
                <Link href="/ai-content-automation" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>AI Content &amp; Automation</Link>
                <Link href="/marketing-automation" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Marketing Automation</Link>
              </div>
              <div className="ady-drop-col">
                <div className="ady-drop-col-title">Development &amp; Channels</div>
                <Link href="/web-design-development" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Web Design &amp; Development</Link>
                <Link href="/ecommerce-marketing" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>E-commerce Marketing</Link>
                <Link href="/ai-video-marketing" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>AI Video Marketing</Link>
                <Link href="/influencer-marketing" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Influencer &amp; Affiliate</Link>
                <Link href="/analytics-reporting" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Analytics &amp; Reporting</Link>
              </div>
            </div>
          </div>

          {/* AI Automation Dropdown */}
          <div
            className={`ady-nav-dropdown-wrap ${activeDropdown === "ai" ? "stay-open open" : ""}`}
            data-open={activeDropdown === "ai"}
          >
            <div className="ady-nav-link-group">
              <Link
                href="/ai-automation"
                className={`ady-nav-link ady-has-dropdown ${activeDropdown === "ai" ? "active" : ""}`}
                onClick={() => setActiveDropdown(null)}
              >
                <span>AI Automation</span>
              </Link>
              <button
                type="button"
                className="ady-dropdown-toggle-btn"
                aria-label="Toggle AI Automation submenu"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveDropdown((prev) => (prev === "ai" ? null : "ai"));
                }}
              >
                <svg className="ady-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div className="ady-dropdown-menu-clean-2col">
              <div className="ady-drop-col">
                <div className="ady-drop-col-title">AI Automation Systems</div>
                <Link href="/lead-generation" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Lead Generation</Link>
                <Link href="/sales-follow-up" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Sales Follow-up</Link>
                <Link href="/crm-automation" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>CRM Automation</Link>
                <Link href="/content-automation" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Content Automation</Link>
                <Link href="/ad-creative-automation" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Ad Creative Automation</Link>
                <Link href="/customer-support" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Customer Support</Link>
                <Link href="/whatsapp-crm" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>WhatsApp + CRM Bots</Link>
              </div>
              <div className="ady-drop-col">
                <div className="ady-drop-col-title">AI Architecture &amp; Consulting</div>
                <Link href="/ai-system-design" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>AI System Design</Link>
                <Link href="/workflow-architecture" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Workflow Architecture</Link>
                <Link href="/ai-agent-development" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Autonomous AI Agents</Link>
                <Link href="/ai-stack-integration" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>AI Stack &amp; API Integration</Link>
                <Link href="/zapier-make-n8n" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>Zapier / Make / n8n Pipelines</Link>
                <Link href="/ai-audit-strategy" className="ady-clean-link" onClick={() => setActiveDropdown(null)}>AI Audit &amp; Strategy Roadmap</Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="ady-nav-link" onClick={() => setActiveDropdown(null)}>
            About
          </Link>
          <Link href="/blog" className="ady-nav-link" onClick={() => setActiveDropdown(null)}>
            Blog
          </Link>
        </nav>

        {/* Right Header Actions */}
        <div className="ady-header-actions">
          <a
            href="https://wa.me/918309275093"
            target="_blank"
            rel="noopener noreferrer"
            className="ady-nav-wa-chip"
            title="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="15" height="15">
              <path
                fill="#25D366"
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
          </a>

          <Link href="/contact" className="ady-header-btn-dark">
            <span>Book A Call</span>
          </Link>

          {/* Hamburger Menu button */}
          <button
            className={`ady-hamburger-btn ${mobileOpen ? "open" : ""}`}
            id="adyMenuToggle"
            aria-label="Toggle Navigation Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="ady-ham-line line-1" />
            <span className="ady-ham-line line-2" />
            <span className="ady-ham-line line-3" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`ady-mobile-drawer ${mobileOpen ? "open" : ""}`} id="adyMobileDrawer">
        <div className="ady-mobile-nav-links">
          <Link href="/" className="ady-mobile-link" onClick={() => setMobileOpen(false)}>
            Home
          </Link>

          {/* Mobile Digital Marketing with Accordion */}
          <div className="ady-mobile-nav-group">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/digital-marketing-growth"
                className="ady-mobile-link flex-1"
                onClick={() => setMobileOpen(false)}
              >
                Digital Marketing
              </Link>
              <button
                type="button"
                className="p-2 text-slate-500 hover:text-[#ef5b52]"
                onClick={() => setMobileSubMenu(mobileSubMenu === "marketing" ? null : "marketing")}
                aria-label="Toggle digital marketing links"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform duration-200 ${mobileSubMenu === "marketing" ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            {mobileSubMenu === "marketing" && (
              <div className="pl-4 pb-2 flex flex-col gap-2 border-l-2 border-[#ef5b52]/20 my-1">
                <Link href="/performance-marketing" className="text-xs text-slate-600 hover:text-[#ef5b52] py-1" onClick={() => setMobileOpen(false)}>Performance Marketing</Link>
                <Link href="/seo" className="text-xs text-slate-600 hover:text-[#ef5b52] py-1" onClick={() => setMobileOpen(false)}>SEO &amp; Search Visibility</Link>
                <Link href="/social-media-marketing" className="text-xs text-slate-600 hover:text-[#ef5b52] py-1" onClick={() => setMobileOpen(false)}>Meta &amp; Social Ads</Link>
                <Link href="/ai-content-automation" className="text-xs text-slate-600 hover:text-[#ef5b52] py-1" onClick={() => setMobileOpen(false)}>AI Content &amp; Automation</Link>
                <Link href="/web-design-development" className="text-xs text-slate-600 hover:text-[#ef5b52] py-1" onClick={() => setMobileOpen(false)}>Web Design &amp; Development</Link>
                <Link href="/ecommerce-marketing" className="text-xs text-slate-600 hover:text-[#ef5b52] py-1" onClick={() => setMobileOpen(false)}>E-commerce Marketing</Link>
              </div>
            )}
          </div>

          {/* Mobile AI Automation with Accordion */}
          <div className="ady-mobile-nav-group">
            <div className="flex items-center justify-between w-full">
              <Link
                href="/ai-automation"
                className="ady-mobile-link flex-1"
                onClick={() => setMobileOpen(false)}
              >
                AI Automation
              </Link>
              <button
                type="button"
                className="p-2 text-slate-500 hover:text-[#ef5b52]"
                onClick={() => setMobileSubMenu(mobileSubMenu === "ai" ? null : "ai")}
                aria-label="Toggle AI automation links"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform duration-200 ${mobileSubMenu === "ai" ? "rotate-180" : ""}`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            {mobileSubMenu === "ai" && (
              <div className="pl-4 pb-2 flex flex-col gap-2 border-l-2 border-[#7b4bf7]/20 my-1">
                <Link href="/lead-generation" className="text-xs text-slate-600 hover:text-[#7b4bf7] py-1" onClick={() => setMobileOpen(false)}>Lead Generation</Link>
                <Link href="/sales-follow-up" className="text-xs text-slate-600 hover:text-[#7b4bf7] py-1" onClick={() => setMobileOpen(false)}>Sales Follow-up</Link>
                <Link href="/crm-automation" className="text-xs text-slate-600 hover:text-[#7b4bf7] py-1" onClick={() => setMobileOpen(false)}>CRM Automation</Link>
                <Link href="/content-automation" className="text-xs text-slate-600 hover:text-[#7b4bf7] py-1" onClick={() => setMobileOpen(false)}>Content Automation</Link>
                <Link href="/customer-support" className="text-xs text-slate-600 hover:text-[#7b4bf7] py-1" onClick={() => setMobileOpen(false)}>Customer Support</Link>
                <Link href="/whatsapp-crm" className="text-xs text-slate-600 hover:text-[#7b4bf7] py-1" onClick={() => setMobileOpen(false)}>WhatsApp + CRM Bots</Link>
              </div>
            )}
          </div>

          <Link href="/web-software-development" className="ady-mobile-link" onClick={() => setMobileOpen(false)}>
            Web Software
          </Link>
          <Link href="/about" className="ady-mobile-link" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link href="/blog" className="ady-mobile-link" onClick={() => setMobileOpen(false)}>
            Blog
          </Link>
        </div>
        <div className="ady-mobile-footer-actions">
          <a href="tel:+918309275093" className="ady-mobile-contact-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
            <span>+91 83092 75093</span>
          </a>
          <a href="https://wa.me/918309275093" target="_blank" rel="noopener noreferrer" className="ady-mobile-contact-item">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path
                fill="#25D366"
                d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
              />
            </svg>
            <span>WhatsApp: +91 83092 75093</span>
          </a>
          <Link href="/contact" className="ady-mobile-cta" onClick={() => setMobileOpen(false)}>
            Book A Call &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}
