
import { Navigation } from "../components/marketing/Navigation";
import { HeroSection } from "../components/marketing/HeroSection";
import { FeaturesSection } from "../components/marketing/FeaturesSection";
import { HowItWorks } from "../components/marketing/HowItWorks";
import { ContactSection } from "../components/marketing/ContactSection";
import { FAQSection } from "../components/marketing/FAQSection";
import { TestimonialsSection } from "../components/marketing/TestimonialsSection";
import { AboutSection } from "../components/marketing/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <HowItWorks />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
};

export default Index;
