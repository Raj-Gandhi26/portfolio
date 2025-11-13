import { Footer } from "@/components/Footer";

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-accent-secondary">Testimonials</span>
            </h1>
          </div>

          {/* Testimonial Card Placeholders */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent-secondary transition-all duration-300"
              >
                <h3 className="text-lg font-bold mb-2">Testimonial {i}</h3>
                <p className="text-muted-foreground text-sm mb-4">Content will be added here</p>
                <p className="text-sm font-medium">- Name</p>
                <p className="text-xs text-muted-foreground">Title</p>
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
