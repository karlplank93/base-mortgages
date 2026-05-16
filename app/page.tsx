import Hero from "@/components/Hero";
import HowWeHelp from "@/components/HowWeHelp";
import BankStrip from "@/components/BankStrip";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import MeetAdviser from "@/components/MeetAdviser";
import Reviews from "@/components/Reviews";
import Lenders from "@/components/Lenders";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeHelp />
      <BankStrip />
      <Pricing />
      <Process />
      <WhyUs />
      <MeetAdviser />
      <Reviews />
      <Lenders />
      <Services />
      <FAQ />
      <CTABanner />
    </>
  );
}
