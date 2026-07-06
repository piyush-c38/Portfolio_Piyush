import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from '../components/Footer';
import { ArrowRight, Code, Palette, Globe, Smartphone, Database, Zap, MessageSquareQuote } from 'lucide-react';
import { Link } from "react-router-dom";
import { portfolioSettings, projectEntries, serviceEntries } from "@/lib/content";

const Services = () => {
  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your goals, requirements, and target audience to create a comprehensive project plan."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and prototypes to visualize the solution before development begins."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Building your solution with modern technologies while ensuring quality through rigorous testing."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deploying your project and providing ongoing support to ensure continued success."
    }
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const iconMap: Record<string, typeof Code> = {
    "Web Development": Code,
    "Mobile Development": Smartphone,
    "UI/UX Design": Palette,
    "E-commerce Solutions": Globe,
    "Backend Development": Database,
    "Performance Optimization": Zap,
  };

  const clientReviews = serviceEntries.flatMap((service) => service.reviews);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Services</h1>
            <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {portfolioSettings.contactInformation.availability}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceEntries.map((service) => {
                const Icon = iconMap[service.title] ?? Code;

                return (
                <Link to={`/services/${service.slug}`} key={service.slug}>
                  <div className="group">
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                        <Icon size={24} className="text-white" />
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="border-t border-gray-100 pt-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-gray-900">View details</span>
                          <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A structured approach to delivering exceptional results for every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample Work */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Sample Work</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Recent projects that show the kinds of problems I like to solve.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projectEntries.slice(0, 4).map((project) => (
                <Link key={project.slug} to={`/projects/${project.slug}`} className="group">
                  <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 h-full">
                    <img src={project.coverImage} alt={project.title} className="h-48 w-full object-cover" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A few words from the teams and reviewers who’ve seen the work in context.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {clientReviews.slice(0, 4).map((review, index) => (
                <div key={`${review.name}-${index}`} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <MessageSquareQuote className="text-gray-900 mb-4" size={24} />
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

        {/* FAQ */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">FAQ</h2>
              <p className="text-xl text-gray-600">A few common questions about how I work.</p>
            </div>

            <div className="space-y-4">
              {[
                ["Do you work on fixed scope or iterative projects?", "Both. The best format depends on the clarity of the product problem."],
                ["Can you collaborate with an existing design system?", "Yes. I prefer to adapt to the existing system instead of replacing it unnecessarily."],
                ["Do you handle deployment and handoff?", "Yes. I keep delivery static-site friendly and deployment-ready for GitHub Pages and similar hosting."],
              ].map(([question, answer]) => (
                <details key={question} className="group rounded-xl border border-gray-200 bg-white p-5 open:shadow-sm">
                  <summary className="cursor-pointer list-none font-semibold text-gray-900 flex items-center justify-between">
                    <span>{question}</span>
                    <span className="text-gray-400 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${portfolioSettings.contactInformation.personalEmail}`} className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Get Free Consultation
              </a>
              <Link to="/portfolio" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;