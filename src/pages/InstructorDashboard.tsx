import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, Users, TrendingUp, DollarSign, Play, Edit, 
  Plus, Eye, Star, Clock, Calendar, BarChart3, 
  MessageSquare, Award, Settings, FileText, Video
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ictImage from "@/assets/course-ict.jpg";
import craftsImage from "@/assets/course-crafts.jpg";
import businessImage from "@/assets/course-business.jpg";

const InstructorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock instructor data
  const instructor = {
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@skillademy.com",
    title: "Senior Software Engineer & Instructor",
    joinDate: "March 2023",
    totalCourses: 3,
    totalStudents: 2450,
    totalRevenue: 125000,
    avgRating: 4.8,
    totalReviews: 347,
  };

  // Mock courses data
  const instructorCourses = [
    {
      id: 1,
      title: "ICT & Digital Skills",
      image: ictImage,
      students: 1247,
      rating: 4.8,
      reviews: 156,
      revenue: 62350,
      status: "published",
      completion: 78,
      lastUpdated: "2024-01-15",
      totalLessons: 24,
      publishedLessons: 24,
    },
    {
      id: 2,
      title: "Advanced Web Development",
      image: businessImage,
      students: 856,
      rating: 4.9,
      reviews: 98,
      revenue: 42800,
      status: "published",
      completion: 85,
      lastUpdated: "2024-01-10",
      totalLessons: 18,
      publishedLessons: 18,
    },
    {
      id: 3,
      title: "Python for Beginners",
      image: craftsImage,
      students: 347,
      rating: 4.7,
      reviews: 45,
      revenue: 17350,
      status: "draft",
      completion: 60,
      lastUpdated: "2024-01-20",
      totalLessons: 20,
      publishedLessons: 12,
    },
  ];

  // Mock analytics data
  const monthlyStats = [
    { month: "Jan", students: 45, revenue: 2250 },
    { month: "Feb", students: 78, revenue: 3900 },
    { month: "Mar", students: 92, revenue: 4600 },
    { month: "Apr", students: 156, revenue: 7800 },
    { month: "May", students: 203, revenue: 10150 },
    { month: "Jun", students: 189, revenue: 9450 },
  ];

  // Mock recent activities
  const recentActivities = [
    {
      type: "enrollment",
      title: "New student enrolled in ICT & Digital Skills",
      time: "2 hours ago",
      student: "James Okoro",
    },
    {
      type: "review",
      title: "New 5-star review on Advanced Web Development",
      time: "4 hours ago",
      student: "Amina Hassan",
    },
    {
      type: "completion",
      title: "Student completed Python for Beginners",
      time: "1 day ago",
      student: "David Adebayo",
    },
    {
      type: "question",
      title: "New question in ICT course discussion",
      time: "2 days ago",
      student: "Grace Okafor",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Instructor Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, {instructor.name}</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {instructor.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-semibold">{instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{instructor.title}</p>
                    <p className="text-xs text-muted-foreground">Instructor since {instructor.joinDate}</p>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant={activeTab === "overview" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("overview")}
                    >
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Overview
                    </Button>
                    <Button
                      variant={activeTab === "courses" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("courses")}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      My Courses
                    </Button>
                    <Button
                      variant={activeTab === "analytics" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("analytics")}
                    >
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Analytics
                    </Button>
                    <Button
                      variant={activeTab === "students" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("students")}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Students
                    </Button>
                    <Button
                      variant={activeTab === "reviews" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("reviews")}
                    >
                      <Star className="h-4 w-4 mr-2" />
                      Reviews
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold">{instructor.totalCourses}</div>
                        <p className="text-sm text-muted-foreground">Total Courses</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Users className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <div className="text-2xl font-bold">{instructor.totalStudents.toLocaleString()}</div>
                        <p className="text-sm text-muted-foreground">Total Students</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold">₦{instructor.totalRevenue.toLocaleString()}</div>
                        <p className="text-sm text-muted-foreground">Total Revenue</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Star className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <div className="text-2xl font-bold">{instructor.avgRating}</div>
                        <p className="text-sm text-muted-foreground">Avg Rating</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Quick Actions */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button className="h-20 flex-col gap-2">
                          <Plus className="h-6 w-6" />
                          Create Course
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <Video className="h-6 w-6" />
                          Upload Video
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <FileText className="h-6 w-6" />
                          Create Quiz
                        </Button>
                        <Button variant="outline" className="h-20 flex-col gap-2">
                          <BarChart3 className="h-6 w-6" />
                          View Analytics
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Recent Activity */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                              {activity.type === "enrollment" && <Users className="h-4 w-4 text-primary" />}
                              {activity.type === "review" && <Star className="h-4 w-4 text-secondary" />}
                              {activity.type === "completion" && <Award className="h-4 w-4 text-primary" />}
                              {activity.type === "question" && <MessageSquare className="h-4 w-4 text-primary" />}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{activity.title}</p>
                              <p className="text-sm text-muted-foreground">by {activity.student}</p>
                              <p className="text-xs text-muted-foreground">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "courses" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">My Courses</h2>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Create New Course
                    </Button>
                  </div>
                  
                  <div className="grid gap-6">
                    {instructorCourses.map((course) => (
                      <Card key={course.id}>
                        <CardContent className="p-6">
                          <div className="flex gap-4">
                            <img
                              src={course.image}
                              alt={course.title}
                              className="w-24 h-24 rounded object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h3 className="text-xl font-semibold">{course.title}</h3>
                                  <Badge variant={course.status === "published" ? "default" : "secondary"}>
                                    {course.status}
                                  </Badge>
                                </div>
                                <div className="flex gap-2">
                                  <Button size="sm" variant="outline">
                                    <Edit className="h-4 w-4 mr-2" />
                                    Edit
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <Eye className="h-4 w-4 mr-2" />
                                    Preview
                                  </Button>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-4 gap-4 mb-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Students: </span>
                                  <span className="font-medium">{course.students}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Rating: </span>
                                  <span className="font-medium">{course.rating} ⭐</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Revenue: </span>
                                  <span className="font-medium">₦{course.revenue.toLocaleString()}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Updated: </span>
                                  <span className="font-medium">{course.lastUpdated}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm text-muted-foreground">
                                  Lessons: {course.publishedLessons}/{course.totalLessons}
                                </span>
                                <Progress value={course.completion} className="flex-1" />
                                <span className="text-sm text-muted-foreground">{course.completion}%</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "analytics" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Analytics</h2>
                  
                  <div className="grid gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Monthly Performance</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {monthlyStats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                              <div>
                                <h4 className="font-semibold">{stat.month} 2024</h4>
                                <p className="text-sm text-muted-foreground">{stat.students} new students</p>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold">₦{stat.revenue.toLocaleString()}</p>
                                <p className="text-sm text-muted-foreground">Revenue</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {activeTab === "students" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Students</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>Student Engagement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">Total Active Students</h4>
                            <p className="text-sm text-muted-foreground">Currently enrolled across all courses</p>
                          </div>
                          <div className="text-2xl font-bold">{instructor.totalStudents}</div>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">Course Completion Rate</h4>
                            <p className="text-sm text-muted-foreground">Average across all courses</p>
                          </div>
                          <div className="text-2xl font-bold">76%</div>
                        </div>
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div>
                            <h4 className="font-semibold">Student Satisfaction</h4>
                            <p className="text-sm text-muted-foreground">Based on course reviews</p>
                          </div>
                          <div className="text-2xl font-bold">{instructor.avgRating}/5</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Reviews & Feedback</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Reviews</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            student: "Adebayo Ogundimu",
                            course: "ICT & Digital Skills",
                            rating: 5,
                            comment: "Excellent course! The instructor explains everything clearly and the projects are very practical.",
                            date: "2 weeks ago"
                          },
                          {
                            student: "Fatima Al-Hassan",
                            course: "Advanced Web Development",
                            rating: 5,
                            comment: "Great content and well-structured. Helped me land my first tech job!",
                            date: "1 month ago"
                          },
                          {
                            student: "James Okoro",
                            course: "ICT & Digital Skills",
                            rating: 4,
                            comment: "Very informative course with practical examples. Would recommend!",
                            date: "1 month ago"
                          }
                        ].map((review, index) => (
                          <div key={index} className="p-4 border rounded-lg">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-semibold">{review.student}</h4>
                                <p className="text-sm text-muted-foreground">{review.course}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-current text-secondary" />
                                ))}
                                <span className="text-sm text-muted-foreground ml-2">{review.date}</span>
                              </div>
                            </div>
                            <p className="text-sm">{review.comment}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default InstructorDashboard;