import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/layout/page-header";
import { CTA } from "@/components/sections/cta";
import { Counter } from "@/components/ui/counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { IMG } from "@/data/images";
import { team, teamStats } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "The engineers, surveyors and environmental specialists behind the practice — their qualifications, disciplines and experience.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: `Our Team — ${company.name}`,
    description:
      "Meet the engineers, surveyors and specialists who lead our commissions.",
    images: [IMG.officeDiscussion],
  },
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="People"
        title={
          <>
            Every drawing
            <br />
            carries a name.
          </>
        }
        lede="Twenty-five technical staff across nine disciplines. The people below lead the work, check it, and answer for it when it reaches site."
        image={IMG.officeDiscussion}
      />

      {/* --------------------------------- figures ---------------------------- */}
      <section className="border-b border-line bg-paper-2">
        <div className="shell">
          <RevealGroup
            as="ul"
            gap={0.08}
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {teamStats.map((s, i) => (
              <RevealItem
                as="li"
                key={s.label}
                className={
                  "border-line py-10 md:py-14 " +
                  (i % 2 === 1 ? "border-l pl-6 " : "") +
                  "lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0 " +
                  (i >= 2 ? "border-t lg:border-t-0 " : "")
                }
              >
                <p className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-none tracking-[-0.045em]">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="label mt-4 text-fg-muted">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* ---------------------------------- team ------------------------------ */}
      <Section>
        <Reveal className="shell">
          <div className="label flex items-center gap-3 text-fg-subtle">
            <span className="text-accent">§ 02</span>
            <span aria-hidden className="h-px w-8 bg-line-strong" />
            <span>Leadership &amp; Discipline Heads</span>
          </div>
        </Reveal>

        <RevealGroup
          as="ul"
          gap={0.07}
          className="shell mt-14 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((person, i) => (
            <RevealItem as="li" key={person.name} className="group">
              <div className="crop-marks relative aspect-3/4 w-full overflow-hidden bg-paper-2 text-fg-subtle">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 24vw"
                  className="object-cover grayscale transition-all duration-[1.1s] ease-out-expo group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                <span className="label absolute left-3 top-3 bg-paper/85 px-2 py-1.5 text-fg backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="label absolute bottom-3 right-3 bg-ink/60 px-2 py-1.5 text-white backdrop-blur-sm">
                  {person.discipline}
                </span>
              </div>

              <div className="pt-5">
                <h2 className="font-display text-lg font-semibold tracking-tight transition-transform duration-600 ease-out-expo group-hover:translate-x-1">
                  {person.name}
                </h2>
                <p className="mt-1.5 text-sm text-accent">{person.position}</p>

                <dl className="mt-5 border-t border-line pt-4 text-xs">
                  <div className="flex gap-3 py-1.5">
                    <dt className="label w-20 shrink-0 text-fg-subtle">Quals</dt>
                    <dd className="leading-relaxed text-fg-muted">
                      {person.qualification}
                    </dd>
                  </div>
                  <div className="flex gap-3 py-1.5">
                    <dt className="label w-20 shrink-0 text-fg-subtle">Exp.</dt>
                    <dd className="text-fg-muted">{person.experience}</dd>
                  </div>
                </dl>

                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                  {person.bio}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA
        index="03"
        title="Want to join this team?"
        body="We hire engineers who want design responsibility early and are willing to spend real time on site to earn it."
        action="See Open Positions"
        href="/careers"
        image={IMG.studioTable}
      />
    </>
  );
}
