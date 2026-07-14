"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, X } from "lucide-react";
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
  const [isVideoOpen, setIsVideoOpen] = useState(false);

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headings & CTA */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 max-w-xl mx-auto lg:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold font-lora text-white leading-tight">
              Shaping the Future
              <br />
              of Technology & Business
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200/90 leading-relaxed font-inter">
              Explore how our Information Systems program integrates cutting-edge software development with strategic business process analysis.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center">
              <Button
                variant="outline"
                size="lg"
                className="border border-white hover:bg-white hover:text-[#1E3A8A] bg-transparent text-white rounded-none font-semibold px-8 py-6 inline-flex items-center gap-2 transition-all duration-300 w-full sm:w-auto text-base"
                asChild
              >
                <a href="#about">
                  Explore Program
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="text-white hover:text-slate-200 font-semibold text-base inline-flex items-center gap-2 group transition-colors py-3 focus:outline-none"
              >
                <Play className="w-5 h-5 fill-current text-white group-hover:scale-105 transition-transform" />
                Lihat Video Profil
              </button>
            </div>
          </div>

          {/* Right Column: 3D Canvas inside Thick White Bordered Circle */}
          <div className="flex justify-center lg:justify-end items-center lg:-mr-4 xl:-mr-8">
            <div className="relative w-[85vw] h-[85vw] max-w-[340px] max-h-[340px] sm:w-[400px] sm:h-[400px] md:w-[460px] md:h-[460px] lg:w-[540px] lg:h-[540px] xl:w-[600px] xl:h-[600px] 2xl:w-[660px] 2xl:h-[660px] rounded-full border-[12px] sm:border-[16px] border-white bg-white/5 shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="w-full h-full cursor-grab active:cursor-grabbing">
                <CustomCoin />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          onClick={() => setIsVideoOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in cursor-zoom-out"
        >
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-[110] cursor-pointer"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl animate-scale-in cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/s3nJ9gU1m5g?autoplay=1"
              title="Stories Behind The Building: Virtual Campus Tour ITHB"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}
