export interface HeroSlide {
  id: number;
  src: string;
  srcWebP: string;
  /** Art-directed portrait crop served on phones (<768px). Desktop untouched. */
  mobileSrc: string;
  mobileSrcWebP: string;
  alt: string;
  objectPosition?: string;
  paddingTop?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    src: "/images/hero/slide-1.jpg",
    srcWebP: "/images/hero/slide-1.webp",
    mobileSrc: "/images/hero/slide-1-mobile.jpg",
    mobileSrcWebP: "/images/hero/slide-1-mobile.webp",
    alt: "Fresh healthy salmon bowl with colorful vegetables",
  },
  {
    id: 2,
    src: "/images/hero/slide-2.jpg",
    srcWebP: "/images/hero/slide-2.webp",
    mobileSrc: "/images/hero/slide-2-mobile.jpg",
    mobileSrcWebP: "/images/hero/slide-2-mobile.webp",
    alt: "Vibrant acai bowl with fresh fruits",
  },
  {
    id: 3,
    src: "/images/hero/slide-3.jpg",
    srcWebP: "/images/hero/slide-3.webp",
    mobileSrc: "/images/hero/slide-3-mobile.jpg",
    mobileSrcWebP: "/images/hero/slide-3-mobile.webp",
    alt: "Nutritious grain bowl with fresh ingredients",
  },
  {
    id: 4,
    src: "/images/hero/slide-4.jpg",
    srcWebP: "/images/hero/slide-4.webp",
    mobileSrc: "/images/hero/slide-4-mobile.jpg",
    mobileSrcWebP: "/images/hero/slide-4-mobile.webp",
    alt: "Delicious smoothie bowl with toppings",
  },
  {
    id: 5,
    src: "/images/hero/slide-5.jpg",
    srcWebP: "/images/hero/slide-5.webp",
    mobileSrc: "/images/hero/slide-5-mobile.jpg",
    mobileSrcWebP: "/images/hero/slide-5-mobile.webp",
    alt: "Fresh healthy food spread",
    objectPosition: "center top",
  },
];
