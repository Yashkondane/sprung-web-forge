
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const LiveLocation = () => {
  const [isSharing, setIsSharing] = useState(false);
  const { toast } = useToast();

  const handleShareLocation = () => {
    if ("geolocation" in navigator) {
      setIsSharing(true);
      
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          
          // Create a mailto link with location data
          const locationInfo = `My Location: https://maps.google.com?q=${latitude},${longitude}`;
          const subject = "My Location for Spring Manufacturing Consultation";
          const body = `Hello PrecisionSprings Team,\n\nI would like to discuss spring manufacturing services. Here is my current location for reference:\n\n${locationInfo}\n\nPlease contact me to discuss my requirements.\n\nBest regards`;
          
          const mailtoLink = `mailto:info@precisionsprings.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          
          // Open email client
          window.location.href = mailtoLink;
          
          toast({
            title: "Location Shared",
            description: "Your location has been included in the email to our team.",
          });
          
          setIsSharing(false);
        },
        (error) => {
          console.error("Error getting location:", error);
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please enable location services.",
            variant: "destructive",
          });
          setIsSharing(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000,
        }
      );
    } else {
      toast({
        title: "Location Not Supported",
        description: "Your browser doesn't support location services.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Navigation className="h-6 w-6 text-blue-600 mr-3" />
          Share Your Location
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm">
          Share your location with our team for on-site consultations and local service recommendations.
        </p>
        
        <Button 
          onClick={handleShareLocation}
          disabled={isSharing}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isSharing ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
              Getting Location...
            </>
          ) : (
            <>
              <MapPin className="h-4 w-4 mr-2" />
              Share My Location
            </>
          )}
        </Button>
        
        <div className="text-xs text-gray-500 space-y-1">
          <p>• Your location will be sent via email</p>
          <p>• We use this for service area verification</p>
          <p>• Location data is not stored permanently</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveLocation;
