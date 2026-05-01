"use client";

import Container from "../layout/Container";
import { MapPin, Zap, ShieldCheck } from "lucide-react";

const features = [
  {
    title: "Convenient",
    desc: "No patient travel required — we come to you.",
    icon: MapPin,
  },
  {
    title: "Fast",
    desc: "Quick turnaround radiologist reporting within 24 hours.",
    icon: Zap,
  },
  {
    title: "Reliable",
    desc: "Accredited radiologist support and experienced sonographers.",
    icon: ShieldCheck,
  },
];

const stats = [
  { value: "500+", label: "Scans Completed" },
  { value: "20+", label: "Clinics Supported" },
  { value: "24h", label: "Fast Reporting" },
  { value: "100%", label: "Medicare Compliant" },
];

export default function WhyChoose() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <Container>

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm tracking-widest text-[#2A9D8F] font-medium">
            WHY CHOOSE CHMI
          </p>

          <h2 className="mt-4 text-[48px] font-serif text-[#0F2A44] leading-tight">
            Trusted mobile imaging for
            <br />
            clinics & patients
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Three reasons clinics across Ballarat and the Central Highlands choose us.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">

          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <div
                key={i}
                className="
                  group bg-white border border-gray-200 rounded-2xl p-8
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-xl
                "
              >

                {/* ICON */}
                <div className="
                  w-14 h-14 rounded-xl flex items-center justify-center
                  bg-gradient-to-br from-[#1F3A5F] to-[#2A9D8F]
                  text-white shadow-md
                  transition-all duration-300
                  group-hover:scale-110
                ">
                  <Icon className="w-6 h-6" />
                </div>

                {/* TITLE */}
                <h3 className="mt-6 text-xl font-serif text-[#0F2A44]">
                  {f.title}
                </h3>

                {/* DESC */}
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {f.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {stats.map((s, i) => (
            <div
              key={i}
              className="
                bg-white border border-gray-200 rounded-2xl py-8 text-center
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <p className="text-3xl font-semibold text-[#1F3A5F]">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                {s.label}
              </p>
            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}