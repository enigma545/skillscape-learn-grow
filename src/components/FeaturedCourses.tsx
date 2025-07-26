import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ictImage from "@/assets/course-ict.jpg";
import craftsImage from "@/assets/course-crafts.jpg";
import businessImage from "@/assets/course-business.jpg";

const FeaturedCourses = () => {
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
      featured: true,
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
      featured: true,
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
      featured: true,
    },
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Courses
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Popular Skill Acquisition Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our most in-demand courses designed to equip you with practical skills 
            for employment and entrepreneurship opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
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
                  {course.featured && (
                    <Badge className="text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="outline" className="text-xs bg-background/80">
                    {course.level}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
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
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-0 gap-2">
                <Button asChild className="flex-1">
                  <Link to={`/courses/${course.id}`}>
                    View Details
                  </Link>
                </Button>
                <Button className="flex-1 group/btn">
                  Enroll Now
                  <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">
              View All Courses
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;