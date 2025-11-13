import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

export const FeatureCard = ({ title, description, icon: Icon, to }: FeatureCardProps) => {
  return (
    <Link
      to={to}
      className="group relative bg-card border border-neon/30 rounded-lg p-6 transition-all duration-300 hover:border-neon hover:glow-neon hover:-translate-y-2 hover:shadow-card animate-fade-in"
    >
      <div className="flex items-start space-x-4">
        <div className="p-3 bg-primary/20 rounded-lg border border-neon/50 group-hover:glow-neon transition-all duration-300">
          <Icon className="w-6 h-6 text-neon" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-neon transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-neon-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none" />
    </Link>
  );
};
