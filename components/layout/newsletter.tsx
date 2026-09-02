"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import * as React from "react";
import { EASE } from "@/lib/motion";

/**
 * Static-site newsletter capture. There is no backend: submitting shows a
 * confirmation state. Wire `onSubmit` to your provider (Mailchimp, Buttondown,
 * a route handler) when one exists.
 */
export function Newsletter() {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);

  return (
    <div>
      <p className="label text-fg-invert-subtle">Practice Updates</p>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-fg-invert-muted">
        Occasional technical notes and project news. No more than six emails a
        year.
      </p>

      <AnimatePresence mode="wait" initial={false}>
        {done ? (
          <motion.p
            key="done"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mt-6 flex items-center gap-2.5 border border-accent/40 bg-accent/10 px-4 py-3.5 text-sm text-fg-invert"
          >
            <Check className="size-4 shrink-0 text-accent" aria-hidden />
            Thank you — you have been added to the list.
          </motion.p>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={(e) => {
              e.preventDefault();
              if (email.trim()) setDone(true);
            }}
            className="group mt-6 flex items-center border-b border-white/20 transition-colors focus-within:border-accent"
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full bg-transparent py-3 text-sm text-fg-invert outline-none placeholder:text-fg-invert-subtle"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex size-10 shrink-0 items-center justify-center text-fg-invert-muted transition-colors hover:text-accent"
            >
              <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
