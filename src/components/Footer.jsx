import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  EMAIL,
  OFFICES,
  PHONE_LANDLINE,
  PHONE_LANDLINE_TEL,
  PHONE_MOBILE,
  PHONE_MOBILE_TEL,
  SERVICES,
} from "../site";

const COMPANY_LINKS = [
  { to: "/about-us", label: "About Us" },
  { to: "/about", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/contact", label: "Get a Quote" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-paper border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[2fr_1fr_1fr_1.2fr]">
        <div>
          <p className="display text-2xl">Vishal Logistics</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/70">
            New Delhi freight forwarders moving ocean and air cargo worldwide, with customs
            clearance and door-to-door delivery handled end to end.
          </p>
          <p className="eyebrow mt-6 text-paper/50">
            FCL · LCL · Breakbulk · Project Cargo · DG
          </p>
        </div>

        <nav aria-label="Services">
          <p className="eyebrow mb-4 text-accent">Services</p>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={`/about#${s.id}`} className="text-paper/80 transition-colors hover:text-accent">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <p className="eyebrow mb-4 text-accent">Company</p>
          <ul className="space-y-3 text-sm">
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-paper/80 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow mb-4 text-accent">Contact</p>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <address className="space-y-3 not-italic leading-relaxed text-paper/80">
                {OFFICES.map((address) => (
                  <p key={address}>{address}</p>
                ))}
              </address>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <div className="space-y-1">
                <a href={PHONE_LANDLINE_TEL} className="block font-mono text-paper/80 transition-colors hover:text-accent">
                  {PHONE_LANDLINE}
                </a>
                <a href={PHONE_MOBILE_TEL} className="block font-mono text-paper/80 transition-colors hover:text-accent">
                  {PHONE_MOBILE}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.5} aria-hidden="true" />
              <a
                href={`mailto:${EMAIL}`}
                className="break-all text-paper/80 transition-colors hover:text-accent"
              >
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <p className="eyebrow text-[0.62rem] text-paper/45">
            © {new Date().getFullYear()} Vishal Logistics — New Delhi, India
          </p>
          <p className="eyebrow text-[0.62rem] text-paper/45">Ocean · Air · Customs · Door-to-Door</p>
        </div>
      </div>
    </footer>
  );
}
