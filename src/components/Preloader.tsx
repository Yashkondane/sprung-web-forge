
import { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    const timer = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Main Logo Animation */}
        <div className="relative mb-8">
          <div className="animate-spin rounded-full h-32 w-32 border-4 border-transparent border-t-orange-500 border-r-orange-400 mx-auto"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-pulse">
              <div className="w-16 h-16 bg-orange-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Company Name with Typewriter Effect */}
        <h2 className="text-3xl font-bold text-white mb-4 animate-fade-in">
          <span className="inline-block animate-bounce" style={{ animationDelay: '0s' }}>P</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.1s' }}>r</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.2s' }}>e</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.3s' }}>c</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.4s' }}>i</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.5s' }}>s</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.6s' }}>i</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.7s' }}>o</span>
          <span className="inline-block animate-bounce" style={{ animationDelay: '0.8s' }}>n</span>
          <span className="inline-block animate-bounce text-orange-500" style={{ animationDelay: '0.9s' }}>S</span>
          <span className="inline-block animate-bounce text-orange-500" style={{ animationDelay: '1s' }}>p</span>
          <span className="inline-block animate-bounce text-orange-500" style={{ animationDelay: '1.1s' }}>r</span>
          <span className="inline-block animate-bounce text-orange-500" style={{ animationDelay: '1.2s' }}>i</span>
          <span className="inline-block animate-bounce text-orange-500" style={{ animationDelay: '1.3s' }}>n</span>
          <span className="inline-block animate-bounce text-orange-500" style={{ animationDelay: '1.4s' }}>g</span>
          <span className="inline-block animate-bounce text-orange-500" style={{ animationDelay: '1.5s' }}>s</span>
        </h2>

        {/* Loading Text */}
        <p className="text-blue-100 mb-6 animate-pulse text-lg">
          Loading precision manufacturing...
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto bg-blue-800 rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          ></div>
        </div>

        {/* Progress Percentage */}
        <div className="text-blue-200 text-sm">
          {Math.round(Math.min(progress, 100))}%
        </div>
      </div>
    </div>
  );
};

export default Preloader;
