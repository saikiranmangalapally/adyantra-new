import { Variants } from "framer-motion";

// ============================================================
// PAGE TRANSITIONS
// ============================================================

export const pageVariant: Variants = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    filter: "blur(10px)",
    transition: { duration: 0.4 },
  },
};

// ============================================================
// SECTION REVEALS (Spring Physics)
// ============================================================

export const sectionVariant: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, mass: 1 },
  },
};

export const sectionVariantFast: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

// ============================================================
// STAGGER CONTAINERS
// ============================================================

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// ============================================================
// ADVANCED TEXT REVEALS
// ============================================================

export const letterVariant: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 150, damping: 15 },
  },
};

export const wordVariant: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

// ============================================================
// CARD ITEMS & BENTO GRIDS
// ============================================================

export const cardItem: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 18 },
  },
};

export const bentoItem: Variants = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 110, damping: 20 },
  },
};

// ============================================================
// DIRECTIONAL SLIDES
// ============================================================

export const slideLeft: Variants = {
  hidden: { x: -80, opacity: 0, filter: "blur(8px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

export const slideRight: Variants = {
  hidden: { x: 80, opacity: 0, filter: "blur(8px)" },
  visible: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

export const slideUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0, filter: "blur(10px)" },
  visible: {
    scale: 1,
    opacity: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 20 },
  },
};

// ============================================================
// HOVER STATES (for motion.div whileHover)
// ============================================================

import type { TargetAndTransition } from "framer-motion";

export const cardHover: TargetAndTransition = {
  scale: 1.03,
  y: -6,
  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

export const btnHover: TargetAndTransition = {
  scale: 1.05,
  boxShadow: "0 10px 25px -5px rgba(15, 115, 188, 0.4)",
  transition: { type: "spring", stiffness: 400, damping: 15 },
};

export const iconHover: TargetAndTransition = {
  rotate: 15,
  scale: 1.2,
  transition: { type: "spring", stiffness: 300, damping: 15 },
};

// ============================================================
// FADE IN (simple)
// ============================================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

// ============================================================
// MOBILE MENU
// ============================================================

export const mobileMenuVariant: Variants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: { duration: 0.3, ease: [0.36, 0, 0.66, 0] },
  },
};

export const mobileNavItem: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

// ============================================================
// ACCORDION
// ============================================================

export const accordionVariant: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: [0.36, 0, 0.66, 0] },
  },
};

// ============================================================
// DROPDOWN
// ============================================================

export const dropdownVariant: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.2 },
  },
};
