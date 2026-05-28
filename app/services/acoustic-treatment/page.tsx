import type { Metadata } from "next";
import AcousticContent from "@/components/services/AcousticContent";

export const metadata: Metadata = {
  title: "Acoustic Treatment & Installation",
  description:
    "Professional acoustic treatment and installation for recording studios, conference rooms, and karaoke rooms in Bhutan.",
};

export default function AcousticTreatmentPage() {
  return <AcousticContent />;
}
