import { menuItems } from "@/data/menuItems";

const Menu = () => {
  return (
    <>
      {/* Section C - Pink split block with bowl overlapping INTO the olive section above */}
      <section id="menu" className="relative bg-secondary pt-4 md:pt-8 pb-12 md:pb-16 overflow-visible">
        {/* Bowl image - absolute positioned to right edge */}
        <div className="absolute top-0 right-0 z-20 -mt-40 md:-mt-56 lg:-mt-72">
          <img
            src="/images/about/salad.png"
            alt="Fresh salad bowl"
            className="w-[400px] md:w-[500px] lg:w-[600px] object-contain drop-shadow-2xl"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          {/* Text content - left side only */}
          <div className="max-w-md pt-8 md:pt-20">
            <p className="text-lg md:text-xl text-foreground leading-loose italic mb-8">
              Your favorites, just a click away.
              <br />
              Order now for a seamless way to
              <br />
              enjoy fresh, healthy food, perfect for
              <br />
              busy days, quick breaks, or anytime
              <br />
              you need a boost.
            </p>
          </div>

          {/* Centered text and buttons */}
          <div className="text-center mt-4 md:mt-8">
            <p className="text-base md:text-lg text-foreground mb-6">
              Explore our menu and find your next favorite!
            </p>

            {/* Buttons row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="https://www.grubhub.com/restaurant/la-vida-890-palomar-airport-rd-carlsbad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-12 py-3 rounded-full font-semibold transition-all"
              >
                SEE MENU
              </a>
              <a
                href="#order"
                className="inline-flex items-center justify-center bg-primary hover:bg-olive-dark text-white px-12 py-3 rounded-full font-semibold transition-all"
              >
                ORDER ONLINE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section D - Full-bleed collage strip */}
      <section className="w-full">
        <div className="flex">
          {menuItems.slice(0, 5).map((item) => (
            <div key={item.id} className="flex-1 min-w-0">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-52 md:h-72 lg:h-80 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
