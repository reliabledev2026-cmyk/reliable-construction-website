import type { Variants } from "framer-motion";

/**
 * Shared motion language.
 * Everything is short, low-amplitude and eased out — movement should read as
 * "settling into place", never as decoration.
 */

export const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: EASE } },
};

/** Parent wrapper that releases its children one after another. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Image mask reveal — the frame wipes open, the image settles from 1.08 → 1. */
export const maskReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  show: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 1.1, ease: EASE },
  },
};

export const imageSettle: Variants = {
  hidden: { scale: 1.08 },
  show: { scale: 1, transition: { duration: 1.4, ease: EASE } },
};

/** Default viewport config: fire once, slightly before the element is centred. */
export const viewportOnce = { once: true, margin: "0px 0px -12% 0px" } as const;
