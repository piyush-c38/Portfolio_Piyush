import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from '../components/Footer';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { portfolioSettings, projectEntries, serviceEntries } from "@/lib/content";

const ServiceDetail = () => {
  const { slug } = useParams();
  const currentService = serviceEntries.find((entry) => entry.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!currentService) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-20 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
            <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
            <Link to="/services" className="text-gray-900 hover:text-gray-700 transition-colors">
              ← Back to Services
            </Link>
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
        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/services"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
        </div>

        {/* Service Header */}
        <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{currentService.title}</h1>
            <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {currentService.description}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-neutral max-w-none">
              <MarkdownRenderer content={currentService.content} />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Sample Work</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectEntries.slice(0, 3).map((project) => (
                <Link key={project.slug} to={`/projects/${project.slug}`} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {project.publishedDate}
                        </div>
                        <a
                          href={project.liveDemoLink ?? project.githubLink ?? "#"}
                          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          View Project <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {currentService.reviews.map((review) => (
                <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <p className="text-gray-700 leading-relaxed mb-4">“{review.quote}”</p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-900">{review.name}</span>
                    {review.role ? ` · ${review.role}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interested in {currentService.title}?
            </h2>
            <p className="text-l sm:text-xl text-gray-600 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <a href={`mailto:${portfolioSettings.contactInformation.personalEmail}`} className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
