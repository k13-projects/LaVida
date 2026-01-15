import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  aspectRatio?: "square" | "video" | "wide" | "auto";
  objectFit?: "cover" | "contain" | "fill";
}

const OptimizedImage = ({
  src,
  alt,
  className,
  containerClassName,
  priority = false,
  aspectRatio = "auto",
  objectFit = "cover",
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const aspectRatioClass = {
    square: "aspect-square",
    video: "aspect-video",
    wide: "aspect-[21/9]",
    auto: "",
  }[aspectRatio];

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
  }[objectFit];

  return (
    <div
      ref={imgRef}
      className={cn(
        "relative overflow-hidden bg-cream/50",
        aspectRatioClass,
        containerClassName
      )}
    >
      {isInView && (
        <>
          <div
            className={cn(
              "absolute inset-0 bg-cream/30 transition-opacity duration-500",
              isLoaded ? "opacity-0" : "opacity-100"
            )}
          />
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            onLoad={() => setIsLoaded(true)}
            className={cn(
              "w-full h-full transition-all duration-500",
              objectFitClass,
              isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
              className
            )}
          />
        </>
      )}
    </div>
  );
};

export default OptimizedImage;
