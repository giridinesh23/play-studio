"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const pricing = [
  {
    service: "Mixing",
    price: "Nu. 10,000",
    unit: "per project",
    turnaround: "7–10 days per song",
  },
  {
    service: "Mastering",
    price: "Nu. 5,000",
    unit: "per project",
    turnaround: "3–5 days per song",
  },
];

const mixingRequirements = [
  "All stems as WAV/AIFF, 24-bit minimum",
  "Submitted at least 48 hours before the session",
  "Clearly labeled tracks with instrument/vocal names",
];

const masteringRequirements = [
  "Stereo WAV/AIFF, 24-bit/44.1 kHz or higher",
  "At least −3 dBFS headroom",
  "Specify target platform (Spotify, Apple Music, etc.)",
];

const youtubeVideos = [
  { id: "qL95pB7IgwA", title: "Play Studio Mix Sample 1" },
  { id: "wv5ENoigL7g", title: "Play Studio Mix Sample 2" },
  { id: "ZujZL2VGTkY", title: "Play Studio Mix Sample 3" },
];

export default function MixingMasteringContent() {
  return (
    <>
      <PageHero
        title="Professional Mixing & Mastering"
        backgroundImage="https://images.unsplash.com/photo-1550524756-d07d631274cc?w=1200&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container>
          {/* Pricing Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16"
          >
            {pricing.map((item, i) => (
              <motion.div
                key={item.service}
                variants={staggerItem}
                className={`bg-card rounded-xl p-8 text-center transition-all hover:-translate-y-1 ${
                  i === 0
                    ? "border-2 border-accent shadow-[0_0_30px_rgba(201,168,76,0.15)]"
                    : "border border-border"
                }`}
              >
                <h3 className="font-montserrat text-xl font-bold text-text">
                  {item.service}
                </h3>
                <p className="text-accent text-3xl font-bold font-montserrat mt-4">
                  {item.price}
                </p>
                <p className="text-text-muted text-sm mt-1">{item.unit}</p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-text-muted text-sm">
                    Turnaround: {item.turnaround}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* What We Need */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat text-2xl font-bold text-text text-center mb-8">
              What We Need From You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-montserrat font-semibold text-accent mb-4">
                  For Mixing
                </h3>
                <ul className="space-y-2">
                  {mixingRequirements.map((req) => (
                    <li
                      key={req}
                      className="text-text-muted text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6"
              >
                <h3 className="font-montserrat font-semibold text-accent mb-4">
                  For Mastering
                </h3>
                <ul className="space-y-2">
                  {masteringRequirements.map((req) => (
                    <li
                      key={req}
                      className="text-text-muted text-sm flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Revision Policy */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-6 max-w-3xl mx-auto mb-16"
          >
            <h3 className="font-montserrat text-lg font-semibold text-text mb-4">
              Revision Policy
            </h3>
            <div className="space-y-3 text-text-muted text-sm">
              <div>
                <span className="text-accent font-semibold">Mixing:</span> Up to
                2 rounds of revisions included. Additional revisions billed at
                hourly rate.
              </div>
              <div>
                <span className="text-accent font-semibold">Mastering:</span> 1
                revision per track included. Further revisions at standard rate.
              </div>
            </div>
          </motion.div>

          {/* YouTube Embeds */}
          <div className="mb-16">
            <h2 className="font-montserrat text-2xl font-bold text-text text-center mb-8">
              Listen to Our Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {youtubeVideos.map((video) => (
                <div
                  key={video.id}
                  className="aspect-video rounded-xl overflow-hidden bg-card"
                >
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button href="/contact">Send Us Your Project</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
