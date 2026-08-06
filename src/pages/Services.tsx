import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { servicesContent } from "@/lib/content";
import { openEmailClient } from "@/lib/site";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">
        <section className="pt-28 pb-10 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              {servicesContent.hero_title}
            </h1>
            <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {servicesContent.hero_description}
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesContent.services.map((service) => (
                <Link to={`/services/${service.slug}`} key={service.slug}>
                  <div className="group">
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {service.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.card_features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600 text-sm">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="border-t border-gray-100 pt-6">
                        <span className="text-lg font-semibold text-gray-900">
                          Click for details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A structured approach to delivering exceptional results for every project
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {servicesContent.process.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {servicesContent.cta_title}
            </h2>
            <p className="text-xl text-gray-600 mb-8">{servicesContent.cta_description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => openEmailClient()}
                className="bg-gray-900 text-white px-8 py-3 w-44 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Let's Build
              </button>
              <Link to="/portfolio">
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  View Portfolio
                </button>
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
