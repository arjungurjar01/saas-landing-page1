import NavigationSection from "../sections/NavigationSection";
import HeroSection from "../sections/HeroSection";
import ProcessSection from "../sections/ProcessSection";
import FeatureSection from "../sections/FeatureSection";
import StatsSection from "../sections/StatsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import PricingSection from "../sections/PricingSection";

function HomePage() {
  return (
    <div className="min-h-screen">
      <NavigationSection />
      <HeroSection />
      <ProcessSection />
      <FeatureSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection/>
    </div>
  );
}

export default HomePage;
