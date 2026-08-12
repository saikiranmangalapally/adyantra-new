import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        surface: "#09090b", // zinc-950
        "surface-2": "#18181b", // zinc-900
        border: "rgba(255, 255, 255, 0.1)",
        "border-hover": "rgba(255, 255, 255, 0.2)",
        primary: "#FFFFFF",
        "primary-foreground": "#000000",
        accent: "#3b82f6", // Subtle blue accent for specific highlights
        muted: "#a1a1aa", // zinc-400
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": ["5.5rem", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "600" }],
        "display": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" }],
        "h1": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "h2": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "600" }],
        "h3": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
        "h4": ["1.25rem", { lineHeight: "1.35", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        "label": ["0.75rem", { lineHeight: "1", letterSpacing: "0.05em", fontWeight: "500" }],
      },
      borderRadius: {
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        "glow-subtle": "0 0 20px rgba(255, 255, 255, 0.05)",
        "glow-accent": "0 0 30px rgba(59, 130, 246, 0.2)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-subtle": "linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
