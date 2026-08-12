"use client";

import { motion } from "framer-motion";

export default function BlogHubPage() {
  return (
    <div className="flex flex-col w-full min-h-[70vh] items-center justify-center pt-32 pb-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-title text-center mb-6">
            <div className="sub-title bg-color-2 mb-3 mx-auto">
              <span>OUR INSIGHTS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mt-4">
              Coming Soon
            </h1>
          </div>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            We are curating expert perspectives on digital marketing, engineering, design, and business growth. Check back soon for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
