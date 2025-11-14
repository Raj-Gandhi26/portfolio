import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const coreValues = [
    "Innovation",
    "Excellence",
    "Integrity",
    "Collaboration",
    "Continuous Learning"
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Page Title */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-accent-secondary">Me</span>
            </h1>
          </div>

          {/* Main Intro Card */}
          <div className="mb-8 animate-fade-in">
            <div className="bg-card border border-neon/30 rounded-lg p-8 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card">
              <p className="text-foreground text-lg leading-relaxed mb-6">
                I am a Computer Science Engineering student at Pandit Deendayal Energy University with a strong interest in full-stack development, database systems, security, and building practical tools that solve real problems.
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                My learning journey is driven by curiosity and hands-on experimentation. I enjoy transforming ideas into working systems — whether it is full-stack apps, smart backend logic, or clean user interfaces.
              </p>
              <p className="text-foreground text-lg leading-relaxed">
                I believe learning is a continuous process rooted in innovation, integrity, and the ability to adapt. My goal is to create technology that is simple, meaningful, and genuinely useful.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-neon/30 rounded-lg p-8 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Core Values</h2>
              <div className="flex flex-wrap gap-3">
                {coreValues.map((value, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm px-4 py-2 border-neon/50 text-neon hover:bg-neon/10 transition-all duration-300"
                  >
                    {value}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
