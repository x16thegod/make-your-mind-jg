import { articles } from "@/data/mockArticles";

const BreakingTicker = () => {
  const breaking = articles.filter((a) => a.breaking);
  if (breaking.length === 0) return null;

  const text = breaking.map((a) => a.title).join("  ●  ");

  return (
    <div className="bg-foreground text-background overflow-hidden">
      <div className="flex items-center">
        <span className="bg-accent-red px-3 py-2 font-mono text-[11px] font-bold uppercase tracking-wider text-accent-red-foreground shrink-0 z-10">
          Urgente
        </span>
        <div className="overflow-hidden whitespace-nowrap py-2 pl-4">
          <div className="ticker-scroll inline-block">
            <span className="font-sans text-sm font-medium">
              {text}  ●  {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingTicker;
