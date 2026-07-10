import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import {
  EMAIL,
  OFFICES,
  PHONE_LANDLINE,
  PHONE_LANDLINE_TEL,
  PHONE_MOBILE,
  PHONE_MOBILE_TEL,
} from "../site";

const CHANNELS = [
  {
    icon: Phone,
    label: "Landline",
    value: PHONE_LANDLINE,
    hint: "Mon–Sat, business hours IST",
    href: PHONE_LANDLINE_TEL,
  },
  {
    icon: Phone,
    label: "Mobile",
    value: PHONE_MOBILE,
    hint: "Direct line for urgent enquiries",
    href: PHONE_MOBILE_TEL,
  },
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    hint: "Docs, RFQs, and everything else",
    href: `mailto:${EMAIL}`,
  },
];

const CHECKLIST = [
  "Commodity — and HS code, if you know it",
  "Gross weight & dimensions, or container type",
  "Origin and destination",
  "Incoterm — EXW, FOB, CIF…",
  "Target pickup or ship date",
];

export default function Contact() {
  return (
    <>
      <section className="bg-surface-2 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <p className="section-label">Contact</p>
          <h1 className="display mt-3 max-w-3xl text-3xl text-white md:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel">
            Call or email us with your commodity, weight, and lane — a person who books cargo
            every day will come back with a rate and a routing.
          </p>
        </div>
      </section>

      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="grid gap-4 md:grid-cols-3">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group rounded-lg border border-white/15 bg-surface-2 p-6 transition-colors hover:border-accent/50 md:p-8"
                >
                  <c.icon className="h-7 w-7 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <p className="eyebrow mt-6 text-steel">{c.label}</p>
                  <p className="mt-2 break-all text-lg font-semibold text-white group-hover:text-accent">
                    {c.value}
                  </p>
                  <p className="mt-2 text-sm text-steel">{c.hint}</p>
                </a>
              ))}
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="rounded-lg border border-white/10 p-7 md:p-9">
                <p className="section-label">Enquiry Checklist</p>
                <h2 className="display mt-3 text-xl text-white">Put this in your first message</h2>
                <ul className="mt-6 space-y-3.5">
                  {CHECKLIST.map((item, i) => (
                    <li key={item} className="flex gap-4 text-sm leading-relaxed text-steel">
                      <span className="font-mono text-xs font-semibold tracking-wider text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-white/10 pt-5 text-sm text-steel">
                  Don&apos;t have it all? Send what you have — we&apos;ll ask for the rest.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="section-label">Our Offices</p>
              <h2 className="display mt-3 text-xl text-white">Where to Find Us</h2>
              <ul className="mt-6 space-y-4">
                {OFFICES.map((address) => (
                  <li key={address} className="flex gap-4">
                    <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                    <address className="text-sm not-italic leading-relaxed text-paper/80">
                      {address}
                    </address>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm leading-relaxed text-steel">
                Reach us by phone or email — we respond to every enquiry personally.
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
