import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypewriterText = ({ text, speed = 100, className = "" }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Reset on mount to restart typing on every page load
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="inline-block w-0.5 h-6 ml-1 bg-neon-glow animate-blink" style={{ boxShadow: "0 0 10px hsl(211 100% 50% / 0.8)" }} />
    </span>
  );
};
