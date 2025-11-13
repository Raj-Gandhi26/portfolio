import { Download, GraduationCap, Briefcase, Code, Heart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  const handleDownloadCV = () => {
    // Placeholder for CV download
    alert("CV download functionality - connect to your actual CV file");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Curriculum <span className="text-neon">Vitae</span>
          </h1>
          <Button
            onClick={handleDownloadCV}
            className="mt-6 bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-neon/50 hover:border-neon hover:glow-neon transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 w-4 h-4" />
            Download CV
          </Button>
        </div>

        {/* Education Section */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Education</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-neon mb-2">Master of Science in Computer Science</h3>
              <p className="text-foreground font-medium mb-2">Massachusetts Institute of Technology (MIT)</p>
              <p className="text-muted-foreground text-sm mb-3">2022 - 2024 | GPA: 3.9/4.0</p>
              <p className="text-foreground/80 text-sm">
                Specialization in Artificial Intelligence and Machine Learning. Thesis on Neural Network Optimization.
              </p>
            </div>
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-neon mb-2">Bachelor of Science in Computer Engineering</h3>
              <p className="text-foreground font-medium mb-2">Stanford University</p>
              <p className="text-muted-foreground text-sm mb-3">2018 - 2022 | GPA: 3.85/4.0</p>
              <p className="text-foreground/80 text-sm">
                Focus on Software Engineering and Data Structures. Dean's List for 6 consecutive semesters.
              </p>
            </div>
          </div>
        </section>

        {/* Project Experience */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Project Experience</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-neon mb-2">AI-Powered Code Analyzer</h3>
              <p className="text-muted-foreground text-sm mb-3">Jan 2024 - Present</p>
              <ul className="list-disc list-inside text-foreground/80 text-sm space-y-1">
                <li>Developed ML model for automated code quality assessment</li>
                <li>Reduced code review time by 40% using NLP techniques</li>
                <li>Tech Stack: Python, TensorFlow, FastAPI, React</li>
              </ul>
            </div>
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-xl font-bold text-neon mb-2">Distributed System for IoT Data</h3>
              <p className="text-muted-foreground text-sm mb-3">Mar 2023 - Dec 2023</p>
              <ul className="list-disc list-inside text-foreground/80 text-sm space-y-1">
                <li>Built scalable microservices architecture handling 1M+ requests/day</li>
                <li>Implemented real-time data processing pipeline with Kafka</li>
                <li>Tech Stack: Node.js, Docker, Kubernetes, MongoDB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Technical Skills</h2>
          </div>
          <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-neon font-semibold mb-3">Programming Languages</h4>
                <p className="text-foreground/80 text-sm">Python, JavaScript/TypeScript, Java, C++, Go</p>
              </div>
              <div>
                <h4 className="text-neon font-semibold mb-3">Frameworks & Tools</h4>
                <p className="text-foreground/80 text-sm">React, Node.js, TensorFlow, Docker, Kubernetes</p>
              </div>
              <div>
                <h4 className="text-neon font-semibold mb-3">Databases</h4>
                <p className="text-foreground/80 text-sm">PostgreSQL, MongoDB, Redis, Neo4j</p>
              </div>
              <div>
                <h4 className="text-neon font-semibold mb-3">Cloud & DevOps</h4>
                <p className="text-foreground/80 text-sm">AWS, GCP, CI/CD, Terraform, Jenkins</p>
              </div>
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="flex items-center mb-6">
            <Heart className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Soft Skills</h2>
          </div>
          <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
            <div className="grid md:grid-cols-3 gap-4">
              {["Leadership", "Team Collaboration", "Problem Solving", "Communication", "Time Management", "Adaptability"].map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-neon glow-neon" />
                  <span className="text-foreground/80 text-sm">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center mb-6">
            <Mail className="w-6 h-6 text-neon mr-3" />
            <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
          </div>
          <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Email:</span>
                <p className="text-foreground">john.anderson@example.com</p>
              </div>
              <div>
                <span className="text-muted-foreground">Phone:</span>
                <p className="text-foreground">+1 (555) 123-4567</p>
              </div>
              <div>
                <span className="text-muted-foreground">Location:</span>
                <p className="text-foreground">Cambridge, MA, USA</p>
              </div>
              <div>
                <span className="text-muted-foreground">Website:</span>
                <p className="text-foreground">www.johnanderson.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV;
