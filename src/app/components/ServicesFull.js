"use client";

import { Activity, HeartPulse, Bone, Microscope, CheckCircle } from "lucide-react";

const services = [
  {
    title: "General",
    desc: "Comprehensive abdominal and general diagnostic studies.",
    icon: <Activity className="text-white" size={22} />,
    items: [
      "Abdomen",
      "Renal",
      "Prostate",
      "Appendix",
      "Pelvis",
      "Liver & Gallbladder",
    ],
  },
  {
    title: "Vascular",
    desc: "Detailed arterial and venous Doppler imaging.",
    icon: <HeartPulse className="text-white" size={22} />,
    items: [
      "DVT (Upper & Lower Limbs)",
      "Arterial Studies (Upper & Lower Limbs)",
      "Carotid Doppler",
      "Aorta Doppler",
    ],
  },
  {
    title: "Musculoskeletal (MSK)",
    desc: "Joint, tendon and soft tissue assessments with cortisone injection support.",
    icon: <Bone className="text-white" size={22} />,
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
      "Cortisone Injection",
    ],
  },
  {
    title: "Small Parts",
    desc: "High-resolution imaging of superficial structures.",
    icon: <Microscope className="text-white" size={22} />,
    items: [
      "Breast & Axilla",
      "Thyroid",
      "Neck",
      "Testis",
      "Salivary Glands",
    ],
  },
];

export default function ServicesFull() {
  return (
    <section className="bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-10">

        {services.map((service, index) => (
          <div
            key={index}
            className="
            bg-white/70 backdrop-blur-md
            rounded-2xl p-8 md:p-10
            grid md:grid-cols-3 gap-8
            shadow-sm hover:shadow-md
            transition-all duration-300
            "
          >
            
            {/* LEFT */}
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#1E3A5F] to-[#2A9D8F] flex items-center justify-center shadow-md">
                {service.icon}
              </div>

              <h3 className="text-2xl font-serif text-[#0F2A44] leading-tight">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {service.desc}
              </p>
            </div>

            {/* RIGHT */}
            <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
              {service.items.map((item, i) => (
                <div
                  key={i}
                  className="
                  flex items-center gap-3
                  bg-[#F7F9FB]
                  px-4 py-3
                  rounded-xl
                  transition-all duration-200
                  hover:bg-[#EEF7F5]
                  "
                >
                  <CheckCircle size={16} className="text-[#2A9D8F]" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}