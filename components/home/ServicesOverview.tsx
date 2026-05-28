"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SpeakerWaveIcon,
  BuildingOfficeIcon,
  MicrophoneIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { services } from "@/data/services";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "speaker-wave": SpeakerWaveIcon,
  "building-office": BuildingOfficeIcon,
  microphone: MicrophoneIcon,
  "adjustments-horizontal": AdjustmentsHorizontalIcon,
};

export default function ServicesOverview() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Our Services"
          subtitle="From live events to studio recording — we deliver professional audio solutions across Bhutan."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.slug} variants={staggerItem}>
                <Link
                  href={service.href}
                  className="group block bg-card hover:bg-card-hover border border-border rounded-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(124,92,252,0.12),0_0_80px_rgba(226,179,64,0.08)] gradient-border h-full"
                >
                  {Icon && (
                    <Icon className="w-10 h-10 text-accent mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(226,179,64,0.5)] transition-all" />
                  )}
                  <h3 className="font-montserrat text-lg font-semibold text-text mb-2">
                    {service.shortTitle}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <span className="inline-block mt-4 text-accent text-sm font-semibold group-hover:translate-x-1 transition-transform">
                    Learn More &rarr;
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
