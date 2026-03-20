import { GraduationCap, Briefcase, Globe, Cpu, Award, Users } from "lucide-react";

const advantages = [
  {
    icon: GraduationCap,
    title: "Kurikulum Terakreditasi",
    description: "Program studi dengan akreditasi unggul, didesain sesuai standar industri global dan kebutuhan pasar kerja terkini.",
    highlight: "Akreditasi A",
  },
  {
    icon: Briefcase,
    title: "Magang & Karir",
    description: "Kerjasama dengan 50+ perusahaan teknologi terkemuka untuk program magang dan penempatan kerja langsung.",
    highlight: "50+ Partners",
  },
  {
    icon: Cpu,
    title: "Lab Modern",
    description: "Fasilitas laboratorium komputer dengan teknologi terbaru untuk praktikum AI, Big Data, dan Cyber Security.",
    highlight: "Tech Ready",
  },
];

export function AdvantagesSection() {
  return (
    <section
      id="advantages"
      className="section-padding relative overflow-hidden"
      style={{
        background: "var(--gradient-dark)",
      }}
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=2000&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/95 via-dark-surface/90 to-dark-surface/95" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-surface-foreground mb-4">
            Mengapa Memilih <span className="text-accent">SI ITHB?</span>
          </h2>
          <p className="text-dark-surface-foreground/70 text-lg max-w-2xl mx-auto">
            Kami menawarkan pengalaman belajar terbaik dengan fasilitas modern dan kurikulum terupdate
          </p>
        </div>

        {/* Advantage Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-dark-surface/50 border border-white/10 backdrop-blur-sm hover:border-accent/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-accent/5" />
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 group-hover:shadow-[0_0_30px_hsl(177_85%_50%_/_0.3)] transition-all duration-300">
                  <advantage.icon className="w-7 h-7 text-accent" />
                </div>

                {/* Highlight Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold mb-4">
                  {advantage.highlight}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-surface-foreground mb-3">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-dark-surface-foreground/70 leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/10 rounded-tr-xl group-hover:border-accent/40 transition-colors" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/10 rounded-bl-xl group-hover:border-accent/40 transition-colors" />
            </div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Award, value: "A", label: "Akreditasi" },
            { icon: Users, value: "2000+", label: "Alumni" },
            { icon: Globe, value: "15+", label: "Negara Partner" },
            { icon: Briefcase, value: "92%", label: "Employment Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-dark-surface-foreground font-space">
                {stat.value}
              </div>
              <div className="text-sm text-dark-surface-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
