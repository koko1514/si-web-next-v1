"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function CampusTourSection() {
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

            {/* Direct Native YouTube Player Frame Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="w-full md:w-[88%] lg:w-[85%] md:ml-auto aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-black shadow-2xl border border-white/10 relative z-10"
            >
              <iframe
                src="https://www.youtube-nocookie.com/embed/kYv9G_k7p9c?rel=0"
                title="Stories Behind The Building: Virtual Campus Tour ITHB | Cerita sukses di balik gedung kampus terbaik"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
