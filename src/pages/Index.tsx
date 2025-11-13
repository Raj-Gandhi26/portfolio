import { TypewriterText } from "@/components/TypewriterText";
import { FeatureCard } from "@/components/FeatureCard";
import { SocialIcon } from "@/components/SocialIcon";
import { FileText, Briefcase, User, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
const Index = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  Raj Gandhi         <span className="text-neon">Anderson</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                  Computer Science • PDEU
                </p>
              </div>

              <div className="pt-4">
                <TypewriterText text="Exploring Knowledge. Building Ideas. Evolving Everyday." speed={80} className="text-lg sm:text-xl text-foreground/90 font-light" />
              </div>

              {/* About Me Button */}
              <div className="pt-6">
                <Button className="bg-card/50 border-2 border-neon/40 hover:border-neon text-neon hover:glow-neon transition-all duration-300 hover:scale-105" size="lg">
                  About Me
                </Button>
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-glow to-neon-glow-soft rounded-full opacity-75 blur-2xl animate-glow-pulse" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full border-4 border-neon/50 animate-glow-pulse" />
                  <img src={profilePhoto} alt="Profile" className="w-full h-full object-cover rounded-full border-4 border-background transition-transform duration-500 group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Technical <span className="text-neon">Overview</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard icon={FileText} title="View CV" description="Explore my academic journey, skills, and professional experience" to="/cv" />
            <FeatureCard icon={Briefcase} title="Projects" description="Discover the innovative projects I've worked on" to="/projects" />
            <FeatureCard icon={User} title="Technical Skills" description="Explore my technical expertise and capabilities" to="/skills" />
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Let's <span className="text-neon">Connect</span>
          </h2>
          <div className="flex items-center justify-center space-x-6">
            <SocialIcon icon={Github} href="https://github.com" label="GitHub" />
            <SocialIcon icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
            <SocialIcon icon={Mail} href="mailto:hello@example.com" label="Email" />
          </div>
        </div>
      </section>

      {/* Footer Rights */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground footer-text">
            © 2025 Raj Gandhi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;