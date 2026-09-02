import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/layout/page-header";
import { CTA } from "@/components/sections/cta";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { IMG } from "@/data/images";
import { formatDate, insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights & News",
  description:
    "Technical notes, field reports and practice news from our engineers — sediment management, slope failure mechanisms, seismic design and more.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: `Insights — ${company.name}`,
    description:
      "Technical notes and field reports from practising engineers in Nepal.",
    images: [IMG.drawingSet],
  },
};

export default function InsightsPage() {
  const [lead, ...rest] = insights;

  return (
    <>
      <PageHeader
        index="01"
        label="Insights & News"
        title={
          <>
            What we have
            <br />
            learned on site.
          </>
        }
        lede="Technical notes and field reports written by the engineers who did the work — including the occasions our first assumption turned out to be wrong."
        image={IMG.drawingSet}
      />

      <Section>
        {/* ------------------------------ lead item ---------------------------- */}
        {lead && (
          <RevealGroup className="shell">
            <RevealItem>
              <Link
                href={`/insights/${lead.slug}`}
                className="group grid grid-cols-1 gap-x-12 gap-y-8 border-b border-line pb-14 lg:grid-cols-12"
              >
                <div className="crop-marks relative aspect-16/9 w-full overflow-hidden bg-paper-2 text-fg-subtle lg:col-span-7 lg:aspect-4/3">
                  <Image
                    src={lead.image}
                    alt={lead.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover transition-transform duration-[1.1s] ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>

                <div className="flex flex-col justify-center lg:col-span-5">
                  <div className="label flex flex-wrap items-center gap-x-3 gap-y-2 text-fg-subtle">
                    <span className="text-accent">{lead.category}</span>
                    <span aria-hidden>·</span>
                    <span>{formatDate(lead.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{lead.readingTime}</span>
                  </div>

                  <h2 className="display-md mt-6 transition-transform duration-600 ease-out-expo group-hover:translate-x-1.5">
                    {lead.title}
                  </h2>
                  <p className="lede mt-6">{lead.excerpt}</p>

                  <span className="label mt-9 inline-flex items-center gap-2.5 text-accent">
                    <span className="link-underline">Read the note</span>
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </RevealItem>
          </RevealGroup>
        )}

        {/* -------------------------------- others ----------------------------- */}
        <RevealGroup
          as="ul"
          gap={0.09}
          className="shell mt-14 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-3"
        >
          {rest.map((item) => (
            <RevealItem as="li" key={item.slug} className="group">
              <Link href={`/insights/${item.slug}`} className="block">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-paper-2">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 31vw"
                    className="object-cover transition-transform duration-[1.1s] ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>

                <div className="label mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-fg-subtle">
                  <span className="text-accent">{item.category}</span>
                  <span aria-hidden>·</span>
                  <span>{formatDate(item.date)}</span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold leading-snug tracking-[-0.025em] transition-transform duration-600 ease-out-expo group-hover:translate-x-1">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                  {item.excerpt}
                </p>
                <p className="label mt-5 text-fg-subtle">{item.readingTime}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA index="02" image={IMG.tunnelLit} />
    </>
  );
}
