import { Calendar, ExternalLink } from "lucide-react";
import { PortfolioProject } from "@/lib/content";

type ProjectCardProps = {
  project: PortfolioProject;
};

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="group h-full overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#aee0ff]">
    <div className="h-48 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div className="flex h-[calc(100%-12rem)] flex-col p-6">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">{project.title}</h3>
      <p className="mb-4 flex-1 leading-relaxed text-gray-600">{project.description}</p>

      <div className="mb-4 flex items-center text-sm text-gray-500">
        <Calendar size={14} className="mr-2" />
        {project.completed_date}
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4">
        {project.project_link && (
          <a
            href={project.project_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-gray-900 transition-colors hover:text-gray-700"
          >
            Git Link <ExternalLink size={16} className="ml-2" />
          </a>
        )}
        {project.demo_link && (
          <a
            href={project.demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center font-medium text-gray-900 transition-colors hover:text-gray-700"
          >
            Live Demo <ExternalLink size={16} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  </article>
);

export default ProjectCard;