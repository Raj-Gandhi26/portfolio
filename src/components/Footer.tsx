import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-20 py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Table of Contents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* MAIN */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-secondary">MAIN</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  About Me
                </Link>
              </li>
            </ul>
          </div>

          {/* LEARN */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-secondary">LEARN</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/cv" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* MORE */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-accent-secondary">MORE</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/leadership" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/ethics" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  Ethics
                </Link>
              </li>
              <li>
                <Link to="/goals" className="text-muted-foreground hover:text-accent-secondary transition-colors">
                  Goals
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground footer-text">
            © 2025 Raj Gandhi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
