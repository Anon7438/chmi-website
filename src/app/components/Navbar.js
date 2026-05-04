"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/for-gps", label: "For GPs" },
    { path: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-[70px] flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo_latest_2.jpeg"
            alt="CHMI"
            width={180}
            height={60}
            className="object-contain w-[140px] md:w-[230px]"
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium">
          {navItems.map((item) => {
            const active = pathname === item.path;

            return (
              <Link key={item.path} href={item.path} className="relative group">
                <span
                  className={`transition ${active
                    ? "text-[#0F2A44]"
                    : "text-gray-600 hover:text-[#0F2A44]"
                    }`}
                >
                  {item.label}
                </span>

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-[#2A9D8F] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            );
          })}
        </div>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Phone size={16} />
            <span className="font-medium">+61 000 000 000</span>
          </div>

          <Link href="/contact">
            <button className="bg-[#0F2A44] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#0c2236] transition">
              Send Referral
            </button>
          </Link>
        </div>

        {/* MOBILE HAMBURGER ONLY */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white md:!hidden"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`w-6 h-[2.5px] bg-[#0F2A44] transition ${open ? "rotate-45 translate-y-[7px]" : ""
                }`}
            />
            <span
              className={`w-6 h-[2.5px] bg-[#0F2A44] transition ${open ? "opacity-0" : ""
                }`}
            />
            <span
              className={`w-6 h-[2.5px] bg-[#0F2A44] transition ${open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            {/* PANEL */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[70px] left-0 w-full bg-white z-50 px-6 py-6 border-t"
            >
              <div className="flex flex-col gap-6 text-base font-medium">

                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`${pathname === item.path
                      ? "text-[#0F2A44]"
                      : "text-gray-700"
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <Link href="/contact" onClick={() => setOpen(false)}>
                  <button className="w-full bg-[#0F2A44] text-white py-3 rounded-full mt-2">
                    Send Referral
                  </button>
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}