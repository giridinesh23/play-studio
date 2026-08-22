import type { EquipmentItem } from "@/types";

export const equipmentCategories = [
  "All",
  "Mixers",
  "Stage Boxes",
  "Speakers",
  "Subwoofers",
  "Amplifiers",
  "Wireless Microphones",
  "Wired Microphones",
  // TODO: Lighting equipment inventory to be added later
] as const;

export const equipment: EquipmentItem[] = [
  // Mixers
  {
    name: "Yamaha QL5",
    brand: "Yamaha",
    quantity: 1,
    category: "Mixers",
    description: "64-channel digital mixing console",
    image: "/images/equipment/yamaha-ql5.png",
  },
  {
    name: "Yamaha QL1",
    brand: "Yamaha",
    quantity: 1,
    category: "Mixers",
    description: "32-channel digital mixing console",
    image: "/images/equipment/yamaha-ql1.png",
  },
  {
    name: "Yamaha DM3",
    brand: "Yamaha",
    quantity: 1,
    category: "Mixers",
    description: "Compact digital mixer",
    image: "/images/equipment/yamaha-dm3.png",
  },
  // Stage Boxes
  {
    name: "Yamaha Tio1608-D",
    brand: "Yamaha",
    quantity: 2,
    category: "Stage Boxes",
    description: "16-input/8-output Dante stage box",
    image: "/images/equipment/yamaha-tio1608d.png",
  },
  // Speakers (Line Array / Point Source)
  {
    name: "KME QH 5045 V2",
    brand: "KME",
    quantity: 2,
    category: "Speakers",
    description: "High-performance point source",
    image: "/images/equipment/kme-qh5045.png",
  },
  {
    name: "KME QF 5045 V2",
    brand: "KME",
    quantity: 4,
    category: "Speakers",
    description: "Full-range point source",
    image: "/images/equipment/kme-qf5045.png",
  },
  {
    name: "KME VLS 64",
    brand: "KME",
    quantity: 6,
    category: "Speakers",
    description: "Compact column speaker",
    image: "/images/equipment/kme-vls64.png",
  },
  {
    name: "KME ICS 5",
    brand: "KME",
    quantity: 4,
    category: "Speakers",
    description: "Installation column speaker",
    image: "/images/equipment/kme-ics5.png",
  },
  {
    name: "Zsound LA110",
    brand: "Zsound",
    quantity: 4,
    category: "Speakers",
    description: "Line array module",
    image: "/images/equipment/zsound-la110.png",
  },
  // Subwoofers
  {
    name: "KME QLB 215",
    brand: "KME",
    quantity: 6,
    category: "Subwoofers",
    description: "Dual 15\" subwoofer",
    image: "/images/equipment/kme-qlb215.png",
  },
  {
    name: "KME VB 15",
    brand: "KME",
    quantity: 2,
    category: "Subwoofers",
    description: "Single 15\" subwoofer",
    image: "/images/equipment/kme-vb15.png",
  },
  {
    name: "Zsound S118HII",
    brand: "Zsound",
    quantity: 2,
    category: "Subwoofers",
    description: "Single 18\" subwoofer",
    image: "/images/equipment/zsound-s118h.png",
  },
  // Amplifiers
  {
    name: "KME DA 230",
    brand: "KME",
    quantity: 10,
    category: "Amplifiers",
    description: "2-channel power amplifier",
    image: "/images/equipment/kme-da230.png",
  },
  {
    name: "KME DA 428",
    brand: "KME",
    quantity: 2,
    category: "Amplifiers",
    description: "4-channel power amplifier",
    image: "/images/equipment/kme-da428.png",
  },
  // Wireless Microphones
  {
    name: "Shure SLX-D+",
    brand: "Shure",
    quantity: 8,
    category: "Wireless Microphones",
    description: "Digital wireless system",
    image: "/images/equipment/shure-slxd.png",
  },
  // Wired Microphones
  {
    name: "Shure SM58",
    brand: "Shure",
    quantity: 6,
    category: "Wired Microphones",
    description: "Dynamic vocal microphone",
    image: "/images/equipment/shure-sm58.png",
  },
  {
    name: "Shure SM57",
    brand: "Shure",
    quantity: 2,
    category: "Wired Microphones",
    description: "Dynamic instrument microphone",
    image: "/images/equipment/shure-sm57.png",
  },
  {
    name: "Shure Beta 87A",
    brand: "Shure",
    quantity: 1,
    category: "Wired Microphones",
    description: "Condenser vocal microphone",
    image: "/images/equipment/shure-beta87a.png",
  },
  {
    name: "Shure Beta 57A",
    brand: "Shure",
    quantity: 2,
    category: "Wired Microphones",
    description: "Dynamic instrument microphone",
    image: "/images/equipment/shure-beta57a.png",
  },
  {
    name: "Shure Beta 58A",
    brand: "Shure",
    quantity: 2,
    category: "Wired Microphones",
    description: "Dynamic vocal microphone",
    image: "/images/equipment/shure-beta58a.png",
  },
  // TODO: Build the data structure to support easy addition of new equipment categories (e.g., Lighting)
];
