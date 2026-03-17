export interface ChoiceOption {
  label: string;
  value: string;
  description: string;
  tooltip?: string;
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
    title: "Instagram Feed",
    description:
      "We need to connect the real Instagram feed to the website. Right now it's showing placeholder images.",
    options: [
      {
        label: "A",
        value: "dev_setup",
        description:
          "We'll set it up — just confirm the Instagram account is @lavida.sandiego",
        tooltip:
          "We'll create a Behold.so account, link your Instagram, and configure the feed widget. You just need to confirm the correct account handle.",
      },
      {
        label: "B",
        value: "client_setup",
        description: "You'll set it up and send us the Behold feed ID",
        tooltip:
          "You create your own Behold.so account, connect Instagram, and share the feed ID string with us. This gives you full control over the feed settings.",
      },
    ],
    customPlaceholder: "e.g., We already have a feed provider...",
  },
  {
    id: 2,
    type: "choice",
    title: "Social Media Preview Image",
    description:
      "When someone shares the website on iMessage, Instagram, or Facebook, a preview image shows up. Right now it's showing a generic placeholder.",
    options: [
      {
        label: "A",
        value: "logo_olive",
        description: "Use the La Vida logo on a branded olive-green background",
        tooltip:
          "Clean and professional — the logo on your brand color ensures consistent branding across all platforms where the link is shared.",
      },
      {
        label: "B",
        value: "hero_photo",
        description:
          "Use a hero food photo (like the acai bowl or salmon bowl)",
        tooltip:
          "A vibrant food photo grabs more attention in social feeds and messages. Works great for driving clicks but may crop differently on each platform.",
      },
    ],
    customPlaceholder: "e.g., Use a specific photo we'll send...",
  },
  {
    id: 3,
    type: "choice",
    title: "Catering Section",
    description:
      'The catering section currently says "Good food, good mood, made for sharing" but doesn\'t give visitors any details. We want to add just enough info so people actually inquire.',
    options: [
      {
        label: "A",
        value: "dev_writes",
        description:
          'We\'ll write the bullet points (e.g., "Groups of 10-200", "Custom menus available") — you confirm or correct',
        tooltip:
          "We draft catering details based on what we know about your business. You review and approve before anything goes live. Fastest path to getting content up.",
      },
      {
        label: "B",
        value: "client_sends",
        description:
          "You send us 3-5 bullet points (package names, minimums, lead time, etc.)",
        tooltip:
          "You write the exact details you want displayed — package names, pricing info, minimum order sizes, lead time requirements. Most accurate but requires your time.",
      },
    ],
    customPlaceholder: "e.g., We have a catering PDF to upload...",
  },
  {
    id: 4,
    type: "choice",
    title: '"Coming Soon" Locations',
    description:
      'Three locations show "Coming Soon" with no timeline. We\'d like to add either a target date or hide them for now.',
    options: [
      {
        label: "A",
        value: "add_dates",
        description:
          'Give us approximate launch quarters (e.g., "San Clemente — Summer 2026") and we\'ll add them',
        tooltip:
          "Adding target dates creates anticipation and lets potential customers know something is actually happening. Even rough quarters (Q3 2026) work well.",
      },
      {
        label: "B",
        value: "hide_locations",
        description:
          "Hide the coming-soon locations for now and only show Carlsbad",
        tooltip:
          "Removes the 'Coming Soon' cards entirely so the site only shows your active location. Cleaner look, but loses the marketing value of upcoming locations.",
      },
    ],
    customPlaceholder: "e.g., Show them but add email waitlist...",
  },
  {
    id: 5,
    type: "choice",
    title: "Customer Quotes",
    description:
      "Adding 2-3 short customer quotes builds trust and helps conversions. We can pull these from your Google or Yelp reviews.",
    options: [
      {
        label: "A",
        value: "dev_picks",
        description:
          "We'll pick 3 strong reviews from Google/Yelp — you just approve them",
        tooltip:
          "We search your Google and Yelp listings for the most compelling, relevant reviews and present them for your approval before publishing.",
      },
      {
        label: "B",
        value: "client_sends",
        description:
          "You send us 3 quotes you'd like featured (with first name or initials)",
        tooltip:
          "You hand-pick the exact quotes and customer names/initials you want displayed. Gives you full control over which feedback represents your brand.",
      },
    ],
    customPlaceholder: "e.g., Skip this for now, add later...",
  },
  {
    id: 6,
    type: "choice",
    title: "Menu Dietary Labels",
    description:
      "We want to tag menu items with dietary icons (V = Vegan, GF = Gluten-Free, DF = Dairy-Free) so customers can quickly find what fits their diet.",
    options: [
      {
        label: "A",
        value: "client_sends",
        description: "You send us a list of which items are V, GF, or DF",
        tooltip:
          "You provide the definitive dietary classification for each menu item. Most accurate since you know your ingredients and prep methods best.",
      },
      {
        label: "B",
        value: "dev_labels",
        description:
          "We'll label them based on the current menu ingredients — you review and correct",
        tooltip:
          "We analyze your menu and make our best guess at dietary labels. You then review and correct any mistakes before we publish. Faster for you upfront.",
      },
    ],
    customPlaceholder: "e.g., We'll update the menu PDF first...",
  },
  {
    id: 7,
    type: "choice",
    title: "Catering Form Submissions",
    description:
      "Right now, catering form submissions open the customer's email app (mailto link). Some customers may not have email configured, which means lost inquiries.",
    options: [
      {
        label: "A",
        value: "direct_form",
        description:
          "Switch to a form that emails submissions directly to sd.lavidafit@gmail.com",
        tooltip:
          "Submissions go straight to your inbox without the customer needing an email app. Works on all devices. Significantly reduces lost inquiries.",
      },
      {
        label: "B",
        value: "keep_mailto",
        description: "Keep the current email-app approach",
        tooltip:
          "The current mailto approach opens the customer's default email app (Mail, Gmail, etc). Simple but some mobile users don't have email configured, losing those leads.",
      },
    ],
    customPlaceholder: "e.g., Use a different email address...",
  },
  {
    id: 8,
    type: "text",
    title: "Business Details Confirmation",
    description:
      "For Google search optimization, we need to confirm these details are current.",
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
        defaultValue: "Mon-Sat 8AM-8PM, Sun 9AM-6PM",
      },
      {
        label: "Cuisine Type for Google",
        key: "cuisine",
        placeholder: "Edit if incorrect",
        defaultValue: "Healthy Food",
      },
    ],
  },
];
