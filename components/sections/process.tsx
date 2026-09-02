"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { process } from "@/data/company";

/**
 * Delivery sequence.
 * Desktop: a horizontal register with a rule that draws across as it enters view.
 * Mobile: the same steps as a vertical timeline.
 */
export function Process({ index = "05" }: { index?: string }) {
  return (
    <section id="process" className="scroll-mt-20 bg-paper-2 py-20 md:py-28 lg:py-36">
      <div className="shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.1)}
        >
          <motion.div variants={fadeUp}>
            <div className="label flex items-center gap-3 text-fg-subtle">
              <span className="text-accent">§ {index}</span>
              <span aria-hidden className="h-px w-8 bg-line-strong" />
              <span>How We Work</span>
            </div>
            <div className="mt-7 grid grid-cols-1 gap-x-16 gap-y-6 lg:grid-cols-12 lg:items-end">
              <h2 className="display-lg lg:col-span-6">
                One clear route
                <br />
                from idea to site.
              </h2>
              <p className="lede lg:col-span-5 lg:col-start-8">
                Every home follows the same five connected stages. You can begin
                at the stage you need or ask us to coordinate the complete path.
              </p>
            </div>
          </motion.div>

          {/* ------------------------------ timeline ---------------------------- */}
          <div className="relative mt-16 lg:mt-24">
            {/* Horizontal spine (desktop) */}
            <motion.div
              aria-hidden
              className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-line-strong lg:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Vertical spine (mobile) */}
            <motion.div
              aria-hidden
              className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-line-strong lg:hidden"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />

            <ol className="grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:gap-x-8 lg:gap-y-0">
              {process.map((step, i) => (
                <motion.li
                  key={step.title}
                  variants={fadeUp}
                  className="relative pl-10 lg:pl-0 lg:pr-6"
                >
                  {/* Node */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-0.5 block size-3.5 border border-line-strong bg-paper-2 lg:relative lg:mb-8 lg:block"
                  >
                    <span className="absolute inset-1 block bg-accent" />
                  </span>

                  <span className="label text-fg-subtle">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display-sm mt-3">{step.title}</h3>
                  <p className="mt-3.5 text-sm leading-relaxed text-fg-muted">
                    {step.body}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
