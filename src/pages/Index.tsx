import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="story">
        <Story />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="download">
        <Download />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
