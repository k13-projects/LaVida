import { menuItems } from "@/data/menuItems";
import OptimizedImage from "@/components/common/OptimizedImage";

const Menu = () => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Your favorites, just a click away. Order now for a seamless way to
            enjoy fresh, healthy food — perfect for busy days, quick breaks, or
            anytime you need a boost.
          </p>
        </div>

        {/* CTAs Above Gallery */}
        <div className="text-center mb-8">
          <p className="text-lg text-foreground mb-6">
            Explore our menu and find your next favorite!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.grubhub.com/restaurant/la-vida-890-palomar-airport-rd-carlsbad/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl"
            >
              SEE MENU
            </a>
            <a
              href="#order"
              className="inline-flex items-center justify-center bg-primary hover:bg-olive-dark text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl"
            >
              ORDER ONLINE
            </a>
          </div>
        </div>
      </div>

      {/* Full-Width Food Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 mt-8">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="group relative overflow-hidden animate-fade-up"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <OptimizedImage
              src={item.src}
              alt={item.alt}
              aspectRatio="square"
              className="group-hover:scale-110 transition-transform duration-500"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-olive-dark/0 group-hover:bg-olive-dark/60 transition-all duration-300 flex items-center justify-center">
              <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                {item.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
