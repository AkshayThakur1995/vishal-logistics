import { Ship, Plane, Stamp, Truck } from "lucide-react";

export const PHONE_DISPLAY = "+91 87008 10423";
export const PHONE_TEL = "tel:+918700810423";
export const WHATSAPP_URL = "https://wa.me/918700810423";
export const EMAIL = "kesar1965thakur@gmail.com";

export const OFFICES = [
  {
    label: "Regd. Office",
    lines: ["2nd Floor, House No. 54, Gali No. 7", "Harit Vihar, Delhi 110084"],
  },
  {
    label: "Branch Office",
    lines: ["B-73/73, 2nd Floor, Rohit House", "Vishwakarma Colony, MB Road, New Delhi 110044"],
  },
];

export const SERVICES = [
  {
    id: "ocean",
    code: "SVC·01",
    icon: Ship,
    title: "Ocean Freight",
    blurb:
      "FCL and LCL bookings on all major trade lanes, plus breakbulk, oversized project cargo, and dangerous goods.",
    tags: "FCL · LCL · BREAKBULK · DG",
  },
  {
    id: "air",
    code: "SVC·02",
    icon: Plane,
    title: "Air Freight",
    blurb:
      "Time-critical export and import consignments by air, airport-to-airport or right to the door.",
    tags: "EXPORT · IMPORT · TIME-CRITICAL",
  },
  {
    id: "customs",
    code: "SVC·03",
    icon: Stamp,
    title: "Customs Clearance",
    blurb:
      "Documentation, examination, and duty classification at Indian ports, airports, and inland container depots.",
    tags: "PORT · AIRPORT · ICD",
  },
  {
    id: "door",
    code: "SVC·04",
    icon: Truck,
    title: "Door-to-Door",
    blurb:
      "Port-to-door and door-to-door from shipper to consignee, for cargo of virtually any size or weight.",
    tags: "ANY SIZE · PAN-INDIA",
  },
];
