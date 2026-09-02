"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";
import { Reveal } from "@/components/ui/reveal";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";

/**
 * Client testimonials.
 * Embla supplies the carousel mechanics; the controls are real buttons with
 * live-region announcements so the section is usable without a pointer.
 */
export function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 32,
  });
  const [selected, setSelected] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (embla) setSelected(embla.selectedScrollSnap());
  }, [embla]);

  React.useEffect(() => {
    if (!embla) return;
    // "reInit" fires once on initialisation, so the initial snap is picked up
    // without setting state synchronously in the effect body.
    embla.on("select", onSelect).on("reInit", onSelect);
    return () => {
      embla.off("select", onSelect).off("reInit", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section className="bg-ink py-20 text-fg-invert md:py-28 lg:py-32">
      <div className="shell">
        <Reveal>
          <div className="label flex items-center gap-3 text-fg-invert-subtle">
            <span className="text-accent-soft">§ 10</span>
            <span aria-hidden className="h-px w-8 bg-white/20" />
            <span>Client Perspective</span>
          </div>
        </Reveal>

        {/* ------------------------------ carousel ----------------------------- */}
        <div className="mt-12 overflow-hidden md:mt-16" ref={emblaRef}>
          <div className="flex touch-pan-y">
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                className="min-w-0 flex-[0_0_100%] pr-0 lg:flex-[0_0_78%] lg:pr-16"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${testimonials.length}`}
              >
                <blockquote>
                  <p
                    className={cn(
                      "font-display text-[clamp(1.35rem,2.9vw,2.4rem)] font-medium leading-[1.24] tracking-[-0.028em] transition-opacity duration-500",
                      selected === i ? "opacity-100" : "opacity-30",
                    )}
                  >
                    <span className="text-accent-soft">“</span>
                    {t.quote}
                    <span className="text-accent-soft">”</span>
                  </p>
                </blockquote>

                <figcaption
                  className={cn(
                    "mt-9 flex flex-col gap-1 border-t border-white/12 pt-6 transition-opacity duration-500",
                    selected === i ? "opacity-100" : "opacity-30",
                  )}
                >
                  <span className="font-display text-base font-semibold tracking-tight">
                    {t.name}
                  </span>
                  <span className="text-sm text-fg-invert-muted">
                    {t.position}, {t.organisation}
                  </span>
                  {t.project && (
                    <span className="label mt-2 text-fg-invert-subtle">
                      {t.project}
                    </span>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* ------------------------------ controls ----------------------------- */}
        <div className="mt-12 flex items-center justify-between border-t border-white/12 pt-6">
          <p className="label text-fg-invert-subtle" aria-live="polite">
            <span className="text-fg-invert">
              {String(selected + 1).padStart(2, "0")}
            </span>{" "}
            / {String(testimonials.length).padStart(2, "0")}
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => embla?.scrollPrev()}
              aria-label="Previous testimonial"
              className="flex size-12 items-center justify-center border border-white/20 text-fg-invert-muted transition-colors duration-400 hover:border-accent hover:bg-accent hover:text-white"
            >
              <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => embla?.scrollNext()}
              aria-label="Next testimonial"
              className="flex size-12 items-center justify-center border border-white/20 text-fg-invert-muted transition-colors duration-400 hover:border-accent hover:bg-accent hover:text-white"
            >
              <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
