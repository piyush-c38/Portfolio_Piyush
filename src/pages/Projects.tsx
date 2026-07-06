import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projectEntries } from "@/lib/content";

const Projects = () => {
  const featuredProject = projectEntries.find((project) => project.featured) ?? projectEntries[0];
  const otherProjects = projectEntries.filter((project) => project.slug !== featuredProject?.slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Projects</h1>
            <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of product builds, experiments, and shipped ideas. Each project here is backed by markdown content and editable media.
            </p>
          </div>
        </section>

        {featuredProject && (
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Project</h2>
              <Link to={`/projects/${featuredProject.slug}`} className="block group">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img src={featuredProject.coverImage} alt={featuredProject.title} className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex flex-wrap gap-2">
                          {featuredProject.technologies.slice(0, 4).map((technology) => (
                            <span key={technology} className="text-xs font-medium text-white bg-gray-900 px-3 py-1 rounded-full">{technology}</span>
                          ))}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {featuredProject.publishedDate}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredProject.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{featuredProject.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-medium">Read case study</span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project) => (
                <Link to={`/projects/${project.slug}`} key={project.slug} className="group">
                  <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                    <div className="h-48 overflow-hidden">
                      <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                          {project.featured ? "Featured" : "Project"}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {project.publishedDate}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">{project.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((technology) => (
                          <span key={technology} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">{technology}</span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-900 font-medium">View project</span>
                        <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need something similar?</h2>
            <p className="text-l sm:text-xl text-gray-600 mb-8">
              I can help shape a product from the first idea through to launch.
            </p>
            <Link to="/services" className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Explore Services <ExternalLink size={16} className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
