import { Card } from "@/components/ui/card";
import { BookOpen, Link2, Upload, Sparkles } from "lucide-react";
import mountainsImage from "@/assets/mountains.jpg";
import mudTrailImage from "@/assets/mud-trail.jpg";
import sunnyCampImage from "@/assets/sunny-camp.jpg";
import wagonTrailImage from "@/assets/wagon-trail.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Build Your Territory",
    description: "Create subjects and add terms with definitions. Organize knowledge like building a frontier settlement—brick by brick, term by term.",
    image: mountainsImage,
    imageAlt: "Asstor with a prospector examining documents in mountainous terrain"
  },
  {
    icon: Link2,
    title: "Autolinking Trails",
    description: "Smart connections find related terms automatically. Like discovering hidden paths between camps, your glossary reveals its own network.",
    image: mudTrailImage,
    imageAlt: "Asstor navigating a muddy forest trail with oxen in a stream"
  },
  {
    icon: Upload,
    title: "Batch Expeditions",
    description: "Upload entire glossaries via CSV or JSON. Load up your pack train and transport hundreds of terms in a single journey.",
    image: sunnyCampImage,
    imageAlt: "Asstor and pioneer at a mountain camp with tents and supplies"
  },
  {
    icon: Sparkles,
    title: "Celebrate Victories",
    description: "Every add, edit, or login triggers a celebration. Because even small achievements deserve recognition on the trail.",
    image: wagonTrailImage,
    imageAlt: "Asstor with pioneer at sunset near wagon trail with mountains"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Features Worth <span className="text-primary">Carrying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to make your glossary work as reliable as Asstor himself
          </p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={feature.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  isEven ? "" : "md:grid-flow-dense"
                }`}
              >
                <div className={`space-y-6 ${isEven ? "" : "md:col-start-2"}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-3xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                
                <div className={`${isEven ? "" : "md:col-start-1 md:row-start-1"}`}>
                  <Card className="overflow-hidden border-2 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-frontier)] transition-all duration-500">
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full h-auto"
                    />
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
