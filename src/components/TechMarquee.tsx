import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiSupabase,
  SiReactrouter,
  SiReactquery,
  SiLeaflet,
  SiGit,
  SiGithub,
} from "react-icons/si";

const techs: { Icon: IconType; name: string }[] = [
  { Icon: SiReact, name: "React" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiJavascript, name: "JavaScript" },
  { Icon: SiHtml5, name: "HTML5" },
  { Icon: SiCss, name: "CSS3" },
  { Icon: SiTailwindcss, name: "Tailwind" },
  { Icon: SiVite, name: "Vite" },
  { Icon: SiNodedotjs, name: "Node.js" },
  { Icon: SiExpress, name: "Express" },
  { Icon: SiSupabase, name: "Supabase" },
  { Icon: SiReactrouter, name: "React Router" },
  { Icon: SiReactquery, name: "TanStack Query" },
  { Icon: SiLeaflet, name: "Leaflet" },
  { Icon: SiGit, name: "Git" },
  { Icon: SiGithub, name: "GitHub" },
];

export default function TechMarquee() {
  return (
    // Purely decorative — the same skills are listed as text in the Skills grid,
    // so hide the whole marquee (icons included) from assistive tech.
    <div aria-hidden className="marquee-mask overflow-hidden">
      {/* Track holds two copies so the -50% translate loops seamlessly. */}
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {[...techs, ...techs].map((t, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2 text-muted">
            <t.Icon size={20} />
            <span className="text-sm font-medium">{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
