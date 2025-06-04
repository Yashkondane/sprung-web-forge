
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  Settings, 
  Gauge, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Wrench,
  Zap,
  Award
} from "lucide-react";

const Manufacturing = () => {
  const capabilities = [
    {
      icon: <Settings className="h-8 w-8 text-blue-600" />,
      title: "CNC Coiling Equipment",
      description: "State-of-the-art CNC spring coiling machines for precise, repeatable manufacturing",
      details: [
        "Wire diameter range: 0.004\" - 0.750\"",
        "Maximum coil diameter: 8.000\"",
        "Programming flexibility for complex geometries",
        "Automatic setup and changeover"
      ]
    },
    {
      icon: <Wrench className="h-8 w-8 text-green-600" />,
      title: "Wire Forming",
      description: "Advanced wire forming capabilities for custom shapes and assemblies",
      details: [
        "2D and 3D wire forming",
        "Multi-slide forming machines",
        "Custom tooling design",
        "Secondary operations integration"
      ]
    },
    {
      icon: <Gauge className="h-8 w-8 text-purple-600" />,
      title: "Quality Testing",
      description: "Comprehensive testing and inspection capabilities ensuring product quality",
      details: [
        "Load testing equipment",
        "Dimensional inspection systems",
        "Material verification",
        "Statistical process control"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "Surface Treatment",
      description: "In-house surface treatment and finishing operations",
      details: [
        "Zinc plating line",
        "Powder coating booth",
        "Shot peening equipment",
        "Stress relieving furnaces"
      ]
    }
  ];

  const materials = [
    { name: "Music Wire", usage: 85, description: "High carbon steel for maximum strength" },
    { name: "Stainless Steel", usage: 60, description: "Corrosion resistant applications" },
    { name: "Chrome Vanadium", usage: 45, description: "High temperature performance" },
    { name: "Phosphor Bronze", usage: 30, description: "Electrical conductivity requirements" },
    { name: "Beryllium Copper", usage: 25, description: "Non-magnetic applications" },
    { name: "Inconel", usage: 15, description: "Extreme environment applications" }
  ];

  const processes = [
    {
      step: 1,
      title: "Design & Engineering",
      description: "CAD design, finite element analysis, and prototype development",
      duration: "1-3 days"
    },
    {
      step: 2,
      title: "Material Selection",
      description: "Optimal material selection based on application requirements",
      duration: "Same day"
    },
    {
      step: 3,
      title: "Tooling & Setup",
      description: "Custom tooling design and machine setup optimization",
      duration: "1-2 days"
    },
    {
      step: 4,
      title: "Production",
      description: "Automated manufacturing with real-time quality monitoring",
      duration: "1-5 days"
    },
    {
      step: 5,
      title: "Testing & QC",
      description: "Comprehensive testing and quality assurance verification",
      duration: "Same day"
    },
    {
      step: 6,
      title: "Finishing",
      description: "Surface treatment and packaging for delivery",
      duration: "1-3 days"
    }
  ];

  const qualityStats = [
    { metric: "On-Time Delivery", value: 98.5, unit: "%" },
    { metric: "First-Pass Quality", value: 99.2, unit: "%" },
    { metric: "Customer Satisfaction", value: 4.8, unit: "/5.0" },
    { metric: "Defect Rate", value: 0.08, unit: "%" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Manufacturing Capabilities</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Advanced manufacturing technology and processes delivering precision springs 
              with consistent quality and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600">
              State-of-the-art equipment and processes for precision spring manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {capability.icon}
                    <CardTitle className="text-xl ml-4">{capability.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-600">
                    {capability.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {capability.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Materials Expertise</h2>
              <p className="text-lg text-gray-600 mb-8">
                Extensive experience working with a wide range of materials to meet specific 
                application requirements and performance criteria.
              </p>
              
              <div className="space-y-6">
                {materials.map((material, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900">{material.name}</span>
                      <span className="text-sm text-gray-500">{material.usage}% capability</span>
                    </div>
                    <Progress value={material.usage} className="h-2 mb-1" />
                    <p className="text-sm text-gray-600">{material.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality Metrics</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to quality is reflected in our performance metrics and 
                continuous improvement initiatives.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {qualityStats.map((stat, index) => (
                  <Card key={index} className="text-center p-6">
                    <CardContent>
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {stat.value}{stat.unit}
                      </div>
                      <div className="text-gray-600">{stat.metric}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-8">
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Award className="h-6 w-6 text-green-500 mr-2" />
                      <span className="font-semibold">ISO 9001:2015 Certified</span>
                    </div>
                    <p className="text-gray-600">
                      Our quality management system ensures consistent processes and 
                      continuous improvement in all aspects of our operations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              Streamlined manufacturing process from design to delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {process.step}
                    </div>
                    <Badge variant="outline">{process.duration}</Badge>
                  </div>
                  <CardTitle className="text-lg">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
                
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-gray-300">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Technology */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Equipment</h2>
              <p className="text-lg text-blue-100 mb-8">
                Investment in the latest manufacturing technology ensures precision, 
                efficiency, and consistent quality in every spring we produce.
              </p>
              
              <div className="space-y-4">
                {[
                  "CNC spring coiling machines with 0.001\" repeatability",
                  "Automated wire forming equipment",
                  "Computer-controlled heat treatment furnaces",
                  "Precision load testing systems",
                  "Coordinate measuring machines (CMM)",
                  "Statistical process control systems"
                ].map((equipment, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-3 mt-0.5" />
                    <span className="text-blue-100">{equipment}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Manufacturing Equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Capabilities?</h2>
          <p className="text-xl mb-8">
            Let us demonstrate how our manufacturing expertise can benefit your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                Request Manufacturing Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                Schedule Facility Tour
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Manufacturing;
