import { useState, useEffect } from "react";
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

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
  }, [api]);

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
                    className="w-full h-full object-cover"
                    loading={slide.id === 1 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <CarouselPrevious className="left-4 md:left-8 h-12 w-12 bg-white/80 hover:bg-white border-0 text-foreground shadow-lg" />
          <CarouselNext className="right-4 md:right-8 h-12 w-12 bg-white/80 hover:bg-white border-0 text-foreground shadow-lg" />
        </Carousel>
      </div>

      {/* Content Overlay - Just the heading */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className="container mx-auto px-4 pt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white leading-tight font-bold tracking-tight drop-shadow-lg">
            ALL DAY
            <br />
            <span className="text-primary">HEALTH</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
