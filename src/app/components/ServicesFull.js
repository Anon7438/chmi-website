"use client";

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
      "Groin",
      "Hamstring",
      "Achilles",
      "Hernia",
    ],
  },
  {
    title: "Small Parts",
    icon: <Microscope className="text-[#2A9D8F]" size={28} />,
    items: ["Breast", "Thyroid", "Neck", "Testis"],
  },
];

export default function ServicesFull() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section className="py-20 px-6 bg-gray-50">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition"
            >

              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-[#1E3A5F]">
                  {service.title}
                </h3>
              </div>

              <ul className="grid grid-cols-2 gap-2 text-gray-600 text-sm">
                {(expandedIndex === index
                  ? service.items
                  : service.items.slice(0, 6)
                ).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              {service.items.length > 6 && (
                <button
                  onClick={() =>
                    setExpandedIndex(
                      expandedIndex === index ? null : index
                    )
                  }
                  className="mt-4 text-blue-600 text-sm hover:underline"
                >
                  {expandedIndex === index
                    ? "Show Less"
                    : "View More"}
                </button>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}