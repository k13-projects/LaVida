const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Centered paragraph */}
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-10">
            Born in sunny San Diego, we bring fresh, feel-good food made with real
            ingredients and vibrant energy to every bite. From nourishing bowls,
            sandwiches and wraps to refreshing smoothies and toasts, La Vida is
            your go-to spot for healthy eats that fuel your body and vibe with
            your soul.
          </p>

          {/* Single CTA button */}
          <a
            href="#about-full"
            className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-8 py-4 rounded-full font-semibold transition-all text-base"
          >
            ABOUT US
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
