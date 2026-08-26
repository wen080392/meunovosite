import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__container container">
        <Link to="/" className="navbar__logo" aria-label="Vibe Tech - Home">
          <img 
            src="/logo.png" 
            alt="Vibe Tech" 
            className="navbar__logo-img"
          />
        </Link>

        <div className={`navbar__links ${isOpen ? 'navbar__links--open' : ''}`}>
          <Link to="/" className={`navbar__link ${location.pathname === '/' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/servicos" className={`navbar__link ${location.pathname === '/servicos' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Serviços</Link>
          <Link to="/portfolio" className={`navbar__link ${location.pathname === '/portfolio' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Portfólio</Link>
          <Link to="/sobre" className={`navbar__link ${location.pathname === '/sobre' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Empresa</Link>
          <Link to="/contato" className={`navbar__link ${location.pathname === '/contato' ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Contato</Link>
          
          {/* Mobile CTA */}
          <div className="navbar__cta-mobile">
            <Link to="/calculadora" className="btn btn--primary" onClick={() => setIsOpen(false)}>Começar projeto</Link>
          </div>
        </div>

        <div className="navbar__actions">
          <Link to="/calculadora" className="btn btn--primary">
            Começar projeto
          </Link>
        </div>

        <button
          className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          id="navbar-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
