
import { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-900 mb-8"></div>
        <h2 className="text-2xl font-bold text-blue-900 animate-pulse">
          PrecisionSprings
        </h2>
        <p className="text-gray-600 mt-2 animate-fade-in">
          Loading precision manufacturing...
        </p>
      </div>
    </div>
  );
};

export default Preloader;
