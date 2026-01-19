import { menuItems } from "@/data/menuItems";

const Instagram = () => {
  // Use first 4 menu items as Instagram preview
  const previewImages = menuItems.slice(0, 4);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Preview Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-10 max-w-4xl mx-auto">
          {previewImages.map((item) => (
            <div key={item.id} className="aspect-square overflow-hidden">
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
            className="inline-flex items-center justify-center bg-primary hover:bg-olive-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            FOLLOW US
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
