import type { Metadata } from "next";
import ServicesContent from "@/components/services/ServicesContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional audio-visual services: sound system hire, stage lighting, acoustic treatment, recording studio, and mixing & mastering in Bhutan.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
