import { TypewriterText } from "@/components/TypewriterText";
import { FeatureCard } from "@/components/FeatureCard";
import { SocialIcon } from "@/components/SocialIcon";
import { FileText, Briefcase, User, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-6 animate-fade-in">
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                  John <span className="text-neon">Anderson</span>
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                  Computer Science • MIT
                </p>
              </div>

              <div className="pt-4">
                <TypewriterText
                  text="Exploring Knowledge. Building Ideas. Evolving Everyday."
                  speed={80}
                  className="text-lg sm:text-xl text-foreground/90 font-light"
                />
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-4 pt-6">
                <SocialIcon icon={Github} href="https://github.com" label="GitHub" />
                <SocialIcon icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
                <SocialIcon icon={Mail} href="mailto:hello@example.com" label="Email" />
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-glow to-neon-glow-soft rounded-full opacity-75 blur-2xl animate-glow-pulse" />
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full border-4 border-neon/50 animate-glow-pulse" />
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full border-4 border-background transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-neon/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-neon rounded-full animate-float" />
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
            Quick <span className="text-neon">Access</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FeatureCard
              icon={FileText}
              title="View CV"
              description="Explore my academic journey, skills, and professional experience"
              to="/cv"
            />
            <FeatureCard
              icon={Briefcase}
              title="Projects"
              description="Discover the innovative projects I've worked on"
              to="/projects"
            />
            <FeatureCard
              icon={User}
              title="About Me"
              description="Learn more about my background and interests"
              to="/skills"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
