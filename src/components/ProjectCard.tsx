import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import type { Project } from "../data/projects";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [imgOk, setImgOk] = useState(true);
  const reversed = index % 2 === 1;
  const base = import.meta.env.BASE_URL;
  const tallSrc = project.screenshot
    ? `${base}projects/${project.screenshot}`
    : undefined;
  // Falls back to the portrait shot if no dedicated wide variant exists.
  const wideSrc = project.screenshotWide
    ? `${base}projects/${project.screenshotWide}`
    : tallSrc;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="grid items-stretch gap-8 rounded-3xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8 lg:grid-cols-2 lg:gap-12"
    >
      {/* Preview */}
      <div className={reversed ? "lg:order-2 lg:h-full" : "lg:h-full"}>
        <div className="group relative aspect-video overflow-hidden rounded-2xl border border-border lg:aspect-auto lg:h-full lg:min-h-[18rem]">
          {/* Gradient placeholder (also the fallback if the screenshot fails) */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90`}
          />
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-2xl font-bold text-white/90 drop-shadow">
              {project.name}
            </span>
          </div>
          {wideSrc && imgOk && (
            <picture>
              {/* Portrait on desktop (tall side-by-side card), landscape on mobile. */}
              {tallSrc && (
                <source media="(min-width: 1024px)" srcSet={tallSrc} />
              )}
              <img
                src={wideSrc}
                alt={`${project.name} screenshot`}
                loading="lazy"
                onError={() => setImgOk(false)}
                className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </picture>
          )}
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "lg:order-1" : ""}>
        <p className="font-mono text-xs text-accent">
          {String(index + 1).padStart(2, "0")} — {project.tagline}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <h3 className="font-display text-2xl font-bold tracking-tight">
            {project.name}
          </h3>
          {project.wip && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-1 text-xs font-medium text-amber-500">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber-500" />
              In development
            </span>
          )}
        </div>
        <p className="mt-4 leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-sm text-muted">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-surface-2 px-2.5 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-0.5"
            >
              Live Demo <FiArrowUpRight />
            </a>
          )}
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent hover:text-accent"
          >
            <FiGithub /> Code
          </a>
          {project.liveNote && (
            <span className="text-xs text-muted">{project.liveNote}</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
