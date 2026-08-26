import { useParams, Navigate, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DiagnosticCTA from '../components/DiagnosticCTA/DiagnosticCTA';
import { services } from '../data/siteData';
import './ServicePillar.css';

export default function ServicePillar() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.id === slug);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  return (
    <>
      <SEO
        title={service.title}
        description={service.description}
      />

      <section className="page-hero" id={`pillar-hero-${service.id}`}>
        <div className="container">
          <span className="tag">{service.icon} {service.title}</span>
          <h1>
            {service.title.split(' ')[0]}{' '}
            <span className="text-gradient">{service.title.split(' ').slice(1).join(' ') || service.title}</span>
          </h1>
          <p className="page-hero__subtitle">{service.description}</p>
          <div className="pillar-hero__actions">
            <Link to="/calculadora" className="btn btn--primary btn--large">
              Calcular investimento
            </Link>
            <Link to="/contato" className="btn btn--secondary btn--large">
              Falar com especialista
            </Link>
          </div>
        </div>
      </section>

      {/* Problems this service solves */}
      <section className="section" id={`pillar-problems-${service.id}`}>
        <div className="container">
          <div className="section__header">
            <span className="tag tag--red">Problemas que resolvemos</span>
            <h2>Sua empresa enfrenta esses desafios?</h2>
          </div>
          <div className="grid grid--2">
            {service.problems.map((problem, i) => (
              <div key={i} className="card problem-card">
                <span className="card__icon">⚠️</span>
                <p className="card__description" style={{ fontSize: '1rem', color: 'var(--color-text-primary)' }}>
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section pillar-features" id={`pillar-features-${service.id}`}>
        <div className="container">
          <div className="section__header">
            <span className="tag tag--green">O que entregamos</span>
            <h2>Funcionalidades e entregas</h2>
          </div>
          <div className="grid grid--3">
            {service.features.map((feature, i) => (
              <div key={i} className="card">
                <span className="card__icon">✅</span>
                <h4 className="card__title">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section" id={`pillar-tech-${service.id}`}>
        <div className="container">
          <div className="section__header">
            <span className="tag tag--cyan">Tecnologias</span>
            <h2>Stack que utilizamos</h2>
          </div>
          <div className="pillar-tech__tags">
            {service.technologies.map((tech) => (
              <span key={tech} className="pillar-tech__tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <DiagnosticCTA />
    </>
  );
}
