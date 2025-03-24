
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jinuka Vihas",
    role: "Homeowner",
    content: "Fix-Up made finding a reliable plumber so easy! The app is intuitive and I could track the entire service process.",
    rating: 5,
  },
  {
    name: "Abilashini",
    role: "Property Manager",
    content: "As a property manager, Fix-Up has become my go-to platform for all maintenance needs. The quality of service is consistently excellent.",
    rating: 5,
  },
  {
    name: "Jinuka Vihas",
    role: "Homeowner",
    content: "I love the ability to chat directly with professionals makes everything so much smoother.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-secondary/30" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">
            Real experiences from satisfied customers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass p-6 rounded-xl fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
