import { Footer } from "@/components/Footer";

const Goals = () => {
  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Future <span className="text-accent-secondary">Aspirations</span>
            </h1>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Goals;
