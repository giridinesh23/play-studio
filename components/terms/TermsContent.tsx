"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { terms } from "@/data/terms";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";

export default function TermsContent() {
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set([terms[0]?.id])
  );

  const toggle = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <>
      <PageHero
        title="Terms & Conditions"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container className="max-w-4xl">
          {/* Table of Contents */}
          <nav className="mb-12 bg-card border border-border rounded-xl p-6">
            <h2 className="font-montserrat font-semibold text-accent text-sm uppercase tracking-wider mb-4">
              Contents
            </h2>
            <ul className="space-y-2">
              {terms.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-text-muted text-sm hover:text-accent transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {terms.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                variants={staggerItem}
                className="border border-border rounded-xl overflow-hidden scroll-mt-24"
              >
                <button
                  onClick={() => toggle(section.id)}
                  className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-card-hover transition-colors"
                >
                  <h3 className="font-montserrat font-semibold text-text">
                    {section.title}
                  </h3>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      openSections.has(section.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openSections.has(section.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-text-muted text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
