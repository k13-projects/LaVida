import { Leaf, Heart, Sun, Users } from "lucide-react";
import OptimizedImage from "@/components/common/OptimizedImage";

const values = [
  {
    icon: Leaf,
    title: "Freshness in Every Bite",
    description: "Real, wholesome ingredients that taste vibrant and make you feel good.",
  },
  {
    icon: Heart,
    title: "Wellness Made Simple",
    description: "Balanced, delicious food that fits easily into everyday life.",
  },
  {
    icon: Sun,
    title: "Good Vibes Only",
    description: "Relaxed, uplifting energy inspired by sunny San Diego.",
  },
  {
    icon: Users,
    title: "Real Connections",
    description: "Food made to bring people together and create joyful moments.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 animate-fade-up font-bold">
            About La Vida
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
            We brought our passion to San Diego, where every bite feels like summer
            and every meal feels like a mood.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="bg-card p-6 md:p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg md:text-xl text-foreground mb-3 font-semibold">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image & Text */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden">
              <OptimizedImage
                src="/images/about/salad.png"
                alt="Fresh salad bowl"
                aspectRatio="square"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-primary rounded-full hidden lg:block" />
          </div>
          <div className="lg:pl-8">
            <h3 className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-6 font-bold">
              Fuel your day with good vibes + real ingredients
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              At La Vida, we believe healthy eating should be delicious, accessible,
              and fun. Our menu is crafted with care, using only the freshest
              ingredients to create meals that nourish your body and delight your
              taste buds.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Beachy, balanced & always fresh — that's the La Vida way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
