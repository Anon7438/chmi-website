"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Activity, HeartPulse, Bone, Microscope } from "lucide-react";

const services = [
  {
    title: "General",
    icon: <Activity className="text-[#2A9D8F]" size={28} />,
    items: ["Abdomen", "Renal", "Prostate", "Appendix", "Pelvis"],
  },
  {
    title: "Vascular",
    icon: <HeartPulse className="text-[#2A9D8F]" size={28} />,
    items: ["DVT", "Arterial Studies", "Carotid Doppler", "Aorta Doppler"],
  },
  {
    title: "MSK",
    icon: <Bone className="text-[#2A9D8F]" size={28} />,
    items: [
      "Shoulder",
      "Elbow",
      "Wrist",
      "Hand",
      "Hip",
      "Knee",
      "Ankle",
      "Foot",
    ],
  },
  {
    title: "Small Parts",
    icon: <Microscope className="text-[#2A9D8F]" size={28} />,
    items: ["Breast", "Thyroid", "Neck", "Testis"],
  },
];

export default function ServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  return (
    <section className="relative py-20 px-6 bg-gray-50">

      {/* background image */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/clinic.jpg"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mt-12 grid md:grid-cols-4 gap-6">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-left"
            >

              {/* ICON + TITLE */}
              <div className="flex flex-col items-center text-center mb-4">
                {service.icon}
                <h3 className="text-lg font-semibold text-[#1E3A5F] mt-2">
                  {service.title}
                </h3>
              </div>

              {/* ITEMS */}
              <ul className="text-gray-600 text-sm space-y-1">
                {(expandedIndex === index
                  ? service.items
                  : service.items.slice(0, 5)
                ).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}

                {service.items.length > 5 && (
                  <button
                    onClick={() =>
                      setExpandedIndex(
                        expandedIndex === index ? null : index
                      )
                    }
                    className="text-blue-600 text-xs mt-2 hover:underline"
                  >
                    {expandedIndex === index ? "Show Less" : "View More"}
                  </button>
                )}
              </ul>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}