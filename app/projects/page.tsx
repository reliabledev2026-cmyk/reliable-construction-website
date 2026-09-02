import type { Metadata } from "next";
import { ResidentialProjectCard } from "@/components/projects/residential-project-card";
import { PageHeader } from "@/components/layout/page-header";
import { CTA } from "@/components/sections/cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { IMG } from "@/data/images";
import { residentialProjects } from "@/data/residential-projects";

export const metadata: Metadata = {
  title: "Residential Projects",
  description:
    "Explore residential planning, exterior design and engineering concept studies from Reliable Consulting & Construction in Bharatpur, Chitwan.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Residential Projects — ${company.name}`,
    description:
      "Residential concept studies showing how planning, design, structure and site guidance come together.",
    images: [IMG.heroMain],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Residential Projects"
        title={
          <>
            House ideas,
            <br />
            presented clearly.
          </>
        }
        lede="Explore how layout, exterior character and engineering decisions can be presented as one coordinated residential story."
        image={IMG.heroMain}
        meta={[
          { k: "Studies shown", v: String(residentialProjects.length) },
          { k: "Project type", v: "Residential" },
          { k: "Current status", v: "Concept previews" },
          { k: "Next step", v: "Replace with real work" },
        ]}
      />

      <Section className="pt-12 md:pt-16 lg:pt-20">
        <Reveal className="shell">
          <div className="grid grid-cols-1 gap-x-16 gap-y-6 border-b border-line pb-10 lg:grid-cols-12 lg:items-end">
            <h2 className="display-md lg:col-span-6">A clean project showcase, ready for real work.</h2>
            <p className="lede lg:col-span-5 lg:col-start-8">
              These entries are illustrative placeholders based on residential
              project presentation patterns. Each can later be replaced with an
              approved title, location, scope, description and image gallery.
            </p>
          </div>
        </Reveal>

        <RevealGroup
          gap={0.1}
          className="shell mt-12 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:mt-16"
        >
          {residentialProjects.map((project, index) => (
            <RevealItem
              key={project.slug}
              className={index === 0 ? "md:col-span-2 md:[&_article>_a>_div:first-child]:aspect-21/9" : ""}
            >
              <ResidentialProjectCard project={project} priority={index === 0} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-fg-invert md:py-24">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
        <Reveal className="relative shell grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="label text-accent-soft">Project information needed</p>
            <h2 className="display-md mt-5">Turn these samples into a trusted portfolio.</h2>
          </div>
          <p className="text-base leading-relaxed text-fg-invert-muted lg:col-span-4 lg:col-start-9">
            For each real home, provide approved photographs, location, design
            stage, services delivered and a short description of what made the
            project useful to the client.
          </p>
        </Reveal>
      </section>

      <CTA
        index="02"
        title="Have a home project in mind?"
        body="Tell us about your plot, preferred style and room requirements. We will help you define a practical starting point."
        image={IMG.modernHome}
      />
    </>
  );
}
