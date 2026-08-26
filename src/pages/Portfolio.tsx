import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DiagnosticCTA from '../components/DiagnosticCTA/DiagnosticCTA';
import { portfolio } from '../data/siteData';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfólio | Vibe Tech"
        description="Conheça nossos projetos que transformam desafios reais em soluções tecnológicas avançadas."
      />

      {/* HERO V3 */}
      <section className="portfolio-hero-v3">
        <div className="container">
          <div className="portfolio-hero-v3__content animate-fade-up">
            <span className="tag-v3">Casos de Estudo</span>
            <h1 className="portfolio-hero-v3__title">
              Problemas Reais.<br/>
              <span className="text-gradient">Tecnologia Absoluta.</span>
            </h1>
            <p className="portfolio-hero-v3__subtitle">
              Veja na prática como nossos sistemas escaláveis, arquiteturas em nuvem e inteligência artificial resolvem gargalos estruturais e impulsionam o crescimento corporativo.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS DOSSIER V3 */}
      <section className="portfolio-dossier-v3">
        <div className="container">
          <div className="dossier-list">
            {portfolio.map((project, index) => (
              <article
                key={project.id}
                className="dossier-item animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="dossier-item__header">
                  <div className="dossier-item__meta">
                    <span className="dossier-item__number">0{index + 1}</span>
                    <span className="dossier-item__category">Project Dossier</span>
                  </div>
                  <h2 className="dossier-item__title">{project.title}</h2>
                </div>

                <div className="dossier-item__grid">
                  {/* Problem Panel */}
                  <div className="dossier-panel dossier-panel--problem">
                    <div className="dossier-panel__label">
                      <span className="indicator indicator--red"></span> O Problema
                    </div>
                    <p>{project.problem}</p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="dossier-arrow">
                    <div className="dossier-arrow__line"></div>
                    <div className="dossier-arrow__head"></div>
                  </div>

                  {/* Solution Panel */}
                  <div className="dossier-panel dossier-panel--solution">
                    <div className="dossier-panel__label">
                      <span className="indicator indicator--green"></span> A Solução
                    </div>
                    <p>{project.solution}</p>
                  </div>
                </div>

                <div className="dossier-item__footer">
                  <div className="dossier-tech-stack">
                    <span className="dossier-tech-label">Stack:</span>
                    {project.stack.map((tech) => (
                      <span key={tech} className="feature-pill-v3">{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DiagnosticCTA />
    </>
  );
}
