import Link from "next/link";
import { ArrowUpRight, MessageSquare } from "lucide-react";

export default function CTABanner({
  heading = "Ready to Transform Your Growth Architecture?",
  subheading = "Whether you need performance marketing, Next.js engineering, or 24/7 AI automation — let's start with a free strategy call.",
}: {
  heading?: string;
  subheading?: string;
  primaryCTA?: any;
  secondaryCTA?: any;
}) {
  return (
    <section className="relative py-20 overflow-hidden my-12">
      {/* Background Gradient Container */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1320px]">
        <div className="relative rounded-[32px] bg-gradient-to-r from-secondary via-slate-900 to-secondary p-8 md:p-14 text-white overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Background Ambient Orbs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-4 border border-cyan-500/30">
                <span>Scale Your Revenue</span>
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-4">
                {heading}
              </h2>
              <p className="text-slate-300 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
                {subheading}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4">
              <Link href="/contact" className="shadcn-input-button-solid">
                <span>Book Strategy Call</span>
                <span className="badge-icon">
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>

              <a
                href="https://wa.me/918309275093"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold text-sm transition-colors py-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
