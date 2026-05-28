"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const processSteps = [
  {
    title: "Consultation",
    description: "We assess your space and understand your acoustic goals.",
  },
  {
    title: "Design",
    description:
      "Our team creates a custom acoustic design tailored to your room's dimensions and purpose.",
  },
  {
    title: "Material Selection",
    description:
      "We source the best acoustic materials based on your needs and budget.",
  },
  {
    title: "Installation",
    description: "Professional installation by our experienced technicians.",
  },
  {
    title: "Testing & Calibration",
    description:
      "We test the treated space to ensure optimal acoustic performance.",
  },
  {
    title: "Handover",
    description: "Final walkthrough and client approval.",
  },
];

const spaces = [
  "Recording Studios",
  "Office Conference Rooms",
  "Karaoke Rooms",
  "Home Studios",
  "Auditoriums",
];

export default function AcousticContent() {
  return (
    <>
      <PageHero
        title="Professional Acoustic Treatment & Installation"
        backgroundImage="https://images.unsplash.com/photo-1558423039-2d4b02e50953?w=1920&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container>
          {/* Description */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-text-muted text-lg leading-relaxed">
              We design and install acoustic solutions for recording studios,
              office conference rooms, and karaoke rooms. We supply products
              based on client requirements — if they don&apos;t have a specific
              product in mind, we provide the design and recommend the best
              materials available.
            </p>
          </motion.div>

          {/* Process Timeline */}
          <div className="max-w-2xl mx-auto mb-20">
            <h2 className="font-montserrat text-2xl font-bold text-text text-center mb-10">
              Our Process
            </h2>
            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-10 pb-10 last:pb-0 border-l-2 border-accent/30"
                >
                  <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-accent/10 border-2 border-accent -translate-x-[17px] flex items-center justify-center">
                    <span className="text-accent text-xs font-bold">{i + 1}</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-text">
                    {step.title}
                  </h3>
                  <p className="text-text-muted text-sm mt-1">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Spaces We Treat */}
          <div className="mb-16">
            <h2 className="font-montserrat text-2xl font-bold text-text text-center mb-8">
              Spaces We Treat
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {spaces.map((space) => (
                <motion.div
                  key={space}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-lg px-6 py-3 text-text-muted hover:border-accent/30 hover:text-accent transition-colors"
                >
                  {space}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pricing */}
          <div className="bg-card border-2 border-accent/30 rounded-xl p-6 text-center max-w-2xl mx-auto mb-10">
            <p className="text-text font-montserrat font-semibold">
              Every space is unique.
            </p>
            <p className="text-text-muted text-sm mt-1">
              Pricing depends on room size, materials, and complexity. Contact us
              for a free consultation and quote.
            </p>
          </div>

          <div className="text-center">
            <Button href="/contact">Request a Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
