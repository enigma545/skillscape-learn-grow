import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Users, Award, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const stats = [
    { icon: Users, label: "Active Students", value: "5,000+" },
    { icon: BookOpen, label: "Courses", value: "50+" },
    { icon: Award, label: "Certifications", value: "2,500+" },
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students learning technical skills"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <Badge variant="outline" className="w-fit">
              Empowering the Future of Work
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Master{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Technical Skills
              </span>{" "}
              for Tomorrow's Jobs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Join Nigeria's premier skill acquisition center. Learn cutting-edge technical 
              and vocational skills that lead to employment and entrepreneurship opportunities.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Start Learning Today
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side can be used for additional content or kept minimal */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-xl" />
            <div className="relative bg-card p-8 rounded-2xl shadow-elegant">
              <h3 className="text-xl font-semibold mb-4">Quick Start</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    1
                  </div>
                  <span className="text-sm">Choose your skill track</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    2
                  </div>
                  <span className="text-sm">Enroll in courses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    3
                  </div>
                  <span className="text-sm">Get certified</span>
                </div>
              </div>
              <Button variant="gradient" className="w-full mt-6">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;