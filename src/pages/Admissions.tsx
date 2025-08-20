import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  Users, 
  Calendar,
  Download,
  Upload,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

const Admissions = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    qualification: "",
    statement: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Application submitted:", formData);
    // Handle form submission
  };

  const requirements = [
    {
      program: "ICT Programs",
      requirements: [
        "SSCE/WAEC with 5 credits including Mathematics and English",
        "Basic computer literacy",
        "Age: 16-35 years",
        "Completed application form"
      ]
    },
    {
      program: "Business Administration",
      requirements: [
        "SSCE/WAEC with 5 credits including Mathematics and English",
        "Interest in business and entrepreneurship",
        "Age: 18-40 years",
        "Completed application form"
      ]
    },
    {
      program: "Arts and Crafts",
      requirements: [
        "SSCE/WAEC or equivalent",
        "Portfolio of creative work (optional)",
        "Age: 16+ years",
        "Completed application form"
      ]
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: "Submit Application",
      description: "Complete and submit your online application form",
      status: "current"
    },
    {
      step: 2,
      title: "Document Review",
      description: "Upload required documents for verification",
      status: "pending"
    },
    {
      step: 3,
      title: "Assessment",
      description: "Attend entrance assessment or interview",
      status: "pending"
    },
    {
      step: 4,
      title: "Admission Decision",
      description: "Receive admission decision via email",
      status: "pending"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero py-20 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Admissions
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Start your journey to success. Apply today and transform your future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Tabs defaultValue="apply" className="py-20">
          <div className="container mx-auto px-4">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="apply">Apply</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="process">Process</TabsTrigger>
              <TabsTrigger value="track">Track Application</TabsTrigger>
            </TabsList>

            <TabsContent value="apply" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Online Application Form</CardTitle>
                    <CardDescription>
                      Complete the form below to begin your application process
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="program">Preferred Program *</Label>
                        <Select value={formData.program} onValueChange={(value) => setFormData(prev => ({...prev, program: value}))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ict">Information and Communication Technology</SelectItem>
                            <SelectItem value="business">Business Administration</SelectItem>
                            <SelectItem value="arts">Arts and Crafts</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="qualification">Highest Qualification *</Label>
                        <Select value={formData.qualification} onValueChange={(value) => setFormData(prev => ({...prev, qualification: value}))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select qualification" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ssce">SSCE/WAEC</SelectItem>
                            <SelectItem value="ond">OND</SelectItem>
                            <SelectItem value="hnd">HND</SelectItem>
                            <SelectItem value="bsc">Bachelor's Degree</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="statement">Personal Statement</Label>
                        <Textarea
                          id="statement"
                          name="statement"
                          placeholder="Tell us why you want to join this program..."
                          value={formData.statement}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">
                        Submit Application
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Important Dates
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Application Deadline:</span>
                        <Badge variant="destructive">Dec 31, 2024</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Assessment Date:</span>
                        <Badge>Jan 15, 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Results Release:</span>
                        <Badge variant="secondary">Jan 30, 2025</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Session Begins:</span>
                        <Badge className="bg-success text-success-foreground">Feb 10, 2025</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Required Documents
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Original & photocopy of certificates
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Birth certificate or age declaration
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Passport photographs (4 copies)
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-success" />
                          Local Government ID
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="requirements" className="mt-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {requirements.map((req, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{req.program}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {req.requirements.map((requirement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-8">
              <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                  {applicationSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                        step.status === 'current' ? 'bg-primary text-primary-foreground' :
                        step.status === 'completed' ? 'bg-success text-success-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="track" className="mt-8">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Track Your Application</CardTitle>
                  <CardDescription>
                    Enter your application reference number to track status
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="reference">Application Reference Number</Label>
                    <Input
                      id="reference"
                      placeholder="e.g., LAGOS2024001234"
                    />
                  </div>
                  <Button className="w-full">
                    Track Application
                  </Button>
                  
                  <div className="mt-6 p-4 border rounded-lg bg-muted/50">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertCircle className="h-5 w-5 text-info" />
                      <span className="font-semibold">Application Status</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enter your reference number above to view your application status, next steps, and important updates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Admissions;