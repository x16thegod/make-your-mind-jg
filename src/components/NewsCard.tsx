import { Link } from "react-router-dom";
import type { Article } from "@/data/mockArticles";

interface NewsCardProps {
  article: Article;
  variant?: "default" | "compact" | "horizontal" | "large" | "numbered";
  number?: number;
}

const NewsCard = ({ article, variant = "default", number }: NewsCardProps) => {
  if (variant === "numbered") {
    return (
      <Link to={`/artigo/${article.id}`} className="group block">
        <article className="flex gap-4 py-5">
          <span className="shortlist-number">{String(number || 0).padStart(2, "0")}</span>
          <div className="flex flex-col gap-1.5 min-w-0 pt-0.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
              {article.category}
            </span>
            <h3 className="font-serif text-[17px] leading-[1.3] font-semibold headline-hover line-clamp-3">
              {article.title}
            </h3>
            <div className="flex items-center gap-2 meta-text mt-0.5">
              <span>{article.author}</span>
              <span className="text-foreground/15">|</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link to={`/artigo/${article.id}`} className="group block">
        <article className="flex flex-col gap-2 py-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
            {article.category}
          </span>
          <h3 className="font-serif text-lg leading-[1.25] font-semibold headline-hover">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 meta-text">
            <span>{article.author}</span>
            <span className="text-foreground/15">|</span>
            <span>{article.readTime}</span>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link to={`/artigo/${article.id}`} className="group block">
        <article className="flex gap-5">
          <div className="w-28 h-28 shrink-0 overflow-hidden bg-foreground/5">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover image-hover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-1.5 min-w-0 justify-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
              {article.category}
            </span>
            <h3 className="font-serif text-base leading-[1.3] font-semibold headline-hover line-clamp-2">
              {article.title}
            </h3>
            <span className="meta-text">{article.readTime}</span>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "large") {
    return (
      <Link to={`/artigo/${article.id}`} className="group block">
        <article className="flex flex-col gap-4">
          <div className="relative overflow-hidden bg-foreground/5">
            <img
              src={article.image}
              alt={article.title}
              className="aspect-[4/3] w-full object-cover image-hover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
              {article.category}
            </span>
            <h3 className="font-serif text-2xl md:text-[1.7rem] leading-[1.15] font-bold headline-hover">
              {article.title}
            </h3>
            <p className="font-sans text-[15px] text-muted-foreground line-clamp-3 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex items-center gap-2 meta-text pt-1">
              <span className="text-foreground font-semibold">{article.author}</span>
              <span className="text-foreground/15">|</span>
              <span>{article.date}</span>
              <span className="text-foreground/15">|</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  // default
  return (
    <Link to={`/artigo/${article.id}`} className="group block">
      <article className="flex flex-col gap-3">
        <div className="relative overflow-hidden bg-foreground/5">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-video w-full object-cover image-hover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-primary">
            {article.category}
          </span>
          <h3 className="font-serif text-xl leading-[1.2] font-semibold headline-hover">
            {article.title}
          </h3>
          <p className="font-sans text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 meta-text pt-0.5">
            <span>{article.author}</span>
            <span className="text-foreground/15">|</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
