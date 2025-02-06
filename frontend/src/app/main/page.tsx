import BenefitsSection from "@/components/landing/BenefitsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import ReviewSection from "@/components/landing/ReviewSection";

function LandingPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <ReviewSection />
    </div>
  );
}

export default LandingPage;
