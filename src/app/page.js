import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import CTASection from "./components/CTASection";
import TrustBar from "./components/TrustBar";



export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChoose />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}