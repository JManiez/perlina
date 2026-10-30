import { pageMetadata } from "../lib/site";
import Hero from "../components/Hero";
import GoldIconGradient from "../components/ui/GoldIconGradient";
import HomeInstitutSection from "../components/sections/home/HomeInstitutSection";
import HomeIndibaSection from "../components/sections/home/HomeIndibaSection";
import HomeResultsSection from "../components/sections/home/HomeResultsSection";
import HomeUniversSection from "../components/sections/home/HomeUniversSection";

export const metadata = pageMetadata("/");

export default function Home() {
  return (
    <>
      <GoldIconGradient />
      <Hero />
      <HomeInstitutSection />
      <HomeIndibaSection />
      <HomeResultsSection />
      <HomeUniversSection />
    </>
  );
}
