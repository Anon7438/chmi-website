import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div>

      {/* TOP HERO */}
      <section className="bg-gradient-to-r from-[#1E3A5F] to-[#2A9D8F] py-16 text-white text-center">
        <h1 className="text-4xl font-bold">Contact CHMI</h1>
        <p className="mt-3 text-blue-100">
          Book appointments or send referrals easily
        </p>
      </section>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto py-16 px-6">

        {/* LEFT INFO */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Contact Information</h3>

          <p className="text-gray-600">
            📍 Ballarat & Central Highlands
          </p>

          <p className="text-gray-600">
            📞 +61 000 000 000
          </p>

          <p className="text-gray-600">
            ✉️ info@chmi.com
          </p>

          <div className="mt-6 bg-blue-50 p-5 rounded-xl">
            <p className="text-sm text-gray-700">
              We provide fast, reliable mobile ultrasound services directly to clinics.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <ContactForm />

      </div>
    </div>
  );
}