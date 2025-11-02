import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Features from "@/components/Features";
import Download from "@/components/Download";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const id = state?.scrollTo;
    if (id) {
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 0);
      navigate('.', { replace: true, state: null });
    }
  }, [location.state, navigate]);

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
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
