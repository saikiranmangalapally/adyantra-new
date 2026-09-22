import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__grid">
        <div>
          <Link href="/" className="brand" style={{ display: "inline-block", marginBottom: "16px" }}>
            <Image
              src="/assets/img/logo.svg"
              alt="Adyantra Digital Logo"
              width={140}
              height={32}
              style={{ height: "32px", width: "auto", display: "block", filter: "brightness(0) invert(1)" }}
            />
          </Link>
          <p>
            Adyantra Digital is a premier technology-first digital marketing and AI automation agency empowering scaling brands with performance ads, custom web software, and revenue growth systems.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              f
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              𝕏
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              in
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              ◎
            </a>
          </div>
        </div>
        <div>
          <h3>Core capabilities</h3>
          <Link href="/digital-marketing-growth#seo">Search Engine Optimization</Link>
          <Link href="/digital-marketing-growth#meta-ads">Social Media &amp; Meta Ads</Link>
          <Link href="/web-software-development">Web Software &amp; App Dev</Link>
          <Link href="/digital-marketing-growth#google-ads">Google Ads &amp; PPC Performance</Link>
          <Link href="/ai-automation#chatbots">AI Workflows &amp; Chatbots</Link>
          <Link href="/digital-marketing-growth#ecommerce">E-Commerce Growth</Link>
        </div>
        <div>
          <h3>Quick links</h3>
          <Link href="/about">About Adyantra</Link>
          <Link href="/#testimonials">Case Studies &amp; Work</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/blog">Growth Insights Blog</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div>
          <h3>Direct contact</h3>
          <b>Mobile phone</b>
          <a href="tel:+918309275093">+91 83092 75093</a>
          <b>Email support</b>
          <a href="mailto:info@adyantra.in">info@adyantra.in</a>
          <a href="mailto:adyantradigital@gmail.com">adyantradigital@gmail.com</a>
        </div>
      </div>
      <div className="shell footer__bottom">
        <span>© {new Date().getFullYear()} Adyantra Digital. All rights reserved.</span>
        <span>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/terms">Terms of service</Link>
        </span>
      </div>
    </footer>
  );
}
