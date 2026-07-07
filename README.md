# My Portfolio Website

Act as a Senior React + TypeScript Software Architect.

First analyze the existing portfolio and reuse as much code/components as possible. Do NOT rebuild the project. Preserve the existing UI, theme, animations, responsiveness and GitHub Pages compatibility.

Build a complete custom Admin Panel inside the existing project at /admin.

Tech Stack:
- React + Vite + TypeScript
- React Router
- TailwindCSS + shadcn/ui
- GitHub REST API (content storage)
- Cloudinary (images/PDFs)

No CMS.
No backend.
No database.
No Firebase/Supabase/Vercel.

Use GitHub as the CMS.

Content structure:

content/
  blogs/
  projects/
  services/
  portfolio/settings.json

Implement an AuthService abstraction. For now use GitHub Personal Access Token from .env for development. Keep the code ready for GitHub OAuth later without changing the remaining code.

Create reusable:
- GitHub API service
- Cloudinary service
- Types
- Hooks
- Form components

Admin Modules

1. Dashboard

2. Portfolio Settings
- Name
- Designation
- Profile Image
- About
- Resume
- Skills
- Social Links
- Home page sections (including "Glimpse of My Work")

3. Blogs
- CRUD
- Markdown editor
- Title
- Slug
- Tag
- Read Time
- Published Date
- Cover Image
- More Images (Gallery)
- Markdown Content

4. Projects
- CRUD
- Title
- Slug
- Cover Image
- More Images (Gallery)
- Markdown Description
- GitHub Link
- Demo Link
- Other Links
- Technologies
- Published Date
- Featured

5. Services
Reuse and professionally redesign the existing Services page.

CRUD fields:
- Title
- Description
- Features
- Images
- Sample Projects
- Reviews

Frontend

Replace all hardcoded content with Markdown/JSON.

Implement dynamic pages:

- /blogs
- /blogs/:slug
- /projects (NEW)
- /projects/:slug (NEW)
- /services

The new Projects page must match the quality and styling of the existing portfolio and display all projects dynamically.

Blog and Project detail pages must support a "More Images" gallery after the main Markdown content.

Home page, Blog page, Projects page and Services page must automatically update when content changes through the admin.

Upload images/PDFs directly to Cloudinary and store only URLs in GitHub.

Use clean architecture with reusable services, hooks and components. Remove duplicate code and unused files.

Generate a README explaining:
- GitHub PAT configuration
- Cloudinary configuration
- GitHub Pages deployment
- How to manage Portfolio, Blogs, Projects and Services

Do not stop after scaffolding. Continue until every feature above is fully implemented. If any design decision is required, choose the simplest scalable solution and continue without asking.