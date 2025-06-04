
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "fade" | "slide" | "typewriter";
}

const AnimatedText = ({ text, className = "", delay = 0, type = "fade" }: AnimatedTextProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      if (type === "typewriter") {
        let currentIndex = 0;
        const typeTimer = setInterval(() => {
          if (currentIndex < text.length) {
            setDisplayText(text.slice(0, currentIndex + 1));
            currentIndex++;
          } else {
            clearInterval(typeTimer);
          }
        }, 50);
        return () => clearInterval(typeTimer);
      } else {
        setDisplayText(text);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, type]);

  const getAnimationClass = () => {
    switch (type) {
      case "slide":
        return isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10";
      case "typewriter":
        return "animate-fade-in";
      default:
        return isVisible ? "animate-fade-in" : "opacity-0";
    }
  };

  return (
    <span className={`transition-all duration-500 ${getAnimationClass()} ${className}`}>
      {displayText}
      {type === "typewriter" && displayText.length < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
};

export default AnimatedText;
