import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RevealImage } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { IndexMark, Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { IMG } from "@/data/images";

/**
 * Editorial introduction — text left, a stacked pair of plates right, with the
 * smaller plate breaking out of the column to keep the composition off-axis.
 */
export function AboutIntro() {
  return (
    <Section id="about">
      <div className="shell grid grid-cols-1 gap-x-12 gap-y-16 lg:grid-cols-12">
        {/* ------------------------------- copy ------------------------------- */}
        <div className="lg:col-span-5">
          <Reveal>
            <IndexMark index="01" label="The Practice" />
            <h2 className="display-lg mt-7">
              Your home,
              <br />
              <span className="text-fg-muted">engineered as one whole.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="lede mt-9">{company.intro}</p>
            <p className="mt-6 text-base leading-relaxed text-fg-muted">
              A house works best when its floor plan, exterior, structure,
              municipality documents and site decisions are coordinated from
              the beginning. We keep those parts connected so the design remains
              practical when construction starts.
            </p>
          </Reveal>

          {/* Technical fact strip */}
          <Reveal delay={0.16}>
            <dl className="mt-11 grid grid-cols-2 gap-x-6 border-t border-line sm:grid-cols-3">
              {[
                { k: "Main office", v: "Bharatpur" },
                { k: "Core services", v: "5" },
                { k: "Focus", v: "Residential" },
              ].map((row, i) => (
                <div
                  key={row.k}
                  className={
                    "border-line py-6 " +
                    (i > 0 ? "sm:border-l sm:pl-6" : "")
                  }
                >
                  <dt className="label text-fg-subtle">{row.k}</dt>
                  <dd className="mt-2.5 font-display text-base font-semibold tracking-tight">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <Link
              href="/about"
              className="group/btn label mt-4 inline-flex items-center gap-2.5 text-accent"
            >
              <span className="link-underline">Learn more about us</span>
              <ArrowUpRight
                className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>

        {/* ------------------------------ imagery ----------------------------- */}
        <div className="relative lg:col-span-6 lg:col-start-7">
          {/* Annotation sits above the plate, like a drawing title block */}
          <div className="mb-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1.5 border-b border-line pb-2.5">
            <span className="label text-accent">Fig. 01</span>
            <span className="label text-fg-subtle">
              House engineering · Bharatpur
            </span>
          </div>

          <RevealImage
            src={IMG.concreteBuilding}
            alt="A contemporary multi-level family residence"
            className="aspect-4/5 w-full sm:aspect-3/2 lg:aspect-4/5"
            sizes="(max-width: 1024px) 100vw, 48vw"
          />

          {/* Inset plate, breaking the column edge on large screens */}
          <div className="mt-6 w-2/3 sm:w-1/2 lg:absolute lg:-bottom-10 lg:-left-20 lg:mt-0 lg:w-52 xl:w-60">
            <RevealImage
              src={IMG.studioTable}
              alt="Engineers reviewing drawings in the studio"
              className="aspect-3/4 w-full border-4 border-paper"
              sizes="(max-width: 1024px) 40vw, 240px"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
