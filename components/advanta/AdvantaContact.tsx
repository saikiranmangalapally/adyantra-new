"use client";

import React, { useState } from "react";

export default function AdvantaContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your Name, Email, and Message.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" aria-label="Contact Section" className="relative overflow-hidden bg-[#111216]">
      {/* ── Top Golden-Yellow Banner matching Screenshot 172032 ── */}
      <div className="bg-[#f5a623] text-[#111216] py-12 lg:py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-[1360px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black font-heading text-[#111216] leading-tight text-center md:text-left">
            Passion can make a <br className="hidden sm:inline" />
            top-performing company
          </h2>
          <a
            href="#contact-form-block"
            className="inline-flex items-center gap-4 group cursor-pointer"
          >
            <span className="text-sm font-extrabold uppercase tracking-widest text-[#111216]">
              CONTACT US
            </span>
            <span className="w-11 h-11 rounded-full bg-[#111216] text-[#f5a623] flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
              ›
            </span>
          </a>
        </div>
      </div>

      {/* ── Dark Contact Form Block matching Screenshot 172032 ── */}
      <div id="contact-form-block" className="py-24 sm:py-28 px-6 sm:px-12 lg:px-20 text-white">
        <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Get In Touch Details */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#f5a623] mb-4 font-heading">
              <span>GET IN TOUCH</span>
              <span className="w-12 h-[2.5px] bg-[#f5a623]" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[50px] font-black text-white font-heading leading-tight mb-6 tracking-tight">
              Get a free quote <br />
              today
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-10 max-w-md font-medium">
              Web designing in a powerful way of just not an only professions, however, in a passion for our company.
            </p>

            {/* 3 Circular Icon Info Blocks matching Screenshot 172032 */}
            <div className="space-y-7">
              {/* Email Address */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">
                    Email address
                  </div>
                  <a
                    href="mailto:info@adyantra.in"
                    className="text-sm sm:text-base font-bold text-white hover:text-[#f5a623] transition-colors font-heading"
                  >
                    info@adyantra.in
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">
                    Visit Us
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white font-heading">
                    HITEC City, Hyderabad, India
                  </div>
                </div>
              </div>

              {/* Call Now */}
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-[#f5a623] text-[#111216] flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-0.5">
                    Call now
                  </div>
                  <a
                    href="tel:+919154457790"
                    className="text-sm sm:text-base font-bold text-white hover:text-[#f5a623] transition-colors font-heading"
                  >
                    +91 91544 57790
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2x2 Form Inputs + Textarea + Golden Rectangular Submit Button */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-white text-[#111216] p-10 sm:p-14 text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-[#f5a623]/20 text-[#f5a623] flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 fill-none stroke-current stroke-3" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black font-heading mb-3">Quote Request Received!</h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
                  Thank you for reaching out. Our growth strategy lead will review your requirements and reach out within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#111216] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Your Name + Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-[#111216] placeholder-gray-500 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f5a623] shadow-sm rounded-none"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-[#111216] placeholder-gray-500 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f5a623] shadow-sm rounded-none"
                  />
                </div>

                {/* Row 2: Enter Subject + Enter Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Enter Subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-[#111216] placeholder-gray-500 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f5a623] shadow-sm rounded-none"
                  />
                  <input
                    type="tel"
                    placeholder="Enter Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-[#111216] placeholder-gray-500 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f5a623] shadow-sm rounded-none"
                  />
                </div>

                {/* Row 3: Write a Message Textarea */}
                <div>
                  <textarea
                    rows={6}
                    required
                    placeholder="Write a Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-4 bg-white text-[#111216] placeholder-gray-500 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#f5a623] shadow-sm resize-y rounded-none"
                  />
                </div>

                {/* Submit Button: Solid Golden-Yellow Rectangular Button matching Screenshot 172032 */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-10 py-4 bg-[#f5a623] hover:bg-amber-500 text-[#111216] font-black text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer rounded-none"
                  >
                    SEND A MESSAGE
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
