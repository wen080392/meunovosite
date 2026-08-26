import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DiagnosticCTA from '../components/DiagnosticCTA/DiagnosticCTA';
import { services } from '../data/siteData';
import './Services.css';

export default function Services() {
  return (
    <>
      <SEO
        title="Serviços | Vibe Tech"
        description="Sistemas web, automação, inteligência artificial, aplicativos, integrações e cloud & segurança. Conheça as soluções da Vibe Tech."
      />

      {/* HERO V3 */}
      <section className="services-hero-v3">
        <div className="container">
          <div className="services-hero-v3__content animate-fade-up">
            <span className="tag-v3">Nossos Serviços</span>
            <h1 className="services-hero-v3__title">
              Engenharia de software para <span className="text-gradient">operações complexas</span>.
            </h1>
            <p className="services-hero-v3__subtitle">
              Nós não montamos templates. Nós construímos a infraestrutura digital 
              que sustenta a escala, a automação e a segurança da sua empresa.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES LIST V3 */}
      <section className="services-list-v3">
        <div className="container">
          <div className="services-v3-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-panel-v3 animate-fade-in-up delay-${(index % 3) + 1}`}
                id={`service-${service.id}`}
              >
                <div className="service-panel-v3__glow"></div>
                
                <div className="service-panel-v3__header">
                  <div className="service-panel-v3__number">0{index + 1}</div>
                  <div className="service-panel-v3__icon">{service.icon}</div>
                </div>
                
                <h2 className="service-panel-v3__title">{service.title}</h2>
                <p className="service-panel-v3__description">{service.description}</p>
                
                <div className="service-panel-v3__features">
                  {service.features.map((feature) => (
                    <span key={feature} className="feature-pill-v3">{feature}</span>
                  ))}
                </div>
                
                <div className="service-panel-v3__action">
                  <Link to={service.slug} className="link-arrow-v3">
                    Conhecer solução →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiagnosticCTA />
    </>
  );
}
