import NavigationSection from "../sections/NavigationSection";
import HeroSection from "../sections/HeroSection";
import ProcessSection from "../sections/ProcessSection";
import FeatureSection from "../sections/FeatureSection";
import StatsSection from "../sections/StatsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import PricingSection from "../sections/PricingSection";
import FAQSection from "../sections/FAQSection";
import CTASection from "../sections/CTASection";
import FooterSection from "../sections/FooterSection";

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
      <FAQSection/>
      <CTASection/>
      <FooterSection/>
    </div>
  );
}

export default HomePage;
