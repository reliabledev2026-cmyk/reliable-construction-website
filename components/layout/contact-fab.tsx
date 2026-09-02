"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, X } from "lucide-react";
import * as React from "react";
import { SocialIcon } from "@/components/ui/social-icons";
import { company } from "@/data/company";
import { EASE } from "@/lib/motion";

export function ContactFab() {
  const [open, setOpen] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={rootRef}
      className="fixed bottom-5 right-5 z-90 flex flex-col items-end sm:bottom-7 sm:right-7"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            id="quick-contact-menu"
            role="menu"
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.97 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mb-3 w-60 overflow-hidden border border-line bg-paper shadow-[0_20px_50px_-16px_rgba(11,19,25,0.45)]"
          >
            <div className="border-b border-line px-5 py-4">
              <p className="label text-fg-subtle">Quick contact</p>
              <p className="mt-2 text-sm text-fg-muted">How would you like to talk?</p>
            </div>

            <a
              role="menuitem"
              href={company.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 border-b border-line px-5 py-4 transition-colors duration-300 hover:bg-paper-2"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-[#25D366] text-white">
                <SocialIcon name="whatsapp" className="size-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold">WhatsApp</span>
                <span className="mt-0.5 block text-xs text-fg-subtle">Message us directly</span>
              </span>
            </a>

            <a
              role="menuitem"
              href={`mailto:${company.contact.email}`}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 px-5 py-4 transition-colors duration-300 hover:bg-paper-2"
            >
              <span className="flex size-9 items-center justify-center rounded-full bg-ink text-fg-invert">
                <Mail className="size-4" strokeWidth={1.7} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">Email</span>
                <span className="mt-0.5 block truncate text-xs text-fg-subtle">
                  {company.contact.email}
                </span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        aria-controls="quick-contact-menu"
        onClick={() => setOpen((current) => !current)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.25, ease: EASE }}
        className="relative flex size-14 items-center justify-center rounded-full bg-accent text-white shadow-[0_16px_36px_-10px_rgba(11,19,25,0.65)] ring-4 ring-paper/70 transition-colors duration-300 hover:bg-ink sm:size-16"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {open ? (
              <X className="size-6" strokeWidth={1.7} aria-hidden />
            ) : (
              <MessageCircle className="size-6" strokeWidth={1.7} aria-hidden />
            )}
          </motion.span>
        </AnimatePresence>
        {!open && (
          <span className="absolute right-1 top-1 size-3 rounded-full border-2 border-accent bg-[#25D366] sm:right-1.5 sm:top-1.5" />
        )}
      </motion.button>
    </div>
  );
}
