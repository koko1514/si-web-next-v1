"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "#hero" },
  { name: "Tentang", href: "#about" },
  { name: "Keunggulan", href: "#advantages" },
  { name: "Prestasi", href: "#achievements" },
  { name: "Metaverse", href: "#metaverse" },
  { name: "Galeri", href: "#social" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update isScrolled status for glass effect
      setIsScrolled(currentScrollY > 20);

      // Smart Hide/Show Logic
      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        // Scrolling down & passed a certain point -> Hide
        setIsVisible(false);
      } else {
        // Scrolling up or at the top -> Show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
      } ${
        isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center group">
            <div className="h-11 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/siithb.png"
                alt="SI ITHB Logo"
                width={160}
                height={42}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-secondary transition-colors duration-200 rounded-lg hover:bg-secondary/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" size="sm">
              Daftar Sekarang
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-border/50 shadow-xl animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-foreground hover:text-secondary hover:bg-secondary/5 rounded-lg transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                <Button variant="hero" className="mt-2">
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
