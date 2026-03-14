import { Link } from "react-router-dom";

interface SectionHeaderProps {
  title: string;
  href?: string;
  accent?: boolean;
}

const SectionHeader = ({ title, href, accent = false }: SectionHeaderProps) => (
  <div className="mb-8">
    {accent ? (
      <div className="editorial-rule-accent mb-4" />
    ) : (
      <div className="editorial-rule-heavy mb-4" />
    )}
    <div className="flex items-end justify-between gap-4">
      <h2 className="font-serif text-2xl md:text-3xl font-bold leading-none">{title}</h2>
      {href && (
        <Link
          to={href}
          className="font-mono text-[11px] uppercase tracking-[0.1em] text-primary hover:text-foreground transition-colors shrink-0 pb-0.5"
        >
          Ver tudo →
        </Link>
      )}
    </div>
  </div>
);

export default SectionHeader;
