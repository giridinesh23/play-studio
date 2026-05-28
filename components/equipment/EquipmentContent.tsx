"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { equipment, equipmentCategories } from "@/data/equipment";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function EquipmentContent() {
  const [category, setCategory] = useState<string>("All");

  const filtered =
    category === "All"
      ? equipment
      : equipment.filter((item) => item.category === category);

  return (
    <>
      <PageHero
        title="Equipment Rental"
        subtitle="Browse our professional audio, lighting, and staging equipment available for hire."
        backgroundImage="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1920&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
            All equipment is maintained to the highest standards and comes with
            optional technical support.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {equipmentCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-montserrat uppercase tracking-wider transition-all ${
                  category === cat
                    ? "bg-accent text-dark"
                    : "bg-card border border-border text-text-muted hover:text-accent hover:border-accent/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Equipment Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.name}
                  variants={staggerItem}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-accent text-xs uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <span className="text-text-muted text-sm">x{item.quantity}</span>
                  </div>
                  <h3 className="font-montserrat font-semibold text-text mb-1">
                    {item.name}
                  </h3>
                  <p className="text-accent text-xs mb-2">{item.brand}</p>
                  <p className="text-text-muted text-sm">{item.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Pricing Note */}
          <div className="mt-12 text-center">
            <p className="text-text-muted italic mb-6">
              All equipment pricing is quote-based. Contact us for rental rates.
            </p>
            <Button href="/contact">Request Equipment Quote</Button>
          </div>
          {/* TODO: Lighting equipment inventory to be added later. Build the data structure to support easy addition of new equipment categories */}
        </Container>
      </section>
    </>
  );
}
