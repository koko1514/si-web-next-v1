"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Beranda", href: "/#hero" },
  { name: "Visi & Misi", href: "/#about" },
  { name: "Karier", href: "/#career" },
  { name: "Keunggulan", href: "/#advantages" },
  { name: "Dosen", href: "/#lecturers" },
  { name: "Galeri", href: "/galeri" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const [activeLink, setActiveLink] = useState("/#hero");

  const isDarkBg = !isScrolled && pathname === "/";

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    const isHomePage = window.location.pathname === "/";
    
    if (isHomePage && (href.startsWith("/#") || href.startsWith("#"))) {
      e.preventDefault();
      const targetId = href.replace("/#", "").replace("#", "");
      const element = document.getElementById(targetId);
      
      if (element) {
        setIsNavigating(true);
        setIsVisible(true);
        setActiveLink(href);
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          setIsNavigating(false);
        }, 1500);
      }
    } else {
      setActiveLink(href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update isScrolled status for glass effect
      setIsScrolled(currentScrollY > 20);

      // Smart Hide/Show Logic
      if (isNavigating) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 400) {
        // Scrolling down & passed a certain point -> Hide
        setIsVisible(false);
      } else {
        // Scrolling up or at the top -> Show
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);

      // Active Section Detection (skip during programmatic smooth scroll clicks)
      if (pathname === "/") {
        if (!isNavigating) {
          const sections = ["hero", "about", "career", "advantages", "lecturers"];
          const threshold = window.innerHeight / 3; // dynamic viewport detection line
          
          let currentSection = "/#hero";
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= threshold && rect.bottom >= threshold) {
                currentSection = `/#${section}`;
                break;
              }
            }
          }
          setActiveLink(currentSection);
        }
      } else {
        setActiveLink(pathname);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isNavigating, pathname]);

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
          <Link href="/" className="flex items-center group">
            <div className="h-11 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/siithb.png"
                alt="SI ITHB Logo"
                width={160}
                height={42}
                className={`h-full w-auto object-contain transition-all duration-300 ${
                  isDarkBg ? "brightness-0 invert" : ""
                }`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? isDarkBg
                        ? "text-white font-bold"
                        : "text-primary font-bold"
                      : isDarkBg
                      ? "text-white/70 hover:text-white"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full animate-fade-in ${
                        isDarkBg ? "bg-white" : "bg-primary"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant={isDarkBg ? "outline" : "hero"}
              size="sm"
              className={
                isDarkBg
                  ? "border-white bg-white text-[#1E3A8A] hover:bg-white/90 hover:text-[#1E3A8A] rounded-none font-semibold shadow-md"
                  : ""
              }
              asChild
            >
              <Link href="/metaverse">Our Metaverse</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isDarkBg ? "hover:bg-white/10" : "hover:bg-muted"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isDarkBg ? "text-white" : "text-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isDarkBg ? "text-white" : "text-foreground"}`} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 glass border-t border-border/50 shadow-xl animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        isActive
                          ? "text-primary bg-primary/5 font-bold"
                          : "text-muted-foreground hover:text-primary hover:bg-secondary/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <Button variant="hero" className="mt-2" asChild>
                  <Link href="/metaverse" onClick={() => setIsMobileMenuOpen(false)}>
                    Virtual Tour
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
