"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative z-20 py-24 px-6 text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/clinic.jpg"
          alt="Clinic"
          className="w-full h-full object-cover"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/90 to-[#2A9D8F]/90"></div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto text-center relative z-10">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Book a Mobile Visit Today
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-4 text-blue-100 text-lg"
        >
          Supporting clinics across Ballarat & Central Highlands
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col md:flex-row gap-4 justify-center"
        >

          {/* PRIMARY BUTTON */}
          <Link
            href="/contact"
            className="bg-white text-[#1E3A5F] px-8 py-4 rounded-xl font-semibold shadow-xl hover:scale-105 transition inline-block text-center"
          >
            Request Referral
          </Link>

          {/* SECONDARY BUTTON */}
          <Link
            href="/contact"
            className="border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#1E3A5F] transition inline-block text-center"
          >
            Contact Us
          </Link>

        </motion.div>

      </div>
    </section>
  );
}