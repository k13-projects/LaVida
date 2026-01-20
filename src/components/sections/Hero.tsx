import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { heroSlides } from "@/data/heroSlides";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const autoplayRef = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  useEffect(() => {
    if (!api) return;
  }, [api]);

  // Reset autoplay timer and scroll
  const scrollPrev = () => {
    autoplayRef.current.reset();
    api?.scrollPrev();
  };

  const scrollNext = () => {
    autoplayRef.current.reset();
    api?.scrollNext();
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0">
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "start",
          }}
          plugins={[autoplayRef.current]}
          className="h-full"
        >
          <CarouselContent className="h-screen ml-0">
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id} className="h-full pl-0">
                <div className="relative w-full h-full">
                  <img
                    src={`${import.meta.env.BASE_URL}${slide.src.replace(/^\//, '')}`}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    loading={slide.id === 1 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows - Filled dark triangles */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-2 hover:scale-110 transition-transform"
            aria-label="Previous slide"
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M20 4L4 20L20 36" fill="hsl(var(--foreground))" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-2 hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <path d="M4 4L20 20L4 36" fill="hsl(var(--foreground))" />
            </svg>
          </button>
        </Carousel>
      </div>

      {/* Content Overlay - Just the heading on ONE line, vertically centered like arrows */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="pl-24 md:pl-32">
          <h1 className="text-xl md:text-3xl lg:text-5xl text-white font-bold tracking-tight whitespace-nowrap drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%),_0_0_20px_rgb(0_0_0_/_40%)]">
            ALL DAY HEALTH
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
