import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from '../components/Footer';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';

const ServiceDetail = () => {
  const { service } = useParams();

  const serviceData = {
    'ai-automation': {
      title: 'AI Automation & Agentic AI',
      description: 'Automate repetitive business workflows using AI agents, LLMs, n8n, MCP, and custom integrations.',
      projects: [
        {
          id: 1,
          title: 'Rescue The Animal',
          description: 'A platform to help users find the right rescue organization during emergencies.',
          image: 'https://res.cloudinary.com/yfhun3wh/image/upload/v1783780341/rta-2_mywtmu.jpg',
          technologies: ['React', 'Node.js', 'MongoDB'],
          completedDate: 'June 2026',
          link: 'https://piyush-c38.github.io/rescue-the-animal-rta/'
        },
        {
          id: 2,
          title: 'Git Insight',
          description: 'An AI-powered GitHub repository analysis platform.',
          image: 'https://res.cloudinary.com/yfhun3wh/image/upload/v1783493671/pexels-realtoughcandy-11035539_wuxewn.jpg',
          technologies: ['Next.js', 'Node.js', 'RAG', 'LLM'],
          completedDate: 'May 2026',
          link: 'https://git-insight-one.vercel.app/'
        }
      ],
      pricing: [
        // {
        //   id: 1,
        //   title: 'Basic',
        //   description: 'Basic Portfolio/Product app ChatBot',
        //   features: ['4-day delivery', '2 Revisions', '2 pages', 'Design customization', 'Content upload', 'Responsive design', 'Source code', 'Detailed code comments', 'Additional Cost for Additional page and features'],
        //   price: 'Starting at ₹7,990.00',
        // },
        // {
        //   id: 2,
        //   title: 'Standard',
        //   description: 'Business App with 6–7 pages, React Frontend + Node backend + Database ',
        //   features: ['8-day delivery', '2 Revisions', '7 pages', 'Design customization', 'Content upload', 'Admin Page', 'Responsive design', 'Source code', 'Detailed code comments', 'Additional Cost for Additional page and features'],
        //   price: 'Starting at ₹38,990.00',
        // },
        // {
        //   id: 3,
        //   title: 'Premium',
        //   description: 'Full stack web app/SaaS MVP with auth, APIs, dashboard & database. E-commerce.',
        //   features: ['25-day delivery', '4 Revisions', '10 pages', 'Design customization', 'Content upload','Admin Page', 'Responsive design', 'Source code', 'Detailed code comments', 'Additional Cost for Additional page and features'],
        //   price: 'Starting at ₹1,04,990.00',
        // },
        {
          id: 1,
          title: 'Custom AI Solution',
          description: 'RAG, LLM, and Agentic AI solutions tailored to your business needs.',
          features: ['Custom AI Agents', 'RAG Applications', 'LLM Integrations', 'Workflow Automation', 'Internal Business Tools', 'Chatbots'],
          price: 'Custom Pricing',
        }
      ]
    },
    'full-stack': {
      title: 'Full-Stack Web Applications',
      description: 'Production-ready web applications built with modern technologies, optimized for performance, scalability, and maintainability.',
      projects: [
        {
          id: 1,
          title: 'Rescue The Animal',
          description: 'A platform to help users find the right rescue organization during emergencies.',
          image: 'https://res.cloudinary.com/yfhun3wh/image/upload/v1783780341/rta-2_mywtmu.jpg',
          technologies: ['React', 'Node.js', 'MongoDB'],
          completedDate: 'June 2026',
          link: 'https://piyush-c38.github.io/rescue-the-animal-rta/'
        },
        {
          id: 2,
          title: 'CA Potfolio Website',
          description: 'A portfolio website for a Chartered Accountant showcasing services and expertise.',
          image: 'https://res.cloudinary.com/yfhun3wh/image/upload/v1785060861/ca_vqpsiw.jpg',
          technologies: ['Vite', 'Node.js'],
          completedDate: 'June 2026',
          link: 'https://piyush-c38.github.io/agency-ca-portfolio/'
        },
        {
          id: 3,
          title: 'Roastwell & Co.',
          description: 'A coffee e-commerce website with product listings and booking.',
          image: 'https://res.cloudinary.com/yfhun3wh/image/upload/v1785060863/cafe_huq6ku.jpg',
          technologies: ['Vite', 'Node.js'],
          completedDate: 'March 2026',
          link: 'https://piyush-c38.github.io/agency-cafe-showcase/'
        },
        {
          id: 4,
          title: 'Xesis Coaching Institute',
          description: 'A coaching institute website with course listings and enrollment features.',
          image: 'https://res.cloudinary.com/yfhun3wh/image/upload/v1785060863/coaching_w7nyvc.jpg',
          technologies: ['Vite', 'Node.js'],
          completedDate: 'March 2026',
          link: 'https://piyush-c38.github.io/agency-xesis-coaching/'
        },
        {
          id: 5,
          title: 'Bright Smile Clinic',
          description: 'A dental clinic website with appointment booking and service information.',
          image: 'https://res.cloudinary.com/yfhun3wh/image/upload/v1785060862/clinic_pmrrlx.jpg',
          technologies: ['Vite', 'Node.js'],
          completedDate: 'Jan 2026',
          link: 'https://piyush-c38.github.io/agency-bright-smile-clinic/'
        },
        

      ],
      pricing: [
        {
          id: 1,
          title: 'Basic',
          description: 'Basic Portfolio/Product app setup with 1–2 pages, React Frontend + Node backend.',
          features: ['4-day delivery', '2 Revisions', '2 pages', 'Design customization', 'Content upload', 'Responsive design', 'Source code', 'Detailed code comments', 'Additional Cost for Additional page and features'],
          price: 'Starting at ₹7,990.00',
        },
        {
          id: 2,
          title: 'Standard',
          description: 'Business App with 6–7 pages, React Frontend + Node backend + Database ',
          features: ['8-day delivery', '2 Revisions', '7 pages', 'Design customization', 'Content upload', 'Admin Page', 'Responsive design', 'Source code', 'Detailed code comments', 'Additional Cost for Additional page and features'],
          price: 'Starting at ₹38,990.00',
        },
        {
          id: 3,
          title: 'Premium',
          description: 'Full stack web app/SaaS MVP with auth, APIs, dashboard & database. E-commerce.',
          features: ['25-day delivery', '4 Revisions', '10 pages', 'Design customization', 'Content upload','Admin Page', 'Responsive design', 'Source code', 'Detailed code comments', 'Additional Cost for Additional page and features'],
          price: 'Starting at ₹1,04,990.00',
        },
        {
          id: 4,
          title: 'Custom Web Solution',
          description: '',
          features: ['Frontend+Backend', 'Database', 'Advanced APIs & Authentication', 'Admin Page', 'SEO & Integrations', 'Design customization', 'Responsive design', 'Source code', 'Detailed code comments'],
          price: 'Custom Pricing',
        }
      ]
    }
  };

  const currentService = serviceData[service as keyof typeof serviceData];

  const handleEmailClick = () => {
    const isMobileOrTablet = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(
      navigator.userAgent
    );

    if (isMobileOrTablet) {
      window.location.href =
        "mailto:piyushch.ofc@gmail.com?subject=Project%20Inquiry";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=piyushch.ofc@gmail.com&su=Project%20Inquiry",
        "_blank"
      );
    }
  };

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

         {/* Work Samples */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Work Samples</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentService.projects.map((project) => (
                <div key={project.id} className="group">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={project.image}
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
                          {project.completedDate}
                        </div>
                        <a
                          href={project.link}
                          className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          View Project <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Details */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Plans & Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {currentService.pricing.map((pricing) => (
                <div key={pricing.id} className="group">
                  <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {pricing.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {pricing.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {pricing.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                     <div className="border-t border-gray-300 pt-6">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900">
                          {pricing.price}
                        </span>
                      </div>
                    </div>
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
            <button
              onClick={handleEmailClick}
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
