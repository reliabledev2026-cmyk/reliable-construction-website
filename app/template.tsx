"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { EASE } from "@/lib/motion";

/** A quiet cross-route settle shared by every page in the App Router. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
