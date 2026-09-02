import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { differentiators } from "@/data/company";

/**
 * Reasons to appoint us — set as a numbered register rather than icon cards.
 * The oversized numeral does the work an icon usually would.
 */
export function WhyUs() {
  return (
    <Section>
      <SectionHeader
        index="03"
        label="Why Choose Us"
        title={
          <>
            Better coordination,
            <br />
            fewer surprises on site.
          </>
        }
        lede="Clear drawings, coordinated engineering and practical support reduce uncertainty before and during construction."
      />

      <RevealGroup
        as="ul"
        gap={0.07}
        className="shell mt-16 grid grid-cols-1 border-t border-line md:grid-cols-2 lg:mt-20 lg:grid-cols-3"
      >
        {differentiators.map((item, i) => (
          <RevealItem
            as="li"
            key={item.title}
            // 2 cols at md, 3 at lg — a left hairline only on cells that are
            // not first in their row.
            className="group relative border-b border-line py-10 pr-0 md:py-12 md:pr-10 md:even:border-l md:even:pl-10 lg:even:border-l-0 lg:even:pl-0 lg:not-nth-[3n+1]:border-l lg:not-nth-[3n+1]:pl-10"
          >
            {/* Accent rule that draws across on hover */}
            <span
              aria-hidden
              className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
            />

            <span className="font-mono text-[0.6875rem] tracking-[0.15em] text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>

            <h3 className="display-sm mt-6 transition-transform duration-600 ease-out-expo group-hover:translate-x-1">
              {item.title}
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted md:text-base">
              {item.body}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
