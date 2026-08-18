import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { GalleryClient } from "@/components/GalleryClient";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Galeri Kegiatan & Event Mahasiswa",
  description:
    "Dokumentasi kebersamaan, event perkuliahan, workshop, dan prestasi mahasiswa Sistem Informasi Institut Teknologi Harapan Bangsa (ITHB) Bandung.",
  alternates: {
    canonical: "/galeri",
  },
  openGraph: {
    title: "Galeri Kegiatan & Event Mahasiswa | Sistem Informasi ITHB",
    description:
      "Dokumentasi kebersamaan, event perkuliahan, workshop, dan prestasi mahasiswa Sistem Informasi ITHB.",
    url: "/galeri",
  },
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <GalleryClient />
      </main>
      <Footer />
    </div>
  );
}
