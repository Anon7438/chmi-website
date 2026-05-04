import ContactForm from "../components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="bg-[#F5F7FA] min-h-screen">

      {/* HERO */}
      <section className="relative px-6 md:px-10 lg:px-16 py-24 overflow-hidden">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <Image
            src="/ultrasound-hero.png"
            alt="Ultrasound"
            fill
            className="object-cover"
            priority
          />

          {/* CONTROLLED OVERLAY */}
          <div className="absolute inset-0 bg-[#0F2A44]/55"></div>

          {/* PROFESSIONAL GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-r 
      from-[#0F2A44]/90 
      via-[#0F2A44]/60 
      to-transparent">
          </div>
        </div>

        {/* CONTENT */}
        <div className="relative max-w-4xl text-white">

          {/* LABEL */}
          <div className="flex items-center gap-4">
            <p className="text-xs tracking-[0.3em] text-[#2A9D8F] font-semibold">
              CONTACT
            </p>

            {/* ACCENT LINE */}
            <div className="h-[1px] w-16 bg-[#2A9D8F]"></div>
          </div>

          {/* HEADING */}
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-heading leading-tight !text-white">
            Get in touch with CHMI
          </h1>

          {/* SUBTEXT */}
          <p className="mt-6 max-w-xl text-lg text-white/80 leading-relaxed">
            Book appointments or send referrals with ease. Our team responds within
            <span className="text-white font-medium"> 24–48 hours</span>.
          </p>

          {/* CTA */}
          {/* <div className="mt-8 flex gap-4">

            <a
              href="#contact-form"
              className="bg-[#2A9D8F] text-white px-7 py-3 rounded-full text-sm font-medium shadow-md hover:bg-[#23867a] transition"
            >
              Send Appointment Request
            </a>

            <a
              href="tel:+61000000000"
              className="border border-white/30 px-7 py-3 rounded-full text-sm text-white hover:bg-white/10 transition"
            >
              Call Now
            </a>

          </div> */}

        </div>
      </section>

      {/* GRID */}
      <section
        id="contact-form"
        className="px-6 md:px-10 lg:px-16 pb-20 -mt-12 relative z-10"
      >
        <div className="grid lg:grid-cols-[38%_62%] gap-12 items-start">

          {/* LEFT */}
          <div className="bg-gradient-to-br from-[#0F2A44] to-[#1c3f66] text-white p-8 rounded-2xl shadow-xl">

            <h2 className="text-xl !text-white/80 font-semibold mb-2">
              Contact Information
            </h2>

            <div className="h-[2px] w-10 bg-[#2A9D8F] mb-6"></div>

            <p className="text-blue-200 text-sm mb-6">
              Fast, reliable mobile ultrasound services delivered to clinics.
            </p>

            <div className="space-y-6 text-sm">

              <div className="flex gap-4 items-start">
                <MapPin className="mt-1 text-[#2A9D8F]" />
                <div>
                  <p className="text-xs text-blue-300">LOCATION</p>
                  <p className="text-white">Ballarat & The Central Highlands</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Phone className="mt-1 text-[#2A9D8F]" />
                <div>
                  <p className="text-xs text-blue-300">PHONE</p>
                  <p className="text-white">+61 000 000 000</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="mt-1 text-[#2A9D8F]" />
                <div>
                  <p className="text-xs text-blue-300">EMAIL</p>
                  <p className="text-white">info@chmi.com.au</p>
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