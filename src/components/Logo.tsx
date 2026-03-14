const Logo = ({ size = "default" }: { size?: "default" | "large" | "small" }) => {
  const sizeClasses = {
    small: "text-lg",
    default: "text-2xl",
    large: "text-4xl",
  };

  return (
    <div className="flex flex-col items-start leading-none select-none">
      <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        Jornal
      </span>
      <span className={`font-serif font-black tracking-tight ${sizeClasses[size]}`}>
        Glicério
        <span className="inline-block w-2 h-2 rounded-full bg-accent-red ml-0.5 -translate-y-1" />
      </span>
    </div>
  );
};

export default Logo;
