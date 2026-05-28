"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-dark/30 via-accent/10 to-purple-dark/30 border-y border-accent/15 section-glow relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <Container>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-text">
            Ready to elevate your next event?
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-xl mx-auto">
            Let us bring professional sound and production to your next project.
          </p>
          <div className="mt-8">
            <Button href="/contact">Get a Free Quote</Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
