import type { CompanyInfo, Stat, Milestone, Value, NavLink } from "@/types";

export const company: CompanyInfo = {
  name: "Play Studio",
  tagline: "Where Every Event Meets Perfection",
  address: "Changzamtog, Thimphu, Bhutan",
  hours: "Monday – Sunday: 9:00 AM – 6:00 PM",
  appointmentOnly: true,
  yearsInBusiness: 10,
  email: "playstudiobhutan@gmail.com",
  phone: "+975 77106969",
  whatsapp: "+975 77106969",
  social: {
    facebook: "https://www.facebook.com/playstudiobhutan/",
    instagram: "https://www.instagram.com/playstudio_bhutan/",
    youtube: "",
    tiktok: "https://www.tiktok.com/@play_studio_bhutan",
  },
  coordinates: { lat: 27.4661, lng: 89.6419 },
};

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 2000, suffix: "+", label: "Events Powered" },
  { value: 50, suffix: "+", label: "Rooms Treated" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

export const milestones: Milestone[] = [
  {
    title: "Thai King Visit Audio Support",
    description:
      "Provided professional audio support during the King of Thailand's visit to Bhutan.",
  },
  {
    title: "2025 National Day — Bumthang",
    description:
      "Lead audio technician designed and delivered the sound system for the 2025 National Day celebration in Bumthang — ensuring His Majesty the Druk Gyalpo's speech was heard with perfect clarity by every citizen.",
  },
  {
    title: "10 Years in Audio Production",
    description: "A decade of delivering exceptional sound experiences across Bhutan.",
  },
  {
    title: "From 3 Speakers to Full Inventory",
    description:
      "What started with just 3 high-end speakers has grown into a comprehensive professional audio inventory.",
  },
];

export const values: Value[] = [
  { title: "Quality", description: "Uncompromising standards in every setup.", icon: "star" },
  { title: "Reliability", description: "Consistently delivering on every promise.", icon: "shield" },
  { title: "Creativity", description: "Innovative solutions for unique challenges.", icon: "sparkles" },
  { title: "Community", description: "Rooted in Bhutan, serving our people.", icon: "heart" },
  { title: "Passion", description: "Driven by a genuine love for sound.", icon: "fire" },
  { title: "Integrity", description: "Honest, transparent, and trustworthy.", icon: "check-badge" },
];

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Sound & Lighting", href: "/services/sound-and-lighting" },
      { label: "Acoustic Treatment", href: "/services/acoustic-treatment" },
      { label: "Recording", href: "/services/recording" },
      { label: "Mixing & Mastering", href: "/services/mixing-mastering" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Equipment", href: "/equipment" },
  { label: "Contact", href: "/contact" },
];

export const missionVision = {
  mission:
    "To deliver exceptional sound experiences and professional audio solutions to every corner of Bhutan.",
  vision:
    "To be Bhutan's leading audio production and sound solutions provider.",
};

export const foundingStory = `It started with a simple love for music.

What began as a passion project quickly opened our eyes to a bigger problem — events across Bhutan were falling short, not because of a lack of enthusiasm, but because of a lack of professional support. Sound systems were poorly set up, stage lighting was an afterthought, and event organizers were left frustrated with results that didn't match their vision.

We knew it could be done better.

Play Studio was born out of that conviction. We started small — just three high-end speakers, a commitment to quality, and a hands-on approach that put our clients' experience first. From intimate acoustic gigs to small corporate conferences, we showed up, set up, and delivered.

Word spread.

Today, Play Studio is Thimphu's trusted name in professional audio-visual production — powering festivals, theater productions, and large-scale events for private companies, organizations, and government institutions alike. The speakers may have multiplied, but the mission hasn't changed: every event deserves to sound and look its best.`;
