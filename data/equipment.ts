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
  },
  {
    name: "Yamaha QL1",
    brand: "Yamaha",
    quantity: 1,
    category: "Mixers",
    description: "32-channel digital mixing console",
  },
  {
    name: "Yamaha DM3",
    brand: "Yamaha",
    quantity: 1,
    category: "Mixers",
    description: "Compact digital mixer",
  },
  // Stage Boxes
  {
    name: "Yamaha Tio1608-D",
    brand: "Yamaha",
    quantity: 2,
    category: "Stage Boxes",
    description: "16-input/8-output Dante stage box",
  },
  // Speakers (Line Array / Point Source)
  {
    name: "KME QH 5045 V2",
    brand: "KME",
    quantity: 2,
    category: "Speakers",
    description: "High-performance point source",
  },
  {
    name: "KME QF 5045 V2",
    brand: "KME",
    quantity: 4,
    category: "Speakers",
    description: "Full-range point source",
  },
  {
    name: "KME VLS 64",
    brand: "KME",
    quantity: 6,
    category: "Speakers",
    description: "Compact column speaker",
  },
  {
    name: "KME ICS 5",
    brand: "KME",
    quantity: 4,
    category: "Speakers",
    description: "Installation column speaker",
  },
  {
    name: "Zsound LA110",
    brand: "Zsound",
    quantity: 4,
    category: "Speakers",
    description: "Line array module",
  },
  // Subwoofers
  {
    name: "KME QLB 215",
    brand: "KME",
    quantity: 6,
    category: "Subwoofers",
    description: "Dual 15\" subwoofer",
  },
  {
    name: "KME VB 15",
    brand: "KME",
    quantity: 2,
    category: "Subwoofers",
    description: "Single 15\" subwoofer",
  },
  {
    name: "Zsound S118HII",
    brand: "Zsound",
    quantity: 2,
    category: "Subwoofers",
    description: "Single 18\" subwoofer",
  },
  // Amplifiers
  {
    name: "KME DA 230",
    brand: "KME",
    quantity: 10,
    category: "Amplifiers",
    description: "2-channel power amplifier",
  },
  {
    name: "KME DA 428",
    brand: "KME",
    quantity: 2,
    category: "Amplifiers",
    description: "4-channel power amplifier",
  },
  // Wireless Microphones
  {
    name: "Shure SLX-D+",
    brand: "Shure",
    quantity: 8,
    category: "Wireless Microphones",
    description: "Digital wireless system",
  },
  // Wired Microphones
  {
    name: "Shure SM58",
    brand: "Shure",
    quantity: 6,
    category: "Wired Microphones",
    description: "Dynamic vocal microphone",
  },
  {
    name: "Shure SM57",
    brand: "Shure",
    quantity: 2,
    category: "Wired Microphones",
    description: "Dynamic instrument microphone",
  },
  {
    name: "Shure Beta 87A",
    brand: "Shure",
    quantity: 1,
    category: "Wired Microphones",
    description: "Condenser vocal microphone",
  },
  {
    name: "Shure Beta 57A",
    brand: "Shure",
    quantity: 2,
    category: "Wired Microphones",
    description: "Dynamic instrument microphone",
  },
  {
    name: "Shure Beta 58A",
    brand: "Shure",
    quantity: 2,
    category: "Wired Microphones",
    description: "Dynamic vocal microphone",
  },
  // TODO: Build the data structure to support easy addition of new equipment categories (e.g., Lighting)
];
