import type { Metadata } from "next";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { PageHeader } from "@/components/layout/page-header";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { company } from "@/data/company";
import { IMG } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact",
  description: `Discuss your house planning, design or construction needs with ${company.name} in Bharatpur, Chitwan.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact — ${company.name}`,
    description:
      "Visit our main office beside Hakimchowk Bigmart in Bharatpur, Chitwan, or contact us by phone, WhatsApp or email.",
    images: [IMG.concreteBuilding],
  },
};

export default function ContactPage() {
  const { contact } = company;

  return (
    <>
      <PageHeader
        index="01"
        label="Contact"
        title={
          <>
            Request a
            <br />
            consultation.
          </>
        }
        lede="Tell us about your plot, the home you want to build and the stage you are at. We can help with planning, exterior design, structural analysis, municipality documentation and site supervision."
        image={IMG.concreteBuilding}
      />

      <Section>
        <div className="shell grid grid-cols-1 gap-x-16 gap-y-16 lg:grid-cols-12">
          {/* ------------------------------ details --------------------------- */}
          <div className="lg:col-span-4">
            <Reveal>
              <p className="label text-fg-subtle">Direct contact</p>

              <ul className="mt-8 flex flex-col border-t border-line">
                <ContactRow
                  icon={<MessageCircle className="size-4" strokeWidth={1.5} />}
                  label="Phone & WhatsApp"
                >
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="link-underline"
                  >
                    {contact.phone}
                  </a>
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-fg-muted"
                  >
                    WhatsApp: {contact.phoneAlt}
                  </a>
                </ContactRow>

                <ContactRow
                  icon={<Mail className="size-4" strokeWidth={1.5} />}
                  label="Email"
                >
                  <a href={`mailto:${contact.email}`} className="link-underline">
                    {contact.email}
                  </a>
                </ContactRow>

                <ContactRow
                  icon={<MapPin className="size-4" strokeWidth={1.5} />}
                  label={contact.officeName}
                >
                  <span>{contact.address.line1}</span>
                  <span>{contact.address.line2}</span>
                  <span className="text-fg-muted">
                    {contact.address.city}, {contact.address.country}
                  </span>
                </ContactRow>

              </ul>
            </Reveal>
          </div>

          {/* -------------------------------- form ---------------------------- */}
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.08}>
              <div className="flex items-baseline justify-between gap-6 border-b border-line pb-5">
                <h2 className="display-sm">Project enquiry</h2>
                <span className="label text-fg-subtle">All fields required</span>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-10">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ---------------------------------- map ------------------------------- */}
      <section className="border-t border-line bg-paper-2">
        <div className="shell py-16 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="label text-fg-subtle">Location</p>
                <h2 className="display-md mt-5">Find the office.</h2>
              </div>
              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label group inline-flex items-center gap-2 text-accent"
              >
                Open in Google Maps
                <ArrowUpRight
                  className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>
            </div>
          </Reveal>

          {/* Address panel linking to a live Google Maps search. */}
          <Reveal delay={0.1}>
            <div className="blueprint-grid-light relative mt-10 aspect-16/9 w-full overflow-hidden border border-line bg-paper md:aspect-21/9">
              {/* Cross-hair marker */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <span className="absolute left-1/2 top-1/2 h-px w-24 -translate-x-1/2 -translate-y-1/2 bg-accent/40" />
                  <span className="absolute left-1/2 top-1/2 h-24 w-px -translate-x-1/2 -translate-y-1/2 bg-accent/40" />
                  <span className="relative block size-4 -translate-x-1/2 -translate-y-1/2 bg-accent" />
                </div>
              </div>

              <div className="absolute bottom-5 left-5 max-w-xs border border-line bg-paper p-5">
                <p className="label text-accent">{contact.officeName}</p>
                <p className="mt-3 text-sm leading-relaxed">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                  <br />
                  <span className="text-fg-muted">
                    {contact.address.city}, {contact.address.country}
                  </span>
                </p>
              </div>

              <a
                href={contact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="label absolute right-5 top-5 inline-flex items-center gap-2 text-accent"
              >
                Directions
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------ quick actions -------------------------- */}
      <section className="bg-ink text-fg-invert">
        <Reveal className="shell grid grid-cols-1 md:grid-cols-2">
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="group flex items-center justify-between gap-6 border-b border-white/12 py-12 transition-colors duration-500 hover:bg-ink-2 md:border-b-0 md:border-r md:pr-10"
          >
            <span>
              <span className="label text-fg-invert-subtle">
                Prefer to talk?
              </span>
              <span className="display-sm mt-4 block transition-transform duration-600 ease-out-expo group-hover:translate-x-1.5">
                {contact.phone}
              </span>
            </span>
            <Phone
              className="size-6 shrink-0 text-fg-invert-subtle transition-colors duration-500 group-hover:text-accent"
              strokeWidth={1.25}
              aria-hidden
            />
          </a>

          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center justify-between gap-6 py-12 transition-colors duration-500 hover:bg-ink-2 md:pl-10"
          >
            <span className="min-w-0">
              <span className="label text-fg-invert-subtle">
                Prefer to write?
              </span>
              <span className="mt-4 block font-display text-lg font-semibold tracking-tight wrap-break-word transition-transform duration-600 ease-out-expo group-hover:translate-x-1.5 sm:text-xl lg:text-2xl">
                {contact.email}
              </span>
            </span>
            <Mail
              className="size-6 shrink-0 text-fg-invert-subtle transition-colors duration-500 group-hover:text-accent"
              strokeWidth={1.25}
              aria-hidden
            />
          </a>
        </Reveal>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-5 border-b border-line py-6">
      <span className="mt-0.5 text-accent" aria-hidden>
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="label text-fg-subtle">{label}</p>
        <div className="mt-3 flex flex-col gap-1.5 break-words text-sm">
          {children}
        </div>
      </div>
    </li>
  );
}
