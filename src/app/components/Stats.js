export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center px-6">

        <div>
          <h3 className="text-3xl font-bold text-[#1E3A5F]">500+</h3>
          <p className="text-gray-600 text-sm mt-1">Scans Completed</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#1E3A5F]">20+</h3>
          <p className="text-gray-600 text-sm mt-1">Clinics Supported</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[#1E3A5F]">24h</h3>
          <p className="text-gray-600 text-sm mt-1">Fast Reporting</p>
        </div>

      </div>
    </section>
  );
}