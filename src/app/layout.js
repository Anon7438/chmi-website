import "./globals.css";
import { Source_Sans_3, Playfair_Display } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

// BODY FONT
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

// HEADING FONT
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

export const metadata = {
  title: "CHMI - Mobile Imaging",
  description:
    "Mobile ultrasound services across Ballarat & The Central Highlands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${sourceSans.variable} ${playfair.variable}
          font-body bg-[#F9FBFD] text-[#0F2A44] antialiased
        `}
      >
        <Navbar />
        {children}
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}