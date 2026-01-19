import { menuItems } from "@/data/menuItems";

const Menu = () => {
  return (
    <section id="menu" className="bg-card">
      {/* Text content with left alignment */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-md">
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">
            Your favorites, just a click away. Order now for a seamless way to
            enjoy fresh, healthy food, perfect for busy days, quick breaks, or
            anytime you need a boost.
          </p>
        </div>

        <p className="text-base md:text-lg text-foreground mb-8">
          Explore our menu and find your next favorite!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://www.grubhub.com/restaurant/la-vida-890-palomar-airport-rd-carlsbad/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            SEE MENU
          </a>
          <a
            href="#order"
            className="inline-flex items-center justify-center bg-primary hover:bg-olive-dark text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all"
          >
            ORDER ONLINE
          </a>
        </div>
      </div>

      {/* Full-width horizontal food image strip */}
      <div className="w-full">
        <div className="flex">
          {menuItems.slice(0, 5).map((item) => (
            <div key={item.id} className="flex-1 min-w-0">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 md:h-64 lg:h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
