import { Navbar } from "@/components/Navbar";
import { MetaverseSection } from "@/components/MetaverseSection";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Virtual Campus Tour | Sistem Informasi ITHB",
  description: "Rasakan pengalaman virtual tour 360° di kampus Sistem Informasi Institut Teknologi Harapan Bangsa (ITHB) dengan teknologi metaverse terkini.",
};

export default function MetaversePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <MetaverseSection />
      </main>
      <Footer />
    </div>
  );
}
