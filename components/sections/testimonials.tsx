"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import * as React from "react";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [active, setActive] = React.useState(0);
  const [direction, setDirection] = React.useState(1);
  const prefersReducedMotion = useReducedMotion();

  const changeTestimonial = (next: number) => {
    setDirection(next > active || (active === testimonials.length - 1 && next === 0) ? 1 : -1);
    setActive(next);
  };

  const step = (amount: number) => {
    setDirection(amount);
    setActive((current) =>
      (current + amount + testimonials.length) % testimonials.length,
    );
  };

  const testimonial = testimonials[active];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="blueprint-grid relative scroll-mt-20 overflow-hidden bg-ink py-20 text-fg-invert md:py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="absolute -right-20 top-1/2 size-[28rem] -translate-y-1/2 rounded-full bg-accent/8 blur-[110px]"
      />

      <motion.div
        className="shell relative"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.1)}
      >
        <motion.div variants={fadeUp} className="label flex items-center gap-3 text-fg-invert-subtle">
          <span className="text-accent-soft">§ 06</span>
          <span aria-hidden className="h-px w-8 bg-white/20" />
          <span>Client Perspective</span>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-12 lg:gap-16">
          <motion.div variants={fadeUp} className="lg:col-span-4">
            <h2 id="testimonials-title" className="display-lg max-w-xl">
              Designed around
              <br />
              real lives.
            </h2>
            <p className="mt-7 max-w-sm text-base leading-relaxed text-fg-invert-muted">
              A preview of how approved homeowner feedback will be presented.
              These sample quotes will be replaced before launch.
            </p>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous testimonial"
                className="group flex size-12 items-center justify-center border border-white/20 text-fg-invert-muted transition-[border-color,background-color,color] duration-500 hover:border-white/50 hover:bg-white hover:text-ink"
              >
                <ArrowLeft
                  className="size-4 transition-transform duration-500 ease-out-expo group-hover:-translate-x-0.5"
                  strokeWidth={1.6}
                  aria-hidden
                />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next testimonial"
                className="group flex size-12 items-center justify-center border border-white/20 text-fg-invert-muted transition-[border-color,background-color,color] duration-500 hover:border-white/50 hover:bg-white hover:text-ink"
              >
                <ArrowRight
                  className="size-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5"
                  strokeWidth={1.6}
                  aria-hidden
                />
              </button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative lg:col-span-7 lg:col-start-6">
            <div className="absolute right-0 top-0 font-mono text-[clamp(5rem,12vw,11rem)] leading-none text-white/[0.035]" aria-hidden>
              {String(active + 1).padStart(2, "0")}
            </div>

            <div className="relative min-h-[27rem] border-t border-white/15 pt-9 sm:min-h-[23rem] lg:pt-12" aria-live="polite">
              <Quote className="size-8 text-accent-soft" strokeWidth={1.25} aria-hidden />

              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.figure
                  key={testimonial.client}
                  custom={direction}
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -20 }}
                  transition={{ duration: prefersReducedMotion ? 0.15 : 0.55, ease: EASE }}
                  className="mt-8"
                >
                  <blockquote>
                    <p className="font-display text-[clamp(1.55rem,3vw,2.65rem)] font-medium leading-[1.18] tracking-[-0.032em]">
                      “{testimonial.quote}”
                    </p>
                  </blockquote>
                  <figcaption className="mt-10 flex flex-col gap-2 border-t border-white/12 pt-6 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="font-display text-base font-semibold tracking-tight">
                        {testimonial.client}
                      </p>
                      <p className="mt-1 text-sm text-fg-invert-muted">
                        {testimonial.location}
                      </p>
                    </div>
                    <span className="label text-accent-soft">{testimonial.service}</span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex gap-2" aria-label="Choose a testimonial">
              {testimonials.map((item, index) => (
                <button
                  type="button"
                  key={item.client}
                  onClick={() => changeTestimonial(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  aria-current={index === active ? "true" : undefined}
                  className="group flex h-8 flex-1 items-center"
                >
                  <span
                    className={`h-px w-full origin-left transition-all duration-500 ease-out-expo ${
                      index === active
                        ? "scale-y-200 bg-accent-soft"
                        : "bg-white/20 group-hover:bg-white/45"
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
