"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. Sarah Mitchell",
    role: "General Practitioner",
    text: "CHMI has significantly improved patient care in our clinic. Fast, reliable, and extremely professional.",
  },
  {
    name: "Ballarat Medical Centre",
    role: "Clinic",
    text: "The mobile service saves our patients travel time and ensures quick diagnosis. Highly recommended.",
  },
  {
    name: "Aged Care Facility",
    role: "Healthcare Provider",
    text: "Reliable imaging without moving patients—this has been a game changer for us.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-semibold text-[#1E3A5F]">
          Trusted by Clinics & Healthcare Providers
        </h2>

        <p className="mt-3 text-gray-600">
          Delivering reliable mobile imaging across the region
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6">

          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition"
            >

              <p className="text-gray-700 text-sm italic">
                “{item.text}”
              </p>

              <div className="mt-4">
                <h4 className="font-semibold text-[#1E3A5F]">
                  {item.name}
                </h4>
                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}