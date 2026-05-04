"use client";

import Image from "next/image";
import Container from "../layout/Container"
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#F5F7FA] py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative">

            <Image
              src="/machine.jpeg"
              alt="ultrasound machine"
              width={500}
              height={600}
              className="rounded-2xl shadow-xl"
            />

            {/* FLOAT CARD */}
            <div className="absolute bottom-6 right-6 bg-white px-6 py-4 rounded-2xl shadow-lg w-[220px]">
              <p className="text-3xl font-semibold text-[#1F3A5F]">
               0 km
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Patient Travel Required
              </p>
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div>

            {/* SMALL LABEL */}
            <p className="text-sm tracking-widest text-[#2A9D8F] font-medium">
              ABOUT CHMI
            </p>

            {/* HEADING */}
            <h2 className="mt-4 text-[48px] leading-[1.2] font-serif text-[#0F2A44]">
              Mobile diagnostic ultrasound,
              <br />
              brought to your clinic
            </h2>

            {/* PARA */}
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              The Central Highlands Mobile Imaging is one of the first dedicated
              mobile ultrasound services in the region — bringing radiology-level
              diagnostics directly to GP clinics, aged care facilities, and
              community healthcare settings.
            </p>

            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              All scans are performed by experienced sonographers and supported
              by accredited radiologist reporting, ensuring accurate and timely
              results for referring practitioners.
            </p>

            {/* FEATURE BOXES */}
            <div className="mt-10 grid grid-cols-2 gap-4">

              {[
                "Convenience",
                "Reliability",
                "Clinical Confidence",
                "Patient-Focused",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#EEF2F4] px-5 py-4 rounded-xl"
                >
                  <CheckCircle className="text-[#2A9D8F] w-5 h-5" />
                  <span className="text-[#0F2A44] font-medium text-sm">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}