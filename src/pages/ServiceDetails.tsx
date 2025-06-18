import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from '../components/Footer';
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react';

const ServiceDetail = () => {
  const { service } = useParams();

  const serviceData = {
    'web-development': {
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies',
      projects: [
        {
          id: 1,
          title: 'E-commerce Platform',
          description: 'A full-featured e-commerce platform built with React and Node.js',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
          technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          completedDate: 'Nov 2024',
          link: '#'
        },
        {
          id: 2,
          title: 'SaaS Dashboard',
          description: 'Analytics dashboard for SaaS companies with real-time data visualization',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
          technologies: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS'],
          completedDate: 'Oct 2024',
          link: '#'
        },
        {
          id: 3,
          title: 'Corporate Website',
          description: 'Modern corporate website with CMS integration',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
          technologies: ['React', 'Gatsby', 'GraphQL', 'Contentful'],
          completedDate: 'Sep 2024',
          link: '#'
        }
      ]
    },
    'mobile-development': {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      projects: [
        {
          id: 1,
          title: 'Fitness Tracking App',
          description: 'Cross-platform fitness app with workout tracking and social features',
          image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop',
          technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
          completedDate: 'Dec 2024',
          link: '#'
        },
        {
          id: 2,
          title: 'Food Delivery App',
          description: 'On-demand food delivery application with real-time tracking',
          image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
          technologies: ['React Native', 'Node.js', 'Socket.io', 'Google Maps'],
          completedDate: 'Aug 2024',
          link: '#'
        }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      description: 'User-centered design solutions',
      projects: [
        {
          id: 1,
          title: 'Banking App Redesign',
          description: 'Complete UX overhaul of a mobile banking application',
          image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
          technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
          completedDate: 'Oct 2024',
          link: '#'
        },
        {
          id: 2,
          title: 'E-learning Platform Design',
          description: 'UI/UX design for an online learning platform',
          image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
          technologies: ['Figma', 'Sketch', 'Marvel', 'Zeplin'],
          completedDate: 'Jul 2024',
          link: '#'
        }
      ]
    }
  };

  const currentService = serviceData[service as keyof typeof serviceData];

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

        {/* Projects Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Previous Works</h2>
            
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

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Interested in {currentService.title}?
            </h2>
            <p className="text-l sm:text-xl text-gray-600 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Get Free Consultation
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
