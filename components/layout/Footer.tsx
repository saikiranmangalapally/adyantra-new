import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer ady-theme-footer" id="site-footer">
      {/* ── Main Navigation Grid (Current Theme 5-Column Responsive Layout) ── */}
      <div className="shell footer__grid">
        {/* Col 1: Brand, Mission & Live Status */}
        <div className="footer-col-brand">
          <Link href="/" className="brand footer-brand-logo" aria-label="Adyantra Digital Home">
            <Image
              src="/assets/img/logo.svg"
              alt="Adyantra Digital Logo"
              width={140}
              height={34}
              style={{ height: "34px", width: "auto", display: "block" }}
            />
          </Link>
          <p className="footer-brand-desc">
            Technology-first growth engineering and enterprise AI systems for scaling high-growth brands.
          </p>

          {/* Live System Availability Indicator */}
          <div className="footer-status-pill">
            <span className="footer-status-dot" />
            <span className="footer-status-text">Available for Q4 Enterprise Projects</span>
          </div>

          {/* Social Proof Links */}
          <div className="social-links footer-social-links">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="footer-social-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Col 2: AI & Autonomous Systems */}
        <div className="footer-nav-col">
          <h3 className="footer-nav-heading">Enterprise AI</h3>
          <ul className="footer-nav-list">
            <li><Link href="/ai-agent-development">Autonomous AI Agents</Link></li>
            <li><Link href="/whatsapp-crm">WhatsApp Cloud API</Link></li>
            <li><Link href="/ai-automation#rag">Enterprise RAG Systems</Link></li>
            <li><Link href="/zapier-make-n8n">Make &amp; n8n Workflows</Link></li>
            <li><Link href="/crm-automation">Two-Way CRM State Sync</Link></li>
            <li><Link href="/ai-architecture-consulting">AI Systems Architecture</Link></li>
            <li><Link href="/lead-generation">AI Lead Qualification</Link></li>
          </ul>
        </div>

        {/* Col 3: Digital Marketing & Performance */}
        <div className="footer-nav-col">
          <h3 className="footer-nav-heading">Growth Marketing</h3>
          <ul className="footer-nav-list">
            <li><Link href="/performance-marketing">Google Ads &amp; PMax</Link></li>
            <li><Link href="/digital-marketing-growth#meta-ads">Meta &amp; Instagram Ads</Link></li>
            <li><Link href="/seo">Technical SEO &amp; Authority</Link></li>
            <li><Link href="/digital-marketing-growth#cro">Conversion Optimization</Link></li>
            <li><Link href="/web-software-development">Next.js Web Engineering</Link></li>
            <li><Link href="/ecommerce-solutions">Shopify Plus &amp; Headless</Link></li>
            <li><Link href="/ui-ux-product-design">UI/UX Design Systems</Link></li>
          </ul>
        </div>

        {/* Col 4: Company & Knowledge */}
        <div className="footer-nav-col">
          <h3 className="footer-nav-heading">Company</h3>
          <ul className="footer-nav-list">
            <li><Link href="/about">About Adyantra</Link></li>
            <li><Link href="/portfolio">Client Case Studies</Link></li>
            <li>
              <Link href="/career" className="inline-flex items-center gap-1.5">
                <span>Careers</span>
                <span className="footer-badge-hiring">Hiring</span>
              </Link>
            </li>
            <li><Link href="/blog">Growth Insights Blog</Link></li>
            <li><Link href="/#industries">Target Industries</Link></li>
            <li><Link href="/#testimonials">Client Reviews</Link></li>
            <li><Link href="/contact">Book Strategy Call</Link></li>
          </ul>
        </div>

        {/* Col 5: Direct Technical Strategy Contact */}
        <div className="footer-nav-col footer-contact-col">
          <h3 className="footer-nav-heading">Direct Contact</h3>
          
          <div className="footer-contact-item">
            <span className="footer-contact-label">Technical Strategy Desk</span>
            <a href="tel:+918309275093" className="footer-contact-value footer-contact-value--highlight">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+91 83092 75093</span>
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Client Support</span>
            <a href="mailto:info@adyantra.in" className="footer-contact-value">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
              <span>info@adyantra.in</span>
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">HITEC City Studio</span>
            <div className="footer-contact-value footer-contact-value--text">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>HITEC City, Hyderabad</span>
            </div>
          </div>

          <div className="footer-sla-badge">
            <span className="footer-sla-dot" />
            <span>&lt; 2-Hour SLA Response</span>
          </div>
        </div>
      </div>

      {/* ── Footer Bottom Row (Legal, Copyright & Technical Pedigree) ── */}
      <div className="shell footer__bottom">
        <div className="footer__bottom-left">
          <span>&copy; {new Date().getFullYear()} Adyantra Digital Technologies Pvt. Ltd. All rights reserved.</span>
        </div>
        <div className="footer__bottom-center">
          <span className="footer-pedigree">100% In-House Engineering &bull; Zero Outsourced Code</span>
        </div>
        <div className="footer__bottom-right">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <a href="#siteHeader">Back to top &uarr;</a>
        </div>
      </div>
    </footer>
  );
}
