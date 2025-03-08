
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Download the App",
    description: "Get started by downloading the Fix-Up app from your app store.",
  },
  {
    number: "02",
    title: "Book a Service",
    description: "Browse through our verified professionals and book instantly.",
  },
  {
    number: "03",
    title: "Track Progress",
    description: "Monitor your service status in real-time through the app.",
  },
  {
    number: "04",
    title: "Rate & Review",
    description: "Share your experience and help our community grow.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="section-padding" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Get your repairs done in four simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass p-6 rounded-xl h-full">
                <div className="text-4xl font-bold text-accent mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <ArrowRight className="text-accent/50 h-6 w-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
