
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { 
  Upload, 
  FileText, 
  Calculator, 
  Clock, 
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";

const Quote = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    
    // Project Details
    springType: "",
    material: "",
    quantity: "",
    applicationDescription: "",
    
    // Specifications
    wireGauge: "",
    outsideDiameter: "",
    freeLength: "",
    loadRequirement: "",
    compressionLength: "",
    
    // Additional Requirements
    surfaceTreatment: "",
    tolerances: "",
    qualityRequirements: [],
    timeline: "",
    
    // Additional Information
    additionalNotes: "",
    drawingUpload: null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Quote request submitted:", formData);
    
    toast({
      title: "Quote Request Submitted",
      description: "Thank you! We'll review your requirements and respond within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      springType: "",
      material: "",
      quantity: "",
      applicationDescription: "",
      wireGauge: "",
      outsideDiameter: "",
      freeLength: "",
      loadRequirement: "",
      compressionLength: "",
      surfaceTreatment: "",
      tolerances: "",
      qualityRequirements: [],
      timeline: "",
      additionalNotes: "",
      drawingUpload: null
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleQualityRequirementChange = (requirement: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      qualityRequirements: checked 
        ? [...prev.qualityRequirements, requirement]
        : prev.qualityRequirements.filter(req => req !== requirement)
    }));
  };

  const quoteGuideItems = [
    {
      title: "Spring Type",
      description: "Compression, Extension, Torsion, or Wire Form"
    },
    {
      title: "Dimensions",
      description: "Wire diameter, outside diameter, free length"
    },
    {
      title: "Load Requirements",
      description: "Force needed at specific deflection points"
    },
    {
      title: "Material",
      description: "Material type based on application requirements"
    },
    {
      title: "Quantity",
      description: "Production volume affects pricing and lead time"
    },
    {
      title: "Drawings",
      description: "CAD files or technical drawings (PDF, DWG, STEP)"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Request a Quote</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Get a custom quote for your spring requirements. Our engineering team 
              will review your specifications and provide a detailed proposal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Quote Form */}
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Quote Request Form</CardTitle>
                  <CardDescription>
                    Please provide as much detail as possible to help us prepare an accurate quote.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="company">Company *</Label>
                          <Input
                            id="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="springType">Spring Type *</Label>
                          <Select onValueChange={(value) => handleInputChange("springType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select spring type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="compression">Compression Spring</SelectItem>
                              <SelectItem value="extension">Extension Spring</SelectItem>
                              <SelectItem value="torsion">Torsion Spring</SelectItem>
                              <SelectItem value="wireform">Wire Form</SelectItem>
                              <SelectItem value="custom">Custom Design</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="material">Material</Label>
                          <Select onValueChange={(value) => handleInputChange("material", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select material" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="music-wire">Music Wire (ASTM A228)</SelectItem>
                              <SelectItem value="stainless-302">Stainless Steel 302</SelectItem>
                              <SelectItem value="stainless-316">Stainless Steel 316</SelectItem>
                              <SelectItem value="chrome-vanadium">Chrome Vanadium</SelectItem>
                              <SelectItem value="phosphor-bronze">Phosphor Bronze</SelectItem>
                              <SelectItem value="other">Other (specify in notes)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="quantity">Quantity *</Label>
                          <Input
                            id="quantity"
                            placeholder="e.g., 1000 pieces"
                            value={formData.quantity}
                            onChange={(e) => handleInputChange("quantity", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="timeline">Required Timeline</Label>
                          <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="rush">Rush (1-2 weeks)</SelectItem>
                              <SelectItem value="standard">Standard (3-4 weeks)</SelectItem>
                              <SelectItem value="flexible">Flexible (4+ weeks)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <Label htmlFor="applicationDescription">Application Description</Label>
                        <Textarea
                          id="applicationDescription"
                          placeholder="Describe how the spring will be used..."
                          value={formData.applicationDescription}
                          onChange={(e) => handleInputChange("applicationDescription", e.target.value)}
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="wireGauge">Wire Diameter</Label>
                          <Input
                            id="wireGauge"
                            placeholder="e.g., 0.050 inches"
                            value={formData.wireGauge}
                            onChange={(e) => handleInputChange("wireGauge", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="outsideDiameter">Outside Diameter</Label>
                          <Input
                            id="outsideDiameter"
                            placeholder="e.g., 1.250 inches"
                            value={formData.outsideDiameter}
                            onChange={(e) => handleInputChange("outsideDiameter", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="freeLength">Free Length</Label>
                          <Input
                            id="freeLength"
                            placeholder="e.g., 2.500 inches"
                            value={formData.freeLength}
                            onChange={(e) => handleInputChange("freeLength", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="loadRequirement">Load Requirement</Label>
                          <Input
                            id="loadRequirement"
                            placeholder="e.g., 50 lbs @ 1.5 inches"
                            value={formData.loadRequirement}
                            onChange={(e) => handleInputChange("loadRequirement", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="compressionLength">Working Length</Label>
                          <Input
                            id="compressionLength"
                            placeholder="e.g., 1.500 inches"
                            value={formData.compressionLength}
                            onChange={(e) => handleInputChange("compressionLength", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="tolerances">Tolerances</Label>
                          <Input
                            id="tolerances"
                            placeholder="e.g., ±0.005 inches"
                            value={formData.tolerances}
                            onChange={(e) => handleInputChange("tolerances", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Requirements</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="surfaceTreatment">Surface Treatment</Label>
                          <Select onValueChange={(value) => handleInputChange("surfaceTreatment", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select surface treatment" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">None</SelectItem>
                              <SelectItem value="zinc-plating">Zinc Plating</SelectItem>
                              <SelectItem value="powder-coating">Powder Coating</SelectItem>
                              <SelectItem value="shot-peening">Shot Peening</SelectItem>
                              <SelectItem value="stress-relief">Stress Relief</SelectItem>
                              <SelectItem value="passivation">Passivation (Stainless)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label className="text-sm font-medium">Quality Requirements</Label>
                          <div className="mt-2 space-y-2">
                            {[
                              "Load testing certificate",
                              "Material certification",
                              "Dimensional inspection report",
                              "SPC documentation",
                              "Custom testing requirements"
                            ].map((requirement) => (
                              <div key={requirement} className="flex items-center space-x-2">
                                <Checkbox
                                  id={requirement}
                                  checked={formData.qualityRequirements.includes(requirement)}
                                  onCheckedChange={(checked) => 
                                    handleQualityRequirementChange(requirement, checked as boolean)
                                  }
                                />
                                <Label htmlFor={requirement} className="text-sm">
                                  {requirement}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Upload Drawings</h3>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 mb-2">
                          Upload technical drawings, CAD files, or specifications
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                          Supported formats: PDF, DWG, STEP, DXF (Max 10MB)
                        </p>
                        <Button type="button" variant="outline">
                          Choose Files
                        </Button>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <Label htmlFor="additionalNotes">Additional Notes</Label>
                      <Textarea
                        id="additionalNotes"
                        placeholder="Any additional information about your requirements..."
                        value={formData.additionalNotes}
                        onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                        rows={4}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end">
                      <Button type="submit" size="lg" className="bg-orange-500 hover:bg-orange-600">
                        Submit Quote Request
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quote Guide */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2" />
                    Quote Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quoteGuideItems.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Response Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Quote within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Engineering review included</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm">Free design consultation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm">quotes@precisionsprings.com</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Our engineering team is available to help with your spring design requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quote;
