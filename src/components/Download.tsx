import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";
import mountainPeaksImage from "@/assets/mountain-peaks.jpg";

const Download = () => {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={mountainPeaksImage}
          alt="Asstor with pioneer and camping expedition in mountain valley"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto max-w-4xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Begin Your Journey
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Join the lineage of great organizers. Build glossaries that carry the weight 
          of knowledge with legendary reliability.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Button 
            size="lg" 
            className="text-lg px-10 py-7 gap-3 shadow-[var(--shadow-frontier)] hover:scale-105 transition-transform"
          >
            <Apple className="h-6 w-6" />
            Download on the App Store
          </Button>
        </div>

        <div className="pt-12 space-y-4 text-muted-foreground">
          <p className="text-lg font-medium">What adventurers are saying:</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center text-sm">
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span>"Like having a guide on every trail"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span>"Never lose track of terms again"</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-lg">★★★★★</span>
              <span>"The celebrations are pure joy"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
