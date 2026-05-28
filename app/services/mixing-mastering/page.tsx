import type { Metadata } from "next";
import MixingMasteringContent from "@/components/services/MixingMasteringContent";

export const metadata: Metadata = {
  title: "Mixing & Mastering",
  description:
    "Professional mixing and mastering services. Release-ready audio optimized for Spotify, Apple Music, and more.",
};

export default function MixingMasteringPage() {
  return <MixingMasteringContent />;
}
