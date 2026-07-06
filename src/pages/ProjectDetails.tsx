import { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Calendar, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { projectEntries } from "@/lib/content";

const ProjectDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectEntries.find((entry) => entry.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-20 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you are looking for does not exist.</p>
            <button onClick={() => navigate("/projects")} className="text-gray-900 hover:text-gray-700 transition-colors">
              ← Back to Projects
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link to="/projects" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to Projects
          </Link>
        </div>

        <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{project.title}</h1>
            <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto">{project.description}</p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} />
                {project.publishedDate}
              </span>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <img src={project.coverImage} alt={project.title} className="w-full h-[280px] sm:h-[420px] object-cover rounded-2xl shadow-lg" />
          </div>
        </section>

        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 mb-8">
              {project.technologies.map((technology) => (
                <span key={technology} className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full">{technology}</span>
              ))}
            </div>

            <div className="prose prose-neutral max-w-none">
              <MarkdownRenderer content={project.content} />
            </div>

            {project.galleryImages.length > 0 && (
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.map((image) => (
                  <figure key={image.url} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                    <img src={image.url} alt={image.alt ?? project.title} className="h-64 w-full object-cover" />
                    {image.caption && <figcaption className="px-4 py-3 text-sm text-gray-500">{image.caption}</figcaption>}
                  </figure>
                ))}
              </div>
            )}

            <div className="mt-12 flex flex-wrap gap-3">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-gray-900 px-5 py-3 text-white hover:bg-gray-800 transition-colors">
                  GitHub <Github size={16} className="ml-2" />
                </a>
              )}
              {project.liveDemoLink && (
                <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                  Live Demo <ExternalLink size={16} className="ml-2" />
                </a>
              )}
              {project.additionalLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-gray-300 px-5 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                  {link.label} <ExternalLink size={16} className="ml-2" />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
