import SEO from '../components/SEO';
import DiagnosticCTA from '../components/DiagnosticCTA/DiagnosticCTA';
import './About.css';

export default function About() {
  return (
    <>
      <SEO
        title="Sobre a Vibe Tech"
        description="Conheça a Vibe Tech — empresa de tecnologia especializada em sistemas web, automação e inteligência artificial para empresas."
      />

      <section className="page-hero" id="about-hero">
        <div className="container">
          <span className="tag">Sobre nós</span>
          <h1>
            Tecnologia que <span className="text-gradient">transforma</span> empresas
          </h1>
          <p className="page-hero__subtitle">
            Somos uma empresa de tecnologia focada em criar soluções que geram resultados reais para nossos clientes.
          </p>
        </div>
      </section>

      <section className="section" id="about-mission">
        <div className="container container--narrow">
          <div className="about-content">
            <div className="about-block">
              <span className="tag tag--cyan">Nossa missão</span>
              <h2>Simplificar a tecnologia para empresas que querem crescer</h2>
              <p>
                Acreditamos que toda empresa, independente do tamanho, merece acesso a tecnologia
                de qualidade. Nossa missão é transformar processos manuais e ineficientes em sistemas
                inteligentes que geram economia, velocidade e escalabilidade.
              </p>
            </div>

            <div className="about-block">
              <span className="tag tag--green">Nosso diferencial</span>
              <h2>Usamos a tecnologia que vendemos</h2>
              <p>
                O próprio site da Vibe Tech é uma demonstração do que fazemos. Nossa calculadora de investimento,
                o diagnóstico empresarial e o funil de captação de leads foram construídos com as mesmas tecnologias
                que oferecemos aos nossos clientes. Isso é a melhor prova de que nossas soluções funcionam.
              </p>
            </div>

            <div className="about-values">
              <h2>Nossos valores</h2>
              <div className="grid grid--3">
                <div className="card">
                  <span className="card__icon">🎯</span>
                  <h4 className="card__title">Resultado primeiro</h4>
                  <p className="card__description">Cada linha de código é escrita pensando no resultado de negócio do cliente.</p>
                </div>
                <div className="card">
                  <span className="card__icon">🔧</span>
                  <h4 className="card__title">Sob medida</h4>
                  <p className="card__description">Nada de soluções genéricas. Cada projeto é personalizado para o seu negócio.</p>
                </div>
                <div className="card">
                  <span className="card__icon">🤝</span>
                  <h4 className="card__title">Parceria real</h4>
                  <p className="card__description">Não somos apenas fornecedores — somos parceiros estratégicos de tecnologia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DiagnosticCTA />
    </>
  );
}
