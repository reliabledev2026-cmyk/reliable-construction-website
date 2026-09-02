import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceIcon } from "@/components/icon";
import { PageHeader } from "@/components/layout/page-header";
import { ResidentialProjectCard } from "@/components/projects/residential-project-card";
import { CTA } from "@/components/sections/cta";
import { RevealImage } from "@/components/ui/media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { projectsForService } from "@/data/residential-projects";
import { getService, services } from "@/data/services";

/** One static page per service. */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — ${company.name}`,
      description: service.summary,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const number = services.findIndex((s) => s.slug === slug) + 1;
  const relatedProjects = projectsForService(service.slug).slice(0, 2);

  return (
    <>
      <PageHeader
        index={String(number).padStart(2, "0")}
        label="Service"
        title={service.title}
        lede={service.summary}
        image={service.image}
        breadcrumb={{ label: "All services", href: "/services" }}
        align="narrow"
      />

      {/* -------------------------------- overview ---------------------------- */}
      <Section>
        <div className="shell">
          <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-7">
              <div className="flex items-center gap-4">
                <ServiceIcon
                  name={service.icon}
                  className="size-7 text-accent"
                />
                <span className="label text-fg-subtle">Overview</span>
              </div>
              <p className="lede mt-8">{service.description}</p>
            </Reveal>

            <Reveal delay={0.06} className="lg:col-span-4 lg:col-start-9">
              <RevealImage
                src={service.image}
                alt={service.title}
                className="aspect-4/3 w-full"
                sizes="(max-width: 1024px) 100vw, 34vw"
              />
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-12 border-t border-line pt-10 lg:mt-20 lg:grid-cols-12 lg:pt-12">
            <Reveal delay={0.1} className="lg:col-span-7">
              <p className="label text-fg-subtle">What the assignment covers</p>
              <ul className="mt-6 grid grid-cols-1 border-t border-line sm:grid-cols-2 sm:gap-x-10">
                {service.scope.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-4 border-b border-line py-4"
                  >
                    <span className="font-mono text-[0.625rem] tracking-[0.15em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-snug">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <aside className="lg:col-span-4 lg:col-start-9">
              <Reveal delay={0.14}>
                <p className="label text-fg-subtle">Technical capability</p>
                <ul className="mt-6 flex flex-col gap-4">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex gap-3 text-sm leading-relaxed">
                      <span
                        aria-hidden
                        className="mt-1.5 size-1 shrink-0 bg-accent"
                      />
                      {c}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="group/btn mt-9 flex items-center justify-between gap-6 bg-ink px-6 py-5 text-fg-invert transition-colors duration-500 ease-out-expo hover:bg-accent"
                >
                  <span className="label">Discuss this service</span>
                  <ArrowUpRight
                    className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            </aside>
          </div>
        </div>
      </Section>

      {relatedProjects.length > 0 && (
        <Section className="bg-paper-2">
          <Reveal className="shell">
            <div className="flex flex-col gap-5 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="label text-accent">Related concept studies</p>
                <h2 className="display-md mt-5">See this service in context.</h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-fg-muted">
                Illustrative placeholders for layout review. Replace with
                approved company project photography before launch.
              </p>
            </div>
          </Reveal>

          <RevealGroup
            gap={0.1}
            className="shell mt-10 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2"
          >
            {relatedProjects.map((project) => (
              <RevealItem key={project.title}>
                <ResidentialProjectCard project={project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Section>
      )}

      <CTA
        title={`Need help with ${service.title.toLowerCase()}?`}
        body="Tell us about your plot, requirements and current stage. We will help you identify the right scope and next step."
        image={service.image}
      />
    </>
  );
}
