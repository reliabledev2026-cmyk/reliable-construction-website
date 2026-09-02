import { Counter } from "@/components/ui/counter";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { stats } from "@/data/company";
import { cn } from "@/lib/utils";

/**
 * Trust band. The figures are the whole point, so they are set at display scale
 * and everything else is reduced to annotation.
 */
export function Stats({ dark = false }: { dark?: boolean }) {
  return (
    <section
      className={cn(
        "relative",
        dark ? "bg-ink text-fg-invert" : "bg-paper",
      )}
    >
      <div className="shell">
        <RevealGroup
          as="ul"
          gap={0.09}
          className={cn(
            "grid grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-4",
            dark ? "border-white/12" : "border-line",
          )}
        >
          {stats.map((stat, i) => (
            <RevealItem
              as="li"
              key={stat.label}
              className={cn(
                "group relative py-10 md:py-14 lg:py-16",
                // Hairline gutters between cells, matching a drawing sheet
                i > 0 && "border-t sm:border-t-0",
                dark ? "border-white/12" : "border-line",
                "sm:[&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0",
                i % 2 === 1 && "sm:border-l sm:pl-8",
                "lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0",
              )}
            >
              <span
                className={cn(
                  "label",
                  dark ? "text-fg-invert-subtle" : "text-fg-subtle",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="mt-6 flex items-start font-display text-[clamp(3.25rem,7vw,5.5rem)] font-semibold leading-none tracking-[-0.045em]">
                <Counter value={stat.value} />
                <span className={cn("mt-1 md:mt-2", dark ? "text-accent-soft" : "text-accent")}>
                  {stat.suffix}
                </span>
              </p>

              <p className="mt-5 max-w-[14rem] font-display text-lg font-semibold tracking-tight">
                {stat.label}
              </p>
              <p
                className={cn(
                  "mt-2 text-sm",
                  dark ? "text-fg-invert-muted" : "text-fg-muted",
                )}
              >
                {stat.note}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
