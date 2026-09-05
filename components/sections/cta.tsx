import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { RevealImage } from "@/components/ui/media";
import { Reveal } from "@/components/ui/reveal";
import { company } from "@/data/company";
import { IMG } from "@/data/images";

/**
 * Closing call to action. Appears at the foot of most pages, so the copy is
 * passed in where a page needs something more specific.
 */
export function CTA({
  title = "Planning your dream home?",
  body = "Tell us about your plot, your requirements and the stage you are at. We will help you identify the right next step.",
  action = "Start a Conversation",
  image = IMG.concreteBuilding,
  index = "10",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  action?: string;
  image?: string;
  /** Section number in the running index; differs per page. */
  index?: string;
  href?: "/contact";
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-fg-invert">
      {/* Architectural backdrop, held well back so the type stays dominant */}
      <div className="absolute inset-0" aria-hidden>
        <RevealImage
          src={image}
          alt=""
          sizes="100vw"
          className="absolute inset-0"
          imgClassName="opacity-25"
          hover={false}
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/85 to-ink/55" />
        <div className="blueprint-grid absolute inset-0 opacity-80" />
      </div>

      <div className="relative shell py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 gap-x-16 gap-y-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <div className="label flex items-center gap-3 text-fg-invert-subtle">
              <span className="text-accent-soft">§ {index}</span>
              <span aria-hidden className="h-px w-8 bg-white/20" />
              <span>Next Step</span>
            </div>
            <h2 className="display-lg mt-7 max-w-3xl">{title}</h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-fg-invert-muted md:text-lg">
              {body}
            </p>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9">
            <Link
              href={href}
              className="group/btn flex w-full items-center justify-between gap-8 bg-accent px-7 py-6 text-white transition-colors duration-500 ease-out-expo hover:bg-paper hover:text-ink"
            >
              <span className="label">{action}</span>
              <ArrowUpRight
                className="size-5 shrink-0 transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1"
                aria-hidden
              />
            </Link>

            {/* Direct contact routes for people who would rather not use a form */}
            <div className="mt-8 flex flex-col gap-4 border-t border-white/12 pt-7">
              <a
                href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
                className="group flex items-baseline justify-between gap-4"
              >
                <span className="label text-fg-invert-subtle">Call</span>
                <span className="font-display text-base font-semibold tracking-tight transition-colors duration-400 ease-out-expo group-hover:text-accent-soft">
                  {company.contact.phone}
                </span>
              </a>
              <a
                href={`mailto:${company.contact.email}`}
                className="group flex items-baseline justify-between gap-4"
              >
                <span className="label text-fg-invert-subtle">Email</span>
                <span className="text-sm text-fg-invert-muted transition-colors duration-400 ease-out-expo group-hover:text-accent-soft">
                  {company.contact.email}
                </span>
              </a>
              <a
                href={company.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-baseline justify-between gap-4"
              >
                <span className="label text-fg-invert-subtle">WhatsApp</span>
                <span className="text-sm text-fg-invert-muted transition-colors duration-400 ease-out-expo group-hover:text-accent-soft">
                  {company.contact.phoneAlt}
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
