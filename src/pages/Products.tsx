import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { 
  Download, 
  ArrowRight, 
  CheckCircle,
  Settings,
  Zap,
  RotateCcw,
  Wrench
} from "lucide-react";

const Products = () => {
  const springTypes = [
    {
      id: "compression",
      name: "Compression Springs",
      icon: <Settings className="h-8 w-8" />,
      image: "/public/images/1122-0026_Nested_compression_-_Lesjofors1-1024x683.webp",
      description: "Coil springs that resist compression forces and return to original length when load is removed.",
      applications: [
        "Automotive suspension systems",
        "Industrial machinery",
        "Valve springs",
        "Safety mechanisms"
      ],
      materials: [
        "Music wire (ASTM A228)",
        "Stainless steel (302, 316, 17-7 PH)",
        "Chrome vanadium",
        "Phosphor bronze"
      ],
      specifications: {
        "Wire Diameter": "0.004\" - 0.750\"",
        "Outside Diameter": "0.020\" - 8.000\"",
        "Free Length": "0.050\" - 24.000\"",
        "Load Range": "0.01 lbs - 2000 lbs"
      }
    },
    {
      id: "extension",
      name: "Extension Springs",
      icon: <Zap className="h-8 w-8" />,
      image: "/public/images/F0821447-01.webp",
      description: "Tension springs that extend when pulled and return to original length when released.",
      applications: [
        "Garage door systems",
        "Exercise equipment",
        "Agricultural machinery",
        "Medical devices"
      ],
      materials: [
        "Music wire (ASTM A228)",
        "Stainless steel (302, 316)",
        "Hard drawn wire",
        "Chrome silicon"
      ],
      specifications: {
        "Wire Diameter": "0.006\" - 0.500\"",
        "Outside Diameter": "0.030\" - 6.000\"",
        "Body Length": "0.100\" - 20.000\"",
        "Load Range": "0.05 lbs - 500 lbs"
      }
    },
    {
      id: "torsion",
      name: "Torsion Springs",
      icon: <RotateCcw className="h-8 w-8" />,
      image: "/public/images/Torsion-Springs-Small.jpg",
      description: "Springs that apply torque or rotational force around an axis.",
      applications: [
        "Hinges and latches",
        "Clothespins",
        "Garage door mechanisms",
        "Electrical switches"
      ],
      materials: [
        "Music wire (ASTM A228)",
        "Stainless steel (302, 316)",
        "Chrome vanadium",
        "Beryllium copper"
      ],
      specifications: {
        "Wire Diameter": "0.008\" - 0.375\"",
        "Body Diameter": "0.040\" - 4.000\"",
        "Body Length": "0.125\" - 12.000\"",
        "Torque Range": "0.001 in-lbs - 100 in-lbs"
      }
    },
    {
      id: "wireforms",
      name: "Wire Forms",
      icon: <Wrench className="h-8 w-8" />,
      image: "/public/images/1613728188_p_5722122_1261554__1_-removebg-preview.png",
      description: "Custom bent wire components and assemblies for specific applications.",
      applications: [
        "Display racks",
        "Safety guards",
        "Clips and fasteners",
        "Custom assemblies"
      ],
      materials: [
        "Music wire",
        "Stainless steel",
        "Galvanized wire",
        "Aluminum wire"
      ],
      specifications: {
        "Wire Diameter": "0.010\" - 0.500\"",
        "Forming Length": "0.500\" - 36.000\"",
        "Bend Radius": "0.5x wire diameter minimum",
        "Tolerance": "±0.005\" typical"
      }
    }
  ];

  const materials = [
    {
      name: "Music Wire (ASTM A228)",
      properties: "High tensile strength, excellent fatigue life",
      applications: "General purpose springs, high-stress applications"
    },
    {
      name: "Stainless Steel 302",
      properties: "Corrosion resistant, non-magnetic",
      applications: "Food processing, marine, medical devices"
    },
    {
      name: "Stainless Steel 316",
      properties: "Superior corrosion resistance",
      applications: "Chemical processing, marine environments"
    },
    {
      name: "Chrome Vanadium",
      properties: "High fatigue resistance, temperature stable",
      applications: "Automotive, high-temperature applications"
    }
  ];

  const treatments = [
    "Zinc plating for corrosion resistance",
    "Powder coating for enhanced durability",
    "Shot peening for improved fatigue life",
    "Stress relieving for dimensional stability",
    "Passivation for stainless steel parts"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6">Our Products</h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive range of precision springs and wire forms manufactured 
                to your exact specifications and quality standards.
              </p>
              <div className="flex space-x-4">
                <Link to="/quote">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white hover:text-white">
                    Get Custom Quote
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  <Download className="h-4 w-4 mr-2" />
                  Product Catalog
                </Button>
              </div>
            </div>
            <div>
              <AspectRatio ratio={16 / 9}>
                <img
                  src="/public/images/cropped-61FGbuW7h5L._AC_UF894,1000_QL80_.png"
                  alt="Spring manufacturing facility"
                  className="rounded-lg object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>

      {/* Spring Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="compression" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {springTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="text-sm">
                  {type.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {springTypes.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="mb-6">
                      <AspectRatio ratio={16 / 9}>
                        <img
                          src={type.image}
                          alt={`${type.name} manufacturing`}
                          className="rounded-lg object-cover w-full h-full shadow-lg"
                        />
                      </AspectRatio>
                    </div>
                    
                    <div className="flex items-center mb-6">
                      <div className="text-blue-600 mr-4">{type.icon}</div>
                      <h2 className="text-3xl font-bold text-gray-900">{type.name}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8">{type.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications</h3>
                      <div className="space-y-2">
                        {type.applications.map((app, index) => (
                          <div key={index} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-3" />
                            <span className="text-gray-700">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Materials</h3>
                      <div className="flex flex-wrap gap-2">
                        {type.materials.map((material, index) => (
                          <Badge key={index} variant="secondary">
                            {material}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <Card>
                      <CardHeader>
                        <CardTitle>Specifications</CardTitle>
                        <CardDescription>
                          Standard manufacturing ranges for {type.name.toLowerCase()}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {Object.entries(type.specifications).map(([spec, value]) => (
                            <div key={spec} className="flex justify-between">
                              <span className="font-medium text-gray-700">{spec}:</span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-6 pt-6 border-t">
                          <p className="text-sm text-gray-500 mb-4">
                            Custom specifications available upon request
                          </p>
                          <div className="flex space-x-3">
                            <Link to="/quote">
                              <Button className="bg-orange-500 hover:bg-orange-600 text-white hover:text-white">
                                Get Quote
                              </Button>
                            </Link>
                            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-700">
                              <Download className="h-4 w-4 mr-2" />
                              Download Spec Sheet
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Materials & Finishes</h2>
            <p className="text-xl text-gray-600">
              Wide selection of materials and surface treatments to meet your application requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <AspectRatio ratio={16 / 9}>
              <img
                src="/public/images/music-wire-spring-2f-astm-228.jpg"
                alt="Spring materials and manufacturing process"
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </AspectRatio>
            <AspectRatio ratio={16 / 9}>
              <img
                src="/public/images/Suspension-springs-960x639.jpg"
                alt="Precision manufacturing equipment"
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </AspectRatio>
            <AspectRatio ratio={16 / 9}>
              <img
                src="/public/images/images(1).jpg"
                alt="Quality control and testing"
                className="rounded-lg object-cover w-full h-full shadow-lg"
              />
            </AspectRatio>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Materials</h3>
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h4 className="font-semibold text-gray-900 mb-2">{material.name}</h4>
                      <p className="text-gray-600 mb-2">{material.properties}</p>
                      <p className="text-sm text-gray-500">
                        <strong>Applications:</strong> {material.applications}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Surface Treatments</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {treatments.map((treatment, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span className="text-gray-700">{treatment}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-gray-600 mb-4">
                      All treatments applied in accordance with industry standards and customer specifications.
                    </p>
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-700">
                      <Download className="h-4 w-4 mr-2" />
                      Materials Guide
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Springs?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our engineering team can design and manufacture springs to your exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white hover:text-white">
                Request Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Speak with Engineer
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;

