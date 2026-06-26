import { Briefcase, Globe, TrendingUp, CheckCircle2, UserCheck, Terminal, Compass, Layers } from "lucide-react";

const careerRoles = [
  {
    role: "System Analyst",
    desc: "Menganalisis kebutuhan bisnis organisasi dan merancang solusi sistem informasi terintegrasi.",
    icon: Compass,
  },
  {
    role: "System Integrator",
    desc: "Menghubungkan berbagai subsistem teknologi agar dapat berfungsi bersama secara harmonis.",
    icon: Layers,
  },
  {
    role: "Project Manager",
    desc: "Memimpin tim dalam merencanakan, mengeksekusi, dan menyelesaikan proyek sistem informasi.",
    icon: UserCheck,
  },
  {
    role: "IT Consultant",
    desc: "Memberikan rekomendasi strategis mengenai pemanfaatan teknologi informasi untuk mencapai tujuan bisnis.",
    icon: Briefcase,
  },
  {
    role: "Programmer",
    desc: "Membangun, menguji, dan mengembangkan kode perangkat lunak untuk menjalankan sistem bisnis.",
    icon: Terminal,
  },
];

export function CareerSection() {
  return (
    <section id="career" className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Masa Depan & Karier
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Prospek Karier <span className="gradient-text">Lulusan</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Digitalisasi bisnis mendorong seluruh jenis perusahaan beroperasi secara online dan menciptakan kebutuhan yang tinggi terhadap pemakaian sistem informasi dalam organisasi. Implementasi sistem informasi dalam organisasi adalah sebuah proses yang kompleks yang merupakan kompetensi utama lulusan Sistem Informasi.
          </p>
        </div>

        {/* Global Opportunity Highlight */}
        <div className="max-w-4xl mx-auto mb-16 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-secondary/10 via-accent/5 to-secondary/5 border border-secondary/20 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0">
              <Globe className="w-8 h-8 text-secondary animate-pulse-glow" />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                Peluang Karier Global dengan SAP ERP
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Sertifikasi bidang Enterprise Resource Planning (ERP) dari SAP membuka peluang karier global di perusahaan multinasional dalam proyek implementasi sistem terintegrasi skala besar.
              </p>
            </div>
          </div>
        </div>

        {/* Career Roles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {careerRoles.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/25 transition-colors">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                {/* Role Title */}
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 font-space">
                  {item.role}
                </h3>
                {/* Role Description */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
              
              {/* Subtle hover indicator */}
              <div className="mt-4 flex items-center gap-1 text-[10px] sm:text-xs text-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>Siap Kerja</span>
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
