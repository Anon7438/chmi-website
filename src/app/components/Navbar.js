"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/for-gps", label: "For GPs" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  // Detect scroll (for blur navbar)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm"
            : "bg-white"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CHMI"
            width={130}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">

          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative group"
              >
                <span
                  className={`transition ${
                    isActive
                      ? "text-[#1E3A5F]"
                      : "text-gray-600 hover:text-[#1E3A5F]"
                  }`}
                >
                  {item.label}
                </span>

                {/* UNDERLINE */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[2px] bg-[#2A9D8F]
                    transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-6">

          {/* PHONE */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone size={16} />
            <span className="font-medium">+61 000 000 000</span>
          </div>

          {/* CTA */}
          <Link href="/contact" className="group">
            <button className="
              relative overflow-hidden
              bg-[#1E3A5F] text-white px-6 py-2.5 rounded-full text-sm font-medium
              transition-all duration-300
              hover:shadow-lg hover:-translate-y-[2px]
              active:scale-95
            ">
              <span className="relative z-10">Request Referral</span>

              <span className="
                absolute inset-0 bg-white/10 opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
              " />
            </button>
          </Link>

        </div>

        {/* MOBILE ICON */}
        <button
          className="md:hidden z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* BACKDROP */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`
          fixed top-[72px] left-0 w-full bg-white z-50
          md:hidden px-6 py-6 space-y-6 border-t
          transition-all duration-300
          ${open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-4 text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setOpen(false)}
              className={`transition ${
                pathname === item.path
                  ? "text-[#1E3A5F]"
                  : "text-gray-700 hover:text-[#1E3A5F]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/contact">
          <button className="
            w-full bg-[#1E3A5F] text-white py-3 rounded-full
            transition-all duration-300
            hover:bg-[#16324f] active:scale-95
          ">
            Request Referral
          </button>
        </Link>
      </div>
    </nav>
  );
}