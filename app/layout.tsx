import type { Metadata } from "next";
import { jakarta, dmMono } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const metadata: Metadata = {
  title: "Adyantra Digital | AI Automation & Performance Digital Marketing Agency",
  description: "Technology-first digital marketing and AI automation agency. Specializing in Meta Ads, Google Ads, Next.js Web Software, Technical SEO, and AI Chatbot Workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${jakarta.variable} ${dmMono.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col relative">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
