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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          {/* Left Column: Visi */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                Visi
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-space leading-tight">
                Menjadi Program Studi Unggulan
              </h3>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed italic bg-muted/30 p-6 rounded-2xl border-l-4 border-secondary">
                &quot;Menjadi program studi unggulan di bidang pengembangan dan pemanfaatan Enterprise System dan menghasilkan lulusan Sistem Informasi yang kompeten dalam skala global, berkarakter unggul, dan berintegritas untuk memberi dampak positif pada bidang keilmuan dan pemanfaatan Sistem Informasi.&quot;
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
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-background/50 border border-border/50 hover:border-secondary/30 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <item.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-xs sm:text-sm">{item.title}</h4>
                    <p className="text-muted-foreground text-[11px] sm:text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Misi */}
          <div className="space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-md bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
                Misi
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-space leading-tight">
                Langkah & Pilar Aksi
              </h3>
              
              <div className="space-y-4">
                {[
                  {
                    num: "01",
                    title: "Fokus Enterprise System",
                    text: "Menyelenggarakan pendidikan tinggi di bidang Sistem Informasi yang berfokus pada Enterprise System."
                  },
                  {
                    num: "02",
                    title: "Penelitian Terapan Industri",
                    text: "Memajukan ilmu Sistem Informasi melalui penelitian terapan yang relevan dengan kebutuhan industri."
                  },
                  {
                    num: "03",
                    title: "Pengabdian Kepada Masyarakat",
                    text: "Melakukan pengabdian kepada masyarakat melalui kegiatan yang relevan dengan bidang Sistem Informasi sesuai kebutuhan masyarakat."
                  },
                  {
                    num: "04",
                    title: "Lulusan Unggul & Berintegritas",
                    text: "Menghasilkan lulusan Sistem Informasi yang berkarakter unggul dan berintegritas."
                  }
                ].map((misi, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-xl bg-background/30 border border-border/40 hover:bg-background/60 hover:border-secondary/20 transition-all duration-300">
                    <div className="text-xl font-bold font-space text-secondary opacity-80 shrink-0">
                      {misi.num}
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-foreground text-sm sm:text-base">{misi.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{misi.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
