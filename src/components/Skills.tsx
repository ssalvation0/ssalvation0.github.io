import { skillGroups } from "../data/skills";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import TechMarquee from "./TechMarquee";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-24">
      <SectionReveal>
        <SectionHeading
          index="02"
          title="Skills"
          kicker="The tools I reach for, grouped by where they fit. Most were learned hands-on while building the projects below."
        />
      </SectionReveal>

      <SectionReveal>
        <div className="mb-10 border-y border-border py-5">
          <TechMarquee />
        </div>
      </SectionReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <SectionReveal key={group.title} delay={i * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg bg-surface-2 px-3 py-1.5 text-sm font-medium"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>
  );
}
