import ContactForm from "../components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* HERO */}
      <section className="relative px-6 md:px-10 lg:px-16 py-20 overflow-hidden">

        {/* BG IMAGE */}
        <div className="absolute inset-0">
          <Image
            src="/ultrasound-hero.png"
            alt="Ultrasound"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#0F2A44]/80"></div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-4xl">

          <p className="text-sm tracking-[0.25em] text-teal-400 font-semibold">
            CONTACT
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mt-4 leading-tight">
            Get in touch with CHMI
          </h1>

          <p className="text-blue-100 mt-5 max-w-xl text-base md:text-lg">
            Book appointments or send referrals with ease. 
            Our team responds within 24–48 hours.
          </p>

          <div className="mt-8">
            <a
              href="#contact-form"
              className="inline-block bg-teal-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-teal-600 transition"
            >
              Send Appointment Request
            </a>
          </div>

        </div>
      </section>

      {/* GRID */}
      <section
        id="contact-form"
        className="px-6 md:px-10 lg:px-16 pb-20 -mt-12 relative z-10"
      >
        <div className="grid lg:grid-cols-[38%_62%] gap-12 items-start">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="bg-[#0F2A44] text-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl font-semibold mb-2">
                Contact information
              </h2>

              <p className="text-blue-200 text-sm mb-6">
                Fast, reliable mobile ultrasound services delivered to clinics.
              </p>

              <div className="space-y-5">

                <div className="flex gap-4 items-start">
                  <MapPin className="mt-1" />
                  <div>
                    <p className="text-xs text-blue-300">LOCATION</p>
                    <p>Ballarat & The Central Highlands, Victoria</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Phone className="mt-1" />
                  <div>
                    <p className="text-xs text-blue-300">PHONE</p>
                    <p>+61 000 000 000</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Mail className="mt-1" />
                  <div>
                    <p className="text-xs text-blue-300">EMAIL</p>
                    <p>info@chmi.com.au</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <ContactForm />
          </div>

        </div>
      </section>

    </div>
  );
}