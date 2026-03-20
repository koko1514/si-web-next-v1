import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "Sistem Informasi",
  description: "Website Sistem Informasi",
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
