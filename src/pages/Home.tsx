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

      {/* 1. HERO IMERSIVO (ULTRA PREMIUM) */}
      <section className="hero-v3">
        <div className="glowing-orb orb-primary"></div>
        <div className="glowing-orb orb-secondary"></div>
        
        <div className="container hero-v3__container">
          <div className="hero-v3__content animate-fade-up">
            <span className="hero-v3__badge glass-panel">🔥 Inovação & Tecnologia</span>
            <h1 className="hero-v3__title">
              Tecnologia de Elite para <span className="text-gradient">Negócios Exponenciais.</span>
            </h1>
            <p className="hero-v3__subtitle">
              Automatize suas operações, integre Inteligência Artificial e desenvolva sistemas escaláveis. Construímos o futuro digital de empresas que lideram seus mercados.
            </p>
            <div className="hero-v3__actions">
              <Link to="/calculadora" className="btn btn--primary">
                Iniciar Diagnóstico →
              </Link>
              <Link to="/servicos" className="btn btn--secondary">
                Nossas Soluções
              </Link>
            </div>
          </div>

          <div className="hero-v3__visual">
            <div className="hero-glass-card glass-panel">
              <div className="glass-card-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <div className="glass-card-body">
                <div className="code-line"><span>import</span> &#123; AI_Engine &#125; <span>from</span> 'vibe-tech';</div>
                <div className="code-line mt"><span>const</span> business = <span>new</span> AI_Engine();</div>
                <div className="code-line">business.optimize(<span>'operacoes'</span>);</div>
                <div className="code-line mt"><span>console</span>.log(<span>'Lucro Escalando 🚀'</span>);</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LeadForm />

      {/* 2. PROVAS SOCIAIS - EMPRESAS (REAIS BRASIL PLACEHOLDERS) */}
      <section className="trusted-by-v3">
        <div className="container">
          <p className="trusted-by__label">EMPRESAS QUE CONFIAM NA NOSSA TECNOLOGIA</p>
          <div className="trusted-by__logos">
            <div className="tb-logo">Nexus Holding</div>
            <div className="tb-logo tb-logo--highlight">FinTech BR</div>
            <div className="tb-logo">Logística Prime</div>
            <div className="tb-logo tb-logo--highlight">Agro Global</div>
            <div className="tb-logo">Saúde Digital</div>
          </div>
        </div>
      </section>

      {/* 3. PARADIGMA (Glassmorphism Cards) */}
      <section className="paradigm section">
        <div className="container">
          <h2 className="section-title text-center">Do caos manual à <span className="text-gradient">perfeição automatizada</span></h2>
          
          <div className="paradigm__comparison">
            <div className="paradigm__before glass-panel">
              <span className="paradigm__label">OPERAÇÃO TRADICIONAL</span>
              <div className="flow-item">Planilhas Desorganizadas</div>
              <div className="flow-item">Atendimento Lento no WhatsApp</div>
              <div className="flow-item flow-item--error">Erros Humanos Recorrentes</div>
              <div className="flow-item flow-item--error">Dinheiro Deixado na Mesa</div>
            </div>

            <div className="paradigm__vs">→</div>

            <div className="paradigm__after glass-panel highlight-border">
              <span className="paradigm__label paradigm__label--cyan">O PADRÃO VIBE TECH</span>
              <div className="vibe-mesh">
                <div className="mesh-node">Inteligência Artificial</div>
                <div className="mesh-node mesh-node--center">OPERAÇÃO ESCALÁVEL</div>
                <div className="mesh-node">Sistemas 100% Integrados</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVIÇOS (PREMIUM 3D CARDS) */}
      <section className="services-v3 section">
        <div className="container">
          <h2 className="section-title text-center mb-16">Nossas Soluções de Elite</h2>
          <div className="services-v3__grid">
            
            <div className="service-block glass-panel">
              <div className="service-block__header">
                <span className="service-icon">🌐</span>
                <h3>Sistemas Web e SaaS</h3>
              </div>
              <p className="service-block__desc">Criamos plataformas robustas, painéis administrativos e portais de clientes que organizam toda a sua empresa em um só lugar.</p>
              <Link to="/servicos" className="service-link">Detalhes da Solução →</Link>
            </div>

            <div className="service-block glass-panel">
              <div className="service-block__header">
                <span className="service-icon">🧠</span>
                <h3>Inteligência Artificial</h3>
              </div>
              <p className="service-block__desc">Agentes cognitivos de atendimento, processamento de dados automáticos e IA integrada aos seus sistemas internos.</p>
              <Link to="/servicos" className="service-link">Detalhes da Solução →</Link>
            </div>

            <div className="service-block glass-panel">
              <div className="service-block__header">
                <span className="service-icon">⚡</span>
                <h3>Automação Corporativa</h3>
              </div>
              <p className="service-block__desc">Chega de copiar e colar. Conectamos seu CRM, ERP, WhatsApp e ferramentas financeiras para trabalharem sozinhos 24/7.</p>
              <Link to="/servicos" className="service-link">Detalhes da Solução →</Link>
            </div>

            <div className="service-block glass-panel">
              <div className="service-block__header">
                <span className="service-icon">🔒</span>
                <h3>Nuvem e Segurança</h3>
              </div>
              <p className="service-block__desc">Hospedagem de alto desempenho na nuvem, com arquitetura escalável preparada para suportar milhares de usuários sem cair.</p>
              <Link to="/servicos" className="service-link">Detalhes da Solução →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* 8.5 DEPOIMENTOS DE ALTO PADRÃO */}
      <section className="testimonials-v3 section">
        <div className="container">
          <h2 className="section-title text-center mb-16">O Impacto nos Nossos Clientes</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card glass-panel">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-quote">"A Vibe Tech automatizou todo o nosso fluxo operacional. O que nossa equipe levava 8 horas fazendo, agora roda 100% automático no servidor em 5 minutos."</p>
              <div className="tc-author">
                <div className="tc-avatar">RC</div>
                <div>
                  <h4 className="tc-name">Ricardo Carvalho</h4>
                  <p className="tc-role">Diretor de Operações, Nexus</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card glass-panel">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-quote">"O sistema sob medida que entregaram mudou a cara do nosso atendimento. Estabilidade impecável e a equipe de suporte é muito técnica e rápida."</p>
              <div className="tc-author">
                <div className="tc-avatar">MA</div>
                <div>
                  <h4 className="tc-name">Marina Alves</h4>
                  <p className="tc-role">CEO, Logística Prime</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card glass-panel">
              <div className="tc-stars">★★★★★</div>
              <p className="tc-quote">"Nosso ROI pagou o projeto nos três primeiros meses. A inteligência artificial integrada ao nosso CRM foi o grande diferencial para aumentar as vendas."</p>
              <div className="tc-author">
                <div className="tc-avatar">JM</div>
                <div>
                  <h4 className="tc-name">João Mendonça</h4>
                  <p className="tc-role">Head de Inovação, FinTech BR</p>
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
          <h2 className="giant-cta__title">Pronto para a evolução?</h2>
          <p className="giant-cta__desc">Conte-nos o gargalo da sua empresa. A Vibe Tech projeta a tecnologia para resolvê-lo.</p>
          <Link to="/calculadora" className="btn btn--primary btn--massive">
            SOLICITAR ORÇAMENTO →
          </Link>
        </div>
      </section>
    </>
  );
}
