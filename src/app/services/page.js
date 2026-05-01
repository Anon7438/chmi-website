import ServicesFull from "../components/ServicesFull";
import CTASection from "../components/CTASection";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 py-20">
        <p className="text-sm tracking-[0.2em] text-teal-600 font-semibold">
          SERVICES
        </p>

        <h1 className="text-4xl md:text-5xl font-serif text-[#0F2A44] mt-4 leading-tight">
          Our Ultrasound Services
        </h1>

        <p className="text-gray-600 mt-4 max-w-2xl leading-relaxed">
          We provide a full range of diagnostic ultrasound services, including general,
          vascular, musculoskeletal, and small parts imaging — all performed by experienced
          sonographers and reported by accredited radiologists.
        </p>
      </section>

      {/* SERVICES */}
      <ServicesFull />

      {/* EXTRA */}
      <div className="text-center mt-12 px-6">
        <p className="text-gray-600 text-sm max-w-xl mx-auto">
          Need something outside this list? Many studies are available on request.
        </p>

        <Link
          href="/contact"
          className="
          inline-block mt-5
          bg-[#1E3A5F] text-white
          px-6 py-3 rounded-full
          hover:bg-[#16324d]
          transition-all duration-200
          "
        >
          Contact Us for Custom Studies
        </Link>
      </div>

      {/* CTA */}
      <CTASection />

    </div>
  );
}