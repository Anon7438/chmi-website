import Container from "../layout/Container";
import Link from "next/link";
import { Stethoscope, Activity, Bone, Heart } from "lucide-react";

const services = [
  {
    title: "General",
    desc: "Comprehensive abdominal and general diagnostic studies.",
    points: ["Abdomen", "Renal", "Prostate", "Appendix", "Pelvis"],
    icon: Stethoscope,
  },
  {
    title: "Vascular",
    desc: "Detailed arterial and venous Doppler imaging.",
    points: [
      "DVT (Upper & Lower Limbs)",
      "Arterial Studies",
      "Carotid Doppler",
      "Aorta Doppler",
    ],
    icon: Activity,
  },
  {
    title: "Musculoskeletal (MSK)",
    desc: "Joint, tendon and soft tissue assessments.",
    points: ["Shoulder", "Elbow", "Wrist", "Hand", "Hip"],
    icon: Bone,
  },
  {
    title: "Small Parts",
    desc: "High-resolution imaging of superficial structures.",
    points: ["Breast & Axilla", "Thyroid", "Neck", "Testis"],
    icon: Heart,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <Container>

        {/* HEADER */}
        <p className="text-sm tracking-widest text-[#2A9D8F] font-medium">
          SERVICES
        </p>

        <h2 className="mt-3 text-[48px] font-serif text-[#0F2A44]">
          Our Ultrasound Services
        </h2>

        <p className="mt-4 max-w-2xl text-gray-600 text-lg">
          Comprehensive diagnostic ultrasound performed by experienced
          sonographers and interpreted by accredited radiologists — across
          general, vascular, MSK and small parts imaging.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-4 gap-6 mt-14">

          {services.map((s, i) => {
            const Icon = s.icon;

            return (
              <div
                key={i}
                className="
    group relative p-6 rounded-2xl border border-gray-200
    bg-white transition-all duration-300
    hover:-translate-y-2 hover:shadow-xl
    overflow-hidden   // <-- ADD THIS
  "
              >

                {/* TOP HOVER LINE */}
                <div className="
                  absolute top-0 left-0 w-full h-1
                  bg-[#2A9D8F] scale-x-0 origin-left
                  transition-transform duration-300
                  group-hover:scale-x-100
                " />

                {/* ICON */}
                <div className="
                  w-12 h-12 rounded-xl flex items-center justify-center
                  bg-gray-100 text-gray-500
                  transition-all duration-300
                  group-hover:bg-[#1F3A5F] group-hover:text-white
                ">
                  <Icon className="w-5 h-5" />
                </div>

                {/* TITLE */}
                <h3 className="mt-5 text-xl font-serif text-[#0F2A44]">
                  {s.title}
                </h3>

                {/* DESC */}
                <p className="mt-2 text-sm text-gray-600">
                  {s.desc}
                </p>

                {/* POINTS */}
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {s.points.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#2A9D8F] rounded-full"></span>
                      {p}
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}

        </div>

        {/* BUTTON */}
        <div className="mt-14 flex justify-center">
          <Link
            href="/services"
            className="bg-[#1F3A5F] text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            View All Services →
          </Link>
        </div>

      </Container>
    </section>
  );
}