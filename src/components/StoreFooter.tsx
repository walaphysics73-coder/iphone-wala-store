"use client";

import React from "react";
import { ShieldCheck, MapPin } from "lucide-react";

interface FooterProps {
  lang: "en" | "hi";
}

export default function StoreFooter({ lang }: FooterProps) {
  return (
    <footer className="w-full max-w-md flex flex-col items-center px-5 pt-12 pb-36 text-center z-10 relative">
      
      {/* Brand Icon */}
      <div className="w-14 h-14 rounded-full bg-midnight-surface flex items-center justify-center border border-white/5 mb-4 shadow-lg">
        <ShieldCheck className="w-7 h-7 text-luxury-cyan" />
      </div>
      
      {/* Brand Name */}
      <h2 className="text-2xl font-black text-white tracking-tight mb-3">
        iPhone <span className="text-luxury-cyan">Wala</span>
      </h2>
      
      {/* Tagline */}
      <p className="text-xs text-gray-400 leading-relaxed mb-8 max-w-[280px]">
        {lang === "en" 
          ? "Pokaran's most trusted destination for premium electronics, Apple devices, and smart home appliances." 
          : "प्रीमियम इलेक्ट्रॉनिक्स, एप्पल डिवाइस और होम अप्लायंसेज के लिए पोकरण का सबसे भरोसेमंद शोरूम।"}
      </p>
      
      {/* Location Box */}
      <div className="flex items-start gap-3 p-5 rounded-[24px] bg-midnight-surface/50 border border-white/5 text-left w-full backdrop-blur-sm">
        <div className="w-8 h-8 rounded-full bg-luxury-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
          <MapPin className="w-4 h-4 text-luxury-cyan" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-black text-white mb-1 tracking-wide uppercase">
            {lang === "en" ? "Visit Store" : "स्टोर आएं"}
          </span>
          <span className="text-[11px] text-gray-400 leading-relaxed">
            Nehru Colony, Jaisalmer Road<br/>
            Near Paliwal Dharm Kanta<br/>
            Pokaran, Rajasthan
          </span>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-10 flex flex-col items-center gap-1">
        <span className="text-[9px] text-gray-600 font-bold tracking-widest uppercase">
          © 2026 iPhone Wala
        </span>
        <span className="text-[9px] text-gray-700 font-medium tracking-wide">
          Designed by WebNexa
        </span>
      </div>
    </footer>
  );
}