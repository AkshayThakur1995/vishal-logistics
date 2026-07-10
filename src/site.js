import { Globe, Plane, Ship, Stamp, TrainFront, Warehouse } from "lucide-react";

export const FOUNDING_YEAR = 1995;

export const PHONE_LANDLINE = "+91 11 71859030";
export const PHONE_LANDLINE_TEL = "tel:+911171859030";
export const PHONE_MOBILE = "8700810423";
export const PHONE_MOBILE_TEL = "tel:+918700810423";
export const PHONE_DISPLAY = `${PHONE_LANDLINE} · ${PHONE_MOBILE}`;
export const PHONE_TEL = PHONE_MOBILE_TEL;
export const EMAIL = "info@vishallogistics.com";

export const OFFICES = [
  "B 54,C-Block GALI NO. 7, HARIT VIHAR, NEW DELHI-110084,",
  "FLAT NO. 205, B-72, ROHIT HOUSE, VISHAWAKARMA COLONEY, M.B. ROAD NEW DELHI-110044.",
];

export const STATS_HOME = [
  { value: "100+", label: "Countries Served" },
  { value: "250+", label: "Global Partners" },
  { value: "10,000+", label: "Shipments" },
  { value: "24/7", label: "Support" },
];

export const STATS_ABOUT = [
  { value: "500+", label: "Global Destinations" },
  { value: "10,000+", label: "Shipments Delivered" },
  { value: "15+", label: "Years of Experience" },
  { value: "200+", label: "Clients Served" },
];

export const HERO_STRIP = [
  "Sea Freight",
  "Air Freight",
  "Land & Rail",
  "Customs Clearance",
  "Warehousing",
];

export const SERVICES = [
  {
    id: "freight",
    icon: Globe,
    title: "Freight Forwarding",
    blurb:
      "End-to-end coordination for import and export cargo — booking, documentation, and delivery managed as one shipment.",
    tags: "IMPORT · EXPORT · MULTIMODAL",
  },
  {
    id: "ocean",
    icon: Ship,
    title: "Sea Freight",
    blurb:
      "FCL and LCL bookings on all major trade lanes, plus breakbulk, oversized project cargo, and dangerous goods.",
    tags: "FCL · LCL · BREAKBULK · DG",
  },
  {
    id: "air",
    icon: Plane,
    title: "Air Freight",
    blurb:
      "Time-critical export and import consignments by air, airport-to-airport or right to the door.",
    tags: "EXPORT · IMPORT · TIME-CRITICAL",
  },
  {
    id: "land",
    icon: TrainFront,
    title: "Land & Rail Transport",
    blurb:
      "Road and rail haulage across India with port-to-ICD connectivity and last-mile delivery to your consignee.",
    tags: "ROAD · RAIL · PAN-INDIA",
  },
  {
    id: "customs",
    icon: Stamp,
    title: "Customs Clearance",
    blurb:
      "Documentation, examination, and duty classification at Indian ports, airports, and inland container depots.",
    tags: "PORT · AIRPORT · ICD",
  },
  {
    id: "warehousing",
    icon: Warehouse,
    title: "Warehousing & Documentation",
    blurb:
      "Bonded storage, cargo handling, and compliant documentation so your goods are ready to move when you are.",
    tags: "BONDED · STORAGE · COMPLIANCE",
  },
];

export const VALUE_PROPS = [
  {
    num: "01",
    title: "Single-Window Solution",
    body: "One team handles booking, customs, and delivery — no hand-offs between agents.",
  },
  {
    num: "02",
    title: "Compliance-First Approach",
    body: "Documentation and classification done right the first time to avoid delays and penalties.",
  },
  {
    num: "03",
    title: "Real-Time Visibility",
    body: "Stay informed at every milestone from pickup through customs to final delivery.",
  },
  {
    num: "04",
    title: "E-Commerce Specialists",
    body: "Tailored solutions for online sellers moving inventory across borders at speed.",
  },
];

export const CORE_VALUES = [
  {
    num: "01",
    title: "Reliability",
    body: "We deliver on our commitments — on time, every time, with cargo handled with care.",
  },
  {
    num: "02",
    title: "Compliance",
    body: "Every shipment meets regulatory standards across borders and jurisdictions.",
  },
  {
    num: "03",
    title: "Transparency",
    body: "Clear pricing, honest timelines, and open communication at every stage.",
  },
  {
    num: "04",
    title: "Expertise",
    body: "Decades of freight forwarding experience across ocean, air, land, and customs.",
  },
];

export const STORY_SERVICES = [
  "Freight Forwarding",
  "Sea Freight",
  "Air Freight",
  "Land & Rail Transport",
  "Customs Clearance",
  "Warehousing & Documentation",
];
