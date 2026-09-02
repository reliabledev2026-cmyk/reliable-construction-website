import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/page-header";
import { CTA } from "@/components/sections/cta";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { formatDate, getInsight, insights } from "@/data/insights";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) return { title: "Article not found" };

  return {
    title: item.title,
    description: item.excerpt,
    alternates: { canonical: `/insights/${item.slug}` },
    openGraph: {
      type: "article",
      title: item.title,
      description: item.excerpt,
      publishedTime: item.date,
      authors: [item.author],
      images: [item.image],
    },
  };
}

export default async function InsightPage({
  params,
}: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();

  const more = insights.filter((i) => i.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        index={String(insights.indexOf(item) + 1).padStart(2, "0")}
        label={item.category}
        title={item.title}
        image={item.image}
        breadcrumb={{ label: "All insights", href: "/insights" }}
        align="narrow"
        meta={[
          { k: "Author", v: item.author },
          { k: "Published", v: formatDate(item.date) },
          { k: "Reading time", v: item.readingTime },
          { k: "Category", v: item.category },
        ]}
      />

      {/* --------------------------------- article ---------------------------- */}
      <Section>
        <article className="shell grid grid-cols-1 gap-x-16 lg:grid-cols-12">
          <div className="lg:col-span-7 lg:col-start-3">
            <Reveal>
              <p className="lede text-fg">{item.excerpt}</p>
              <div className="rule my-10" />
            </Reveal>

            <RevealGroup gap={0.05}>
              {item.body.map((paragraph, i) => (
                <RevealItem key={i}>
                  <p className="mt-6 text-base leading-[1.75] text-fg-muted first:mt-0 md:text-[1.0625rem]">
                    {paragraph}
                  </p>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal>
              <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-8">
                <div>
                  <p className="label text-fg-subtle">Written by</p>
                  <p className="mt-3 font-display text-lg font-semibold tracking-tight">
                    {item.author}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="group/btn label inline-flex items-center gap-2.5 text-accent"
                >
                  <span className="link-underline">Discuss this with us</span>
                  <ArrowUpRight
                    className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                    aria-hidden
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </article>
      </Section>

      {/* ---------------------------------- more ------------------------------ */}
      <Section className="pt-0">
        <Reveal className="shell">
          <div className="rule mb-14" />
          <h2 className="display-md">More from the practice</h2>
        </Reveal>

        <RevealGroup
          as="ul"
          gap={0.09}
          className="shell mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3"
        >
          {more.map((other) => (
            <RevealItem as="li" key={other.slug} className="group">
              <Link href={`/insights/${other.slug}`} className="block">
                <div className="relative aspect-4/3 w-full overflow-hidden bg-paper-2">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 31vw"
                    className="object-cover transition-transform duration-[1.1s] ease-out-expo group-hover:scale-[1.04]"
                  />
                </div>
                <p className="label mt-5 text-accent">{other.category}</p>
                <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-[-0.025em] transition-transform duration-600 ease-out-expo group-hover:translate-x-1">
                  {other.title}
                </h3>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTA image={item.image} />
    </>
  );
}
