import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

/* ============================================================
   SERVICE CARD
   Used in bento grids and service listings
   ============================================================ */
export function ServiceCard({
  icon,
  title,
  description,
  href,
  tag,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  tag?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "glass-card p-7 flex flex-col gap-5 group hover:-translate-y-1 transition-all duration-300",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        {tag && (
          <TagBadge>{tag}</TagBadge>
        )}
      </div>
      <div>
        <h3 className="font-heading text-h4 text-text-main mb-2 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-body-sm text-muted leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto flex items-center gap-2 text-body-sm font-heading font-semibold text-primary-glow group-hover:text-accent transition-colors">
        <span>Learn More</span>
        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}

/* ============================================================
   TAG BADGE
   Small pill-shaped tag
   ============================================================ */
export function TagBadge({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "accent" | "featured" | string;
  className?: string;
}) {
  const variants: Record<string, string> = {
    default: "bg-surface-2 border-border text-muted",
    accent: "bg-accent/10 border-accent/30 text-accent",
    featured: "bg-black text-white border-transparent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-caption font-mono font-medium uppercase tracking-wider border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

/* ============================================================
   ANIMATED BADGE
   Eyebrow badge with subtle pulse
   ============================================================ */
export function AnimatedBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill font-mono text-label tracking-widest text-accent",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      {children}
    </div>
  );
}

/* ============================================================
   STAT CARD
   For trust bar / stats sections
   ============================================================ */
export function StatCard({
  value,
  label,
  className = "",
}: {
  value: React.ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <div className="font-display text-h1 text-gradient mb-1">{value}</div>
      <div className="font-mono text-caption text-muted uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
