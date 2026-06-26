import { Mail, Linkedin, GraduationCap, Award } from "lucide-react";

const lecturers = [
  {
    name: "Tamsir Hasudungan Sirait, S.Kom., M.T.",
    role: "Kepala Program Studi Sistem Informasi",
    expertise: [
      "Enterprise Resource Planning (ERP)",
      "Business Process Management",
      "System Architecture",
    ],
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Herastia Maharani, S.T., M.T.",
    role: "Dosen Senior & Peneliti",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Cut Fiarni, S.Si., M.T.",
    role: "Dosen Keahlian Manajemen TI",
    expertise: [
      "IT Infrastructure Management",
      "Business Intelligence",
      "IT Governance",
    ],
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Ivan Michael Siregar, S.T., M.T.",
    role: "Dosen Keahlian Basis Data & ERP",
    expertise: [
      "Database Administration",
      "Large Scale Data Management",
      "Odoo ERP",
    ],
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
  },
  {
    name: "Elisafina Siswanto, S.T., M.T.",
    role: "Dosen Keahlian Rekayasa Perangkat Lunak",
    expertise: ["Software Architecture", "Web Programming", "Java Programming"],
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
];

export function LecturersSection() {
  return (
    <section id="lecturers" className="section-padding bg-muted/20 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Staf Pengajar
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tim <span className="gradient-text">Dosen Terbaik</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Dosen Sistem Informasi ITHB merupakan akademisi dan praktisi profesional lulusan perguruan tinggi terkemuka.
          </p>
        </div>

        {/* Lecturers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {lecturers.map((lecturer, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card border border-border/60 overflow-hidden shadow-md hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 flex flex-col"
            >
              {/* Photo Frame */}
              <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                <img
                  src={lecturer.image}
                  alt={lecturer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  {/* Social Icons inside photo on hover */}
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-background/95 backdrop-blur flex items-center justify-center shadow hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-background/95 backdrop-blur flex items-center justify-center shadow hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  {/* Position/Role */}
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-secondary block mb-1">
                    {lecturer.role}
                  </span>
                  
                  {/* Name */}
                  <h3 className="font-bold text-foreground text-sm sm:text-base mb-3 leading-snug font-space group-hover:text-secondary transition-colors">
                    {lecturer.name}
                  </h3>
                </div>

                {/* Expertise Badges */}
                <div className="space-y-1.5 pt-2 border-t border-border/50">
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-semibold">
                    <GraduationCap className="w-3.5 h-3.5 text-secondary" />
                    <span>Bidang Keahlian:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {lecturer.expertise.map((exp, expIdx) => (
                      <span
                        key={expIdx}
                        className="px-2 py-0.5 rounded bg-muted text-muted-foreground text-[9px] font-medium"
                      >
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
