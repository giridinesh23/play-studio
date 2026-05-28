"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { portfolio } from "@/data/portfolio";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const categories = [
  { label: "All", value: "all" },
  { label: "Events", value: "event" },
  { label: "Acoustic Treatment", value: "acoustic" },
  { label: "Studio Recording", value: "recording" },
] as const;

export default function PortfolioContent() {
  const [filter, setFilter] = useState<string>("all");

  const filtered =
    filter === "all"
      ? portfolio
      : portfolio.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        title="Our Work"
        backgroundImage="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container>
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`px-5 py-2 rounded-full font-montserrat text-sm uppercase tracking-wider transition-all ${
                  filter === cat.value
                    ? "bg-accent text-dark"
                    : "bg-card border border-border text-text-muted hover:text-accent hover:border-accent/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.id}
                  variants={staggerItem}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-card border border-border rounded-xl overflow-hidden ${
                    project.placeholder ? "opacity-50" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {project.placeholder ? (
                      <ImagePlaceholder
                        label="Coming Soon"
                        aspectRatio="aspect-[4/3]"
                      />
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    )}
                    {project.placeholder && (
                      <div className="absolute inset-0 bg-dark/60 flex items-center justify-center">
                        <span className="font-montserrat text-accent text-sm uppercase tracking-wider">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-accent text-xs uppercase tracking-wider bg-accent/10 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      {project.date && (
                        <span className="text-text-muted text-xs">{project.date}</span>
                      )}
                    </div>
                    <h3 className="font-montserrat font-semibold text-text">
                      {project.title}
                    </h3>
                    {!project.placeholder && (
                      <>
                        <p className="text-text-muted text-xs mt-1">
                          Client: {project.client}
                        </p>
                        <p className="text-text-muted text-sm mt-2 leading-relaxed">
                          {project.description}
                        </p>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
