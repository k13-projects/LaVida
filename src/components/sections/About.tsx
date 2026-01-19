import Wave from "@/components/common/Wave";

const About = () => {
  return (
    <section id="about" className="relative bg-primary min-h-[550px] md:min-h-[650px] flex items-center overflow-hidden pb-32 md:pb-40">
      {/* No top wave - olive section flows directly from hero image */}

      {/* Content Container - vertically centered */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-24 md:py-28">
        <div className="max-w-5xl lg:max-w-6xl mx-auto text-center">
          {/* Centered paragraph - white text on olive */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed mb-8">
            Born in sunny San Diego, we bring fresh, feel-good food made with real ingredients and
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            vibrant energy to every bite. From nourishing bowls, sandwiches and wraps to
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            refreshing smoothies and toasts, La Vida is your go-to spot for healthy eats that fuel
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            your body and vibe with your soul.
          </p>

          {/* Single CTA button */}
          <a
            href="#about-full"
            className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-20 py-3 rounded-full font-semibold transition-all text-base"
          >
            ABOUT US
          </a>
        </div>
      </div>

      {/* Wave Bottom - blobLeft creates asymmetric curve dipping on LEFT side */}
      {/* Pink fills the curved area, olive shows through on right */}
      <Wave
        position="bottom"
        variant="blobLeft"
        fillColor="hsl(var(--secondary))"
      />
    </section>
  );
};

export default About;
