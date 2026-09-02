"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Project image gallery with a Radix Dialog lightbox.
 * Radix provides the focus trap and escape handling; arrow keys step through
 * the set while the lightbox is open.
 */
export function Gallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState(0);

  const go = React.useCallback(
    (delta: number) =>
      setIndex((i) => (i + delta + images.length) % images.length),
    [images.length],
  );

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, go]);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <>
      {/* --------------------------------- grid ------------------------------ */}
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
        {images.map((src, i) => (
          <motion.li
            key={src + i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 }}
            // First plate runs wide so the gallery is not a flat 2×2
            className={cn(i === 0 && "sm:col-span-2")}
          >
            <button
              type="button"
              onClick={() => openAt(i)}
              aria-label={`View image ${i + 1} of ${images.length} for ${title}`}
              className={cn(
                "group relative block w-full overflow-hidden bg-paper-2",
                i === 0 ? "aspect-16/9" : "aspect-4/3",
              )}
            >
              <Image
                src={src}
                alt={`${title} — image ${i + 1}`}
                fill
                sizes={i === 0 ? "(max-width: 1024px) 100vw, 70vw" : "(max-width: 640px) 100vw, 35vw"}
                className="object-cover transition-transform duration-[1.1s] ease-out-expo group-hover:scale-[1.04]"
              />
              <span
                aria-hidden
                className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/25"
              />
              <span
                aria-hidden
                className="absolute bottom-4 right-4 flex size-10 items-center justify-center border border-white/40 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <Expand className="size-4" strokeWidth={1.5} />
              </span>
              <span className="label absolute bottom-4 left-4 text-white/80">
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      {/* ------------------------------- lightbox ---------------------------- */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-[95] bg-ink/95 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Dialog.Overlay>

              <Dialog.Content asChild forceMount aria-describedby={undefined}>
                <motion.div
                  className="fixed inset-0 z-[96] flex flex-col p-4 md:p-8"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <Dialog.Title className="sr-only">
                    {title} — image gallery
                  </Dialog.Title>

                  {/* Top bar */}
                  <div className="flex shrink-0 items-center justify-between text-fg-invert">
                    <p className="label text-fg-invert-muted">
                      <span className="text-fg-invert">
                        {String(index + 1).padStart(2, "0")}
                      </span>{" "}
                      / {String(images.length).padStart(2, "0")} · {title}
                    </p>
                    <Dialog.Close
                      aria-label="Close gallery"
                      className="flex size-11 items-center justify-center border border-white/20 transition-colors hover:border-accent hover:bg-accent"
                    >
                      <X className="size-5" strokeWidth={1.5} aria-hidden />
                    </Dialog.Close>
                  </div>

                  {/* Plate */}
                  <div className="relative my-4 min-h-0 flex-1 md:my-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                      >
                        <Image
                          src={images[index]}
                          alt={`${title} — image ${index + 1}`}
                          fill
                          sizes="100vw"
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Controls */}
                  <div className="flex shrink-0 items-center justify-center gap-2 text-fg-invert">
                    <button
                      type="button"
                      onClick={() => go(-1)}
                      aria-label="Previous image"
                      className="flex size-12 items-center justify-center border border-white/20 transition-colors hover:border-accent hover:bg-accent"
                    >
                      <ArrowLeft className="size-4" strokeWidth={1.5} aria-hidden />
                    </button>
                    <button
                      type="button"
                      onClick={() => go(1)}
                      aria-label="Next image"
                      className="flex size-12 items-center justify-center border border-white/20 transition-colors hover:border-accent hover:bg-accent"
                    >
                      <ArrowRight className="size-4" strokeWidth={1.5} aria-hidden />
                    </button>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
