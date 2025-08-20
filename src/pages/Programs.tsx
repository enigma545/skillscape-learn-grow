import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Clock, Users, Award, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Information and Communication Technology (ICT)",
      description: "Comprehensive ICT training covering software development, networking, cybersecurity, and digital literacy.",
      duration: "6 months - 2 years",
      level: "Certificate/Diploma",
      category: "Technology",
      modules: ["Programming Fundamentals", "Web Development", "Database Management", "Network Administration", "Cybersecurity"],
      benefits: ["Industry-relevant skills", "Hands-on training", "Job placement assistance", "Certification"],
      image: "/src/assets/course-ict.jpg",
      tuition: "₦150,000 - ₦300,000"
    },
    {
      id: 2,
      title: "Business Administration",
      description: "Modern business practices, entrepreneurship, and management skills for today's economy.",
      duration: "1 year - 2 years",
      level: "Certificate/Diploma",
      category: "Business",
      modules: ["Business Management", "Accounting", "Marketing", "Human Resources", "Entrepreneurship"],
      benefits: ["Leadership development", "Business networking", "Real-world projects", "Mentorship"],
      image: "/src/assets/course-business.jpg",
      tuition: "₦120,000 - ₦250,000"
    },
    {
      id: 3,
      title: "Arts and Crafts",
      description: "Traditional and contemporary arts, crafts, and creative design for cultural preservation and innovation.",
      duration: "3 months - 1 year",
      level: "Certificate",
      category: "Arts",
      modules: ["Traditional Arts", "Modern Design", "Textile Production", "Pottery", "Creative Writing"],
      benefits: ["Cultural preservation", "Creative expression", "Market access", "Community impact"],
      image: "/src/assets/course-crafts.jpg",
      tuition: "₦80,000 - ₦180,000"
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
                Academic Programs
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Discover world-class programs designed to empower students with skills for the modern economy
              </p>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program) => (
                <Card key={program.id} className="group hover:shadow-primary transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={program.image} 
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{program.category}</Badge>
                      <Badge variant="outline">{program.level}</Badge>
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {program.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {program.duration}
                      </div>
                      <div className="font-semibold text-primary">
                        {program.tuition}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Key Modules:</h4>
                      <div className="flex flex-wrap gap-1">
                        {program.modules.slice(0, 3).map((module, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {module}
                          </Badge>
                        ))}
                        {program.modules.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{program.modules.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-sm">Benefits:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {program.benefits.slice(0, 2).map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Award className="h-3 w-3 text-primary" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button variant="outline" className="flex-1">
                        Learn More
                      </Button>
                      <Button className="flex-1">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have transformed their careers through our programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2">
                <BookOpen className="h-5 w-5" />
                Browse All Programs
              </Button>
              <Button variant="outline" size="lg">
                Schedule Campus Visit
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;