import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import { ArrowLeft, ExternalLink, Calendar } from "lucide-react";
import { getServiceBySlug } from "@/lib/content";
import { openEmailClient } from "@/lib/site";

const ServiceDetail = () => {
  const { service } = useParams();
  const currentService = getServiceBySlug(service);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!currentService) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <main className="pt-40 py-20">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/services"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Services
          </Link>
        </div>

        <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {currentService.title}
            </h1>
            <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {currentService.description}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {currentService.section_label}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentService.projects.map((project) => (
                <div key={project.title} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Calendar size={14} className="mr-2" />
                        {project.completed_date}
                      </div>
                        
                      <div className="flex flex-wrap items-center gap-4">
                        {project.slug && project.case_study ? (
                          <Link
                            to={`/services/${currentService.slug}/casestudy/${project.slug}`}
                            className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors font-medium"
                          >
                            Case Study <ExternalLink size={16} className="ml-2" />
                          </Link>
                        ) : null}
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors font-medium"
                        >
                          Demo <ExternalLink size={16} className="ml-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Pricing</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Flexible engagement options based on your project goals and scope.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentService.pricing.map((plan) => (
                <div
                  key={plan.title}
                  className="bg-white rounded-xl p-8 shadow-sm border border-gray-100"
                >
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{plan.title}</h3>
                  {plan.description && (
                    <p className="text-gray-600 mb-5 leading-relaxed">{plan.description}</p>
                  )}
                  <ul className="space-y-2 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-gray-600 text-sm">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gray-100 pt-6">
                    <div className="text-xl font-semibold text-gray-900">{plan.price}*</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-4xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className=" text-gray-600">
                *The above mentioned price is the Build Price only. Domain and Hosting costs are to be paid separately by the Client.
              </p>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interested?
            </h2>
            <p className="text-l sm:text-xl text-gray-600 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <button
              onClick={() => openEmailClient()}
              className=" bg-gray-900 text-white px-8 py-3 w-44 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Let's Build
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
