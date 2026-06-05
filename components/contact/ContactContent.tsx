"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, fadeInRight } from "@/lib/animations";
import { company } from "@/data/company";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/Container";
import {
  MapPinIcon,
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  eventDate: string;
  venue: string;
  message: string;
}

const serviceOptions = [
  "Sound System Hire",
  "Stage Lighting",
  "Acoustic Treatment",
  "Recording Session",
  "Mixing",
  "Mastering",
  "Equipment Rental",
  "Other",
];

const telHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;
const whatsappHref = (phone: string) => `https://wa.me/${phone.replace(/\D/g, "")}`;

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-card border border-border rounded-lg px-4 py-3 text-text placeholder:text-text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm";
  const labelClasses = "block text-text-muted text-sm font-montserrat mb-1.5";
  const errorClasses = "text-error text-xs mt-1";

  return (
    <>
      <PageHero
        title="Get in Touch"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80&auto=format&fit=crop"
      />
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={inputClasses}
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                      <p className={errorClasses}>{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={inputClasses}
                      placeholder="your@email.com"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                    />
                    {errors.email && (
                      <p className={errorClasses}>{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className={inputClasses}
                      placeholder="+975..."
                      {...register("phone")}
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className={labelClasses}>
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      className={inputClasses}
                      {...register("service")}
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="eventDate" className={labelClasses}>
                      Event Date
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      className={inputClasses}
                      {...register("eventDate")}
                    />
                  </div>
                  <div>
                    <label htmlFor="venue" className={labelClasses}>
                      Event Size / Venue
                    </label>
                    <input
                      id="venue"
                      type="text"
                      className={inputClasses}
                      placeholder="e.g., 200 people, outdoor"
                      {...register("venue")}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClasses}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={inputClasses}
                    placeholder="Tell us about your project..."
                    {...register("message", { required: "Message is required" })}
                  />
                  {errors.message && (
                    <p className={errorClasses}>{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-accent text-dark font-montserrat font-semibold text-sm uppercase tracking-wider py-3 rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-50"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-success text-sm text-center"
                  >
                    Message sent successfully! We&apos;ll get back to you soon.
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-error text-sm text-center"
                  >
                    Something went wrong. Please try again or email us directly.
                  </motion.p>
                )}
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-card border border-border rounded-xl p-6 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-text text-sm font-semibold">Address</p>
                    <p className="text-text-muted text-sm">{company.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ClockIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-text text-sm font-semibold">Hours</p>
                    <p className="text-text-muted text-sm">{company.hours}</p>
                    <p className="text-accent text-xs">By appointment only</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-text text-sm font-semibold">Email</p>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-text-muted text-sm hover:text-accent transition-colors"
                    >
                      {company.email}
                    </a>
                  </div>
                </div>
                {company.phone && (
                  <div className="flex items-start gap-3">
                    <PhoneIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text text-sm font-semibold">Phone</p>
                      <a
                        href={telHref(company.phone)}
                        className="text-text-muted text-sm hover:text-accent transition-colors"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </div>
                )}
                {company.whatsapp && (
                  <div className="flex items-start gap-3">
                    <ChatBubbleLeftRightIcon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-text text-sm font-semibold">WhatsApp</p>
                      <a
                        href={whatsappHref(company.whatsapp)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-muted text-sm hover:text-accent transition-colors"
                      >
                        {company.whatsapp}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Map */}
              <div className="bg-card border border-border rounded-xl overflow-hidden aspect-[4/3]">
                {/* TODO: Replace with actual Google Maps embed link */}
                <iframe
                  src={`https://maps.google.com/maps?q=${company.coordinates.lat},${company.coordinates.lng}&z=15&output=embed`}
                  title="Play Studio Location"
                  className="w-full h-full"
                  loading="lazy"
                  allowFullScreen
                />
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center">
                {[
                  { name: "Facebook", href: company.social.facebook },
                  { name: "Instagram", href: company.social.instagram },
                  { name: "TikTok", href: company.social.tiktok },
                  { name: "YouTube", href: company.social.youtube },
                ]
                  .filter((social) => social.href)
                  .map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-card border border-border rounded-full flex items-center justify-center text-text-muted text-xs hover:border-accent hover:text-accent transition-colors"
                    title={social.name}
                    aria-label={social.name}
                  >
                    {social.name[0]}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
}
