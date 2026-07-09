import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.webp";

const LINKS = [
  { to: "/about", label: "Services" },
  { to: "/about-us", label: "About" },
  { to: "/contact", label: "Contact" },
];

const navLink = ({ isActive }) =>
  `text-sm font-medium transition-colors ${
    isActive ? "text-accent" : "text-paper/80 hover:text-paper"
  }`;

const mobileLink = ({ isActive }) =>
  `block px-5 py-3 text-sm font-medium ${
    isActive ? "bg-surface-2 text-accent" : "text-paper/80"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-5 md:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-[3.75rem] shrink-0 place-items-center overflow-hidden rounded-[50%] bg-white shadow-sm ring-1 ring-white/80 sm:h-12 sm:w-[4.25rem]">
            <img
              src={logo}
              alt="Vishal Logistics logo"
              className="h-full w-full object-cover"
              width={171}
              height={128}
            />
          </span>
          <span className="text-sm font-semibold leading-tight text-paper sm:text-base">
            Vishal Logistics
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} className={navLink}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-primary">
            Get a Quote
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 text-paper md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-surface md:hidden" aria-label="Main menu">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={mobileLink}
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block bg-accent px-5 py-3 text-sm font-semibold text-white"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}
