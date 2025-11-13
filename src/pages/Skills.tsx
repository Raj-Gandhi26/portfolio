import { Code2, Database, Cloud, Cpu, Globe, Zap } from "lucide-react";
import { Footer } from "@/components/Footer";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Python", "JavaScript/TypeScript", "Java", "C++", "Go", "Rust"],
    },
    {
      icon: Globe,
      title: "Web Development",
      skills: ["React", "Next.js", "Vue.js", "Node.js", "Express", "FastAPI"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Neo4j", "Elasticsearch"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    },
    {
      icon: Cpu,
      title: "AI & Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "OpenCV"],
    },
    {
      icon: Zap,
      title: "Tools & Others",
      skills: ["Git", "Linux", "Nginx", "GraphQL", "REST APIs", "Microservices"],
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="text-neon">Skills</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/20 rounded-lg border border-neon/50 glow-neon mr-3">
                  <category.icon className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-neon glow-neon" />
                    <span className="text-foreground/80 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-bold text-center mb-8">
            Proficiency <span className="text-neon">Levels</span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { name: "Full-Stack Development", level: 95 },
              { name: "Machine Learning & AI", level: 88 },
              { name: "Cloud Architecture", level: 85 },
              { name: "Database Design", level: 90 },
              { name: "DevOps & CI/CD", level: 82 },
            ].map((skill, index) => (
              <div key={index} className="bg-card border border-neon/30 rounded-lg p-4 hover:border-neon transition-all duration-300">
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-medium">{skill.name}</span>
                  <span className="text-neon font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-neon-glow to-neon-glow-soft glow-neon transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
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

export default Skills;
