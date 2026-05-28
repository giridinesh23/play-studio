"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export default function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
      {backgroundImage ? (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-dark/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple/8 via-transparent to-accent/5" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-dark" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[120px]" />
        </>
      )}

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-text">
            {title}
          </h1>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 shimmer-line rounded-full" />
          </div>
          {subtitle && (
            <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </Container>
    </section>
  );
}
