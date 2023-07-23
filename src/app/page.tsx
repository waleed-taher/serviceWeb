import Image from "next/image";
import Hero from "./components/Hero";
import DiscountSection from "./components/DiscountSection";

export default function Home() {
  return (
    <main className="max-h-screen">
      <Hero />
      <DiscountSection />
    </main>
  );
}
