"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A5F] to-[#2A9D8F] text-white">

      {/* DARK OVERLAY (FIXED CLICK ISSUE) */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>

      {/* glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center relative z-10">

        {/* LEFT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            Precision Imaging. <br /> Delivered Onsite.
          </motion.h1>

          {/* <p className="mt-5 text-blue-100">
            Mobile ultrasound services across Ballarat & Central Highlands.
          </p> */}

          {/* <p className="mt-5  max-w-xl">
            Central Highlands Mobile Imaging provides high-quality, radiologist-reported ultrasound services directly to GP clinics, aged care facilities, and regional healthcare providers.
          </p>

          <p className="mt-3 text-sm ">
            Fast turnaround. Clinical accuracy. Mobile convenience.
          </p> */}

          {/* <div className="mt-6 flex flex-wrap gap-3 text-xs text-gray-600">
            <span className="bg-gray-100 px-3 py-1 rounded-full">Radiologist Reported</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Medicare Compliant</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">Mobile to Clinics</span>
          </div> */}
          <ul className="mt-6 space-y-2 text-sm">
            <li>✔ Radiologist Reported</li>
            <li>✔ Mobile to Clinics</li>
            <li>✔ Fast Turnaround</li>
            <li>✔ Medicare Compliant</li>
          </ul>

          {/* ✅ FIXED BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">

            <Link
              href="/contact"
              className="bg-white text-[#1E3A5F] px-6 py-3 rounded-lg font-medium hover:scale-105 transition inline-block shadow-md"
            >
              Request Referral
            </Link>

            <Link
              href="/contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1E3A5F] transition inline-block"
            >
              Contact Us
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <Image
              src="/doctor.png"
              alt="Ultrasound"
              width={520}
              height={420}
              priority
              className="rounded-xl shadow-2xl hover:scale-105 transition duration-500"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}