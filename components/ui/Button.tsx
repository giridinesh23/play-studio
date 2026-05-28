"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 font-montserrat font-semibold text-sm uppercase tracking-wider rounded transition-all duration-300";
  const variants = {
    primary:
      "bg-gradient-to-r from-accent to-accent-hover text-dark hover:shadow-[0_0_30px_rgba(226,179,64,0.4),0_0_60px_rgba(226,179,64,0.15)] hover:scale-105",
    outline:
      "border-2 border-accent/70 text-accent hover:bg-accent hover:text-dark hover:scale-105 hover:border-accent hover:shadow-[0_0_25px_rgba(226,179,64,0.25)]",
  };

  const classes = clsx(baseClasses, variants[variant], disabled && "opacity-50 cursor-not-allowed", className);

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
