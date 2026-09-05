import { AboutIntro } from "@/components/sections/about-intro";
import { ConceptProjects } from "@/components/sections/concept-projects";
import { CTA } from "@/components/sections/cta";
import { FacebookNotices } from "@/components/sections/facebook-notices";
import { FAQ } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { ServicesList } from "@/components/sections/services-list";
import { TeamPreview } from "@/components/sections/team-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { Section, SectionHeader } from "@/components/ui/section";
import { IMG } from "@/data/images";
import { createPageMetadata, siteDescription, siteTitle } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: siteTitle,
  description: siteDescription,
  path: "/",
  absoluteTitle: true,
  image: IMG.heroMain,
  imageAlt: "Modern family house designed for comfortable residential living",
  keywords: [
    "house design and construction Bharatpur",
    "house engineering consultancy Chitwan",
    "residential design Nepal",
  ],
});

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
              Complete home services,
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
      <Testimonials />
      <FAQ />
      <FacebookNotices />
      <CTA index="09" />
    </>
  );
}
