const Catering = () => {
  return (
    <section id="catering" className="bg-card">
      {/* Full-width food spread image */}
      <div className="w-full">
        <img
          src="/images/about/part-2.jpg"
          alt="Catering spread"
          className="w-full h-64 md:h-80 lg:h-96 object-cover"
        />
      </div>

      {/* Centered text content */}
      <div className="py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xl md:text-2xl text-foreground mb-4 font-medium">
            Good food, good mood, made for sharing
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Let La Vida cater your next meeting or celebration.
          </p>
          <a
            href="mailto:hello@lavidasandiego.com?subject=Catering%20Inquiry"
            className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            ORDER CATERING
          </a>
        </div>
      </div>
    </section>
  );
};

export default Catering;
