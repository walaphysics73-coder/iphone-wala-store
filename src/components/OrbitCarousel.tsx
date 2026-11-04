"use client";

import React, { useState, useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Environment, ContactShadows, useGLTF } from "@react-three/drei";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { PRODUCTS_DATA, Product } from "@/data/products";

// 1. असली 3D मॉडल लोड करने का कंपोनेंट
function Real3DModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <primitive object={scene} scale={1.2} position={[0, -0.5, 0]} />
    </Float>
  );
}

// 2. अगर 3D मॉडल नहीं है, तो इमेज को 3D ग्लास कार्ड पर दिखाना
function GlassCardFallback({ image, color }: { image: string; color: string }) {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 3.5, 0.05]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          metalness={0.2}
          roughness={0.1}
          transmission={0.9} // Glass effect
          ior={1.5}
          thickness={0.5}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

// लोडिंग स्टेट
function LoaderFallback() {
  return (
    <mesh>
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial color="#333" wireframe />
    </mesh>
  );
}

interface OrbitProps {
  onSelectProduct: (product: Product) => void;
  lang: "en" | "hi";
}

export default function OrbitCarousel({ onSelectProduct, lang }: OrbitProps) {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentProduct = PRODUCTS_DATA[activeIndex];

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % PRODUCTS_DATA.length;
    setActiveIndex(nextIdx);
    onSelectProduct(PRODUCTS_DATA[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + PRODUCTS_DATA.length) % PRODUCTS_DATA.length;
    setActiveIndex(prevIdx);
    onSelectProduct(PRODUCTS_DATA[prevIdx]);
  };

  if (!mounted) {
    return <div className="min-h-[580px] w-full flex items-center justify-center text-sm text-gray-400">Loading 3D Engine...</div>;
  }

  return (
    <div className="relative w-full min-h-[580px] flex flex-col items-center justify-between py-6 overflow-hidden select-none">
      
      {/* Dynamic Ambient Aura */}
      <div
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full blur-[90px] pointer-events-none transition-all duration-700 ease-out z-0"
        style={{ background: currentProduct.glowColor }}
      />

      {/* Top Header */}
      <div className="z-10 flex flex-col items-center gap-2 px-4 text-center">
        <span
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-sm border border-black/5"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", color: currentProduct.accentColor }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          {lang === "en" ? currentProduct.badge : currentProduct.badgeHi}
        </span>
        <h2 className="text-3xl font-black tracking-tight text-gray-950">
          {currentProduct.name}
        </h2>
        <p className="text-xs text-gray-600 max-w-[300px] font-medium leading-relaxed">
          {lang === "en" ? currentProduct.tagline : currentProduct.taglineHi}
        </p>
      </div>

      {/* 3D Canvas Scene */}
      <div className="relative z-10 w-full max-w-sm h-[320px] cursor-grab active:cursor-grabbing">
        
        {/* Fallback image (behind canvas) for products without 3D models */}
        {!currentProduct.modelUrl && (
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
             <img 
               src={currentProduct.image} 
               alt={currentProduct.name} 
               className="max-w-[200px] max-h-[200px] object-contain drop-shadow-2xl" 
             />
           </div>
        )}

        <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} className="z-10">
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          
          <Suspense fallback={<LoaderFallback />}>
            {currentProduct.modelUrl ? (
              <Real3DModel url={currentProduct.modelUrl} />
            ) : (
              <GlassCardFallback image={currentProduct.image} color={currentProduct.accentColor} />
            )}
          </Suspense>

          {/* Dynamic Shadow */}
          <ContactShadows position={[0, -1.8, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color={currentProduct.accentColor} />
          
          <Environment preset="city" />
          <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.8} />
        </Canvas>

        {/* Navigation Paddles */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-black/10 shadow-lg flex items-center justify-center active:scale-90 transition-transform backdrop-blur-md z-20"
        >
          <ChevronLeft className="w-5 h-5 text-gray-800" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 border border-black/10 shadow-lg flex items-center justify-center active:scale-90 transition-transform backdrop-blur-md z-20"
        >
          <ChevronRight className="w-5 h-5 text-gray-800" />
        </button>
      </div>

      {/* Indicator */}
      <div className="z-10 flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-black/5 shadow-sm">
        {PRODUCTS_DATA.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => { setActiveIndex(idx); onSelectProduct(PRODUCTS_DATA[idx]); }}
            className={`transition-all duration-300 rounded-full ${idx === activeIndex ? "w-7 h-2" : "w-2 h-2 bg-gray-300"}`}
            style={{ backgroundColor: idx === activeIndex ? currentProduct.accentColor : undefined }}
          />
        ))}
      </div>
    </div>
  );
}