import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Play Studio — Bhutan's premier audio-visual production company. Our story, mission, team, and 10 years of experience.",
};

export default function AboutPage() {
  return <AboutContent />;
}
