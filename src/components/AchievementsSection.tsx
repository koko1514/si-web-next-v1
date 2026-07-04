"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Calendar, MapPin, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

import { galleryItems } from "@/data/galleryData";

export function AchievementsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedWidth, setSelectedWidth] = useState(800);
  const [selectedHeight, setSelectedHeight] = useState(600);

  const achievementsList = galleryItems.filter((item) => item.type === "achievement");
  const eventsList = galleryItems.filter((item) => item.type === "event");

  // Re-ordered dynamically to balance the 3-column masonry grid perfectly on desktop
  const achievements = [
    achievementsList[0], // Juara 1 Business Case
    eventsList[0],       // Malam Akrab
    eventsList[1],       // SI Company Visit
    eventsList[2],       // Virtual Reality
    achievementsList[2], // Juara 2 Widyatama
    achievementsList[1], // Juara 2 Business Plan
  ].filter(Boolean);

  return (
    <section
      id="achievements"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Prestasi & Event
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Capaian <span className="gradient-text">Terbaik Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rangkaian prestasi gemilang dan event menarik dari komunitas SI ITHB
          </p>
        </div>

        {/* Masonry Layout Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedImage(item.image);
                setSelectedTitle(item.title);
                setSelectedWidth(item.width);
                setSelectedHeight(item.height);
                setIsModalOpen(true);
              }}
              className="break-inside-avoid bg-card border border-border/60 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-accent/30 transition-all duration-500 flex flex-col mb-6 relative group cursor-pointer"
            >
              {/* Image Frame */}
              <div className="relative w-full overflow-hidden bg-muted/30">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={item.width || 800}
                  height={item.height || 600}
                  className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Dark Gradient Overlay for text readability (darkens on hover for better contrast when description expands) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 opacity-75 group-hover:opacity-95 transition-opacity duration-500 z-10" />
              </div>

              {/* Absolute Text Content Overlay */}
              <div className="absolute inset-0 p-3 sm:p-4 md:p-5 flex flex-col justify-end z-20 text-white pointer-events-none">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span
                    className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold flex items-center gap-1 bg-white/20 text-white border border-white/10"
                  >
                    {item.type === "achievement" ? (
                      <Trophy className="w-3 h-3 text-yellow-400 fill-yellow-400/20" />
                    ) : (
                      <Calendar className="w-3 h-3 text-sky-400" />
                    )}
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-white mb-1 text-xs sm:text-sm md:text-base lg:text-lg group-hover:text-accent transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Date */}
                <p className="text-white/60 text-[10px] sm:text-xs mb-1">
                  {item.date}
                </p>

                {/* Description - Smooth Expandable */}
                <div
                  className="grid transition-all duration-500 ease-in-out grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mt-2"
                >
                  <div className="overflow-hidden">
                    <p className="text-white/80 text-[10px] sm:text-[11px] md:text-xs leading-normal line-clamp-2 md:line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-colors duration-300 pointer-events-none z-30" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/galeri">
            <Button variant="outline" size="lg" className="group">
              Lihat Galeri & Event
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fade-in cursor-zoom-out"
        >
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-[110] cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="relative rounded-2xl overflow-hidden border border-white/20 bg-card shadow-2xl animate-scale-in cursor-default flex items-center justify-center"
            style={{ 
              aspectRatio: `${selectedWidth} / ${selectedHeight}`,
              maxWidth: "90vw",
              maxHeight: "85vh",
              width: "auto",
              height: "auto"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={selectedTitle}
              width={selectedWidth}
              height={selectedHeight}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
