import OptimizedImage from "@/components/common/OptimizedImage";

const Catering = () => {
  return (
    <section id="catering" className="py-16 md:py-24 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <OptimizedImage
                src="/images/about/part-2.jpg"
                alt="Catering spread"
                aspectRatio="auto"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <p className="text-xl md:text-2xl text-foreground mb-4 font-medium">
              Good food, good mood, made for sharing.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Let La Vida cater your next meeting or celebration. From corporate
              events to private parties, we bring the same fresh, vibrant flavors
              that make our food special — right to your doorstep.
            </p>
            <a
              href="mailto:hello@lavidasandiego.com?subject=Catering%20Inquiry"
              className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl"
            >
              ORDER CATERING
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
