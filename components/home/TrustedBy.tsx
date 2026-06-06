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
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="mx-6 flex-shrink-0 w-36 h-20 border border-border rounded-lg overflow-hidden"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={144}
                height={80}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
