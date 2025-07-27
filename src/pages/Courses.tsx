import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Star, ArrowRight, Search, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ictImage from "@/assets/course-ict.jpg";
import craftsImage from "@/assets/course-crafts.jpg";
import businessImage from "@/assets/course-business.jpg";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");

  const courses = [
    {
      id: 1,
      title: "ICT & Digital Skills",
      description: "Master computer literacy, web development, and digital marketing skills for the modern workplace.",
      image: ictImage,
      duration: "12 weeks",
      students: "1,200+",
      rating: 4.8,
      price: "₦50,000",
      category: "Technology",
      level: "Beginner",
      instructor: "Dr. Sarah Johnson",
      modules: 24,
    },
    {
      id: 2,
      title: "Traditional Crafts & Beadwork",
      description: "Learn traditional Nigerian crafts, beadwork, knitting, and textile production for entrepreneurship.",
      image: craftsImage,
      duration: "8 weeks",
      students: "800+",
      rating: 4.9,
      price: "₦35,000",
      category: "Arts & Crafts",
      level: "Beginner",
      instructor: "Mrs. Adunni Okafor",
      modules: 16,
    },
    {
      id: 3,
      title: "Business & Entrepreneurship",
      description: "Develop business skills, learn financial management, and start your own successful enterprise.",
      image: businessImage,
      duration: "10 weeks",
      students: "950+",
      rating: 4.7,
      price: "₦45,000",
      category: "Business",
      level: "Intermediate",
      instructor: "Prof. Michael Adebayo",
      modules: 20,
    },
    {
      id: 4,
      title: "Advanced Web Development",
      description: "Build modern web applications with React, Node.js, and cloud deployment strategies.",
      image: ictImage,
      duration: "16 weeks",
      students: "650+",
      rating: 4.8,
      price: "₦75,000",
      category: "Technology",
      level: "Advanced",
      instructor: "Eng. Kemi Taiwo",
      modules: 32,
    },
    {
      id: 5,
      title: "Fashion Design & Tailoring",
      description: "Master garment construction, pattern making, and fashion business fundamentals.",
      image: craftsImage,
      duration: "14 weeks",
      students: "720+",
      rating: 4.6,
      price: "₦60,000",
      category: "Arts & Crafts",
      level: "Intermediate",
      instructor: "Designer Folake Adesanya",
      modules: 28,
    },
    {
      id: 6,
      title: "Digital Marketing Mastery",
      description: "Learn social media marketing, SEO, content creation, and online advertising strategies.",
      image: businessImage,
      duration: "8 weeks",
      students: "1,100+",
      rating: 4.7,
      price: "₦40,000",
      category: "Business",
      level: "Beginner",
      instructor: "Mr. Tunde Akinola",
      modules: 16,
    },
  ];

  const categories = ["all", "Technology", "Arts & Crafts", "Business"];
  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-20">
        <div className="container">
          {/* Header Section */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              All Courses
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our Skill Acquisition Programs
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover comprehensive training programs designed to equip you with in-demand skills 
              for career advancement and entrepreneurship success.
            </p>
          </div>

          {/* Filters Section */}
          <div className="bg-muted/30 rounded-lg p-6 mb-12">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Filter Courses</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="relative min-w-[300px]">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                  <SelectTrigger className="w-full sm:w-[180px]">
                    <SelectValue placeholder="Level" />
                  </SelectTrigger>
                  <SelectContent>
                    {levels.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level === "all" ? "All Levels" : level}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results Info */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-primary transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {course.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="text-xs bg-background/80">
                      {course.level}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-primary">Free</span>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-secondary" />
                      <span className="text-sm font-medium">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {course.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    By {course.instructor}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {course.modules} modules
                  </div>
                </CardContent>

                <CardFooter className="pt-0 gap-2">
                  <Button asChild className="flex-1">
                    <Link to={`/courses/${course.id}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Enroll Now
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No courses found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search criteria or browse all courses
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setSelectedLevel("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;