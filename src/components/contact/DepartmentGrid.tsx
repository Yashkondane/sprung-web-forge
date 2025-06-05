
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building,
  Users,
  Award,
  MessageSquare
} from "lucide-react";

const DepartmentGrid = () => {
  const departments = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Sales Team",
      description: "Get quotes, pricing, and product information",
      contact: "sales@precisionsprings.com",
      phone: "+91 78230 82039"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Engineering Support",
      description: "Technical assistance and design consultation",
      contact: "engineering@precisionsprings.com",
      phone: "+91 78230 82040"
    },
    {
      icon: <Building className="h-8 w-8 text-orange-600" />,
      title: "Quality Assurance",
      description: "Quality concerns and certification questions",
      contact: "quality@precisionsprings.com",
      phone: "+91 78230 82041"
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-purple-600" />,
      title: "Customer Service",
      description: "General inquiries and support",
      contact: "support@precisionsprings.com",
      phone: "+91 78230 82038"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact the Right Department</h2>
          <p className="text-xl text-gray-600">
            Connect directly with our specialized teams for faster assistance
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {dept.icon}
                </div>
                <CardTitle className="text-lg">{dept.title}</CardTitle>
                <CardDescription>{dept.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-600">{dept.contact}</p>
                <p className="text-sm text-gray-600">{dept.phone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentGrid;
