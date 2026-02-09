const Catering = () => {
  const handleOrderCatering = () => {
    // Dispatch custom event to open catering modal in Navbar
    window.dispatchEvent(new CustomEvent('openCateringModal'));
  };

  return (
    <>
      {/* Catering CTA Section */}
      <section id="catering" className="relative bg-[#FDF8F5] pt-16 md:pt-20 pb-8 md:pb-12" aria-labelledby="catering-heading">
        <h2 id="catering-heading" className="sr-only">Catering Services</h2>
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-foreground mb-2 font-medium italic">
            Good food, good mood, made for sharing
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Let La Vida cater your next meeting or celebration.
          </p>
          <button
            onClick={handleOrderCatering}
            className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-10 py-3 rounded-full font-semibold transition-all"
          >
            ORDER CATERING
          </button>
        </div>
      </section>

      {/* Catering image with cream wave overlay */}
      <section className="relative w-full h-[200px] sm:h-[280px] md:h-[360px] lg:h-[450px] overflow-hidden" aria-label="Catering food showcase">
        {/* Full-bleed catering image - cropped by container */}
        <img
          src={`${import.meta.env.BASE_URL}images/catering/LaVida_032125_arleneibarra-034.jpg`}
          alt="Fresh catering salad with colorful healthy ingredients"
          className="w-full h-full object-cover object-[center_40%]" style={{ transform: 'scaleX(-1) scaleY(-1)' }}
        />

        {/* Cream wave overlay at top - flowing down from cream section (flipped horizontally) - decorative */}
        <svg
          className="absolute top-0 left-0 right-0 w-full h-32 md:h-48 lg:h-56 z-10"
          viewBox="0 0 1440 230"
          preserveAspectRatio="none"
          style={{ transform: 'scaleX(-1)' }}
          aria-hidden="true"
          focusable="false"
        >
          {/* Wave shape - cream fills above the curve */}
          <path
            d="M0,0 L0,150 C200,80 400,50 600,50 C840,50 960,150 1440,150 L1440,0 Z"
            fill="#FDF8F5"
          />
        </svg>
      </section>
    </>
  );
};

export default Catering;
