"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Globe, Cpu, Award, Users, BookOpen, Layers } from "lucide-react";

const advantages = [
  {
    icon: Cpu,
    title: "Kurikulum Industry 4.0",
    description: "Materi perkuliahan yang relevan dengan Industri 4.0, mencakup ERP System (SAP dengan Sertifikasi resmi & Odoo open-source), AI, Machine Learning, Hadoop (Data Engineering), dan Internet of Things (IoT).",
    highlight: "Industri 4.0",
  },
  {
    icon: Layers,
    title: "3 Pilihan Subjurusan",
    description: "Spesialisasi kurikulum yang didesain secara mendalam: IT Infrastructure Management, Business Intelligence, dan ERP System, memberikan fokus karier yang tajam bagi mahasiswa.",
    highlight: "Pilihan Konsentrasi",
  },
  {
    icon: BookOpen,
    title: "Pembelajaran Holistik",
    description: "Proses belajar mengajar yang efektif, interaktif di dalam kelas, serta menantang mahasiswa untuk mampu menganalisis masalah bisnis dan menghasilkan solusi berbasis TI, didukung e-learning Google Classroom.",
    highlight: "Pembelajaran Aktif",
  },
  {
    icon: Users,
    title: "Studium Generale & Alumni",
    description: "Kuliah umum reguler bersama pimpinan perusahaan terkemuka, pakar Sistem Informasi, serta sesi berbagi wawasan bersama alumni untuk memperkaya wawasan industri mahasiswa.",
    highlight: "Koneksi Industri",
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
        className="absolute inset-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage: `url('/bgithb.jpg')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface/45 via-dark-surface/60 to-dark-surface/75" />

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-surface-foreground mb-4">
            Mengapa Memilih <span className="text-accent">SI ITHB?</span>
          </h2>
          <p className="text-dark-surface-foreground/70 text-base md:text-lg max-w-2xl mx-auto">
            Kami menawarkan pengalaman belajar terbaik dengan fasilitas modern dan kurikulum terupdate
          </p>
        </motion.div>

        {/* Advantage Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-4 sm:p-6 md:p-8 rounded-2xl bg-dark-surface/50 border border-white/10 backdrop-blur-sm hover:border-accent/50 transition-colors duration-300 cursor-default"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-accent/5" />
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-accent/20 group-hover:shadow-[0_0_30px_hsl(177_85%_50%_/_0.3)] transition-all duration-300">
                  <advantage.icon className="w-5 h-5 sm:w-7 sm:h-7 text-accent" />
                </div>

                {/* Highlight Badge */}
                <span className="inline-block px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-accent/15 text-amber-300 border border-accent/30 text-[10px] sm:text-xs font-semibold mb-3 sm:mb-4 backdrop-blur-sm shadow-sm">
                  {advantage.highlight}
                </span>

                {/* Title */}
                <h3 className="text-sm sm:text-lg lg:text-xl font-bold text-dark-surface-foreground mb-2 sm:mb-3">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-dark-surface-foreground/70 text-xs sm:text-sm lg:text-base leading-relaxed">
                  {advantage.description}
                </p>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-white/10 rounded-tr-xl group-hover:border-accent/40 transition-colors" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-white/10 rounded-bl-xl group-hover:border-accent/40 transition-colors" />
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 gap-6 max-w-xl mx-auto"
        >
          {[
            { icon: Award, value: "UNGGUL", label: "Akreditasi LAM INFOKOM" },
            { icon: Briefcase, value: "90%+", label: "Employment Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-xl bg-white/5 border border-white/10 transition-colors hover:border-accent/30"
            >
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <div className="text-2xl md:text-3xl font-bold text-dark-surface-foreground font-space">
                {stat.value}
              </div>
              <div className="text-sm text-dark-surface-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
