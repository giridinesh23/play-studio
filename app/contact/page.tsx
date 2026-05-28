import type { Metadata } from "next";
import ContactContent from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Play Studio. Request a quote, book a session, or schedule a consultation.",
};

export default function ContactPage() {
  return <ContactContent />;
}
