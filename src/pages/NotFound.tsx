import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Página não encontrada"
        description="A página que você procura não existe ou foi movida."
      />

      <section className="page-hero" id="not-found-hero" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', marginBottom: '0.5rem' }}>
            <span className="text-gradient">404</span>
          </h1>
          <p className="page-hero__subtitle" style={{ marginBottom: '2rem' }}>
            Ops! A página que você procura não existe ou foi movida.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn--primary">
              Voltar ao início
            </Link>
            <Link to="/contato" className="btn btn--secondary">
              Falar conosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
