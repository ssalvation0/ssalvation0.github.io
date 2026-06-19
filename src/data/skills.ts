export type SkillGroup = {
  title: string;
  items: string[];
};

// Grounded in what's actually used across TransmogVault and Termino.
export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "State & Data",
    items: [
      "Zustand",
      "TanStack Query",
      "React Router",
      "REST API integration",
    ],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Supabase (Postgres, Auth, Storage)"],
  },
  {
    title: "Tools & More",
    items: ["Vite", "Git & GitHub", "Leaflet (maps)"],
  },
  {
    title: "Soft skills",
    items: [
      "Teamwork",
      "Communication",
      "Problem-solving",
      "Self-learning",
      "Attention to detail",
      "Creativity",
      "Responsibility",
    ],
  },
];
