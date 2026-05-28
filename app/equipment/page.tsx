import type { Metadata } from "next";
import EquipmentContent from "@/components/equipment/EquipmentContent";

export const metadata: Metadata = {
  title: "Equipment Rental",
  description:
    "Browse Play Studio's professional audio, lighting, and staging equipment available for hire across Bhutan.",
};

export default function EquipmentPage() {
  return <EquipmentContent />;
}
