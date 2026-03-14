import Logo from "./Logo";
import { Link } from "react-router-dom";
import { categories } from "@/data/mockArticles";

const Footer = () => (
  <footer className="bg-foreground text-background mt-16">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="mb-4 [&_span]:text-background [&_.meta-text]:text-background/50">
            <Logo />
          </div>
          <p className="font-sans text-sm text-background/70 leading-relaxed">
            O jornal digital da Escola José Glicério. Feito por alunos, para
            a comunidade escolar. Reportando o que importa desde Recife,
            Pernambuco.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-background/50 mb-4">
            Seções
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/categoria/${encodeURIComponent(cat)}`}
                className="font-sans text-sm text-background/70 hover:text-background transition-colors"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-background/50 mb-4">
            Contato
          </h4>
          <div className="space-y-2 font-sans text-sm text-background/70">
            <p>Escola José Glicério</p>
            <p>Recife, Pernambuco, Brasil</p>
            <p>jornal@glicerio.edu.br</p>
          </div>
        </div>
      </div>

      <div className="editorial-rule mt-10 mb-6 !bg-background/10" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="meta-text text-background/40">
          © 2026 Jornal Glicério. Todos os direitos reservados.
        </span>
        <span className="meta-text text-background/40">
          Publicado em Recife
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
