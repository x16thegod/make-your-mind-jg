import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { categories } from "@/data/mockArticles";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${scrolled ? "shadow-[0_1px_20px_-6px_rgba(0,0,0,0.1)]" : ""}`}>
      {/* Top dateline */}
      <div className="border-b border-foreground/5 hidden md:block">
        <div className="container flex items-center justify-between py-1.5">
          <span className="meta-text capitalize">{currentDate}</span>
          <span className="meta-text">Escola José Glicério · Recife, PE</span>
        </div>
      </div>

      {/* Logo bar */}
      <div className="border-b border-foreground/10">
        <div className="container flex items-center justify-between py-3 md:py-5">
          <button
            onClick={() => { setMenuOpen(!menuOpen); setSearchOpen(false); }}
            className="lg:hidden p-2 -ml-2 headline-hover"
            aria-label="Menu"
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>

          <Link to="/" className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
            <Logo size="default" />
          </Link>

          <div className="flex items-center gap-1">
            <button
              onClick={() => { setSearchOpen(!searchOpen); setMenuOpen(false); }}
              className="p-2 -mr-2 headline-hover"
              aria-label="Buscar"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      {searchOpen && (
        <div className="border-b border-foreground/10 bg-muted/50 backdrop-blur-sm">
          <div className="container py-4 flex items-center gap-3">
            <Search size={16} className="text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Buscar artigos, autores, tópicos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent font-sans text-base outline-none placeholder:text-muted-foreground/60"
              autoFocus
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="meta-text shrink-0 hover:text-foreground transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <nav className="border-b border-foreground/10 hidden lg:block">
        <div className="container">
          <div className="flex items-center gap-0 overflow-x-auto -mx-1">
            {categories.map((cat, i) => (
              <Link
                key={cat}
                to={`/categoria/${encodeURIComponent(cat)}`}
                className="relative whitespace-nowrap font-sans text-[13px] font-semibold uppercase tracking-[0.06em] px-4 py-2.5 headline-hover group"
              >
                {cat}
                {i === 0 && (
                  <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-primary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[57px] z-50 bg-background/98 backdrop-blur-sm overflow-y-auto">
          <nav className="container py-8 flex flex-col gap-1">
            <span className="meta-text mb-4">Seções</span>
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/categoria/${encodeURIComponent(cat)}`}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-2xl font-bold py-2 headline-hover"
              >
                {cat}
              </Link>
            ))}
            <div className="editorial-rule mt-6 mb-4" />
            <span className="meta-text capitalize">{currentDate}</span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
