import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from "@/lib/content";
import { Reveal, RevealGroup } from "@/components/animation/Reveal";
import SplitText from '@/components/animation/SplitText';

const Blog = () => {
  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <Reveal className="py-20 bg-gradient-to-br from-gray-50 to-white" distance={20}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SplitText
              text="Blog"
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8"
              delay={80}
              duration={2}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={undefined}
            />
            <p className="text-l sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Thoughts, insights, and experiences from my journey in Product development.
            </p>
          </div>
        </Reveal>

        {/* Featured Post */}
        {featuredPost && (
          <Link to={`/blog/${featuredPost.slug}`}>
            <Reveal className="py-12" delay={0.04}>
              <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center justify-between gap-8 mb-4">
                        <span className="text-sm text-center font-medium text-white bg-gray-900 px-3 py-1  rounded-xl sm:rounded-full">
                          {featuredPost.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock size={14} className="mr-1" />
                          <p className="text-center">
                            {featuredPost.readTime}
                          </p>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {featuredPost.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {featuredPost.formattedDate}
                        </div>
                        <button className="flex items-center text-gray-900 hover:text-gray-700 transition-colors">
                          Read More <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Link>
        )}

        {/* Category Filter */}
        <Reveal className="py-8" delay={0.06}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Blog Posts Grid */}
        <section className="pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
              {filteredPosts.map((post) => (
                <Reveal key={post.slug}>
                  <Link to={`/blog/${post.slug}`}>
                    <article className="group cursor-pointer">
                      <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                              {post.category}
                            </span>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Clock size={14} className="mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar size={14} className="mr-1" />
                              {post.formattedDate}
                            </div>
                            <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </RevealGroup>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};


export default Blog;
