"use client";

import Container from "../layout/Container";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "CHMI has significantly improved patient care in our clinic. Fast, reliable, and extremely professional.",
    name: "Dr. Sarah Mitchell",
    role: "General Practitioner",
  },
  {
    text: "The mobile service saves our patients travel time and ensures quick diagnosis. Highly recommended.",
    name: "Ballarat Medical Centre",
    role: "Clinic",
  },
  {
    text: "Reliable imaging without moving patients — this has been a game changer for us.",
    name: "Highlands Aged Care",
    role: "Healthcare Provider",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#0F2A44] to-[#0B1F33] text-white">
      <Container>

        {/* HEADER */}
        <p className="text-sm tracking-widest text-[#2A9D8F]">
          TESTIMONIALS
        </p>

        <h2 className="mt-4 text-[48px] font-serif leading-tight">
          Trusted by clinics &<br />
          healthcare providers
        </h2>

        <p className="mt-4 text-gray-300 max-w-xl">
          Delivering reliable mobile imaging across the region.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                group relative p-7 rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-2 hover:border-[#2A9D8F]/50
                hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              "
            >

              {/* QUOTE ICON */}
              <Quote className="w-7 h-7 text-[#2A9D8F] mb-4" />

              {/* TEXT */}
              <p className="text-gray-200 text-sm leading-relaxed">
                “{t.text}”
              </p>

              {/* DIVIDER */}
              <div className="h-px bg-white/10 my-6"></div>

              {/* AUTHOR */}
              <p className="font-semibold text-white">
                {t.name}
              </p>

              <p className="text-sm text-[#2A9D8F]">
                {t.role}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}