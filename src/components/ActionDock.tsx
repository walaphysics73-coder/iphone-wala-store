"use client";

import React from "react";
import { Phone, MessageCircle, Navigation2 } from "lucide-react";

interface DockProps {
  lang: "en" | "hi";
}

export default function ActionDock({ lang }: DockProps) {
  // आपके बिज़नेस/स्टोर का नंबर
  const storePhone = "+918619089899";
  
  const whatsappMsg = encodeURIComponent(
    lang === "en" 
      ? "Hello iPhone Wala, I want to know about the latest store offers!" 
      : "नमस्ते iPhone वाला, मुझे लेटेस्ट ऑफर्स के बारे में जानना है!"
  );
  
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 px-5 flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-2 p-2 rounded-full bg-midnight-surface/80 backdrop-blur-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
        
        {/* Call Button */}
        <a 
          href={`tel:${storePhone}`} 
          className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 transition-all"
        >
          <Phone className="w-5 h-5 text-gray-300 mb-1" />
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Call</span>
        </a>

        {/* WhatsApp Button (Primary CTA) */}
        <a 
          href={`https://wa.me/${storePhone}?text=${whatsappMsg}`} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-3 px-6 h-14 rounded-full bg-luxury-cyan/10 border border-luxury-cyan/30 hover:bg-luxury-cyan/20 active:scale-95 transition-all group"
        >
          <MessageCircle className="w-6 h-6 text-luxury-cyan group-hover:scale-110 transition-transform" />
          <div className="flex flex-col">
            <span className="text-[11px] font-black tracking-widest uppercase text-luxury-cyan">
              {lang === "en" ? "WhatsApp" : "व्हाट्सएप"}
            </span>
            <span className="text-[9px] font-medium text-luxury-cyan/70">
              {lang === "en" ? "Instant Reply" : "तुरंत जवाब"}
            </span>
          </div>
        </a>

       {/* Map/Direction Button */}
        <a 
          href="https://maps.app.goo.gl/sabR2ZJgVFaYrdbw7" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex flex-col items-center justify-center w-14 h-14 rounded-full bg-white/5 hover:bg-white/10 active:scale-95 transition-all"
        >
          <Navigation2 className="w-5 h-5 text-gray-300 mb-1" />
          <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Map</span>
        </a>
      </div>
    </div>
  );
}