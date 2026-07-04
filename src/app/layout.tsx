import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "Sistem Informasi ITHB | Program Studi IT & ERP Berstandar Global",
  description: "Program Studi Sistem Informasi di Institut Teknologi Harapan Bangsa (ITHB) Bandung. Kurikulum berstandar industri dengan fokus pada ERP (SAP & Odoo), AI, Data Science, dan persiapan karier teknologi global.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
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
