"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { faqs } from "@/data/faq";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-card-hover transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-montserrat font-semibold text-text pr-4">
          {question}
        </span>
        <ChevronDownIcon
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 text-text-muted leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        backgroundImage="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container className="max-w-3xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={staggerItem}>
                <AccordionItem
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
