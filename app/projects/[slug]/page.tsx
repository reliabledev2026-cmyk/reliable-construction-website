import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ResidentialProjectCard } from "@/components/projects/residential-project-card";
import { PageHeader } from "@/components/layout/page-header";
import { CTA } from "@/components/sections/cta";
import { RevealImage } from "@/components/ui/media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import {
  getResidentialProject,
  residentialProjects,
} from "@/data/residential-projects";
import { services } from "@/data/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return residentialProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getResidentialProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${company.name}`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getResidentialProject(slug);
  if (!project) notFound();

  const projectIndex = residentialProjects.findIndex((item) => item.slug === slug);
  const related = residentialProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 2);
  const projectServices = services.filter((service) =>
    project.serviceSlugs.includes(service.slug),
  );

  return (
    <>
      <PageHeader
        index={String(projectIndex + 1).padStart(2, "0")}
        label={project.label}
        title={project.title}
        lede={project.summary}
        image={project.image}
        breadcrumb={{ label: "All projects", href: "/projects" }}
        meta={project.facts.map((fact) => ({ k: fact.label, v: fact.value }))}
      />

      <Section className="pt-12 md:pt-16 lg:pt-20">
        <div className="shell grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="label text-accent">Project overview</p>
              <h2 className="display-md mt-6">A coordinated residential concept.</h2>
            </Reveal>
            {project.description.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.06 + index * 0.05}>
                <p className={index === 0 ? "lede mt-7" : "mt-6 text-base leading-relaxed text-fg-muted"}>
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.1}>
              <p className="label text-fg-subtle">Services represented</p>
              <ul className="mt-5 border-t border-line">
                {projectServices.map((service, index) => (
                  <li
                    key={service.slug}
                    className="flex items-baseline gap-4 border-b border-line py-4"
                  >
                    <span className="font-mono text-[0.625rem] tracking-[0.15em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm">{service.title}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-relaxed text-fg-subtle">
                Illustrative concept only. Replace with confirmed company scope
                and project information before launch.
              </p>
            </Reveal>
          </aside>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-fg-invert md:py-28 lg:py-32">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative shell grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="label text-accent-soft">§ 02 · Study Scope</p>
            <h2 className="display-lg mt-7">What this concept brings together.</h2>
          </Reveal>

          <RevealGroup
            as="ol"
            gap={0.07}
            className="border-t border-white/12 lg:col-span-7 lg:col-start-6"
          >
            {project.scope.map((item, index) => (
              <RevealItem
                as="li"
                key={item}
                className="flex items-baseline gap-6 border-b border-white/12 py-6"
              >
                <span className="font-mono text-[0.625rem] tracking-[0.15em] text-accent-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                  {item}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Section>
        <Reveal className="shell">
          <p className="label text-accent">§ 03 · Project Gallery</p>
          <div className="mt-6 flex flex-col gap-5 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
            <h2 className="display-md">Views, drawings and delivery context.</h2>
            <p className="max-w-sm text-sm leading-relaxed text-fg-muted">
              Placeholder imagery establishes the gallery rhythm; replace it
              with approved project media for the final portfolio.
            </p>
          </div>
        </Reveal>

        <div className="shell mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
          {project.gallery.map((image, index) => (
            <RevealImage
              key={image}
              src={image}
              alt={`${project.title} reference ${index + 1}`}
              className={
                index === 0
                  ? "aspect-4/3 md:col-span-8 md:row-span-2 md:aspect-auto md:min-h-[38rem]"
                  : "aspect-4/3 md:col-span-4"
              }
              sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-paper-2">
        <Reveal className="shell">
          <p className="label text-accent">Explore next</p>
          <h2 className="display-md mt-5">Related residential studies.</h2>
        </Reveal>
        <RevealGroup
          gap={0.1}
          className="shell mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2"
        >
          {related.map((item) => (
            <RevealItem key={item.slug}>
              <ResidentialProjectCard project={item} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA
        index="04"
        title="Want to develop a similar home?"
        body="Share your plot, room needs and preferred style. We will help you translate them into a coordinated planning and engineering scope."
        image={project.image}
      />
    </>
  );
}
