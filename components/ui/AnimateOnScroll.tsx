"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}

export default function AnimateOnScroll({
  children,
  variants = fadeInUp,
  className,
  delay = 0,
}: AnimateOnScrollProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
