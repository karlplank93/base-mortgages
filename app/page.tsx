import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Process from "@/components/Process";
import WhoWeHelp from "@/components/WhoWeHelp";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import Lenders from "@/components/Lenders";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <WhoWeHelp />
      <WhyUs />
      <Reviews />
      <Lenders />
      <CTABanner />
    </>
  );
}
