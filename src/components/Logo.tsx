const Logo = ({ size = "default", inverted = false }: { size?: "default" | "large" | "small"; inverted?: boolean }) => {
  const sizeMap = {
    small: { title: "text-xl", label: "text-[8px]", dot: "w-1.5 h-1.5" },
    default: { title: "text-3xl", label: "text-[10px]", dot: "w-2 h-2" },
    large: { title: "text-5xl md:text-6xl", label: "text-[11px] md:text-xs", dot: "w-2.5 h-2.5" },
  };

  const s = sizeMap[size];
  const textColor = inverted ? "text-background" : "";
  const labelColor = inverted ? "text-background/50" : "text-muted-foreground";

  return (
    <div className="flex flex-col items-start leading-none select-none">
      <span className={`font-mono font-semibold uppercase tracking-[0.25em] ${labelColor} ${s.label}`}>
        Jornal
      </span>
      <div className="flex items-end gap-1">
        <span className={`font-serif font-black tracking-[-0.04em] ${textColor} ${s.title}`}>
          Glicério
        </span>
        <span className={`${s.dot} rounded-full bg-accent-red mb-1.5 shrink-0`} />
      </div>
    </div>
  );
};

export default Logo;
