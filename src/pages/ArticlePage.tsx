import { useParams, Link } from "react-router-dom";
import { Share2, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import SectionHeader from "@/components/SectionHeader";
import { getArticleById, articles } from "@/data/mockArticles";

const ArticlePage = () => {
  const { id } = useParams();
  const article = getArticleById(id || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="font-serif text-4xl mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground font-sans">
            A gráfica está silenciosa. Este artigo não existe.
          </p>
          <Link to="/" className="mt-6 inline-block font-mono text-sm text-primary uppercase tracking-wider hover:underline">
            ← Voltar ao início
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  const paragraphs = article.body.split("\n\n");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Voltar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article */}
          <article className="lg:col-span-8">
            <span className="category-tag bg-accent text-accent-foreground">
              {article.category}
            </span>

            <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
              {article.title}
            </h1>

            <p className="mt-4 font-sans text-lg text-muted-foreground leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-4 flex items-center gap-3 meta-text">
              <span>Reportado por {article.author}</span>
              <span>●</span>
              <span>{article.date}</span>
              <span>●</span>
              <span>{article.readTime} de leitura</span>
            </div>

            <div className="editorial-rule my-6" />

            <div className="overflow-hidden bg-muted mb-8">
              <img
                src={article.image}
                alt={article.title}
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="max-w-[65ch]">
              {paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`font-sans text-lg leading-[1.75] text-foreground/90 mb-6 ${
                    i === 0 ? "drop-cap" : ""
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="editorial-rule my-8" />

            {/* Share */}
            <div className="flex items-center gap-4">
              <span className="meta-text">Compartilhar</span>
              <button className="p-2 hover:bg-muted transition-colors" aria-label="Compartilhar">
                <Share2 size={18} />
              </button>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div>
                <div className="editorial-rule-heavy mb-3" />
                <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                  Sobre o autor
                </h3>
                <p className="font-serif text-lg font-semibold">{article.author}</p>
                <p className="font-sans text-sm text-muted-foreground mt-1">
                  Estudante-repórter do Jornal Glicério
                </p>
              </div>

              {related.length > 0 && (
                <div>
                  <div className="editorial-rule-heavy mb-3" />
                  <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    Relacionados em {article.category}
                  </h3>
                  <div className="space-y-4">
                    {related.map((a) => (
                      <NewsCard key={a.id} article={a} variant="horizontal" />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
