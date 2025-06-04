
import { X, Info } from "lucide-react";
import { useState } from "react";

const DemoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-orange-500 text-white py-2 px-4 relative animate-slide-down">
      <div className="max-w-7xl mx-auto flex items-center justify-center text-sm">
        <Info className="h-4 w-4 mr-2" />
        <span className="font-medium">
          Demo Site - All images are for reference purposes only
        </span>
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 hover:bg-orange-600 rounded-full p-1 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default DemoBanner;
