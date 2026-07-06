# Portfolio Website

Static React + Vite + TypeScript portfolio site with Decap CMS, GitHub repository content, GitHub Pages deployment, and Cloudinary-hosted media.

## Stack

- React
- Vite
- TypeScript
- Decap CMS
- GitHub Pages
- Cloudinary media library

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Content Architecture

Editable content lives in `content/` and is loaded at build time.

- `content/portfolio/settings.json` - homepage and portfolio settings
- `content/blogs/*.md` - blog articles
- `content/projects/*.md` - project case studies
- `content/services/*.md` - service definitions and reviews

The app reads these files through the shared content loader in `src/lib/content.ts`.

## Decap CMS Setup

The CMS entry point is at `/admin` through `public/admin/index.html`.

The CMS config is in `public/admin/config.yml`.

### Backend

The CMS uses the GitHub backend:

```yaml
backend:
	name: github
	repo: piyush-c38/Portfolio_Piyush
	branch: main
```

If your repository name or branch is different, update `repo` and `branch` in `public/admin/config.yml`.

### Cloudinary

The CMS is configured to use the Cloudinary media library so uploaded images are stored as Cloudinary URLs instead of files in the repository.

Update these values in `public/admin/config.yml`:

- `cloud_name`
- `api_key`

If you need to use a different Cloudinary account, replace the placeholders with your own values.

### Collections

The CMS exposes four collections:

- Portfolio Settings
- Blogs
- Projects
- Services

## How To Edit Content

### Portfolio Information

Edit `content/portfolio/settings.json` to change:

- Name
- Designation
- Profile photo URL
- About text
- Resume URL
- Social links
- Skills and technologies
- Glimpse of my work
- Contact information

### Blogs

Create or edit a markdown file in `content/blogs/`.

Required frontmatter:

- Title
- Slug
- Tag
- Read time
- Published date
- Cover image

Optional fields:

- Gallery images
- SEO title
- SEO description
- Featured flag
- Excerpt

The markdown body becomes the article content.

### Projects

Create or edit a markdown file in `content/projects/`.

Required frontmatter:

- Title
- Slug
- Cover image
- Technologies
- Published date
- Description

Optional fields:

- Gallery images
- GitHub link
- Live demo link
- Additional links
- Featured flag

The markdown body becomes the case study description.

### Services

Create or edit a markdown file in `content/services/`.

Required frontmatter:

- Title
- Slug
- Description
- Image
- Features
- Sample projects
- Reviews

The markdown body can hold supporting service copy.

## GitHub Pages Deployment

The app is configured for GitHub Pages through `vite.config.ts`.

The build base is set to the GitHub Actions deployment path:

```ts
base: process.env.GITHUB_ACTIONS ? "/Portfolio_Piyush/" : "/"
```

The repo also includes `public/404.html` so direct refreshes on nested routes can redirect back into the SPA.

Build and deploy the generated `dist/` folder to GitHub Pages.

## Route Map

- `/` - homepage
- `/portfolio` - portfolio page
- `/projects` - projects listing
- `/projects/:slug` - project detail
- `/blog` - blog listing
- `/blog/:slug` - blog detail
- `/services` - services page
- `/services/:slug` - service detail

## Notes

- Images should be stored in Cloudinary and referenced by URL.
- The project remains fully static.
- There is no backend, database, or server runtime.
