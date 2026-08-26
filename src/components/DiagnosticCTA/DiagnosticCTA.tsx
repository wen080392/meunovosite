import { Link } from 'react-router-dom';
import './DiagnosticCTA.css';

interface DiagnosticCTAProps {
  variant?: 'default' | 'compact';
}

export default function DiagnosticCTA({ variant = 'default' }: DiagnosticCTAProps) {
  return (
    <section className={`diagnostic-cta ${variant === 'compact' ? 'diagnostic-cta--compact' : ''}`} id="diagnostic-cta">
      <div className="container">
        <div className="diagnostic-cta__content">
          <h2 className="diagnostic-cta__title">
            Sua empresa tem um processo que poderia ser{' '}
            <span className="text-gradient">melhor</span>?
          </h2>
          <p className="diagnostic-cta__description">
            Descubra onde sua empresa pode economizar tempo e dinheiro com tecnologia.
            Nosso diagnóstico gratuito analisa suas operações e indica oportunidades de automação.
          </p>
          <div className="diagnostic-cta__actions">
            <Link to="/diagnostico" className="btn btn--primary btn--large" id="cta-diagnostic-btn">
              Faça um diagnóstico
            </Link>
            <Link to="/calculadora" className="btn btn--secondary btn--large" id="cta-calculator-btn">
              Calcular investimento
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
