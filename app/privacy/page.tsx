import { LegalPage, type LegalSection } from "@/components/layout/legal-page";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: `How ${company.name} collects, uses and protects personal information submitted through this website.`,
  path: "/privacy",
});

/** Placeholder copy — have this reviewed by a legal adviser before launch. */
const sections: LegalSection[] = [
  {
    heading: "No website form storage",
    body: [
      "This website has no enquiry database or backend. Completing the contact form opens your own email application with a prepared message; the website itself does not receive or store the form fields.",
      "We do not use advertising trackers or third-party analytics cookies on this site.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "If you choose to send the prepared email, the information reaches us through email and is used to assess and respond to your request. Where an enquiry becomes a commission, relevant correspondence may become part of the project record.",
      "We do not sell personal information, and we do not share it with third parties except where required to deliver the service you have requested or where we are obliged to by law.",
    ],
  },
  {
    heading: "Retention",
    body: [
      "Email correspondence is retained only as reasonably needed for enquiries, active work, legal obligations and professional records.",
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
      "Messages you send are handled through the email services used by you and by the company. Avoid sending sensitive documents until an appropriate communication method has been agreed.",
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
      updated="1 September 2026"
      intro="How we collect, use and protect the information you submit through this website."
      sections={sections}
    />
  );
}
