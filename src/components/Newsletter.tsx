import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container py-12 text-center">
        <h2 className="font-serif text-3xl font-bold mb-2">Fique por dentro</h2>
        <p className="font-sans text-primary-foreground/70 mb-6 max-w-md mx-auto">
          Receba as últimas notícias do Jornal Glicério diretamente no seu e-mail.
        </p>
        {submitted ? (
          <p className="font-mono text-sm uppercase tracking-wider">
            ✓ Inscrição confirmada. Obrigado!
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="flex-1 px-4 py-3 bg-primary-foreground/10 border border-primary-foreground/20 font-sans text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-primary-foreground/50"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-accent-foreground font-mono text-xs font-bold uppercase tracking-wider hover:bg-accent/90 transition-colors"
            >
              Assinar
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
