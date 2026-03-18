export interface ChoiceOption {
  label: string;
  value: string;
  description: string;
  tooltip?: string;
  inputPlaceholder?: string;
}

export interface TextField {
  label: string;
  key: string;
  placeholder: string;
  defaultValue?: string;
}

export interface ChoiceQuestion {
  id: number;
  type: "choice";
  title: string;
  description: string;
  image?: string;
  imageCaption?: string;
  options: [ChoiceOption, ChoiceOption];
  customPlaceholder?: string;
}

export interface TextQuestion {
  id: number;
  type: "text";
  title: string;
  description: string;
  fields: TextField[];
}

export type Question = ChoiceQuestion | TextQuestion;

export interface QuestionnaireAnswers {
  [questionId: number]: string | Record<string, string>;
}

export const CUSTOM_CHAR_LIMIT = 120;

export const questions: Question[] = [
  {
    id: 1,
    type: "choice",
    title: "Social Media Preview Image",
    description:
      "When someone shares the La Vida website link on iMessage, Instagram, WhatsApp, or Facebook, the app automatically generates a preview card with an image, title, and short description. This is called an Open Graph (OG) image — it's the first impression people get before they even click.\n\nRight now, the website uses the salmon bowl hero photo as the preview. Below is how it currently appears when shared. Would you like to keep this food-focused image, or switch to the La Vida logo on your branded olive-green background for a cleaner, more consistent look?",
    image: "images/og-image.jpg",
    imageCaption:
      "Current preview when the site link is shared on social media or messaging apps",
    options: [
      {
        label: "A",
        value: "keep_photo",
        description:
          "Keep the current food photo (salmon bowl) — it grabs attention in feeds",
        tooltip:
          "A vibrant food photo grabs more attention in social feeds and messages. Works great for driving clicks and showing what La Vida is about at a glance.",
      },
      {
        label: "B",
        value: "logo_olive",
        description:
          "Switch to the La Vida logo on a branded olive-green background",
        tooltip:
          "Clean and professional — the logo on your brand color ensures consistent branding across all platforms where the link is shared. Looks more polished but less eye-catching in busy feeds.",
      },
    ],
    customPlaceholder: "e.g., Use a specific photo we'll send...",
  },
  {
    id: 2,
    type: "choice",
    title: "Catering Section Details",
    description:
      'The catering section on the homepage is one of the first things potential clients see when considering La Vida for events or group orders. Right now, it only shows a tagline — "Good food, good mood, made for sharing" — with a button to inquire, but no details about what you actually offer.\n\nWithout specifics like group sizes, available packages, or lead time, most visitors won\'t feel confident enough to reach out. Adding even 3–5 bullet points dramatically increases the chance someone submits an inquiry.',
    image: "images/catering/LaVida_032125_arleneibarra-034.webp",
    imageCaption: "Current catering section — tagline only, no service details yet",
    options: [
      {
        label: "A",
        value: "keep_as_is",
        description:
          "Keep it as is for now",
        tooltip:
          "The catering section stays with the current tagline. You can always add details in a future update when you're ready.",
      },
      {
        label: "B",
        value: "send_bullets",
        description:
          "I'll add 3–5 bullet points right now (packages, group sizes, lead time, etc.)",
        tooltip:
          "Type your catering details directly and we'll format them for the site. Saves a back-and-forth later.",
        inputPlaceholder: "e.g., Groups of 10–200\nCustom menus available\n48-hour lead time required...",
      },
    ],
    customPlaceholder: "e.g., We have a catering PDF to upload...",
  },
  {
    id: 3,
    type: "choice",
    title: '"Coming Soon" Locations',
    description:
      'The website currently displays four location cards: Carlsbad (your active location) plus three marked "Coming Soon" — San Clemente (Miramar Food Hall), UCSD Campus (Station 8 Public Market), and Little Italy (Global Fork Food Hall).\n\nThe "Coming Soon" labels don\'t include any timeline, which can make them feel like stale placeholders rather than exciting announcements. We can either add approximate dates to build real anticipation (even rough quarters like "Summer 2026" work well), or temporarily hide the upcoming locations so the site only shows what\'s currently open.\n\nYou can see the current layout at www.lavida.fit — scroll down to the Locations section.',
    options: [
      {
        label: "A",
        value: "keep_locations",
        description:
          "Keep it as is for now",
        tooltip:
          "The coming-soon locations stay as they are with no timeline. You can always add dates or hide them in a future update.",
      },
      {
        label: "B",
        value: "add_dates",
        description:
          'Give us approximate launch dates (e.g., "San Clemente — Summer 2026") and we\'ll add them to the cards',
        tooltip:
          "Adding target dates creates real anticipation and shows visitors that expansion is happening. Even rough quarters work well. We can always update them later.",
        inputPlaceholder: "e.g., San Clemente — Summer 2026\nUCSD Campus — Fall 2026\nLittle Italy — Winter 2027",
      },
    ],
    customPlaceholder: "e.g., Show them but add an email waitlist...",
  },
  {
    id: 4,
    type: "choice",
    title: "Customer Reviews",
    description:
      "Here's an idea — adding 2–3 short customer reviews to the homepage could help build trust with first-time visitors. People deciding whether to try La Vida often look for real feedback before making the trip.\n\nThese could come from your existing Google, Yelp, or Instagram reviews — or a mix from each. You could also write your own to highlight exactly what you want customers to know about the experience.",
    options: [
      {
        label: "A",
        value: "keep_as_is",
        description:
          "Let's leave it as is for now",
        tooltip:
          "No customer reviews added to the site. You can always revisit this idea later.",
      },
      {
        label: "B",
        value: "add_reviews",
        description:
          "We should add customer reviews — I'll provide them shortly",
        tooltip:
          "You send us the reviews you'd like featured and we'll add them to the homepage. Can be from Google, Yelp, Instagram, or written by you.",
      },
    ],
    customPlaceholder: "e.g., Pull from our Google reviews, I'll pick which ones...",
  },
  {
    id: 5,
    type: "text",
    title: "Business Details for Google",
    description:
      "For your website to appear correctly in Google Search, Google Maps, and voice assistants like Siri and Alexa, we embed structured data (called Schema markup) behind the scenes. This tells search engines your exact business details — phone number, operating hours, and cuisine type.\n\nIf any of these are outdated or incorrect, it can hurt your search ranking and confuse potential customers. Please confirm or update the details below.",
    fields: [
      {
        label: "Phone Number",
        key: "phone",
        placeholder: "e.g., (760) 555-1234",
        defaultValue: "",
      },
      {
        label: "Hours (Carlsbad)",
        key: "hours",
        placeholder: "Edit if incorrect",
        defaultValue: "11:00 AM – 9:00 PM daily",
      },
      {
        label: "Cuisine Type for Google",
        key: "cuisine",
        placeholder: "Edit if incorrect",
        defaultValue: "Healthy Food, Bowls, Smoothies, Wraps",
      },
    ],
  },
];
