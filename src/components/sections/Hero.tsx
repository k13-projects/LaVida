import { useCallback, useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { heroSlides } from "@/data/heroSlides";
import SectionDivider from "@/components/common/SectionDivider";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="h-full"
        >
          <CarouselContent className="h-screen ml-0">
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id} className="h-full pl-0">
                <div className="relative w-full h-full">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover saturate-[1.15] contrast-[1.05]"
                    loading={slide.id === 1 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/30 to-transparent" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="left-4 md:left-8 h-12 w-12 bg-white/90 hover:bg-white border-0 text-olive-dark shadow-lg" />
          <CarouselNext className="right-4 md:right-8 h-12 w-12 bg-white/90 hover:bg-white border-0 text-olive-dark shadow-lg" />
        </Carousel>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-foreground leading-tight mb-6 font-bold tracking-tight">
            ALL DAY
            <br />
            <span className="text-primary">HEALTH</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed mb-8 max-w-xl drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
            Born in sunny San Diego, we bring fresh, feel-good food made with real
            ingredients and vibrant energy to every bite. From nourishing bowls,
            sandwiches and wraps to refreshing smoothies and toasts, La Vida is
            your go-to spot for healthy eats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-olive-dark hover:bg-foreground text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl text-base"
            >
              ABOUT US
            </a>
            <a
              href="#order"
              className="inline-flex items-center justify-center bg-primary hover:bg-olive-dark text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all hover:shadow-xl text-base"
            >
              ORDER ONLINE
            </a>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex gap-2 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                current === index
                  ? "bg-primary w-8"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <SectionDivider variant="wave" fillColor="hsl(var(--secondary))" />
    </section>
  );
};

export default Hero;
