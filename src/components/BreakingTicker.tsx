import { articles } from "@/data/mockArticles";

const BreakingTicker = () => {
  const breaking = articles.filter((a) => a.breaking);
  if (breaking.length === 0) return null;

  const text = breaking.map((a) => a.title).join("     ◆     ");
  const doubled = `${text}     ◆     ${text}`;

  return (
    <div className="bg-pernambuco-blue overflow-hidden">
      <div className="flex items-center h-10">
        <span className="bg-pernambuco-red px-5 h-full flex items-center font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground shrink-0 z-10 relative">
          <span className="w-1.5 h-1.5 bg-primary-foreground animate-pulse-dot mr-2" />
          Urgente
        </span>
        <div className="overflow-hidden whitespace-nowrap flex-1">
          <div className="ticker-scroll inline-block pl-6">
            <span className="font-sans text-[13px] font-medium text-primary-foreground/90 tracking-wide">
              {doubled}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingTicker;
