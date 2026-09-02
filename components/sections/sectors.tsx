"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import { sectors } from "@/data/company";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Sectors served, set as an oversized type list. Hovering a line crossfades the
 * plate on the right; the non-hovered lines recede so the list behaves like a
 * single control rather than eight separate ones.
 */
export function Sectors() {
  const [active, setActive] = React.useState(0);

  return (
    <section className="relative overflow-hidden bg-ink py-20 text-fg-invert md:py-28 lg:py-36">
      <div className="blueprint-grid absolute inset-0 opacity-70" aria-hidden />

      <div className="relative shell grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-12">
        {/* ------------------------------- header ----------------------------- */}
        <div className="lg:col-span-4">
          <div className="label flex items-center gap-3 text-fg-invert-subtle">
            <span className="text-accent-soft">§ 04</span>
            <span aria-hidden className="h-px w-8 bg-white/20" />
            <span>Residential Scope</span>
          </div>
          <h2 className="display-lg mt-7">
            Everything your
            <br />
            home needs.
          </h2>
          <p className="mt-7 max-w-sm text-base leading-relaxed text-fg-invert-muted">
            From the first floor plan to checks on site, each service supports
            the same coordinated home-building process.
          </p>

          {/* Preview plate — desktop only, tied to the hovered line */}
          <div className="relative mt-12 hidden aspect-4/5 w-full max-w-[19rem] overflow-hidden bg-ink-2 lg:block">
            <AnimatePresence mode="sync">
              <motion.div
                key={active}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <Image
                  src={sectors[active].image}
                  alt=""
                  fill
                  sizes="304px"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-ink/25" />
              </motion.div>
            </AnimatePresence>
            <span className="label absolute bottom-4 left-4 z-10 text-white/80">
              {sectors[active].count}
            </span>
          </div>
        </div>

        {/* -------------------------------- list ------------------------------ */}
        <motion.ul
          className="lg:col-span-7 lg:col-start-6"
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.055)}
          onMouseLeave={() => setActive(0)}
        >
          {sectors.map((sector, i) => (
            <motion.li
              key={sector.name}
              variants={fadeUp}
              className="border-b border-white/12 first:border-t"
            >
              {/* Not interactive — hover only swaps the preview plate, so this
                  stays plain content rather than a control. */}
              <div
                onMouseEnter={() => setActive(i)}
                className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
              >
                <span className="flex items-baseline gap-5 md:gap-8">
                  <span className="font-mono text-[0.625rem] tracking-[0.15em] text-fg-invert-subtle transition-colors duration-500 group-hover:text-accent-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "font-display text-[clamp(1.5rem,3.4vw,2.75rem)] font-semibold leading-none tracking-[-0.035em] transition-all duration-600 ease-out-expo group-hover:translate-x-2",
                      active === i
                        ? "text-fg-invert"
                        : "text-fg-invert-muted lg:text-white/35",
                    )}
                  >
                    {sector.name}
                  </span>
                </span>
                <span className="label shrink-0 text-fg-invert-subtle opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {sector.count}
                </span>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
