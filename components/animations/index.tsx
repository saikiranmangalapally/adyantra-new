"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ============================================================
   BLUR-IN TEXT ANIMATION
   Mimics motion-primitives BlurIn — text fades in from blur
   ============================================================ */
export function BlurIn({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(12px)", y: 8 }}
      animate={
        isInView
          ? { opacity: 1, filter: "blur(0px)", y: 0 }
          : { opacity: 0, filter: "blur(12px)", y: 8 }
      }
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   WORD SPLIT ANIMATION
   Each word animates in with stagger — blur-in variant
   ============================================================ */
export function WordSplit({
  text,
  className = "",
  delay = 0,
  stagger = 0.05,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "span" | "h1" | "h2" | "h3" | "p";
}) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <Tag ref={ref as any} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
          animate={
            isInView
              ? { opacity: 1, filter: "blur(0px)", y: 0 }
              : { opacity: 0, filter: "blur(8px)", y: 10 }
          }
          transition={{
            duration: 0.5,
            delay: delay + i * stagger,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </Tag>
  );
}

/* ============================================================
   STAGGER REVEAL CONTAINER
   Universal scroll-triggered stagger for children
   ============================================================ */
export function StaggerReveal({
  children,
  className = "",
  stagger = 0.08,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   FADE UP ITEM
   Individual child for StaggerReveal or standalone
   ============================================================ */
export function FadeUp({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   SCROLL REVEAL
   Simple scroll-triggered reveal wrapper
   ============================================================ */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const getInitial = () => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      default:
        return { opacity: 0, y: 30 };
    }
  };

  const getAnimate = () => {
    switch (direction) {
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getInitial()}
      animate={isInView ? getAnimate() : getInitial()}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ============================================================
   COUNTER ANIMATION
   Counts up a number when in viewport
   ============================================================ */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = Math.round(eased * end);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
