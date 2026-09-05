"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { IMG } from "@/data/images";
import { EASE } from "@/lib/motion";

const LINES = ["Your Dream Home.", "Our Commitment."];

/** Each heading line rises out of its own mask. */
function HeadingLine({ text, delay }: { text: string; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, ease: EASE, delay }}
      >
        {text}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // A restrained drift — the photograph lags the page rather than parallaxing.
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink text-fg-invert md:justify-end"
    >
      {/* ------------------------------- backdrop ------------------------------ */}
      <motion.div
        className="absolute inset-0"
        style={{ y: prefersReducedMotion ? "0%" : imageY }}
      >
        <motion.div
          className="relative h-[112%] w-full"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: EASE }}
        >
          <Image
            src={IMG.heroMain}
            alt="A contemporary family home illuminated at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Scrims: vertical for legibility, horizontal to weight the left column */}
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-t from-ink via-ink/45 to-ink/10"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-ink/70 via-transparent to-transparent"
      />
      <div className="blueprint-grid absolute inset-0 opacity-40" aria-hidden />

      {/* ------------------------------- content ------------------------------- */}
      <motion.div
        style={{ opacity: prefersReducedMotion ? 1 : contentOpacity }}
        className="relative shell pb-8 pt-28 sm:pt-32 md:pb-16"
      >
        {/* The headline takes the full sheet width so it holds two lines */}
        <h1 className="display-xl text-fg-invert max-sm:text-[2.375rem] max-sm:leading-[0.95]">
          {LINES.map((line, i) => (
            <HeadingLine key={line} text={line} delay={0.3 + i * 0.12} />
          ))}
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-y-10 lg:mt-14 lg:grid-cols-12 lg:items-end lg:gap-x-12">
          <div className="lg:col-span-7 xl:col-span-6">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.62 }}
              className="max-w-xl text-base leading-relaxed text-fg-invert-muted md:text-lg"
            >
              From 2D house plans and 3D exterior design to structural analysis,
              municipality documentation and site supervision, we guide your
              home from the first idea to construction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.74 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/services"
                className="group/btn inline-flex h-14 items-center justify-between gap-6 bg-paper px-7 text-ink transition-colors duration-500 ease-out-expo hover:bg-accent hover:text-white sm:justify-center"
              >
                <span className="label">Explore Our Services</span>
                <ArrowUpRight
                  className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  aria-hidden
                />
              </Link>
              <Link
                href="/contact"
                className="group/btn inline-flex h-14 items-center justify-between gap-6 border border-white/25 px-7 text-fg-invert transition-colors duration-500 ease-out-expo hover:border-transparent hover:bg-white/10 sm:justify-center"
              >
                <span className="label">Start Your House Plan</span>
                <ArrowUpRight
                  className="size-4 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                  aria-hidden
                />
              </Link>
            </motion.div>
          </div>

          {/* Technical data column — the drawing-sheet annotation */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: EASE, delay: 0.95 }}
            className="hidden border-l border-white/15 pl-7 lg:col-span-4 lg:col-start-9 lg:block"
          >
            {[
              { k: "Main office", v: "Bharatpur · Chitwan" },
              { k: "House planning", v: "2D plans · 3D exterior" },
              { k: "Technical support", v: "Structure · Approval · Site" },
            ].map((row) => (
              <div key={row.k} className="border-b border-white/10 py-3.5 last:border-0">
                <dt className="label text-fg-invert-subtle">{row.k}</dt>
                <dd className="mt-1.5 text-sm text-fg-invert">{row.v}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </motion.div>

      {/* ---------------------------- scroll indicator -------------------------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        style={{ opacity: prefersReducedMotion ? 1 : contentOpacity }}
        className="relative shell hidden pb-8 md:block"
      >
        <div className="flex items-center gap-4">
          <span className="label text-fg-invert-subtle">Scroll</span>
          <span className="relative h-px w-24 overflow-hidden bg-white/20">
            <motion.span
              className="absolute inset-y-0 left-0 w-1/3 bg-accent"
              animate={prefersReducedMotion ? undefined : { x: ["-100%", "300%"] }}
              transition={{
                duration: 2.4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
            />
          </span>
        </div>
      </motion.div>
    </section>
  );
}
