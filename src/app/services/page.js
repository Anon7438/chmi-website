import ServicesFull from "../components/ServicesFull";
import CTASection from "../components/CTASection";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* HERO */}
      <section className="relative px-6 md:px-10 lg:px-16 py-24 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/ultrasound-bg.jpg"
            alt="Ultrasound service"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F2A44]/90 via-[#0F2A44]/70 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative max-w-6xl">
          <p className="text-sm tracking-[0.2em] text-teal-400 font-semibold">
            SERVICES
          </p>

          <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 leading-tight max-w-2xl">
            Our Ultrasound Services
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl leading-relaxed">
            We provide a full range of diagnostic ultrasound services, including general,
            vascular, musculoskeletal, and small parts imaging — all performed by experienced
            sonographers and reported by accredited radiologists.
          </p>

          {/* CTA inside hero */}
          <Link
            href="/contact"
            className="inline-block mt-8 bg-teal-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-teal-600 transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesFull />

      {/* EXTRA */}
      <div className="text-center mt-16 px-6">
        <p className="text-lg md:text-xl font-medium text-[#0F2A44] max-w-2xl mx-auto">
          Need something outside this list?
        </p>

        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Many studies are available on request.
        </p>

        <Link
          href="/contact"
          className="
      inline-block mt-6
      bg-[#1E3A5F] text-white
      px-8 py-3.5 rounded-full
      text-sm md:text-base font-medium
      shadow-md
      hover:bg-[#16324d] hover:shadow-lg hover:-translate-y-0.5
      transition-all duration-200
    "
        >
          Contact Us
        </Link>
      </div>

      {/* CTA */}
      <CTASection />

    </div>
  );
}