"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, CheckCircle2, Star, X, ZoomIn } from "lucide-react";

export function AccreditationSection() {
  const [isOpen, setIsOpen] = useState(false);
  const certImageSrc = "/Akreditasi Sistem Informasi 27 Agustus 2021 - 27 Agustus 2026 copy.jpg";

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Subtle Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Akreditasi & Sertifikasi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Standar <span className="gradient-text">Kualitas Terjamin</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Diakui oleh lembaga akreditasi nasional dan internasional terkemuka
          </p>
        </div>

        {/* Centered Certificate Card */}
        <div className="max-w-3xl mx-auto mb-10 relative group">
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-secondary/15 to-accent/15 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500 pointer-events-none" />

          <div
            onClick={() => setIsOpen(true)}
            className="relative rounded-2xl overflow-hidden border border-border shadow-2xl bg-background cursor-zoom-in group/img"
          >
            <Image
              src={certImageSrc}
              alt="Sertifikat Akreditasi BAN-PT Sistem Informasi ITHB"
              width={1200}
              height={850}
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />
            
            {/* Zoom Overlay on Hover */}
            <div className="absolute inset-0 bg-dark-surface/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-background/90 backdrop-blur flex items-center justify-center shadow-lg">
                <ZoomIn className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Centered Subtext (Exactly like user's image) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Program Studi Sistem Informasi telah terakreditasi sesuai
            <br />
            <span className="text-foreground font-bold font-space block mt-2 text-base sm:text-lg md:text-xl">
              SK BAN-PT No. 10561/SK/BAN-PT/Ak-PPJ/S/VIII/2021
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto border-t border-border/50 my-12" />

        {/* Certification Badges Row (Below the main BAN-PT) */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              name: "SAP ERP",
              fullName: "University Alliance Partner",
              grade: "Certified",
              description: "Kurikulum Terintegrasi & Sertifikasi SAP ERP",
              icon: Award,
            },
            {
              name: "Oracle Academy",
              fullName: "Institutional Member",
              grade: "Certified",
              description: "Sertifikasi Database & Java Programming",
              icon: CheckCircle2,
            },
            {
              name: "Siap Kerja",
              fullName: "Employment Rate",
              grade: "90%+",
              description: "Lulusan mendapatkan kerja dalam waktu singkat",
              icon: Star,
            },
          ].map((accred, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-secondary/5 to-accent/5 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <accred.icon className="w-6 h-6 text-secondary" />
              </div>

              {/* Name */}
              <h4 className="text-base font-bold text-foreground font-space mb-1">
                {accred.name}
              </h4>

              {/* Grade Badge */}
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent/10 text-accent text-[10px] sm:text-xs font-semibold mb-2">
                {accred.grade}
              </span>

              {/* Details */}
              <p className="text-[10px] text-muted-foreground/80 leading-relaxed">
                {accred.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in cursor-zoom-out"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-10 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative max-w-4xl max-h-[85vh] w-full rounded-2xl overflow-hidden border border-white/20 bg-card shadow-2xl animate-scale-in cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={certImageSrc}
              alt="Sertifikat Akreditasi BAN-PT Sistem Informasi ITHB (Fullscreen)"
              width={1600}
              height={1100}
              className="w-full h-auto max-h-[85vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}
