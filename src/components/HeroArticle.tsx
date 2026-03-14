import { Link } from "react-router-dom";
import { getFeaturedArticle } from "@/data/mockArticles";

const HeroArticle = () => {
  const article = getFeaturedArticle();

  return (
    <Link to={`/artigo/${article.id}`} className="group block">
      <article>
        {/* Image with overlay gradient */}
        <div className="relative overflow-hidden bg-foreground/5">
          <img
            src={article.image}
            alt={article.title}
            className="w-full aspect-[16/10] md:aspect-[2/1] object-cover image-hover"
          />
          {/* Subtle dark gradient at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

          {/* Category floating on image */}
          <div className="absolute bottom-4 left-4">
            <span className="category-tag bg-accent text-accent-foreground">
              {article.category}
            </span>
          </div>
        </div>

        {/* Text below */}
        <div className="mt-5">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold leading-[1.08] tracking-[-0.03em] headline-hover animate-fade-up">
            {article.title}
          </h1>
          <p className="mt-4 font-sans text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-up-delay-1">
            {article.excerpt}
          </p>
          <div className="mt-4 flex items-center gap-3 meta-text animate-fade-up-delay-2">
            <span className="text-foreground font-semibold">Por {article.author}</span>
            <span className="text-foreground/20">|</span>
            <span>{article.date}</span>
            <span className="text-foreground/20">|</span>
            <span>{article.readTime} de leitura</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default HeroArticle;
