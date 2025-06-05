
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from "lucide-react";
import LiveLocation from "@/components/LiveLocation";

const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Our Location",
      details: [
        "123 Industrial Way",
        "Manufacturing City, MC 12345",
        "United States"
      ]
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone Numbers",
      details: [
        "Main: +91 78230 82038",
        "Sales: +91 78230 82039",
        "Engineering: +91 78230 82040"
      ]
    },
    {
      icon: <Mail className="h-6 w-6 text-orange-600" />,
      title: "Email Addresses",
      details: [
        "info@precisionsprings.com",
        "sales@precisionsprings.com",
        "engineering@precisionsprings.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Live Location Component */}
      <LiveLocation />
      
      {contactInfo.map((info, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center text-lg">
              {info.icon}
              <span className="ml-3">{info.title}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ContactInfo;
