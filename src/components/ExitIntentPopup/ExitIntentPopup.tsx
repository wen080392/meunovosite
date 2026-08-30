import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './ExitIntentPopup.css';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    // Não mostrar no diagnóstico ou calculadora ou admin
    if (pathname === '/diagnostico' || pathname === '/calculadora' || pathname.startsWith('/resultado')) {
      return;
    }

    const hasSeenPopup = sessionStorage.getItem('vibe_tech_exit_popup');
    if (hasSeenPopup) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Se o mouse sair pelo topo (indicando intenção de sair)
      if (e.clientY <= 10) {
        setIsVisible(true);
        sessionStorage.setItem('vibe_tech_exit_popup', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div className="exit-popup-overlay animate-fade-in">
      <div className="exit-popup animate-fade-in-up">
        <button className="exit-popup__close" onClick={() => setIsVisible(false)} aria-label="Fechar">&times;</button>
        <span className="tag tag--green">Espere um pouco!</span>
        <h2>Não saia sem o seu <span className="text-gradient">Diagnóstico</span></h2>
        <p>Descubra em 2 minutos onde sua empresa está perdendo dinheiro por falta de automação.</p>
        <div className="exit-popup__actions">
          <button 
            className="btn btn--primary btn--large" 
            onClick={() => {
              setIsVisible(false);
              navigate('/diagnostico');
            }}
          >
            Fazer Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </div>
  );
}
