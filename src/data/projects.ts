export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  liveNote?: string;
  codeUrl: string;
  // Screenshot filenames in /public/projects/ (referenced via BASE_URL). Optional —
  // ProjectCard shows a styled placeholder until the image is added.
  screenshot?: string; // portrait (~0.83) — desktop preview
  screenshotWide?: string; // landscape (16:9) — mobile preview
  accent: string; // tailwind gradient classes for the card header
  wip?: boolean; // shows an "In development" badge on the card
};

export const projects: Project[] = [
  {
    name: "TransmogVault",
    tagline: "Full-stack WoW transmog catalog & farming companion",
    description:
      "A catalog and farming companion for World of Warcraft transmog sets. Browse thousands of appearances, filter by source and expansion, save favorites, build collections, and rate sets.",
    highlights: [
      "3,800+ transmog sets pulled from Wowhead's tooltip API, enriched via the Blizzard Game Data API",
      "Filters by class, armor type, source, expansion and quality, plus full-text search",
      "User accounts via Supabase: favorites, collections, ratings, comments and recently-viewed",
    ],
    stack: [
      "React",
      "TanStack Query",
      "React Router",
      "Node.js",
      "Express",
      "Supabase",
    ],
    liveUrl: "https://transmogvault.vercel.app/",
    liveNote: "First load can take a moment while the catalog warms up.",
    codeUrl: "https://github.com/ssalvation0/TransmogVault",
    screenshot: "transmogvault.jpg",
    screenshotWide: "transmogvault-wide.jpg",
    accent: "from-violet-500 to-indigo-600",
    wip: true,
  },
  {
    name: "Termino",
    tagline: "Online service booking platform",
    description:
      "A booking platform for local service providers — \"rezerwacja usług online\". Customers find firms on a map, browse services and reviews, and book smart time-slots; providers manage their firm, services and bookings from a dashboard.",
    highlights: [
      "Map-based provider search with Leaflet, service detail pages and a full booking flow",
      "Smart time-slot generation, reviews & ratings, and a confirmation step",
      "Provider dashboard with firm onboarding, settings and booking management",
      "Auth, profiles and persisted state with Supabase + Zustand",
    ],
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Zustand",
      "React Router",
      "Leaflet",
    ],
    liveUrl: "https://ssalvation0.github.io/termino-app/",
    codeUrl: "https://github.com/ssalvation0/termino-app",
    screenshot: "termino.jpg",
    screenshotWide: "termino-wide.jpg",
    accent: "from-emerald-500 to-teal-600",
  },
  {
    name: "Band Landing Page",
    tagline: "Responsive single-page concert site",
    description:
      "A responsive one-page landing for a music band concept — hero, about, a concert schedule with ticket booking, gallery and contacts. Built from scratch as a front-end exercise, focused on clean layout and interaction.",
    highlights: [
      "Fully responsive layout with a mobile menu and smooth in-page navigation",
      "Interactive concert schedule with ticket-booking actions",
      "Hand-written vanilla JavaScript — no frameworks or libraries",
      "Clean semantic HTML and modern CSS (Flexbox & Grid)",
    ],
    stack: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://ssalvation0.github.io/testtask/",
    codeUrl: "https://github.com/ssalvation0/testtask",
    screenshot: "testtask.jpg",
    screenshotWide: "testtask-wide.jpg",
    accent: "from-amber-500 to-orange-600",
  },
];
