"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <Section id="faq" className="scroll-mt-20 bg-paper-2">
      <SectionHeader
        index="07"
        label="Before We Begin"
        title={
          <>
            Clear answers,
            <br />
            before the drawings.
          </>
        }
        lede="A few practical answers to the questions homeowners most often ask before beginning a house project."
      />

      <Reveal className="shell mt-14 lg:mt-20">
        <Accordion.Root
          type="single"
          collapsible
          className="border-b border-line-strong"
        >
          <RevealGroup as="div" gap={0.055}>
            {faqs.map((item, index) => (
              <RevealItem key={item.question}>
                <Accordion.Item
                  value={`faq-${index + 1}`}
                  className="group border-t border-line-strong"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group/trigger grid w-full grid-cols-[2.5rem_1fr_2.75rem] items-center gap-3 py-6 text-left sm:grid-cols-[3.5rem_1fr_3rem] sm:gap-5 sm:py-7">
                      <span className="font-mono text-[0.625rem] tracking-[0.18em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-lg font-semibold leading-tight tracking-[-0.025em] transition-colors duration-400 group-hover/trigger:text-accent sm:text-xl lg:text-2xl">
                        {item.question}
                      </span>
                      <span
                        aria-hidden
                        className="relative flex size-11 items-center justify-center justify-self-end border border-line-strong transition-[border-color,background-color] duration-500 group-hover/trigger:border-ink group-data-[state=open]/trigger:border-ink group-data-[state=open]/trigger:bg-ink"
                      >
                        <span className="absolute h-px w-3.5 bg-ink transition-colors duration-500 group-data-[state=open]/trigger:bg-white" />
                        <span className="absolute h-3.5 w-px bg-ink transition-[transform,background-color] duration-500 ease-out-expo group-data-[state=open]/trigger:scale-y-0 group-data-[state=open]/trigger:bg-white" />
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="faq-content overflow-hidden">
                    <div className="grid grid-cols-[2.5rem_1fr_2.75rem] gap-3 pb-7 sm:grid-cols-[3.5rem_1fr_3rem] sm:gap-5 sm:pb-8">
                      <p className="col-start-2 max-w-3xl text-sm leading-7 text-fg-muted sm:text-base sm:leading-8">
                        {item.answer}
                      </p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </RevealItem>
            ))}
          </RevealGroup>
        </Accordion.Root>

        <div className="mt-8 flex justify-end">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-ink"
          >
            Ask about your project
            <ArrowUpRight
              className="size-4 text-accent transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden
            />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
