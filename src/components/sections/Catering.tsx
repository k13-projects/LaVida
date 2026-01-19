const Catering = () => {
  return (
    <>
      {/* Section F - Catering CTA (minimal center) on pink */}
      <section id="catering" className="relative bg-secondary py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-foreground mb-2 font-medium">
            Good food, good mood, made for sharing
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Let La Vida cater your next meeting or celebration.
          </p>
          <a
            href="mailto:hello@lavidasandiego.com?subject=Catering%20Inquiry"
            className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-10 py-3 rounded-full font-semibold transition-all"
          >
            ORDER CATERING
          </a>
        </div>
      </section>

      {/* Section G - Full-bleed food image */}
      <section className="w-full">
        <img
          src="/images/about/part-2.jpg"
          alt="Catering spread"
          className="w-full h-80 md:h-[420px] lg:h-[500px] object-cover"
        />
      </section>
    </>
  );
};

export default Catering;
