import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { clients } from "@/data/clients";

/**
 * Client wall.
 *
 * Deliberately typographic: no invented brand marks appear on the site. Add a
 * `logo` path to an entry in data/clients.ts and that cell renders the image
 * instead of the wordmark.
 */
export function Clients() {
  return (
    <Section tight>
      <SectionHeader
        index="08"
        label="Clients & Partners"
        title="Who we work for."
        lede="Government departments, utilities, municipalities, development programmes and private developers."
        align="split"
      />

      <RevealGroup
        as="ul"
        gap={0.04}
        className="shell mt-14 grid grid-cols-2 border-l border-t border-line sm:grid-cols-3 lg:grid-cols-4"
      >
        {clients.map((client) => (
          <RevealItem
            as="li"
            key={client.name}
            className="group relative flex min-h-32 flex-col justify-between border-b border-r border-line p-5 transition-colors duration-500 hover:bg-paper-2 md:min-h-36 md:p-6"
          >
            {client.logo ? (
              <div className="relative h-10 w-full">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  sizes="200px"
                  className="object-contain object-left opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            ) : (
              <span className="font-display text-xl font-bold tracking-[-0.02em] text-fg-subtle transition-colors duration-500 group-hover:text-accent md:text-2xl">
                {client.abbr}
              </span>
            )}

            <div className="mt-6">
              <p className="text-xs leading-snug text-fg-muted">{client.name}</p>
              <p className="label mt-2 text-fg-subtle">{client.sector}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
