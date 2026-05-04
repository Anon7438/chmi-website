"use client";

import CTASection from "../components/CTASection";
import { Heart, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#F5F7FA] text-[#0F2A44]">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="/ABOUT.jpeg"
            className="w-full h-full object-cover"
          />

          {/* CLEAN OVERLAY */}
          <div className="absolute inset-0 bg-[#0F2A44]/60"></div>

          {/* LIGHT GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A44]/90 via-[#0F2A44]/50 to-transparent"></div>
        </div>

        <div className="relative px-6 md:px-12 lg:px-20 py-28 md:py-36 text-white max-w-6xl">

          {/* LABEL */}
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] text-[#2A9D8F] font-semibold">
              ABOUT US
            </p>
            <div className="h-[1px] w-14 bg-[#2A9D8F]"></div>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-heading !text-white/80 leading-tight mt-6 max-w-3xl">
            Bringing radiology-grade imaging to regional Victoria
          </h1>

          {/* TEXT */}
          <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
            CHMI delivers high-quality mobile ultrasound services directly to
            clinics and healthcare providers — improving access, speed, and
            patient outcomes.
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* IMAGE */}
          <div className="relative">
            <img
              src="/Drc.jpeg"
              className="rounded-2xl shadow-xl w-full object-cover"
            />

            <div className="absolute top-6 left-6 bg-white border border-gray-100 shadow-md rounded-xl px-5 py-3 text-sm">
              <p className="text-gray-500">Servicing</p>
              <p className="font-semibold text-[#0F2A44]">
                Ballarat & Central Highlands
              </p>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              Our story
            </h2>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                CHMI was established to bring radiology-level imaging directly
                to regional communities — reducing delays and improving access
                to care.
              </p>

              <p>
                Our model integrates seamlessly into clinical workflows, with
                experienced sonographers and accredited radiologist reporting.
              </p>

              <p>
                We focus on reliability, speed, and patient-first delivery —
                ensuring consistent, high-quality diagnostic outcomes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#EEF3F7]">

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center gap-4 mb-4">
            <p className="text-xs tracking-[0.3em] text-[#2A9D8F] font-semibold">
              VALUES
            </p>
            <div className="h-[1px] w-14 bg-[#2A9D8F]"></div>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading mb-12">
            What drives us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[{
              icon: <Heart />,
              title: "Patient-Focused Care",
              desc: "Reducing travel and improving access to essential imaging."
            },
            {
              icon: <Users />,
              title: "Community Support",
              desc: "Trusted partnerships with clinics and providers."
            },
            {
              icon: <Award />,
              title: "Clinical Excellence",
              desc: "Accredited radiologists and high reporting standards."
            }].map((card, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 bg-[#2A9D8F]/10 text-[#2A9D8F] flex items-center justify-center rounded-lg mb-5">
                  {card.icon}
                </div>

                <h3 className="font-semibold text-lg mb-2 text-[#0F2A44]">
                  {card.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {card.desc}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0F2A44] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {[
            ["0 km", "Travel Required"],
            ["20+", "Clinics Supported"],
            ["24–48h", "Fast Reporting"],
            ["100%", "Medicare Compliant"]
          ].map((item, i) => (
            <div key={i}>
              <p className="text-4xl font-heading text-[#2A9D8F]">
                {item[0]}
              </p>
              <p className="text-sm mt-2 text-white/70">
                {item[1]}
              </p>
            </div>
          ))}

        </div>
      </section>

      <CTASection />

    </div>
  );
}