"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-20">

      {/* GLASS BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F]/95 to-[#2A9D8F]/90 backdrop-blur-xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">

        <div className="grid md:grid-cols-3 gap-12">

          {/* ================= LEFT ================= */}
          <div>
            {/* LOGO */}
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="CHMI Logo"
                width={140}
                height={50}
                className="object-contain"
              />
            </div>

            <p className="text-sm text-blue-100 mt-4 max-w-xs">
              Precision Imaging. Delivered Onsite. Mobile ultrasound services across Ballarat & Central Highlands.
            </p>

            {/* CTA */}
            <Link
              href="/contact"
              className="inline-block mt-6 bg-white text-[#1E3A5F] px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition shadow-md"
            >
              Request Referral
            </Link>
          </div>

          {/* ================= MIDDLE ================= */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3 text-sm text-blue-100">

              <Link href="/" className="hover:text-white transition">
                Home
              </Link>

              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>

              <Link href="/for-gps" className="hover:text-white transition">
                For GPs
              </Link>

              <Link href="/about" className="hover:text-white transition">
                About
              </Link>

              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>

            </div>
          </div>

          {/* ================= RIGHT ================= */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>

            <div className="space-y-3 text-sm text-blue-100">

              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Ballarat & Central Highlands</span>
              </div>

              <a
                href="tel:+61000000000"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone size={16} />
                +61 000 000 000
              </a>

              <a
                href="mailto:info@chmi.com"
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail size={16} />
                info@chmi.com
              </a>

            </div>

            {/* SOCIAL */}
            {/* <div className="flex gap-4 mt-6 text-blue-100">

              <a href="#" className="hover:text-white transition">
                <Linkedin size={18} />
              </a>

              <a href="#" className="hover:text-white transition">
                <Facebook size={18} />
              </a>

              <a href="#" className="hover:text-white transition">
                <Instagram size={18} />
              </a>

            </div> */}
          </div>

        </div>

        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/20 mt-12 pt-6 text-center text-xs text-blue-200">
          © {new Date().getFullYear()} Central Highlands Mobile Imaging. All rights reserved.
        </div>

      </div>
    </footer>
  );
}