import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import SectionHeader from "@/components/SectionHeader";
import { getArticlesByCategory } from "@/data/mockArticles";

const CategoryPage = () => {
  const { name } = useParams();
  const categoryName = decodeURIComponent(name || "");
  const categoryArticles = getArticlesByCategory(categoryName);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-10 md:py-14">
        <SectionHeader title={categoryName} />

        {categoryArticles.length === 0 ? (
          <div className="py-24 text-center max-w-md mx-auto">
            <p className="font-serif text-2xl italic text-muted-foreground leading-relaxed">
              A gráfica está silenciosa.<br />Nenhum artigo encontrado nesta categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
            {/* First article large */}
            {categoryArticles[0] && (
              <div className="md:col-span-7">
                <NewsCard article={categoryArticles[0]} variant="large" />
              </div>
            )}
            {/* Remaining stacked */}
            {categoryArticles.length > 1 && (
              <div className="md:col-span-5 flex flex-col gap-6">
                {categoryArticles.slice(1).map((a) => (
                  <NewsCard key={a.id} article={a} variant="horizontal" />
                ))}
              </div>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
