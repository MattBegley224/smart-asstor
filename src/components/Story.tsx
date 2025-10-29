import mountainsImage from "@/assets/mountains.jpg";
import mountainPeaksImage from "@/assets/mountain-peaks.jpg";
import wagonTrailImage from "@/assets/wagon-trail.jpg";
import sunnyCampImage from "@/assets/sunny-camp.jpg";
import mudTrailImage from "@/assets/mud-trail.jpg";
import edgeImage from "@/assets/edge.jpg";
import heroRaysImage from "@/assets/hero-rays.jpg";
import settlementImage from "@/assets/settlement.jpg";
import parchmentBg from "@/assets/parchment.jpg";

const Story = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 opacity-5">
        <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            A Legacy of <span className="text-primary">Perseverance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The complete story of Asstor's journey to Fort Astoria, 1811
          </p>
        </div>

        {/* Section 1: The Bloodline */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1 relative p-8 rounded-xl">
            <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
              <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary">The Bloodline</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The morning mist rolled thick off the Columbia River as Asstor stood at the edge of Fort Clatsop, 
              his gray coat dampened by the perpetual drizzle that defined this wild corner of the world. He was 
              smaller than the other donkeys in the Pacific Fur Company's stable, but his bloodline ran deeper 
              than the river itself.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "His great-grandfather carried Lewis and Clark's journals across the Bitterroots," Old Thomas 
              explained to William Price Hunt. "His grandmother hauled the first American flag that flew west 
              of the Rockies. The bloodline don't lie, sir."
            </p>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={mountainsImage}
              alt="Asstor with a prospector examining documents in mountainous terrain"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section 2: The Call */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={mountainPeaksImage}
              alt="Asstor with pioneer and camping expedition in mountain valley"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6 relative p-8 rounded-xl">
            <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
              <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary">The Call to Service</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "You're sure about this one?" Hunt asked, squinting at the modest donkey before him. 
              The overland expedition to establish Fort Astoria had been brutal—months of treacherous 
              mountain passes, hostile encounters, and dwindling supplies.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Asstor's ears perked up at the mention of his ancestors. He'd heard the stories since he was 
              a colt—how his great-great-grandfather, Asterion, had been chosen from a thousand donkeys in 
              St. Louis for his steady temperament and iron will.
            </p>
            </div>
          </div>
        </div>

        {/* Section 3: Loading Up */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1 relative p-8 rounded-xl">
            <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
              <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary">Loading the Future</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "We need every able body," Hunt finally said. "Load him up." They packed Asstor with the 
              essentials: beaver traps, iron tools, seeds for the first gardens, and most precious of 
              all—the ledgers and legal documents that would establish American sovereignty at the mouth 
              of the Columbia.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The weight settled on his back like destiny itself. The morning light broke through the 
              clouds as the expedition prepared to depart, casting long shadows across the meadow where 
              wagons stood ready.
            </p>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={wagonTrailImage}
              alt="Asstor with pioneer at sunset near wagon trail with mountains in the distance"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section 4: The Journey Begins */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={sunnyCampImage}
              alt="Asstor and pioneer at a mountain camp with tents and campfire"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6 relative p-8 rounded-xl">
            <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
              <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary">The Trail West</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The final journey from Fort Clatsop to the site of Fort Astoria was only a few miles, but 
              the terrain was unforgiving—thick forests, muddy ravines, and trails that disappeared into 
              coastal marsh. Larger horses had stumbled and refused. Oxen had gotten stuck in the bottomless mud.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each night, the expedition made camp. Asstor stood watch at the edge, listening to the men 
              tell stories of the west they were building. He thought of Asterion and all the donkeys in 
              between—each carrying their portion of history.
            </p>
            </div>
          </div>
        </div>

        {/* Section 5: The Treacherous Path */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1 relative p-8 rounded-xl">
            <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
              <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary">Through Impossible Terrain</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The forest grew dense, the trail turned to mud. Rain had been falling for days, turning the 
              path into a morass that swallowed hooves and wheels alike. Oxen bellowed in frustration, 
              stuck in the muck. Horses refused to go further.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              But Asstor moved with the careful precision of his ancestors. Where others saw obstacles, 
              he saw the path—a slightly firmer patch of ground here, a fallen log that provided bridge 
              there. He could feel the wisdom of generations flowing through his hooves, each step a 
              tribute to the donkeys who came before.
            </p>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={mudTrailImage}
              alt="Asstor navigating a muddy forest trail with other animals struggling in the background"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section 6: The Crossing */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={edgeImage}
              alt="Asstor carrying supplies confidently on a mountain ridge overlooking a valley with a winding river"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6 relative p-8 rounded-xl">
            <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
              <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary">Steady. Forward. Trust.</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When they reached a swollen creek that blocked their path, the men hesitated. The current 
              was swift, the water black and cold. Asstor didn't wait for orders. He stepped into the 
              torrent, feeling the icy water rise to his chest.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              His ancestors whispered in his blood: <em>Steady. Forward. Trust your footing.</em> The 
              current pulled and pushed, but he leaned into it, found purchase on the rocky bottom, and 
              emerged on the far side, supplies dry and secure. The men cheered and followed.
            </p>
            </div>
          </div>
        </div>

        {/* Section 7: The Promise */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 order-2 md:order-1 relative p-8 rounded-xl">
            <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
              <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary">Where Rivers Meet</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By afternoon, they crested the final rise. Below them, at the river's mouth where the mighty 
              Columbia met the Pacific, lay a cleared space—the future site of Fort Astoria. Light broke 
              through the storm clouds in great rays, illuminating the spot where America's western dreams 
              would take root.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Asstor felt something stir in his chest as he gazed at the place. This was why his 
              great-grandfather had crossed the Bitterroots. This was why his grandmother had carried the 
              flag west. Every step of his journey had led to this moment.
            </p>
            </div>
          </div>
          <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={heroRaysImage}
              alt="Asstor standing beside the Columbia River with dramatic rays of sunlight breaking through storm clouds"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Section 8: The Foundation */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-frontier)]">
            <img
              src={settlementImage}
              alt="Asstor watching the construction of Fort Astoria settlement by the Columbia River"
              className="w-full h-auto"
            />
          </div>
          <div className="space-y-6 relative p-8 rounded-xl">
            <div className="absolute inset-0 opacity-10 rounded-xl overflow-hidden">
              <img src={parchmentBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-primary">The Foundation of an Empire</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "First load through," Hunt declared, lifting a ledger from Asstor's pack. "This donkey just 
              carried the foundation of an empire." Old Thomas stroked Asstor's muzzle. "Just like his kin 
              before him."
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              That night, as the first fires were lit at the new settlement, Asstor stood watch at the 
              edge of the camp. The Pacific crashed against the shore in the distance, and the Columbia 
              flowed eternal beside him. Tomorrow, there would be more supplies to haul, more trails to 
              break, more impossible tasks.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-foreground">
              "Fort Astoria would stand for centuries, but few would remember that it was built on the backs 
              of humble creatures who never refused the weight of the future."
              <footer className="text-sm text-muted-foreground mt-2 not-italic">
                — Historical Note
              </footer>
            </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
