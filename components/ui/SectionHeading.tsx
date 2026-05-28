"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={centered ? "text-center" : ""}
    >
      {eyebrow && (
        <span className="text-accent font-montserrat text-sm uppercase tracking-[0.2em] font-semibold">
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mt-2 ${
          light ? "text-dark" : "text-text"
        }`}
      >
        {title}
      </h2>
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-16 shimmer-line rounded-full" />
      </div>
      {subtitle && (
        <p className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-dark/70" : "text-text-muted"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
