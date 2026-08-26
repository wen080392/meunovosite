import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-v3">
      <div className="footer-v3__bg-logo">V</div>
      
      <div className="container footer-v3__container">
        
        <div className="footer-v3__top">
          <h2 className="footer-v3__brand">VIBE TECH</h2>
          <p className="footer-v3__tagline">TECNOLOGIA QUE TRANSFORMA NEGÓCIOS.</p>
        </div>

        <div className="footer-v3__divider"></div>

        <div className="footer-v3__links-grid">
          <div className="footer-v3__col">
            <h4>SOLUÇÕES</h4>
            <Link to="/servicos">Sistemas</Link>
            <Link to="/servicos">Automação</Link>
            <Link to="/servicos">IA</Link>
            <Link to="/servicos">Cloud</Link>
          </div>
          
          <div className="footer-v3__col">
            <h4>EMPRESA</h4>
            <Link to="/sobre">Sobre</Link>
            <Link to="/portfolio">Portfólio</Link>
            <Link to="/contato">Contato</Link>
          </div>

          <div className="footer-v3__col">
            <h4>RECURSOS</h4>
            <Link to="/calculadora">Calculadora</Link>
            <Link to="/diagnostico">Diagnóstico</Link>
          </div>
        </div>

        <div className="footer-v3__divider"></div>

        <div className="footer-v3__bottom">
          <span>© 2026 Vibe Tech. Todos os direitos reservados.</span>
          <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem' }}>
            <Link to="/privacidade" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Política de Privacidade</Link>
            <Link to="/termos" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Termos de Uso</Link>
          </div>
          <span>Brasil</span>
        </div>

      </div>
    </footer>
  );
}
