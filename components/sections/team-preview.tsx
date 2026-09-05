import { RevealImage } from "@/components/ui/media";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { team } from "@/data/team";

export function TeamPreview() {
  return (
    <Section id="team" className="scroll-mt-20">
      <SectionHeader
        index="04"
        label="The Team"
        title={
          <>
            Three disciplines,
            <br />
            one shared brief.
          </>
        }
        lede="A focused residential team connecting architectural thinking, structural safety and practical site decisions."
      />

      <RevealGroup
        as="ul"
        gap={0.1}
        className="shell mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
      >
        {team.map((person, index) => (
          <RevealItem as="li" key={person.name} className="group">
            <RevealImage
              src={person.image}
              alt={person.name}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="aspect-4/5 bg-paper-2"
              imgClassName="grayscale group-hover:scale-[1.025] group-hover:grayscale-0"
            >
              <span className="label absolute left-4 top-4 bg-ink/75 px-3 py-2 text-white/85 backdrop-blur-sm">
                Sample profile {String(index + 1).padStart(2, "0")}
              </span>
            </RevealImage>
            <div className="border-b border-line py-6">
              <h3 className="display-sm transition-colors duration-500 group-hover:text-accent-deep">
                {person.name}
              </h3>
              <p className="mt-2 text-sm font-medium text-accent">{person.position}</p>
              <p className="mt-1 text-xs text-fg-subtle">{person.qualification}</p>
              <p className="mt-4 text-sm leading-relaxed text-fg-muted">{person.focus}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
