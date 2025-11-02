import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="story">
        <Story />
      </div>
      <div id="download">
        <Download />
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
