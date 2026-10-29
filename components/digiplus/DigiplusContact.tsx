"use client";

import React, { useState } from "react";

export default function DigiplusContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#faf7f2] relative overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Contact Info matching Digiplus */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-widest text-[#f5a623] uppercase mb-4">
              <span>CONTACT US</span>
              <span className="w-8 h-[2px] bg-[#f5a623]"></span>
            </div>

            <h2 className="dp-section-title mb-6">
              Book An <br />
              <span>Appointment</span>
            </h2>

            <p className="text-base text-[#555a64] leading-relaxed mb-10">
              Claim your free technical consultation and ad account growth audit with our engineering guild.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#f5a623] text-[#0e0f14] flex items-center justify-center text-lg flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#888] tracking-wider block">Call Anytime</span>
                  <a href="tel:+918309275093" className="text-base font-black text-[#111216] font-heading hover:text-[#f5a623] transition-colors">
                    +91 83092 75093
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-black/5 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-[#0e0f14] text-[#f5a623] flex items-center justify-center text-lg flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-[11px] uppercase font-bold text-[#888] tracking-wider block">Email Address</span>
                  <a href="mailto:hello@adyantra.in" className="text-base font-black text-[#111216] font-heading hover:text-[#f5a623] transition-colors">
                    hello@adyantra.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-[32px] bg-white border border-black/5 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#f5a623] text-[#0e0f14] flex items-center justify-center text-2xl mx-auto mb-4 font-black">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#111216]">
                    Appointment Booked!
                  </h3>
                  <p className="text-sm text-[#555a64] mt-2">
                    Our lead engineer will reach out to you within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs font-bold uppercase tracking-wider text-[#f5a623] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-[#faf7f2] border border-black/5 focus:border-[#f5a623] outline-none text-sm transition-all"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-[#faf7f2] border border-black/5 focus:border-[#f5a623] outline-none text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#faf7f2] border border-black/5 focus:border-[#f5a623] outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Write a Message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl bg-[#faf7f2] border border-black/5 focus:border-[#f5a623] outline-none text-sm transition-all"
                    ></textarea>
                  </div>

                  <button type="submit" className="dp-btn w-full justify-center text-center mt-4">
                    <span>Send A Message</span>
                    <div className="dp-btn-arrow">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-7.85-1.42 1.42 5.43 5.43H5v2z"/>
                      </svg>
                    </div>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
