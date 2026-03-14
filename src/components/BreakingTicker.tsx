import { articles } from "@/data/mockArticles";

const BreakingTicker = () => {
  const breaking = articles.filter((a) => a.breaking);
  if (breaking.length === 0) return null;

  const text = breaking.map((a) => a.title).join("     ◆     ");
  const doubled = `${text}     ◆     ${text}`;

  return (
    <div className="bg-foreground overflow-hidden">
      <div className="flex items-center h-9">
        <span className="bg-accent-red px-4 h-full flex items-center font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-accent-red-foreground shrink-0 z-10 relative">
          Urgente
          <span className="absolute right-0 top-0 h-full w-2 bg-gradient-to-r from-accent-red to-foreground" />
        </span>
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="ticker-scroll inline-block pl-6">
            <span className="font-sans text-[13px] font-medium text-background/90 tracking-wide">
              {doubled}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingTicker;
