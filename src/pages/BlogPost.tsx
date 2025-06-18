import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Clock, Calendar } from 'lucide-react';
import Blogs from "../../public/data/blog.tsx"

const BlogPost = () => {
  const params = useParams();
  const navigate = useNavigate();
  const slug = params["*"] || params["slug"];
  const blog = Blogs.find((b) => `/blog/${b.slug}` === `/blog/${slug}` || b.slug === slug);

  console.log(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  if (!blog) {
    return (
      <div className="bg-white min-h-screen font-inter text-black flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-3">Blog Post Not Found</h2>
            <button
              className="mt-3 px-4 py-2 rounded-full bg-black text-white font-medium hover:bg-black/80 transition"
              onClick={() => navigate("/blog")}
            >
              Go Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-inter text-black flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center pt-[80px] pb-12 px-4">
        <article className="w-full max-w-3xl bg-white p-6 sm:p-9">
          <Link to="/blog" className="text-sm text-black/55 hover:text-black mb-5 inline-block">
            ← Back to Blog
          </Link>
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[195px] sm:h-[260px] object-cover rounded-xl shadow mb-6"
            loading="lazy"
          />
          <h1 className="text-2xl sm:text-4xl font-light mb-2">{blog.title}</h1>
          <div className="flex items-center justify-start gap-4 mt-4 mb-10">
            <span className="text-sm font-medium text-black bg-gray-200 px-3 py-1 rounded-md">
              {blog.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock size={14} className="mr-1" />
              {blog.readTime}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar size={14} className="mr-1" />
              {blog.date}
            </div>
          </div>
          <div className="prose prose-neutral max-w-none text-black/80 text-base leading-relaxed mb-2">
            {blog.content}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
