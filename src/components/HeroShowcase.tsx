"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";

interface HeroProps {
  lang: "en" | "hi";
}

export default function HeroShowcase({ lang }: HeroProps) {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 1. Cinematic Spotlight Background (Deep Cyan Glow) */}
      <div className="absolute top-0 w-[150%] max-w-2xl h-[400px] bg-luxury-cyan/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 z-0" />

      {/* 2. Premium Top Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center gap-4 px-5 text-center mt-10"
      >
        <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-black tracking-[0.2em] uppercase bg-midnight-surface/80 backdrop-blur-xl border border-luxury-cyan/30 text-luxury-cyan shadow-[0_0_20px_rgba(0,242,254,0.15)]">
          <Sparkles className="w-3.5 h-3.5" />
          {lang === "en" ? "The Future is Here" : "भविष्य अब यहाँ है"}
        </span>

        {/* 3. Huge Cinematic Typography */}
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
          iPhone <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-luxury-cyan to-blue-500">
            Wala
          </span>
        </h1>
        
        <p className="text-sm md:text-base text-gray-400 max-w-[300px] font-medium leading-relaxed">
          {lang === "en" 
            ? "Pokaran's Biggest Premium Showroom. Experience luxury technology." 
            : "पोकरण का सबसे बड़ा प्रीमियम शोरूम। लग्जरी टेक्नोलॉजी का अनुभव करें।"}
        </p>
      </motion.div>

     {/* 4. Floating Flagship Device (Real Image Fixed) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
        transition={{ 
          opacity: { duration: 1, delay: 0.2 },
          scale: { duration: 1, delay: 0.2, ease: "easeOut" },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }
        }}
        className="relative z-10 mt-8 w-full max-w-sm flex justify-center perspective-[1000px]"
      >
        {/* White Glass Card for the Real Amazon JPG Image */}
        <div className="w-56 md:w-64 aspect-[4/5] bg-white rounded-[40px] p-6 flex items-center justify-center shadow-[0_20px_50px_rgba(0,242,254,0.2)] z-20">
          <img
            src="https://m.media-amazon.com/images/I/81Os1SDWpcL._SX679_.jpg"
            alt="Real iPhone 15 Pro Max"
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>
        {/* Dark Ground Shadow */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 bg-luxury-cyan/10 blur-[15px] rounded-[100%] z-10" />
      </motion.div>
      {/* 5. Scroll Indicator (Bouncing) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-8 flex flex-col items-center gap-2 text-gray-500 z-10"
      >
        <span className="text-[10px] tracking-widest uppercase font-bold">Scroll</span>
        <ArrowDown className="w-4 h-4 text-luxury-cyan" />
      </motion.div>
    </div>
  );
}