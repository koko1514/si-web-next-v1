import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { AccreditationSection } from "@/components/AccreditationSection";
import { MetaverseSection } from "@/components/MetaverseSection";
import { SocialHubSection } from "@/components/SocialHubSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <AdvantagesSection />
        <AchievementsSection />
        <AccreditationSection />
        <MetaverseSection />
        <SocialHubSection />
      </main>
      <Footer />
    </div>
  );
}
