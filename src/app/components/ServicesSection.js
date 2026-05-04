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
<section className="py-20 px-6 bg-[#F5F7FA]">
  <div className="max-w-7xl mx-auto text-center">

    <div className="grid md:grid-cols-4 gap-6 mt-12">

      {services.map((service, index) => (
        <div
          key={index}
          className="
          bg-white
          p-6 rounded-2xl
          border border-gray-100
          shadow-sm hover:shadow-md
          transition text-left
          "
        >

          <div className="flex flex-col items-center text-center mb-4">
            {service.icon}
            <h3 className="text-lg font-semibold text-[#0F2A44] mt-2">
              {service.title}
            </h3>
          </div>

          <ul className="text-gray-600 text-sm space-y-1">
            {service.items.slice(0, 5).map((item, i) => (
              <li key={i}>• {item}</li>
            ))}
          </ul>

        </div>
      ))}

    </div>

  </div>
</section>
  );
}