"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { company, navLinks } from "@/data/company";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Full-screen mobile navigation built on Radix Dialog (focus trap, scroll lock
 * and escape handling come from the primitive) with Framer Motion for the
 * panel and the staggered item entrance.
 */
export function MobileNav({ invert }: { invert: boolean }) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  // Links close the panel on activation rather than reacting to a route change,
  // so the panel also closes when the target route is the current one.
  const close = () => setOpen(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          aria-label="Open menu"
          className={cn(
            "flex size-11 items-center justify-center transition-colors duration-400 ease-out-expo lg:hidden",
            invert ? "text-fg-invert" : "text-fg",
          )}
        >
          <Menu className="size-6" strokeWidth={1.5} aria-hidden />
        </button>
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-90 bg-ink/60 backdrop-blur-sm lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Dialog.Overlay>

            <Dialog.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="fixed inset-0 z-91 flex flex-col bg-ink text-fg-invert lg:hidden"
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { clipPath: "inset(0 0 100% 0)" }
                }
                animate={
                  prefersReducedMotion
                    ? { opacity: 1 }
                    : { clipPath: "inset(0 0 0% 0)" }
                }
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { clipPath: "inset(0 0 100% 0)" }
                }
                transition={{ duration: 0.55, ease: EASE }}
              >
                <Dialog.Title className="sr-only">Site navigation</Dialog.Title>

                {/* Header row */}
                <div className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 px-5">
                  <span className="label text-fg-invert-subtle">Menu</span>
                  <Dialog.Close asChild>
                    <motion.button
                      aria-label="Close menu"
                      className="flex size-11 items-center justify-center text-fg-invert"
                      initial={{ opacity: 0, rotate: -45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      transition={{ delay: 0.25, duration: 0.4, ease: EASE }}
                    >
                      <X className="size-6" strokeWidth={1.5} aria-hidden />
                    </motion.button>
                  </Dialog.Close>
                </div>

                {/* Links */}
                <motion.nav
                  className="flex flex-1 flex-col justify-center overflow-y-auto px-5 py-8"
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06, delayChildren: 0.22 } },
                  }}
                >
                  <ul className="flex flex-col">
                    {navLinks.map((link, i) => {
                      const active = pathname.startsWith(link.href);
                      return (
                        <motion.li
                          key={link.href}
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                          }}
                          className="border-b border-white/10"
                        >
                          <Link
                            href={link.href}
                            onClick={close}
                            className="flex items-baseline gap-4 py-5"
                          >
                            <span className="font-mono text-[0.625rem] tracking-[0.2em] text-accent-soft">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span
                              className={cn(
                                "display-sm transition-colors duration-400 ease-out-expo",
                                active ? "text-accent-soft" : "text-fg-invert",
                              )}
                            >
                              {link.label}
                            </span>
                          </Link>
                        </motion.li>
                      );
                    })}
                  </ul>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                    }}
                    className="mt-10"
                  >
                    <Link
                      href="/contact"
                      onClick={close}
                      className="group flex items-center justify-between bg-accent px-6 py-5 text-white"
                    >
                      <span className="label">Request a Consultation</span>
                      <ArrowUpRight className="size-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden />
                    </Link>
                  </motion.div>

                  {/* Contact block */}
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                    }}
                    className="mt-10 grid grid-cols-1 gap-5 border-t border-white/10 pt-8 text-sm"
                  >
                    <div>
                      <p className="label mb-2 text-fg-invert-subtle">
                        {company.contact.officeName}
                      </p>
                      <p className="text-fg-invert-muted">
                        {company.contact.address.line1}, {company.contact.address.line2}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <a href={`tel:${company.contact.phone.replace(/\s/g, "")}`} className="text-fg-invert">
                        {company.contact.phone}
                      </a>
                      <a href={`mailto:${company.contact.email}`} className="text-fg-invert-muted">
                        {company.contact.email}
                      </a>
                      <a
                        href={company.contact.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-fg-invert-muted"
                      >
                        WhatsApp: {company.contact.phoneAlt}
                      </a>
                    </div>
                  </motion.div>
                </motion.nav>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
