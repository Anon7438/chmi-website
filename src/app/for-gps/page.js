
export default function ForGPs() {
    return (
        <div>

            {/* HERO */}
            <section className="bg-gray-50 py-16 text-center">
                <h1 className="text-4xl font-bold text-[#1E3A5F]">
                    Mobile Ultrasound for GP Clinics
                </h1>
                <p className="mt-3 text-gray-600">
                    Faster, smarter clinical decisions with onsite imaging
                </p>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">

                {/* LEFT */}
                <div className="space-y-4 text-gray-700">
                    <p>✔ Onsite scanning at your clinic or facility</p>
                    <p>✔ Radiologist-reported studies</p>
                    <p>✔ Fast report turnaround</p>
                    <p>✔ Secure electronic delivery</p>
                </div>

                {/* RIGHT STEPS */}
                <div className="bg-white p-6 rounded-xl shadow space-y-3">
                    <p>1. Send referral</p>
                    <p>2. We visit your clinic</p>
                    <p>3. Scan performed onsite</p>
                    <p>4. Radiologist report returned</p>
                </div>

            </section>

            {/* CTA */}
            <div className="text-center pb-16">
                <a
                    href="/contact"
                    className="bg-[#1E3A5F] text-white px-6 py-3 rounded-lg"
                >
                    Send Referral
                </a>
            </div>

            <section className="bg-gray-50 py-16 px-6">
                <div className="max-w-5xl mx-auto text-center">

                    <h2 className="text-2xl font-semibold text-[#1E3A5F]">
                        Trusted Mobile Imaging for GP Clinics and Referrers
                    </h2>

                    <p className="mt-3 text-gray-600">
                        Bringing radiology-grade imaging directly to your clinic with fast reporting and reliable service.
                    </p>

                </div>
            </section>
        </div>
    );
}