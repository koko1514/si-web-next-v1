import { Award, Briefcase, Globe, Compass, Lightbulb } from "lucide-react";

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
            Visi & <span className="gradient-text">Misi</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Mencetak profesional muda yang mampu berinovasi di era digital
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Integrasi Teknologi & Bisnis Modern
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Program Studi Sistem Informasi ITHB membekali mahasiswa dengan kemampuan untuk{" "}
                <span className="text-secondary font-medium">menganalisis kebutuhan bisnis</span> dan 
                menerjemahkannya ke dalam solusi TI terintegrasi untuk efisiensi organisasi.
              </p>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Dengan kurikulum berstandar industri, mahasiswa dipersiapkan untuk menguasai pengelolaan 
                sistem enterprise (ERP), kecerdasan buatan (AI), machine learning, data engineering 
                (Hadoop), dan Internet of Things (IoT).
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Karakter Unggul", desc: "Pembinaan kepemimpinan dan integritas terarah" },
                { icon: Briefcase, title: "Kesiapan Kerja Tinggi", desc: "90%+ lulusan terserap industri dalam waktu singkat" },
                { icon: Globe, title: "Karier Global", desc: "Lulusan dipersiapkan bersaing secara internasional" },
                { icon: Compass, title: "Project-Based Learning", desc: "Pembelajaran berbasis penyelesaian masalah nyata" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-secondary/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{item.title}</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
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
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-card/90 backdrop-blur shadow-lg">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Data Science</p>
                  <p className="text-xs sm:text-sm font-bold text-foreground">AI & ML</p>
                </div>
                <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 px-2 py-1 sm:px-3 sm:py-2 rounded-lg bg-card/90 backdrop-blur shadow-lg">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Digital Business</p>
                  <p className="text-xs sm:text-sm font-bold text-foreground">E-Commerce</p>
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
