import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreakingTicker from "@/components/BreakingTicker";
import HeroArticle from "@/components/HeroArticle";
import NewsCard from "@/components/NewsCard";
import SectionHeader from "@/components/SectionHeader";
import Newsletter from "@/components/Newsletter";
import { articles } from "@/data/mockArticles";
import heroRecife from "@/assets/hero-recife.jpg";

const Index = () => {
  const shortlist = articles.slice(1, 6);
  const sportsArticles = articles.filter((a) => a.category === "Esportes");
  const cultureArticles = articles.filter((a) => a.category === "Cultura");
  const opinionArticles = articles.filter((a) => a.category === "Opiniões");
  const projectArticles = articles.filter((a) => a.category === "Projetos");
  const interviewArticles = articles.filter((a) => a.category === "Entrevistas");
  const latestMix = articles.slice(1, 7);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <BreakingTicker />

      <main>
        {/* ===== HERO + SHORTLIST ===== */}
        <section className="container py-8 md:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-10">
            {/* Hero — 8 cols */}
            <div className="lg:col-span-8">
              <HeroArticle />
            </div>

            {/* Shortlist — 4 cols, vertical divider on desktop */}
            <aside className="lg:col-span-4 mt-8 lg:mt-0 lg:border-l lg:border-foreground/8 lg:pl-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="editorial-rule-accent" />
                <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
                  Mais lidas
                </h2>
              </div>
              <div className="divide-y divide-foreground/8">
                {shortlist.map((article, i) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                    variant="numbered"
                    number={i + 1}
                  />
                ))}
              </div>
            </aside>
          </div>
        </section>

        {/* ===== FULL-WIDTH DIVIDER ===== */}
        <div className="editorial-rule" />

        {/* ===== LATEST NEWS — Asymmetric Grid ===== */}
        <section className="container py-10 md:py-14">
          <SectionHeader title="Últimas Notícias" href="/categoria/Not%C3%ADcias" />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* Large feature card */}
            {latestMix[0] && (
              <div className="md:col-span-7">
                <NewsCard article={latestMix[0]} variant="large" />
              </div>
            )}
            {/* Stack of smaller cards */}
            <div className="md:col-span-5 flex flex-col gap-6">
              {latestMix.slice(1, 4).map((a) => (
                <NewsCard key={a.id} article={a} variant="horizontal" />
              ))}
            </div>
          </div>
        </section>

        {/* ===== BANNER IMAGE SECTION ===== */}
        <section className="relative h-48 md:h-64 overflow-hidden">
          <img
            src={heroRecife}
            alt="Recife, Pernambuco"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative container h-full flex items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/50">
                Desde Recife, Pernambuco
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-background mt-1 leading-tight">
                Jornalismo feito por<br />quem vive a escola
              </h2>
            </div>
          </div>
        </section>

        {/* ===== TWO-COLUMN: SPORTS + CULTURE ===== */}
        <section className="bg-muted/50">
          <div className="container py-10 md:py-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0">
              {/* Sports */}
              <div className="md:pr-10 md:border-r md:border-foreground/8 pb-8 md:pb-0">
                <SectionHeader title="Esportes" href="/categoria/Esportes" accent />
                {sportsArticles.length > 0 ? (
                  <div className="space-y-6">
                    {sportsArticles.slice(0, 1).map((a) => (
                      <NewsCard key={a.id} article={a} />
                    ))}
                    {sportsArticles.slice(1, 3).map((a) => (
                      <NewsCard key={a.id} article={a} variant="horizontal" />
                    ))}
                  </div>
                ) : (
                  <p className="font-serif text-lg italic text-muted-foreground">
                    A gráfica está silenciosa. Nenhum artigo encontrado.
                  </p>
                )}
              </div>

              {/* Culture */}
              <div className="md:pl-10 pt-8 md:pt-0">
                <SectionHeader title="Cultura" href="/categoria/Cultura" accent />
                {cultureArticles.length > 0 ? (
                  <div className="space-y-6">
                    {cultureArticles.slice(0, 1).map((a) => (
                      <NewsCard key={a.id} article={a} />
                    ))}
                    {cultureArticles.slice(1, 3).map((a) => (
                      <NewsCard key={a.id} article={a} variant="horizontal" />
                    ))}
                  </div>
                ) : (
                  <p className="font-serif text-lg italic text-muted-foreground">
                    A gráfica está silenciosa. Nenhum artigo encontrado.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===== OPINION SECTION — Editorial Quote Style ===== */}
        {opinionArticles.length > 0 && (
          <section className="container py-10 md:py-14">
            <SectionHeader title="Opiniões" href="/categoria/Opini%C3%B5es" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
              <div className="md:col-span-5">
                <div className="border-l-[3px] border-accent-red pl-6 py-2">
                  <p className="font-serif text-xl md:text-2xl italic leading-relaxed text-foreground/80">
                    "{opinionArticles[0].excerpt}"
                  </p>
                  <span className="mt-4 block meta-text text-accent-red">
                    {opinionArticles[0].author} · Opinião
                  </span>
                </div>
              </div>
              <div className="md:col-span-7">
                {opinionArticles.slice(0, 2).map((a) => (
                  <NewsCard key={a.id} article={a} variant="horizontal" />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== PROJECTS + INTERVIEWS GRID ===== */}
        {(projectArticles.length > 0 || interviewArticles.length > 0) && (
          <>
            <div className="editorial-rule" />
            <section className="container py-10 md:py-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {[...projectArticles, ...interviewArticles].slice(0, 3).map((a) => (
                  <NewsCard key={a.id} article={a} />
                ))}
              </div>
            </section>
          </>
        )}

        {/* ===== NEWSLETTER ===== */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
