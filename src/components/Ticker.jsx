// Departures-board strip of real UN/LOCODE port codes on lanes we quote.
const PORTS = [
  ["INDEL", "New Delhi ICD"],
  ["INNSA", "Nhava Sheva"],
  ["INMUN", "Mundra"],
  ["INMAA", "Chennai"],
  ["AEJEA", "Jebel Ali"],
  ["SGSIN", "Singapore"],
  ["CNSHA", "Shanghai"],
  ["NLRTM", "Rotterdam"],
  ["DEHAM", "Hamburg"],
  ["USNYC", "New York"],
];

function Row({ hidden }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {PORTS.map(([code, port]) => (
        <li key={code} className="flex items-center gap-3 pr-4 md:gap-4 md:pr-6">
          <span className="font-mono text-xs font-semibold tracking-[0.18em] text-accent md:text-sm">
            {code}
          </span>
          <span className="eyebrow whitespace-nowrap text-paper/60">{port}</span>
          <span className="h-1.5 w-1.5 bg-accent/50" />
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="ticker overflow-hidden border-t border-paper/15 bg-ink py-3">
      <div className="ticker-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
