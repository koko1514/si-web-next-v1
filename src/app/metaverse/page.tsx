import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { MetaverseSection } from "@/components/MetaverseSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Galeri Metaverse 3D & Oculus VR",
  description:
    "Jelajahi galeri 3D Virtual Campus dan simulasi ruang laboratorium Sistem Informasi ITHB yang dirancang untuk Meta Quest Oculus VR.",
  alternates: {
    canonical: "/metaverse",
  },
  openGraph: {
    title: "Galeri Metaverse 3D & Oculus VR | Sistem Informasi ITHB",
    description:
      "Jelajahi galeri 3D Virtual Campus dan simulasi ruang laboratorium Sistem Informasi ITHB.",
    url: "/metaverse",
  },
};

export default function MetaversePage() {
  return (
    <div className="min-h-screen border-none outline-none" style={{ background: "var(--gradient-dark)" }}>
      <Navbar />
      <main className="pt-20">
        <MetaverseSection />
      </main>
      <Footer waveColor="hsl(221.2 83.2% 12%)" />
    </div>
  );
}
