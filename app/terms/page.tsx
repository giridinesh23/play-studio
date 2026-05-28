import type { Metadata } from "next";
import TermsContent from "@/components/terms/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Play Studio rental terms and conditions covering equipment hire, booking, payment, cancellation, and recording services.",
};

export default function TermsPage() {
  return <TermsContent />;
}
