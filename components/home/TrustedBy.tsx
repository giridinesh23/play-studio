"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Container from "@/components/ui/Container";

const clients = [
  { name: "Terma Linca Thimphu", logo: "/images/clients/terma-linca.jpg" },
  { name: "IQOS", logo: "/images/clients/iqos.jpg" },
  { name: "Pemako", logo: "/images/clients/pemako.jpg" },
  { name: "Snow Leopard Theater", logo: "/images/clients/snow-leopard-theater.jpg" },
  { name: "Wozer Events", logo: "/images/clients/wozer-events.jpg" },
];

const carouselClients = [...clients, ...clients];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-dark/40 border-y border-purple/8 overflow-hidden">
      <Container>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-text-muted text-sm uppercase tracking-wider font-montserrat mb-8"
        >
          Trusted By
        </motion.p>
      </Container>
      <div className="relative">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...carouselClients, ...carouselClients].map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="mx-4 flex-shrink-0 w-32 sm:w-36 aspect-square border border-border rounded-lg bg-white p-4 overflow-hidden"
              aria-hidden={i >= carouselClients.length}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={144}
                height={144}
                className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
