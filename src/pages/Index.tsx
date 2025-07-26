import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <FeaturedCourses />
      </main>
      <Footer />
    </div>
  );
};

export default Index;