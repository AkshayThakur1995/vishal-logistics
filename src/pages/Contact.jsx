import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import Corners from "../components/Corners.jsx";
import { EMAIL, OFFICES, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../site";

const CHANNELS = [
  {
    icon: Phone,
    label: "Call",
    value: PHONE_DISPLAY,
    hint: "Mon–Sat, business hours IST",
    href: PHONE_TEL,
    mono: true,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with a forwarder",
    hint: "Fastest way to get a rate",
    href: WHATSAPP_URL,
    external: true,
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
      {/* Page header */}
      <section className="bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:px-8 md:pb-20 md:pt-24">
          <p className="eyebrow text-accent">Raise an enquiry</p>
          <h1 className="display mt-5 max-w-3xl text-[clamp(2.5rem,6.5vw,4.5rem)]">
            Talk to a forwarder, not a form
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper/75 md:text-lg">
            Call or message us with your commodity, weight, and lane — a person who books
            cargo every day will come back with a rate and a routing.
          </p>
        </div>
      </section>

      {/* Channels */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <div className="grid gap-px border border-ink/10 bg-ink/10 md:grid-cols-3">
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group relative block bg-paper p-6 transition-colors hover:bg-white md:p-8"
              >
                <Corners />
                <c.icon className="h-7 w-7 text-ink" strokeWidth={1.5} aria-hidden="true" />
                <p className="eyebrow mt-6 text-steel">{c.label}</p>
                <p
                  className={`mt-2 break-all text-lg font-semibold text-ink group-hover:underline group-hover:decoration-accent group-hover:decoration-2 group-hover:underline-offset-4 ${
                    c.mono ? "font-mono" : ""
                  }`}
                >
                  {c.value}
                </p>
                <p className="mt-2 text-sm text-steel">{c.hint}</p>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Checklist + offices */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="group relative border border-ink/15 p-7 md:p-9">
              <Corners />
              <p className="eyebrow text-steel">Enquiry checklist</p>
              <h2 className="display mt-3 text-2xl">Put this in your first message</h2>
              <ul className="mt-6 space-y-3.5">
                {CHECKLIST.map((item, i) => (
                  <li key={item} className="flex gap-4 text-sm leading-relaxed text-steel">
                    <span className="font-mono text-xs font-semibold tracking-[0.18em] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-ink/10 pt-5 text-sm leading-relaxed text-steel">
                Don't have it all? Send what you have — we'll ask for the rest.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow text-steel">Our offices</p>
            <h2 className="display mt-3 text-2xl">Where to find us</h2>
            <ul className="mt-6 space-y-6">
              {OFFICES.map((o) => (
                <li key={o.label} className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <p className="eyebrow text-[0.62rem] text-steel/80">{o.label}</p>
                    <address className="mt-1 text-sm not-italic leading-relaxed text-ink">
                      {o.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-relaxed text-steel">
              Cargo queries move fastest on{" "}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4"
              >
                WhatsApp
              </a>
              , but the kettle's on at both offices.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
