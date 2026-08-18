import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "https://si.ithb.ac.id");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sistem Informasi ITHB | Program Studi IT & ERP Berstandar Global",
    template: "%s | Sistem Informasi ITHB",
  },
  description:
    "Program Studi Sistem Informasi di Institut Teknologi Harapan Bangsa (ITHB) Bandung. Kurikulum berstandar industri dengan fokus pada ERP (SAP & Odoo), AI, Data Science, IT Infrastructure, dan persiapan karier teknologi global.",
  keywords: [
    "Sistem Informasi ITHB",
    "ITHB Bandung",
    "Kuliah IT Bandung",
    "Program Studi Sistem Informasi",
    "Jurusan Sistem Informasi Terbaik",
    "SAP Certified University Indonesia",
    "ERP System SAP Odoo",
    "Data Science Bandung",
    "Institut Teknologi Harapan Bangsa",
    "Beasiswa ITHB",
  ],
  authors: [{ name: "Sistem Informasi ITHB", url: siteUrl }],
  creator: "Sistem Informasi ITHB",
  publisher: "Institut Teknologi Harapan Bangsa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sistem Informasi ITHB | Program Studi IT & ERP Berstandar Global",
    description:
      "Program Studi Sistem Informasi ITHB Bandung mempersiapkan profesional IT unggul berstandar global dengan keahlian SAP, ERP, AI, dan Data Science.",
    url: siteUrl,
    siteName: "Sistem Informasi ITHB",
    images: [
      {
        url: "/siithb.png",
        width: 1200,
        height: 630,
        alt: "Sistem Informasi ITHB Bandung Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistem Informasi ITHB | Program Studi IT & ERP Berstandar Global",
    description:
      "Program Studi Sistem Informasi ITHB Bandung mempersiapkan profesional IT unggul berstandar global.",
    images: ["/siithb.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  verification: {
    google: "y_LfGzhugtMnvIgTdMHZ16qW4plyqEIAkXh5HTkcFGs",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Sistem Informasi ITHB",
    alternateName: "Program Studi Sistem Informasi Institut Teknologi Harapan Bangsa",
    url: siteUrl,
    logo: `${siteUrl}/siithb.png`,
    description:
      "Program Studi Sistem Informasi di Institut Teknologi Harapan Bangsa (ITHB) Bandung dengan kurikulum ERP (SAP & Odoo), AI, dan Data Science.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Dipati Ukur No.80-84, Dago, Kec. Coblong",
      addressLocality: "Bandung",
      addressRegion: "Jawa Barat",
      postalCode: "40132",
      addressCountry: "ID",
    },
    telephone: "+62 22 250 6636",
    sameAs: [
      "https://www.instagram.com/hmsi.ithb/",
      "https://www.youtube.com/@himpunanmahasiswasisteminf6411",
    ],
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
