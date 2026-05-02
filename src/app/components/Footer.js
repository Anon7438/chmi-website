"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F2A44] text-white mt-20">

      {/* FULL WIDTH WRAPPER */}
      <div className="w-full px-6 md:px-10 lg:px-16 py-16">

        {/* GRID */}
        <div className="grid md:grid-cols-[1.2fr_1fr_1fr] gap-10">

          {/* ================= LEFT ================= */}
          <div>
            
            <div className="flex items-center gap-4">
              <div className="bg-white p-2 rounded-lg shrink-0">
                <Image
                  src="/logo_latest.jpeg"
                  alt="CHMI Logo"
                  width={230}
                  height={90}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold">
                  Central Highlands
                </h3>
                <p className="text-teal-400 text-sm font-medium">
                  Mobile Imaging
                </p>
              </div>
            </div>

            <p className="text-sm text-blue-200 mt-6 leading-relaxed max-w-md">
              Professional mobile ultrasound services across Ballarat & the Central Highlands. Radiologist-reported, Medicare compliant, delivered onsite.
            </p>

            {/* ✅ BADGES (SMART WRAP — MOBILE FIXED) */}
            <div className="flex flex-wrap gap-3 mt-6">

              <span className="px-4 py-1.5 text-xs border border-white/20 rounded-full">
                Radiologist Reported
              </span>

              <span className="px-4 py-1.5 text-xs border border-white/20 rounded-full">
                Medicare Compliant
              </span>

              <span className="px-4 py-1.5 text-xs border border-white/20 rounded-full">
                Bulk Billing
              </span>

            </div>

          </div>

          {/* ================= MIDDLE ================= */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-400 mb-5 font-semibold">
              QUICK LINKS
            </h3>

            <div className="flex flex-col gap-3 text-sm text-blue-200">
              <Link href="/services" className="hover:text-white">Services</Link>
              <Link href="/for-gps" className="hover:text-white">For GPs</Link>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            <h3 className="text-xs tracking-[0.2em] text-gray-400 mb-5 font-semibold">
              CONTACT
            </h3>

            <div className="space-y-4 text-sm text-blue-200">

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-teal-400" />
                +61 000 000 000
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-teal-400" />
                info@chmi.com.au
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-teal-400 mt-0.5" />
                Ballarat & Central Highlands, Victoria
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ✅ FULL WIDTH BORDER (OUTSIDE CONTAINER) */}
      <div className="border-t border-white/10 w-full"></div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="w-full px-6 md:px-10 lg:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-blue-300">

        <p>
          © {new Date().getFullYear()} Central Highlands Mobile Imaging. All rights reserved.
        </p>

        <p className="text-center md:text-right">
          Mobile diagnostic ultrasound — Ballarat · Central Highlands
        </p>

      </div>

    </footer>
  );
}