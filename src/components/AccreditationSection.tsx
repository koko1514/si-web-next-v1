import { CheckCircle2, Shield, Award, Star } from "lucide-react";

const accreditations = [
  {
    name: "BAN-PT",
    fullName: "Badan Akreditasi Nasional",
    grade: "A",
    description: "Akreditasi Unggul",
    icon: Shield,
  },
  {
    name: "ABET",
    fullName: "International Accreditation",
    grade: "Accredited",
    description: "Computing Program",
    icon: Award,
  },
  {
    name: "ASIIN",
    fullName: "German Accreditation",
    grade: "Certified",
    description: "Engineering Excellence",
    icon: CheckCircle2,
  },
  {
    name: "AUN-QA",
    fullName: "ASEAN University Network",
    grade: "Certified",
    description: "Quality Assurance",
    icon: Star,
  },
];

export function AccreditationSection() {
  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Akreditasi & Sertifikasi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Standar <span className="gradient-text">Kualitas Terjamin</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diakui oleh lembaga akreditasi nasional dan internasional terkemuka
          </p>
        </div>

        {/* Accreditation Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((accred, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-secondary/50 hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <accred.icon className="w-8 h-8 text-secondary" />
              </div>

              {/* Name */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground font-space mb-1">
                {accred.name}
              </h3>

              {/* Grade Badge */}
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-3">
                {accred.grade}
              </span>

              {/* Full Name */}
              <p className="text-sm text-muted-foreground mb-1">{accred.fullName}</p>
              <p className="text-xs text-muted-foreground/70">{accred.description}</p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-accent" />
            <span className="text-foreground font-medium">
              Terakreditasi & Diakui Secara Internasional
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
