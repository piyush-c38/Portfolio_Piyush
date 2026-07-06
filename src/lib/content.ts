import YAML from "yaml";
import legacyBlogs from "../../public/data/blog.tsx";
import legacyLinks from "../../public/data/link.js";
import type { BlogPost, PortfolioSettings, ProjectEntry, ServiceEntry } from "@/types/content";

type ParsedImage = { url: string; alt?: string; caption?: string };
type ParsedServiceReview = { name: string; role?: string; quote: string };

const toText = (value: unknown): string => {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map(toText).filter(Boolean).join(" ");
  }

  if (value && typeof value === "object" && "props" in value) {
    const props = value as { props?: { children?: unknown } };
    return toText(props.props?.children);
  }

  return "";
};

const normalizeStringArray = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((item) => (typeof item === "string" ? item : "")).filter(Boolean);
};

const normalizeImages = (value: unknown): ParsedImage[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      if (typeof item === "string") {
        return { url: item } as ParsedImage;
      }

      if (item && typeof item === "object") {
        const image = item as { url?: string; alt?: string; caption?: string };
        if (image.url) {
          return { url: image.url, alt: image.alt, caption: image.caption } as ParsedImage;
        }
      }

      return null;
    })
    .filter((item): item is ParsedImage => item !== null);
};

const normalizeFrontmatterSource = (source: string) =>
  source
    .split("\n")
    .map((line) => {
      const match = line.match(/^(\s*[^:#\n][^:\n]*:\s*)(.+)$/);

      if (!match) {
        return line;
      }

      const [, prefix, value] = match;
      const trimmedValue = value.trim();

      if (!trimmedValue) {
        return line;
      }

      if (/^["'\[\{>|-]/.test(trimmedValue)) {
        return line;
      }

      if (!trimmedValue.includes(":")) {
        return line;
      }

      return `${prefix}${JSON.stringify(trimmedValue)}`;
    })
    .join("\n");

const fallbackAbout = [
  "Hi, I’m Piyush — a Software Engineer who enjoys building products that solve real-world problems.",
  "For me, understanding the problem, planing the product, and delivering a meaningful user experience matter the most. I enjoy working with like-minded people and turning ideas into practical solutions.",
  "My experience spans full-stack development, AI applications, IoT systems, and product development. I’m skilled in Java, Python, React, Node.js, MySQL, MongoDB, and Docker, and enjoy building reliable, scalable, and user-centric products.",
];

const fallbackGlance = [
  {
    title: "GitInsight",
    date: "2026",
    description: "AI-powered repository analysis platform that explains unfamiliar codebases.",
    link: "https://github.com/piyush-c38/git-insight",
    demoLink: "https://git-insight-one.vercel.app/",
    technologies: ["React", "TypeScript", "RAG", "LLMs"],
  },
  {
    title: "TracExpert",
    date: "2024",
    description: "Cross-platform inventory app delivered during the IIT Indore internship.",
    link: "https://github.com/piyush-c38/TracExpert_T",
    technologies: ["React Native", "Docker", "CI/CD"],
  },
];

const portfolioSettingsModules = import.meta.glob("../../content/portfolio/settings.json", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const blogModules = import.meta.glob("../../content/blogs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const projectModules = import.meta.glob("../../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const serviceModules = import.meta.glob("../../content/services/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const parseMarkdownDocument = (source: string) => {
  const normalized = source.replace(/^\uFEFF/, "");
  const frontmatterMatch = normalized.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!frontmatterMatch) {
    return {
      data: {},
      content: normalized.trim(),
    };
  }

  const [, frontmatterSource, body] = frontmatterMatch;
  const normalizedFrontmatterSource = normalizeFrontmatterSource(frontmatterSource);

  return {
    data: (YAML.parse(normalizedFrontmatterSource) ?? {}) as Record<string, unknown>,
    content: body.trim(),
  };
};

const getExcerptFromContent = (content: string) => {
  const firstParagraph = content
    .split(/\n\n+/)
    .map((section) => section.replace(/^#+\s+/gm, "").replace(/\[(.*?)\]\((.*?)\)/g, "$1"))
    .find((section) => section.trim().length > 0);

  return firstParagraph ? firstParagraph.replace(/\s+/g, " ").trim() : "";
};

const sortByDateDesc = <T extends { publishedDate: string }>(items: T[]) =>
  [...items].sort((left, right) => new Date(right.publishedDate).getTime() - new Date(left.publishedDate).getTime());

export const portfolioSettings: PortfolioSettings = (() => {
  const raw = Object.values(portfolioSettingsModules)[0];

  if (raw) {
    return JSON.parse(raw) as PortfolioSettings;
  }

  return {
    name: "Piyush Chandrakar",
    designation: "Full-Stack Product Developer",
    profilePhotoUrl: "/data/dp.png",
    about: fallbackAbout,
    resumeUrl: legacyLinks.resumeLink,
    socialLinks: [
      { label: "LinkedIn", href: legacyLinks.linkedin },
      { label: "GitHub", href: legacyLinks.github },
      { label: "X", href: legacyLinks.x },
      { label: "Instagram", href: legacyLinks.instagram },
    ],
    skills: ["Java", "Python", "JavaScript", "TypeScript", "React", "Node.js", "MongoDB", "Docker"],
    glimpseOfMyWork: fallbackGlance,
    contactInformation: {
      personalEmail: legacyLinks.personalEmail,
      studentEmail: legacyLinks.studentEmail,
    },
  };
})();

const buildLegacyBlogPosts = (): BlogPost[] =>
  legacyBlogs.map((blog) => ({
    title: blog.title,
    slug: blog.slug,
    tag: blog.category,
    readTime: blog.readTime,
    publishedDate: blog.date,
    coverImage: blog.image,
    galleryImages: [],
    seoTitle: blog.title,
    seoDescription: blog.excerpt,
    featured: blog.featured,
    excerpt: blog.excerpt,
    content: toText(blog.content),
  }));

export const blogPosts: BlogPost[] = (() => {
  const entries = Object.entries(blogModules).map(([filePath, raw]) => {
    const { data, content } = parseMarkdownDocument(raw);
    const frontmatter = data as Partial<BlogPost> & {
      title?: string;
      slug?: string;
      tag?: string;
      readTime?: string;
      publishedDate?: string;
      coverImage?: string;
      galleryImages?: unknown;
      seoTitle?: string;
      seoDescription?: string;
      featured?: boolean;
      excerpt?: string;
    };

    return {
      title: frontmatter.title ?? filePath.split("/").pop()?.replace(/\.md$/, "") ?? "Untitled",
      slug: frontmatter.slug ?? filePath.split("/").pop()?.replace(/\.md$/, "") ?? "untitled",
      tag: frontmatter.tag ?? "General",
      readTime: frontmatter.readTime ?? "1 min read",
      publishedDate: frontmatter.publishedDate ?? new Date().toISOString(),
      coverImage: frontmatter.coverImage ?? "",
      galleryImages: normalizeImages(frontmatter.galleryImages),
      seoTitle: frontmatter.seoTitle,
      seoDescription: frontmatter.seoDescription,
      featured: frontmatter.featured ?? false,
      excerpt: frontmatter.excerpt ?? getExcerptFromContent(content),
      content,
    } satisfies BlogPost;
  });

  const legacyPosts = buildLegacyBlogPosts();

  if (entries.length === 0) {
    return sortByDateDesc(legacyPosts);
  }

  const merged = [...legacyPosts.filter((legacyPost) => !entries.some((entry) => entry.slug === legacyPost.slug)), ...entries];

  return sortByDateDesc(merged);
})();

export const projectEntries: ProjectEntry[] = sortByDateDesc(
  Object.entries(projectModules).map(([filePath, raw]) => {
    const { data, content } = parseMarkdownDocument(raw);
    const frontmatter = data as Partial<ProjectEntry> & {
      title?: string;
      slug?: string;
      coverImage?: string;
      galleryImages?: unknown;
      githubLink?: string;
      liveDemoLink?: string;
      additionalLinks?: unknown;
      technologies?: unknown;
      publishedDate?: string;
      description?: string;
      featured?: boolean;
    };

    return {
      title: frontmatter.title ?? filePath.split("/").pop()?.replace(/\.md$/, "") ?? "Untitled",
      slug: frontmatter.slug ?? filePath.split("/").pop()?.replace(/\.md$/, "") ?? "untitled",
      coverImage: frontmatter.coverImage ?? "",
      galleryImages: normalizeImages(frontmatter.galleryImages),
      githubLink: frontmatter.githubLink,
      liveDemoLink: frontmatter.liveDemoLink,
      additionalLinks: Array.isArray(frontmatter.additionalLinks)
        ? frontmatter.additionalLinks
            .map((item) => {
              if (item && typeof item === "object") {
                const link = item as { label?: string; href?: string };
                if (link.label && link.href) {
                  return { label: link.label, href: link.href };
                }
              }
              return null;
            })
            .filter((item): item is { label: string; href: string } => Boolean(item))
        : [],
      technologies: normalizeStringArray(frontmatter.technologies),
      publishedDate: frontmatter.publishedDate ?? new Date().toISOString(),
      description: frontmatter.description ?? getExcerptFromContent(content),
      featured: frontmatter.featured ?? false,
      content,
    } satisfies ProjectEntry;
  })
);

export const serviceEntries: ServiceEntry[] = Object.entries(serviceModules)
  .map(([filePath, raw]) => {
    const { data, content } = parseMarkdownDocument(raw);
    const frontmatter = data as Partial<ServiceEntry> & {
      title?: string;
      slug?: string;
      description?: string;
      image?: string;
      features?: unknown;
      sampleProjects?: unknown;
      reviews?: unknown;
      serviceOverview?: string;
    };

    return {
      title: frontmatter.title ?? filePath.split("/").pop()?.replace(/\.md$/, "") ?? "Untitled",
      slug: frontmatter.slug ?? filePath.split("/").pop()?.replace(/\.md$/, "") ?? "untitled",
      description: frontmatter.description ?? getExcerptFromContent(content),
      image: frontmatter.image ?? "",
      features: normalizeStringArray(frontmatter.features),
      sampleProjects: normalizeStringArray(frontmatter.sampleProjects),
      reviews: Array.isArray(frontmatter.reviews)
        ? frontmatter.reviews
            .map((item): ParsedServiceReview | null => {
              if (item && typeof item === "object") {
                const review = item as { name?: string; role?: string; quote?: string };
                if (review.name && review.quote) {
                  return { name: review.name, role: review.role, quote: review.quote };
                }
              }
              return null;
            })
            .filter((item): item is ParsedServiceReview => item !== null)
        : [],
      serviceOverview: frontmatter.serviceOverview ?? getExcerptFromContent(content),
      content,
    } satisfies ServiceEntry;
  })
  .sort((left, right) => left.title.localeCompare(right.title));

export const blogCategories = ["All", ...new Set(blogPosts.map((post) => post.tag))];
