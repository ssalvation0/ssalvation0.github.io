import { FiArrowUpRight } from "react-icons/fi";
import { profile } from "../data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-24">
      <SectionReveal>
        <SectionHeading index="05" title="Contact" />
      </SectionReveal>

      <SectionReveal delay={0.1}>
        <div className="rounded-3xl border border-border bg-surface p-8 text-center sm:p-14">
          <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Let's talk
          </h3>
          <p className="mx-auto mt-4 max-w-md text-balance text-muted">
            I'm looking for internships and junior developer roles. Got an
            opportunity, or just want to connect? I'd be glad to hear from you.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
          >
            Email me <FiArrowUpRight />
          </a>

          <div className="mt-8 flex justify-center">
            <SocialLinks />
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
