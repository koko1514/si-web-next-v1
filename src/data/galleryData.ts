export interface GalleryItem {
  type: "achievement" | "event";
  title: string;
  date: string;
  description: string;
  image: string;
  category: string;
  width: number;
  height: number;
}

export const galleryItems: GalleryItem[] = [
  {
    type: "achievement",
    title: "Juara 1 Business Case Competition",
    date: "Desember 2024",
    description:
      "Kolaborasi lintas universitas tim 'ALOY' (Richard Yahya - ITHB, Nathaniel J. R. - ITB, Adrianus Z. O. - UNPAR) meraih Juara 1 National Business Case Competition Vol 2.0.",
    image: "/prestasi/businesscasejuara1.jpg",
    category: "Kompetisi",
    width: 1510,
    height: 830,
  },
  {
    type: "achievement",
    title: "Juara 2 Business Plan Competition",
    date: "November 2024",
    description:
      "Kolaborasi lintas jurusan ITHB oleh Ricky Wijaya (Informatika 2023), Ferdiansyah R. A. Wicaksono (Sistem Informasi 2023), dan Stevio V. Rerung (Teknik Industri 2023) berhasil meraih Juara 2 dalam Christian Business Plan Competition Universitas Kristen Maranatha.",
    image: "/prestasi/businessplanjuara2.png",
    category: "Kompetisi",
    width: 971,
    height: 2402,
  },
  {
    type: "achievement",
    title: "Juara 2 Widyatama Academic International Competitions & Exhibitions",
    date: "Desember 2019",
    description:
      "Tim mahasiswa Sistem Informasi ITHB angkatan 2018 yang beranggotakan Priskarinda Putri Analicia Destiny, Ribka Wulan Simbolon, dan Lu'Lu'Ah Zakiyah meraih Juara 2 dalam Startup Proposal Contest.",
    image: "/prestasi/juarainter2.webp",
    category: "Kompetisi",
    width: 688,
    height: 686,
  },
  {
    type: "event",
    title: "Malam Akrab Sistem Informasi",
    date: "November 2024",
    description:
      "Malam keakraban (Makrab) untuk membangun kebersamaan, solidaritas, dan kekeluargaan yang erat antar angkatan mahasiswa Sistem Informasi ITHB.",
    image: "/event/Makrab.JPG",
    category: "Makrab",
    width: 5184,
    height: 3456,
  },
  {
    type: "event",
    title: "SI Company Visit",
    date: "Mei 2024",
    description:
      "Kunjungan industri mahasiswa Sistem Informasi ITHB ke perusahaan teknologi untuk melihat langsung implementasi sistem informasi di dunia kerja.",
    image: "/event/companyvisit.jpg",
    category: "Kunjungan",
    width: 1280,
    height: 853,
  },
  {
    type: "event",
    title: "Virtual Reality (VR) Experience",
    date: "Oktober 2024",
    description:
      "Eksplorasi teknologi imersif Virtual Reality (VR) oleh mahasiswa SI ITHB untuk merancang solusi virtual tour masa depan.",
    image: "/event/VR.JPG",
    category: "Teknologi",
    width: 2592,
    height: 1728,
  },
  {
    type: "event",
    title: "AKSI (Ajang Keakraban Sistem Informasi)",
    date: "September 2024",
    description:
      "Kegiatan orientasi dan penyambutan mahasiswa baru Sistem Informasi ITHB untuk mengenalkan program studi dan lingkungan jurusan sejak awal perkuliahan.",
    image: "/event/aksi24.jpg",
    category: "Sosialisasi",
    width: 1280,
    height: 853,
  },
  {
    type: "event",
    title: "SI Farewell Party",
    date: "Juni 2024",
    description:
      "Acara pelepasan dan farewell party wisudawan Sistem Informasi ITHB penuh kebersamaan dan kesan mendalam.",
    image: "/event/farewell20.JPG",
    category: "Farewell",
    width: 2592,
    height: 1728,
  },
  {
    type: "event",
    title: "Foto Bersama Mahasiswa SI",
    date: "Oktober 2024",
    description:
      "Momen kebersamaan dan foto bersama seluruh mahasiswa Sistem Informasi ITHB setelah selesainya rangkaian acara jurusan.",
    image: "/event/fotbar.jpg",
    category: "Kebersamaan",
    width: 1280,
    height: 853,
  },
  {
    type: "event",
    title: "ITHB Open House",
    date: "Maret 2024",
    description:
      "Pameran hasil karya inovatif dan pengenalan program studi Sistem Informasi ITHB kepada calon mahasiswa baru.",
    image: "/event/openhouse.jpeg",
    category: "Open House",
    width: 1280,
    height: 720,
  },
  {
    type: "event",
    title: "Foto Bersama Mahasiswa SI",
    date: "September 2024",
    description:
      "Momen dokumentasi kebersamaan dan foto bersama mahasiswa Sistem Informasi ITHB setelah berakhirnya suatu kegiatan kemahasiswaan.",
    image: "/event/Selected.JPG",
    category: "Kebersamaan",
    width: 2592,
    height: 1728,
  },
  {
    type: "event",
    title: "Studium Generale: Adaptasi Era AI",
    date: "Oktober 2024",
    description:
      "Kuliah umum Studium Generale bersama praktisi industri teknologi membahas strategi adaptasi karir dan integrasi kecerdasan buatan (AI) di bidang sistem informasi.",
    image: "/event/studium.JPG",
    category: "Seminar",
    width: 2592,
    height: 1728,
  },
];
