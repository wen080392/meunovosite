import { useLocation } from 'react-router-dom';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  const { pathname } = useLocation();
  const phoneNumber = '5598985170034';
  
  let baseMessage = 'Olá, gostaria de saber mais sobre os serviços da Vibe Tech';
  if (pathname === '/calculadora') {
    baseMessage = 'Olá, vi a calculadora de vocês e tenho uma dúvida sobre a estimativa de projeto!';
  } else if (pathname === '/diagnostico') {
    baseMessage = 'Olá, fiz o diagnóstico de automação no site e queria uma ajuda especializada!';
  } else if (pathname.startsWith('/servicos')) {
    baseMessage = 'Olá, vi os serviços no site e gostaria de conversar sobre um projeto!';
  }
  
  const message = encodeURIComponent(baseMessage);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Falar pelo WhatsApp"
      id="whatsapp-float-btn"
    >
      <svg viewBox="0 0 32 32" className="whatsapp-float__icon">
        <path
          d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.14 6.744 3.07 9.378L1.06 31.29l6.166-1.975A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0Zm9.32 22.608c-.39 1.1-2.268 2.1-3.168 2.232-.814.12-1.844.168-2.974-.188a27.37 27.37 0 0 1-2.694-1c-4.736-2.044-7.828-6.836-8.066-7.152-.238-.316-1.948-2.592-1.948-4.944s1.232-3.508 1.67-3.988c.438-.48.954-.6 1.274-.6.316 0 .636.002.914.016.294.014.686-.112 1.074.82.39.936 1.326 3.232 1.444 3.468.114.238.188.514.036.828-.152.316-.23.512-.458.79-.228.278-.48.62-.684.832-.228.238-.468.496-.2.972.268.48 1.188 1.96 2.552 3.176 1.75 1.56 3.226 2.044 3.682 2.28.458.238.724.2.99-.118.268-.316 1.144-1.334 1.448-1.794.306-.458.61-.38 1.03-.228.418.152 2.664 1.256 3.122 1.486.458.228.762.344.876.532.114.188.114 1.09-.276 2.188Z"
          fill="currentColor"
        />
      </svg>
      <span className="whatsapp-float__pulse"></span>
    </a>
  );
}
