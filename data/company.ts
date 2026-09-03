export const facebookPageUrl =
  "https://www.facebook.com/profile.php?id=61563188068067";

/**
 * -----------------------------------------------------------------------------
 * COMPANY PROFILE — single source of truth
 * -----------------------------------------------------------------------------
 * Change the company name, contact details, statistics and narrative content
 * here and it updates across every page, the navigation, the footer, the
 * metadata and the sitemap.
 */

export const company = {
  name: "Reliable Consulting & Construction",
  shortName: "Reliable",
  /** Used in the logo lockup — two lines of the wordmark. */
  logo: { line1: "RELIABLE", line2: "CONSULTING & CONSTRUCTION" },
  legalName: "Reliable Consulting & Construction Pvt. Ltd.",
  tagline: "Your dream home. Our commitment.",
  description:
    "A house engineering and construction consultancy in Bharatpur, Chitwan, providing 2D house plans, 3D exterior design, structural analysis, municipality plan-pass support and site supervision.",

  /** One-paragraph elevator pitch, used on the home page and in metadata. */
  intro:
    "Reliable Consulting & Construction helps homeowners move confidently from an initial idea to a buildable home. From our Bharatpur office, we coordinate house planning, exterior design, structural analysis, municipality documentation and construction supervision as one practical service.",

  url: "https://reliable-construction-website.vercel.app",

  contact: {
    officeName: "Main Office",
    address: {
      line1: "Beside Hakimchowk Bigmart",
      line2: "Bharatpur",
      city: "Chitwan",
      country: "Nepal",
    },
    phone: "056-517722",
    phoneAlt: "9715517722",
    whatsappUrl: "https://wa.me/9779715517722",
    coordinates: {
      latitude: 27.668847064236267,
      longitude: 84.434014004679,
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=27.668847064236267%2C84.434014004679",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s27.668847064236267,84.434014004679!6i17",
    email: "rcconstruction722@gmail.com",
  },

  social: [
    { label: "Facebook", href: facebookPageUrl, icon: "facebook" },
    // Placeholder profiles — replace with the company's final account URLs.
    { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
    { label: "TikTok", href: "https://www.tiktok.com/", icon: "tiktok" },
    { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
  ],
} as const;

export const vision = {
  title: "Vision",
  body: "To make safe, practical and well-designed homes easier for families to plan and build with confidence.",
};

export const mission = {
  title: "Mission",
  body: "To coordinate planning, design, structural safety, municipality documentation and site supervision so every home moves smoothly from idea to construction.",
};

export const values = [
  {
    title: "Clear Advice",
    body: "We explain options, constraints and next steps in plain language so homeowners can make informed decisions.",
  },
  {
    title: "Coordinated Drawings",
    body: "The floor plan, exterior, structure and municipality set are developed together, reducing contradictions later.",
  },
  {
    title: "Safety & Compliance",
    body: "Structural decisions and approval documents are prepared with safety, buildability and local requirements in view.",
  },
  {
    title: "Practical Site Support",
    body: "We stay available during construction to clarify drawings and help the work follow the approved design intent.",
  },
];

/** Delivery process — horizontal timeline on desktop, vertical on mobile. */
export const process = [
  {
    title: "Discuss",
    body: "We understand your family needs, preferred style, plot, room requirements and working budget.",
  },
  {
    title: "Study the Site",
    body: "Plot measurements, access, orientation and local requirements establish the basis for the house plan.",
  },
  {
    title: "Plan & Design",
    body: "We develop the 2D layout, 3D exterior and structural design as one coordinated package.",
  },
  {
    title: "Approve",
    body: "Technical documents are prepared for municipality plan-pass submission and construction use.",
  },
  {
    title: "Build & Supervise",
    body: "Site supervision and design clarification help the construction follow the approved drawings and intent.",
  },
];

/** Primary navigation. Add a route here and it appears in desktop + mobile nav. */
export const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/#team" },
  { label: "Updates", href: "/#updates" },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
] as const;
