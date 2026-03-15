import Logo from "./Logo";
import { Link } from "react-router-dom";
import { categories } from "@/data/mockArticles";
import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* Pernambuco stripe */}
    <div className="editorial-rule-rainbow h-1.5" />

    <div className="container py-16 md:py-20">
      {/* Top section */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        <div className="max-w-sm">
          <Logo inverted size="default" />
          <p className="mt-5 font-sans text-sm text-background/45 leading-relaxed">
            O jornal digital da Escola José Glicério. Feito por alunos, para a comunidade escolar.
            Reportando o que importa desde Recife, Pernambuco.
          </p>
          <div className="flex gap-2 mt-5">
            <span className="w-8 h-1 bg-pernambuco-blue" />
            <span className="w-8 h-1 bg-pernambuco-yellow" />
            <span className="w-8 h-1 bg-pernambuco-red" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-14">
          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pernambuco-yellow/60 mb-5">
              Seções
            </h4>
            <div className="flex flex-col gap-2.5">
              {categories.slice(0, 5).map((cat) => (
                <Link
                  key={cat}
                  to={`/categoria/${encodeURIComponent(cat)}`}
                  className="font-sans text-[13px] text-background/50 hover:text-background transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pernambuco-yellow/60 mb-5">
              Mais
            </h4>
            <div className="flex flex-col gap-2.5">
              {categories.slice(5).map((cat) => (
                <Link
                  key={cat}
                  to={`/categoria/${encodeURIComponent(cat)}`}
                  className="font-sans text-[13px] text-background/50 hover:text-background transition-colors"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-pernambuco-yellow/60 mb-5">
              Contato
            </h4>
            <div className="flex flex-col gap-2.5 font-sans text-[13px] text-background/50">
              <span>Escola José Glicério</span>
              <span>Recife, PE, Brasil</span>
              <span className="flex items-center gap-2">
                <Phone size={13} />
                (81) 9 9999-9999
              </span>
              <span className="hover:text-pernambuco-yellow transition-colors cursor-pointer">
                jornal@glicerio.edu.br
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-px w-full bg-background/8 mt-14 mb-6" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="meta-text text-background/20">
          © 2026 Jornal Glicério · Todos os direitos reservados
        </span>
        <span className="meta-text text-background/20">
          Publicado em Recife, Pernambuco
        </span>
      </div>

      {/* Dev credit */}
      <div className="mt-6 pt-6 border-t border-background/5 flex justify-center">
        <span className="font-mono text-[11px] tracking-[0.08em]">
          Dev:{" "}
          <span className="font-bold dev-credit-cycle">
            Pedro Henrique S. de Carvalho (x16TheGod)
          </span>
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
