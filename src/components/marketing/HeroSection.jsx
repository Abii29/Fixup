
import { Button } from "../ui/button";
import { Download, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-background/0 pointer-events-none" />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left fade-in">
            <div>
              <div className="inline-block glass px-4 py-2 rounded-full mb-4">
                <p className="text-sm font-medium text-primary/80">
                  Maintenance Made Simple
                </p>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                Your Home Repairs, 
                <span className="text-accent"> Simplified</span>
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Connect with trusted local repair professionals instantly. Book services, track progress, and ensure quality repairs - all from your phone.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button size="lg" className="shadow-lg">
                <Download className="mr-2 h-5 w-5" />
                Download App
              </Button>
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative lg:block floating">
            <div className="glass rounded-2xl p-2 shadow-xl">
              <img
                src="src\components\marketing\Images\images2.webp"
                alt="Fix-Up App Interface"
                className="rounded-xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
