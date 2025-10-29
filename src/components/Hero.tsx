import { Button } from "@/components/ui/button";
import { Apple, Download } from "lucide-react";
import heroImage from "@/assets/hero-rays.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Asstor the donkey standing beside the Columbia River with rays of light breaking through storm clouds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Smart <span className="text-primary">Asstor</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto font-medium">
            Carry the weight of knowledge with legendary precision
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            Build powerful subject-specific glossaries. Link terms automatically. 
            Upload in batches. Celebrate every milestone.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="text-lg px-8 py-6 gap-2 shadow-[var(--shadow-frontier)]">
              <Apple className="h-5 w-5" />
              Download on App Store
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 gap-2 border-2"
            >
              <Download className="h-5 w-5" />
              Learn More
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            iOS 15.0 or later • iPhone & iPad
          </p>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
