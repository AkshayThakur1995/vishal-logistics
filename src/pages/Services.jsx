import { Link } from "react-router-dom";
import { ArrowUpRight, Stamp } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Corners from "../components/Corners.jsx";
import oceanImg from "../assets/ocean.jpg";
import airImg from "../assets/banner.jpg";
import doorImg from "../assets/door.jpg";

const CUSTOMS_POINTS = [
  "Documentation for customs clearance",
  "Carting and receiving of goods",
  "Examination of shipments",
  "Contract registration for project clearance",
  "Import clearance at the port of entry",
  "Port handling & bonded warehousing",
  "Invoice & packing-list compliance checks",
  "Classification for minimum duty",
];

const SECTIONS = [
  {
    id: "ocean",
    code: "SVC·01 // Ocean Freight",
    title: "Sea freight on every major lane",
    image: oceanImg,
    caption: "FIG.01 — Container vessel, outbound",
    body: "Full Container Load and Less than Container Load bookings across all major trade lanes, with oversized and project cargo, breakbulk, and dangerous goods handled by people who move them routinely. We weigh transit time against cost and book the routing that fits your shipment, not the other way round.",
    points: [
      "FCL & LCL bookings",
      "Oversized & project cargo",
      "Breakbulk shipments",
      "Dangerous goods (DG)",
      "Buyer's consolidation",
      "Transport insurance",
    ],
  },
  {
    id: "air",
    code: "SVC·02 // Air Freight",
    title: "When the schedule is the cargo",
    image: airImg,
    caption: "FIG.02 — Multimodal uplift, export",
    body: "For time-critical consignments we move export and import cargo by air — airport-to-airport or right to the door. Carrier booking, documentation, and clearance are handled as one job, so an urgent shipment doesn't wait on paperwork.",
    points: [
      "Export & import consignments",
      "Airport-to-airport or door-to-door",
      "Carrier booking & space",
      "Documentation & clearance included",
    ],
  },
  {
    id: "door",
    code: "SVC·04 // Door-to-Door",
    title: "From shipper's gate to consignee's door",
    image: doorImg,
    caption: "FIG.03 — Final-mile handover",
    body: "Port-to-door and door-to-door service from shipper to consignee, for shipments of virtually any size or weight. Customs is facilitated along the way, with fast, reliable transit times — including earliest deliveries and latest pickups in key major metros.",
    points: [
      "Port-to-door & door-to-door",
      "Virtually any size or weight",
      "Customs facilitated en route",
      "Earliest deliveries, latest pickups in key metros",
    ],
  },
];

function Bullet({ children }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-steel">
      <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
      {children}
    </li>
  );
}

function Figure({ src, caption }) {
  return (
    <figure>
      <div className="group relative">
        <Corners />
        <img src={src} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover" />
        <div className="absolute inset-0 bg-ink/15 mix-blend-multiply" aria-hidden="true" />
      </div>
      <figcaption className="eyebrow mt-3 text-steel/70">{caption}</figcaption>
    </figure>
  );
}

export default function Services() {
  return (
    <>
      {/* Page header */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
          <p className="eyebrow text-accent">Service manifest — full detail</p>
          <h1 className="display mt-5 max-w-3xl text-[clamp(2.5rem,6.5vw,4.5rem)]">
            What we move &amp; how we move it
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 md:text-lg">
            Four services, one thread: your cargo booked, documented, cleared, and delivered
            by the same team — sea or air, export or import.
          </p>
        </div>
      </section>

      {/* Ocean + Air */}
      {SECTIONS.slice(0, 2).map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:px-8 md:py-20"
        >
          <Reveal>
            <div className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16`}>
              <div className={i % 2 ? "lg:order-2" : ""}>
                <p className="eyebrow text-steel">{s.code}</p>
                <h2 className="display mt-4 text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-steel md:text-base">{s.body}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <Bullet key={p}>{p}</Bullet>
                  ))}
                </ul>
              </div>
              <div className={i % 2 ? "lg:order-1" : ""}>
                <Figure src={s.image} caption={s.caption} />
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      {/* Customs — styled like the form it is */}
      <section id="customs" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <div className="group relative bg-ink p-7 text-paper md:p-12">
            <Corners tone="paper" />
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              <div>
                <p className="eyebrow text-accent">SVC·03 // Customs Clearance</p>
                <h2 className="display mt-4 text-3xl md:text-4xl">
                  The paperwork is the cargo too
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-paper/75 md:text-base">
                  Export and import clearance at Indian ports, airports, and inland container
                  depots — from first document to released shipment. We classify for minimum
                  duty, keep your paperwork compliant, and stand at examination so your cargo
                  doesn't stand still.
                </p>
                <Stamp className="mt-8 h-10 w-10 text-accent" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <ul className="grid content-center gap-3.5 sm:grid-cols-2">
                {CUSTOMS_POINTS.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-paper/85">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Door-to-door */}
      {SECTIONS.slice(2).map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="mx-auto max-w-6xl scroll-mt-24 px-5 py-14 md:px-8 md:py-20"
        >
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="lg:order-2">
                <p className="eyebrow text-steel">{s.code}</p>
                <h2 className="display mt-4 text-3xl md:text-4xl">{s.title}</h2>
                <p className="mt-5 text-sm leading-relaxed text-steel md:text-base">{s.body}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <Bullet key={p}>{p}</Bullet>
                  ))}
                </ul>
              </div>
              <div className="lg:order-1">
                <Figure src={s.image} caption={s.caption} />
              </div>
            </div>
          </Reveal>
        </section>
      ))}

      {/* Hand-off to contact */}
      <section className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-center md:justify-between md:px-8 md:py-16">
          <div>
            <h2 className="display text-2xl md:text-3xl">Have a shipment in mind?</h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-steel">
              Send the lane and the load — we'll answer with a rate and routing.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-2"
          >
            Raise an enquiry
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
