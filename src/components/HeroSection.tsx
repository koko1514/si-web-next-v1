"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Rocket, Lightbulb, GraduationCap, Zap, BookOpen, X } from "lucide-react";
import dynamic from "next/dynamic";

const CustomCoin = dynamic(() => import("./CustomCoin"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse text-accent font-space text-sm">
      SI | ITHB
    </div>
  ),
});

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden pt-20 pb-12 lg:pb-0"
      style={{
        background: "var(--gradient-hero)",
      }}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "-3s" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 xl:space-y-8">
            {/* Badge
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-medium animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Pendaftaran Mahasiswa Baru 2025
            </div> */}

            {/* Main Headline */}
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.1] animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="gradient-text">Sistem Informasi</span>
              <br />
              <span className="text-foreground">
                Institut Teknologi Harapan Bangsa
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-in leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Mendidik pemimpin masa depan yang{" "}
              <span className="text-secondary font-semibold">
                berstandar global
              </span>
              , berkarakter unggul, dan siap membawa perubahan positif di era
              transformasi digital.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="lg" className="group" asChild>
                <a
                  href="https://www.ithb.ac.id/sistem-informasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mulai Perjalananmu
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button 
                variant="heroOutline" 
                size="lg" 
                className="group"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="w-5 h-5" />
                Lihat Video Profil
              </Button>
            </div>

            {/* Stats */}
            {/* <div
              className="flex flex-wrap justify-center lg:justify-start gap-8 pt-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { value: "500+", label: "Mahasiswa Aktif" },
                { value: "95%", label: "Tingkat Kelulusan" },
                { value: "50+", label: "Mitra Industri" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-foreground font-space">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div> */}
          </div>

          {/* Right Abstract Element */}
          <div className="relative flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative w-[70vw] h-[70vw] max-w-[260px] max-h-[260px] sm:w-[320px] sm:h-[320px] sm:max-w-none sm:max-h-none md:w-[380px] md:h-[380px] lg:w-[400px] lg:h-[400px] xl:w-[440px] xl:h-[440px] 2xl:w-[500px] 2xl:h-[500px]">
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/30 animate-[spin_20s_linear_infinite]" />

              {/* Middle Ring */}
              <div className="absolute inset-6 sm:inset-8 rounded-full border-2 border-accent/40 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Inner Gradient Circle */}
              <div className="absolute inset-12 sm:inset-16 rounded-full bg-gradient-to-br from-secondary via-accent to-secondary opacity-20 blur-xl animate-pulse-glow" />

              {/* Core Circle */}
              <div className="absolute inset-16 sm:inset-20 rounded-full bg-gradient-to-br from-primary to-dark-surface shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Tech Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--accent)) 1px, transparent 1px)`,
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>
              </div>

              {/* 3D Coin Floating In Front of Core Circle */}
              <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
                <div className="w-full h-full cursor-grab active:cursor-grabbing pointer-events-auto">
                  <CustomCoin />
                </div>
              </div>

              {/* Floating Elements */}
              <div
                className="absolute top-6 left-6 sm:top-10 sm:left-10 w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-secondary shadow-lg animate-float flex items-center justify-center"
                style={{ animationDelay: "-1s" }}
              >
                <BookOpen className="text-secondary-foreground w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <div
                className="absolute bottom-16 left-0 sm:bottom-20 sm:left-0 w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-accent shadow-lg animate-float flex items-center justify-center"
                style={{ animationDelay: "-2s" }}
              >
                <Lightbulb className="text-accent-foreground w-3.5 h-3.5 sm:w-5 sm:h-5" />
              </div>
              <div
                className="absolute top-14 right-3 sm:top-20 sm:right-5 w-10 h-10 sm:w-14 sm:h-14 rounded-2xl bg-primary shadow-lg animate-float flex items-center justify-center"
                style={{ animationDelay: "-4s" }}
              >
                <GraduationCap className="text-primary-foreground w-5 h-5 sm:w-7 sm:h-7" />
              </div>
              <div
                className="absolute bottom-6 right-14 sm:bottom-10 sm:right-20 w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-card border border-border shadow-lg animate-float flex items-center justify-center"
                style={{ animationDelay: "-5s" }}
              >
                <Zap className="text-accent w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-pulse" />
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
