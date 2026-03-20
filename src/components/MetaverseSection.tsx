import { Button } from "@/components/ui/button";
import { Play, Maximize2, Compass, Headphones } from "lucide-react";

export function MetaverseSection() {
  return (
    <section
      id="metaverse"
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--gradient-dark)",
      }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4 neon-border">
            <Compass className="w-4 h-4" />
            Virtual Experience
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-surface-foreground mb-4">
            Jelajahi <span className="text-accent">Metaverse</span> Kampus
          </h2>
          <p className="text-dark-surface-foreground/70 text-lg max-w-2xl mx-auto">
            Rasakan pengalaman virtual tour 360° di kampus kami dengan teknologi
            terkini
          </p>
        </div>

        {/* Metaverse Portal */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden neon-border animate-pulse-glow">
            {/* Portal Frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-3xl opacity-30 blur-sm animate-gradient" />

            <div className="relative aspect-video bg-dark-surface rounded-2xl overflow-hidden">
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* VR Headset Icon */}
                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-6 animate-float">
                  <Headphones className="w-12 h-12 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-dark-surface-foreground mb-3 text-center px-4">
                  SI ITHB Virtual Campus
                </h3>
                <p className="text-dark-surface-foreground/60 text-center px-4 mb-8 max-w-md">
                  Jelajahi laboratorium, ruang kelas, dan fasilitas kampus
                  secara virtual
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="accent" size="lg" className="group">
                    <Play className="w-5 h-5" />
                    Mulai Virtual Tour
                  </Button>
                  <Button variant="dark" size="lg" className="group">
                    <Maximize2 className="w-5 h-5" />
                    Mode Fullscreen
                  </Button>
                </div>
              </div>

              {/* Scanning Lines Effect */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 2px,
                      hsl(var(--accent)) 2px,
                      hsl(var(--accent)) 4px
                    )`,
                    animation: "scan 8s linear infinite",
                  }}
                />
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-accent/50 rounded-tl-xl" />
              <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-accent/50 rounded-tr-xl" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-accent/50 rounded-bl-xl" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-accent/50 rounded-br-xl" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: "🎮",
              title: "Interactive 3D",
              desc: "Navigasi bebas di dunia virtual",
            },
            {
              icon: "🔊",
              title: "Audio Guide",
              desc: "Narasi penjelasan di setiap lokasi",
            },
            {
              icon: "🌐",
              title: "Multi-Platform",
              desc: "Akses dari browser atau VR headset",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-colors"
            >
              <span className="text-4xl mb-3 block">{feature.icon}</span>
              <h4 className="text-lg font-semibold text-dark-surface-foreground mb-1">
                {feature.title}
              </h4>
              <p className="text-dark-surface-foreground/60 text-sm">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scan Animation Keyframes */}
      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
}
