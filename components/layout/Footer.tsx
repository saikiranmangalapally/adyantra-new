import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1320] text-gray-300 pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src="/assets/img/logo.svg"
                alt="Adyantra Digital Logo"
                width={110}
                height={28}
                className="w-24 sm:w-28 h-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Adyantra Digital is a premier technology-first digital marketing and AI automation agency empowering scaling brands with performance ads, custom web software, and revenue growth systems.
            </p>
            <div className="flex gap-2.5">
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-300 transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-300 transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-300 transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white text-gray-300 transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-base font-bold font-heading text-white mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Core Capabilities
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li><Link href="/digital-marketing-growth" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> Search Engine Optimization (SEO)</Link></li>
              <li><Link href="/digital-marketing-growth" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> Social Media & Meta Ads</Link></li>
              <li><Link href="/web-software-development" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> Web Software & App Dev</Link></li>
              <li><Link href="/digital-marketing-growth" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> Google Ads & PPC Performance</Link></li>
              <li><Link href="/ai-automation" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> AI Workflows & Chatbots</Link></li>
              <li><Link href="/ecommerce-solutions" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> E-Commerce Growth</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold font-heading text-white mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Quick Links
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> About Adyantra</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> Case Studies & Work</Link></li>
              <li><Link href="/career" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> Careers</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> Growth Insights Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2"><span className="text-primary text-[10px]">▶</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-bold font-heading text-white mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-primary">
              Direct Contact
            </h3>
            <ul className="space-y-5 text-xs sm:text-sm">
              <li className="flex gap-3.5">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs mb-0.5">Mobile Phone</h4>
                  <p className="text-xs text-gray-400 font-medium">+91 83092 75093</p>
                </div>
              </li>
              <li className="flex gap-3.5">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-white/5 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-xs mb-0.5">Email Support</h4>
                  <p className="text-xs text-gray-400 font-medium">info@adyantra.in</p>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">adyantradigital@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Adyantra Digital. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

