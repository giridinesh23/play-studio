export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  placeholder?: boolean;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  features: string[];
  href: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "event" | "acoustic" | "recording";
  date: string;
  description: string;
  image: string;
  placeholder?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface EquipmentItem {
  name: string;
  brand: string;
  quantity: number;
  category: string;
  description: string;
  image?: string;
}

export interface EquipmentLine {
  name: string;
  quantity: number;
}

export interface PackageTier {
  name: string;
  subtitle: string;
  equipment: EquipmentLine[];
}

export interface PackageCategory {
  slug: string;
  name: string;
  description: string;
  tiers: PackageTier[];
}

export interface TermsSection {
  id: string;
  title: string;
  content: string;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  address: string;
  hours: string;
  appointmentOnly: boolean;
  yearsInBusiness: number;
  email: string;
  phone: string;
  whatsapp: string;
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
  };
  coordinates: { lat: number; lng: number };
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Milestone {
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}

export interface PricingItem {
  service: string;
  price: string;
  duration?: string;
  turnaround?: string;
}
