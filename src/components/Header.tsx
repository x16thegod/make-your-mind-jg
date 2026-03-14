import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { categories } from "@/data/mockArticles";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Top bar */}
      <div className="border-b border-foreground/5">
        <div className="container flex items-center justify-between py-2">
          <span className="meta-text hidden sm:block">{currentDate}</span>
          <span className="meta-text">Recife, Pernambuco</span>
          <span className="meta-text hidden md:block">Escola José Glicério</span>
        </div>
      </div>

      {/* Logo bar */}
      <div className="border-b border-foreground/10">
        <div className="container flex items-center justify-between py-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-1 headline-hover"
            aria-label="Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className="mx-auto lg:mx-0">
            <Logo size="large" />
          </Link>

          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-1 headline-hover"
            aria-label="Buscar"
          >
            <Search size={20} />
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-b border-foreground/10 bg-muted animate-fade-in">
          <div className="container py-3">
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent font-sans text-lg outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="border-b border-foreground/10 hidden lg:block">
        <div className="container flex items-center gap-6 py-2 overflow-x-auto">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/categoria/${encodeURIComponent(cat)}`}
              className="whitespace-nowrap font-sans text-sm font-semibold uppercase tracking-wide headline-hover"
            >
              {cat}
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden border-b border-foreground/10 bg-background animate-fade-in">
          <div className="container py-4 flex flex-col gap-3">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/categoria/${encodeURIComponent(cat)}`}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-base font-semibold uppercase tracking-wide headline-hover py-1"
              >
                {cat}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
