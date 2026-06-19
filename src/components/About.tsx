import { FiMapPin, FiCode } from "react-icons/fi";
import { profile, languages } from "../data/profile";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";

const cardBase =
  "rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-24">
      <SectionReveal>
        <SectionHeading index="01" title="About" />
      </SectionReveal>

      {/* Bento grid */}
      <SectionReveal>
        <div className="grid gap-4 md:grid-cols-3">
          {/* Bio — large */}
          <div className={`${cardBase} md:col-span-2`}>
            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              Who I am
            </span>
            <div className="mt-4 space-y-4 leading-relaxed text-muted">
              {profile.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* Languages — tall */}
          <div className={`${cardBase} md:row-span-2`}>
            <h3 className="font-display text-lg font-semibold">Languages</h3>
            <ul className="mt-5 space-y-5">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium">{lang.name}</span>
                    <span className="text-xs text-muted">{lang.note}</span>
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 flex-1 rounded-full ${
                          i < lang.level ? "bg-accent" : "bg-border"
                        }`}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className={cardBase}>
            <FiMapPin className="text-accent" size={20} />
            <p className="mt-3 font-medium">{profile.location}</p>
            <p className="text-sm text-muted">{profile.origin}</p>
          </div>

          {/* Currently */}
          <div className={cardBase}>
            <FiCode className="text-accent" size={20} />
            <p className="mt-3 font-medium">Currently</p>
            <p className="text-sm text-muted">
              Studying CS at WSEI, and {profile.status.toLowerCase()}.
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
