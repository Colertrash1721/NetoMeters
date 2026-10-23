"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "boxicons/css/boxicons.min.css";

const menuItems = [
  {
    name: "Tablero",
    href: "/dashboard",
    icon: "bx-grid-alt",
  },
  {
    name: "Medidores",
    href: "/medidores",
    icon: "bx-tachometer",
  },
  {
    name: "Análisis",
    href: "/analisis",
    icon: "bx-line-chart",
  },
  {
    name: "Reportes",
    href: "/reportes",
    icon: "bx-file",
  },
  {
    name: "Alarmas",
    href: "/alarmas",
    icon: "bx-error",
  },
  {
    name: "Configuración",
    href: "/settings",
    icon: "bx-cog",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex h-full w-full flex-col bg-[#111c2e] px-4 py-6 border-r border-gray-700">

      {/* Logo */}
      <div className="mb-10 flex items-center gap-3 px-3">
        <Image
          src="/assets/Logo.png"
          alt="NetoMeters Logo"
          width={32}
          height={32}
          className="rounded-lg"
        />

        <span className="text-xl font-semibold tracking-tight text-gray-100">
          NetoMeters
        </span>
      </div>

      {/* Navigation */}
      <div className="flex flex-col gap-2">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.href ||
            pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                group flex items-center gap-4
                rounded-lg px-4 py-3
                text-sm font-medium
                transition-all duration-200
                ${
                  isActive
                    ? "bg-[#26374d] text-gray-100"
                    : "text-[#8994a7] hover:bg-[#1d2c40] hover:text-gray-100"
                }
              `}
            >
              <i
                className={`
                  bx ${item.icon} text-xl
                  transition-colors duration-200
                  ${
                    isActive
                      ? "text-[#37a6a0]"
                      : "text-[#8994a7] group-hover:text-[#37a6a0]"
                  }
                `}
              />

              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}