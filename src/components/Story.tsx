import settlementImage from "@/assets/settlement.jpg";
import edgeImage from "@/assets/edge.jpg";

const Story = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            A Legacy of <span className="text-primary">Perseverance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The story of Asstor, a humble donkey whose bloodline carried the future west
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-3xl font-bold text-primary">The Weight of History</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              In 1811, at the edge of the known world, Asstor stood ready. His great-grandfather 
              had carried Lewis and Clark's journals across the Bitterroots. His grandmother hauled 
              the first American flag west of the Rockies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Now it was his turn to carry the foundation of Fort Astoria—legal documents, trading 
              ledgers, and tools that would establish American sovereignty at the mouth of the 
              Columbia River.
            </p>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={settlementImage}
              alt="Asstor watching the construction of Fort Astoria settlement by the Columbia River"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={edgeImage}
              alt="Asstor carrying supplies with mountains and rivers in the backdrop"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary">Steady. Forward. Trust.</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Where larger horses stumbled and oxen got stuck, Asstor moved with precision. 
              He could see the path others missed—a firmer patch of ground, a fallen log 
              providing passage.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When a swollen creek blocked their way, he stepped into the torrent without 
              hesitation. The wisdom of generations flowed through his hooves. He emerged 
              on the far side, supplies dry and secure.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground">
              "This donkey just carried the foundation of an empire."
              <footer className="text-sm text-muted-foreground mt-2 not-italic">
                — William Price Hunt, 1811
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
