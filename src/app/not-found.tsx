"use client"; // Wajib karena kita menggunakan useEffect dan usePathname

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function NotFound() {
  // Pengganti useLocation() di Next.js
  const pathname = usePathname();

  useEffect(() => {
    // Akan mencatat URL yang salah di console browser
    console.error(
      "404 Error: User attempted to access non-existent route:",
      pathname,
    );
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold font-space">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Oops! Halaman tidak ditemukan
        </p>

        {/* Menggunakan Link Next.js sebagai pengganti tag <a> */}
        <Link
          href="/"
          className="text-primary underline hover:text-primary/90 font-outfit"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
