import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { company } from "@/data/company";
import { IMG } from "@/data/images";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses and protects personal information submitted through this website.`,
  path: "/privacy",
  image: IMG.studioTable,
  imageAlt: "Architectural planning materials arranged on a studio table",
});

/** Draft copy — have this reviewed by a legal adviser before launch. */
const sections: LegalSection[] = [
  {
    heading: "Contact form processing",
    body: [
      "When you submit the contact form, the details you provide are transmitted to Web3Forms, a third-party form delivery service, and forwarded to our company email address. We use this information only to review and respond to your enquiry.",
      "The form also uses hCaptcha to distinguish genuine visitors from automated submissions. hCaptcha may process technical information about your browser and device for security and abuse prevention.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "Information received through the contact form or email is used to assess and respond to your request. Where an enquiry becomes a commission, relevant correspondence may become part of the project record.",
      "We do not sell personal information, and we do not share it with third parties except where required to deliver the service you have requested or where we are obliged to by law.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "Web3Forms may temporarily retain submission history and technical logs according to its service policies. Email correspondence received by the company is retained only as reasonably needed for enquiries, active work, legal obligations and professional records.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      `You may ask about, correct or request deletion of personal information held in our correspondence where no legal or contractual reason requires retention. Contact us at ${company.contact.email}.`,
    ],
  },
  {
    heading: "Security",
    body: [
      "Form submissions are transmitted over HTTPS and protected with automated spam checks, a hidden honeypot field and hCaptcha. No internet transmission is completely risk-free, so avoid sending sensitive documents until an appropriate communication method has been agreed.",
    ],
  },
  {
    heading: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The date shown above indicates when it was last revised. Material changes will be highlighted on this page.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      label="Legal"
      title="Privacy Policy"
      updated="2 September 2026"
      intro="How we collect, use and protect the information you submit through this website."
      sections={sections}
    />
  );
}
