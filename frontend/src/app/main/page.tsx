import BenefitsSection from "@/components/landing/BenefitsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import ReviewSection from "@/components/landing/ReviewSection";

function LandingPage() {
  return (
    //Pruebas de tailwindConfig Borrarlo al renderizar los componentes -->

    <div>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <ReviewSection />
    </div>
  );
}

export default LandingPage;
