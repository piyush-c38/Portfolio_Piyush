
import { Link } from "react-router-dom";

const BLOGS = [
  {
    title: "Minimalism in Modern UX: Why Less Is More",
    date: "April 2024",
    tags: ["UX", "Philosophy", "Trends"],
    slug: "/blog/minimalism-in-modern-ux",
  },
  {
    title: "Scaling Product Design for Startups",
    date: "March 2024",
    tags: ["Startups", "Product", "Design"],
    slug: "/blog/scaling-product-design",
  },
  {
    title: "Brand Identity: Crafting Digital Signatures",
    date: "February 2024",
    tags: ["Branding", "Identity"],
    slug: "/blog/brand-identity-digital",
  },
  {
    title: "Journey from Freelancer to Sr. Designer",
    date: "January 2024",
    tags: ["Career", "Freelance"],
    slug: "/blog/freelancer-to-sr-designer",
  }
];

const BlogCards = () => (
  <section>
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
      {BLOGS.slice(0, 4).map((blog) => (
        <Link
          to={blog.slug}
          key={blog.slug}
          className="group rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:scale-[1.02] transition duration-200 p-4 sm:p-6 flex flex-col gap-2 cursor-pointer"
        >
          <div className="text-base sm:text-lg font-medium leading-[1.2]">{blog.title}</div>
          <div className="text-xs text-gray-400 mt-1">{blog.date}</div>
          <div className="flex gap-2 mt-1 flex-wrap">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-gray-100 text-xs text-gray-900 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export default BlogCards;
