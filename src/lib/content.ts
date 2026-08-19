import { format } from "date-fns";
import { load } from "js-yaml";
import siteRaw from "@/content/site.yml?raw";
import portfolioRaw from "@/content/portfolio.yml?raw";
import servicesRaw from "@/content/services.yml?raw";

export type SiteContent = {
  owner_name: string;
  tagline: string;
  personal_email: string;
  student_email: string;
  phone_number: string;
  resume_link: string;
  service_inquiry_subject: string;
  copyright_year: number;
  social_links: {
    linkedin: string;
    github: string;
    x: string;
    instagram: string;
  };
};

export type PortfolioTimelineItem = {
  title: string;
  date: string;
  role: string;
  description: string;
  project_link?: string;
  demo_link?: string;
};

export type PortfolioContent = {
  profile: {
    image: string;
    name: string;
    tagline: string;
    tools: string[];
  };
  about_markdown: string;
  journey: {
    heading: string;
    description: string;
  };
  timeline: PortfolioTimelineItem[];
};

export type CaseStudy = {
  title: string;
  subtitle: string;
  location: string;
  chapters: {
    label: string;
    heading: string;
    body: string;
    image: string;
  }[];
};

export type ServiceProject = {
  title: string;
  slug: string;
  description: string;
  image: string;
  technologies: string[];
  completed_date: string;
  link: string;
  case_study?: CaseStudy | CaseStudy[];
};

export type ServicePricing = {
  title: string;
  description: string;
  features: string[];
  price: string;
};

export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  section_label: string;
  card_features: string[];
  pricing: ServicePricing[];
  projects: ServiceProject[];
};

export type ServicesContent = {
  hero_title: string;
  hero_description: string;
  cta_title: string;
  cta_description: string;
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  services: ServiceItem[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  formattedDate: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
};

const parseYaml = <T>(raw: string) => load(raw) as T;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const normalizeCaseStudy = (value: unknown): CaseStudy | undefined => {
  const rawCaseStudy = Array.isArray(value) ? value[0] : value;

  if (!isRecord(rawCaseStudy)) {
    return undefined;
  }

  const rawChapters = Array.isArray(rawCaseStudy.chapters) ? rawCaseStudy.chapters : [];

  return {
    title: String(rawCaseStudy.title ?? ""),
    subtitle: String(rawCaseStudy.subtitle ?? ""),
    location: String(rawCaseStudy.location ?? ""),
    chapters: rawChapters
      .filter(isRecord)
      .map((chapter) => ({
        label: String(chapter.label ?? ""),
        heading: String(chapter.heading ?? ""),
        body: String(chapter.body ?? ""),
        image: String(chapter.image ?? ""),
      })),
  };
};

const parseMarkdownFile = (filePath: string, raw: string): BlogPost => {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  const frontmatter = parseYaml<Record<string, unknown>>(match?.[1] ?? "");
  const content = (match?.[2] ?? raw).trim();
  const slug =
    (frontmatter.slug as string | undefined) ??
    filePath.split("/").pop()?.replace(/\.md$/, "") ??
    "";
  const date = String(frontmatter.date ?? "");

  return {
    slug,
    title: String(frontmatter.title ?? slug),
    excerpt: String(frontmatter.excerpt ?? ""),
    content,
    date,
    formattedDate: formatDate(date),
    readTime: String(frontmatter.readTime ?? frontmatter.read_time ?? ""),
    category: String(frontmatter.category ?? "General"),
    image: String(frontmatter.image ?? ""),
    featured: Boolean(frontmatter.featured),
  };
};

const formatDate = (value: string) => {
  const parsedDate = new Date(value);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return format(parsedDate, "MMMM d, yyyy");
};

export const siteContent = parseYaml<SiteContent>(siteRaw);

export const portfolioContent = parseYaml<PortfolioContent>(portfolioRaw);

export const servicesContent = parseYaml<ServicesContent>(servicesRaw);

export const blogPosts = Object.entries(
  import.meta.glob<string>("../content/blogs/*.md", {
    eager: true,
    import: "default",
    query: "?raw",
  }),
)
  .map(([filePath, raw]) => parseMarkdownFile(filePath, raw))
  .sort((left, right) => {
    const leftTime = new Date(left.date).getTime();
    const rightTime = new Date(right.date).getTime();

    return rightTime - leftTime;
  });

export const getBlogBySlug = (slug?: string) =>
  blogPosts.find((post) => post.slug === slug);

export const getServiceBySlug = (slug?: string) =>
  servicesContent.services.find((service) => service.slug === slug);

export const getServiceProjectBySlug = (serviceSlug?: string, projectSlug?: string) =>
  getServiceBySlug(serviceSlug)?.projects.find((project) => project.slug === projectSlug);

export const getServiceCaseStudyBySlug = (serviceSlug?: string, projectSlug?: string) =>
  normalizeCaseStudy(getServiceProjectBySlug(serviceSlug, projectSlug)?.case_study);
