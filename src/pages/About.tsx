import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary-glow py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About DASAC Skills Hub
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Empowering the Future Through Cutting-Edge Technical & Vocational Skills Training
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="text-center">
                <Target className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground text-lg">
                  To bridge the skills gap in Africa by providing world-class technical and vocational education 
                  that empowers individuals to thrive in the digital economy and create sustainable livelihoods.
                </p>
              </div>
              <div className="text-center">
                <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-muted-foreground text-lg">
                  To be Africa's leading platform for skills acquisition, creating a generation of skilled 
                  professionals who drive innovation and economic growth across the continent.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
                <div className="text-muted-foreground">Students Trained</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Instructors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Courses Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We deliver the highest quality education and training programs to ensure our students excel.
                </p>
              </div>
              <div className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <p className="text-muted-foreground">
                  We foster a supportive learning community where everyone can grow and succeed together.
                </p>
              </div>
              <div className="text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technology and innovative teaching methods to stay ahead.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
              <div className="prose prose-lg mx-auto text-muted-foreground">
                <p>
                  DASAC Skills Hub was founded with a simple yet powerful vision: to democratize access to 
                  quality technical and vocational education across Africa. Born from the recognition that 
                  traditional education systems often fail to prepare students for the demands of the modern 
                  economy, we set out to create a platform that bridges this critical gap.
                </p>
                <p>
                  Our journey began with a small team of passionate educators and technologists who believed 
                  in the transformative power of practical skills training. Today, we've grown into a 
                  comprehensive learning platform that serves thousands of students across multiple countries, 
                  offering courses in ICT, business skills, and traditional crafts.
                </p>
                <p>
                  What sets us apart is our commitment to making education accessible, affordable, and relevant 
                  to the needs of the African job market. Every course is designed with industry input, 
                  ensuring our graduates are job-ready from day one.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;