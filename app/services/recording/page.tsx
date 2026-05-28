import type { Metadata } from "next";
import RecordingContent from "@/components/services/RecordingContent";

export const metadata: Metadata = {
  title: "Recording & Music Production",
  description:
    "Professional recording studio in Thimphu, Bhutan. Hourly and full-day sessions with Cubase, Logic Pro, and premium instruments.",
};

export default function RecordingPage() {
  return <RecordingContent />;
}
