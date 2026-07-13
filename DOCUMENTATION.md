# Dokumentasi Teknis Website Sistem Informasi ITHB

Dokumen ini ditulis sebagai panduan bagi developer (termasuk junior developer) untuk memahami arsitektur, integrasi data, dan fitur-fitur interaktif pada website Sistem Informasi ITHB.

---

## 1. Arsitektur Proyek & Tech Stack

Proyek ini dibangun menggunakan teknologi modern berikut:
* **Framework**: Next.js (App Router) dengan TypeScript.
* **Styling**: Tailwind CSS (Desain modern, dark-mode, backdrop glassmorphism).
* **Ikon**: Lucide React.
* **Routing**: Next.js File-based Routing (`src/app`).

### Struktur Rute Utama:
* `/` (Beranda): Halaman utama satu halaman (*single page*) dengan berbagai section interaktif.
* `/galeri` (Galeri): Halaman khusus galeri foto kegiatan dan prestasi mahasiswa dengan filter kategori dinamis.
* `/metaverse` (Virtual Tour): Halaman eksplorasi dunia virtual metaverse Sistem Informasi ITHB.

---

## 2. Struktur Data Sentral (Gallery Data)

Untuk menghindari duplikasi kode dan menjaga prinsip *DRY (Don't Repeat Yourself)*, seluruh data prestasi dan event disatukan di file:
👉 **[`src/data/galleryData.ts`](file:///d:/~PINDAHAN/~Project/~Next.js/si-web-next-v1-main/src/data/galleryData.ts)**

### Format Item Data (`GalleryItem`):
Setiap foto wajib mengikuti tipe data TypeScript berikut:
```typescript
export interface GalleryItem {
  type: "achievement" | "event"; // Pembeda prestasi vs event
  title: string;                 // Judul kegiatan/sertifikat
  date: string;                  // Momen pelaksanaan (contoh: "Desember 2024")
  description: string;           // Keterangan lengkap tim/detail kegiatan
  image: string;                 // Path file foto (disimpan di /public)
  category: string;              // Kategori filter (contoh: "Kompetisi", "Makrab")
  width: number;                 // Lebar asli piksel foto (wajib untuk auto-scaling Lightbox)
  height: number;                // Tinggi asli piksel foto (wajib untuk auto-scaling Lightbox)
}
```

---

## 3. Fitur Utama & Logika Kode

### A. Grid Beranda & Slicing Masonry Dinamis
Pada halaman Beranda ([`AchievementsSection.tsx`](file:///d:/~PINDAHAN/~Project/~Next.js/si-web-next-v1-main/src/components/AchievementsSection.tsx)), grid disusun menggunakan CSS Columns Masonry. Agar seimbang dan penuh pada 3 kolom desktop, kita membatasi hanya **6 item** dengan urutan programatis khusus agar tinggi kolom seimbang (distribusi item tinggi di kolom kanan):
```typescript
const achievementsList = galleryItems.filter((item) => item.type === "achievement");
const eventsList = galleryItems.filter((item) => item.type === "event");

// Urutan khusus untuk menyeimbangkan tinggi grid 3-kolom desktop
const achievements = [
  achievementsList[0], // Juara 1 Business Case (Landscape)
  eventsList[0],       // Malam Akrab (Landscape)
  eventsList[1],       // SI Company Visit (Landscape)
  eventsList[2],       // Virtual Reality (Landscape)
  achievementsList[2], // Juara 2 Widyatama (Square)
  achievementsList[1], // Juara 2 Business Plan (Portrait Sangat Tinggi - ditempatkan paling akhir agar di kolom ke-3)
].filter(Boolean);
```

### B. Smart Scroll Hide/Show & Click Lock pada Navbar
Navbar ([`Navbar.tsx`](file:///d:/~PINDAHAN/~Project/~Next.js/si-web-next-v1-main/src/components/Navbar.tsx)) memiliki fitur cerdas:
1. **Sembunyi/Muncul Otomatis**: Menyembunyikan dirinya saat scroll ke bawah (melewati 400px) dan muncul kembali saat scroll ke atas.
2. **Click Navigation Lock**: Masalah umum saat mengklik menu anchor adalah navbar langsung tersembunyi karena browser bergeser otomatis ke bawah (*smooth scroll*). Kita membatalkannya dengan menyisipkan status `isNavigating` selama **1,5 detik**:
   ```typescript
   if (isHomePage && (href.startsWith("/#") || href.startsWith("#"))) {
     e.preventDefault();
     const targetId = href.replace("/#", "").replace("#", "");
     const element = document.getElementById(targetId);
     if (element) {
       setIsNavigating(true);
       setIsVisible(true); // Paksa navbar tetap tampil
       element.scrollIntoView({ behavior: "smooth" });
       setTimeout(() => setIsNavigating(false), 1500); // Kunci dilepas setelah 1.5s
     }
   }
   ```

### C. Lightbox Modal yang Presisi
Pada modal pembesar gambar (di Achievements dan GalleryClient):
1. **Aspek Rasio Dinamis**: Agar gambar portrait tidak menyisakan ruang hitam yang tebal di kanan-kirinya, pembungkus gambar modal dihitung dinamis menggunakan aspek rasio asli gambar (`width / height`):
   ```tsx
   style={{ 
     aspectRatio: `${selectedWidth} / ${selectedHeight}`,
     maxWidth: "90vw",
     maxHeight: "85vh",
     width: "auto",
     height: "auto"
   }}
   ```
2. **Klik Luar untuk Menutup**: Menggunakan pembungkus luar (`div`) dengan event `onClick={() => setIsOpen(false)}` dan kursor `cursor-zoom-out`. Wadah bagian dalam menggunakan `onClick={(e) => e.stopPropagation()}` agar mengklik gambar tidak menutup modal secara tidak sengaja.

### D. Overlay Teks Anti-Overflow & Gradasi Dinamis
Untuk mencegah teks meluap (*overflow*) pada gambar landscape yang pendek:
1. Ukuran padding menyusut secara responsif (`p-3 sm:p-4 md:p-5`).
2. Deskripsi dibatasi maksimal 2 baris pada mobile dan 3 baris pada desktop menggunakan Tailwind CSS `line-clamp-2 md:line-clamp-3`.
3. Latar belakang memiliki gradasi gelap dinamis yang menebal saat di-hover (`opacity-75 group-hover:opacity-95 transition-opacity duration-500`) untuk menjamin teks putih selalu kontras dan mudah dibaca.

---

## 4. Integrasi Instagram API (Social Hub)

Feed Instagram pada [`SocialHubSection.tsx`](file:///d:/~PINDAHAN/~Project/~Next.js/si-web-next-v1-main/src/components/SocialHubSection.tsx) ditarik dinamis melalui **Instagram Graph API**.

### Cara Konfigurasi Token (Untuk Junior Developer):
Sejak 4 Desember 2024, Meta menghapus *Instagram Basic Display API*. Semua feed sekarang harus dikonfigurasi melalui tipe **Akun Profesional (Kreator/Bisnis)**.

1. **Ubah Akun Instagram Jurusan ke Akun Profesional**:
   * Buka aplikasi Instagram -> Pengaturan -> Jenis dan Alat Akun.
   * Pilih **Beralih ke Akun Profesional** (Kreator atau Bisnis).
   * Hubungkan akun tersebut dengan **Halaman Facebook (Facebook Page)** jurusan.
2. **Pendaftaran di Meta Developer Portal**:
   * Buat aplikasi Meta bertipe **"Bisnis"** (misal: "Feed Web SI").
   * Tambahkan produk **Instagram Graph API** (Kelola pesan & konten di Instagram).
   * Pada bilah kiri menu **Peran aplikasi > Peran**, tambahkan akun Facebook Anda sebagai **Tester / Developer** agar proses otentikasi lolos dalam mode pengembangan.
   * Klik **Buat Token** (Generate Token) pada panel User Token Generator.
3. **Pengaturan Multi-Akun**:
   * Sistem ini mendukung penggabungan feed dari **2 akun Instagram sekaligus** secara otomatis dan diurutkan secara kronologis (terbaru di atas).
   * Buat file `.env.local` di folder utama website dan masukkan token:
     ```env
     NEXT_PUBLIC_INSTAGRAM_TOKEN=token_akses_akun_pertama
     NEXT_PUBLIC_INSTAGRAM_TOKEN_2=token_akses_akun_kedua
     ```
   * Matikan dan jalankan kembali server dev (`npm run dev`) setelah mengubah file `.env.local`.

---

## 5. Panduan Pemeliharaan (Maintenance Checklist)

1. **Menambah Foto Kegiatan/Prestasi**:
   * Simpan file gambar di folder `/public/prestasi/` atau `/public/event/`.
   * Buka [`src/data/galleryData.ts`](file:///d:/~PINDAHAN/~Project/~Next.js/si-web-next-v1-main/src/data/galleryData.ts), tambahkan objek data baru di dalam array `galleryItems`. Lengkapi nilai `width` dan `height` sesuai piksel asli gambar.
2. **Memperbarui Informasi Akreditas**:
   * Simpan file gambar sertifikat BAN-PT baru di `/public`.
   * Buka [`src/components/AccreditationSection.tsx`](file:///d:/~PINDAHAN/~Project/~Next.js/si-web-next-v1-main/src/components/AccreditationSection.tsx#L9) dan ubah variabel `certImageSrc` ke path sertifikat yang baru.
3. **Verifikasi Build**:
   * Selalu jalankan `npm run build` setelah mengubah kode untuk mendeteksi error pengetikan TypeScript sebelum proses deploy ke server production.

---

## 6. Alur Kolaborasi & Deploy Otomatis (CI/CD Vercel & GitHub)

Situs ini menggunakan integrasi otomatis antara **GitHub** dan **Vercel**. Setiap kali ada perubahan kode yang di-*push* ke repositori GitHub, Vercel akan otomatis mendeteksi perubahan tersebut, menjalankan build, dan memperbarui website langsung secara online dalam waktu 1-2 menit.

Agar junior developer di periode berikutnya dapat melakukan pembaruan web secara aman, ikuti panduan kolaborasi berikut:

### A. Pengaturan Hak Akses (Kolaborator)
1. Pemilik repositori utama (Anda) harus menambahkan akun GitHub junior tersebut sebagai **Collaborator** di repositori GitHub Anda (**Settings > Collaborators > Add People**).
2. Setelah junior menerima undangan kolaborator, mereka akan memiliki akses untuk melakukan `git push` langsung ke repositori tersebut.

### B. Konfigurasi Environment Variables di Vercel (Penting!)
File `.env.local` tidak diikutkan (*ignored*) saat melakukan push ke GitHub demi keamanan token. Agar website versi online (Vercel) dapat membaca feed Instagram dengan lancar, token tersebut harus dimasukkan langsung ke dasbor Vercel:
1. Buka dasbor **Vercel** Anda, pilih proyek website ini.
2. Pergi ke tab **Settings > Environment Variables**.
3. Tambahkan variabel baru:
   * **Key**: `NEXT_PUBLIC_INSTAGRAM_TOKEN` | **Value**: *(masukkan token akun ke-1)*
   * **Key**: `NEXT_PUBLIC_INSTAGRAM_TOKEN_2` | **Value**: *(masukkan token akun ke-2)*
4. Klik **Save** dan lakukan redeploy agar konfigurasi baru terbaca.

### C. Alur Kerja Junior (Git Workflow)
Agar tidak merusak website utama saat melakukan pembaruan, ajarkan junior alur kerja berikut:
1. **Clone & Setup**: Download/clone repositori ke komputer lokal, lalu jalankan `npm install` dan buat file `.env.local` lokal untuk testing.
2. **Uji Coba Lokal**: Lakukan perubahan kode (misal: tambah foto kegiatan di `/public/event` dan daftarkan di `src/data/galleryData.ts`).
3. **Build Test**: Jalankan perintah `npm run build` di terminal lokal mereka untuk memastikan tidak ada error TypeScript sebelum di-push.
4. **Push ke GitHub**:
   * Ketik perintah:
     ```bash
     git add .
     git commit -m "feat: tambah dokumentasi foto aksi maba 2026"
     git push origin main
     ```
5. **Auto Deploy**: Vercel akan otomatis mendeteksi commit tersebut dan merilis pembaruan secara instan ke domain website Anda.
