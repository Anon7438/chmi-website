import Link from "next/link";

export function PrimaryButton({ href, children }) {
  return (
    <Link
      href={href}
      className="bg-[#0F2A44] text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:-translate-y-1 transition"
    >
      {children}
    </Link>
  );
}

export function OutlineButton({ href, children }) {
  return (
    <Link
      href={href}
      className="border border-[#0F2A44] text-[#0F2A44] px-6 py-3 rounded-xl hover:bg-[#0F2A44] hover:text-white transition"
    >
      {children}
    </Link>
  );
}