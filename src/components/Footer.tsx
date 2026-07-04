"use client";

import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Tentang Kami", href: "/#about" },
  { name: "Program Studi", href: "/#advantages" },
  { name: "Prestasi", href: "/#achievements" },
  { name: "Virtual Tour", href: "/metaverse" },
  { name: "Galeri", href: "/#social" },
];

const programLinks = [
  { name: "IT Infrastructure Mgt", href: "/#advantages" },
  { name: "Business Intelligence", href: "/#advantages" },
  { name: "ERP System (SAP/Odoo)", href: "/#advantages" },
  { name: "Magang & Proyek SAP", href: "/#advantages" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/hmsi.ithb/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://www.youtube.com/@himpunanmahasiswasisteminf6411?si=sUHrLhfcwacnWb6N",
    label: "YouTube",
  },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Top Animated Wave (Original Shape) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden -translate-y-[30%] pointer-events-none">
        <div className="flex w-[400%] animate-[wave_30s_linear_infinite]">
          {[0, 1, 2, 3].map((i) => (
            <svg
              key={i}
              viewBox="0 0 1440 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`w-[25%] h-auto ${i % 2 !== 0 ? "scale-x-[-1.005]" : "scale-x-[1.005]"}`}
            >
              <path
                d="M0 50C80 50 192 66.7 288 58.3C384 50 480 50 576 58.3C672 66.7 768 83.3 864 83.3C960 83.3 1056 66.7 1152 58.3C1248 50 1344 50 1392 50L1440 50V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V50Z"
                fill="hsl(var(--card))"
              />
            </svg>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/siithb-white.png"
                alt="Sistem Informasi ITHB"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-dark-surface-foreground/70 text-sm leading-relaxed mb-6">
              Mempersiapkan generasi muda menjadi profesional teknologi yang
              inovatif dan siap menghadapi tantangan industri digital.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 text-dark-surface-foreground/70 group-hover:text-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-dark-surface-foreground font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-surface-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-dark-surface-foreground font-semibold mb-6">
              Program
            </h4>
            <ul className="space-y-3">
              {programLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-dark-surface-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-dark-surface-foreground font-semibold mb-6">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-dark-surface-foreground/70 text-sm">
                  Jl. Dipati Ukur No.80-84, Dago, Kecamatan Coblong, Kota
                  Bandung, Jawa Barat 40132
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-dark-surface-foreground/70 text-sm">
                  +62 22 250 6636
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-dark-surface-foreground/70 text-sm">
                  admission@ithb.ac.id
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-dark-surface-foreground/50 text-sm">
            © {new Date().getFullYear()} Sistem Informasi ITHB. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-secondary text-secondary-foreground shadow-lg hover:shadow-[0_0_30px_hsl(210_100%_50%_/_0.4)] transition-all duration-300 flex items-center justify-center z-50 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
