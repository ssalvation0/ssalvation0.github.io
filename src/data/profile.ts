export type Social = {
  label: string;
  href: string;
  handle: string;
  icon: "github" | "telegram" | "email";
};

export type Language = {
  name: string;
  level: number; // out of 5
  note: string;
};

export const profile = {
  name: "Nazar Stefiniv",
  role: "Web Developer",
  // Short, concrete hero line — real projects, real numbers, real stack.
  tagline:
    "A Computer Science student who learns by shipping real products. Recent builds: a 3,800-set WoW transmog catalog and a full online service-booking platform — React, TypeScript and Supabase.",
  location: "Lublin, Poland",
  origin: "Originally from Ukraine",
  status: "Open to internships & junior roles",
  email: "mrawesomey459@gmail.com",
  bio: [
    "I'm a Computer Science student from Ukraine, now based in Lublin, Poland. I got into development by building things I wanted to exist, then learning whatever each project needed to make them real.",
    "I work across the whole stack: designing the interface, modelling data in Supabase/Postgres, integrating external APIs, and getting it live. I care about readable code and interfaces that stay out of the user's way.",
  ],
};

export const socials: Social[] = [
  {
    label: "GitHub",
    href: "https://github.com/ssalvation0",
    handle: "ssalvation0",
    icon: "github",
  },
  {
    label: "Telegram",
    href: "https://t.me/sssalvation",
    handle: "@sssalvation",
    icon: "telegram",
  },
  {
    label: "Email",
    href: "mailto:mrawesomey459@gmail.com",
    handle: "mrawesomey459@gmail.com",
    icon: "email",
  },
];

export const languages: Language[] = [
  { name: "Ukrainian", level: 5, note: "Native" },
  { name: "English", level: 4, note: "Professional working" },
  { name: "Polish", level: 3, note: "Intermediate" },
];
