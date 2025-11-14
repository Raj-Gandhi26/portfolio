import { useState, useEffect } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "CV", path: "/cv" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Leadership", path: "/leadership" },
  { name: "Ethics", path: "/ethics" },
  { name: "Goals", path: "/goals" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg border-b border-neon shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink to="/" className="text-2xl font-bold text-neon hover:glow-neon transition-all duration-300">
            Raj Gandhi
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-neon transition-all duration-300 relative group"
                activeClassName="text-neon"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-glow transition-all duration-300 group-hover:w-full group-hover:glow-neon" />
              </NavLink>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 text-foreground hover:text-accent-secondary transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-neon transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neon/20 animate-fade-in-down">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-neon hover:bg-card/50 transition-all duration-300"
                activeClassName="text-neon bg-card/50"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
