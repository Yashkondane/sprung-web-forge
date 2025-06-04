
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Car, 
  Plane, 
  Heart, 
  Factory, 
  Zap, 
  Shield, 
  Hammer, 
  Cpu,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      id: "automotive",
      name: "Automotive",
      icon: <Car className="h-12 w-12 text-blue-600" />,
      description: "Precision springs for automotive applications requiring durability, performance, and safety.",
      applications: [
        "Suspension systems",
        "Engine valve springs",
        "Clutch springs",
        "Brake mechanisms",
        "Seat adjustments",
        "Hood and trunk latches"
      ],
      requirements: [
        "High fatigue resistance",
        "Temperature stability",
        "Corrosion resistance",
        "Precise load characteristics"
      ],
      standards: ["TS 16949", "ISO 9001", "PPAP", "SPC"],
      caseStudy: "Developed custom valve springs for major automotive manufacturer, reducing engine noise by 15% while maintaining performance standards."
    },
    {
      id: "aerospace",
      name: "Aerospace",
      icon: <Plane className="h-12 w-12 text-green-600" />,
      description: "Critical springs for aerospace applications meeting stringent safety and performance requirements.",
      applications: [
        "Landing gear systems",
        "Control mechanisms",
        "Safety systems",
        "Cabin equipment",
        "Engine components",
        "Instrumentation"
      ],
      requirements: [
        "Extreme reliability",
        "Temperature resistance",
        "Weight optimization",
        "Traceable materials"
      ],
      standards: ["AS9100", "NADCAP", "FAA Compliance", "DFARS"],
      caseStudy: "Manufactured precision torsion springs for aircraft control systems, achieving 99.9% reliability rating over 10 million cycles."
    },
    {
      id: "medical",
      name: "Medical Devices",
      icon: <Heart className="h-12 w-12 text-red-600" />,
      description: "Biocompatible springs for medical devices and equipment requiring the highest quality standards.",
      applications: [
        "Surgical instruments",
        "Implantable devices",
        "Diagnostic equipment",
        "Patient monitoring",
        "Drug delivery systems",
        "Rehabilitation equipment"
      ],
      requirements: [
        "Biocompatibility",
        "FDA compliance",
        "Sterilization compatibility",
        "Precision manufacturing"
      ],
      standards: ["ISO 13485", "FDA 21 CFR 820", "USP Class VI", "ISO 10993"],
      caseStudy: "Designed micro-springs for minimally invasive surgical device, enabling 50% reduction in procedure time."
    },
    {
      id: "industrial",
      name: "Industrial Equipment",
      icon: <Factory className="h-12 w-12 text-purple-600" />,
      description: "Heavy-duty springs for industrial machinery and equipment in demanding environments.",
      applications: [
        "Heavy machinery",
        "Manufacturing equipment",
        "Conveyor systems",
        "Safety mechanisms",
        "Valve assemblies",
        "Vibration dampeners"
      ],
      requirements: [
        "High load capacity",
        "Durability",
        "Environmental resistance",
        "Long service life"
      ],
      standards: ["ISO 9001", "ASME", "ANSI", "Industry Specific"],
      caseStudy: "Created custom compression springs for mining equipment, extending maintenance intervals by 40% in harsh underground conditions."
    },
    {
      id: "electronics",
      name: "Electronics",
      icon: <Cpu className="h-12 w-12 text-orange-600" />,
      description: "Precision micro-springs for electronic devices and components requiring exact specifications.",
      applications: [
        "Connectors and switches",
        "Battery contacts",
        "Keyboard mechanisms",
        "Antenna systems",
        "Cooling fans",
        "Circuit protection"
      ],
      requirements: [
        "Miniaturization",
        "Electrical conductivity",
        "Consistent force",
        "Low profile design"
      ],
      standards: ["RoHS", "REACH", "UL Listed", "IPC Standards"],
      caseStudy: "Developed ultra-thin compression springs for smartphone cameras, enabling 30% thinner device profile."
    },
    {
      id: "defense",
      name: "Defense & Military",
      icon: <Shield className="h-12 w-12 text-gray-600" />,
      description: "Mission-critical springs for defense applications requiring ultimate reliability and performance.",
      applications: [
        "Weapon systems",
        "Communication equipment",
        "Vehicle components",
        "Safety mechanisms",
        "Optical systems",
        "Protective equipment"
      ],
      requirements: [
        "Extreme reliability",
        "Environmental resistance",
        "Security compliance",
        "Long-term storage"
      ],
      standards: ["MIL-STD", "DFARS", "ITAR", "AS9100"],
      caseStudy: "Manufactured specialized springs for military vehicle suspension, providing enhanced performance in extreme terrain conditions."
    },
    {
      id: "oil-gas",
      name: "Oil & Gas",
      icon: <Hammer className="h-12 w-12 text-yellow-600" />,
      description: "Corrosion-resistant springs for oil and gas industry equipment in harsh environments.",
      applications: [
        "Valve systems",
        "Downhole tools",
        "Safety equipment",
        "Pump mechanisms",
        "Pressure regulators",
        "Pipeline components"
      ],
      requirements: [
        "Corrosion resistance",
        "High pressure capability",
        "Temperature extremes",
        "Chemical compatibility"
      ],
      standards: ["API", "NACE", "ASME", "ISO 15156"],
      caseStudy: "Engineered corrosion-resistant springs for offshore drilling equipment, achieving 5+ year service life in saltwater environment."
    },
    {
      id: "energy",
      name: "Energy & Power",
      icon: <Zap className="h-12 w-12 text-green-500" />,
      description: "Reliable springs for power generation and renewable energy applications.",
      applications: [
        "Wind turbines",
        "Solar panel tracking",
        "Generator components",
        "Power transmission",
        "Energy storage",
        "Grid equipment"
      ],
      requirements: [
        "Weather resistance",
        "Long service life",
        "Minimal maintenance",
        "High reliability"
      ],
      standards: ["IEEE", "IEC", "UL", "CSA"],
      caseStudy: "Supplied custom springs for wind turbine blade pitch control, improving energy capture efficiency by 12%."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Trusted by leading companies across diverse industries for mission-critical 
              spring applications requiring precision, reliability, and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {industries.map((industry) => (
              <Card key={industry.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm text-center">
                    {industry.description.substring(0, 100)}...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Industry Sections */}
          <div className="space-y-16">
            {industries.map((industry, index) => (
              <div key={industry.id} className={`${index % 2 === 1 ? 'bg-gray-50' : ''} ${index % 2 === 1 ? '-mx-8 px-8' : ''} py-12 rounded-lg`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="flex items-center mb-6">
                      {industry.icon}
                      <h2 className="text-3xl font-bold text-gray-900 ml-4">{industry.name}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8">{industry.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {industry.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Standards & Certifications</h3>
                      <div className="flex flex-wrap gap-2">
                        {industry.standards.map((standard, standardIndex) => (
                          <Badge key={standardIndex} variant="secondary">
                            {standard}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl">Key Requirements</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {industry.requirements.map((req, reqIndex) => (
                            <div key={reqIndex} className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-blue-500 mr-3" />
                              <span className="text-gray-700">{req}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-l-4 border-l-orange-500">
                      <CardHeader>
                        <CardTitle className="text-lg">Success Story</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 italic">{industry.caseStudy}</p>
                      </CardContent>
                    </Card>
                    
                    <div className="flex space-x-3">
                      <Link to="/quote">
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          Get Industry Quote
                        </Button>
                      </Link>
                      <Link to="/contact">
                        <Button variant="outline">
                          Discuss Requirements
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-xl text-blue-100 mb-8">
            We work with companies across many industries. Contact us to discuss your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/manufacturing">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                View Capabilities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Industries;
