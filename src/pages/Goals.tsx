import { Footer } from "@/components/Footer";
import { Target, TrendingUp, BookOpen, Grid } from "lucide-react";

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

          {/* Vision & Growth Roadmap */}
          <div className="mb-8 animate-fade-in">
            <div className="bg-card border border-neon/30 rounded-lg p-8 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card">
              <h2 className="text-3xl font-bold mb-6 text-accent-secondary">
                Vision & Growth Roadmap
              </h2>
              
              {/* Short-Term Goals */}
              <div className="mb-8">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <Target className="w-6 h-6 text-neon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Short-Term Goals (1–2 years)
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent-secondary mr-2">•</span>
                        <span className="text-muted-foreground">Strengthen full-stack + cloud-native skills</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-secondary mr-2">•</span>
                        <span className="text-muted-foreground">Contribute to open-source</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-secondary mr-2">•</span>
                        <span className="text-muted-foreground">Improve ongoing projects (Workout Tracker, CareerCompass, Emergency Medical Portal)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Long-Term Goals */}
              <div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <TrendingUp className="w-6 h-6 text-neon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      Long-Term Goals (3–5 years)
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent-secondary mr-2">•</span>
                        <span className="text-muted-foreground">Pursue M.Tech in AI</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-secondary mr-2">•</span>
                        <span className="text-muted-foreground">Build responsible AI solutions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-secondary mr-2">•</span>
                        <span className="text-muted-foreground">Mentor junior developers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent-secondary mr-2">•</span>
                        <span className="text-muted-foreground">Contribute to global AI ethics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Continuous Learning Philosophy */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="bg-card border border-neon/30 rounded-lg p-8 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                  <BookOpen className="w-6 h-6 text-neon" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    Continuous Learning Philosophy
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Growth through curiosity, collaboration, and hands-on building.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* SWOT Analysis */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-neon/30 rounded-lg p-8 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                  <Grid className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">SWOT Analysis</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/10 border border-neon/20 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-3 text-accent-secondary">Strengths</h4>
                  <p className="text-muted-foreground">Backend logic, DB design, fast learning</p>
                </div>
                <div className="bg-primary/10 border border-neon/20 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-3 text-accent-secondary">Weaknesses</h4>
                  <p className="text-muted-foreground">Need deeper ML foundations</p>
                </div>
                <div className="bg-primary/10 border border-neon/20 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-3 text-accent-secondary">Opportunities</h4>
                  <p className="text-muted-foreground">AI, cloud-native, open-source</p>
                </div>
                <div className="bg-primary/10 border border-neon/20 rounded-lg p-6">
                  <h4 className="text-lg font-bold mb-3 text-accent-secondary">Threats</h4>
                  <p className="text-muted-foreground">Rapid tech shifts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Goals;
