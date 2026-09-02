# Reliable Consulting & Construction — Website

A static marketing site for Reliable Consulting & Construction, a Bharatpur-based
house engineering and construction consultancy.
Built with Next.js (App Router), TypeScript, Tailwind CSS v4, Framer Motion and Radix UI.

There is no backend, database, CMS or auth. All content lives in typed modules under
`/data`, so connecting a CMS later is a matter of replacing those modules' exports.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static prerender of every route
npm start
```

---

## 1. Folder structure

```
app/
  layout.tsx              root layout: fonts, metadata, JSON-LD, Navbar + Footer
  globals.css             design tokens + utilities (the whole theme lives here)
  page.tsx                home
  about/page.tsx
  services/page.tsx
  services/[slug]/page.tsx      generateStaticParams from data/services.ts
  projects/page.tsx             filterable portfolio
  projects/[slug]/page.tsx      generateStaticParams from data/projects.ts
  team/page.tsx
  careers/page.tsx
  contact/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  privacy/page.tsx  terms/page.tsx
  sitemap.ts  robots.ts  not-found.tsx

components/
  layout/       navbar, mobile-nav, footer, logo, page-header, newsletter, legal-page
  navigation/   (folded into layout/ — navbar owns the Radix NavigationMenu)
  sections/     hero, stats, about-intro, services-list, featured-projects,
                sectors, why-us, process, clients, testimonials, cta
  projects/     project-card, project-filter, gallery
  careers/      vacancy-list
  contact/      contact-form
  ui/           button, section (Section/SectionHeader/IndexMark), reveal,
                counter, media, social-icons
  icon.tsx      string → Lucide component registry

data/           company.ts services.ts projects.ts team.ts testimonials.ts
                clients.ts careers.ts insights.ts images.ts

lib/            utils.ts (cn, pad), motion.ts (shared variants/easing)
public/images/  projects/ team/ services/  — drop local assets here
```

**Server vs client.** Pages and most sections are Server Components. Only the
pieces that need interaction are `"use client"`: navbar, mobile nav, hero,
services list, sectors, process, testimonials, project filter, gallery, contact
form, counter, reveal wrappers, newsletter.

---

## 2. How to change company information

Everything is in **`data/company.ts`** — name, logo wordmark, legal name,
registration, founding year, address, phones, emails, office hours, coordinates,
social links, statistics, vision, mission, values, timeline, certifications,
affiliations, differentiators, process steps, sectors, and the nav/legal link lists.

Changing `company.name` / `company.logo` updates the navbar, footer, every page
title, the OpenGraph tags, the JSON-LD organisation schema and the sitemap.

The logo lockup itself is `components/layout/logo.tsx` and uses `public/logo.jpg`
through the optimized Next.js Image component.

---

## 3. How to add a project

Append an object to the `projects` array in **`data/projects.ts`**:

```ts
{
  slug: "new-project",           // becomes /projects/new-project
  title: "New Project",
  location: "District",
  province: "Province",
  client: "Client name",
  category: "Hydropower",        // must be one of PROJECT_CATEGORIES
  sector: "Hydropower · Energy",
  year: "2026",
  duration: "18 months",
  status: "Ongoing",             // Completed | Ongoing | In Design
  description: "One or two sentences for the card.",
  overview: "Long-form narrative for the detail page.",
  services: ["Detailed Engineering Design"],
  scope: ["…"],
  highlights: [{ label: "Capacity", value: "24 MW" }],
  image: IMG.damSpillway,        // or "/images/projects/new-project.jpg"
  gallery: [IMG.weir, IMG.gorge],
  featured: true,                // optional: show in the home grid
  layout: "wide",                // optional: hero | wide | tall | standard
}
```

The route, the portfolio card, the filter count, related-project suggestions and
the sitemap entry all follow automatically. `category` must be a member of
`PROJECT_CATEGORIES` (top of the same file) — add to that tuple to create a new filter.

The home page grid uses the first five `featured: true` projects and places them
at deliberately unequal sizes in `components/sections/featured-projects.tsx`.

---

## 4. How to add a service

Append to the `services` array in **`data/services.ts`** with `slug`, `title`,
`summary`, `description`, `scope[]`, `capabilities[]`, `icon`, `image` and
`relatedProjects[]` (project slugs).

The new entry automatically appears in: the home expertise list, the navbar
mega-menu, the `/services` page, the footer list, the contact form's service
dropdown, a generated `/services/[slug]` page, and the sitemap.

`icon` is a key in **`components/icon.tsx`**. If you use a name that isn't there
yet, import the Lucide icon and add it to the `ICONS` map.

---

## 5. How to replace images

All photography is referenced through **`data/images.ts`**. The placeholders are
Unsplash URLs built by the `u()` helper.

To use your own:

1. Put files in `public/images/projects/`, `public/images/team/`, etc.
2. Change the entry to a local path:
   ```ts
   heroMain: "/images/hero/main.jpg",
   ```
3. Nothing else changes — every component reads from `IMG`.

Remote hosts must be allow-listed in `next.config.ts` under
`images.remotePatterns`. Local files under `/public` need no configuration.

Client logos are text-based by default so no fabricated brand marks ship. To use
real logos, add `logo: "/images/clients/name.svg"` to an entry in
`data/clients.ts` and that cell renders the image instead of the wordmark.

---

## 6. How to change theme colours

Every colour, font and easing curve is a token in the `@theme` block at the top of
**`app/globals.css`**. Change a value there and it propagates site-wide.

```css
--color-ink:    #0b1319;   /* dark surfaces: hero, footer, CTA bands */
--color-paper:  #f5f3ef;   /* the default page surface               */
--color-accent: #ad3f13;   /* accent on LIGHT surfaces + as a fill    */
--color-accent-soft: #e8763f; /* accent on DARK surfaces             */
```

**The accent is a two-value ramp on purpose.** `accent` is tuned for light
surfaces and as a background behind white text; `accent-soft` is the variant used
on `ink`. If you change one, change both, and keep each above 4.5:1 against its
surface — every text/background pair currently passes WCAG AA at 11px.

Typography is three tokens — `--font-display` (Archivo), `--font-sans` (Manrope)
and `--font-mono` (IBM Plex Mono). Swap the `next/font` imports in
`app/layout.tsx` and the matching token to change the pairing.

The type scale (`display-xl`, `display-lg`, `display-md`, `display-sm`, `lede`,
`label`) and the layout gutter (`shell`) are `@utility` blocks in the same file.

---

## 7. How to connect a CMS or backend later

The data layer was built to be replaced rather than rewritten.

**Content.** Each `/data` module exports plain serialisable objects and a couple
of lookup helpers (`getProject`, `getService`, `getInsight`). To move to a CMS:

```ts
// data/projects.ts
export async function getProjects(): Promise<Project[]> {
  const res = await fetch(`${process.env.CMS_URL}/projects`, {
    next: { revalidate: 3600 },
  });
  return res.json();
}
```

Then `await` it in the pages that currently import the array. Pages are already
Server Components and the dynamic routes already use `generateStaticParams`, so
the only change is making those functions async and mapping over fetched data.
Keep the exported `Project` / `Service` / `Insight` types as the contract your CMS
schema has to satisfy.

**Contact form.** `components/contact/contact-form.tsx` validates with Zod and
then simulates a request. Replace the `setTimeout` in `onSubmit` with a real call:

```ts
const res = await fetch("/api/enquiry", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(values),
});
if (!res.ok) throw new Error("Failed");
setSent(true);
```

Add `app/api/enquiry/route.ts` and reuse the same Zod schema server-side. The
newsletter form in `components/layout/newsletter.tsx` follows the same pattern.

**Careers.** `data/careers.ts` holds the vacancies array; point it at an ATS feed
and add an application endpoint in place of the `mailto:` link in
`components/careers/vacancy-list.tsx`.

**Images.** Swap the `u()` helper in `data/images.ts` for your CMS's image URL
builder and add the host to `next.config.ts`.

---

## Notes

- Contact and newsletter submissions go nowhere — they show a simulated success
  state. Wire them up before launch.
- Privacy and Terms copy is placeholder and should be reviewed by a legal adviser.
- Testimonials, clients, projects and team members are illustrative placeholders.
- All routes prerender statically; there is no server-side data fetching.
