import type { Metadata } from "next";
import { urbanist } from "@/lib/fonts";
import "./globals.css";
import { ConditionalNavbar, ConditionalFooter } from "@/components/layout/ConditionalNavFooter";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adyantra Digital | AI Automation & Performance Digital Marketing Agency",
  description: "Technology-first digital marketing and AI automation agency. Specializing in Meta Ads, Google Ads, Next.js Web Software, Technical SEO, and AI Chatbot Workflows.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${urbanist.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="bg-white text-[#1e3238] antialiased min-h-screen flex flex-col font-sans">
        <ConditionalNavbar />
        <main className="flex-1 flex flex-col relative font-sans">{children}</main>
        <ConditionalFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
