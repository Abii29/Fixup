
import { Navigation } from "@/components/marketing/Navigation";
import { HeroSection } from "@/components/marketing/HeroSection";
import { FeaturesSection } from "@/components/marketing/FeaturesSection";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { ContactSection } from "@/components/marketing/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <ContactSection />
    </div>
  );
};

export default Index;
