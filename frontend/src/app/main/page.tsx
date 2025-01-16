import BenefitsSection from "@/components/landing/BenefitsSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import HeroSection from "@/components/landing/HeroSection";

function LandingPage() {
  return (
    //Pruebas de tailwindConfig Borrarlo al renderizar los componentes -->

    <div>
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
    </div>
  );
}

export default LandingPage;
