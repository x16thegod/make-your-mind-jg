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

      <main className="container py-10">
        <SectionHeader title={categoryName} />

        {categoryArticles.length === 0 ? (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-muted-foreground italic">
              A gráfica está silenciosa. Nenhum artigo encontrado nesta categoria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
