"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { GradientButton } from "@/components/ui/Buttons";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "AI Automation",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "AI Automation",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-body-sm font-medium text-text-main">
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-text-main placeholder-muted focus:outline-none focus:border-primary-glow focus:ring-1 focus:ring-primary-glow transition-all"
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-body-sm font-medium text-text-main">
            Work Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-text-main placeholder-muted focus:outline-none focus:border-primary-glow focus:ring-1 focus:ring-primary-glow transition-all"
            placeholder="john@company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="company" className="text-body-sm font-medium text-text-main">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-text-main placeholder-muted focus:outline-none focus:border-primary-glow focus:ring-1 focus:ring-primary-glow transition-all"
            placeholder="Acme Corp"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="service" className="text-body-sm font-medium text-text-main">
            Service of Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-text-main focus:outline-none focus:border-primary-glow focus:ring-1 focus:ring-primary-glow transition-all appearance-none"
          >
            <option value="AI Automation">AI & Automation</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="Web Development">Web & Software Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Branding">Branding & Creative</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-body-sm font-medium text-text-main">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-surface-2 border border-border rounded-xl px-4 py-3 text-text-main placeholder-muted focus:outline-none focus:border-primary-glow focus:ring-1 focus:ring-primary-glow transition-all resize-none"
          placeholder="Tell us about your project, goals, and timeline..."
        />
      </div>

      <GradientButton 
        type="submit" 
        size="lg" 
        className="w-full justify-center"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </GradientButton>
    </form>
  );
}
