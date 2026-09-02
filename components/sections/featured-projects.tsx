import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/projects/project-card";
import { RevealItem, RevealGroup } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { featuredProjects } from "@/data/projects";

/**
 * Selected projects.
 *
 * The tiles are deliberately unequal — a lead plate, a tall portrait beside it
 * and two mid-weight tiles below — with vertical offsets so the grid reads as a
 * composed spread rather than a repeating card row.
 */
export function FeaturedProjects() {
  const [lead, second, third, fourth, fifth] = featuredProjects;

  return (
    <Section id="projects">
      <SectionHeader
        index="04"
        label="Selected Projects"
        title={
          <>
            Work that had to
            <br />
            hold up in the field.
          </>
        }
        lede="A sample of recent commissions across hydropower, transport, water and public buildings — each one shaped by the terrain, budget and climate it had to survive."
        action={
          <Link
            href="/projects"
            className="group/btn label inline-flex items-center gap-2.5 self-start text-accent"
          >
            <span className="link-underline">View all projects</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
              aria-hidden
            />
          </Link>
        }
      />

      <RevealGroup
        gap={0.12}
        className="shell mt-16 grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-20 lg:mt-24"
      >
        {/* Lead plate — widest and most cinematic */}
        {lead && (
          <RevealItem className="md:col-span-12 lg:col-span-8">
            <ProjectCard
              project={lead}
              index={0}
              aspect="aspect-4/3 lg:aspect-16/10"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 62vw"
              priority
            />
          </RevealItem>
        )}

        {/* Tall portrait, dropped down the page to break the top line */}
        {second && (
          <RevealItem className="md:col-span-6 lg:col-span-4 lg:mt-28">
            <ProjectCard
              project={second}
              index={1}
              aspect="aspect-4/3 md:aspect-3/4"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </RevealItem>
        )}

        {/* Mid row: narrow + wide, offset upward */}
        {third && (
          <RevealItem className="md:col-span-6 lg:col-span-5 lg:-mt-8">
            <ProjectCard
              project={third}
              index={2}
              aspect="aspect-4/3 md:aspect-3/4 lg:aspect-4/5"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </RevealItem>
        )}

        {fourth && (
          <RevealItem className="md:col-span-6 lg:col-span-6 lg:col-start-7 lg:mt-20">
            <ProjectCard
              project={fourth}
              index={3}
              aspect="aspect-4/3 lg:aspect-16/10"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </RevealItem>
        )}

        {/* The trailing void is given a job rather than left empty */}
        <RevealItem className="hidden self-end pb-2 lg:col-span-4 lg:col-start-1 lg:block">
          <p className="display-sm max-w-[16rem] text-fg-muted">
            Sixteen more commissions in the full register.
          </p>
          <Link
            href="/projects"
            className="group/btn label mt-7 inline-flex items-center gap-2.5 text-accent"
          >
            <span className="link-underline">Browse the portfolio</span>
            <ArrowUpRight
              className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
              aria-hidden
            />
          </Link>
        </RevealItem>

        {fifth && (
          <RevealItem className="md:col-span-6 lg:col-span-6 lg:col-start-6">
            <ProjectCard
              project={fifth}
              index={4}
              aspect="aspect-4/3 lg:aspect-3/2"
              sizes="(max-width: 768px) 100vw, 48vw"
            />
          </RevealItem>
        )}
      </RevealGroup>
    </Section>
  );
}
