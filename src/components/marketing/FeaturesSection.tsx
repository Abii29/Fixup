
import { Star, Shield, Clock, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Quick Booking",
    description: "Book repair services in minutes with our intuitive interface.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Your transactions are protected with bank-level security.",
  },
  {
    icon: Star,
    title: "Verified Professionals",
    description: "Every provider is thoroughly vetted and rated by customers.",
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "Communicate directly with your service provider in the app.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="section-padding bg-secondary/30" id="features">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-4">Why Choose Fix-Up</h2>
          <p className="text-muted-foreground">
            Experience the future of home maintenance with our innovative features
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass p-6 rounded-xl fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
