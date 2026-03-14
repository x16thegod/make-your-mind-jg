import { Link } from "react-router-dom";
import { getFeaturedArticle } from "@/data/mockArticles";

const HeroArticle = () => {
  const article = getFeaturedArticle();

  return (
    <Link to={`/artigo/${article.id}`} className="group block">
      <article className="animate-fade-in">
        <div className="overflow-hidden bg-muted">
          <img
            src={article.image}
            alt={article.title}
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover image-hover"
          />
        </div>
        <div className="mt-4 max-w-3xl">
          <span className="category-tag bg-accent text-accent-foreground">
            {article.category}
          </span>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight headline-hover">
            {article.title}
          </h1>
          <p className="mt-3 font-sans text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {article.excerpt}
          </p>
          <div className="mt-3 flex items-center gap-3 meta-text">
            <span>Reportado por {article.author}</span>
            <span>●</span>
            <span>{article.date}</span>
            <span>●</span>
            <span>{article.readTime} de leitura</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default HeroArticle;
