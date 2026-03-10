"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Scan, GraduationCap, ShoppingBag, Users } from "lucide-react";

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { label: "Beranda", href: "/", icon: Home },
    { label: "Scan", href: "/scan", icon: Scan },
    { label: "Kelas", href: "/workshops", icon: GraduationCap },
    { label: "Marketplace", href: "/marketplace", icon: ShoppingBag },
    { label: "Komunitas", href: "/community", icon: Users },
  ];

  return (
    <nav className="fixed bottom-0 w-full max-w-md mx-auto bg-white border-t border-neutral-100 pb-safe z-50">
      <div className="flex justify-around items-center h-[72px] px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive ? "text-[#2cc295]" : "text-gray-400 hover:text-[#2cc295]/70"
                }`}
            >
              <Icon className={`w-[22px] h-[22px] ${isActive ? "stroke-[2.5px]" : "stroke-[2px]"}`} />
              <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
