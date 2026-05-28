"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { portfolio } from "@/data/portfolio";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedProjects() {
  const featured = portfolio.filter((p) => !p.placeholder).slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-dark/40 via-purple-dark/10 to-dark/40 section-glow">
      <Container>
        <SectionHeading
          eyebrow="Our Work"
          title="Featured Projects"
          subtitle="A selection of our most notable productions."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <Link
                href="/portfolio"
                className="group block bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(124,92,252,0.12),0_0_80px_rgba(226,179,64,0.08)] gradient-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-accent text-sm font-semibold">
                      View Project &rarr;
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-accent text-xs uppercase tracking-wider mb-1">
                    {project.client}
                  </p>
                  <h3 className="font-montserrat font-semibold text-text">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-8 text-center">
          <Link
            href="/portfolio"
            className="text-accent font-montserrat text-sm uppercase tracking-wider hover:underline"
          >
            View All Projects &rarr;
          </Link>
        </div>
      </Container>
    </section>
  );
}
