"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

// Interface pengganti agar tidak perlu merubah komponen lain yang sudah pakai <NavLink to="...">
export interface NavLinkCompatProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string; // Menerima prop 'to' khas Vite
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, to, ...props }, ref) => {
    // Mesin Next.js untuk membaca URL saat ini
    const pathname = usePathname();

    // Mengecek apakah halaman saat ini cocok dengan link tujuan
    const isActive = pathname === to;

    return (
      <Link
        ref={ref}
        href={to} // Mengonversi 'to' menjadi 'href' yang diminta Next.js
        className={cn(className, isActive && activeClassName)}
        {...props}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
