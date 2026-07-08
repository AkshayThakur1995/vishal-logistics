import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
import { PHONE_DISPLAY, PHONE_TEL } from "../site";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const desktopLink = ({ isActive }) =>
  `eyebrow border-b-2 pb-1 transition-colors ${
    isActive ? "border-accent text-ink" : "border-transparent text-steel hover:text-ink"
  }`;

const mobileLink = ({ isActive }) =>
  `eyebrow block border-l-4 px-5 py-4 text-sm ${
    isActive ? "border-accent bg-ink/5 text-ink" : "border-transparent text-steel"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Vishal Logistics logo" className="h-9 w-auto" />
          <span className="leading-none">
            <span className="display block text-[0.95rem] text-ink">Vishal Logistics</span>
            <span className="eyebrow mt-1 hidden text-[0.6rem] text-steel sm:block">
              Freight Forwarders · New Delhi
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className={desktopLink}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={PHONE_TEL}
            className="eyebrow bg-ink px-4 py-2.5 text-paper transition-colors hover:bg-ink-2"
          >
            {PHONE_DISPLAY}
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-ink md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink/10 bg-paper md:hidden" aria-label="Main menu">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={mobileLink}
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={PHONE_TEL}
            className="eyebrow block border-l-4 border-accent bg-accent/15 px-5 py-4 text-sm text-ink"
          >
            Call {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  );
}
