import { Link } from "react-router-dom";

const SectionHeader = ({ title, href }: { title: string; href?: string }) => (
  <div className="mb-6">
    <div className="editorial-rule-heavy mb-3" />
    <div className="flex items-center justify-between">
      <h2 className="font-serif text-2xl font-bold">{title}</h2>
      {href && (
        <Link
          to={href}
          className="font-mono text-xs uppercase tracking-wider text-primary hover:underline"
        >
          Ver tudo →
        </Link>
      )}
    </div>
  </div>
);

export default SectionHeader;
