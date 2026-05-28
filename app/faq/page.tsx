import type { Metadata } from "next";
import FAQContent from "@/components/faq/FAQContent";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Play Studio's services, booking, pricing, and policies.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Play Studio offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Play Studio offers four core services: professional sound system and stage lighting hire, acoustic treatment and installation, professional recording studio sessions, and mixing and mastering services.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FAQContent />
    </>
  );
}
