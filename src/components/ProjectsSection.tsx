import { portfolioContent } from "@/lib/content";
import { Reveal, RevealGroup } from "./animation/Reveal";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => (
  <section className="w-full px-2 sm:px-0">
    <RevealGroup stagger={0.12}>
      <Reveal>
        <h2 className="mb-5 text-lg font-light leading-tight font-inter sm:text-[2rem]">
          Selected Side Projects
        </h2>
      </Reveal>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {portfolioContent.projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </RevealGroup>
  </section>
);

export default ProjectsSection;