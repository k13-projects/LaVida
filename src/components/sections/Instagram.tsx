import { menuItems } from "@/data/menuItems";
import Wave from "@/components/common/Wave";

const Instagram = () => {
  // Use first 4 menu items as Instagram preview
  const previewImages = menuItems.slice(0, 4);

  return (
    <section className="relative bg-primary min-h-[400px] md:min-h-[450px] flex items-center">
      {/* Wave Top - deep curve, image section flowing into olive */}
      <Wave
        position="top"
        variant="deep"
        fillColor="hsl(var(--background))"
      />

      <div className="container mx-auto px-4 relative z-10 py-20 md:py-24">
        {/* Preview Images Grid - 4 columns desktop, 2 mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-10 max-w-4xl mx-auto">
          {previewImages.map((item) => (
            <div key={item.id} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/lavida.sandiego/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-secondary hover:bg-secondary/90 text-foreground px-10 py-3 rounded-full font-semibold transition-all"
          >
            FOLLOW US
          </a>
        </div>
      </div>

      {/* Wave Bottom - olive flowing into pink footer */}
      <Wave
        position="bottom"
        variant="soft"
        fillColor="hsl(var(--secondary))"
      />
    </section>
  );
};

export default Instagram;
