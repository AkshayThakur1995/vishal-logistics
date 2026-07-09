import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { SERVICES } from "../site";
import { SERVICE_IMAGES } from "../service-images.js";

const ICONS = Object.fromEntries(SERVICES.map((s) => [s.id, s.icon]));

const SECTIONS = [
  {
    id: "freight",
    label: "IMPORT & EXPORT · MULTIMODAL FREIGHT",
    title: "Freight Forwarding",
    body: "We coordinate your entire shipment — from origin booking and documentation to customs and final delivery. One point of contact, one accountable team, whether your cargo moves by sea, air, or land.",
    points: [
      "Import & export coordination",
      "Multimodal routing & carrier booking",
      "Documentation & compliance management",
      "Shipment tracking & status updates",
      "Insurance & risk management",
      "Door-to-door logistics solutions",
    ],
  },
  {
    id: "ocean",
    label: "FCL & LCL OCEAN FREIGHT WORLDWIDE",
    title: "Sea Freight",
    body: "Full Container Load and Less than Container Load bookings across all major trade lanes. We handle oversized project cargo, breakbulk, and dangerous goods with the routing that fits your timeline and budget.",
    points: [
      "FCL and LCL shipments",
      "Connections to 150+ global ports",
      "Breakbulk & project cargo",
      "Dangerous goods (DG) handling",
      "Buyer's consolidation",
      "Transport insurance",
    ],
  },
  {
    id: "air",
    label: "EXPORT & IMPORT AIR FREIGHT WORLDWIDE",
    title: "Air Freight",
    body: "For time-critical consignments we move export and import cargo by air — airport-to-airport or right to the door. Carrier booking, documentation, and clearance handled as one job.",
    points: [
      "Export & import consignments",
      "Airport-to-airport or door-to-door",
      "Carrier booking & space allocation",
      "Documentation & clearance included",
      "Express & standard air freight",
      "Temperature-controlled cargo",
    ],
  },
  {
    id: "land",
    label: "ROAD & RAIL · PAN-INDIA HAULAGE",
    title: "Land & Rail Transport",
    body: "Road and rail haulage across India connecting ports, ICDs, and inland destinations. We manage last-mile delivery with reliable transit times in key metros.",
    points: [
      "Port-to-ICD road haulage",
      "Pan-India trucking network",
      "Rail freight coordination",
      "Last-mile delivery",
      "Container drayage",
      "Project cargo transport",
    ],
  },
  {
    id: "customs",
    label: "CUSTOMS CLEARANCE · PORTS & ICDS",
    title: "Customs Clearance",
    body: "Export and import clearance at Indian ports, airports, and inland container depots. We classify for minimum duty, keep paperwork compliant, and stand at examination so your cargo doesn't stand still.",
    points: [
      "Documentation for customs clearance",
      "Carting and receiving of goods",
      "Examination of shipments",
      "Import clearance at port of entry",
      "Bonded warehousing",
      "Classification for minimum duty",
    ],
  },
  {
    id: "warehousing",
    label: "BONDED STORAGE & COMPLIANT DOCUMENTATION",
    title: "Warehousing & Documentation",
    body: "Bonded storage, cargo handling, and compliant documentation so your goods are staged and ready to move. We manage inventory, packing lists, and regulatory paperwork end to end.",
    points: [
      "Bonded & non-bonded warehousing",
      "Cargo handling & staging",
      "Invoice & packing-list compliance",
      "Inventory management",
      "Re-packing & labelling",
      "Export documentation preparation",
    ],
  },
];

function Bullet({ children }) {
  return (
    <li className="flex gap-2 text-sm leading-relaxed text-steel">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
      {children}
    </li>
  );
}

function ServiceCard({ section: s, flip }) {
  const Icon = ICONS[s.id];

  return (
    <article
      id={s.id}
      className="scroll-mt-24 overflow-hidden rounded-xl border border-white/10 bg-surface-2 transition-colors duration-300 hover:border-accent"
    >
      <div className={`grid lg:grid-cols-2 ${flip ? "[&>div:first-child]:lg:order-2" : ""}`}>
        <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
          <p className="section-label flex items-center gap-3">
            <span className="h-px w-8 shrink-0 bg-accent" aria-hidden="true" />
            {s.label}
          </p>
          <h2 className="display mt-4 text-2xl text-white md:text-3xl">{s.title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-steel md:text-base">{s.body}</p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {s.points.map((p) => (
              <Bullet key={p}>{p}</Bullet>
            ))}
          </ul>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-orange-400"
          >
            Get a quote for {s.title}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative min-h-56 lg:min-h-full">
          <img
            src={SERVICE_IMAGES[s.id]}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {Icon && (
            <div
              className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-lg bg-accent text-white shadow-lg"
              aria-hidden="true"
            >
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <>
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="section-label">What We Offer</p>
          <h1 className="display mt-3 max-w-3xl text-3xl text-white md:text-5xl">
            Comprehensive Logistics Services
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel">
            With over 20 years of expertise in freight forwarding, customs clearance, and
            warehousing, Vishal Logistics delivers reliable end-to-end solutions for businesses
            of every size.
          </p>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-5 md:space-y-10 md:px-8">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.id}>
              <ServiceCard section={s} flip={i % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="cta-glow bg-surface py-16 md:py-20">
        <Reveal className="mx-auto max-w-2xl px-5 text-center md:px-8">
          <h2 className="display text-2xl text-white md:text-3xl">
            Need a Custom Logistics Solution?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-steel">
            Every shipment is different. Tell us your requirements and we'll build a solution
            that fits.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Get a Free Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
