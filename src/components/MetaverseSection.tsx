"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Headphones, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Info, 
  Sparkles, 
  Eye, 
  Layers, 
  Box, 
  Monitor 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const metaverseGallery = [
  {
    id: 1,
    title: "Lobi Utama Virtual Campus SI ITHB",
    category: "lobby",
    categoryLabel: "Lobi & Ruang Utama",
    image: "/metaverse/metaverse_lobby_1786901348285.jpg",
    description: "Area lobi virtual 3D futuristik dengan hologram interaktif Sistem Informasi ITHB dan panel navigasi kampus.",
    tags: ["Meta Quest VR", "Virtual Lobby", "3D Hologram"]
  },
  {
    id: 2,
    title: "Laboratorium Komputer & Data Stream VR",
    category: "lab",
    categoryLabel: "Laboratorium VR",
    image: "/metaverse/metaverse_lab_1786901656113.jpg",
    description: "Ruang simulasi lab komputasi dengan layar holografik transparan dan integrasi kontroler Oculus Meta Quest.",
    tags: ["VR Lab", "Oculus Quest", "Interactive Data"]
  },
  {
    id: 3,
    title: "Auditorium Virtual & Stage Conference",
    category: "auditorium",
    categoryLabel: "Auditorium & Pameran",
    image: "/metaverse/metaverse_auditorium_1786901890770.jpg",
    description: "Auditorium virtual 3D berkapasitas besar untuk webinar, presentasi proyek, dan simposium teknologi.",
    tags: ["3D Auditorium", "Holographic Stage", "Webinar VR"]
  },
  {
    id: 4,
    title: "Ruang Pameran Inovasi Proyek Mahasiswa",
    category: "auditorium",
    categoryLabel: "Auditorium & Pameran",
    image: "/metaverse/metaverse_exhibition_1786901908423.jpg",
    description: "Galeri pameran virtual untuk menampilkan karya inovasi, AI, dan sistem informasi buatan mahasiswa SI ITHB.",
    tags: ["Exhibition Hall", "Student Showcase", "Interactive Booth"]
  },
  {
    id: 5,
    title: "Pengalaman VR Oculus Quest",
    category: "experience",
    categoryLabel: "Pengalaman Oculus VR",
    image: "/event/VR.JPG",
    description: "Dokumentasi mahasiswa Sistem Informasi ITHB saat melakukan uji coba pengalaman virtual tour menggunakan Meta Quest VR Headset.",
    tags: ["Oculus Experience", "Hands-on VR", "SI ITHB Student"]
  }
];

const filterCategories = [
  { id: "all", label: "Semua Foto", icon: Layers },
  { id: "lobby", label: "Lobi & Utama", icon: Box },
  { id: "lab", label: "Laboratorium VR", icon: Monitor },
  { id: "auditorium", label: "Auditorium & Pameran", icon: Sparkles },
  { id: "experience", label: "Pengalaman VR", icon: Headphones },
];

export function MetaverseSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = selectedCategory === "all"
    ? metaverseGallery
    : metaverseGallery.filter(item => item.category === selectedCategory);

  const activeItem = metaverseGallery[activeImageIndex] || metaverseGallery[0];

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % metaverseGallery.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + metaverseGallery.length) % metaverseGallery.length);
  };

  return (
    <section
      id="metaverse"
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--gradient-dark)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
            transform: "perspective(500px) rotateX(60deg)",
            transformOrigin: "center top",
          }}
        />

        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse" />
        <div
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-accent rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-secondary rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-surface-foreground mb-4">
            GALERI <span className="text-accent">METAVERSE</span> SI ITHB
          </h2>
        </div>

        {/* Main Showcase Viewer */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-3xl overflow-hidden neon-border bg-dark-surface shadow-2xl border border-white/10">
            {/* Main Active Image Display */}
            <div className="relative aspect-video w-full overflow-hidden group">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-black/30 opacity-90" />

              {/* Top Tag Badges */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-accent/50 text-accent text-xs font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  {activeItem.categoryLabel}
                </span>

                <Button
                  size="sm"
                  variant="dark"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-black/60 hover:bg-black/80 text-white border border-white/20 backdrop-blur-md text-xs gap-1.5"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  Perbesar Gambar
                </Button>
              </div>

              {/* Navigation Controls */}
              <button
                onClick={handlePrevImage}
                aria-label="Previous Image"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-accent text-white hover:text-black border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                aria-label="Next Image"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-accent text-white hover:text-black border border-white/20 flex items-center justify-center backdrop-blur-md transition-all duration-300 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <div className="flex flex-wrap gap-2 mb-3">
                  {activeItem.tags.map((tag, idx) => (
                    <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded-md bg-accent/20 border border-accent/40 text-accent font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-2">
                  {activeItem.title}
                </h3>
                <p className="text-white/80 text-sm md:text-base max-w-3xl leading-relaxed">
                  {activeItem.description}
                </p>
              </div>
            </div>

            {/* Thumbnail Selector Strip */}
            <div className="p-4 bg-black/40 border-t border-white/10 flex gap-3 overflow-x-auto custom-scrollbar">
              {metaverseGallery.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative w-28 h-18 md:w-36 md:h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    activeImageIndex === index
                      ? "border-accent ring-2 ring-accent/50 scale-105"
                      : "border-white/10 opacity-60 hover:opacity-100 hover:border-white/40"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-1 left-1.5 text-[10px] text-white font-mono bg-black/70 px-1.5 py-0.5 rounded">
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          {filterCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "bg-accent text-black font-semibold shadow-lg shadow-accent/20"
                    : "bg-white/5 hover:bg-white/10 text-dark-surface-foreground/80 border border-white/10"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Filtered Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredItems.map((item) => {
            const originalIndex = metaverseGallery.findIndex((g) => g.id === item.id);
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveImageIndex(originalIndex);
                  setIsModalOpen(true);
                }}
                className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-accent/50 transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-1"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-accent text-[11px] font-semibold border border-accent/30">
                    {item.categoryLabel}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                    <span className="p-3 rounded-full bg-accent text-black font-bold flex items-center gap-2 text-xs shadow-xl">
                      <Eye className="w-4 h-4" />
                      Lihat Foto
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-base font-bold text-dark-surface-foreground group-hover:text-accent transition-colors mb-2 line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-dark-surface-foreground/70 text-xs line-clamp-2 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-dark-surface-foreground/60">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-fade-in">
          {/* Modal Header */}
          <div className="flex justify-between items-center text-white z-20">
            <div>
              <span className="text-xs text-accent font-mono uppercase tracking-wider">
                Metaverse 3D Photo Lightbox ({activeImageIndex + 1} / {metaverseGallery.length})
              </span>
              <h3 className="text-lg md:text-2xl font-bold">{activeItem.title}</h3>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-accent hover:text-black transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Main Image */}
          <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full max-w-6xl max-h-[75vh]">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Controls */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:text-black text-white flex items-center justify-center backdrop-blur-md transition-all z-20"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-accent hover:text-black text-white flex items-center justify-center backdrop-blur-md transition-all z-20"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Modal Footer Description */}
          <div className="max-w-4xl mx-auto text-center z-20">
            <p className="text-white/80 text-sm md:text-base mb-3">
              {activeItem.description}
            </p>
            <div className="flex justify-center gap-2">
              {activeItem.tags.map((tag, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
