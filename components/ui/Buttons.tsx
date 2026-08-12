import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

/* ============================================================
   GRADIENT CTA BUTTON
   ============================================================ */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  size?: "sm" | "md" | "lg";
}

export function GradientButton({
  href,
  children,
  className = "",
  size = "md",
  onClick,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-sm",
  };

  const classes = cn(
    "btn-primary",
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

/* ============================================================
   GHOST / OUTLINE BUTTON
   ============================================================ */
export function GhostButton({
  href,
  children,
  className = "",
  size = "md",
  onClick,
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-7 py-3.5 text-sm",
    lg: "px-9 py-4 text-sm",
  };

  const classes = cn(
    "btn-ghost",
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}

/* ============================================================
   TEXT LINK BUTTON
   ============================================================ */
export function TextButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-heading font-semibold text-accent hover:text-primary-glow transition-colors group",
        className
      )}
    >
      {children}
      <ArrowRight
        size={14}
        className="transition-transform group-hover:translate-x-1"
      />
    </Link>
  );
}
