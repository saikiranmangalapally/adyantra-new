"use client";

import React from "react";
import { usePathname } from "next/navigation";
import KPHeader from "@/components/kanakkupillai/KPHeader";
import KPFooter from "@/components/kanakkupillai/KPFooter";

export function ConditionalNavbar() {
  const pathname = usePathname();
  // On the home page, KPHeader is directly rendered in app/page.tsx
  if (pathname === "/") return null;
  return <KPHeader />;
}

export function ConditionalFooter() {
  const pathname = usePathname();
  // On the home page, KPFooter is directly rendered in app/page.tsx
  if (pathname === "/") return null;
  return <KPFooter />;
}
