import { Target, Lightbulb, Users, TrendingUp } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Visi & <span className="gradient-text">Misi Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Mencetak profesional muda yang mampu berinovasi di era digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Business Innovation & Digital Technology
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Program Studi Sistem Informasi ITHB mempersiapkan mahasiswa untuk menjadi 
                <span className="text-secondary font-medium"> inovator bisnis digital</span> yang 
                mampu mengintegrasikan teknologi dengan strategi bisnis modern.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dengan kurikulum berbasis industri dan pembelajaran hands-on, kami membekali 
                mahasiswa dengan kemampuan analisis data, pengembangan sistem, dan kepemimpinan 
                digital yang dibutuhkan di era transformasi digital.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Target, title: "Berorientasi Industri", desc: "Kurikulum disesuaikan kebutuhan pasar" },
                { icon: Lightbulb, title: "Inovasi Digital", desc: "Fokus pada solusi teknologi kreatif" },
                { icon: Users, title: "Kolaboratif", desc: "Kerja sama dengan mitra industri" },
                { icon: TrendingUp, title: "Future-Ready", desc: "Siap menghadapi tantangan masa depan" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-secondary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder Abstract Visual */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary via-dark-surface to-primary relative">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
                                      linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                {/* Central Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-accent/20 mx-auto mb-4 flex items-center justify-center neon-border">
                      <Lightbulb className="w-12 h-12 text-accent" />
                    </div>
                    <p className="text-primary-foreground/80 text-lg font-space">
                      Innovation Hub
                    </p>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute top-8 left-8 px-3 py-2 rounded-lg bg-card/90 backdrop-blur shadow-lg">
                  <p className="text-xs text-muted-foreground">Data Science</p>
                  <p className="text-sm font-bold text-foreground">AI & ML</p>
                </div>
                <div className="absolute bottom-8 right-8 px-3 py-2 rounded-lg bg-card/90 backdrop-blur shadow-lg">
                  <p className="text-xs text-muted-foreground">Digital Business</p>
                  <p className="text-sm font-bold text-foreground">E-Commerce</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-secondary/10 rounded-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
