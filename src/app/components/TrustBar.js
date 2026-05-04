"use client";

import { CheckCircle } from "lucide-react";

const items = [
  "Radiologist Reported",
  "Medicare Compliant",
  "Mobile to Clinics & Facilities",
  " Bulk Billing Available",
];

export default function TrustBar() {
  return (
    <section className="border-y border-gray-200 bg-gradient-to-r from-[#F5F7FA] to-[#EAF1F5]">

      <div className="max-w-6xl mx-auto py-5 px-4 flex flex-wrap justify-center items-center gap-8">

        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-[#0F2A44]"
          >
            {/* ICON */}
            <CheckCircle className="w-4 h-4 text-[#2A9D8F]" />

            {/* TEXT */}
            <span className="font-medium">{item}</span>
          </div>
        ))}

      </div>

    </section>
  );
}