import ServicesFull from "../components/ServicesFull";
import CTASection from "../components/CTASection";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div className="bg-[#F5F7FA]">

      {/* HERO */}
<section className="relative px-6 md:px-10 lg:px-16 py-24 overflow-hidden">

  {/* BG */}
  <div className="absolute inset-0">
    <img
      src="/ultrasound-bg.jpg"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-[#0F2A44]/70"></div>
  </div>

  {/* CONTENT */}
  <div className="relative max-w-6xl text-white">

    {/* LABEL */}
    <div className="flex items-center gap-4">
      <p className="text-xs tracking-[0.3em] text-[#2A9D8F] font-semibold">
        SERVICES
      </p>
      <div className="h-[1px] w-16 bg-[#2A9D8F]"></div>
    </div>

    {/* HEADING */}
    <h1 className="mt-5 text-4xl md:text-5xl font-heading leading-tight">
      Our Ultrasound Services
    </h1>

    {/* TEXT */}
    <p className="text-white/80 mt-5 max-w-2xl leading-relaxed">
      A complete range of diagnostic ultrasound services — performed by experienced
      sonographers and reported by accredited radiologists.
    </p>

    {/* CTA */}
    {/* <Link
      href="/contact"
      className="mt-8 inline-block bg-[#2A9D8F] text-white px-7 py-3 rounded-full shadow-md hover:bg-[#23867a] transition"
    >
      Book Appointment
    </Link> */}

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