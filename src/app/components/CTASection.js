"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20">
      <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2A9D8F] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row justify-between items-center gap-6 text-white transition hover:shadow-xl">

        <div>
          <p className="text-sm tracking-widest text-teal-200 mb-2">
            GET STARTED
          </p>

          <h3 className="text-3xl md:text-4xl font-serif">
            Book a mobile visit today
          </h3>

          <p className="text-blue-100 mt-3 max-w-md">
            Supporting clinics across Ballarat & the Central Highlands.
          </p>
        </div>

        <div className="flex gap-4">

          {/* ✅ REQUEST (FIXED) */}
          <Link
            href="/contact"
            className="
              inline-flex items-center justify-center
              bg-white text-[#0F2A44] px-6 py-3 rounded-full font-medium
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-lg hover:bg-gray-100
              active:scale-95
            "
          >
            Request Referral →
          </Link>

          {/* CALL (correct already) */}
          <a
            href="tel:+61000000000"
            className="
              inline-flex items-center justify-center
              border border-white px-6 py-3 rounded-full
              transition-all duration-300
              hover:bg-white hover:text-[#0F2A44] hover:-translate-y-1 hover:shadow-lg
              active:scale-95
            "
          >
            Call Us
          </a>

        </div>

      </div>
    </section>
  );
}