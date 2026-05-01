"use client";

import Container from "../layout/Container";

const steps = [
  {
    title: "Send referral",
    desc: "Email, fax, or upload through your preferred referral system — we accept in all common formats.",
  },
  {
    title: "We visit your clinic",
    desc: "Our sonographer travels to your location at a time that fits your schedule.",
  },
  {
    title: "Scan performed onsite",
    desc: "Studies are performed in your consulting room or a suitable private space — no travel for the patient.",
  },
  {
    title: "Radiologist report returned",
    desc: "Accredited radiologist reporting is delivered securely, typically within 24 hours.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <Container>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>

            <p className="text-sm tracking-widest text-[#2A9D8F] font-medium">
              PROCESS
            </p>

            <h2 className="mt-3 text-[48px] font-serif text-[#0F2A44] leading-tight">
              How it works
            </h2>

            <p className="mt-4 text-gray-600 text-lg max-w-md">
              From referral to radiologist report — a simple, four-step workflow
              designed to fit seamlessly into your practice.
            </p>

            {/* QUOTE BOX */}
            <div className="mt-8 bg-[#EAF1F5] px-6 py-5 rounded-xl text-sm text-gray-700 max-w-md">
              “We handle the logistics so your team can focus on patient care.”
            </div>

          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">

            {/* VERTICAL LINE */}
            <div className="absolute left-4 top-0 bottom-0 border-l-2 border-dashed border-[#2A9D8F]/40"></div>

            <div className="space-y-12">

              {steps.map((step, i) => (
                <div key={i} className="relative pl-12">

                  {/* STEP CIRCLE */}
                  <div className="
                    absolute left-0 top-1 w-8 h-8
                    bg-white border-2 border-[#2A9D8F]
                    rounded-full flex items-center justify-center
                    text-sm font-semibold text-[#0F2A44]
                  ">
                    {i + 1}
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-xl font-serif text-[#0F2A44]">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed max-w-md">
                    {step.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}