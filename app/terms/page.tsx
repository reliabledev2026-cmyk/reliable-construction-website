import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms & Conditions",
  description: `Terms governing use of the ${company.name} website and the information published on it.`,
  path: "/terms",
});

/** Placeholder copy — have this reviewed by a legal adviser before launch. */
const sections: LegalSection[] = [
  {
    heading: "Use of this website",
    body: [
      "By accessing this website you agree to these terms. If you do not accept them, please do not use the site.",
      "You may view, download and print material from this site for your own reference. You may not republish it commercially or present it as your own work without our written consent.",
    ],
  },
  {
    heading: "Nature of the information published",
    body: [
      "Content on this site is general information about our practice and services. It is not engineering advice, and it must not be relied upon as a substitute for a formal appointment.",
      "Every house, plot and approval context is different. Information shown here must not be transferred directly to another project.",
    ],
  },
  {
    heading: "Professional appointment",
    body: [
      "Engineering advice is provided only under a written appointment that sets out the agreed scope, deliverables, fee and limitations of liability. No duty of care arises from information published on this website or from preliminary correspondence.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "The design, text, drawings and photographs on this site are the property of the practice or are used with permission. Trade marks and organisation names shown belong to their respective owners.",
    ],
  },
  {
    heading: "Third-party links",
    body: [
      "Where this site links to external websites, we do not control that content and accept no responsibility for it.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of Nepal, and any dispute arising from them falls within the jurisdiction of the courts serving the company's main office in Chitwan.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      label="Legal"
      title="Terms & Conditions"
      updated="1 September 2026"
      intro="The terms governing use of this website and the information published on it."
      sections={sections}
    />
  );
}
