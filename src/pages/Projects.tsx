import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Neural Network Optimizer",
      description: "Advanced optimization framework for deep learning models with custom gradient descent algorithms",
      tech: ["Python", "TensorFlow", "NumPy"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Real-time Chat Platform",
      description: "Scalable chat application with WebSocket support and end-to-end encryption",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Smart Campus System",
      description: "IoT-based campus management system with real-time monitoring and analytics",
      tech: ["Go", "React", "PostgreSQL", "MQTT"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-neon">Projects</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of innovative projects showcasing my technical skills and problem-solving abilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-neon mb-3 group-hover:text-neon transition-colors">
                {project.title}
              </h3>
              <p className="text-foreground/80 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-primary/20 border border-neon/30 rounded text-neon"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-4 pt-4 border-t border-neon/20">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-neon transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
