"use client";

import { motion, type Variants } from "framer-motion";
import * as React from "react";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Scroll-triggered entrance. Wraps children in a single fade + rise.
 * Kept deliberately small in amplitude — the movement should be felt, not watched.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article" | "span";
  variants?: Variants;
}) {
  const Cmp = motion[as] as React.ElementType;
  return (
    <Cmp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </Cmp>
  );
}

/**
 * Releases its children one after another as the group enters the viewport.
 * Pair with <RevealItem>.
 */
export function RevealGroup({
  children,
  className,
  gap = 0.08,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
  as?: "div" | "ul" | "ol" | "dl" | "section";
}) {
  const Cmp = motion[as] as React.ElementType;
  return (
    <Cmp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={stagger(gap, delay)}
    >
      {children}
    </Cmp>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "article" | "span" | "tr";
  variants?: Variants;
}) {
  const Cmp = motion[as] as React.ElementType;
  return (
    <Cmp className={className} variants={variants}>
      {children}
    </Cmp>
  );
}

/**
 * A single hairline that draws itself across as it enters view — used as a
 * section divider throughout the site.
 */
export function DrawRule({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <motion.div
      className={cn("h-px w-full origin-left", dark ? "bg-white/15" : "bg-line", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
