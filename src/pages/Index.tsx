
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Cog, 
  Shield, 
  Award, 
  Clock, 
  Users, 
  CheckCircle,
  ArrowRight,
  Star
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: <Cog className="h-8 w-8 text-blue-600" />,
      title: "Custom Engineering",
      description: "Precision-engineered springs designed to your exact specifications and requirements."
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Quality Assured",
      description: "ISO 9001:2015 certified manufacturing with rigorous quality control processes."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Fast Turnaround",
      description: "Quick prototyping and production with industry-leading delivery times."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Expert Support",
      description: "Dedicated engineering team to help optimize your spring design and application."
    }
  ];

  const industries = [
    "Automotive", "Aerospace", "Medical Devices", "Industrial Equipment", 
    "Electronics", "Defense", "Oil & Gas", "Construction"
  ];

  const testimonials = [
    {
      name: "John Smith",
      company: "AutoTech Manufacturing",
      text: "Outstanding quality and service. Their custom compression springs have been critical to our assembly line efficiency.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "MedDevice Solutions",
      text: "Precision and reliability you can count on. Perfect for our medical device applications.",
      rating: 5
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-500 hover:bg-orange-600">
                ISO 9001:2015 Certified
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Custom Precision Springs for Every Industry
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Leading manufacturer of high-quality compression, extension, and torsion springs. 
                Trusted by industries worldwide for over 25 years.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Get Custom Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/products">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                    View Products
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Precision Spring Manufacturing"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose PrecisionSprings?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine advanced manufacturing technology with decades of engineering expertise 
              to deliver springs that exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Complete Spring Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                From prototype to production, we manufacture a full range of springs and wire forms 
                to meet your specific requirements.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Compression Springs - Custom coil springs for load-bearing applications",
                  "Extension Springs - Tension springs with various hook configurations",
                  "Torsion Springs - Rotational force springs for mechanical applications",
                  "Wire Forms - Custom bent wire components and assemblies"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/products">
                <Button className="bg-blue-900 hover:bg-blue-800">
                  Explore All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Manufacturing Equipment"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Quality Control"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Our precision springs are trusted across diverse industries for critical applications
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-4 hover:bg-blue-700 transition-colors">
                <span className="font-medium">{industry}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <Link to="/industries">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Learn More About Our Industries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Get a custom quote for your spring requirements. Our engineering team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quote">
              <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                Request Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
