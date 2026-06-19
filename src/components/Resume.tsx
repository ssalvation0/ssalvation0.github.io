import { FiDownload } from "react-icons/fi";
import { education } from "../data/education";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-5xl px-5 py-24">
      <SectionReveal>
        <SectionHeading
          index="04"
          title="Resume"
          kicker="My academic background, and where I am now."
        />
      </SectionReveal>

      <SectionReveal delay={0.05}>
        <a
          href={`${import.meta.env.BASE_URL}Nazar-Stefiniv-CV.pdf`}
          target="_blank"
          rel="noreferrer noopener"
          className="mb-12 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
        >
          <FiDownload /> Download CV (PDF)
        </a>
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <h3 className="font-display text-lg font-semibold">Education</h3>
        <ol className="mt-6 border-l border-border">
          {education.map((item) => (
            <li key={item.title} className="relative pb-10 pl-8 last:pb-0">
              {/* Timeline dot */}
              <span className="absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full border-2 border-bg bg-accent" />
              <span className="font-mono text-xs text-accent">{item.period}</span>
              <h4 className="mt-1 font-semibold">{item.title}</h4>
              <p className="text-sm text-muted">{item.org}</p>
              {item.detail && (
                <p className="mt-1.5 text-sm text-muted/80">{item.detail}</p>
              )}
            </li>
          ))}
        </ol>
      </SectionReveal>
    </section>
  );
}
