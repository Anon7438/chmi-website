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
      desc: "Email, fax, or upload through your preferred referral system — we accept all common formats.",
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

  const faqs = [
    {
      q: "Do I need to send patients to a clinic?",
      a: "No. Our sonographer travels to your clinic with portable equipment.",
    },
    {
      q: "How quickly will I receive the report?",
      a: "Typically within 24 hours.",
    },
    {
      q: "Do you bulk bill?",
      a: "Yes — eligible Medicare studies are bulk billed.",
    },
    {
      q: "What areas do you cover?",
      a: "Ballarat and Central Highlands.",
    },
    {
      q: "How do I send a referral?",
      a: "Email, fax, or upload via your system.",
    },
  ];

  return (
    <div className="bg-[#F5F7FA]">

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm tracking-[0.2em] text-teal-600 font-semibold">
              FOR GPS
            </p>

            <h1 className="text-4xl md:text-5xl font-serif text-[#0F2A44] mt-4 leading-tight">
              Mobile ultrasound for faster, smarter clinical decisions
            </h1>

            <p className="text-gray-600 mt-5 max-w-lg">
              Reliable mobile imaging that reduces patient travel and improves access to timely diagnostics.
            </p>

            {/* ✅ FIXED BUTTON */}
            <div className="mt-6 flex gap-4">
              <Link
                href="/contact"
                className="bg-[#1E3A5F] text-white px-6 py-3 rounded-full hover:bg-[#16324d] transition"
              >
                Send Referral
              </Link>

              <Link
                href="/services"
                className="border border-[#1E3A5F] px-6 py-3 rounded-full text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="/Drc.jpeg"
              alt="Ultrasound"
              className="rounded-2xl shadow-md"
            />

            {/* FLOAT CARD */}
            <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-md px-4 py-3 flex items-center gap-3">
              <Clock size={18} className="text-[#1E3A5F]" />
              <div>
                <p className="text-xs text-gray-500">Turnaround</p>
                <p className="text-sm font-semibold text-[#0F2A44]">
                  Within 24 hours
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHAT YOU GET + HOW IT WORKS */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-serif text-[#0F2A44]">
              What you get with CHMI
            </h2>

            <p className="text-gray-600 mt-3">
              Designed to integrate seamlessly into your workflow.
            </p>

            <div className="mt-6 space-y-4">
              {[
                "Onsite scanning at your clinic",
                "Radiologist-reported studies",
                "Fast turnaround",
                "Secure delivery",
                "Bulk billing available",
                "Flexible scheduling",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm">
                  <CheckCircle className="text-teal-600" size={18} />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — FIXED SECTION */}
          <div>

            {/* ✅ ADDED HEADING BACK */}
            <h2 className="text-3xl font-serif text-[#0F2A44]">
              How referrals work
            </h2>

            <p className="text-gray-600 mt-3">
              A simple, secure four-step process from first referral to final report.
            </p>

            <div className="relative mt-8 pl-10">

              {/* vertical line */}
              <div className="absolute left-4 top-2 bottom-2 border-l-2 border-dashed border-teal-300"></div>

              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="relative">

                    <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-white border border-teal-500 flex items-center justify-center text-sm font-semibold text-teal-600">
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
            {
              icon: <Shield />,
              title: "Medicare Compliant",
              desc: "Bulk billing available",
            },
            {
              icon: <FileText />,
              title: "Secure Reporting",
              desc: "Electronic delivery",
            },
            {
              icon: <Clock />,
              title: "24h Turnaround",
              desc: "Reports within one day",
            },
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border flex gap-4">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-[#1E3A5F]">
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
        <h2 className="text-3xl font-serif text-center text-[#0F2A44]">
          Frequently asked questions
        </h2>

        <div className="max-w-3xl mx-auto mt-10 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl px-6 py-5 shadow-sm cursor-pointer"
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
                    className="overflow-hidden"
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