// ── Legacy exports (used by Instagram fallback) ──
export interface MenuItem {
  id: number;
  src: string;
  srcWebP: string;
  alt: string;
  title: string;
}

export const menuItems: MenuItem[] = [
  { id: 1, src: "/images/menu/bowl-1.jpg", srcWebP: "/images/menu/bowl-1.webp", alt: "Salmon bowl with fresh vegetables", title: "Salmon Bowl" },
  { id: 2, src: "/images/menu/bowl-2.jpg", srcWebP: "/images/menu/bowl-2.webp", alt: "Chicken bowl with colorful toppings", title: "Chicken Bowl" },
  { id: 3, src: "/images/menu/bowl-3.jpg", srcWebP: "/images/menu/bowl-3.webp", alt: "Tuna poke bowl with avocado", title: "Tuna Poke" },
  { id: 4, src: "/images/menu/bowl-4.jpg", srcWebP: "/images/menu/bowl-4.webp", alt: "Veggie bowl with fresh greens", title: "Veggie Bowl" },
  { id: 5, src: "/images/menu/bowl-5.jpg", srcWebP: "/images/menu/bowl-5.webp", alt: "Protein bowl with quinoa", title: "Protein Bowl" },
  { id: 6, src: "/images/menu/bowl-6.jpg", srcWebP: "/images/menu/bowl-6.webp", alt: "Mediterranean bowl with hummus", title: "Mediterranean" },
  { id: 7, src: "/images/menu/bowl-7.jpg", srcWebP: "/images/menu/bowl-7.webp", alt: "Teriyaki bowl with rice", title: "Teriyaki Bowl" },
  { id: 8, src: "/images/menu/bowl-8.jpg", srcWebP: "/images/menu/bowl-8.webp", alt: "Fresh smoothie bowl", title: "Smoothie Bowl" },
];

// ── Full menu data (for /menu page) ──

export type DietaryTag = "V" | "GF" | "DF" | "GFO";

export const DIETARY_TAG_CONFIG: Record<DietaryTag, { label: string; fullLabel: string; className: string; activeClassName: string }> = {
  V:   { label: "V",   fullLabel: "Vegan",              className: "bg-green-100 text-green-800 border-green-300",  activeClassName: "bg-green-100 text-green-800 border-green-400 shadow-sm ring-1 ring-green-400" },
  GF:  { label: "GF",  fullLabel: "Gluten-Free",        className: "bg-amber-100 text-amber-800 border-amber-300",  activeClassName: "bg-amber-100 text-amber-800 border-amber-400 shadow-sm ring-1 ring-amber-400" },
  DF:  { label: "DF",  fullLabel: "Dairy-Free",         className: "bg-blue-100 text-blue-800 border-blue-300",    activeClassName: "bg-blue-100 text-blue-800 border-blue-400 shadow-sm ring-1 ring-blue-400" },
  GFO: { label: "GFO", fullLabel: "Gluten-Free Option", className: "bg-amber-50 text-amber-700 border-amber-200",  activeClassName: "bg-amber-50 text-amber-700 border-amber-300 shadow-sm ring-1 ring-amber-300" },
};

export interface MenuCategory {
  id: string;
  title: string;
  description: string;
}

export interface FullMenuItem {
  id: number;
  name: string;
  description: string;
  category: string;
  dietaryTags: DietaryTag[];
  note?: string;
  image?: string;
}

export const fullMenuCategories: MenuCategory[] = [
  { id: "bowls",       title: "Bowls",                description: "Each bowl includes seasonal roasted vegetables, garden mix salad, and rice" },
  { id: "wraps",       title: "Wraps",                description: "Choose your tortilla: Whole Wheat, Spinach, or Gluten-Free" },
  { id: "sandwiches",  title: "Sandwiches & Toast",   description: "All sandwiches include our signature La Vida sauce" },
  { id: "salads",      title: "Salads",               description: "Fresh, crisp, and made with love" },
  { id: "smoothies",   title: "Superfood Smoothies",  description: "Refreshing blends to fuel your day" },
  { id: "matcha",      title: "Matcha Bar",           description: "Made with oat milk or almond milk" },
  { id: "acai",        title: "Acai Bowls",           description: "Add fruit, cacao nibs, chia seeds, goji berries" },
];

export const fullMenuItems: FullMenuItem[] = [
  // ── BOWLS (all GF) ──
  { id: 101, name: "Falafel Bowl",             description: "House-made falafel with hummus, seasonal roasted vegetables, garden mix salad, and rice",                         category: "bowls", dietaryTags: ["GF", "V", "DF"], image: "falafel-bowl.png" },
  { id: 102, name: "Chicken Bowl",             description: "Grilled chicken with seasonal roasted vegetables, garden mix salad, and rice",                                    category: "bowls", dietaryTags: ["GF", "DF"], image: "chicken-bowl.png" },
  { id: 103, name: "Chimichurri Chicken Bowl", description: "Grilled chicken with fresh herb chimichurri sauce, seasonal roasted vegetables, garden mix salad, and rice",       category: "bowls", dietaryTags: ["GF", "DF"], image: "chimichurri-chicken-bowl.png" },
  { id: 104, name: "Teriyaki Chicken Bowl",    description: "Grilled chicken with house teriyaki glaze, seasonal roasted vegetables, garden mix salad, and rice",               category: "bowls", dietaryTags: ["GF", "DF"], image: "teriyaki-chicken-bowl.png" },
  { id: 105, name: "Salmon Bowl",              description: "Oven-roasted salmon with seasonal roasted vegetables, garden mix salad, and rice",                                 category: "bowls", dietaryTags: ["GF", "DF"], image: "salmon-bowl.png" },
  { id: 106, name: "Chimichurri Salmon Bowl",  description: "Oven-roasted salmon with fresh herb chimichurri sauce, seasonal roasted vegetables, garden mix salad, and rice",    category: "bowls", dietaryTags: ["GF", "DF"], image: "chimichurri-salmon-bowl.png" },
  { id: 107, name: "Teriyaki Salmon Bowl",     description: "Oven-roasted salmon with house teriyaki glaze, seasonal roasted vegetables, garden mix salad, and rice",            category: "bowls", dietaryTags: ["GF", "DF"], image: "teriyaki-salmon-bowl.png" },

  // ── WRAPS (GFO — gluten-free tortilla option) ──
  { id: 201, name: "Chicken Teriyaki Wrap",     description: "Chicken, jasmine rice, roasted vegetables, avocado, sesame seeds, house teriyaki glaze",                           category: "wraps", dietaryTags: ["GFO", "DF"], image: "chicken-teriyaki-wrap.png" },
  { id: 202, name: "Chicken Chimichurri Wrap",  description: "Chicken, jasmine rice, roasted vegetables, avocado, fresh herb chimichurri sauce",                                 category: "wraps", dietaryTags: ["GFO", "DF"], image: "chicken-chimichurri-wrap.png" },
  { id: 203, name: "Salmon Teriyaki Wrap",      description: "Oven-roasted salmon, jasmine rice, seasonal roasted vegetables, avocado, sesame seeds, house teriyaki glaze, mixed greens", category: "wraps", dietaryTags: ["GFO", "DF"], image: "salmon-teriyaki-wrap.png" },
  { id: 204, name: "Salmon Chimichurri Wrap",   description: "Oven-roasted salmon, jasmine rice, roasted vegetables, avocado, chimichurri sauce, mixed greens",                  category: "wraps", dietaryTags: ["GFO", "DF"], image: "salmon-chimichurri-wrap.png" },
  { id: 205, name: "Falafel Wrap",              description: "Falafel, hummus, cucumber, tomato, mixed greens, avocado, pickled red onion",                                      category: "wraps", dietaryTags: ["GFO", "V", "DF"], image: "falafel-wrap.png" },
  { id: 206, name: "The Power Wrap",            description: "Pasture-raised fluffy egg, turkey bacon, spinach, sweet potato, mozzarella, avocado with La Vida sauce",            category: "wraps", dietaryTags: ["GFO"], image: "power-wrap.png" },
  { id: 207, name: "Kale Chicken Caesar Wrap",  description: "Antibiotic-free chicken, chopped kale, parmesan, toasted sourdough croutons, our addictive Caesar dressing",        category: "wraps", dietaryTags: ["GFO"], image: "kale-chicken-caesar-wrap.png" },

  // ── SANDWICHES & TOAST ──
  { id: 301, name: "Cali Chicken",    description: "Toasted ciabatta, antibiotic-free chicken, avocado, mozzarella, pickled red onion, tomato, mixed greens",                       category: "sandwiches", dietaryTags: [], image: "cali-chicken.png" },
  { id: 302, name: "Perfect Egg",     description: "Toasted ciabatta with fluffy pasture-raised eggs, turkey bacon, fresh tomato, mozzarella, avocado, and arugula",                category: "sandwiches", dietaryTags: [], image: "perfect-egg.png" },
  { id: 303, name: "Pesto Chicken",   description: "Toasted ciabatta, antibiotic-free chicken, arugula, tomato, mozzarella, kale pesto sauce, balsamic glaze drizzle",              category: "sandwiches", dietaryTags: [], image: "pesto-chicken.png" },
  { id: 304, name: "Avocado Toast",   description: "Toasted local sourdough, smashed avocado, cucumber, radish, microgreens",                                                      category: "sandwiches", dietaryTags: ["V", "DF"], image: "avocado-toast.png" },

  // ── SALADS ──
  { id: 401, name: "Greek Goddess",   description: "Arugula, mixed greens, tomatoes, cucumber, feta cheese, mint, sourdough croutons, citrus glow dressing",                       category: "salads", dietaryTags: [], image: "greek-goddess.png" },
  { id: 402, name: "Kale Caesar",     description: "Chopped kale, toasted sourdough croutons, Parmigiano Reggiano, our addictive Caesar dressing",                                  category: "salads", dietaryTags: [], image: "kale-caesar.png" },
  { id: 403, name: "Harvest Salad",   description: "Shredded kale, roasted sweet potatoes, apples, feta cheese, quinoa, pumpkin seeds, maple-citrus dressing",                      category: "salads", dietaryTags: [], image: "harvest-salad.png" },

  // ── SUPERFOOD SMOOTHIES (all GF + V) ──
  { id: 501, name: "Passion Colada",         description: "Pineapple, passion fruit, coconut water, chia seeds",                                                                    category: "smoothies", dietaryTags: ["GF", "V", "DF"], image: "passion-colada.png" },
  { id: 502, name: "Welcome to San Diego",   description: "Organic raw acai, mango, banana, blueberries, hemp seeds",                                                               category: "smoothies", dietaryTags: ["GF", "V", "DF"], image: "welcome-to-san-diego.png" },
  { id: 503, name: "Choco Fuel",             description: "Banana, peanut butter, honey, grass-fed whey chocolate protein",                                                         category: "smoothies", dietaryTags: ["GF"], image: "choco-fuel.png" },
  { id: 504, name: "Vitamin Sea",            description: "Banana, strawberry, pineapple, coconut water, lemon juice",                                                              category: "smoothies", dietaryTags: ["GF", "V", "DF"], image: "vitamin-sea.png" },
  { id: 505, name: "The Glow Up",            description: "Blueberry, banana, spinach, almond milk, almond butter, collagen protein",                                               category: "smoothies", dietaryTags: ["GF", "DF"], image: "the-glow-up.png" },
  { id: 506, name: "Very Greens",            description: "Celery, cucumber, pineapple, lemon juice, ginger, and spinach",                                                          category: "smoothies", dietaryTags: ["GF", "V", "DF"], image: "very-greens.png" },
  { id: 507, name: "Collagen Madness",       description: "Pineapple, banana, mango, coconut water, hemp seed, blue spirulina, collagen protein, shaved coconut",                    category: "smoothies", dietaryTags: ["GF", "DF"], image: "collagen-madness.png" },

  // ── MATCHA BAR (all GF + V) ──
  { id: 601, name: "Strawberry Matcha",  description: "Strawberry matcha blend with oat milk or almond milk",     category: "matcha", dietaryTags: ["GF", "V", "DF"], image: "strawberry-matcha.png" },
  { id: 602, name: "Matcha Latte",       description: "Classic matcha latte with oat milk or almond milk",        category: "matcha", dietaryTags: ["GF", "V", "DF"], image: "matcha-latte.png" },
  { id: 603, name: "Matcha Lemonade",    description: "Refreshing matcha with lemonade",                          category: "matcha", dietaryTags: ["GF", "V", "DF"], image: "matcha-lemonade.png" },
  { id: 604, name: "Coconut Matcha",     description: "Coconut matcha blend with oat milk or almond milk",        category: "matcha", dietaryTags: ["GF", "V", "DF"], image: "coconut-matcha.png" },

  // ── ACAI BOWLS (all GF + V) ──
  { id: 701, name: "La Vida Bliss",  description: "Organic raw acai, banana, strawberry, pineapple, chia seed, shaved coconut, nutella, housemade granola",                         category: "acai", dietaryTags: ["GF", "V", "DF"], image: "la-vida-bliss.png" },
  { id: 702, name: "Beach Body",     description: "Organic raw acai, banana, strawberry, mango, chia seeds, goji berries, cacao nibs, shaved coconut, almond butter, housemade granola", category: "acai", dietaryTags: ["GF", "V", "DF"], image: "beach-body.png" },
  { id: 703, name: "PB Kiss",        description: "Organic raw acai, banana, strawberry, blueberries, goji berry, peanut butter, shaved coconut, housemade granola",                category: "acai", dietaryTags: ["GF", "V", "DF"], image: "pb-kiss.png" },
];

// Legacy export (kept for backward compatibility)
export const menuCategories = [
  { title: "Bowls & Wraps", description: "Nourishing, colorful, and packed with flavor" },
  { title: "Smoothies", description: "Refreshing blends to fuel your day" },
  { title: "Toasts", description: "Artisan bread with fresh toppings" },
];
