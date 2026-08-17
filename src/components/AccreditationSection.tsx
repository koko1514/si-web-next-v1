"use client";

import { useState } from "react";
import Image from "next/image";
import { Award, CheckCircle2, Star, X, ZoomIn } from "lucide-react";

export function AccreditationSection() {
  const [isOpen, setIsOpen] = useState(false);
  const certImageSrc = "/Sertifikat Akreditasi Prodi SI ITHB - 2026.jpg";

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
              alt="Sertifikat Akreditasi LAM INFOKOM UNGGUL Sistem Informasi ITHB"
              width={1200}
              height={850}
              className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
            />

            {/* Zoom Overlay (Visible on mobile, hover on desktop) */}
            <div className="absolute inset-0 bg-dark-surface/20 opacity-100 sm:opacity-0 sm:group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-background/90 backdrop-blur flex items-center justify-center shadow-lg">
                <ZoomIn className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </div>
            </div>
          </div>
        </div>

        {/* Centered Subtext */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Program Studi Sistem Informasi pada Program Sarjana ITHB Memenuhi Syarat Peringkat
          </p>
          <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-extrabold text-lg sm:text-xl md:text-2xl tracking-wider my-2">
            AKREDITASI UNGGUL
          </div>
          <p className="text-foreground font-bold font-space text-base sm:text-lg md:text-xl">
            Keputusan LAM INFOKOM No. 105/SK/LAM-INFOKOM/Ak/S/VIII/2026
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Masa Berlaku: 7 Agustus 2026 s.d. 7 Agustus 2029
          </p>
        </div>

        {/* Divider */}
        <div className="max-w-5xl mx-auto border-t border-border/50 my-12" />

        {/* Certification Badges Row (Below the main BAN-PT) */}
        <div className="max-w-2xl mx-auto grid grid-cols-2 gap-3 sm:gap-6">
          {(
            [
              {
                name: "SAP ERP",
                fullName: "University Alliance Partner",
                grade: "Certified",
                description: "Kurikulum Terintegrasi & Sertifikasi SAP ERP",
                logo: "/SAP_2011_logo.svg",
              },
              {
                name: "Oracle Academy",
                fullName: "Institutional Member",
                grade: "Certified",
                description: "Sertifikasi Database Design & SQL Programming",
                logo: "/oracle-seeklogo.png",
                logoClassName: "scale-150",
              },
            ] as Array<{
              name: string;
              fullName: string;
              grade: string;
              description: string;
              logo: string;
              logoClassName?: string;
            }>
          ).map((accred, index) => (
            <div
              key={index}
              className="group relative p-4 sm:p-6 rounded-2xl bg-card border border-border/50 hover:border-secondary/30 shadow-sm sm:shadow-none hover:shadow-lg transition-all duration-300 text-center flex flex-col justify-between"
            >
              {/* Icon / Logo */}
              <div className="w-20 sm:w-24 h-14 sm:h-16 mx-auto flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300 p-1 sm:p-2">
                <Image
                  src={accred.logo}
                  alt={accred.name}
                  width={120}
                  height={60}
                  className={`w-auto h-8 sm:h-10 object-contain ${accred.logoClassName || ""}`}
                />
              </div>

              <div>
                {/* Name */}
                <h4 className="text-xs sm:text-base font-bold text-foreground font-space mb-1">
                  {accred.name}
                </h4>

                {/* Grade Badge */}
                <span className="inline-block px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full bg-accent/10 text-accent text-[9px] sm:text-xs font-semibold mb-1.5 sm:mb-2">
                  {accred.grade}
                </span>

                {/* Details */}
                <p className="text-[9px] sm:text-[10px] text-muted-foreground/80 leading-relaxed">
                  {accred.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Certificate Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in cursor-pointer select-none"
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
              alt="Sertifikat Akreditasi LAM INFOKOM UNGGUL Sistem Informasi ITHB (Fullscreen)"
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
