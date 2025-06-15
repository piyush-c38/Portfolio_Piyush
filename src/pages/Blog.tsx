
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const BLOGS = [
  {
    title: "Minimalism in Modern UX: Why Less Is More",
    date: "April 2024",
    tags: ["UX", "Philosophy", "Trends"],
    slug: "/blog/minimalism-in-modern-ux",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    excerpt: "Explore how simplicity leads to clarity and UX excellence in modern product design.",
  },
  {
    title: "Scaling Product Design for Startups",
    date: "March 2024",
    tags: ["Startups", "Product", "Design"],
    slug: "/blog/scaling-product-design",
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80",
    excerpt: "Tips, tools, and processes for building design culture from your MVP to scale.",
  },
  {
    title: "Brand Identity: Crafting Digital Signatures",
    date: "February 2024",
    tags: ["Branding", "Identity"],
    slug: "/blog/brand-identity-digital",
    img: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
    excerpt: "Step-by-step guide to making your brand stand out and stay remembered.",
  },
  {
    title: "Journey from Freelancer to Sr. Designer",
    date: "January 2024",
    tags: ["Career", "Freelance"],
    slug: "/blog/freelancer-to-sr-designer",
    img: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&q=80",
    excerpt: "Follow my path from freelancing to becoming a senior designer, sharing lessons and tips for the journey.",
  }
];

const Blog = () => (
  <div className="bg-white min-h-screen font-inter text-black flex flex-col">
    <Navbar />
    <main className="flex-1 w-full flex flex-col items-center pt-[80px] pb-12 px-4">
      <section className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-3xl sm:text-5xl font-light mb-3">Blog</h1>
        <p className="text-base sm:text-lg text-black/70 mb-7">
          Insights, experiments, and lessons learned from my journey as a designer. Selected posts — more coming soon.
        </p>
      </section>
      <section className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {BLOGS.map(blog => (
          <Link
            to={blog.slug}
            key={blog.slug}
            className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition cursor-pointer flex flex-col"
          >
            <img
              src={blog.img}
              alt={blog.title}
              className="w-full h-[140px] object-cover rounded-t-2xl"
              loading="lazy"
            />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="text-lg font-bold mb-2 group-hover:underline">{blog.title}</h3>
              <div className="text-xs text-gray-500 mb-1">{blog.date}</div>
              <p className="text-black/70 text-sm mb-2 flex-1">{blog.excerpt}</p>
              <div className="flex gap-2 flex-wrap mb-2">
                {blog.tags.map(t => (
                  <span key={t} className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-900">
                    {t}
                  </span>
                ))}
              </div>
              <span className="inline-block mt-auto text-xs text-black/70 underline font-medium hover:text-black">
                Read More
              </span>
            </div>
          </Link>
        ))}
      </section>
      <div className="mt-10 text-center">
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-black/80 transition"
        >
          Want to collaborate? Book a call
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Blog;
