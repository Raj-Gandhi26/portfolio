import { Footer } from "@/components/Footer";
import { Award, Users, Code, Target } from "lucide-react";

const Leadership = () => {
  const experiences = [
    {
      icon: Award,
      title: "Project Lead – Emergency Medical QR Portal (Hackout 2024; 2nd Place)",
      description: "I led the technical development of the Emergency Medical QR Portal during Hackout 2024, where our team secured 2nd place. I designed the backend architecture using Flask and MySQL and ensured the emergency workflow remained fast, secure, and intuitive.",
      bullets: [
        "Designed secure role-based access",
        "Built QR → medical profile retrieval",
        "Developed backend APIs",
        "Performed real-time debugging during hackathon",
        "Coordinated team workflow"
      ]
    },
    {
      icon: Code,
      title: "Full-Stack Lead – Workout Detecting System (DBMS Project)",
      description: "I coordinated a 3-person team to build a fitness and trainer allocation system using Flask and MySQL. I planned the backend architecture, database schema, and guided teammates on integration.",
      bullets: [
        "Normalized MySQL schema",
        "Guided Flask routing & integration",
        "Planned trainer allocation system",
        "Introduced challenge module",
        "Maintained documentation & version control"
      ]
    },
    {
      icon: Users,
      title: "Collaboration – CareerCompass",
      description: "My contribution to CareerCompass focused on frontend UX, clean component layout, and helping teammates refine flows, navigation, and recommendations.",
      bullets: [
        "Designed intuitive UI",
        "Improved consistent theme & spacing",
        "Conducted user testing",
        "Supported backend integration"
      ]
    },
    {
      icon: Target,
      title: "Key Strengths",
      description: "Leadership qualities that drive successful team outcomes:",
      bullets: [
        "Clear communication",
        "Calm conflict resolution",
        "Systematic planning",
        "Helping weaker teammates",
        "Maintaining team morale"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Leadership & <span className="text-accent-secondary">Collaboration</span>
            </h1>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="bg-card border border-neon/30 rounded-lg p-8 hover:border-neon hover:glow-neon transition-all duration-300 shadow-card animate-fade-in hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <exp.icon className="w-6 h-6 text-neon" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-accent-secondary mr-2">•</span>
                          <span className="text-foreground">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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

export default Leadership;
