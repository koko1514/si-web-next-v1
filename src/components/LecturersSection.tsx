"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Linkedin, GraduationCap, Award } from "lucide-react";

function LecturerImage({ src, alt }: { src: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      className="object-cover group-hover:scale-105 transition-transform duration-500"
      onError={() => setImgSrc("/placeholder.svg")}
    />
  );
}

const lecturers = [
  {
    name: "Tamsir Hasudungan Sirait, S.Kom., M.T.",
    role: "Kepala Program Studi Sistem Informasi",
    expertise: [
      "Enterprise System & ERP",
      "Large Scale Data Management",
      "Manajemen Proyek SI",
      "Komputasi Net Sentris",
    ],
    image: "/tamsir.png",
    linkedin: "https://www.linkedin.com/in/tamsir-h-sirait-77b09824/",
    email: "tamsir@ithb.ac.id",
  },
  {
    name: "Herastia Maharani, S.T., M.T.",
    role: "Dosen Bidang Basis Data & HCI",
    expertise: [
      "Sistem Basis Data",
      "UI/UX Design & Data Mining",
      "E-Commerce & Applied IT/IS",
      "Manajemen Data & Informasi",
    ],
    image: "/mara.png",
    linkedin: "https://www.linkedin.com/in/herastia-maharani-ocp-97709538/",
    email: "herastia@ithb.ac.id",
  },
  {
    name: "Cut Fiarni, S.Si., M.T.",
    role: "Dosen Bidang Proses Bisnis & Analisis Data",
    expertise: [
      "Analisis & Manajemen Proses Bisnis",
      "Analisis Data & Kinerja Sistem",
      "Sistem Pendukung Keputusan",
      "E-Business & IT Governance",
    ],
    image: "/rani.jpg",
    linkedin: "https://www.linkedin.com/in/cut-fiarni/",
    email: "cutfiarni@ithb.ac.id",
  },
  {
    name: "Ivan Michael Siregar, S.T., M.T.",
    role: "Dosen Bidang Algoritma & Pemrograman",
    expertise: [
      "Algoritma & Struktur Data",
      "Dasar & Integrasi Pemrograman",
      "Pemrograman Mobile",
      "Teknologi Integratif",
    ],
    image: "/ivan.jpg",
    linkedin: "https://www.linkedin.com/in/imsiregar/",
    email: "ivan@ithb.ac.id",
  },
  {
    name: "Yosi Yonata, S.T., M.T.",
    role: "Dosen Bidang Teknologi Web & Humaniora",
    expertise: [
      "Teknologi Web & Internet",
      "Pengembangan Aplikasi Web",
      "Etika Profesi & Humaniora",
      "Literasi Digital",
    ],
    image: "/placeholder.svg",
  },
];

export function LecturersSection() {
  return (
    <section id="lecturers" className="section-padding bg-card relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tim <span className="gradient-text">Dosen Terbaik</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Dosen Sistem Informasi ITHB merupakan akademisi dan praktisi profesional lulusan perguruan tinggi terkemuka.
          </p>
        </motion.div>

        {/* Lecturers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {lecturers.map((lecturer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl bg-card border border-border/60 overflow-hidden shadow-md hover:shadow-2xl hover:border-secondary/30 transition-colors duration-300 flex flex-col cursor-default"
            >
              {/* Photo Frame */}
              <div className="aspect-[4/5] relative overflow-hidden bg-muted">
                <LecturerImage src={lecturer.image} alt={lecturer.name} />
                {(lecturer.email || lecturer.linkedin) && (
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    {/* Social Icons inside photo on hover */}
                    <div className="flex gap-3">
                      {lecturer.email && (
                        <a
                          href={`mailto:${lecturer.email}`}
                          className="w-8 h-8 rounded-lg bg-background/95 backdrop-blur flex items-center justify-center shadow hover:bg-secondary hover:text-secondary-foreground transition-colors"
                          aria-label="Email"
                        >
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                      {lecturer.linkedin && (
                        <a
                          href={lecturer.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-lg bg-background/95 backdrop-blur flex items-center justify-center shadow hover:bg-secondary hover:text-secondary-foreground transition-colors"
                          aria-label="LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
