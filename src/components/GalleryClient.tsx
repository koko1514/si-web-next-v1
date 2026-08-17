"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Calendar, ArrowLeft, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";

import { galleryItems } from "@/data/galleryData";

export function GalleryClient() {
  const [filter, setFilter] = useState<"all" | "achievement" | "event">("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedWidth, setSelectedWidth] = useState(800);
  const [selectedHeight, setSelectedHeight] = useState(600);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true;
    return item.type === filter;
  });

  return (
    <section className="pt-4 pb-16 sm:pb-20 md:pb-24 bg-background relative min-h-[80vh] overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Floating Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Button
              variant="outline"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-card/90 border border-border/80 shadow-sm hover:shadow-md hover:border-primary/40 hover:bg-primary/10 hover:text-primary text-foreground font-semibold text-xs sm:text-sm transition-all duration-300 group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-primary group-hover:-translate-x-1 transition-transform duration-300" />
              <span>Kembali ke Beranda</span>
            </Button>
          </Link>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Aktivitas <span className="gradient-text">& Event Kami</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Kumpulan dokumentasi keseruan, prestasi mahasiswa, kunjungan industri, malam keakraban, dan momen kebersamaan di Sistem Informasi ITHB.
          </p>
        </motion.div>

        {/* Interactive Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
        >
          <Button
            variant={filter === "all" ? "default" : "outline"}
            onClick={() => setFilter("all")}
            className="rounded-full px-3.5 sm:px-6 py-2 text-xs sm:text-sm transition-all duration-300 font-semibold cursor-pointer"
          >
            Semua Foto ({galleryItems.length})
          </Button>
          <Button
            variant={filter === "achievement" ? "default" : "outline"}
            onClick={() => setFilter("achievement")}
            className="rounded-full px-3.5 sm:px-6 py-2 text-xs sm:text-sm transition-all duration-300 font-semibold flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-400 shrink-0" />
            <span>Prestasi Mahasiswa ({galleryItems.filter(i => i.type === "achievement").length})</span>
          </Button>
          <Button
            variant={filter === "event" ? "default" : "outline"}
            onClick={() => setFilter("event")}
            className="rounded-full px-3.5 sm:px-6 py-2 text-xs sm:text-sm transition-all duration-300 font-semibold flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
            <span>Kegiatan & Event ({galleryItems.filter(i => i.type === "event").length})</span>
          </Button>
        </motion.div>

        {/* Dynamic Masonry Photo Grid */}
        <motion.div layout className="columns-2 lg:columns-3 xl:columns-4 gap-3 sm:gap-6 space-y-3 sm:space-y-6">
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                key={`${item.title}-${idx}`}
                onClick={() => {
                  setSelectedImage(item.image);
                  setSelectedTitle(item.title);
                  setSelectedWidth(item.width);
                  setSelectedHeight(item.height);
                  setIsModalOpen(true);
                }}
                className="break-inside-avoid bg-card border border-border/60 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:border-accent/30 transition-colors duration-300 flex flex-col mb-3 sm:mb-6 relative group cursor-pointer"
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
                  {/* Dark Gradient Overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20 opacity-75 group-hover:opacity-95 transition-opacity duration-500 z-10" />
                </div>

                {/* Absolute Text Content Overlay */}
                <div className="absolute inset-0 p-2.5 sm:p-4 md:p-5 flex flex-col justify-end z-20 text-white pointer-events-none">
                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="px-2 sm:px-2.5 py-0.5 rounded-full text-[9px] sm:text-xs font-semibold flex items-center gap-1 bg-white/20 text-white border border-white/10"
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
                  <h3 className="font-bold text-white mb-1 text-[11px] sm:text-sm md:text-base group-hover:text-accent transition-colors duration-300 line-clamp-2 sm:line-clamp-none">
                    {item.title}
                  </h3>

                  {/* Date */}
                  <p className="text-white/60 text-[9px] sm:text-xs mb-1">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Tidak ada foto kegiatan yang ditemukan.</p>
          </div>
        )}
      </div>

      {/* Fullscreen Image Modal with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsModalOpen(false)}
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm cursor-pointer select-none"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-[110] cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative rounded-2xl overflow-hidden border border-white/20 bg-card shadow-2xl cursor-default flex items-center justify-center"
              style={{
                aspectRatio: `${selectedWidth} / ${selectedHeight}`,
                maxWidth: "90vw",
                maxHeight: "85vh",
                width: "auto",
                height: "auto",
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
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                <h3 className="text-base sm:text-lg font-bold">{selectedTitle}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
