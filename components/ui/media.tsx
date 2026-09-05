"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import {
  EASE,
  fadeIn,
  imageSettle,
  maskReveal,
  viewportOnce,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Image with an architectural reveal: the frame wipes open from the top while
 * the photograph settles from a slight over-scale. Used for all editorial
 * imagery so the entrance language stays consistent site-wide.
 */
export function RevealImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  caption,
  hover = true,
  children,
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
  hover?: boolean;
  children?: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <figure className={cn("group/media relative", className)}>
      <motion.div
        className="relative h-full w-full overflow-hidden bg-paper-2"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={prefersReducedMotion ? fadeIn : maskReveal}
      >
        <motion.div
          className="relative h-full w-full"
          variants={prefersReducedMotion ? fadeIn : imageSettle}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn(
              "object-cover transition-[transform,filter] duration-[1.2s] ease-out-expo",
              hover && "group-hover/media:scale-[1.025]",
              imgClassName,
            )}
          />
        </motion.div>
        {children}
      </motion.div>
      {caption && (
        <motion.figcaption
          className="label mt-3 text-fg-subtle"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
        >
          {caption}
        </motion.figcaption>
      )}
    </figure>
  );
}
