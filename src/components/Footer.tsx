"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from "lucide-react";

const quickLinks = [
  { name: "Tentang Kami", href: "/#about" },
  { name: "Program Studi", href: "/#advantages" },
  { name: "Prestasi", href: "/#achievements" },
  { name: "Virtual Tour", href: "/metaverse" },
  { name: "Galeri", href: "/#social" },
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

interface FooterProps {
  hideWave?: boolean;
  waveColor?: string;
}

export function Footer({ hideWave = false, waveColor }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById("hero");
      if (heroElement) {
        const heroBottom = heroElement.getBoundingClientRect().bottom;
        setShowBackToTop(heroBottom <= 100);
      } else {
        setShowBackToTop(window.scrollY > 400);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--gradient-dark)" }}
    >
      {/* Top Animated Wave (Original Shape) */}
      {!hideWave && (
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
                  fill={waveColor || "hsl(var(--card))"}
                />
              </svg>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className={`container mx-auto px-4 md:px-8 ${hideWave ? "pt-12" : "pt-24"} pb-8 relative z-10`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-3">
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
          <div className="lg:col-span-2">
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

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-dark-surface-foreground font-semibold mb-6">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-dark-surface-foreground/70 text-sm leading-relaxed">
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

          {/* Map Column */}
          <div className="lg:col-span-4">
            <h4 className="text-dark-surface-foreground font-semibold mb-6">
              Lokasi Kampus
            </h4>
            <div className="relative w-full h-44 rounded-xl overflow-hidden border border-white/10 shadow-md">
              <iframe
                title="Lokasi ITHB"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0104676903975!2d107.6160988!3d-6.889348799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e655d336aaab%3A0xc48b605e8e3d2915!2sInstitut%20Teknologi%20Harapan%20Bangsa!5e0!3m2!1sid!2sid!4v1786900753091!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Institut+Teknologi+Harapan+Bangsa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-3 font-medium transition-colors"
            >
              <MapPin className="w-3.5 h-3.5" />
              Buka di Google Maps
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-dark-surface-foreground/50 text-sm">
            © {new Date().getFullYear()} Sistem Informasi ITHB. All rights reserved.
          </p>
        </div>
      </div>

      {/* Back to Top Button (Smooth entrance & exit animation) */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-xl bg-primary text-primary-foreground shadow-lg hover:shadow-xl flex items-center justify-center z-50 cursor-pointer transition-all duration-500 transform ${
          showBackToTop
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto hover:-translate-y-1"
            : "opacity-0 translate-y-8 scale-75 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
