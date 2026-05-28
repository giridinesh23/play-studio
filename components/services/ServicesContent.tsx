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
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  "speaker-wave": SpeakerWaveIcon,
  "building-office": BuildingOfficeIcon,
  microphone: MicrophoneIcon,
  "adjustments-horizontal": AdjustmentsHorizontalIcon,
};

export default function ServicesContent() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive audio-visual solutions for every need."
        backgroundImage="https://images.unsplash.com/photo-1510511233900-1982d92bd835?w=1920&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div key={service.slug} variants={staggerItem}>
                  <Link
                    href={service.href}
                    className="group block bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(124,92,252,0.12),0_0_80px_rgba(226,179,64,0.08)] gradient-border h-full"
                  >
                    {Icon && (
                      <Icon className="w-12 h-12 text-accent mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(226,179,64,0.5)] transition-all" />
                    )}
                    <h3 className="font-montserrat text-xl font-semibold text-text mb-3">
                      {service.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {service.features.map((f) => (
                        <li key={f} className="text-text-muted text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="text-accent font-montserrat text-sm font-semibold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-block">
                      Learn More &rarr;
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
