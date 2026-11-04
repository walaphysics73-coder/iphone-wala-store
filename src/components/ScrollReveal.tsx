"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function ScrollReveal({ children, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }} // स्क्रीन में आते ही ट्रिगर होगा
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // Apple-like ultra-smooth easing
        delay: delay 
      }}
      className="w-full flex justify-center"
    >
      {children}
    </motion.div>
  );
}