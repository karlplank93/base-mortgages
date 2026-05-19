import Hero from "@/components/Hero";
import BankStrip from "@/components/BankStrip";
import HowWeHelp from "@/components/HowWeHelp";
import Pricing from "@/components/Pricing";
import WhyBase from "@/components/WhyBase";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <BankStrip />
      <HowWeHelp />
      <Pricing />
      <WhyBase />
      <Reviews />
      <FAQ />
      <CTABanner />
    </>
  );
}
