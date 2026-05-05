"use client";

import Link from "next/link";
import { useState } from "react";
import CTASection from "../components/CTASection";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Shield,
  FileText,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function ForGPs() {
  const [openIndex, setOpenIndex] = useState(null);

  const steps = [
    {
      title: "Send referral",
      desc: "Email or upload through your system — we accept all formats.",
    },
    {
      title: "We visit your clinic",
      desc: "Our sonographer travels to your location.",
    },
    {
      title: "Scan performed onsite",
      desc: "No travel required for patients.",
    },
    {
      title: "Radiologist report returned",
      desc: "Delivered securely within 24–48 hours.",
    },
  ];

  const faqs = [
    { q: "Do I need to send patients?", a: "No. We come to your clinic." },
    { q: "Report timing?", a: "Within 24–48 hours." },
    { q: "Bulk billing?", a: "Yes, eligible cases." },
    { q: "How to send referral?", a: "Email or upload." },
  ];

  return (
    <div className="bg-[#F5F7FA]">

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 py-24 bg-gradient-to-b from-[#F5F7FA] to-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <div className="flex items-center gap-4">
              <p className="text-xs tracking-[0.3em] text-[#2A9D8F] font-semibold">
                FOR GPS
              </p>
              <div className="h-[1px] w-16 bg-[#2A9D8F]"></div>
            </div>

            <h1 className="mt-5 text-4xl md:text-5xl font-heading leading-tight text-[#0F2A44]">
              Mobile ultrasound for faster clinical decisions
            </h1>

            <p className="text-[#6B7280] mt-5 max-w-lg leading-relaxed">
              Reliable mobile imaging that reduces patient travel and improves access to diagnostics.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">

              {/* PRIMARY */}
              <Link
                href="/contact"
                className="bg-[#0F2A44] text-white px-7 py-3 rounded-full shadow-md hover:bg-[#0c2236] transition"
              >
                Send Referral
              </Link>

              {/* SECONDARY FIXED */}
              <Link
                href="/services"
                className="border border-[#0F2A44]/30 px-7 py-3 rounded-full !text-[#0F2A44] hover:bg-[#0F2A44]/5 transition"
              >
                View Services
              </Link>

            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="/Drc.jpeg"
              alt="Ultrasound"
              className="rounded-2xl shadow-xl"
            />

            <div className="absolute bottom-5 left-5 bg-white rounded-xl shadow-lg px-5 py-3 flex items-center gap-3 border">
              <Clock size={18} className="text-[#2A9D8F]" />
              <div>
                <p className="text-xs text-gray-500">Turnaround</p>
                <p className="text-sm font-semibold text-[#0F2A44]">
                  Within 24–48 hours
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <h2 className="text-3xl font-heading text-[#0F2A44]">
              What you get
            </h2>

            <div className="mt-6 space-y-4">
              {[
                "Onsite Imaging",
                "Radiologist reports",
                "Fast turnaround",
                "Secure delivery",
                "Bulk billing",
                "Flexible scheduling",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-gray-100 hover:shadow-md transition"
                >
                  <CheckCircle className="text-[#2A9D8F]" size={18} />
                  <span className="text-[#374151] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div>
            <h2 className="text-3xl font-heading text-[#0F2A44]">
              How it works
            </h2>

            <div className="relative mt-8 pl-10">
              <div className="absolute left-4 top-2 bottom-2 border-l border-[#2A9D8F]/30"></div>

              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="relative">

                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-[#2A9D8F] flex items-center justify-center text-sm font-semibold text-[#2A9D8F]">
                      {i + 1}
                    </div>

                    <div className="ml-10">
                      <h3 className="font-semibold text-[#0F2A44]">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            { icon: <Shield />, title: "Medicare Compliant", desc: "Bulk billing available" },
            { icon: <FileText />, title: "Secure Reporting", desc: "Electronic delivery" },
            { icon: <Clock />, title: "24–48h Turnaround", desc: "Fast reports" },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition flex gap-4">
              <div className="w-12 h-12 bg-[#2A9D8F]/10 rounded-xl flex items-center justify-center text-[#2A9D8F]">
                {card.icon}
              </div>
              <div>
                <h4 className="font-semibold text-[#0F2A44]">
                  {card.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />

      {/* FAQ */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <h2 className="text-3xl text-center font-heading text-[#0F2A44]">
          Frequently asked questions
        </h2>

        <div className="max-w-3xl mx-auto mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl px-6 py-5 border border-gray-100 hover:shadow-sm transition cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-[#0F2A44]">{faq.q}</p>

                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                  <ChevronDown />
                </motion.div>
              </div>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="text-gray-600 text-sm mt-3">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}