"use client";

import React from "react";
import { Smartphone, Tv, Wind, Percent, ArrowUpRight, Zap } from "lucide-react";

interface BentoProps {
  lang: "en" | "hi";
}

export default function BentoGrid({ lang }: BentoProps) {
  return (
    <div className="w-full max-w-md px-5 py-8 flex flex-col gap-4 z-10 relative">
      
      {/* Section Header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <h3 className="text-xl font-black tracking-tight text-white">
          {lang === "en" ? "Explore Store" : "स्टोर एक्सप्लोर करें"}
        </h3>
        <span className="text-[11px] font-bold text-gray-400 flex items-center gap-1 cursor-pointer hover:text-luxury-cyan transition-colors">
          {lang === "en" ? "View All" : "सभी देखें"} <ArrowUpRight className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-2 gap-3.5">
        
        {/* Card 1: Flagship Phones (Span 2) */}
        <div className="col-span-2 relative overflow-hidden rounded-[32px] bg-midnight-surface/60 backdrop-blur-xl border border-white/5 p-6 flex items-center justify-between cursor-pointer group hover:border-luxury-cyan/30 transition-all duration-500 active:scale-[0.98]">
          <div className="flex flex-col z-10 relative">
            <span className="text-[9px] font-black tracking-widest uppercase text-luxury-cyan mb-1.5 flex items-center gap-1">
              <Zap className="w-3 h-3 fill-luxury-cyan" /> Bestseller
            </span>
            <h4 className="text-2xl font-black text-white leading-none mb-1">
              {lang === "en" ? "Smartphones" : "स्मार्टफोन्स"}
            </h4>
            <p className="text-[11px] text-gray-400 mt-1 max-w-[140px]">
              {lang === "en" ? "Apple, Samsung & Premium Androids" : "एप्पल, सैमसंग और प्रीमियम मॉडल्स"}
            </p>
          </div>
          
          {/* Icon & Glow */}
          <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center backdrop-blur-md z-10 border border-white/5 group-hover:bg-luxury-cyan/10 group-hover:scale-110 transition-all duration-500">
            <Smartphone className="w-8 h-8 text-white group-hover:text-luxury-cyan transition-colors duration-500" />
          </div>
          
          {/* Subtle Background Gradient */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-luxury-cyan/10 blur-[40px] rounded-full group-hover:bg-luxury-cyan/20 transition-all duration-700" />
        </div>

        {/* Card 2: Smart TVs (Span 1) */}
        <div className="col-span-1 relative overflow-hidden rounded-[28px] bg-midnight-surface/40 backdrop-blur-xl border border-white/5 p-5 flex flex-col justify-between aspect-square cursor-pointer group hover:border-white/15 transition-all duration-500 active:scale-[0.96]">
          <div className="w-10 h-10 rounded-2xl bg-black/50 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
            <Tv className="w-5 h-5 text-gray-200 group-hover:text-white" />
          </div>
          <div className="mt-4 z-10">
            <h4 className="text-lg font-black text-white leading-tight">
              {lang === "en" ? "Smart TVs" : "स्मार्ट टीवी"}
            </h4>
            <p className="text-[10px] text-gray-500 mt-1 font-medium tracking-wide uppercase">
              OLED & 4K
            </p>
          </div>
        </div>

        {/* Card 3: Air Conditioners (Span 1) */}
        <div className="col-span-1 relative overflow-hidden rounded-[28px] bg-midnight-surface/40 backdrop-blur-xl border border-white/5 p-5 flex flex-col justify-between aspect-square cursor-pointer group hover:border-white/15 transition-all duration-500 active:scale-[0.96]">
          <div className="w-10 h-10 rounded-2xl bg-black/50 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500">
            <Wind className="w-5 h-5 text-gray-200 group-hover:text-white" />
          </div>
          <div className="mt-4 z-10">
            <h4 className="text-lg font-black text-white leading-tight">
              {lang === "en" ? "Cooling" : "एयर कंडीशनर"}
            </h4>
            <p className="text-[10px] text-gray-500 mt-1 font-medium tracking-wide uppercase">
              Inverter ACs
            </p>
          </div>
        </div>

        {/* Card 4: Store Offers (Span 2) */}
        <div className="col-span-2 relative overflow-hidden rounded-[28px] bg-gradient-to-r from-midnight-surface to-[#0a1515] border border-luxury-cyan/20 p-5 flex items-center gap-4 cursor-pointer group hover:border-luxury-cyan/50 transition-all duration-500 active:scale-[0.98]">
          <div className="w-12 h-12 rounded-full bg-luxury-cyan/10 flex items-center justify-center shrink-0 border border-luxury-cyan/30 group-hover:bg-luxury-cyan/20 transition-colors duration-500">
            <Percent className="w-5 h-5 text-luxury-cyan" />
          </div>
          <div className="flex flex-col">
            <h4 className="text-sm font-black text-white mb-0.5">
              {lang === "en" ? "Store Exclusive Deals" : "स्टोर एक्सक्लूसिव डील्स"}
            </h4>
            <p className="text-[10px] text-gray-400 font-medium leading-snug">
              {lang === "en" 
                ? "Get best exchange value & 0% No-Cost EMI on top brands." 
                : "एक्सचेंज पर बेस्ट वैल्यू और टॉप ब्रांड्स पर 0% EMI पाएं।"}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}