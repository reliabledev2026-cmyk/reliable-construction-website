# Reliable Consulting & Construction

Static marketing website for a residential engineering and construction
consultancy in Bharatpur, Chitwan.

## Run locally

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Production URL and search verification

Set these in the Vercel project when a custom production domain is connected:

```bash
NEXT_PUBLIC_SITE_URL=https://your-final-domain.com
GOOGLE_SITE_VERIFICATION=your-search-console-token
```

`NEXT_PUBLIC_SITE_URL` controls canonical URLs, social metadata, structured
data, robots and the sitemap. It falls back to the current production URL in
`data/company.ts`. Vercel preview deployments are blocked from crawling while
the production deployment remains indexable.

## Live routes

- `/` — home, services preview, concept projects, team, process and Facebook updates
- `/about` — company approach, mission, vision and working principles
- `/services` and `/services/[slug]` — five residential engineering services
- `/projects` and `/projects/[slug]` — residential concept portfolio
- `/contact` — contact details, mail-composer enquiry form and Google Maps location
- `/privacy` and `/terms` — legal information

## Content

- Company details and navigation: `data/company.ts`
- Services: `data/services.ts`
- Residential projects: `data/residential-projects.ts`
- Homepage team profiles: `data/team.ts`
- Used image registry: `data/images.ts`
- Company logo: `public/logo.jpg`

The project has no backend, database, CMS or authentication. The contact form
validates in the browser and opens a pre-filled email addressed to the company.
The homepage Facebook timeline and contact-page map use their official embeds.

All photography is stored locally in `public/images` and referenced through
`data/images.ts`. Replace a registry path when approved company photography
becomes available.

The SEO setup includes canonical page metadata, Open Graph and social cards,
Schema.org organization/service data, an image sitemap, robots rules and a web
app manifest. After launch, submit `/sitemap.xml` through Google Search Console.
