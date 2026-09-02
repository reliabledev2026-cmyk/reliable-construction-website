"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { company } from "@/data/company";
import { vacancies } from "@/data/careers";

/**
 * Open positions, as a Radix Accordion.
 *
 * Applications are handled by email while the site is static — swap the mailto
 * for a route handler or ATS link when a backend exists.
 */
export function VacancyList() {
  return (
    <Accordion.Root type="single" collapsible className="border-t border-line">
      {vacancies.map((job, i) => (
        <Accordion.Item
          key={job.id}
          value={job.id}
          className="border-b border-line"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-start gap-5 py-7 text-left md:items-center md:gap-10 md:py-8">
              <span className="mt-1.5 font-mono text-[0.6875rem] tracking-[0.15em] text-fg-subtle transition-colors duration-500 group-hover:text-accent md:mt-0">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0 flex-1">
                <span className="block font-display text-xl font-semibold tracking-[-0.025em] transition-transform duration-600 ease-out-expo group-hover:translate-x-1.5 md:text-2xl">
                  {job.title}
                </span>
                <span className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                  <span className="label text-fg-subtle">{job.department}</span>
                  <span aria-hidden className="text-fg-subtle">
                    ·
                  </span>
                  <span className="label text-fg-subtle">{job.location}</span>
                  <span aria-hidden className="text-fg-subtle">
                    ·
                  </span>
                  <span className="label text-accent">{job.type}</span>
                </span>
              </span>

              <span className="label hidden shrink-0 text-fg-subtle lg:block">
                {job.experience}
              </span>

              <span
                aria-hidden
                className="flex size-10 shrink-0 items-center justify-center border border-line-strong transition-colors duration-400 group-hover:border-accent group-hover:bg-accent group-hover:text-white group-data-[state=open]:border-accent group-data-[state=open]:bg-accent group-data-[state=open]:text-white"
              >
                <Plus
                  className="size-4 transition-transform duration-500 ease-out-expo group-data-[state=open]:rotate-45"
                  strokeWidth={1.5}
                />
              </span>
            </Accordion.Trigger>
          </Accordion.Header>

          <Accordion.Content className="acc-content overflow-hidden">
            <div className="grid grid-cols-1 gap-x-12 gap-y-10 pb-12 md:grid-cols-12 md:pl-[3.75rem]">
              <div className="md:col-span-7">
                <p className="lede">{job.summary}</p>

                <div className="mt-9">
                  <p className="label text-fg-subtle">Responsibilities</p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-3.5 text-sm leading-relaxed">
                        <span
                          aria-hidden
                          className="mt-2 size-1 shrink-0 bg-accent"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9">
                  <p className="label text-fg-subtle">Requirements</p>
                  <ul className="mt-5 flex flex-col gap-3">
                    {job.requirements.map((r) => (
                      <li key={r} className="flex gap-3.5 text-sm leading-relaxed">
                        <span
                          aria-hidden
                          className="mt-2 size-1 shrink-0 bg-line-strong"
                        />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="md:col-span-4 md:col-start-9">
                <dl className="border border-line bg-paper-2 p-6">
                  {[
                    { k: "Department", v: job.department },
                    { k: "Location", v: job.location },
                    { k: "Contract", v: job.type },
                    { k: "Experience", v: job.experience },
                    { k: "Applications close", v: job.closes },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="border-b border-line py-3 last:border-0 last:pb-0 first:pt-0"
                    >
                      <dt className="label text-fg-subtle">{row.k}</dt>
                      <dd className="mt-2 text-sm">{row.v}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href={`mailto:${company.contact.careersEmail}?subject=${encodeURIComponent(
                    `Application — ${job.title}`,
                  )}`}
                  className="group/btn mt-6 flex items-center justify-between gap-6 bg-ink px-6 py-5 text-fg-invert transition-colors duration-500 ease-out-expo hover:bg-accent"
                >
                  <span className="label">Apply for this role</span>
                  <span
                    aria-hidden
                    className="transition-transform duration-500 ease-out-expo group-hover/btn:translate-x-1"
                  >
                    →
                  </span>
                </a>
                <p className="mt-4 text-xs leading-relaxed text-fg-subtle">
                  Send a CV and a short covering note to{" "}
                  {company.contact.careersEmail}. We reply to every application.
                </p>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
