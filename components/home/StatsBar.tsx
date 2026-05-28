"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { stats } from "@/data/company";
import CountUp from "@/components/ui/CountUp";
import Container from "@/components/ui/Container";

export default function StatsBar() {
  return (
    <section className="py-16 bg-gradient-to-r from-dark/80 via-purple-dark/20 to-dark/80 border-y border-purple/10 section-glow">
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="text-center"
            >
              <div className="font-montserrat text-4xl md:text-5xl font-bold text-gradient">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-text-muted text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
