import { Instagram as InstagramIcon } from "lucide-react";
import { menuItems } from "@/data/menuItems";
import OptimizedImage from "@/components/common/OptimizedImage";

const Instagram = () => {
  // Use first 4 menu items as Instagram preview
  const previewImages = menuItems.slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="container mx-auto px-4">
        {/* Preview Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-10 max-w-4xl mx-auto">
          {previewImages.map((item) => (
            <div key={item.id} className="aspect-square rounded-xl overflow-hidden">
              <OptimizedImage
                src={item.src}
                alt={item.alt}
                aspectRatio="square"
                className="hover:scale-105 transition-transform duration-300"
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
            className="inline-flex items-center gap-3 bg-secondary hover:bg-secondary/90 text-foreground px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl"
          >
            <InstagramIcon className="w-5 h-5" />
            FOLLOW US
          </a>
          <p className="text-primary-foreground/80 mt-4">
            @lavida.sandiego
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instagram;
