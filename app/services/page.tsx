import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ServiceIcon } from "@/components/icon";
import { PageHeader } from "@/components/layout/page-header";
import { CTA } from "@/components/sections/cta";
import { Process } from "@/components/sections/process";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { IMG } from "@/data/images";
import { additionalServices, services } from "@/data/services";

export const metadata: Metadata = {
  title: "House Engineering Services",
  description:
    "House planning, 3D exterior design, structural analysis, site supervision and municipality plan-pass support in Bharatpur, Chitwan.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `House Engineering Services — ${company.name}`,
    description:
      "Five coordinated services for homeowners, from the first floor plan through municipality documentation and construction supervision.",
    images: [IMG.blueprint],
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Our Expertise"
        title={
          <>
            Five services,
            <br />
            one home-building partner.
          </>
        }
        lede="Start with the service you need or appoint the complete sequence. Every stage is coordinated around one goal: a safe, practical and buildable home."
        image={IMG.blueprint}
        meta={[
          { k: "Core services", v: String(services.length) },
          { k: "Project focus", v: "Residential" },
          { k: "Main office", v: "Bharatpur" },
          { k: "Delivery", v: "Plan to site" },
        ]}
      />

      {/* Alternating full-width service sections */}
      <Section className="pb-0">
        <RevealGroup gap={0.05} className="shell">
          <RevealItem>
            <p className="lede max-w-3xl">
              A house should not be split into disconnected drawings. We
              coordinate the floor plan, exterior, structural system,
              municipality submission and site guidance so decisions made at
              one stage remain practical at the next.
            </p>
          </RevealItem>
        </RevealGroup>

        <div className="mt-16 lg:mt-24">
          {services.map((service, i) => (
            <RevealItem key={service.slug}>
              <article
                id={service.slug}
                className="scroll-mt-28 border-t border-line py-14 last:border-b md:py-20"
              >
                <div className="shell grid grid-cols-1 gap-x-14 gap-y-10 lg:grid-cols-12">
                  {/* Plate — sides alternate so the page does not march */}
                  <div
                    className={
                      "lg:col-span-5 " +
                      (i % 2 === 1 ? "lg:order-2 lg:col-start-8" : "")
                    }
                  >
                    <div className="crop-marks relative aspect-4/3 w-full overflow-hidden bg-paper-2 text-fg-subtle">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Copy */}
                  <div
                    className={
                      "lg:col-span-6 " +
                      (i % 2 === 1 ? "lg:order-1 lg:col-start-1" : "lg:col-start-7")
                    }
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[0.6875rem] tracking-[0.15em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ServiceIcon
                        name={service.icon}
                        className="size-5 text-fg-subtle"
                      />
                    </div>

                    <h2 className="display-md mt-5">{service.title}</h2>
                    <p className="lede mt-5">{service.summary}</p>
                    <p className="mt-5 text-sm leading-relaxed text-fg-muted md:text-base">
                      {service.description}
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
                      <div>
                        <p className="label text-fg-subtle">Scope</p>
                        <ul className="mt-4 flex flex-col gap-2.5">
                          {service.scope.slice(0, 4).map((s) => (
                            <li
                              key={s}
                              className="flex gap-3 text-sm leading-snug text-fg-muted"
                            >
                              <span
                                aria-hidden
                                className="mt-1.5 size-1 shrink-0 bg-accent"
                              />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="label text-fg-subtle">Capabilities</p>
                        <ul className="mt-4 flex flex-col gap-2.5">
                          {service.capabilities.slice(0, 4).map((c) => (
                            <li
                              key={c}
                              className="flex gap-3 text-sm leading-snug text-fg-muted"
                            >
                              <span
                                aria-hidden
                                className="mt-1.5 size-1 shrink-0 bg-line-strong"
                              />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group/btn label mt-10 inline-flex items-center gap-2.5 text-accent"
                    >
                      <span className="link-underline">
                        {service.title} in detail
                      </span>
                      <ArrowUpRight
                        className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                        aria-hidden
                      />
                    </Link>
                  </div>
                </div>
              </article>
            </RevealItem>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink py-20 text-fg-invert md:py-28 lg:py-32">
        <div className="blueprint-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative shell grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="label flex items-center gap-3 text-fg-invert-subtle">
              <span className="text-accent-soft">§ 02</span>
              <span aria-hidden className="h-px w-8 bg-white/20" />
              <span>Additional Support</span>
            </div>
            <h2 className="display-lg mt-7">Useful support around the build.</h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-fg-invert-muted">
              These supporting scopes can be discussed alongside the five core
              services when your project needs them.
            </p>
          </Reveal>

          <RevealGroup
            as="ul"
            gap={0.08}
            className="border-t border-white/12 lg:col-span-7 lg:col-start-6"
          >
            {additionalServices.map((service, index) => (
              <RevealItem
                as="li"
                key={service.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-b border-white/12 py-7 md:grid-cols-[3rem_15rem_1fr] md:items-baseline"
              >
                <span className="font-mono text-[0.625rem] tracking-[0.15em] text-accent-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="col-start-2 mt-3 text-sm leading-relaxed text-fg-invert-muted md:col-start-3 md:mt-0">
                  {service.body}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Process index="03" />

      <CTA
        index="04"
        title="Not sure where to begin?"
        body="Tell us about your plot and the home you want to build. We will help you choose the right first step and explain what comes after it."
        image={IMG.concreteBuilding}
      />
    </>
  );
}
