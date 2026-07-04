import { Navbar } from "@/components/Navbar";
import { GalleryClient } from "@/components/GalleryClient";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Galeri & Event | Sistem Informasi ITHB",
  description: "Dokumentasi kebersamaan, event, dan prestasi mahasiswa Sistem Informasi Institut Teknologi Harapan Bangsa (ITHB).",
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
