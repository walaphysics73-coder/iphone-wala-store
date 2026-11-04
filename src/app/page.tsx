"use client";

import React, { useState } from "react";
import HeroShowcase from "@/components/HeroShowcase";
import BentoGrid from "@/components/BentoGrid";
import ProductCatalog from "@/components/ProductCatalog";
import StoreFooter from "@/components/StoreFooter";
import ActionDock from "@/components/ActionDock";
import ScrollReveal from "@/components/ScrollReveal"; // <-- नया इम्पोर्ट
import { MapPin, Globe } from "lucide-react";

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "hi">("en");

  const toggleLanguage = () => {
    setLang((prev) => (prev === "en" ? "hi" : "en"));
  };

  return (
    <main className="min-h-screen bg-midnight text-white flex flex-col items-center relative overflow-hidden pb-24">
      
      {/* Navbar (Same) */}
      <header className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between px-5 py-4 bg-midnight/50 backdrop-blur-xl border-b border-midnight-border">
        <div className="flex flex-col">
          <span className="text-[9px] font-black tracking-[0.2em] uppercase text-gray-500">
            Official Store
          </span>
          <h1 className="text-xl font-black tracking-tight text-white">
            iPhone <span className="text-luxury-cyan">Wala</span>
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={toggleLanguage} className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-midnight-surface border border-midnight-border text-[11px] font-bold text-gray-300 active:scale-95 transition-all">
            <Globe className="w-3.5 h-3.5 text-luxury-cyan" />
            <span>{lang === "en" ? "EN" : "हि"}</span>
          </button>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-midnight-surface border border-midnight-border text-[11px] font-semibold text-gray-300">
            <MapPin className="w-3 h-3 text-luxury-cyan" />
            <span>Pokaran</span>
          </div>
        </div>
      </header>

      {/* 1. Hero Section */}
      <section className="w-full">
        <HeroShowcase lang={lang} />
      </section>

      {/* 2. Bento Grid 2.0 - With Scroll Reveal */}
      <ScrollReveal delay={0.1}>
        <section className="w-full flex justify-center mt-[-40px]"> 
          <BentoGrid lang={lang} />
        </section>
      </ScrollReveal>

      {/* 3. Horizontal Product Catalog - With Scroll Reveal */}
      <ScrollReveal delay={0.2}>
        <section className="w-full flex justify-center mt-2">
          <ProductCatalog lang={lang} />
        </section>
      </ScrollReveal>

      {/* 4. Trust Footer - With Scroll Reveal */}
      <ScrollReveal delay={0.1}>
        <section className="w-full flex justify-center mt-4">
          <StoreFooter lang={lang} />
        </section>
      </ScrollReveal>

      {/* 5. Floating Action Dock */}
      <ActionDock lang={lang} />
      
    </main>
  );
}