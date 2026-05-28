import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "sound-and-lighting",
    title: "Sound System & Stage Lighting Hire",
    shortTitle: "Sound & Lighting",
    description:
      "Professional sound systems and stage lighting for events of all sizes — from intimate 50-person gatherings to 2,000+ outdoor concerts. Tailored packages with premium KME and Yamaha equipment.",
    icon: "speaker-wave",
    features: [
      "Conference room setups",
      "Solo acoustic gig packages",
      "4-piece band setups",
      "Full band with drums packages",
      "Stage lighting design",
      "Delivery across Bhutan",
    ],
    href: "/services/sound-and-lighting",
  },
  {
    slug: "acoustic-treatment",
    title: "Acoustic Treatment & Installation",
    shortTitle: "Acoustic Treatment",
    description:
      "Custom acoustic solutions for recording studios, office conference rooms, karaoke rooms, and more. From consultation to installation — we design, source, and build.",
    icon: "building-office",
    features: [
      "Recording studio treatment",
      "Conference room acoustics",
      "Karaoke room design",
      "Material sourcing",
      "Professional installation",
      "Testing & calibration",
    ],
    href: "/services/acoustic-treatment",
  },
  {
    slug: "recording",
    title: "Recording & Music Production",
    shortTitle: "Recording",
    description:
      "Professional recording studio in Thimphu equipped with Cubase, Logic Pro, Yamaha HS8 monitors, and a range of acoustic and electronic instruments. Hourly, half-day, and full-day sessions available.",
    icon: "microphone",
    features: [
      "Hourly & full-day sessions",
      "Bhutanese folk to hip-hop",
      "Voice-over & podcasts",
      "Multiple DAWs available",
      "Instruments provided",
      "Jingle production",
    ],
    href: "/services/recording",
  },
  {
    slug: "mixing-mastering",
    title: "Mixing & Mastering",
    shortTitle: "Mixing & Mastering",
    description:
      "Professional mixing and mastering services to make your tracks release-ready. We work with all genres and deliver polished, platform-optimized audio.",
    icon: "adjustments-horizontal",
    features: [
      "Full mix from stems",
      "Stereo mastering",
      "Platform optimization",
      "Quick turnaround",
      "Revision rounds included",
      "All genres supported",
    ],
    href: "/services/mixing-mastering",
  },
];
