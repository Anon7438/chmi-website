import ServicesFull from "../components/ServicesFull";
import CTASection from "../components/CTASection";

export default function ServicesPage() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2A9D8F] py-16 text-white text-center">
        <h1 className="text-4xl font-bold">
          Our Ultrasound Services
        </h1>
        <p className="mt-3  max-w-2xl mx-auto">
          We provide a full range of diagnostic ultrasound services including general, vascular, musculoskeletal and small parts imaging — all performed by experienced sonographers and reported by accredited radiologists.
        </p>
      </section>

      {/* FULL SERVICES */}
      <ServicesFull />

      {/* CTA */}
      <CTASection />
      <p className="mt-10 text-gray-600 text-center text-sm max-w-xl mx-auto">
        Need something outside this list? Many studies are available on request.
      </p>

      <div className="text-center mt-4">
        <a href="/services" className="text-[#1E3A5F] font-medium hover:underline">
          View All Services →
        </a>
      </div>
    </div>

  );
}