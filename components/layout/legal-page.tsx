import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { siteUrl } from "@/lib/seo";

export type LegalSection = { heading: string; body: string[] };

/**
 * Shared layout for the privacy and terms pages. Replace the section content in
 * app/privacy and app/terms with copy reviewed by your legal adviser.
 */
export function LegalPage({
  label,
  title,
  updated,
  intro,
  sections,
}: {
  label: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHeader
        index="01"
        label={label}
        title={title}
        lede={intro}
        align="narrow"
        meta={[
          { k: "Last updated", v: updated },
          { k: "Applies to", v: siteUrl.replace("https://", "") },
        ]}
      />

      <Section>
        <div className="shell grid grid-cols-1 gap-x-16 lg:grid-cols-12">
          {/* Contents rail */}
          <nav
            aria-label="On this page"
            className="hidden lg:col-span-3 lg:block"
          >
            <p className="label text-fg-subtle">Contents</p>
            <ol className="mt-6 flex flex-col gap-3">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#s-${i + 1}`}
                    className="flex gap-3 text-sm text-fg-muted transition-[color,transform] duration-400 ease-out-expo hover:translate-x-1 hover:text-accent"
                  >
                    <span className="font-mono text-[0.625rem] tracking-[0.15em] text-fg-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="lg:col-span-8 lg:col-start-5">
            {sections.map((section, i) => (
              <Reveal key={section.heading}>
                <section
                  id={`s-${i + 1}`}
                  className="scroll-mt-28 border-t border-line py-10 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[0.6875rem] tracking-[0.15em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="display-sm">{section.heading}</h2>
                  </div>
                  {section.body.map((p, j) => (
                    <p
                      key={j}
                      className="mt-5 text-base leading-relaxed text-fg-muted"
                    >
                      {p}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}

            <Reveal>
              <div className="mt-10 border border-line bg-paper-2 p-7">
                <p className="label text-fg-subtle">Questions</p>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
                  Contact us at{" "}
                  <a
                    href={`mailto:${company.contact.email}`}
                    className="text-accent link-underline"
                  >
                    {company.contact.email}
                  </a>{" "}
                  or write to {company.legalName}, {company.contact.address.line1},{" "}
                  {company.contact.address.line2}, {company.contact.address.country}.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
