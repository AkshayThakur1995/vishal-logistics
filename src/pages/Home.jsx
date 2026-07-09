import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import Reveal from "../components/Reveal.jsx";
import { HERO_IMAGE, SERVICE_IMAGES } from "../service-images.js";
import {
  HERO_STRIP,
  PHONE_LANDLINE_TEL,
  SERVICES,
  STATS_HOME,
  VALUE_PROPS,
} from "../site";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[85vh] overflow-hidden">
        <img src={HERO_IMAGE} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-surface/75" />
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
          className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-5 py-24 md:px-8"
        >
          <motion.p variants={fadeUp} className="section-label">
            Global · Reliable · Fast
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="display mt-4 max-w-3xl text-4xl text-white md:text-6xl lg:text-7xl"
          >
            Your Global Logistics Partner
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-paper/80 md:text-lg"
          >
            End-to-end freight forwarding from Delhi NCR to the world — ocean, air, customs
            clearance, and door-to-door delivery handled by one team.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn-outline">
              View Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative border-t border-white/10 bg-surface/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-4 md:px-8">
            {HERO_STRIP.map((item) => (
              <span key={item} className="text-xs font-medium uppercase tracking-wider text-paper/70">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-white/10 bg-surface-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
          {STATS_HOME.map((s) => (
            <div key={s.label} className="text-center">
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="section-label">What We Do</p>
            <h2 className="display mt-3 max-w-xl text-3xl text-white md:text-4xl">
              End-to-End Logistics Services
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <Link
                  to={`/about#${s.id}`}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-lg border border-white/10 transition-colors duration-300 hover:border-accent"
                >
                  <img
                    src={SERVICE_IMAGES[s.id]}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="service-card-overlay absolute inset-0" />
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <h3 className="mt-3 text-lg font-semibold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/70">{s.blurb}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <h2 className="display max-w-2xl text-3xl text-white md:text-4xl">
              Built for Global Trade. Trusted by E-Commerce.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {VALUE_PROPS.map((v, i) => (
              <Reveal key={v.num} delay={i * 0.08}>
                <div className="rounded-lg border border-white/10 bg-surface/50 p-6 md:p-8">
                  <span className="text-4xl font-bold text-accent/40">{v.num}</span>
                  <h3 className="mt-3 text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-glow bg-surface py-16 md:py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center md:px-8">
          <p className="section-label">Get Started</p>
          <h2 className="display mt-3 text-3xl text-white md:text-4xl">
            Ready to Streamline Your Supply Chain?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-steel">
            Tell us what you're moving and where it's headed. We'll reply with a tailored quote
            and routing plan.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Free Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={PHONE_LANDLINE_TEL} className="btn-outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Us Now
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
