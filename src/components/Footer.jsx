import { Link } from "react-router-dom";
import { EMAIL, OFFICES, PHONE_DISPLAY, PHONE_TEL, SERVICES, WHATSAPP_URL } from "../site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[2fr_1fr_1fr_1fr]">
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

        <div>
          <p className="eyebrow mb-4 text-accent">Offices</p>
          <ul className="space-y-5 text-sm">
            {OFFICES.map((o) => (
              <li key={o.label}>
                <p className="eyebrow mb-1 text-[0.6rem] text-paper/50">{o.label}</p>
                <address className="not-italic leading-relaxed text-paper/80">
                  {o.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4 text-accent">Contact</p>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={PHONE_TEL} className="font-mono text-paper/80 transition-colors hover:text-accent">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="break-all text-paper/80 transition-colors hover:text-accent"
              >
                {EMAIL}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/80 transition-colors hover:text-accent"
              >
                Chat on WhatsApp
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
