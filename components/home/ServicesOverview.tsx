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
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div key={service.slug} variants={staggerItem}>
                <Link
                  href={service.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_0_40px_rgba(124,92,252,0.12),0_0_80px_rgba(226,179,64,0.08)] gradient-border"
                >
                  {/* Hover wash */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple/[0.08] via-transparent to-accent/[0.08] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  {/* Top accent bar reveals on hover */}
                  <span className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-accent to-purple transition-transform duration-300 group-hover:scale-x-100" />
                  {/* Editorial index */}
                  <span className="absolute right-5 top-5 font-montserrat text-sm font-bold text-text-muted/25">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 flex flex-1 flex-col">
                    {Icon && (
                      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-primary-light to-card transition-colors duration-300 group-hover:border-accent/40">
                        <Icon className="h-7 w-7 text-accent transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(226,179,64,0.5)]" />
                      </div>
                    )}
                    <h3 className="mb-2 font-montserrat text-lg font-semibold text-text">
                      {service.shortTitle}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-muted line-clamp-2">
                      {service.description}
                    </p>

                    {service.features?.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {service.features.slice(0, 3).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-xs text-text-muted"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70 transition-colors duration-300 group-hover:bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent">
                      Explore service
                      <svg
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M4 10h12M11 5l5 5-5 5" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
