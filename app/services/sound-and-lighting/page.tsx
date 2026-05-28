import type { Metadata } from "next";
import SoundLightingContent from "@/components/services/SoundLightingContent";

export const metadata: Metadata = {
  title: "Sound System & Stage Lighting Hire",
  description:
    "Professional sound systems and stage lighting for events of all sizes in Bhutan. Conference rooms to outdoor concerts.",
};

export default function SoundAndLightingPage() {
  return <SoundLightingContent />;
}
