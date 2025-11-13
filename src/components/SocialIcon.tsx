import { LucideIcon } from "lucide-react";

interface SocialIconProps {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const SocialIcon = ({ icon: Icon, href, label }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-neon/40 bg-card/50 hover:border-neon hover:glow-neon transition-all duration-300 hover:scale-110"
    >
      <Icon className="w-5 h-5 text-neon group-hover:text-neon transition-colors duration-300" />
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};
