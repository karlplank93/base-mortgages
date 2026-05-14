import Hero from "@/components/Hero";
import HowWeHelp from "@/components/HowWeHelp";
import BankStrip from "@/components/BankStrip";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Lenders from "@/components/Lenders";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeHelp />
      <BankStrip />
      <Services />
      <Process />
      <WhyUs />
      <Reviews />
      <Lenders />
      <CTABanner />
    </>
  );
}
