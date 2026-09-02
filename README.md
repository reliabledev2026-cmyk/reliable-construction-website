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

All photography currently comes from the small, central registry in
`data/images.ts`. Replace a registry URL with a local `/public/...` path when
approved company photography becomes available.
