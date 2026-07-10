import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { ABOUT_HERO_IMAGE } from "../service-images.js";
import {
  CORE_VALUES,
  FOUNDING_YEAR,
  STATS_ABOUT,
  STORY_SERVICES,
} from "../site";

export default function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 md:py-28">
        <img
          src={ABOUT_HERO_IMAGE}
          alt=""
          className="absolute inset-0 h-full w-full object-cover brightness-110 contrast-105 saturate-125"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <p className="section-label">About Us</p>
          <h1 className="display mt-3 max-w-3xl text-3xl text-white drop-shadow-md md:text-5xl">
            Moving the World&apos;s Cargo Since {FOUNDING_YEAR}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90">
            Vishal Logistics is a New Delhi-based freight forwarding company with decades of
            experience moving cargo across oceans, skies, and borders — with customs clearance
            and door-to-door delivery handled end to end.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-surface-2">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-5 py-10 md:grid-cols-4 md:px-8">
          {STATS_ABOUT.map((s) => (
            <div key={s.label} className="text-center">
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8 md:gap-16">
          <Reveal>
            <p className="section-label">Our Story</p>
            <h2 className="display mt-3 text-2xl text-white md:text-3xl">Our Story</h2>
            <p className="mt-4 text-sm leading-relaxed text-steel md:text-base">
              Founded in {FOUNDING_YEAR} in New Delhi, Vishal Logistics started as a customs
              clearance specialist and grew into a full-service freight forwarder. Today we
              move cargo for exporters, importers, and e-commerce businesses across every major
              trade lane — with the same hands-on approach we started with.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {STORY_SERVICES.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-paper/80">
                  <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="section-label">Our Mission</p>
            <div className="mt-3 rounded-lg border border-white/10 border-t-accent bg-surface-2 p-6 md:p-8">
              <h2 className="display text-2xl text-white">Our Mission</h2>
              <p className="mt-4 text-sm leading-relaxed text-steel md:text-base">
                To make global trade accessible for every business — delivering reliable,
                compliant, and transparent logistics solutions that connect Indian exporters
                and importers to markets worldwide, without the complexity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <p className="section-label">What We Stand For</p>
            <h2 className="display mt-3 text-2xl text-white md:text-3xl">Our Core Values</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {CORE_VALUES.map((v, i) => (
              <Reveal key={v.num} delay={i * 0.08}>
                <div className="rounded-lg border border-white/15 bg-surface/60 p-6">
                  <span className="text-3xl font-bold text-accent/50">{v.num}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-glow bg-surface py-16 md:py-24">
        <Reveal className="mx-auto max-w-2xl px-5 text-center md:px-8">
          <p className="section-label">Work With Us</p>
          <h2 className="display mt-3 text-2xl text-white md:text-3xl">Partner With Us</h2>
          <p className="mt-4 text-sm leading-relaxed text-steel">
            Whether you're shipping your first container or your thousandth, we're ready to help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link to="/about" className="btn-outline">
              View Our Services
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
