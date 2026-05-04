 "use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-20">
      <div className="
        bg-[#0F2A44] 
        rounded-3xl 
        p-10 md:p-14 
        flex flex-col md:flex-row 
        justify-between items-center 
        gap-8 
        text-white
        shadow-lg
      ">

        {/* LEFT */}
        <div>

          {/* LABEL + LINE */}
          <div className="flex items-center gap-4 mb-3">
            <p className="text-xs tracking-[0.3em] text-[#2A9D8F] font-semibold">
              GET STARTED
            </p>
            <div className="h-[1px] w-12 bg-[#2A9D8F]"></div>
          </div>

          {/* HEADING */}
          <h3 className="text-3xl md:text-4xl font-heading !text-white/70 leading-tight">
            Book a mobile visit today
          </h3>

          {/* TEXT */}
          <p className="text-white/70 mt-4 max-w-md leading-relaxed">
            Supporting clinics across Ballarat & the Central Highlands with
            radiologist-reported ultrasound. Get in touch to schedule a visit
            or send a referral.
          </p>

        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-4 flex-wrap">

          {/* PRIMARY */}
          <Link
            href="/contact"
            className="
              bg-[#2A9D8F] 
              text-white 
              px-7 py-3 
              rounded-full 
              font-medium 
              shadow-md
              hover:bg-[#23867a]
              transition
            "
          >
            Send Referral →
          </Link>

          {/* SECONDARY */}
          <a
            href="tel:+61000000000"
            className="
              border border-white/30 
              px-7 py-3 
              rounded-full 
              text-white
              hover:bg-white/10
              transition
            "
          >
            Call Us
          </a>

        </div>

      </div>
    </section>
  );
}