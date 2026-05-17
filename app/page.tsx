import Hero from "@/components/Hero";
import HowWeHelp from "@/components/HowWeHelp";
import BankStrip from "@/components/BankStrip";
import WhyBase from "@/components/WhyBase";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <HowWeHelp />
      <BankStrip />
      <WhyBase />
      <Reviews />
      <Pricing />
      <FAQ />
      <CTABanner />
    </>
  );
}
