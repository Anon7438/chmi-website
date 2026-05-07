"use client";

import Image from "next/image";
import Container from "./layout/Container";
import Link from "next/link";
import { CheckCircle, ShieldCheck, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#F5F7FA] pt-6 pb-20">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* TOP BADGE */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full shadow-sm text-sm text-gray-700">

              {/* GLOW DOT */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>

              Mobile Ultrasound for Aged Care, GP Clinics Across Ballarat & Central Highlands
            </div>

            {/* HEADING */}
            <h1 className="mt-6 text-[56px] leading-[1.1] font-serif font-semibold text-[#0F2A44]">
              Precision Imaging.
              <span className="block text-[#2A9D8F]">
                Delivered Onsite.
              </span>
            </h1>

            {/* FULL PARAGRAPH (DON’T CUT THIS) */}
            <p className="mt-6 text-gray-600 max-w-xl text-lg leading-relaxed">
              CHMI provides high-quality, radiologist-reported ultrasound
              services directly to GP clinics, aged care facilities, and
              regional healthcare providers. Fast turnaround. Clinical accuracy.
              Mobile convenience.
            </p>

            {/* FEATURES */}
            <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-6 text-[15px] text-gray-700">
              {[
                "Radiologist Reported",
                "Bulk Billing Available",
                "On-Site Aged Care & Clinic Services",
                "Ballarat & Central Highlands Coverage",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                  <CheckCircle className="text-[#2A9D8F] w-5 h-5 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* BUTTONS */}
            <div className="mt-10 flex gap-4">

              <Link
                href="/contact"
                className="bg-[#1F3A5F] text-white px-7 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
              >
                Send Referral →
              </Link>

              <Link
                href="/services"
                className="bg-[#1F3A5F] text-white px-7 py-3 rounded-full shadow-lg hover:scale-105 transition-all"
              >
                View Services
              </Link>
            </div>

            {/* BOTTOM INFO */}
            <div className="mt-10 flex gap-10 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1F3A5F]" />
                Accredited Radiologists
              </div>

              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-[#1F3A5F]" />
                Experienced Sonographers
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            {/* SOFT BG CARD */}
            <div className="absolute w-[95%] h-[95%] bg-[#EAF1F5] rounded-[30px] blur-2xl"></div>

            {/* IMAGE */}
            <Image
              src="/doctor.png"
              width={420}
              height={520}
              alt="doctor"
              className="relative rounded-2xl shadow-xl"
            />

            {/* FLOAT CARD 1 */}
            <div className="absolute top-8 left-4 bg-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">

              <div className="bg-green-100 p-2 rounded-full">
                <CheckCircle className="text-green-600 w-5 h-5" />
              </div>

              <div className="text-sm">
                <p className="text-gray-500">Reports</p>
                <p className="font-semibold text-[#0F2A44]">
                  Within 24–48 hours
                </p>
              </div>

            </div>

            {/* FLOAT CARD 2 */}
            <div className="absolute bottom-6 right-4 bg-white px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3">

              <div className="bg-blue-100 p-2 rounded-full">
                <ShieldCheck className="text-blue-600 w-5 h-5" />
              </div>

              <div className="text-sm">
                <p className="text-gray-500">Compliance</p>
                <p className="font-semibold text-[#0F2A44]">
                  Medicare compliant
                </p>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}