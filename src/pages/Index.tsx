import { Github, Linkedin, Mail, FileText, Code, Award } from "lucide-react";
import { SocialIcon } from "@/components/SocialIcon";
import { FeatureCard } from "@/components/FeatureCard";
import { TypewriterText } from "@/components/TypewriterText";
import profilePhoto from "@/assets/profile-photo.jpg";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                Hi, I'm <span className="text-neon">Raj Gandhi</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl">
                B.Tech CSE · PDEU
              </p>
              <div className="text-lg sm:text-xl text-foreground/90 max-w-2xl">
                <TypewriterText text="Exploring Knowledge. Building Ideas. Evolving Every Day." />
              </div>

              {/* About Me Button */}
              <div className="pt-4">
                <Link to="/about">
                  <Button 
                    className="bg-card/50 border-2 border-neon/40 hover:border-neon text-neon hover:glow-neon transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    About Me
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Profile Photo */}
            <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-neon-glow rounded-full blur-3xl opacity-40 animate-soft-pulse scale-110" />
                <img
                  src={profilePhoto}
                  alt="Raj Gandhi"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-neon shadow-card animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-card/20 to-transparent border-y border-border/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="text-neon">Overview</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore my journey through code, design, and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Curriculum Vitae"
              description="Explore my educational background, certifications, and professional timeline"
              icon={FileText}
              to="/cv"
            />
            <FeatureCard
              title="Projects"
              description="Discover the applications and systems I've built, from concept to deployment"
              icon={Code}
              to="/projects"
            />
            <FeatureCard
              title="Technical Skills"
              description="View my expertise across full-stack development, databases, and modern tools"
              icon={Award}
              to="/skills"
            />
          </div>
        </div>
      </section>

      {/* Let's Connect Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card/10">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's <span className="text-neon">Connect</span>
            </h2>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <SocialIcon icon={Github} href="https://github.com" label="GitHub" />
            <SocialIcon icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
            <SocialIcon icon={Mail} href="mailto:gandhiraj2605@gmail.com" label="Email" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
