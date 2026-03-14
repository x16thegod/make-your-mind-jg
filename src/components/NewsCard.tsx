import { Link } from "react-router-dom";
import type { Article } from "@/data/mockArticles";

interface NewsCardProps {
  article: Article;
  variant?: "default" | "compact" | "horizontal";
}

const NewsCard = ({ article, variant = "default" }: NewsCardProps) => {
  if (variant === "compact") {
    return (
      <Link to={`/artigo/${article.id}`} className="group block">
        <article className="flex flex-col gap-2 py-4">
          <span className="category-tag text-accent-foreground bg-accent w-fit">
            {article.category}
          </span>
          <h3 className="font-serif text-lg leading-tight headline-hover">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 meta-text">
            <span>Por {article.author}</span>
            <span>●</span>
            <span>{article.readTime}</span>
          </div>
        </article>
      </Link>
    );
  }

  if (variant === "horizontal") {
    return (
      <Link to={`/artigo/${article.id}`} className="group block">
        <article className="flex gap-4">
          <div className="w-32 h-24 shrink-0 overflow-hidden bg-muted">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover image-hover"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-1.5 min-w-0">
            <span className="category-tag text-primary w-fit">{article.category}</span>
            <h3 className="font-serif text-base leading-snug headline-hover line-clamp-2">
              {article.title}
            </h3>
            <span className="meta-text">{article.readTime}</span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/artigo/${article.id}`} className="group block">
      <article className="flex flex-col gap-3">
        <div className="relative overflow-hidden bg-muted">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-video w-full object-cover image-hover"
            loading="lazy"
          />
          <span className="absolute top-0 left-0 category-tag bg-accent text-accent-foreground">
            {article.category}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-serif text-xl leading-tight headline-hover">
            {article.title}
          </h3>
          <p className="font-sans text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-2 meta-text">
            <span>Por {article.author}</span>
            <span>●</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
