import { PageHeader } from "@/components/layout/page-header";
import { CTA } from "@/components/sections/cta";
import { RevealImage } from "@/components/ui/media";
import { DrawRule, Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company, mission, values, vision } from "@/data/company";
import { IMG } from "@/data/images";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About the Practice",
  description: `${company.shortName} is a house engineering and construction consultancy in Bharatpur, Chitwan, coordinating planning, design, approval and site supervision.`,
  path: "/about",
  image: IMG.reviewingDrawings,
  imageAlt: "House design professionals reviewing coordinated drawings",
  keywords: [
    "house engineering consultancy Bharatpur",
    "residential consultants Chitwan",
    "construction consultancy Nepal",
  ],
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="About Reliable"
        title={
          <>
            One practice for a
            <br />
            better-planned home.
          </>
        }
        lede="We bring the key house-engineering decisions together early, so what is drawn, approved and built stays consistent."
        image={IMG.modernHome}
        meta={[
          { k: "Main office", v: "Bharatpur, Chitwan" },
          { k: "Core services", v: String(services.length) },
          { k: "Project focus", v: "Residential" },
          { k: "Support", v: "Plan to site" },
        ]}
      />

      <Section className="pt-12 md:pt-16 lg:pt-20">
        <div className="shell grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6">
            <RevealImage
              src={IMG.reviewingDrawings}
              alt="Design professionals reviewing architectural drawings"
              className="aspect-4/3 w-full lg:aspect-4/5"
              sizes="(max-width: 1024px) 100vw, 48vw"
              caption="Planning decisions resolved before construction"
            />
          </Reveal>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <div className="label flex items-center gap-3 text-fg-subtle">
                <span className="text-accent">§ 02</span>
                <span aria-hidden className="h-px w-8 bg-line-strong" />
                <span>Our Approach</span>
              </div>
              <h2 className="display-md mt-7">The whole home, considered together.</h2>
              <p className="lede mt-7">{company.intro}</p>
              <p className="mt-6 text-base leading-relaxed text-fg-muted">
                Homeowners should not have to coordinate separate drawings and
                conflicting advice. We connect space planning, exterior form,
                structure, approval documentation and site guidance around one
                clear brief.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <dl className="mt-10 border-t border-line">
                {[
                  ["Plan", "2D layout shaped around your plot and daily life"],
                  ["Visualise", "3D exterior decisions made before work begins"],
                  ["Build", "Technical drawings and guidance carried to site"],
                ].map(([term, detail]) => (
                  <div
                    key={term}
                    className="grid grid-cols-[6rem_1fr] gap-4 border-b border-line py-5"
                  >
                    <dt className="label text-accent">{term}</dt>
                    <dd className="text-sm leading-relaxed text-fg-muted">{detail}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="bg-paper-2">
        <div className="shell grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="label flex items-center gap-3 text-fg-subtle">
              <span className="text-accent">§ 03</span>
              <span aria-hidden className="h-px w-8 bg-line-strong" />
              <span>Direction</span>
            </div>
            <h2 className="display-lg mt-7">Designed for confidence.</h2>
          </Reveal>

          <div className="lg:col-span-7 lg:col-start-6">
            {[vision, mission].map((block, index) => (
              <Reveal key={block.title} delay={index * 0.08}>
                {index > 0 && <DrawRule className="my-10" />}
                <p className="label text-accent">{block.title}</p>
                <p className="lede mt-5">{block.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-fg-invert md:py-28 lg:py-32">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative shell">
          <Reveal>
            <p className="label text-accent-soft">How we work</p>
            <h2 className="display-lg mt-7 max-w-3xl">Simple principles behind every home.</h2>
          </Reveal>

          <RevealGroup
            as="ul"
            gap={0.08}
            className="mt-14 grid grid-cols-1 border-t border-white/12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
          >
            {values.map((value, index) => (
              <RevealItem
                as="li"
                key={value.title}
                className="border-b border-white/12 py-9 sm:px-7 sm:nth-odd:border-r lg:border-r lg:last:border-r-0 lg:nth-odd:border-r"
              >
                <span className="font-mono text-[0.625rem] tracking-[0.15em] text-accent-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm mt-5">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-fg-invert-muted">
                  {value.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTA
        index="04"
        title="Ready to plan your home properly?"
        body="Bring us your plot details, room requirements and ideas. We will help you turn them into a clear next step."
        image={IMG.heroMain}
      />
    </>
  );
}
