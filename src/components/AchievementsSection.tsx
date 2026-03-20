import { Trophy, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    type: "achievement",
    title: "Juara 1 Hackathon Nasional",
    date: "Desember 2024",
    description:
      "Tim mahasiswa SI ITHB memenangkan kompetisi hackathon tingkat nasional dengan inovasi smart city.",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    category: "Kompetisi",
  },
  {
    type: "event",
    title: "IT Career Fair 2025",
    date: "15 Januari 2025",
    description:
      "Pameran karir terbesar dengan partisipasi 30+ perusahaan teknologi terkemuka.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    category: "Event",
  },
  {
    type: "achievement",
    title: "Publikasi Jurnal Internasional",
    date: "November 2024",
    description:
      "Penelitian kolaboratif dosen dan mahasiswa tentang AI dipublikasikan di jurnal Q1.",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80",
    category: "Riset",
  },
  {
    type: "event",
    title: "Workshop Cloud Computing",
    date: "20 Januari 2025",
    description:
      "Pelatihan intensif AWS dan Google Cloud bersama praktisi industri.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    category: "Workshop",
  },
  {
    type: "achievement",
    title: "Best Paper Award ICITS 2024",
    date: "Oktober 2024",
    description:
      "Penghargaan paper terbaik di International Conference on IT Systems.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    category: "Konferensi",
  },
  {
    type: "event",
    title: "Tech Talk: Future of AI",
    date: "25 Januari 2025",
    description: "Seminar eksklusif bersama pakar AI dari Silicon Valley.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    category: "Seminar",
  },
];

export function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-secondary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-accent/5 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Prestasi & Event
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Capaian <span className="gradient-text">Terbaik Kami</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rangkaian prestasi gemilang dan event menarik dari komunitas SI ITHB
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                index === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${index === 0 ? "aspect-[16/10]" : "aspect-[4/3]"} overflow-hidden`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-dark-surface/50 to-transparent opacity-80" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* Category Badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      item.type === "achievement"
                        ? "bg-accent/20 text-accent"
                        : "bg-secondary/20 text-secondary"
                    }`}
                  >
                    {item.type === "achievement" ? (
                      <Trophy className="w-3 h-3 inline mr-1" />
                    ) : (
                      <Calendar className="w-3 h-3 inline mr-1" />
                    )}
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-bold text-dark-surface-foreground mb-2 ${
                    index === 0 ? "text-xl md:text-2xl" : "text-lg"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Date */}
                <p className="text-dark-surface-foreground/60 text-sm mb-2">
                  {item.date}
                </p>

                {/* Description - Only show on larger card or hover */}
                <p
                  className={`text-dark-surface-foreground/70 text-sm leading-relaxed ${
                    index === 0 ? "block" : "hidden group-hover:block"
                  }`}
                >
                  {item.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="group">
            Lihat Semua Prestasi
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
