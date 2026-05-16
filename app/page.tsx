import Hero from "@/components/Hero";
import HowWeHelp from "@/components/HowWeHelp";
import BankStrip from "@/components/BankStrip";
import Process from "@/components/Process";
import MeetAdviser from "@/components/MeetAdviser";
import Reviews from "@/components/Reviews";
import Lenders from "@/components/Lenders";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeHelp />
      <BankStrip />
      <Process />
      <MeetAdviser />
      <Reviews />
      <Lenders />
      <Services />
      <Pricing />
      <FAQ />
      <CTABanner />
    </>
  );
}
