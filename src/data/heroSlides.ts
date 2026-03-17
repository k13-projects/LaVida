export interface HeroSlide {
  id: number;
  src: string;
  srcWebP: string;
  alt: string;
  objectPosition?: string;
  paddingTop?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    src: "/images/hero/slide-1.jpg",
    srcWebP: "/images/hero/slide-1.webp",
    alt: "Fresh healthy salmon bowl with colorful vegetables",
  },
  {
    id: 2,
    src: "/images/hero/slide-2.jpg",
    srcWebP: "/images/hero/slide-2.webp",
    alt: "Vibrant acai bowl with fresh fruits",
  },
  {
    id: 3,
    src: "/images/hero/slide-3.jpg",
    srcWebP: "/images/hero/slide-3.webp",
    alt: "Nutritious grain bowl with fresh ingredients",
  },
  {
    id: 4,
    src: "/images/hero/slide-4.jpg",
    srcWebP: "/images/hero/slide-4.webp",
    alt: "Delicious smoothie bowl with toppings",
  },
  {
    id: 5,
    src: "/images/hero/slide-5.jpg",
    srcWebP: "/images/hero/slide-5.webp",
    alt: "Fresh healthy food spread",
    objectPosition: "center top",
  },
];
