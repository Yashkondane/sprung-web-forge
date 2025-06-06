
import Layout from "@/components/Layout";
import Preloader from "@/components/Preloader";
import AnimatedText from "@/components/AnimatedText";
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
      icon: <Cog className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />,
      title: "Custom Engineering",
      description: "Precision-engineered springs designed to your exact specifications and requirements."
    },
    {
      icon: <Shield className="h-6 w-6 md:h-8 md:w-8 text-green-600" />,
      title: "Quality Assured",
      description: "ISO 9001:2015 certified manufacturing with rigorous quality control processes."
    },
    {
      icon: <Clock className="h-6 w-6 md:h-8 md:w-8 text-orange-600" />,
      title: "Fast Turnaround",
      description: "Quick prototyping and production with industry-leading delivery times."
    },
    {
      icon: <Users className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />,
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
    <>
      <Preloader />
      <Layout>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-4 bg-orange-500 hover:bg-orange-600 animate-bounce-in text-xs md:text-sm">
                  ISO 9001:2015 Certified
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  <AnimatedText 
                    text="Custom Precision Springs for Every Industry" 
                    type="typewriter" 
                    delay={500}
                  />
                </h1>
                <p className="text-base md:text-xl mb-6 md:mb-8 text-blue-100">
                  <AnimatedText 
                    text="Leading manufacturer of high-quality compression, extension, and torsion springs. Trusted by industries worldwide for over 25 years."
                    delay={2000}
                  />
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in justify-center lg:justify-start" style={{ animationDelay: '3s' }}>
                  <Link to="/quote">
                    <Button size="lg" className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:scale-105">
                      Get Custom Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/products">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105">
                      View Products
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative animate-scale-in order-first lg:order-last" style={{ animationDelay: '1s' }}>
                <img 
                  src="/public/images/bouncy-springs-Photoroom.png" 
                  alt="Precision Spring Manufacturing"
                  className="rounded-lg transition-transform duration-300 hover:scale-105 w-full"
                />


              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Choose PrecisionSprings?
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We combine advanced manufacturing technology with decades of engineering expertise 
                to deliver springs that exceed your expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardHeader className="pb-2 md:pb-4">
                    <div className="flex justify-center mb-2 md:mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-sm md:text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="animate-slide-in-right order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center lg:text-left">
                  Complete Spring Solutions
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-4 md:mb-6 text-center lg:text-left">
                  From prototype to production, we manufacture a full range of springs and wire forms 
                  to meet your specific requirements.
                </p>
                
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {[
                    "Compression Springs - Custom coil springs for load-bearing applications",
                    "Extension Springs - Tension springs with various hook configurations",
                    "Torsion Springs - Rotational force springs for mechanical applications",
                    "Wire Forms - Custom bent wire components and assemblies"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                      <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center lg:text-left">
                  <Link to="/products">
                    <Button className="bg-blue-900 hover:bg-blue-800 text-white transition-all duration-300 hover:scale-105">
                      Explore All Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 animate-scale-in order-1 lg:order-2">
                <img 
                  src="/public/images/What-is-the-Strongest-Spring-Material-b-1024x576.jpeg" 
                  alt="Spring Close-Up"
                  className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 w-full"
                />

                <img 
                  src="/public/images/close-up-industrial-machine-parts-metal-springs-components-illuminated-warm-lighting-concept-mechanical-engineering-349282430.webp" 
                  alt="Quality Control"
                  className="rounded-lg shadow-lg mt-4 md:mt-8 transition-transform duration-300 hover:scale-105 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-12 md:py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 animate-fade-in">Industries We Serve</h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 md:mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Our precision springs are trusted across diverse industries for critical applications
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="bg-blue-800 rounded-lg p-3 md:p-4 hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="font-medium text-sm md:text-base">{industry}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 md:mt-12 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Link to="/industries">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105">
                  Learn More About Our Industries
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 md:mb-12 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-slide-in-right" style={{ animationDelay: `${index * 0.3}s` }}>
                  <CardContent className="p-0">
                    <div className="flex mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-3 md:mb-4 italic text-sm md:text-base">"{testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-gray-500">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-orange-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-scale-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8">
              Get a custom quote for your spring requirements. Our engineering team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button size="lg" className="w-full sm:w-auto bg-white text-orange-500 hover:bg-gray-100 hover:text-orange-500 transition-all duration-300 hover:scale-105">
                  Request Quote
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-orange-500 transition-all duration-300 hover:scale-105">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
