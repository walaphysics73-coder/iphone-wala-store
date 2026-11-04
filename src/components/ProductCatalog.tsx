"use client";

import React from "react";
import { PRODUCTS_DATA } from "@/data/products";
import { ArrowRight, CreditCard } from "lucide-react";

interface CatalogProps {
  lang: "en" | "hi";
}

export default function ProductCatalog({ lang }: CatalogProps) {
  return (
    <div className="w-full max-w-md flex flex-col py-2 z-10 relative">
      
      {/* Section Header */}
      <div className="px-5 flex items-center justify-between mb-2">
        <h3 className="text-xl font-black tracking-tight text-white">
          {lang === "en" ? "Flagship Deals" : "फ्लैगशिप डील्स"}
        </h3>
        <span className="text-[11px] font-bold text-gray-500 flex items-center gap-1 uppercase tracking-widest">
          {lang === "en" ? "Swipe" : "स्वाइप करें"} <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>

      {/* Horizontal Scroll Container (App Style) */}
      <div className="w-full flex overflow-x-auto gap-4 px-5 pb-8 pt-4 snap-x snap-mandatory no-scrollbar">
        {PRODUCTS_DATA.map((product) => (
          <div 
            key={product.id} 
            className="relative shrink-0 w-[260px] snap-center flex flex-col items-center rounded-[32px] bg-midnight-surface/60 backdrop-blur-xl border border-white/5 p-6 cursor-pointer group hover:border-white/20 transition-all duration-500 overflow-hidden"
          >
            {/* Dynamic Product Glow (Subtle) */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"
              style={{ backgroundColor: product.accentColor }}
            />

            {/* EMI Top Badge */}
            <div className="w-full flex justify-start mb-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-white/5 text-white border border-white/10 backdrop-blur-md">
                <CreditCard className="w-3 h-3 text-luxury-cyan" />
                {lang === "en" ? "0% EMI Available" : "0% EMI उपलब्ध"}
              </span>
            </div>

            {/* Product Image with Float & Zoom (White Card Background) */}
            <div className="h-44 w-full flex items-center justify-center mb-6 z-10 relative bg-white/95 rounded-2xl p-4 shadow-inner">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Product Info */}
            <div className="w-full flex flex-col z-10 mt-auto">
              <h4 className="text-lg font-black text-white leading-tight mb-1.5">
                {product.name}
              </h4>
              <p className="text-[11px] text-gray-400 font-medium mb-5 line-clamp-2">
                {lang === "en" ? product.tagline : product.taglineHi}
              </p>
              
              <div className="flex items-end justify-between">
                <div className="flex flex-col">
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest font-black mb-1">
                    {lang === "en" ? "From" : "शुरुआत"}
                  </span>
                  <span className="text-xl font-black text-white">
                    {product.price}
                  </span>
                </div>
                
                {/* Action Button */}
                <button 
                  className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-luxury-cyan transition-colors duration-500"
                  aria-label="View Deal"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}