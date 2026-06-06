import type { Metadata } from "next";
import { Montserrat, Nunito } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Play Studio — Where Every Event Meets Perfection",
    template: "%s | Play Studio",
  },
  description:
    "Bhutan's premier professional audio-visual production, sound system rental, acoustic treatment, and recording studio. Based in Changzamtog, Thimphu.",
  keywords: [
    "Play Studio",
    "Bhutan sound system",
    "audio production Bhutan",
    "recording studio Thimphu",
    "acoustic treatment Bhutan",
    "stage lighting hire",
    "mixing mastering Bhutan",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Play Studio",
    title: "Play Studio — Where Every Event Meets Perfection",
    description:
      "Bhutan's premier professional audio-visual production, sound system rental, acoustic treatment, and recording studio.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Play Studio",
  description:
    "Bhutan's premier professional audio-visual production, sound system rental, acoustic treatment, and recording studio.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Changzamtog",
    addressLocality: "Thimphu",
    addressCountry: "BT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.4661,
    longitude: 89.6419,
  },
  openingHours: "Mo-Su 09:00-18:00",
  url: "https://playstudio.bt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${nunito.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-primary text-text">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-dark focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
