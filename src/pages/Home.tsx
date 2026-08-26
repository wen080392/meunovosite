import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Home.css';
import LeadForm from '../components/LeadForm/LeadForm';

export default function Home() {
  return (
    <>
      <SEO
        title="Vibe Tech | Transformação Digital Premium"
        description="Software customizado, Inteligência Artificial e Automação de alto nível para operações complexas."
      />

      {/* 1. HERO IMERSIVO */}
      <section className="hero-v3">
        <div className="glowing-orb"></div>
        <div className="container hero-v3__container">
          
          {/* Lado Esquerdo: Tipografia Colossal */}
          <div className="hero-v3__content animate-fade-up">
            <h1 className="hero-v3__title">
              Tecnologia que transforma negócios.
            </h1>
            <p className="hero-v3__subtitle">
              Sistemas inteligentes, automação e IA desenvolvidos para transformar operações complexas em negócios mais eficientes, escaláveis e preparados para o futuro.
            </p>
            <div className="hero-v3__actions">
              <Link to="/calculadora" className="btn btn--primary">
                Começar um projeto →
              </Link>
              <Link to="/servicos" className="btn btn--secondary">
                Explorar Soluções
              </Link>
            </div>
          </div>

          {/* Lado Direito: ConnectionGraph Animado */}
          <div className="hero-v3__visual">
            <div className="connection-graph">
              <div className="cg-node cg-node--ai">
                <span className="cg-dot"></span> AI ENGINE
              </div>
              
              <div className="cg-branch cg-branch--top"></div>
              
              <div className="cg-row">
                <div className="cg-node cg-node--auto">AUTOMATION</div>
                <div className="cg-bridge"></div>
                <div className="cg-node cg-node--data">DATA CORE</div>
              </div>

              <div className="cg-branch cg-branch--mid-left"></div>
              <div className="cg-branch cg-branch--mid-right"></div>
              
              <div className="cg-node cg-node--center">
                <div className="cg-pulse"></div>
                VIBE TECH
              </div>

              <div className="cg-branch cg-branch--bottom"></div>
              
              <div className="cg-row">
                <div className="cg-node cg-node--cloud">CLOUD</div>
                <div className="cg-bridge-invisible"></div>
                <div className="cg-node cg-node--systems">SYSTEMS</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Lead Capture Form */}
      <LeadForm />

      {/* 2. FAIXA DE TECNOLOGIAS (MARQUEE) */}
      <div className="tech-marquee">
        <div className="tech-marquee__track">
          <span className="tech-item">REACT</span>
          <span className="tech-item">NODE.JS</span>
          <span className="tech-item">PYTHON</span>
          <span className="tech-item">AWS</span>
          <span className="tech-item">POSTGRESQL</span>
          <span className="tech-item">DOCKER</span>
          <span className="tech-item">OPENAI</span>
          <span className="tech-item">N8N</span>
          {/* Duplicate for infinite loop */}
          <span className="tech-item">REACT</span>
          <span className="tech-item">NODE.JS</span>
          <span className="tech-item">PYTHON</span>
          <span className="tech-item">AWS</span>
          <span className="tech-item">POSTGRESQL</span>
          <span className="tech-item">DOCKER</span>
          <span className="tech-item">OPENAI</span>
          <span className="tech-item">N8N</span>
        </div>
      </div>

      {/* 2.5 TRUSTED BY (SOCIAL PROOF) */}
      <section className="trusted-by-v3">
        <div className="container">
          <p className="trusted-by__label">EMPRESAS QUE CONFIAM NA VIBE TECH</p>
          <div className="trusted-by__logos">
            {/* TODO: Substituir por logos de clientes reais */}
            <div className="tb-logo">Nexus Corp</div>
            <div className="tb-logo">GlobalFin</div>
            <div className="tb-logo">TechLogistics</div>
            <div className="tb-logo">AgroSmart</div>
            <div className="tb-logo">HealthDigital</div>
          </div>
        </div>
      </section>

      {/* 3. O PARADIGMA (ANTES / DEPOIS) */}
      <section className="paradigm section">
        <div className="container">
          <h2 className="section-title text-center">Seu negócio está crescendo.</h2>
          
          <div className="paradigm__comparison">
            <div className="paradigm__before">
              <span className="paradigm__label">ANTES</span>
              <div className="flow-item">Planilhas</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item">WhatsApp</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item">Processos manuais</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item flow-item--error">Erros</div>
              <div className="flow-arrow">↓</div>
              <div className="flow-item flow-item--error">Tempo perdido</div>
            </div>

            <div className="paradigm__vs">→</div>

            <div className="paradigm__after">
              <span className="paradigm__label paradigm__label--cyan">O PADRÃO VIBE TECH</span>
              <div className="vibe-mesh">
                <div className="mesh-node">IA</div>
                <div className="mesh-row">
                  <div className="mesh-node">Sistemas</div>
                  <div className="mesh-arrow">↔</div>
                  <div className="mesh-node mesh-node--center">VIBE TECH</div>
                  <div className="mesh-arrow">↔</div>
                  <div className="mesh-node">Automação</div>
                </div>
                <div className="mesh-node">Data</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS ASSIMÉTRICOS */}
      <section className="services-v3 section">
        <div className="container">
          <div className="services-v3__grid">
            
            {/* Bloco 01 */}
            <div className="service-block">
              <div className="service-block__header">
                <span className="service-num">01</span>
                <h3>SISTEMAS WEB</h3>
              </div>
              <div className="service-block__mockup">
                <div className="mockup-window">
                  <div className="mockup-header"><span></span><span></span><span></span></div>
                  <div className="mockup-body">
                    <div className="mockup-sidebar"></div>
                    <div className="mockup-content">
                      <div className="mockup-line" style={{width: '40%'}}></div>
                      <div className="mockup-line" style={{width: '70%'}}></div>
                      <div className="mockup-line" style={{width: '90%'}}></div>
                      <div className="mockup-box"></div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="service-block__desc">Plataformas, SaaS, sistemas administrativos e dashboards sob medida.</p>
              <Link to="/servicos" className="service-link">EXPLORAR →</Link>
            </div>

            {/* Bloco 02 */}
            <div className="service-block service-block--offset">
              <div className="service-block__header">
                <span className="service-num">02</span>
                <h3>INTELIGÊNCIA ARTIFICIAL</h3>
              </div>
              <div className="service-block__mockup">
                <div className="mockup-ai">
                  <div className="ai-core"></div>
                  <div className="ai-ring ai-ring-1"></div>
                  <div className="ai-ring ai-ring-2"></div>
                </div>
              </div>
              <p className="service-block__desc">Agentes cognitivos, processamento de linguagem natural e visão computacional.</p>
              <Link to="/servicos" className="service-link">EXPLORAR →</Link>
            </div>

            {/* Bloco 03 */}
            <div className="service-block">
              <div className="service-block__header">
                <span className="service-num">03</span>
                <h3>AUTOMAÇÃO</h3>
              </div>
              <div className="service-block__mockup">
                <div className="mockup-workflow">
                  <div className="wf-node"></div><div className="wf-line"></div>
                  <div className="wf-node"></div><div className="wf-line"></div>
                  <div className="wf-node wf-node--active"></div>
                </div>
              </div>
              <p className="service-block__desc">Workflows inteligentes que integram APIs e eliminam intervenção humana.</p>
              <Link to="/servicos" className="service-link">EXPLORAR →</Link>
            </div>

            {/* Bloco 04 */}
            <div className="service-block service-block--offset">
              <div className="service-block__header">
                <span className="service-num">04</span>
                <h3>NUVEM E SEGURANÇA</h3>
              </div>
              <div className="service-block__mockup">
                <div className="mockup-cloud">
                  <div className="cloud-layer"></div>
                  <div className="cloud-layer cloud-layer--mid"></div>
                  <div className="cloud-layer cloud-layer--top"></div>
                </div>
              </div>
              <p className="service-block__desc">Infraestrutura escalável na AWS preparada para alta demanda e proteção de dados.</p>
              <Link to="/servicos" className="service-link">EXPLORAR →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. NÚMEROS GIGANTES (IMPACTO) */}
      <section className="impact-numbers section">
        <div className="container text-center">
          <h2 className="section-title text-muted mb-16">Tecnologia construída para gerar impacto.</h2>
          <div className="impact-grid">
            <div className="impact-item">
              <span className="impact-huge">01<span className="impact-plus">+</span></span>
              <span className="impact-label">PRODUTOS</span>
            </div>
            <div className="impact-item">
              <span className="impact-huge">03<span className="impact-plus">+</span></span>
              <span className="impact-label">CASES</span>
            </div>
            <div className="impact-item">
              <span className="impact-huge">06</span>
              <span className="impact-label">ÁREAS DE TECNOLOGIA</span>
            </div>
            <div className="impact-item">
              <span className="impact-huge">∞</span>
              <span className="impact-label">POSSIBILIDADES</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PORTFÓLIO ELEVADO */}
      <section className="portfolio-v3 section">
        <div className="container">
          
          <div className="portfolio-giant-card">
            <div className="pgc-image pgc-crypto">
              <div className="pgc-overlay">
                <span className="pgc-tag">SISTEMA DE ALTO DESEMPENHO</span>
                <h3 className="pgc-title">CRYPTOARB PRO</h3>
                <div className="pgc-tech">JAVA &nbsp; AWS &nbsp; REAL-TIME &nbsp; HIGH PERFORMANCE</div>
              </div>
            </div>
            <div className="pgc-footer">
              <p>Plataforma de processamento e monitoramento de arbitragem.</p>
              <Link to="/portfolio" className="btn btn--secondary">VER CASO →</Link>
            </div>
          </div>

          <div className="portfolio-giant-card mt-16">
            <div className="pgc-image pgc-cloud">
              <div className="pgc-overlay">
                <span className="pgc-tag">PLATAFORMA DEVSECOPS</span>
                <h3 className="pgc-title">CLOUDGUARDIAN</h3>
                <div className="pgc-tech">PYTHON &nbsp; REACT &nbsp; DOCKER &nbsp; AWS</div>
              </div>
            </div>
            <div className="pgc-footer">
              <p>Gestão e monitoramento inteligente de infraestrutura em nuvem.</p>
              <Link to="/portfolio" className="btn btn--secondary">VER CASO →</Link>
            </div>
          </div>

        </div>
      </section>

      {/* 7. O MÉTODO (POR QUE VIBE TECH) */}
      <section className="method-v3 section">
        <div className="container text-center">
          <h2 className="section-title mb-16">Nossa Metodologia</h2>
          <div className="method-line">
            <div className="method-step">
              <span className="ms-title">PENSAR</span>
              <span className="ms-desc">Estratégia e Arquitetura</span>
            </div>
            <div className="ms-divider"></div>
            <div className="method-step">
              <span className="ms-title">CONSTRUIR</span>
              <span className="ms-desc">Desenvolvimento Ágil</span>
            </div>
            <div className="ms-divider"></div>
            <div className="method-step">
              <span className="ms-title">AUTOMATIZAR</span>
              <span className="ms-desc">Eficiência de Processos</span>
            </div>
            <div className="ms-divider"></div>
            <div className="method-step">
              <span className="ms-title">ESCALA</span>
              <span className="ms-desc">Crescimento Sustentável</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WIDGETS PREMIUM (CALCULADORA & DIAGNÓSTICO PREVIEW) */}
      <section className="widgets-v3 section">
        <div className="container">
          <div className="widgets-grid">
            <div className="widget-card">
              <span className="widget-label">ESTIMATIVA IMEDIATA</span>
              <h3 className="widget-title">Quanto custa transformar sua ideia em tecnologia?</h3>
              <div className="widget-fake-ui">
                <div className="fake-btn">SISTEMA</div>
                <div className="fake-btn">IA</div>
                <div className="fake-btn">AUTOMAÇÃO</div>
              </div>
              <Link to="/calculadora" className="btn btn--primary mt-8">INICIAR CÁLCULO →</Link>
            </div>

            <div className="widget-card widget-card--dark">
              <span className="widget-label">ANÁLISE DE MATURIDADE</span>
              <h3 className="widget-title">Descubra o índice de transformação da sua empresa.</h3>
              <div className="widget-fake-bars">
                <div className="fake-bar"><div style={{width: '92%'}}></div><span>AUTOMAÇÃO 92%</span></div>
                <div className="fake-bar"><div style={{width: '76%'}}></div><span>IA 76%</span></div>
              </div>
              <Link to="/diagnostico" className="btn btn--secondary mt-8">FAZER DIAGNÓSTICO →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8.5 DEPOIMENTOS (SOCIAL PROOF) */}
      <section className="testimonials-v3 section">
        <div className="container">
          <h2 className="section-title text-center mb-16">O que dizem nossos clientes</h2>
          <div className="testimonials-grid">
            {/* TODO: Substituir por depoimentos reais */}
            <div className="testimonial-card">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-quote">"A Vibe Tech automatizou todo o nosso fluxo operacional. O que levávamos horas fazendo, agora roda 100% automático no servidor."</p>
              <div className="tc-author">
                <div className="tc-avatar">RC</div>
                <div>
                  <h4 className="tc-name">Roberto Carvalho</h4>
                  <p className="tc-role">Diretor de Operações, Nexus Corp</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-quote">"O sistema sob medida que entregaram mudou a cara do nosso atendimento. Estabilidade impecável e a equipe de suporte é muito rápida."</p>
              <div className="tc-author">
                <div className="tc-avatar">MA</div>
                <div>
                  <h4 className="tc-name">Marina Alves</h4>
                  <p className="tc-role">CEO, TechLogistics</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-quote">"Nosso ROI pagou o projeto nos três primeiros meses. A inteligência artificial integrada ao nosso CRM foi o grande diferencial."</p>
              <div className="tc-author">
                <div className="tc-avatar">JM</div>
                <div>
                  <h4 className="tc-name">João Mendonça</h4>
                  <p className="tc-role">Head de Inovação, GlobalFin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. GIANT CTA FINAL */}
      <section className="giant-cta-v3">
        <div className="giant-cta__bg">VIBE TECH</div>
        <div className="container giant-cta__container">
          <h2 className="giant-cta__title">Seu próximo sistema</h2>
          <p className="giant-cta__desc">Conte-nos o problema. A Vibe Tech transforma a ideia em tecnologia.</p>
          <Link to="/calculadora" className="btn btn--primary btn--massive">
            COMEÇAR PROJETO →
          </Link>
        </div>
      </section>
    </>
  );
}
