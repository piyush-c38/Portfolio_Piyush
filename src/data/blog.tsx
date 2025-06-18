import React from "react";

const Blogs: {
  id: number;
  title: string;
  excerpt: string;
  content: React.ReactNode;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  slug: string;
}[] = [
    {
      id: 1,
      title: "What does a Blog mean?",
      excerpt: "Learn the best practices for creating React applications that can grow with your business needs. From component architecture to state management, we'll cover everything you need to know.",
      content: (
        <>
          <p>Hey! This is my first Blog.</p>
          <p>And I want to start my blogging journey with my own style having transparency in my thoughts. So let's first understand what does Blog mean?</p>
          <p className="mt-4">So, a blog is content by which a person shares his/her knowledge with many people. It's basically sharing your Ideas, Knowledge and Thoughts that you have with a large community that can help them.</p>
          <p className="mt-4">We all have proficiency in one field or another. Sharing our ideas in articles or blogs can help others who want to know more about that field. Blogs can range from a simple idea-"How to plant an excellent seed?" to a complex solution like- "What should be the specifications of my motherboard to install Intel i9 13th gen processor with DDR5 RAM?" So it's basically information in the form of conversation. It's better if we keep Blog in a Simple and understandable manner. So that Readers can enjoy the content and get relevant answers.</p>
          <p className="mt-4">Following the same Ideology, ending this Blog here. Let's meet in the next Blog with another great content!</p>
        </>
      ),
      date: "July 13, 2023",
      readTime: "5 min read",
      category: "Blogging",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      featured: true,
      slug: "what-does-a-blog-mean"
    },
    {
      id: 2,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development in the coming years.",
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
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      featured: false,
      slug: "scaling-product-design"
    },
    {
      id: 3,
      title: "Design Systems That Scale",
      excerpt: "How to create and maintain design systems that work across multiple products and teams effectively.",
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
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      featured: false,
      slug: "brand-identity-digital"
    },
    {
      id: 4,
      title: "Modern JavaScript Best Practices",
      excerpt: "Essential JavaScript patterns and practices for writing maintainable and efficient code in 2024.",
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
      date: "Nov 28, 2024",
      readTime: "8 min read",
      category: "Development",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop",
      featured: false,
      slug: "freelancer-to-sr-designer"
    }
  ];

export default Blogs;