import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Monitor, 
  Users, 
  Award, 
  Clock, 
  Briefcase, 
  BookOpen,
  Target,
  Heart
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Hands-On Learning",
      description: "Practical training with modern equipment and real-world projects to build your portfolio.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience in their respective fields.",
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Recognized Certificates",
      description: "Earn certificates that are recognized by employers and industry organizations.",
      color: "text-success"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose from full-time, part-time, and weekend classes to fit your lifestyle.",
      color: "text-info"
    },
    {
      icon: Briefcase,
      title: "Job Placement Support",
      description: "Career guidance and job placement assistance to help you start your professional journey.",
      color: "text-primary"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Well-structured courses covering theory, practical skills, and business development.",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Goal-Oriented Training",
      description: "Skills training focused on employment opportunities and entrepreneurship success.",
      color: "text-success"
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Join a supportive community of learners and alumni who help each other succeed.",
      color: "text-info"
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Empowering Your Success Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive skill acquisition programs designed to prepare you 
            for the future of work with practical training and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="text-center hover:shadow-elegant transition-all duration-300 group border-muted hover:border-primary/20"
            >
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-card flex items-center justify-center mb-4 group-hover:shadow-primary transition-all duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;