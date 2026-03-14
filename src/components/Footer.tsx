import Logo from "./Logo";
import { Link } from "react-router-dom";
import { categories } from "@/data/mockArticles";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-14 md:py-20">
      {/* Top section with logo */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
        <div className="max-w-xs">
          <Logo inverted />
          <p className="mt-4 font-sans text-sm text-background/50 leading-relaxed">
            O jornal digital da Escola José Glicério. Feito por alunos, para a comunidade escolar. Reportando o que importa desde Recife, Pernambuco.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-background/30 mb-4">
              Seções
            </h4>
            <div className="flex flex-col gap-2">
              {categories.slice(0, 5).map((cat) => (
                <Link
                  key={cat}
                  to={`/categoria/${encodeURIComponent(cat)}`}
                  className="font-sans text-[13px] text-background/60 hover:text-background transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-background/30 mb-4">
              Mais
            </h4>
            <div className="flex flex-col gap-2">
              {categories.slice(5).map((cat) => (
                <Link
                  key={cat}
                  to={`/categoria/${encodeURIComponent(cat)}`}
                  className="font-sans text-[13px] text-background/60 hover:text-background transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-background/30 mb-4">
              Contato
            </h4>
            <div className="flex flex-col gap-2 font-sans text-[13px] text-background/60">
              <span>Escola José Glicério</span>
              <span>Recife, PE, Brasil</span>
              <span>jornal@glicerio.edu.br</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-background/8 mt-12 mb-6" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="meta-text text-background/25">
          © 2026 Jornal Glicério · Todos os direitos reservados
        </span>
        <span className="meta-text text-background/25">
          Publicado em Recife, Pernambuco
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
