import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import Blogs from "../../public/data/blog.tsx"

const BlogCards = () => (
  <section className="px-2 sm:px-0">
    <div className="flex flex-row justify-between items-end mb-5">
      <h2 className="text-lg sm:text-[2rem] font-light font-inter leading-tight">
        Latest Blog Posts
      </h2>
      <Link
        to="/blog"
        className="rounded-full px-4 sm:px-5 py-2 bg-black/90 hover:bg-black text-white font-medium shadow transition text-xs sm:text-sm"
      >
        Show More
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
      {Blogs.slice(0, 4).map((post) => (
        <Link to={`/blog/${post.slug}`} key={post.slug}>
          <article key={post.id} className="group cursor-pointer">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-6">
                <h3 className="text-[18px] sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[14px] sm:text-xs font-medium text-gray-900 bg-gray-100 px-3 py-1 rounded-sm">
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-[14px] sm:text-xs">
                    <Clock size={14} className="mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <p className="text-[14px] sm:text-xs text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-[14px] sm:text-xs">
                    <Calendar size={14} className="mr-1" />
                    {post.date}
                  </div>
                  <ArrowRight size={16} className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </article>
        </Link>
      ))}
    </div>
  </section>
);

export default BlogCards;