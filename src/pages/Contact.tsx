import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SocialIcon } from "@/components/SocialIcon";
import { Footer } from "@/components/Footer";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! This is a demo - connect to your backend for real functionality.");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Get In <span className="text-neon">Touch</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in">
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <Mail className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Email</p>
                    <a href="mailto:john.anderson@example.com" className="text-foreground hover:text-neon transition-colors">
                      john.anderson@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <Phone className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Phone</p>
                    <a href="tel:+15551234567" className="text-foreground hover:text-neon transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg border border-neon/50">
                    <MapPin className="w-5 h-5 text-neon" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">Location</p>
                    <p className="text-foreground">Cambridge, MA, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-neon/20">
                <h3 className="text-lg font-bold mb-4 text-foreground">Connect on Social Media</h3>
                <div className="flex space-x-4">
                  <SocialIcon icon={Github} href="https://github.com" label="GitHub" />
                  <SocialIcon icon={Linkedin} href="https://linkedin.com" label="LinkedIn" />
                  <SocialIcon icon={Twitter} href="https://twitter.com" label="Twitter" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card border border-neon/30 rounded-lg p-6 hover:border-neon hover:glow-neon transition-all duration-300">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="bg-background border-neon/30 focus:border-neon focus:ring-neon/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="bg-background border-neon/30 focus:border-neon focus:ring-neon/50"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="What's this about?"
                    required
                    className="bg-background border-neon/30 focus:border-neon focus:ring-neon/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message here..."
                    rows={6}
                    required
                    className="bg-background border-neon/30 focus:border-neon focus:ring-neon/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/80 text-primary-foreground border-2 border-neon/50 hover:border-neon hover:glow-neon transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
