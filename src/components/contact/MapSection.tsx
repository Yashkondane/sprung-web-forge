
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Facility</h2>
          <p className="text-xl text-gray-600">
            We welcome facility tours for prospective clients
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200">
          <div className="flex items-center justify-center h-full bg-blue-50">
            <div className="text-center p-8">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">PrecisionSprings Manufacturing Facility</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                123 Industrial Way, Manufacturing City, MC 12345, United States
              </p>
              <Button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
