import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "CHMI - Mobile Imaging",
  description:
    "Mobile ultrasound services across Ballarat & Central Highlands. Fast, reliable, radiologist-reported imaging.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
         <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}