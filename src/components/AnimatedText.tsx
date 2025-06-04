
import { useEffect, useState } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  type?: "fade" | "slide" | "typewriter" | "wave" | "glow";
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
      case "wave":
        return isVisible ? "animate-wave" : "opacity-0";
      case "glow":
        return isVisible ? "animate-glow" : "opacity-0";
      default:
        return isVisible ? "animate-fade-in" : "opacity-0";
    }
  };

  const renderWaveText = () => {
    if (type === "wave" && isVisible) {
      return text.split("").map((char, index) => (
        <span 
          key={index} 
          className="inline-block animate-bounce" 
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }
    return displayText;
  };

  return (
    <span className={`transition-all duration-500 ${getAnimationClass()} ${className}`}>
      {type === "wave" ? renderWaveText() : displayText}
      {type === "typewriter" && displayText.length < text.length && (
        <span className="animate-pulse text-orange-500">|</span>
      )}
    </span>
  );
};

export default AnimatedText;
