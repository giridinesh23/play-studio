"use client";

import { motion } from "framer-motion";
import {
  StarIcon,
  ShieldCheckIcon,
  SparklesIcon,
  HeartIcon,
  FireIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { staggerContainer, staggerItem, fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { foundingStory, missionVision, values, milestones } from "@/data/company";
import { team } from "@/data/team";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  star: StarIcon,
  shield: ShieldCheckIcon,
  sparkles: SparklesIcon,
  heart: HeartIcon,
  fire: FireIcon,
  "check-badge": CheckBadgeIcon,
};

export default function AboutContent() {
  return (
    <>
      <PageHero
        title="Our Story"
        backgroundImage="https://images.unsplash.com/photo-1524005694952-a9221a423d31?w=1920&q=80&auto=format&fit=crop"
      />

      {/* Founding Story */}
      <section className="py-20 relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[600px] bg-gradient-to-b from-purple/3 to-accent/3 rounded-full blur-[100px] pointer-events-none" />

        <Container className="max-w-4xl relative">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="prose prose-lg prose-invert mx-auto"
          >
            {foundingStory.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className={`leading-relaxed mb-6 ${
                  i === 0
                    ? "text-text text-xl font-medium italic border-l-2 border-accent/50 pl-6"
                    : i === 2 || i === 4
                    ? "text-text font-semibold text-lg"
                    : "text-text-muted"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-b from-dark/40 via-purple-dark/10 to-dark/40 section-glow">
        <Container>
          <SectionHeading eyebrow="Our Purpose" title="Mission & Vision" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 gradient-border hover:shadow-[0_0_40px_rgba(124,92,252,0.1)] transition-all duration-300"
            >
              <h3 className="font-montserrat text-sm uppercase tracking-wider text-accent mb-4">
                Mission
              </h3>
              <p className="text-text leading-relaxed">{missionVision.mission}</p>
            </motion.div>
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-8 gradient-border hover:shadow-[0_0_40px_rgba(124,92,252,0.1)] transition-all duration-300"
            >
              <h3 className="font-montserrat text-sm uppercase tracking-wider text-accent mb-4">
                Vision
              </h3>
              <p className="text-text leading-relaxed">{missionVision.vision}</p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[130px] pointer-events-none" />
        <Container>
          <SectionHeading eyebrow="What Drives Us" title="Core Values" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {values.map((value) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={value.title}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(124,92,252,0.1),0_0_60px_rgba(226,179,64,0.06)] gradient-border transition-all duration-300"
                >
                  {Icon && <Icon className="w-8 h-8 text-accent mx-auto mb-3 group-hover:drop-shadow-[0_0_8px_rgba(226,179,64,0.5)]" />}
                  <h3 className="font-montserrat font-semibold text-text mb-1">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-to-b from-dark/40 via-purple-dark/10 to-dark/40 section-glow">
        <Container>
          <SectionHeading eyebrow="Achievements" title="Milestones" />
          <div className="mt-12 max-w-3xl mx-auto space-y-0">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative pl-8 pb-10 last:pb-0 border-l-2 border-accent/30"
              >
                <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-accent -translate-x-[9px]" />
                <h3 className="font-montserrat font-semibold text-text">
                  {milestone.title}
                </h3>
                <p className="text-text-muted text-sm mt-1 leading-relaxed">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-purple/5 rounded-full blur-[140px] pointer-events-none" />
        <Container>
          <SectionHeading
            eyebrow="The People"
            title="Meet Our Team"
            subtitle="The experienced professionals behind every Play Studio production."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className={`bg-card border border-border rounded-xl overflow-hidden gradient-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(124,92,252,0.1),0_0_60px_rgba(226,179,64,0.06)] ${
                  member.placeholder ? "opacity-60" : ""
                }`}
              >
                <ImagePlaceholder
                  label={member.placeholder ? "Coming Soon" : member.name}
                  aspectRatio="aspect-[3/4]"
                />
                <div className="p-6">
                  <h3 className="font-montserrat font-semibold text-text">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm">{member.role}</p>
                  <p className="text-text-muted text-sm mt-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}
