import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Link2, Upload, Sparkles } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Create Subjects & Terms",
    description: "Users can create Subjects and add Terms with Definitions to organize their knowledge."
  },
  {
    icon: Link2,
    title: "Autolinking",
    description: "The app has 'Autolinking' which allows linking in the Definition with similar Terms in that Subject."
  },
  {
    icon: Upload,
    title: "Batch Upload",
    description: "Users can batch upload Terms with a CSV or JSON file for quick content creation."
  },
  {
    icon: Sparkles,
    title: "Celebration Videos",
    description: "Celebrate your achievements with fun videos that make every milestone memorable."
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            
            return (
              <Card key={feature.title} className="border-2 shadow-lg hover:shadow-xl transition-all duration-500">
                <CardContent className="p-6 space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
