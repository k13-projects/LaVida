export interface MenuItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    src: "/images/menu/bowl-1.jpg",
    alt: "Salmon bowl with fresh vegetables",
    title: "Salmon Bowl",
  },
  {
    id: 2,
    src: "/images/menu/bowl-2.jpg",
    alt: "Chicken bowl with colorful toppings",
    title: "Chicken Bowl",
  },
  {
    id: 3,
    src: "/images/menu/bowl-3.jpg",
    alt: "Tuna poke bowl with avocado",
    title: "Tuna Poke",
  },
  {
    id: 4,
    src: "/images/menu/bowl-4.jpg",
    alt: "Veggie bowl with fresh greens",
    title: "Veggie Bowl",
  },
  {
    id: 5,
    src: "/images/menu/bowl-5.jpg",
    alt: "Protein bowl with quinoa",
    title: "Protein Bowl",
  },
  {
    id: 6,
    src: "/images/menu/bowl-6.jpg",
    alt: "Mediterranean bowl with hummus",
    title: "Mediterranean",
  },
  {
    id: 7,
    src: "/images/menu/bowl-7.jpg",
    alt: "Teriyaki bowl with rice",
    title: "Teriyaki Bowl",
  },
  {
    id: 8,
    src: "/images/menu/bowl-8.jpg",
    alt: "Fresh smoothie bowl",
    title: "Smoothie Bowl",
  },
];

export const menuCategories = [
  {
    title: "Bowls & Wraps",
    description: "Nourishing, colorful, and packed with flavor",
  },
  {
    title: "Smoothies",
    description: "Refreshing blends to fuel your day",
  },
  {
    title: "Toasts",
    description: "Artisan bread with fresh toppings",
  },
];
