import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ResidentialProjectCard } from "@/components/projects/residential-project-card";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { residentialProjects } from "@/data/residential-projects";

export function ConceptProjects() {
  return (
    <Section id="projects" className="scroll-mt-20 bg-paper-2">
      <SectionHeader
        index="03"
        label="Concept Showcase"
        title={
          <>
            Homes imagined with
            <br />
            clarity and character.
          </>
        }
        lede="Illustrative residential studies preview how real company work can be presented here. Replace these with approved project details and photography before launch."
        action={
          <Link
            href="/projects"
            className="group/btn label inline-flex items-center gap-2.5 text-accent"
          >
            <span className="link-underline">Explore all projects</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
              aria-hidden
            />
          </Link>
        }
      />

      <RevealGroup
        gap={0.1}
        className="shell mt-14 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-3"
      >
        {residentialProjects.map((project, index) => (
          <RevealItem key={project.title}>
            <ResidentialProjectCard project={project} priority={index === 0} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
