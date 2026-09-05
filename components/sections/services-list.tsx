"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ServiceIcon } from "@/components/icon";
import { services } from "@/data/services";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";

/**
 * The expertise index.
 *
 * Rather than a grid of cards, the core services are set as a typographic
 * index — the way a drawing register or a contents page would be. On a pointer
 * device, hovering a row summons a preview plate that tracks the cursor.
 */
export function ServicesList() {
  const [active, setActive] = React.useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  // Raw pointer position, smoothed so the plate trails the cursor slightly.
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const px = useSpring(x, { stiffness: 260, damping: 34, mass: 0.6 });
  const py = useSpring(y, { stiffness: 260, damping: 34, mass: 0.6 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    x.set(e.clientX + 28);
    y.set(e.clientY - 150);
  };

  return (
    <div className="relative" onMouseMove={onMove}>
      <motion.ul
        className="shell border-t border-line"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.05)}
        onMouseLeave={() => setActive(null)}
      >
        {services.map((service, i) => (
          <motion.li key={service.slug} variants={fadeUp} className="border-b border-line">
            <Link
              href={`/services/${service.slug}`}
              onMouseEnter={() => {
                if (!prefersReducedMotion) setActive(i);
              }}
              className="group relative flex items-center gap-5 py-7 md:gap-10 md:py-9"
            >
              {/* Accent wash that wipes in from the left on hover */}
              <span
                aria-hidden
                className="absolute inset-y-0 -left-4 -right-4 origin-left scale-x-0 bg-paper-2 transition-transform duration-600 ease-out-expo group-hover:scale-x-100 md:-left-8 md:-right-8"
              />

              <span className="relative font-mono text-[0.6875rem] tracking-[0.15em] text-fg-subtle transition-colors duration-500 group-hover:text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>

              <ServiceIcon
                name={service.icon}
                className="relative hidden size-6 shrink-0 text-fg-subtle transition-all duration-500 ease-out-expo group-hover:-translate-y-0.5 group-hover:text-accent md:block"
              />

              {/* Fixed title column so every description starts on the same
                  vertical — the list has to read as a register, not a stack. */}
              <span className="relative min-w-0 flex-1 md:flex md:items-baseline md:gap-10">
                <span className="block font-display text-[clamp(1.35rem,2.6vw,2.25rem)] font-semibold leading-tight tracking-[-0.03em] transition-transform duration-600 ease-out-expo group-hover:translate-x-2 md:w-[19rem] md:shrink-0 lg:w-[24rem]">
                  {service.title}
                </span>
                <span className="mt-2 block max-w-md text-sm leading-relaxed text-fg-muted md:mt-0 md:max-w-none md:flex-1">
                  {service.summary}
                </span>
              </span>

              <ArrowUpRight
                className="relative size-5 shrink-0 text-fg-subtle transition-all duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                strokeWidth={1.5}
                aria-hidden
              />
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* ---------------------------- cursor preview ---------------------------- */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[19rem] w-[14rem] overflow-hidden lg:block"
            style={{ x: px, y: py }}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <Image
              key={services[active].slug}
              src={services[active].image}
              alt=""
              fill
              sizes="224px"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-ink/15" />
            <span className="label absolute bottom-3 left-3 text-white/85">
              {String(active + 1).padStart(2, "0")} / {services.length}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
