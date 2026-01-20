const Menu = () => {
  return (
    <>
    <section id="menu" className="relative bg-secondary overflow-visible">
      {/* Bowl image - absolute positioned to right half, overlapping into olive section */}
      <img
        src="/images/about/salad.png"
        alt="Fresh salad bowl"
        className="absolute top-0 right-0 z-20 w-[60vw] 2xl:w-[55vw] h-auto object-contain drop-shadow-2xl -mt-40 sm:-mt-52 md:-mt-72 lg:-mt-88"
      />

      {/* Content wrapper with min-height to ensure plate has space */}
      <div className="min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[550px] pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Text content - left side only, avoiding plate on right */}
          <div className="w-full sm:w-[61%] md:w-[56%] lg:w-[51%] text-center -mt-8 sm:-mt-16 md:-mt-12 lg:-mt-4">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground leading-relaxed italic mb-6 md:mb-8">
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

          {/* Centered text and buttons - positioned below the plate area */}
          <div className="text-center mt-4 sm:mt-6 md:mt-8 lg:mt-[140px] xl:mt-[160px]">
            <p className="text-base sm:text-lg md:text-xl text-foreground mb-6">
              Explore our menu and find your next favorite!
            </p>

            {/* Buttons row */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="https://www.grubhub.com/restaurant/la-vida-890-palomar-airport-rd-carlsbad/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-10 sm:px-12 py-3 rounded-full font-semibold transition-all text-sm sm:text-base"
              >
                SEE MENU
              </a>
              <a
                href="#order"
                className="inline-flex items-center justify-center bg-primary hover:bg-olive-dark text-white px-10 sm:px-12 py-3 rounded-full font-semibold transition-all text-sm sm:text-base"
              >
                ORDER ONLINE
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Full-bleed food image */}
    <section className="w-full">
      <img
        src="/images/about/part-2.jpg"
        alt="Catering spread"
        className="w-full h-auto object-contain"
      />
    </section>
    </>
  );
};

export default Menu;
