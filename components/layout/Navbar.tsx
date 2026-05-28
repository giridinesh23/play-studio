"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { navLinks } from "@/data/company";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-dark/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] border-b border-purple/10"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo.svg"
              alt="Play Studio Logo"
              width={40}
              height={44}
              className="group-hover:scale-105 transition-transform"
            />
            <span className="font-montserrat font-bold text-xl tracking-wider text-text group-hover:text-accent transition-colors">
              PLAY STUDIO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 font-montserrat text-sm uppercase tracking-wider transition-colors ${
                      isActive(link.href) ? "text-accent" : "text-text hover:text-accent"
                    }`}
                  >
                    {link.label}
                    <ChevronDownIcon className="w-3 h-3" />
                  </Link>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-dark/95 backdrop-blur-md rounded-lg border border-border shadow-xl overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-3 text-sm transition-colors ${
                              isActive(child.href)
                                ? "text-accent bg-primary-light"
                                : "text-text hover:text-accent hover:bg-primary-light"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-montserrat text-sm uppercase tracking-wider transition-colors ${
                    isActive(link.href) ? "text-accent" : "text-text hover:text-accent"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-text hover:text-accent transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <XMarkIcon className="w-7 h-7" />
            ) : (
              <Bars3Icon className="w-7 h-7" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <div className="px-6 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  {link.children ? (
                    <>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`flex items-center justify-between w-full py-3 font-montserrat text-sm uppercase tracking-wider ${
                          isActive(link.href) ? "text-accent" : "text-text"
                        }`}
                      >
                        {link.label}
                        <ChevronDownIcon
                          className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="ml-4 space-y-1 overflow-hidden"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block py-2 text-sm ${
                                  isActive(child.href) ? "text-accent" : "text-text-muted hover:text-accent"
                                }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={`block py-3 font-montserrat text-sm uppercase tracking-wider ${
                        isActive(link.href) ? "text-accent" : "text-text hover:text-accent"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
