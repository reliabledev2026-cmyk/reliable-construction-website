"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * One accessibility boundary for every Framer Motion interaction on the site.
 * Transform-heavy movement is removed when the visitor requests reduced
 * motion, while useful opacity changes and state feedback remain available.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
