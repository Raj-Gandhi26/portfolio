import { Footer } from "@/components/Footer";

const Conclusion = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Conclusion & <span className="text-accent-secondary">Self-Assessment</span>
            </h1>
          </div>
          
          {/* SWOT Grid Placeholder */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent-secondary transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Strengths</h3>
              <p className="text-muted-foreground text-sm">Content will be added here</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent-secondary transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Weaknesses</h3>
              <p className="text-muted-foreground text-sm">Content will be added here</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent-secondary transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Opportunities</h3>
              <p className="text-muted-foreground text-sm">Content will be added here</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 hover:border-accent-secondary transition-all duration-300">
              <h3 className="text-xl font-bold mb-4">Threats</h3>
              <p className="text-muted-foreground text-sm">Content will be added here</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Conclusion;
