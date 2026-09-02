import type { Metadata } from "next";
import { VacancyList } from "@/components/careers/vacancy-list";
import { PageHeader } from "@/components/layout/page-header";
import { CTA } from "@/components/sections/cta";
import { RevealImage } from "@/components/ui/media";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { benefits, careersImages, culture, vacancies } from "@/data/careers";
import { company } from "@/data/company";
import { IMG } from "@/data/images";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Engineering and site opportunities based from our main office in Bharatpur, Chitwan.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: `Careers — ${company.name}`,
    description:
      "Build your career with a practice that gives engineers design responsibility early.",
    images: [careersImages.culture],
  },
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Careers"
        title={
          <>
            Build your career
            <br />
            with us.
          </>
        }
        lede="We hire engineers who want design responsibility early and are willing to spend real time on site to earn it. There are currently six open positions."
        image={careersImages.field}
        meta={[
          { k: "Open positions", v: String(vacancies.length) },
          { k: "Technical staff", v: "25+" },
          { k: "Main office", v: "Bharatpur · Chitwan" },
          { k: "Graduate intake", v: "Annual" },
        ]}
      />

      {/* --------------------------------- culture ---------------------------- */}
      <Section>
        <div className="shell grid grid-cols-1 gap-x-16 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="label flex items-center gap-3 text-fg-subtle">
                <span className="text-accent">§ 02</span>
                <span aria-hidden className="h-px w-8 bg-line-strong" />
                <span>How We Work</span>
              </div>
              <h2 className="display-lg mt-7">
                A practice, not
                <br />
                a production line.
              </h2>
              <p className="lede mt-8">
                Consultancies can quietly turn engineers into drafters. We have
                structured this one so that does not happen — which costs us
                some short-term efficiency and buys us people who stay.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-12">
                <RevealImage
                  src={careersImages.culture}
                  alt="The studio during a design review"
                  className="aspect-3/2 w-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </Reveal>
          </div>

          <RevealGroup
            as="ul"
            gap={0.08}
            className="lg:col-span-6 lg:col-start-7"
          >
            {culture.map((c, i) => (
              <RevealItem
                as="li"
                key={c.title}
                className="border-b border-line py-8 first:border-t first:pt-0 lg:py-10 lg:first:pt-0"
              >
                <span className="font-mono text-[0.6875rem] tracking-[0.15em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="display-sm mt-4">{c.title}</h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-fg-muted md:text-base">
                  {c.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Section>

      {/* -------------------------------- benefits ---------------------------- */}
      <section className="bg-ink py-20 text-fg-invert md:py-24">
        <div className="shell">
          <Reveal>
            <div className="label flex items-center gap-3 text-fg-invert-subtle">
              <span className="text-accent-soft">§ 03</span>
              <span aria-hidden className="h-px w-8 bg-white/20" />
              <span>What We Offer</span>
            </div>
          </Reveal>

          <RevealGroup
            as="ul"
            gap={0.05}
            className="mt-12 grid grid-cols-1 gap-x-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {benefits.map((b, i) => (
              <RevealItem
                as="li"
                key={b}
                className="flex items-baseline gap-4 border-b border-white/12 py-5"
              >
                <span className="font-mono text-[0.625rem] tracking-[0.15em] text-accent-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-snug text-fg-invert-muted">
                  {b}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* -------------------------------- vacancies --------------------------- */}
      <Section id="vacancies">
        <SectionHeader
          index="04"
          label="Open Positions"
          title="Current vacancies."
          lede="Select a role to read the full brief. Applications are by email — we reply to every one, including the unsuccessful ones."
        />
        <div className="shell mt-14 lg:mt-20">
          <VacancyList />
        </div>
      </Section>

      <CTA
        index="05"
        title="No suitable role listed?"
        body="We keep speculative applications on file and review them whenever a position opens. Tell us what you would want to work on."
        action="Send a Speculative Application"
        image={IMG.craneScaffold}
      />
    </>
  );
}
