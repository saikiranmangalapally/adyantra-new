"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2, Check } from "lucide-react";

const serviceOptions = [
  "AI & Automation",
  "Performance Marketing",
  "Web Software Dev",
  "Technical SEO",
  "E-Commerce Growth",
  "Full Suite Growth",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedService, setSelectedService] = useState("AI & Automation");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      service: selectedService,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      toast.success("Message sent successfully!", {
        description: "Our senior team will get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error: any) {
      toast.error("Failed to send message", {
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Service Selection Chips */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-secondary mb-3">
          Select Service of Interest <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-2.5">
          {serviceOptions.map((service) => {
            const isSelected = selectedService === service;
            return (
              <button
                key={service}
                type="button"
                onClick={() => setSelectedService(service)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer border ${
                  isSelected
                    ? "bg-primary text-white border-primary shadow-sm scale-[1.02]"
                    : "bg-[#F8F9FD] text-secondary border-[#E2E4EB] hover:border-primary hover:bg-white"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      {/* Name & Email Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-secondary">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#F8F9FD] border border-[#E2E4EB] rounded-2xl px-4 py-3.5 text-sm text-secondary placeholder:text-[#9A98A6] focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-secondary">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#F8F9FD] border border-[#E2E4EB] rounded-2xl px-4 py-3.5 text-sm text-secondary placeholder:text-[#9A98A6] focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      {/* Phone & Company Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-secondary">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#F8F9FD] border border-[#E2E4EB] rounded-2xl px-4 py-3.5 text-sm text-secondary placeholder:text-[#9A98A6] focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
            placeholder="+91 83092 75093"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="company" className="text-xs font-bold uppercase tracking-wider text-secondary">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-[#F8F9FD] border border-[#E2E4EB] rounded-2xl px-4 py-3.5 text-sm text-secondary placeholder:text-[#9A98A6] focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all"
            placeholder="Acme Corp"
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-secondary">
          Message / Project Goals <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-[#F8F9FD] border border-[#E2E4EB] rounded-2xl px-4 py-3.5 text-sm text-secondary placeholder:text-[#9A98A6] focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all resize-none"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      {/* Submit Button - Shadcn Input Button Solid */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="shadcn-input-button-solid w-full justify-center !min-w-full !h-[56px] disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>
            {isSubmitting ? "Submitting Inquiry..." : "Send Message"}
          </span>
          <span className="badge-icon">
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
          </span>
        </button>
      </div>

      <p className="text-[12px] text-center text-muted-foreground font-medium flex items-center justify-center gap-2">
        <Check className="w-4 h-4 text-primary" /> 100% Confidential • Response within 24 hours
      </p>
    </form>
  );
}
