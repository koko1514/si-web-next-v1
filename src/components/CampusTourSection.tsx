"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink, X } from "lucide-react";

export function CampusTourSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="tour"
      className="section-padding bg-slate-950 relative overflow-hidden"
    >
      {/* Background Subtle Glow & Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#1E3A8A]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center relative">
          {/* Main Video Frame & Overlapping Left Floating Card */}
          <div className="relative w-full flex items-center justify-center py-6 md:py-10">
            {/* Overlapping Floating Card (Website Brand Navy #1E3A8A & Amber Gold Accent) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 lg:left-4 z-40 w-full md:w-[340px] lg:w-[380px] mb-6 md:mb-0 pointer-events-auto"
            >
              <a
                href="https://youtu.be/s3nJ9gU1m5g?si=URYdaLzG1v60c1vG"
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-br from-[#1E3A8A] via-[#1E3B8B] to-[#0F172A] hover:from-[#2546A5] hover:to-[#172554] text-white p-8 md:p-10 shadow-2xl transition-all duration-300 cursor-pointer rounded-2xl border border-amber-500/30 hover:border-amber-400/60"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                  Virtual Tour
                </span>

                <h2 className="font-lora text-3xl sm:text-4xl lg:text-[40px] text-white mb-4 leading-tight font-bold">
                  Jelajahi Kampus
                </h2>

                <p className="text-slate-200/90 text-sm sm:text-base leading-relaxed font-sans mb-6">
                  Temukan cerita inspiratif di balik Gedung ITHB, Kampus IT Top
                  untuk kuliah di Bandung.
                </p>

                <div className="flex items-center gap-2 text-accent font-semibold text-sm group-hover:text-amber-300 transition-colors">
                  <span>Tonton di YouTube</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </motion.div>

            {/* Video Frame Preview with Click-to-Play Trigger */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              onClick={() => setIsVideoOpen(true)}
              className="w-full md:w-[88%] lg:w-[85%] md:ml-auto aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-2xl border border-white/10 relative z-10 group cursor-pointer"
            >
              {/* Background Thumbnail Poster */}
              <div
                className="relative w-full h-full bg-cover bg-center flex items-center justify-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1600&q=80')`,
                }}
              >
                {/* Dark Vignette Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Glowing Play Button Trigger */}
                <div className="relative z-20 flex flex-col items-center gap-4">
                  <button
                    aria-label="Play Campus Tour Video"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.6)] group-hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 fill-current ml-1" />
                  </button>
                  <span className="text-white font-semibold text-sm sm:text-base tracking-wide shadow-text bg-black/60 px-5 py-2 rounded-full backdrop-blur-md border border-white/20">
                    Stories Behind The Building: Virtual Campus Tour ITHB
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal upon User Click (Bypasses YouTube Embedding Block) */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-[110] cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src="https://www.youtube.com/embed/s3nJ9gU1m5g?autoplay=1"
                title="Stories Behind The Building: Virtual Campus Tour ITHB | Cerita sukses di balik gedung kampus terbaik"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
