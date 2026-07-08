import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowUpRight, Phone } from "lucide-react";
import Ticker from "../components/Ticker.jsx";
import Reveal from "../components/Reveal.jsx";
import Corners from "../components/Corners.jsx";
import { PHONE_DISPLAY, PHONE_TEL, SERVICES, WHATSAPP_URL, EMAIL } from "../site";
import yard from "../assets/custom.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const STEPS = [
  {
    title: "Enquiry & quote",
    body: "Send your commodity, weight, and lane on WhatsApp or by phone. We come back with a rate and the routing that fits.",
  },
  {
    title: "Docs & pickup",
    body: "Invoice, packing list, and shipping documents prepared and verified. Cargo collected at your gate.",
  },
  {
    title: "Customs clearance",
    body: "Filing, examination, and classification for minimum duty at the port, airport, or inland container depot.",
  },
  {
    title: "Transit & delivery",
    body: "Sailed or flown on the booked lane, followed through to delivery at the consignee's door.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <img
          src={yard}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/45" />
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative mx-auto max-w-6xl px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-32"
        >
          <motion.p variants={fadeUp} className="eyebrow text-accent">
            Vishal Logistics · New Delhi&ensp;//&ensp;Ocean · Air · Customs · Door-to-Door
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="display mt-6 text-[clamp(2.75rem,9vw,6.75rem)]"
          >
            Cleared.
            <br />
            Shipped.
            <br />
            <span className="text-accent">Delivered.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg"
          >
            We are a New Delhi freight forwarder moving ocean and air cargo of virtually any
            size — with customs clearance and door-to-door delivery handled end to end, from
            Indian ports and ICDs to anywhere in the world.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-[#ffc82e]"
            >
              Get a quote on WhatsApp
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 border border-paper/40 px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:border-accent hover:text-accent"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </motion.div>
          <motion.p variants={fadeUp} className="eyebrow mt-10 text-paper/50">
            FCL · LCL · Breakbulk · Project Cargo · Dangerous Goods
          </motion.p>
        </motion.div>
        <Ticker />
      </section>

      {/* Services manifest */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            <p className="eyebrow text-steel">Service manifest</p>
          </div>
          <h2 className="display mt-4 max-w-xl text-4xl md:text-5xl">What we move</h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 md:mt-14">
          <div className="grid gap-px border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.id} className="group relative bg-paper p-6 pb-7 transition-colors hover:bg-white">
                <Corners />
                <div className="flex items-start justify-between">
                  <s.icon className="h-7 w-7 text-ink" strokeWidth={1.5} aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold tracking-[0.18em] text-steel/70">
                    {s.code}
                  </span>
                </div>
                <h3 className="display mt-6 text-xl">
                  <Link to={`/about#${s.id}`} className="after:absolute after:inset-0">
                    {s.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{s.blurb}</p>
                <p className="eyebrow mt-5 pr-8 text-[0.62rem] text-steel/70">{s.tags}</p>
                <ArrowUpRight
                  className="absolute bottom-5 right-5 h-4 w-4 text-steel/50 transition-colors group-hover:text-accent"
                  aria-hidden="true"
                />
              </article>
            ))}
          </div>
          <p className="eyebrow mt-6 text-steel/80">
            Also on manifest: Buyer's consolidation · Transport insurance · Bonded warehousing
          </p>
        </Reveal>
      </section>

      {/* Process */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 bg-accent" aria-hidden="true" />
              <p className="eyebrow text-paper/60">How a shipment moves</p>
            </div>
            <h2 className="display mt-4 max-w-2xl text-4xl md:text-5xl">
              From enquiry to delivery
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="border-t-2 border-paper/20 pt-5">
                  <p className="font-mono text-sm font-semibold tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display mt-4 text-lg">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-paper/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 bg-accent" aria-hidden="true" />
            <p className="eyebrow text-steel">Get a quote</p>
          </div>
          <h2 className="display mt-4 max-w-2xl text-4xl md:text-6xl">
            Ready when your cargo is.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-steel">
            Tell us what you're moving and where it's headed. We'll reply with a rate,
            a routing, and what we need from you to get it gone.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-[#ffc82e]"
            >
              Get a quote on WhatsApp
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 border border-ink/30 px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
          <p className="eyebrow mt-8 text-steel/80">
            Or write to us — <a href={`mailto:${EMAIL}`} className="underline decoration-accent decoration-2 underline-offset-4 hover:text-ink">{EMAIL}</a>
          </p>
        </Reveal>
      </section>
    </>
  );
}
