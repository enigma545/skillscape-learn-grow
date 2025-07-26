import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, Clock, Award, TrendingUp, Play, Download, 
  Calendar, Bell, Settings, User, LogOut, ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import ictImage from "@/assets/course-ict.jpg";
import craftsImage from "@/assets/course-crafts.jpg";
import businessImage from "@/assets/course-business.jpg";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data
  const user = {
    name: "John Adebayo",
    email: "john.adebayo@email.com",
    joinDate: "January 2024",
    totalCourses: 3,
    completedCourses: 1,
    totalHours: 45,
    certificates: 1,
    currentStreak: 7,
  };

  // Mock enrolled courses
  const enrolledCourses = [
    {
      id: 1,
      title: "ICT & Digital Skills",
      image: ictImage,
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: "JavaScript Fundamentals",
      timeSpent: 18,
      status: "in-progress",
      certificate: false,
    },
    {
      id: 2,
      title: "Traditional Crafts & Beadwork",
      image: craftsImage,
      progress: 100,
      totalLessons: 16,
      completedLessons: 16,
      nextLesson: null,
      timeSpent: 12,
      status: "completed",
      certificate: true,
    },
    {
      id: 3,
      title: "Business & Entrepreneurship",
      image: businessImage,
      progress: 30,
      totalLessons: 20,
      completedLessons: 6,
      nextLesson: "Financial Planning Basics",
      timeSpent: 8,
      status: "in-progress",
      certificate: false,
    },
  ];

  // Mock recent activity
  const recentActivity = [
    {
      type: "lesson_completed",
      title: "Completed CSS Grid Layout",
      course: "ICT & Digital Skills",
      time: "2 hours ago",
    },
    {
      type: "certificate_earned",
      title: "Earned Certificate in Traditional Crafts",
      course: "Traditional Crafts & Beadwork",
      time: "1 day ago",
    },
    {
      type: "course_started",
      title: "Started Business & Entrepreneurship",
      course: "Business & Entrepreneurship",
      time: "3 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8">
        <div className="container">
          {/* Dashboard Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.name}!</h1>
            <p className="text-muted-foreground">Continue your learning journey</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="font-semibold">{user.name}</h3>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                    <p className="text-xs text-muted-foreground">Member since {user.joinDate}</p>
                  </div>

                  <div className="space-y-2">
                    <Button
                      variant={activeTab === "overview" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("overview")}
                    >
                      <TrendingUp className="h-4 w-4 mr-2" />
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
                      variant={activeTab === "certificates" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("certificates")}
                    >
                      <Award className="h-4 w-4 mr-2" />
                      Certificates
                    </Button>
                    <Button
                      variant={activeTab === "profile" ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveTab("profile")}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-destructive hover:text-destructive"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
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
                        <div className="text-2xl font-bold">{user.totalCourses}</div>
                        <p className="text-sm text-muted-foreground">Enrolled Courses</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <div className="text-2xl font-bold">{user.certificates}</div>
                        <p className="text-sm text-muted-foreground">Certificates</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold">{user.totalHours}h</div>
                        <p className="text-sm text-muted-foreground">Learning Time</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
                        <div className="text-2xl font-bold">{user.currentStreak}</div>
                        <p className="text-sm text-muted-foreground">Day Streak</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Continue Learning */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Continue Learning</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        {enrolledCourses
                          .filter(course => course.status === "in-progress")
                          .map((course) => (
                            <div key={course.id} className="flex items-center gap-4 p-4 border rounded-lg">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-16 h-16 rounded object-cover"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold">{course.title}</h4>
                                <p className="text-sm text-muted-foreground mb-2">
                                  Next: {course.nextLesson}
                                </p>
                                <div className="flex items-center gap-2">
                                  <Progress value={course.progress} className="flex-1" />
                                  <span className="text-sm text-muted-foreground">
                                    {course.progress}%
                                  </span>
                                </div>
                              </div>
                              <Button asChild>
                                <Link to={`/courses/${course.id}/learn`}>
                                  <Play className="h-4 w-4 mr-2" />
                                  Continue
                                </Link>
                              </Button>
                            </div>
                          ))}
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
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                              {activity.type === "lesson_completed" && <BookOpen className="h-4 w-4 text-primary" />}
                              {activity.type === "certificate_earned" && <Award className="h-4 w-4 text-secondary" />}
                              {activity.type === "course_started" && <Play className="h-4 w-4 text-primary" />}
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{activity.title}</p>
                              <p className="text-sm text-muted-foreground">{activity.course}</p>
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
                  <h2 className="text-2xl font-bold">My Courses</h2>
                  <div className="grid gap-6">
                    {enrolledCourses.map((course) => (
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
                                  <Badge variant={course.status === "completed" ? "default" : "secondary"}>
                                    {course.status === "completed" ? "Completed" : "In Progress"}
                                  </Badge>
                                </div>
                                {course.certificate && (
                                  <Badge variant="outline" className="gap-1">
                                    <Award className="h-3 w-3" />
                                    Certified
                                  </Badge>
                                )}
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Progress: </span>
                                  <span className="font-medium">{course.completedLessons}/{course.totalLessons} lessons</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Time spent: </span>
                                  <span className="font-medium">{course.timeSpent} hours</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-2 mb-4">
                                <Progress value={course.progress} className="flex-1" />
                                <span className="text-sm text-muted-foreground">{course.progress}%</span>
                              </div>
                              
                              <div className="flex gap-2">
                                <Button asChild>
                                  <Link to={`/courses/${course.id}/learn`}>
                                    {course.status === "completed" ? "Review" : "Continue"}
                                    <ChevronRight className="h-4 w-4 ml-2" />
                                  </Link>
                                </Button>
                                {course.certificate && (
                                  <Button variant="outline">
                                    <Download className="h-4 w-4 mr-2" />
                                    Download Certificate
                                  </Button>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "certificates" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">My Certificates</h2>
                  <div className="grid gap-6">
                    {enrolledCourses
                      .filter(course => course.certificate)
                      .map((course) => (
                        <Card key={course.id}>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center">
                                <Award className="h-8 w-8 text-secondary" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-xl font-semibold">{course.title}</h3>
                                <p className="text-muted-foreground">Certificate of Completion</p>
                                <p className="text-sm text-muted-foreground">Earned on completion of all course modules</p>
                              </div>
                              <Button>
                                <Download className="h-4 w-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              )}

              {activeTab === "profile" && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Profile Settings</h2>
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium">Full Name</label>
                            <input
                              type="text"
                              value={user.name}
                              className="w-full p-2 border rounded mt-1"
                              readOnly
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium">Email</label>
                            <input
                              type="email"
                              value={user.email}
                              className="w-full p-2 border rounded mt-1"
                              readOnly
                            />
                          </div>
                        </div>
                        <Button className="w-fit">Update Profile</Button>
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

export default Dashboard;