"use client";

import Link from "next/link";
import CTASection from "../components/CTASection";
import { Heart, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#F5F7FA] text-[#0F2A44]">

      {/* HERO */}
      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/ABOUT.jpeg" // add this image in public folder
            alt="Ultrasound"
            className="w-full h-full object-cover"
          />
          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-[#0F2A44]/80"></div>

          {/* GRADIENT LIGHT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A44] via-[#0F2A44]/70 to-transparent"></div>
        </div>

        {/* CONTENT */}
        <div className="relative px-6 md:px-12 lg:px-20 py-24 md:py-32 text-white max-w-6xl">

          <p className="text-sm tracking-[0.25em] text-[#2A9D8F] font-semibold">
            ABOUT US
          </p>

          <h1 className="text-4xl md:text-6xl font-serif font-semibold leading-tight mt-5 max-w-3xl">
            Bringing radiology-grade imaging to regional Victoria
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
            The Central Highlands Mobile Imaging (CHMI) is a mobile diagnostic ultrasound service committed to improving access to high-quality imaging across Ballarat and the Central Highlands.
          </p>

        </div>

      </section>

      {/* STORY */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/Drc.jpeg"
              alt="Ultrasound Machine"
              className="rounded-2xl shadow-lg w-full object-cover"
            />

            <div className="absolute top-6 left-6 bg-white shadow-md rounded-xl px-5 py-3 text-sm">
              <p className="text-gray-500">Servicing</p>
              <p className="font-semibold text-[#0F2A44]">
                Ballarat & The Central Highlands
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Our story
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                As one of the first dedicated mobile ultrasound services in the region, CHMI brings radiology-level diagnostics directly to GP clinics, aged care facilities, and community healthcare settings — reducing the need for patient travel and delays in care.
              </p>

              <p>
                Our service is built around convenience, reliability, and clinical confidence. All scans are performed by experienced sonographers and supported by accredited radiologist reporting.
              </p>

              <p>
                At CHMI, we are proud to support regional healthcare by making essential imaging more accessible, efficient, and patient-focused.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-[#EEF3F7]">

        <p className="text-sm tracking-[0.2em] text-[#2A9D8F] font-semibold mb-3">
          VALUES
        </p>

        <h2 className="text-3xl md:text-4xl font-serif mb-10">
          What drives us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#2A9D8F]/20 text-[#2A9D8F] flex items-center justify-center rounded-lg mb-5">
              <Heart />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Patient-Focused Care
            </h3>
            <p className="text-gray-600 text-sm">
              Reducing travel and stress by bringing imaging directly to patients.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#2A9D8F]/20 text-[#2A9D8F] flex items-center justify-center rounded-lg mb-5">
              <Users />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Community Support
            </h3>
            <p className="text-gray-600 text-sm">
              Building trust with clinics, aged care facilities, and providers.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 bg-[#2A9D8F]/20 text-[#2A9D8F] flex items-center justify-center rounded-lg mb-5">
              <Award />
            </div>
            <h3 className="font-semibold text-lg mb-2">
              Clinical Excellence
            </h3>
            <p className="text-gray-600 text-sm">
              Accredited radiologists and high-quality reporting standards.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0F2A44] text-white py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <p className="text-3xl font-serif text-[#2A9D8F]">0 km</p>
            <p className="text-sm mt-1"> Travel Required</p>
          </div>

          <div>
            <p className="text-3xl font-serif text-[#2A9D8F]">20+</p>
            <p className="text-sm mt-1">Clinics Supported</p>
          </div>

          <div>
            <p className="text-3xl font-serif text-[#2A9D8F]">24–48h</p>
            <p className="text-sm mt-1">Fast Reporting</p>
          </div>

          <div>
            <p className="text-3xl font-serif text-[#2A9D8F]">100%</p>
            <p className="text-sm mt-1">Medicare Compliant</p>
          </div>

        </div>
      </section>

      {/* CTA */}

      <CTASection />

    </div>
  );
}