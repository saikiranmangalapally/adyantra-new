import Link from "next/link";
import { cn } from "@/lib/utils";

/* ============================================================
   SECTION WRAPPER
   ============================================================ */
export default function SectionWrapper({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("section-padding", className)}>
      <div className="container-xl">{children}</div>
    </section>
  );
}
