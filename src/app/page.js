import HeroSection from "./components/HeroSection";
import WhyChoose from "./components/sections/WhyChoose";
import About from "./components/sections/About";
import CTASection from "./components/CTASection";
import TrustBar from "./components/TrustBar";
import Services from "./components/sections/Services";
import HowItWorks from "./components/sections/HowItWorks";
import Testimonials from "./components/sections/Testimonials";




export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <About />
       <Services />
      <WhyChoose />
      <HowItWorks />
      <Testimonials />
      <CTASection />
    </>
  );
}
