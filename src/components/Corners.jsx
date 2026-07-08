// Container corner-casting marks. Parent needs `relative group`.
const TONES = {
  ink: "border-ink/25 group-hover:border-accent",
  paper: "border-paper/30 group-hover:border-accent",
};

export default function Corners({ tone = "ink" }) {
  const base = `pointer-events-none absolute h-3 w-3 transition-colors duration-300 ${TONES[tone]}`;
  return (
    <span aria-hidden="true">
      <span className={`${base} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${base} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${base} bottom-0 right-0 border-b-2 border-r-2`} />
    </span>
  );
}
