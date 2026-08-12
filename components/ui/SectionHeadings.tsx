import { cn } from "@/lib/utils";

/* ============================================================
   SECTION LABEL (Eyebrow)
   DM Mono, accent color, tracking-widest
   ============================================================ */
export function SectionLabel({
  children,
  className = "",
  color, // temporary for old pages
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  return (
    <div className={cn("eyebrow mb-4", className)}>
      {children}
    </div>
  );
}

/* ============================================================
   SECTION HEADING
   DM Serif Display, large
   ============================================================ */
export function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("font-display text-h2 text-text-main mb-4", className)}>
      {children}
    </h2>
  );
}

/* ============================================================
   SECTION SUBHEADING
   DM Sans, muted
   ============================================================ */
export function SectionSubheading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("text-body-lg text-muted max-w-2xl mx-auto", className)}>
      {children}
    </p>
  );
}
