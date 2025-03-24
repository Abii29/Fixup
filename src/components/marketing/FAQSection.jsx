
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "How do I book a service?",
    answer: "Simply download the Fix-Up app, select the service you need, choose a preferred time slot, and book instantly. You can track your service status in through the app.",
  },
  {
    question: "Are the professionals verified?",
    answer: "Yes, all service providers on Fix-Up undergo thorough background checks and verification processes. We also maintain quality through continuous user ratings and reviews.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit cards and online banking transfers. All payments are processed securely through our platform.",
  },
  {
    question: "Can I cancel or reschedule a booking?",
    answer: "Yes, you can cancel or reschedule a booking up to 24 hours before the scheduled service time through the app, free of charge.",
  },
];

export const FAQSection = () => {
  return (
    <section className="section-padding" id="faq">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">
            Find answers to common questions about Fix-Up
          </p>
        </div>
        <div className="glass rounded-xl p-8 fade-in">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
