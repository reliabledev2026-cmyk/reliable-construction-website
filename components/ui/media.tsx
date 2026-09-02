"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { imageSettle, maskReveal, viewportOnce } from "@/lib/motion";
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
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  caption?: string;
}) {
  return (
    <figure className={cn("relative", className)}>
      <motion.div
        className="relative h-full w-full overflow-hidden bg-paper-2"
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={maskReveal}
      >
        <motion.div className="relative h-full w-full" variants={imageSettle}>
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", imgClassName)}
          />
        </motion.div>
      </motion.div>
      {caption && (
        <figcaption className="label mt-3 text-fg-subtle">{caption}</figcaption>
      )}
    </figure>
  );
}
