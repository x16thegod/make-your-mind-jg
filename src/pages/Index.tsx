import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingTicker from "@/components/BreakingTicker";
import HeroArticle from "@/components/HeroArticle";
import NewsCard from "@/components/NewsCard";
import SectionHeader from "@/components/SectionHeader";
import Newsletter from "@/components/Newsletter";
import { articles } from "@/data/mockArticles";

const Index = () => {
  const latestArticles = articles.slice(1, 6);
  const shortlist = articles.slice(1, 6);
  const sportsArticles = articles.filter((a) => a.category === "Esportes");
  const cultureArticles = articles.filter((a) => a.category === "Cultura");
  const opinionArticles = articles.filter((a) => a.category === "Opiniões");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingTicker />

      <main>
        {/* Hero + Shortlist */}
        <section className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Hero */}
            <div className="lg:col-span-8">
              <HeroArticle />
            </div>

            {/* Shortlist */}
            <aside className="lg:col-span-4">
              <div className="editorial-rule-heavy mb-3" />
              <h2 className="font-serif text-lg font-bold mb-2">Destaques</h2>
              <div className="divide-y divide-foreground/10">
                {shortlist.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    variant="compact"
                  />
                ))}
              </div>
            </aside>
          </div>
        </section>

        <div className="editorial-rule" />

        {/* Latest News Grid */}
        <section className="container py-10">
          <SectionHeader title="Últimas Notícias" href="/categoria/Not%C3%ADcias" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.slice(0, 3).map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>

        {/* Sports + Culture sections */}
        <section className="bg-muted">
          <div className="container py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <SectionHeader title="Esportes" href="/categoria/Esportes" />
                {sportsArticles.length > 0 ? (
                  <div className="space-y-4">
                    {sportsArticles.slice(0, 3).map((a) => (
                      <NewsCard key={a.id} article={a} variant="horizontal" />
                    ))}
                  </div>
                ) : (
                  <p className="font-sans text-sm text-muted-foreground italic">
                    A gráfica está silenciosa. Nenhum artigo encontrado.
                  </p>
                )}
              </div>
              <div>
                <SectionHeader title="Cultura" href="/categoria/Cultura" />
                {cultureArticles.length > 0 ? (
                  <div className="space-y-4">
                    {cultureArticles.slice(0, 3).map((a) => (
                      <NewsCard key={a.id} article={a} variant="horizontal" />
                    ))}
                  </div>
                ) : (
                  <p className="font-sans text-sm text-muted-foreground italic">
                    A gráfica está silenciosa. Nenhum artigo encontrado.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Opinions */}
        {opinionArticles.length > 0 && (
          <section className="container py-10">
            <SectionHeader title="Opiniões" href="/categoria/Opini%C3%B5es" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {opinionArticles.slice(0, 2).map((a) => (
                <NewsCard key={a.id} article={a} />
              ))}
            </div>
          </section>
        )}

        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
