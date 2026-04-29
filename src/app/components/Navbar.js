"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (path, label) => (
    <Link
      href={path}
      onClick={() => setOpen(false)}
      className={`relative group ${pathname === path
        ? "text-blue-600 font-semibold"
        : "text-gray-700"
        }`}
    >
      <span className="group-hover:text-blue-600 transition">
        {label}
      </span>

      {/* underline animation */}
      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all group-hover:w-full"></span>
    </Link>
  );

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="CHMI"
            width={220}
            height={80}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navLink("/", "Home")}
          {navLink("/services", "Services")}
          {navLink("/for-gps", "for-gps")}
          {navLink("/about", "About")}
          {navLink("/contact", "Contact")}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Book Now
            </button>
          </Link>
        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-6">

          {/* FIXED VERTICAL MENU */}
          <div className="flex flex-col gap-4 text-base font-medium">
            {navLink("/", "Home")}
            {navLink("/services", "Services")}
            {navLink("/about", "About")}
            {navLink("/contact", "Contact")}
          </div>

          <Link href="/contact">
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Book Now
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}