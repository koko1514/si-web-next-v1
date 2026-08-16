"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";

const CustomCoin = dynamic(() => import("./CustomCoin"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse text-white/50 font-lora text-sm">
      SI | ITHB
    </div>
  ),
});

export function HeroSection() {
  const [btnMousePos, setBtnMousePos] = useState({ x: 0, y: 0 });

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setBtnMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden pt-24 pb-16 lg:py-0 bg-[#1E3A8A]"
    >
      {/* Background Grid Pattern (Extremely subtle) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(white 1px, transparent 1px),
                            linear-gradient(90deg, white 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-10 xl:gap-14">
          {/* Left Column: Editorial Headings & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[48%] flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block tracking-widest text-[11px] sm:text-xs md:text-sm font-semibold uppercase text-accent"
            >
              Program Studi Sarjana
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-lora text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Sistem Informasi
              <br />
              Institut Teknologi Harapan Bangsa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed font-inter"
            >
              Mendidik pemimpin masa depan yang berstandar global, berkarakter
              unggul, dan siap membawa perubahan positif di era transformasi
              digital.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex justify-center lg:justify-start items-center"
            >
              <a
                href="https://www.ithb.ac.id/sistem-informasi"
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleBtnMouseMove}
                className="group relative overflow-hidden border border-white bg-transparent rounded-none font-semibold px-8 py-5 inline-flex items-center justify-center gap-2 w-full sm:w-auto text-base cursor-pointer"
              >
                {/* Mouse-aware Radial Expand Fill */}
                <span
                  className="absolute rounded-full bg-white transition-transform duration-700 ease-out pointer-events-none -translate-x-1/2 -translate-y-1/2 scale-0 group-hover:scale-[3.5]"
                  style={{
                    left: `${btnMousePos.x}px`,
                    top: `${btnMousePos.y}px`,
                    width: "300px",
                    height: "300px",
                  }}
                />
                <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-[#1E3A8A] transition-colors duration-300 font-semibold">
                  Mulai Perjalananmu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[48%] flex justify-center lg:justify-end items-center shrink-0"
          >
            <div className="relative w-[85vw] h-[85vw] max-w-[380px] max-h-[380px] sm:w-[440px] sm:h-[440px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] xl:w-[600px] xl:h-[600px] 2xl:w-[660px] 2xl:h-[660px]">
              {/* Dynamic Ground Drop Shadow (positioned outside wrapper, synced with 3D float) */}
              <motion.div
                animate={{
                  scale: [0.9, 1.08, 0.9],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.188,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 w-[70%] h-[30px] rounded-[100%] bg-black/60 blur-2xl pointer-events-none z-0"
              />

              {/* Pembungkus koin 3D dengan inset negatif meluap di semua sisi */}
              <div className="absolute -inset-10 sm:-inset-14 md:-inset-18 lg:-inset-24 z-50 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full cursor-grab active:cursor-grabbing pointer-events-auto">
                  <CustomCoin />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer group z-30"
        onClick={() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-[10px] sm:text-xs text-slate-300/70 group-hover:text-white transition-colors tracking-widest uppercase font-medium">
          Scroll Down
        </span>
        <div className="w-5 h-9 sm:w-6 sm:h-10 rounded-full border-2 border-slate-300/40 group-hover:border-accent flex justify-center pt-2 transition-colors">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1 sm:w-1.5 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  );
}
