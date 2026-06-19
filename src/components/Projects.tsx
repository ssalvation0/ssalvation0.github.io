import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";
import SectionReveal from "./SectionReveal";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-24">
      <SectionReveal>
        <SectionHeading
          index="03"
          title="Projects"
          kicker="Things I've designed and built on my own, from the first component to the finished app."
        />
      </SectionReveal>

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
