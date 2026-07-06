export type SocialLink = {
  label: string;
  href: string;
};

export type PortfolioSettings = {
  name: string;
  designation: string;
  profilePhotoUrl: string;
  about: string[];
  resumeUrl: string;
  socialLinks: SocialLink[];
  skills: string[];
  glimpseOfMyWork: Array<{
    title: string;
    date?: string;
    description: string;
    link?: string;
    demoLink?: string;
    technologies?: string[];
  }>;
  contactInformation: {
    personalEmail: string;
    studentEmail?: string;
    location?: string;
    availability?: string;
  };
};

export type MarkdownImage = {
  url: string;
  alt?: string;
  caption?: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  tag: string;
  readTime: string;
  publishedDate: string;
  coverImage: string;
  galleryImages: MarkdownImage[];
  seoTitle?: string;
  seoDescription?: string;
  featured?: boolean;
  excerpt: string;
  content: string;
};

export type ProjectEntry = {
  title: string;
  slug: string;
  coverImage: string;
  galleryImages: MarkdownImage[];
  githubLink?: string;
  liveDemoLink?: string;
  additionalLinks: Array<{
    label: string;
    href: string;
  }>;
  technologies: string[];
  publishedDate: string;
  description: string;
  featured?: boolean;
  content: string;
};

export type ServiceReview = {
  name: string;
  role?: string;
  quote: string;
};

export type ServiceEntry = {
  title: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
  sampleProjects: string[];
  reviews: ServiceReview[];
  serviceOverview?: string;
  content: string;
};
