"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ExactFooter() {
  return (
    <footer className="bg-[#062B4D] text-[#A6C8E8] text-xs pt-16 pb-12 border-t border-[#A6C8E8]/20 font-sans">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12 border-b border-[#A6C8E8]/20">
          
          {/* Logo & About */}
          <div className="col-span-2 space-y-4 pr-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#FFC400] flex items-center justify-center text-[#062B4D] font-black text-lg shadow-sm">
                <span>A</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Adyantra<span className="text-[#FFC400]">.</span>
              </span>
            </Link>
            <p className="text-[#A6C8E8] text-xs leading-relaxed max-w-sm font-medium">
              We engineer high-performance digital marketing ecosystems and autonomous AI automations to scale brands profitably.
            </p>
            <div className="text-gray-200 text-xs space-y-1.5 pt-1">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFC400]" />
                <a href="tel:+919154457790" className="hover:text-[#FFC400] transition">+91 91544 57790</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFC400]" />
                <a href="mailto:info@adyantra.in" className="hover:text-[#FFC400] transition">info@adyantra.in</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFC400]" />
                <span>HITEC City, Hyderabad, India</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-[11px]">Quick Links</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/" className="hover:text-[#FFC400] transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FFC400] transition">About Us</Link></li>
              <li><Link href="/digital-marketing-growth" className="hover:text-[#FFC400] transition">Digital Marketing</Link></li>
              <li><Link href="/ai-automation" className="hover:text-[#FFC400] transition">AI Automations</Link></li>
              <li><Link href="/blog" className="hover:text-[#FFC400] transition">Blogs</Link></li>
              <li><Link href="/contact" className="hover:text-[#FFC400] transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-[11px]">Our Services</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/performance-marketing" className="hover:text-[#FFC400] transition">Performance Marketing</Link></li>
              <li><Link href="/seo" className="hover:text-[#FFC400] transition">Search Engine Optimization</Link></li>
              <li><Link href="/web-software-development" className="hover:text-[#FFC400] transition">Web Development</Link></li>
              <li><Link href="/whatsapp-crm" className="hover:text-[#FFC400] transition">WhatsApp Cloud CRM</Link></li>
              <li><Link href="/lead-generation" className="hover:text-[#FFC400] transition">AI Lead Generation</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-white font-extrabold uppercase tracking-wider text-[11px]">Compliance &amp; Legal</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/privacy" className="hover:text-[#FFC400] transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#FFC400] transition">Terms &amp; Conditions</Link></li>
              <li><Link href="/career" className="hover:text-[#FFC400] transition">Careers</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-400 text-[11px]">
          <p>© {new Date().getFullYear()} Adyantra Digital. All Rights Reserved.</p>
          <p className="text-gray-400">Engineered with Precision &amp; Autonomous AI.</p>
        </div>
      </div>
    </footer>
  );
}
