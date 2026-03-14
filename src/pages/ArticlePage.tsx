import { useParams, Link } from "react-router-dom";
import { Share2, ArrowLeft, Twitter, Facebook } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import { getArticleById, articles } from "@/data/mockArticles";

const ArticlePage = () => {
  const { id } = useParams();
  const article = getArticleById(id || "");

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-24 text-center max-w-xl mx-auto">
          <span className="meta-text">Erro 404</span>
          <h1 className="font-serif text-4xl md:text-5xl mt-4 mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground font-sans text-lg leading-relaxed">
            A gráfica está silenciosa. Este artigo não existe ou foi removido.
          </p>
          <Link to="/" className="mt-8 inline-block font-mono text-[11px] text-primary uppercase tracking-[0.12em] hover:text-foreground transition-colors">
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

      <main>
        {/* Top meta bar */}
        <div className="container pt-6 pb-0">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Voltar
          </Link>
        </div>

        <div className="container py-6 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
            {/* Article content */}
            <article className="lg:col-span-8">
              {/* Category */}
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
                {article.category}
              </span>

              {/* Headline */}
              <h1 className="mt-4 font-serif text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl font-bold leading-[1.08] tracking-[-0.03em] animate-fade-up">
                {article.title}
              </h1>

              {/* Dek/excerpt */}
              <p className="mt-5 font-sans text-xl text-muted-foreground leading-relaxed animate-fade-up-delay-1">
                {article.excerpt}
              </p>

              {/* Byline */}
              <div className="mt-5 flex items-center gap-3 meta-text animate-fade-up-delay-2">
                <span className="text-foreground font-semibold">Por {article.author}</span>
                <span className="text-foreground/15">|</span>
                <span>{article.date}</span>
                <span className="text-foreground/15">|</span>
                <span>{article.readTime} de leitura</span>
              </div>

              {/* Divider */}
              <div className="editorial-rule my-6" />

              {/* Hero image */}
              <div className="overflow-hidden bg-foreground/5 mb-10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full aspect-[16/10] object-cover"
                />
                <p className="mt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/60 px-0.5">
                  Foto: Acervo Jornal Glicério
                </p>
              </div>

              {/* Body text */}
              <div className="max-w-[65ch]">
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className={`font-sans text-[17px] leading-[1.8] text-foreground/85 mb-7 ${
                      i === 0 ? "drop-cap" : ""
                    }`}
                  >
                    {p}
                  </p>
                ))}
              </div>

              {/* End mark */}
              <div className="flex items-center gap-3 mt-10 mb-6">
                <div className="w-2 h-2 bg-primary" />
                <div className="editorial-rule flex-1" />
              </div>

              {/* Share bar */}
              <div className="flex items-center gap-4">
                <span className="meta-text">Compartilhar</span>
                <div className="flex items-center gap-1">
                  <button className="p-2.5 hover:bg-muted transition-colors" aria-label="Compartilhar">
                    <Share2 size={16} strokeWidth={1.5} />
                  </button>
                  <button className="p-2.5 hover:bg-muted transition-colors" aria-label="Twitter">
                    <Twitter size={16} strokeWidth={1.5} />
                  </button>
                  <button className="p-2.5 hover:bg-muted transition-colors" aria-label="Facebook">
                    <Facebook size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-36 space-y-10">
                {/* Author */}
                <div>
                  <div className="editorial-rule-accent mb-4" />
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Sobre o autor
                  </span>
                  <p className="font-serif text-xl font-bold mt-2">{article.author}</p>
                  <p className="font-sans text-sm text-muted-foreground mt-1 leading-relaxed">
                    Estudante-repórter do Jornal Glicério, cobrindo {article.category.toLowerCase()} e assuntos da comunidade escolar em Recife.
                  </p>
                </div>

                {/* Related */}
                {related.length > 0 && (
                  <div>
                    <div className="editorial-rule-heavy mb-4" />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Mais em {article.category}
                    </span>
                    <div className="mt-4 space-y-5">
                      {related.map((a) => (
                        <NewsCard key={a.id} article={a} variant="horizontal" />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
