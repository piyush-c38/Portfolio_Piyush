import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { servicesContent } from "@/lib/content";
import { openEmailClient } from "@/lib/site";
import { Reveal, RevealGroup } from "@/components/Reveal";
import ParticleText from '../components/ParticleText';
import ScrollIndicator from "@/components/ScrollIndicator";

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-0">
        <div className="w-full h-screen bg-[#09090f] flex flex-col justify-center items-center text-center">
          <div className="max-w-7xl w-[80%]">
            <ParticleText
              text={servicesContent.hero_title}
              particleSize={2.2}
              density={1}
              color="#ffffff"
              highlightColor="#aee0ff"
              scatter={90}
              gatherDuration={1600}
              stagger={660}
              pointerRepel={42}
              repelRadius={120}
              idleDrift={0.8}
              trigger="mount"
              fontSize="clamp(3.5rem, 13vw, 9rem)"
              fontWeight={800}
              fontFamily="inherit"
              glow
            />
          </div>
          <ScrollIndicator
            textColor="text-[#e3f4ff]"
            position="center"
            hideAfterViewport
          />
        </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto text-center my-20">
              {servicesContent.hero_description}
            </div>
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center" stagger={0.4}>
              {servicesContent.services.map((service) => (
                <Reveal key={service.slug}>
                  <Link to={`/services/${service.slug}`}>
                    <div className="group max-w-96">
                      <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
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
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>

        <Reveal className="py-20 bg-gray-100" delay={0.04}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">My Process</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A structured approach to delivering exceptional results for every project
              </p>
            </div>

            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.48}>
              {servicesContent.process.map((item) => (
                <Reveal key={item.step}>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </Reveal>

        <Reveal className="py-20" delay={0.28}>
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
        </Reveal>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
