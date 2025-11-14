import { Footer } from "@/components/Footer";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Raj is reliable, calm under pressure, and great to collaborate with.",
      author: "Mentor",
      role: "Faculty Advisor"
    },
    {
      quote: "His backend and database skills strengthened our project significantly.",
      author: "Teammate",
      role: "Project Collaborator"
    },
    {
      quote: "Raj builds systems that are clean, simple, and user-friendly.",
      author: "Senior Peer",
      role: "Technical Lead"
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-accent-secondary">Testimonials</span>
            </h1>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg border border-neon/50">
                    <Quote className="w-5 h-5 text-neon" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-neon/20 pt-4">
                  <p className="text-sm font-bold text-foreground">— {testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
