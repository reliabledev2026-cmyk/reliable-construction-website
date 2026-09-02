import type { Metadata } from "next";
import { AboutIntro } from "@/components/sections/about-intro";
import { ConceptProjects } from "@/components/sections/concept-projects";
import { CTA } from "@/components/sections/cta";
import { FacebookNotices } from "@/components/sections/facebook-notices";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ServicesList } from "@/components/sections/services-list";
import { TeamPreview } from "@/components/sections/team-preview";
import { Section, SectionHeader } from "@/components/ui/section";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: `${company.name} — Your Dream Home, Our Commitment`,
  description: company.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />

      <Section id="services" className="pb-0">
        <SectionHeader
          index="02"
          label="Our Expertise"
          title={
            <>
              Five home services,
              <br />
              one coordinated team.
            </>
          }
          lede="Plan, visualise, check, approve and build with one team keeping every drawing and site decision connected."
        />
        <div className="mt-14 lg:mt-20">
          <ServicesList />
        </div>
      </Section>

      <ConceptProjects />
      <TeamPreview />
      <Process />
      <FacebookNotices />
      <CTA index="07" />
    </>
  );
}
