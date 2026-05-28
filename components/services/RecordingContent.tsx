"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const studioEquipment = [
  { label: "DAW", value: "Cubase & Logic Pro" },
  { label: "Monitors", value: "Yamaha HS8" },
  {
    label: "Instruments",
    value:
      "Acoustic Guitar, Piano, MIDI Keyboard, Expandable Synthesizer, Flute & Dranyen (traditional Bhutanese instrument)",
  },
  // TODO: Add microphone and console details when provided
];

const sessions = [
  { type: "Hourly Session", duration: "1 hour", price: "Nu. 700" },
  { type: "Half-Day Session", duration: "4 hours", price: "Nu. 3,000" },
  { type: "Full-Day Session", duration: "8 hours", price: "Nu. 5,000" },
];

const genres = [
  "Bhutanese Folk",
  "Pop",
  "Rock",
  "Hip-Hop",
  "Voice-Over",
  "Podcasts",
  "Jingles",
];

export default function RecordingContent() {
  return (
    <>
      <PageHero
        title="Professional Recording Studio in Thimphu"
        backgroundImage="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container>
          {/* Studio Equipment */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat text-2xl font-bold text-text text-center mb-8">
              Studio Equipment
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {studioEquipment.map((item) => (
                <motion.div
                  key={item.label}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-lg p-4 flex flex-col sm:flex-row gap-2"
                >
                  <span className="font-montserrat text-accent text-sm uppercase tracking-wider font-semibold min-w-[120px]">
                    {item.label}
                  </span>
                  <span className="text-text-muted text-sm">{item.value}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Session Pricing */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="font-montserrat text-2xl font-bold text-text text-center mb-8">
              Session Types & Pricing
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {sessions.map((session, i) => (
                <motion.div
                  key={session.type}
                  variants={staggerItem}
                  className={`bg-card rounded-xl p-6 text-center transition-all hover:-translate-y-1 ${
                    i === 2
                      ? "border-2 border-accent shadow-[0_0_30px_rgba(201,168,76,0.15)]"
                      : "border border-border"
                  }`}
                >
                  <h3 className="font-montserrat font-semibold text-text">
                    {session.type}
                  </h3>
                  <p className="text-text-muted text-sm mt-1">{session.duration}</p>
                  <p className="text-accent text-2xl font-bold font-montserrat mt-3">
                    {session.price}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Genres */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-montserrat text-2xl font-bold text-text mb-6">
              Genres We Work With
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {genres.map((genre) => (
                <span
                  key={genre}
                  className="bg-card border border-border rounded-full px-4 py-2 text-text-muted text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </motion.div>

          {/* YouTube Embeds */}
          <div className="mb-16">
            <h2 className="font-montserrat text-2xl font-bold text-text text-center mb-8">
              Listen to Our Work
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="aspect-video rounded-xl overflow-hidden bg-card">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/wv5ENoigL7g"
                  title="Play Studio - Featured Track"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-card border border-border flex items-center justify-center">
                <a
                  href="https://www.youtube.com/@UCKMOJX80b9HzHs9BojJTtaQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-montserrat text-sm hover:underline"
                >
                  Visit Our YouTube Channel &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button href="/contact">Book a Recording Session</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
