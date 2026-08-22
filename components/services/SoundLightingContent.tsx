"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDownIcon,
  BuildingOffice2Icon,
  MusicalNoteIcon,
  UserGroupIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";
import { packages } from "@/data/packages";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const categoryIcons: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  conference: BuildingOffice2Icon,
  "solo-acoustic": MusicalNoteIcon,
  "four-piece-band": UserGroupIcon,
  "full-band": SpeakerWaveIcon,
};

export default function SoundLightingContent() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedTiers, setExpandedTiers] = useState<Set<string>>(new Set());

  const toggleTier = (key: string) => {
    setExpandedTiers((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <>
      <PageHero
        title="Professional Sound & Lighting for Every Event"
        subtitle="From 50-person gatherings to 2,000+ outdoor concerts"
        backgroundImage="https://images.unsplash.com/photo-1630965764341-6db7343cfa57?w=1920&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container>
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {packages.map((pkg, i) => {
              const Icon = categoryIcons[pkg.slug];
              const isActive = activeCategory === i;
              return (
                <button
                  key={pkg.slug}
                  onClick={() => {
                    setActiveCategory(i);
                    setExpandedTiers(new Set());
                  }}
                  className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-montserrat text-sm uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-accent to-accent-hover text-dark shadow-[0_8px_24px_rgba(226,179,64,0.35)] scale-105"
                      : "bg-card border border-border text-text-muted hover:-translate-y-0.5 hover:border-accent/40 hover:text-accent hover:shadow-[0_6px_20px_rgba(226,179,64,0.10)]"
                  }`}
                >
                  {Icon && (
                    <Icon
                      className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                        isActive
                          ? "text-dark"
                          : "text-accent group-hover:scale-110"
                      }`}
                    />
                  )}
                  {pkg.name.replace(" Packages", "")}
                </button>
              );
            })}
          </div>

          {/* Active Category */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-center text-text-muted mb-10">
                {packages[activeCategory].description}
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {packages[activeCategory].tiers.map((tier, j) => {
                  const tierKey = `${activeCategory}-${j}`;
                  const isExpanded = expandedTiers.has(tierKey);
                  const isMiddle = j === 1;

                  return (
                    <motion.div
                      key={tierKey}
                      variants={staggerItem}
                      className={`bg-card rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                        isMiddle
                          ? "border-2 border-accent shadow-[0_0_30px_rgba(201,168,76,0.15)]"
                          : "border border-border"
                      }`}
                    >
                      {isMiddle && (
                        <div className="bg-accent text-dark text-center py-1 font-montserrat text-xs uppercase tracking-wider font-semibold">
                          Most Popular
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-montserrat text-xl font-bold text-text">
                          {tier.name}
                        </h3>
                        <p className="text-accent text-sm mt-1">{tier.subtitle}</p>

                        {/* Equipment Preview */}
                        <div className="mt-4 space-y-1.5">
                          {tier.equipment.slice(0, 3).map((eq) => (
                            <div
                              key={eq.name}
                              className="flex justify-between text-sm"
                            >
                              <span className="text-text-muted">{eq.name}</span>
                              <span className="text-accent">x{eq.quantity}</span>
                            </div>
                          ))}
                        </div>

                        {tier.equipment.length > 3 && (
                          <>
                            <button
                              onClick={() => toggleTier(tierKey)}
                              className="flex items-center gap-1 mt-3 text-accent text-sm font-semibold hover:underline"
                            >
                              {isExpanded ? "Hide" : "View"} full equipment list
                              <ChevronDownIcon
                                className={`w-4 h-4 transition-transform ${
                                  isExpanded ? "rotate-180" : ""
                                }`}
                              />
                            </button>

                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="mt-2 space-y-1.5 pt-2 border-t border-border">
                                    {tier.equipment.slice(3).map((eq) => (
                                      <div
                                        key={eq.name}
                                        className="flex justify-between text-sm"
                                      >
                                        <span className="text-text-muted">
                                          {eq.name}
                                        </span>
                                        <span className="text-accent">
                                          x{eq.quantity}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Pricing Callout */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 bg-card border-2 border-accent/30 rounded-xl p-6 text-center"
          >
            <p className="text-text font-montserrat font-semibold">
              Pricing varies by event size and requirements.
            </p>
            <p className="text-text-muted text-sm mt-1">
              Contact us for a custom quote tailored to your event.
            </p>
          </motion.div>

          {/* Delivery Note */}
          <p className="text-text-muted text-sm text-center mt-6 italic">
            Delivery available across Bhutan. Charges depend on event size and distance.
          </p>

          {/* Lighting Section */}
          <div className="mt-16 bg-card border border-border rounded-xl p-8 text-center">
            <h3 className="font-montserrat text-xl font-semibold text-text mb-3">
              Stage Lighting
            </h3>
            <p className="text-text-muted">
              Our stage lighting inventory includes LED par lights, moving head
              lights, haze machines, truss systems, and more. Full lighting
              equipment list coming soon.
            </p>
            {/* TODO: Insert lighting equipment list when provided */}
          </div>

          <div className="mt-10 text-center">
            <Button href="/contact">Get a Custom Quote</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
