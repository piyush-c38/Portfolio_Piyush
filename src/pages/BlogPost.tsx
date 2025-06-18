import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from 'lucide-react';

// Synchronized Blog Data with slugs & content
const BLOGS = [
  {
    slug: "minimalism-in-modern-ux",
    title: "Minimalism in Modern UX: Why Less Is More",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    content: (
      <>
        <p>
          In an increasingly noisy digital world, minimalism in UX is more than just a trend—it's a foundation for modern product design. By reducing clutter and focusing on essentials, designers help users accomplish tasks faster and with less friction.
        </p>
        <p className="mt-4">
          Simplicity encourages clarity. Clean layouts, white space, and thoughtful typography all contribute to a feeling of calm and confidence, letting users focus on what truly matters. Minimalism lets brands communicate with intent, making every interaction meaningful.
        </p>
        <p className="mt-4">
          <strong>Key Lessons:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Remove non-essential elements for user clarity.</li>
            <li>Every pixel should serve a purpose.</li>
            <li>Whitespace is a powerful design tool.</li>
            <li>Minimal doesn't mean boring—let content and function shine.</li>
          </ul>
        </p>
      </>
    ),
  },
  {
    slug: "scaling-product-design",
    title: "Scaling Product Design for Startups",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    content: (
      <>
        <p>
          The journey from MVP to scale is challenging for startups. A robust product design process is crucial to support this growth. Iterative design and efficient communication tools can ensure consistency and foster innovation.
        </p>
        <p className="mt-4">
          As your team grows, establish a design system, document guidelines, and use collaborative platforms for feedback. Good design scales not just pixels, but also your team's culture and workflow.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Start documenting patterns from day one.</li>
          <li>Involve engineers early in the design process.</li>
          <li>Continually review your design system for improvements.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "brand-identity-digital",
    title: "Brand Identity: Crafting Digital Signatures",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    content: (
      <>
        <p>
          Your brand identity is more than a logo—it's the sum of your digital impressions. By crafting consistent visuals and messaging, brands become memorable and trustworthy.
        </p>
        <p className="mt-4">
          Successful brands treat every user touchpoint as an opportunity to reinforce identity. Use color, typography, and tone of voice to build a holistic digital signature.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Define your brand’s core values.</li>
          <li>Establish style guidelines for consistency.</li>
          <li>Listen to feedback and adapt as needed.</li>
        </ul>
      </>
    ),
  },
  {
    slug: "freelancer-to-sr-designer",
    title: "Journey from Freelancer to Sr. Designer",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80",
    content: (
      <>
        <p>
          Freelancing is where many designers find their start. Over the years, I've moved from solo projects to collaborating with teams and leading design initiatives in fast-paced environments.
        </p>
        <p className="mt-4">
          <strong>Lessons learned:</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Each client and project has unique needs—active listening is key.</li>
            <li>Growth often comes from stepping outside your comfort zone.</li>
            <li>Mentorship—giving and receiving—transforms careers.</li>
          </ul>
        </p>
      </>
    ),
  },
];

const BlogPost = () => {
  const params = useParams();
  const navigate = useNavigate();
  const slug = params["*"] || params["slug"];
  const blog = BLOGS.find((b) => `/blog/${b.slug}` === `/blog/${slug}` || b.slug === slug);

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
