import { Button } from "@/components/ui/button";
import { Apple } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">
            Smart <span className="text-primary">Asstor</span>
          </h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/#story" className="text-muted-foreground hover:text-foreground transition-colors">
            Story
          </a>
          <a href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="/#download" className="text-muted-foreground hover:text-foreground transition-colors">
            Download
          </a>
        </div>
        
        <Button size="sm" className="gap-2">
          <Apple className="h-4 w-4" />
          <span className="hidden sm:inline">App Store</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
