import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight, Search, Users, Award, Bell } from "lucide-react";

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "New ICT Lab Opens with State-of-the-Art Equipment",
      excerpt: "Lagos Institution unveils a cutting-edge ICT laboratory equipped with the latest technology to enhance student learning experience.",
      content: "The new ICT laboratory features 50 modern computers, high-speed internet connectivity, and specialized software for programming, design, and cybersecurity training.",
      category: "Infrastructure",
      publishDate: "2024-08-15",
      readTime: "3 min read",
      image: "/src/assets/course-ict.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Partnership Announcement: Skills Development Initiative",
      excerpt: "Lagos Institution partners with leading tech companies to provide internship opportunities for ICT students.",
      content: "This partnership will provide students with real-world experience and direct pathways to employment in the technology sector.",
      category: "Partnership",
      publishDate: "2024-08-10",
      readTime: "2 min read",
      image: "/src/assets/course-business.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Graduation Ceremony for Class of 2024",
      excerpt: "Celebrating the achievements of 500 graduates across all programs in a memorable ceremony.",
      content: "The graduation ceremony honored outstanding students and featured keynote speeches from industry leaders.",
      category: "Events",
      publishDate: "2024-08-05",
      readTime: "4 min read",
      image: "/src/assets/hero-image.jpg",
      featured: false
    }
  ];

  const announcements = [
    {
      id: 1,
      title: "2025 Admission Applications Now Open",
      date: "2024-08-18",
      type: "Admission",
      urgent: true
    },
    {
      id: 2,
      title: "Mid-Semester Break Schedule",
      date: "2024-08-16",
      type: "Academic",
      urgent: false
    },
    {
      id: 3,
      title: "Workshop: Digital Marketing Fundamentals",
      date: "2024-08-14",
      type: "Workshop",
      urgent: false
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Career Fair 2024",
      date: "2024-09-15",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus",
      description: "Connect with employers and explore career opportunities"
    },
    {
      id: 2,
      title: "Tech Innovation Summit",
      date: "2024-09-22",
      time: "9:00 AM - 5:00 PM",
      location: "ICT Building",
      description: "Annual technology conference featuring industry experts"
    },
    {
      id: 3,
      title: "Alumni Networking Night",
      date: "2024-10-05",
      time: "6:00 PM - 9:00 PM",
      location: "Conference Hall",
      description: "Network with successful alumni and current students"
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
                News & Events
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Stay updated with the latest news, announcements, and upcoming events at Lagos Institution
              </p>
              <div className="max-w-md mx-auto relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search news and events..." 
                  className="pl-10 bg-background text-foreground"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Featured News */}
                {newsArticles.filter(article => article.featured).map((article) => (
                  <Card key={article.id} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge>{article.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.publishDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
                        <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                        <Button>
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}

                {/* Regular News */}
                <div className="grid md:grid-cols-2 gap-6">
                  {newsArticles.filter(article => !article.featured).map((article) => (
                    <Card key={article.id} className="group hover:shadow-primary transition-all duration-300">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{article.category}</Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {article.readTime}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                        <CardDescription className="line-clamp-3">
                          {article.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            {new Date(article.publishDate).toLocaleDateString()}
                          </div>
                          <Button variant="ghost" size="sm">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Announcements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="h-5 w-5" />
                      Announcements
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {announcements.map((announcement) => (
                      <div key={announcement.id} className="border-l-4 border-primary pl-4">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={announcement.urgent ? "destructive" : "secondary"} className="text-xs">
                            {announcement.type}
                          </Badge>
                          {announcement.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <h4 className="font-semibold text-sm">{announcement.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {new Date(announcement.date).toLocaleDateString()}
                        </p>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="space-y-2">
                        <h4 className="font-semibold text-sm">{event.title}</h4>
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(event.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {event.location}
                          </div>
                        </div>
                        <p className="text-xs">{event.description}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          Learn More
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      Academic Calendar
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Student Portal
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Library Resources
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;