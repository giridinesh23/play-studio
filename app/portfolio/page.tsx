import type { Metadata } from "next";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View our portfolio of events, acoustic treatments, and recording projects across Bhutan.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
