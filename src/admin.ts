type CmsWindow = Window & {
  CMS_MANUAL_INIT?: boolean;
  initCMS?: (options: { config: Record<string, unknown> }) => void;
};

const cmsWindow = window as CmsWindow;

const env = {
  branch: import.meta.env.VITE_CMS_BRANCH || "main",
  cloudinaryCloudName: import.meta.env.VITE_CMS_CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: import.meta.env.VITE_CMS_CLOUDINARY_API_KEY,
};

const loadScript = (src: string) =>
  new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(script);
  });

const renderError = (message: string) => {
  document.body.innerHTML = `
    <main style="font-family: sans-serif; max-width: 720px; margin: 48px auto; padding: 0 20px;">
      <h1>CMS setup incomplete</h1>
      <p>${message}</p>
    </main>
  `;
};

const createCmsConfig = () => ({
  local_backend: window.location.hostname === "localhost",
  load_config_file: false,
  backend: {
    name: "git-gateway",
    branch: env.branch,
  },
  media_folder: "src/content/media",
  public_folder: "/media",
  media_library: {
    name: "cloudinary",
    config: {
      cloud_name: env.cloudinaryCloudName,
      api_key: env.cloudinaryApiKey,
      multiple: false,
    },
  },
  collections: [
    {
      label: "Site Settings",
      name: "site_settings",
      files: [
        {
          label: "Site Settings",
          name: "site",
          file: "src/content/site.yml",
          fields: [
            { label: "Owner Name", name: "owner_name", widget: "string" },
            { label: "Tagline", name: "tagline", widget: "string" },
            { label: "Personal Email", name: "personal_email", widget: "string" },
            { label: "Student Email", name: "student_email", widget: "string" },
            { label: "Phone Number", name: "phone_number", widget: "string" },
            { label: "Resume Link", name: "resume_link", widget: "string" },
            { label: "Inquiry Subject", name: "service_inquiry_subject", widget: "string" },
            { label: "Copyright Year", name: "copyright_year", widget: "number" },
            {
              label: "Social Links",
              name: "social_links",
              widget: "object",
              fields: [
                { label: "LinkedIn", name: "linkedin", widget: "string" },
                { label: "GitHub", name: "github", widget: "string" },
                { label: "X", name: "x", widget: "string" },
                { label: "Instagram", name: "instagram", widget: "string" },
              ],
            },
          ],
        },
        {
          label: "Portfolio",
          name: "portfolio",
          file: "src/content/portfolio.yml",
          fields: [
            {
              label: "Profile",
              name: "profile",
              widget: "object",
              fields: [
                { label: "Image", name: "image", widget: "image" },
                { label: "Name", name: "name", widget: "string" },
                { label: "Tagline", name: "tagline", widget: "string" },
                {
                  label: "Tools",
                  name: "tools",
                  widget: "list",
                  field: { label: "Tool", name: "tool", widget: "string" },
                },
              ],
            },
            { label: "About", name: "about_markdown", widget: "markdown" },
            {
              label: "Journey",
              name: "journey",
              widget: "object",
              fields: [
                { label: "Heading", name: "heading", widget: "string" },
                { label: "Description", name: "description", widget: "text" },
              ],
            },
            {
              label: "Timeline",
              name: "timeline",
              widget: "list",
              summary: "{{fields.title}}",
              fields: [
                { label: "Title", name: "title", widget: "string" },
                { label: "Date", name: "date", widget: "string" },
                { label: "Role", name: "role", widget: "string", required: false },
                { label: "Description", name: "description", widget: "text" },
                { label: "Color Class", name: "color", widget: "string" },
                { label: "Project Link", name: "project_link", widget: "string", required: false },
                { label: "Demo Link", name: "demo_link", widget: "string", required: false },
              ],
            },
          ],
        },
        {
          label: "Services",
          name: "services",
          file: "src/content/services.yml",
          fields: [
            { label: "Hero Title", name: "hero_title", widget: "string" },
            { label: "Hero Description", name: "hero_description", widget: "text" },
            { label: "CTA Title", name: "cta_title", widget: "string" },
            { label: "CTA Description", name: "cta_description", widget: "text" },
            {
              label: "Process",
              name: "process",
              widget: "list",
              fields: [
                { label: "Step", name: "step", widget: "string" },
                { label: "Title", name: "title", widget: "string" },
                { label: "Description", name: "description", widget: "text" },
              ],
            },
            {
              label: "Service Entries",
              name: "services",
              widget: "list",
              summary: "{{fields.title}}",
              fields: [
                { label: "Slug", name: "slug", widget: "string" },
                { label: "Title", name: "title", widget: "string" },
                { label: "Description", name: "description", widget: "text" },
                { label: "Section Label", name: "section_label", widget: "string" },
                {
                  label: "Card Features",
                  name: "card_features",
                  widget: "list",
                  field: { label: "Feature", name: "feature", widget: "string" },
                },
                {
                  label: "Projects",
                  name: "projects",
                  widget: "list",
                  summary: "{{fields.title}}",
                  fields: [
                    { label: "Title", name: "title", widget: "string" },
                    { label: "Description", name: "description", widget: "text" },
                    { label: "Image", name: "image", widget: "image" },
                    {
                      label: "Technologies",
                      name: "technologies",
                      widget: "list",
                      field: { label: "Technology", name: "technology", widget: "string" },
                    },
                    { label: "Completed Date", name: "completed_date", widget: "string" },
                    { label: "Link", name: "link", widget: "string" },
                  ],
                },
                {
                  label: "Pricing",
                  name: "pricing",
                  widget: "list",
                  summary: "{{fields.title}}",
                  fields: [
                    { label: "Title", name: "title", widget: "string" },
                    { label: "Description", name: "description", widget: "text", required: false },
                    {
                      label: "Features",
                      name: "features",
                      widget: "list",
                      field: { label: "Feature", name: "feature", widget: "string" },
                    },
                    { label: "Price", name: "price", widget: "string" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: "Blogs",
      name: "blogs",
      folder: "src/content/blogs",
      create: true,
      slug: "{{slug}}",
      extension: "md",
      format: "frontmatter",
      summary: "{{title}}",
      fields: [
        { label: "Title", name: "title", widget: "string" },
        { label: "Slug", name: "slug", widget: "string" },
        { label: "Excerpt", name: "excerpt", widget: "text" },
        { label: "Date", name: "date", widget: "datetime", date_format: "YYYY-MM-DD", time_format: false },
        { label: "Read Time", name: "readTime", widget: "string" },
        {
          label: "Category",
          name: "category",
          widget: "select",
          options: ["Software Development", "Technology", "Design", "Life"],
        },
        { label: "Featured Image", name: "image", widget: "image" },
        { label: "Featured Post", name: "featured", widget: "boolean", default: false },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
  ],
});

const bootstrap = async () => {
  const missingEnv = Object.entries({
    VITE_CMS_CLOUDINARY_CLOUD_NAME: env.cloudinaryCloudName,
    VITE_CMS_CLOUDINARY_API_KEY: env.cloudinaryApiKey,
  })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingEnv.length > 0) {
    renderError(`Missing environment variables: ${missingEnv.join(", ")}`);
    return;
  }

  cmsWindow.CMS_MANUAL_INIT = true;
  await loadScript("https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js");
  cmsWindow.initCMS?.({ config: createCmsConfig() });
};

void bootstrap();
