import ContactForm from "../components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 py-16">
        <p className="text-sm tracking-[0.2em] text-teal-600 font-semibold">
          CONTACT
        </p>

        <h1 className="text-4xl md:text-5xl font-serif text-[#0F2A44] mt-4">
          Contact CHMI
        </h1>

        <p className="text-gray-600 mt-4 max-w-xl">
          Book appointments or send referrals easily — our team responds within one business day.
        </p>
      </section>

      {/* GRID */}
      <section className="px-6 md:px-10 lg:px-16 pb-20">
        <div className="grid lg:grid-cols-[38%_62%] gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="bg-[#0F2A44] text-white p-8 rounded-2xl">
              <h2 className="text-xl font-semibold mb-2">
                Contact information
              </h2>

              <p className="text-blue-200 text-sm mb-6">
                We provide fast, reliable mobile ultrasound services directly to clinics.
              </p>

              <div className="space-y-5">

                <div className="flex gap-4">
                  <MapPin />
                  <div>
                    <p className="text-xs text-blue-300">LOCATION</p>
                    <p>Ballarat & Central Highlands, Victoria</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone />
                  <div>
                    <p className="text-xs text-blue-300">PHONE</p>
                    <p>+61 000 000 000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail />
                  <div>
                    <p className="text-xs text-blue-300">EMAIL</p>
                    <p>info@chmi.com.au</p>
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border">
              <h3 className="font-semibold mb-4">Operating hours</h3>

              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Mon – Fri</span>
                  <span>8:00 – 17:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <ContactForm />

        </div>
      </section>
    </div>
  );
}