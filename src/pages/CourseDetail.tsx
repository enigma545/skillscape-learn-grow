import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, Users, Star, Play, Download, CheckCircle, 
  Calendar, Globe, Award, ArrowLeft, Heart, Share2
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ictImage from "@/assets/course-ict.jpg";
import craftsImage from "@/assets/course-crafts.jpg";
import businessImage from "@/assets/course-business.jpg";

const CourseDetail = () => {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Mock course data - in real app this would come from API
  const courseData = {
    "1": {
      title: "ICT & Digital Skills",
      description: "Master computer literacy, web development, and digital marketing skills for the modern workplace. This comprehensive program covers everything from basic computer operations to advanced web development frameworks.",
      image: ictImage,
      duration: "12 weeks",
      students: "1,200+",
      rating: 4.8,
      price: "₦50,000",
      originalPrice: "₦65,000",
      category: "Technology",
      level: "Beginner",
      instructor: {
        name: "Dr. Sarah Johnson",
        title: "Senior Software Engineer",
        rating: 4.9,
        students: "5,000+",
        courses: 8,
      },
      modules: 24,
      totalHours: 48,
      certificate: true,
      language: "English",
      lastUpdated: "2024-01-15",
      enrollmentCount: 1247,
    }
  };

  const course = courseData[id as keyof typeof courseData] || courseData["1"];

  const curriculum = [
    {
      title: "Introduction to Computing",
      lessons: [
        "Computer Basics and Hardware",
        "Operating Systems Overview",
        "File Management",
        "Internet and Email Basics"
      ],
      duration: "4 hours"
    },
    {
      title: "Web Development Fundamentals",
      lessons: [
        "HTML Structure and Semantics",
        "CSS Styling and Layout",
        "JavaScript Basics",
        "Responsive Design Principles"
      ],
      duration: "8 hours"
    },
    {
      title: "Digital Marketing Essentials",
      lessons: [
        "Social Media Marketing",
        "Content Creation Strategies",
        "Email Marketing",
        "Analytics and Reporting"
      ],
      duration: "6 hours"
    },
    {
      title: "Advanced Web Technologies",
      lessons: [
        "Modern JavaScript Frameworks",
        "Database Integration",
        "API Development",
        "Deployment and Hosting"
      ],
      duration: "12 hours"
    }
  ];

  const features = [
    "Lifetime access to course materials",
    "Certificate of completion",
    "24/7 community support",
    "Mobile and desktop access",
    "Downloadable resources",
    "Regular content updates"
  ];

  const reviews = [
    {
      name: "Adebayo Ogundimu",
      rating: 5,
      comment: "Excellent course! The instructor explains everything clearly and the projects are very practical.",
      date: "2 weeks ago",
      helpful: 12
    },
    {
      name: "Fatima Al-Hassan",
      rating: 4,
      comment: "Great content and well-structured. Helped me land my first tech job!",
      date: "1 month ago",
      helpful: 8
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link to="/courses" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <ArrowLeft className="h-4 w-4" />
              Back to Courses
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Course Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="secondary">{course.category}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current text-secondary" />
                    <span className="text-sm font-medium">{course.rating}</span>
                    <span className="text-sm text-muted-foreground">({course.students} students)</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.totalHours} hours</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{course.enrollmentCount} enrolled</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Updated {course.lastUpdated}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <span>{course.language}</span>
                  </div>
                </div>
              </div>

              {/* Course Video/Image */}
              <div className="relative mb-8">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center rounded-lg">
                  <Button size="lg" className="gap-2">
                    <Play className="h-5 w-5" />
                    Preview Course
                  </Button>
                </div>
              </div>

              {/* Course Content Tabs */}
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>What You'll Learn</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="curriculum" className="mt-6">
                  <div className="space-y-4">
                    {curriculum.map((module, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{module.title}</CardTitle>
                            <span className="text-sm text-muted-foreground">{module.duration}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <li key={lessonIndex} className="flex items-center gap-2">
                                <Play className="h-4 w-4 text-muted-foreground" />
                                <span>{lesson}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">
                            {course.instructor.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                          <p className="text-muted-foreground mb-4">{course.instructor.title}</p>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <div className="flex items-center gap-1 mb-1">
                                <Star className="h-4 w-4 fill-current text-secondary" />
                                <span className="font-medium">{course.instructor.rating}</span>
                              </div>
                              <span className="text-muted-foreground">Rating</span>
                            </div>
                            <div>
                              <div className="font-medium mb-1">{course.instructor.students}</div>
                              <span className="text-muted-foreground">Students</span>
                            </div>
                            <div>
                              <div className="font-medium mb-1">{course.instructor.courses}</div>
                              <span className="text-muted-foreground">Courses</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-3xl font-bold">{course.rating}</div>
                      <div>
                        <div className="flex items-center gap-1 mb-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-5 w-5 ${
                                star <= Math.floor(course.rating)
                                  ? "fill-current text-secondary"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">Based on {course.students} reviews</p>
                      </div>
                    </div>
                    
                    {reviews.map((review, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-bold text-primary">
                                {review.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="font-medium">{review.name}</span>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                              <div className="flex items-center gap-1 mb-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`h-4 w-4 ${
                                      star <= review.rating
                                        ? "fill-current text-secondary"
                                        : "text-muted-foreground"
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-muted-foreground mb-2">{review.comment}</p>
                              <span className="text-sm text-muted-foreground">
                                {review.helpful} people found this helpful
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-primary">Free</span>
                    </div>
                    <p className="text-sm text-muted-foreground">No payment required</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <Button size="lg" className="w-full">
                      Enroll Now
                    </Button>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setIsWishlisted(!isWishlisted)}
                      >
                        <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-current' : ''}`} />
                        Wishlist
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Total Hours</span>
                      <span>{course.totalHours} hours</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Modules</span>
                      <span>{course.modules}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Certificate</span>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-primary" />
                        <span>Yes</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Access</span>
                      <span>Lifetime</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CourseDetail;