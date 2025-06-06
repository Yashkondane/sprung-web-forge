
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Users, 
  Factory, 
  Globe, 
  CheckCircle,
  Target,
  Eye,
  Heart
} from "lucide-react";
import suspensionSpringImg from '/public/images/compression-springs-img.jpg';

const About = () => {
  const milestones = [
    { year: "1999", event: "Company founded with focus on custom spring manufacturing" },
    { year: "2005", event: "Achieved ISO 9001 certification for quality management" },
    { year: "2012", event: "Expanded facility and added advanced CNC coiling equipment" },
    { year: "2018", event: "Reached 1 million springs manufactured milestone" },
    { year: "2024", event: "Serving 500+ customers across 25+ industries worldwide" }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management",
    "RoHS Compliance",
    "REACH Compliance",
    "AS9100 Aerospace Standard"
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Quality Excellence",
      description: "Commitment to delivering products that exceed industry standards and customer expectations."
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Customer Focus",
      description: "Building long-term partnerships through exceptional service and technical support."
    },
    {
      icon: <Target className="h-8 w-8 text-orange-600" />,
      title: "Precision Engineering",
      description: "Leveraging advanced technology and expertise to deliver precise, reliable solutions."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Integrity",
      description: "Conducting business with honesty, transparency, and ethical practices."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About PrecisionSprings</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              25+ years of engineering excellence in custom spring manufacturing, 
              serving industries worldwide with precision, quality, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 1999, PrecisionSprings began as a small family-owned business with a 
                simple mission: to manufacture the highest quality custom springs for industrial applications.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the past 25 years, we've grown from a local supplier to a trusted global 
                manufacturer, serving customers across automotive, aerospace, medical device, 
                and industrial equipment industries.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we combine traditional craftsmanship with cutting-edge technology to 
                deliver springs that meet the most demanding specifications and applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Active Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <div className="text-gray-600">Industries Served</div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
              src={suspensionSpringImg} 
              alt="Our Manufacturing Facility"
              width="800"
              height="533"
              className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be the leading manufacturer of precision springs and wire forms, 
                  delivering innovative solutions that enable our customers' success 
                  through exceptional quality, service, and engineering expertise.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be recognized globally as the preferred partner for custom spring 
                  solutions, setting industry standards for quality, innovation, and 
                  customer satisfaction while fostering sustainable growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-blue-100">Key milestones in our company's growth</p>
          </div>
          
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-blue-800 rounded-lg p-4">
                  <p className="text-blue-100">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
            <p className="text-xl text-gray-600">
              Our commitment to quality is validated by industry-recognized certifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{cert}</h3>
                  <Badge variant="secondary">Certified</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Philosophy */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Manufacturing Equipment"
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Philosophy</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our manufacturing approach combines precision engineering with lean manufacturing 
                principles to deliver consistent, high-quality results.
              </p>
              
              <div className="space-y-4">
                {[
                  "Continuous improvement in processes and technology",
                  "Rigorous quality control at every production stage",
                  "Sustainable manufacturing practices",
                  "Investment in employee training and development",
                  "Customer collaboration throughout the design process"
                ].map((principle, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
