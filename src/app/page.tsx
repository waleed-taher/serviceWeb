import Image from "next/image";
import Hero from "./components/Hero";
import DiscountSection from "./components/DiscountSection";
import Services from "./components/Services";
import Footer from "./components/Footer";
import IdeaSection from "./components/IdeaSection";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="max-h-screen ">
      <Hero />
      <DiscountSection />
      <Services />
      <IdeaSection />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
