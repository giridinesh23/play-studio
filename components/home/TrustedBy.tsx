"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Container from "@/components/ui/Container";

export default function TrustedBy() {
  // TODO: Replace with actual client logos when provided
  const placeholders = Array.from({ length: 8 }, (_, i) => `Client Logo ${i + 1}`);

  return (
    <section className="py-16 bg-dark/40 border-y border-purple/8 overflow-hidden">
      <Container>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-text-muted text-sm uppercase tracking-wider font-montserrat mb-8"
        >
          Trusted By
        </motion.p>
      </Container>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...placeholders, ...placeholders].map((label, i) => (
            <div
              key={i}
              className="mx-8 flex-shrink-0 w-36 h-16 bg-card border border-border rounded-lg flex items-center justify-center"
            >
              <span className="text-text-muted text-xs font-montserrat">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
