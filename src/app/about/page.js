export default function AboutPage() {
  return (
    <div>

      {/* HERO */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2A9D8F] py-16 text-white text-center">
        <h1 className="text-4xl font-bold">
          About CHMI
        </h1>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto py-16 px-6 text-gray-700 leading-relaxed space-y-6">

        <h2 className="text-2xl font-semibold text-[#1E3A5F]">
          Central Highlands Mobile Imaging
        </h2>

        <p>
          Central Highlands Mobile Imaging (CHMI) is a mobile diagnostic ultrasound service committed to improving access to high-quality imaging across Ballarat and the Central Highlands.
        </p>

        <p>
          As one of the first dedicated mobile ultrasound services in the region, CHMI brings radiology-level diagnostics directly to GP clinics, aged care facilities, and community healthcare settings—reducing the need for patient travel and delays in care.
        </p>

        <p>
          Our service is built around convenience, reliability, and clinical confidence. All scans are performed by experienced sonographers and supported by accredited radiologist reporting, ensuring accurate and timely results for referring practitioners.
        </p>

        <p>
          At CHMI, we are proud to support regional healthcare by making essential imaging more accessible, efficient, and patient-focused.
        </p>

      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 px-6">

          <div className="bg-white p-6 rounded-xl shadow">
            ✔ Mobile to Clinics & Facilities
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ✔ Radiologist Reported
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ✔ Medicare Compliant
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            ✔ Serving Ballarat & Central Highlands
          </div>

        </div>
      </section>

    </div>
  );
}