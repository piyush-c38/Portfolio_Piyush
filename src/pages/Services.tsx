import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from '../components/Footer';
import { Code, Palette, Globe, Smartphone, Database, Zap } from 'lucide-react';
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Vue.js, and Node.js for optimal performance and user experience.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "SEO Friendly"],
      price: "Starting at $2,500",
      slug: "web-development"
    },
    {
      id: 2,
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices.",
      features: ["React Native", "Cross-platform", "Native Performance", "App Store Deployment"],
      price: "Starting at $5,000",
      slug: "mobile-development"
    },
    {
      id: 3,
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that combine aesthetics with functionality to create intuitive and engaging interfaces.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,500",
      slug: "ui-ux-design"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      icon: Globe,
      description: "Complete e-commerce platforms with payment integration, inventory management, and analytics to grow your online business.",
      features: ["Payment Gateway", "Inventory Management", "Analytics Dashboard", "Mobile Optimized"],
      price: "Starting at $4,000",
      slug: "#"
    },
    {
      id: 5,
      icon: Database,
      title: "Backend Development",
      description: "Robust backend systems and APIs that power your applications with scalable architecture and secure data management.",
      features: ["RESTful APIs", "Database Design", "Cloud Integration", "Security Implementation"],
      price: "Starting at $3,000",
      slug: "#"
    },
    {
      id: 6,
      icon: Zap,
      title: "Performance Optimization",
      description: "Boost your application's speed and efficiency with comprehensive performance audits and optimization strategies.",
      features: ["Speed Optimization", "Code Refactoring", "SEO Improvement", "Analytics Setup"],
      price: "Starting at $1,000",
      slug: "#"
    }
  ];

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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Services</h1>
            <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your needs. From web development
              to mobile apps, I deliver high-quality results that drive your business forward.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link to={service.slug}>
                  <div key={service.id} className="group">
                    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                      <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                        <service.icon size={24} className="text-white" />
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
                          <span className="text-lg font-semibold text-gray-900">
                            {service.price}
                          </span>
                          <button className="text-gray-600 hover:text-gray-900 transition-colors">
                            Learn More →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
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
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Get Free Consultation
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;